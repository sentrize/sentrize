"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Boots the template's Webflow/GSAP runtime and keeps it alive across
 * client-side navigations.
 *
 * Two modes:
 *  - Page instances (generated into each converted page) just REGISTER the
 *    page's config (wf page id, head vendor files, extra body class).
 *    Child effects fire before parent effects, so registration always lands
 *    before the driver runs.
 *  - The single `driver` instance in the root layout does the work, re-running
 *    on every pathname change:
 *      1. first visit: wait for window load, patch late DOMContentLoaded/load
 *         listeners, then boot everything;
 *      2. every visit: execute the new page's inert <script type="text/template">
 *         nodes in document order (inline code runs, src placeholders load
 *         sequentially, already-loaded files are skipped);
 *      3. client navigations: reset transient html/body state and re-init
 *         Webflow interactions for the new DOM.
 */

type PageConfig = { wfPage?: string; scripts?: string[]; bodyClass?: string };

declare global {
  interface Window {
    __tplPage?: PageConfig | null;
    __tplLoaded?: Set<string>;
    __tplBooted?: boolean;
    __tplBodyExtra?: string[];
    __tplWfDrain?: number;
    __tplChain?: Promise<void>;
    __tplBooting?: boolean;
    __tplLateQ?: Array<() => void>;
    __tplDefineGuarded?: boolean;
    wf?: { r: Array<() => void>; ready: (t: () => void) => void };
    Webflow?: {
      destroy?: () => void;
      ready?: () => void;
      require?: (m: string) => { init?: () => void } | undefined;
    };
    ScrollTrigger?: { refresh?: () => void };
  }
}

const HOME_WF_PAGE = "660189f45f9033dd87f82a27";

// Vendor set the shared chrome (nav, footer, animations) depends on.
const CORE_HEAD = [
  "/assets/vendor/finsweet-scrolldisable.js",
  "/assets/vendor/flowbase-tooltip.min.js",
];
const CORE_BODY = [
  "/assets/vendor/swiper12-bundle.min.js",
  "/assets/vendor/jquery-3.5.1.min.js",
  "/assets/js/sentrize-tonik.schunk.6739ee8d3353008c.js",
  "/assets/js/sentrize-tonik.schunk.d0183f7a3728c263.js",
  "/assets/js/sentrize-tonik.958e3bbd.b4492d9062963867.js",
  "/assets/vendor/gsap.min.js",
  "/assets/vendor/ScrollTrigger.min.js",
  "/assets/vendor/SplitText.min.js",
  "/assets/vendor/split-type.min.js",
];

function loadSrc(src: string): Promise<void> {
  const loaded = (window.__tplLoaded ??= new Set());
  if (loaded.has(src)) return Promise.resolve();
  loaded.add(src);
  return new Promise((res) => {
    const s = document.createElement("script");
    // finsweet-attributes is an ES module configured via script-tag attributes.
    // Its code-split chunks only exist on the CDN (the vendored copy shipped
    // without them), so load it from jsDelivr like the original live site did.
    if (/finsweet-attributes\.js$/.test(src)) {
      s.type = "module";
      s.setAttribute("fs-list", "");
      s.setAttribute("fs-readtime", "");
      s.src = "https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js";
    } else {
      s.src = src;
    }
    s.onload = () => res();
    s.onerror = () => res();
    document.body.appendChild(s);
  });
}

function patchLateListeners() {
  // Replays DOMContentLoaded/load for listeners registered after those events
  // fired. Invocation is ALWAYS asynchronous (macrotask): a synchronous call
  // can recurse without bound when a handler registers another handler, which
  // hangs the tab until Chrome kills it ("This page couldn't load").
  const patch = (target: Window | Document) => {
    const orig = target.addEventListener.bind(target);
    (target as Window).addEventListener = ((
      type: string,
      fn: EventListenerOrEventListenerObject,
      opts?: boolean | AddEventListenerOptions
    ) => {
      if ((type === "DOMContentLoaded" || type === "load") && document.readyState === "complete") {
        const replay = () => {
          try {
            const ev = new Event(type);
            if (typeof fn === "function") fn.call(target, ev);
            else fn.handleEvent(ev);
          } catch {
            /* best-effort replay */
          }
        };
        // While a boot is in flight, hold replays until every vendor file is
        // in — otherwise a handler can run before the library it needs.
        if (window.__tplBooting) (window.__tplLateQ ??= []).push(replay);
        else setTimeout(replay, 0);
        return;
      }
      orig(type, fn as EventListener, opts);
    }) as typeof target.addEventListener;
  };
  patch(window);
  patch(document);
}

async function runPendingTemplates() {
  // React owns the template nodes: never remove or replace them (mutating
  // React-rendered DOM breaks unmounting and can take the whole layout down).
  // Mark them done and run the code via detached script elements instead.
  const tpls = Array.from(
    document.querySelectorAll<HTMLScriptElement>(
      'script[type="text/template"][data-tpl]:not([data-tpl-done])'
    )
  );
  for (const tpl of tpls) {
    tpl.setAttribute("data-tpl-done", "1");
    const src = tpl.getAttribute("data-tpl-src");
    if (src) {
      await loadSrc(src);
      continue;
    }
    const code = tpl.textContent ?? "";
    const trimmed = code.trim();
    if (!trimmed) continue;
    // Data blobs (JSON configs) must not execute as scripts.
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) continue;
    const s = document.createElement("script");
    if (/^\s*(import|export)[\s{("'*]/m.test(trimmed)) {
      s.type = "module";
      s.textContent = code;
    } else {
      // IIFE-wrap classic scripts: their top-level const/let would otherwise
      // collide when a page is visited twice in one session.
      s.textContent = `(function () {\n${code}\n})();`;
    }
    document.body.appendChild(s);
  }
}

export default function TemplateScripts({
  wfPage,
  scripts,
  bodyClass,
  driver,
}: {
  wfPage?: string;
  scripts?: string[];
  bodyClass?: string;
  driver?: boolean;
}) {
  const pathname = usePathname();

  // Page mode: register this page's config for the layout driver.
  useEffect(() => {
    if (!driver) window.__tplPage = { wfPage, scripts, bodyClass };
  });

  // Driver mode: boot / re-init per navigation.
  useEffect(() => {
    if (!driver) return;
    let cancelled = false;

    const run = async () => {
      const doc = document;
      const cfg: PageConfig = window.__tplPage ?? {};
      window.__tplPage = null;
      const wasBooted = window.__tplBooted === true;
      window.__tplBooting = true;

      // Template scripts re-run per visit; a second customElements.define
      // with the same name throws, so make defines idempotent once.
      if (!window.__tplDefineGuarded) {
        window.__tplDefineGuarded = true;
        const origDefine = customElements.define.bind(customElements);
        customElements.define = (name, ctor, opts) => {
          if (!customElements.get(name)) origDefine(name, ctor, opts);
        };
      }

      // html/body per-page state
      doc.documentElement.setAttribute("data-wf-page", cfg.wfPage ?? HOME_WF_PAGE);
      const prevExtra = window.__tplBodyExtra ?? [];
      prevExtra.forEach((c) => doc.body.classList.remove(c));
      const extra = (cfg.bodyClass ?? "").split(/\s+/).filter(Boolean);
      extra.forEach((c) => doc.body.classList.add(c));
      window.__tplBodyExtra = extra;

      if (!wasBooted) {
        if (doc.readyState !== "complete") {
          await new Promise<void>((res) =>
            window.addEventListener("load", () => res(), { once: true })
          );
        }
        if (cancelled) return;
        patchLateListeners();
      } else {
        // client-side navigation: clear transient chrome/hero state
        doc.querySelectorAll(".w--open").forEach((el) => el.classList.remove("w--open"));
        doc.documentElement.classList.remove("hero-js");
      }

      // Self-heal the hero set attribute: dev hot-reload (and anything else
      // re-rendering <html>) can strip it, which stacks every hero variant.
      if (!doc.documentElement.hasAttribute("data-hero-set")) {
        const sets = ["newton", "einstein", "franklin"];
        let pick = sets[Math.floor(Math.random() * sets.length)];
        try {
          pick = sessionStorage.getItem("heroSet:last") ?? pick;
        } catch {
          /* private mode */
        }
        doc.documentElement.setAttribute("data-hero-set", pick);
      }

      const wfQueue = window.wf?.r;
      const drainedBefore = wfQueue ? wfQueue.length : 0;

      for (const src of [...CORE_HEAD, ...(cfg.scripts ?? [])]) await loadSrc(src);
      if (cancelled) return;
      await runPendingTemplates();
      if (cancelled) return;
      for (const src of CORE_BODY) await loadSrc(src);
      if (cancelled) return;

      if (wasBooted) {
        // Re-init Webflow interactions for the swapped-in DOM.
        try {
          window.Webflow?.destroy?.();
          window.Webflow?.ready?.();
          window.Webflow?.require?.("ix2")?.init?.();
        } catch {
          /* interactions best-effort */
        }
        // Run wf.ready callbacks the new page queued after first boot.
        const q = window.wf?.r;
        if (q) {
          const start = Math.max(window.__tplWfDrain ?? 0, drainedBefore);
          for (let i = start; i < q.length; i++) {
            try {
              q[i]();
            } catch {
              /* best-effort */
            }
          }
          window.__tplWfDrain = q.length;
        }
        try {
          window.ScrollTrigger?.refresh?.();
        } catch {
          /* best-effort */
        }
      } else {
        window.__tplWfDrain = window.wf?.r?.length ?? 0;
      }

      window.__tplBooted = true;
      window.__tplBooting = false;
      const lateQ = window.__tplLateQ ?? [];
      window.__tplLateQ = [];
      lateQ.forEach((replay) => setTimeout(replay, 0));
    };

    // Serialize runs: StrictMode/dev double-invocation and rapid navigations
    // must never interleave two boots.
    window.__tplChain = (window.__tplChain ?? Promise.resolve()).then(run, run);
    return () => {
      cancelled = true;
    };
  }, [driver, pathname]);

  return null;
}
