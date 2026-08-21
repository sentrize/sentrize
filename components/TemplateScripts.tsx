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
    s.src = src;
    s.onload = () => res();
    s.onerror = () => res();
    document.body.appendChild(s);
  });
}

function patchLateListeners() {
  const patch = (target: Window | Document) => {
    const orig = target.addEventListener.bind(target);
    (target as Window).addEventListener = ((
      type: string,
      fn: EventListenerOrEventListenerObject,
      opts?: boolean | AddEventListenerOptions
    ) => {
      if ((type === "DOMContentLoaded" || type === "load") && document.readyState === "complete") {
        try {
          const ev = new Event(type);
          if (typeof fn === "function") fn.call(target, ev);
          else fn.handleEvent(ev);
        } catch {
          /* keep booting */
        }
        return;
      }
      orig(type, fn as EventListener, opts);
    }) as typeof target.addEventListener;
  };
  patch(window);
  patch(document);
}

async function runPendingTemplates() {
  const tpls = Array.from(
    document.querySelectorAll<HTMLScriptElement>('script[type="text/template"][data-tpl]')
  );
  for (const tpl of tpls) {
    const src = tpl.getAttribute("data-tpl-src");
    if (src) {
      tpl.remove();
      await loadSrc(src);
    } else {
      const s = document.createElement("script");
      s.textContent = tpl.textContent;
      tpl.replaceWith(s);
    }
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
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [driver, pathname]);

  return null;
}
