"use client";

import { useEffect } from "react";

/**
 * Boots the template's Webflow/GSAP runtime after React hydration.
 *
 * The static template ran inline scripts during parse and vendor scripts
 * synchronously at the end of <body>. Running them before hydration would
 * mutate the DOM under React and trigger hydration fallbacks, so instead:
 *
 *  1. inline scripts are rendered as inert <script type="text/template">
 *     templates and re-executed here in document order,
 *  2. vendor/runtime files load sequentially (order matters: jQuery before
 *     the Webflow chunks, gsap before its plugins),
 *  3. DOMContentLoaded/load listeners registered late are invoked
 *     immediately, since those events have already fired by now.
 *
 * Site navigation uses plain <a> full-page loads, so this boots exactly
 * once per document - like the static site did.
 */
export default function TemplateScripts({
  wfPage,
  scripts,
  bodyClass,
}: {
  wfPage: string;
  scripts: string[];
  bodyClass?: string;
}) {
  useEffect(() => {
    const doc = document;
    if (doc.documentElement.hasAttribute("data-tpl-booted")) return;
    doc.documentElement.setAttribute("data-tpl-booted", "1");
    doc.documentElement.setAttribute("data-wf-page", wfPage);
    if (bodyClass) doc.body.classList.add(...bodyClass.split(/\s+/));

    // Late-listener shim: the template's scripts assume they run during page
    // load; replay DOMContentLoaded/load for listeners added after the fact.
    const patch = (target: Window | Document) => {
      const orig = target.addEventListener.bind(target);
      (target as Window).addEventListener = ((
        type: string,
        fn: EventListenerOrEventListenerObject,
        opts?: boolean | AddEventListenerOptions
      ) => {
        if (
          (type === "DOMContentLoaded" || type === "load") &&
          doc.readyState === "complete"
        ) {
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

    const boot = async () => {
      if (doc.readyState !== "complete") {
        await new Promise<void>((res) =>
          window.addEventListener("load", () => res(), { once: true })
        );
      }
      patch(window);
      patch(doc);

      // 1. inline template scripts, in document order
      doc
        .querySelectorAll<HTMLScriptElement>('script[type="text/template"][data-tpl]')
        .forEach((tpl) => {
          const s = doc.createElement("script");
          s.textContent = tpl.textContent;
          tpl.replaceWith(s);
        });

      // 2. vendor + runtime files, strictly sequential
      for (const src of scripts) {
        await new Promise<void>((res) => {
          const s = doc.createElement("script");
          s.src = src;
          s.onload = () => res();
          s.onerror = () => res();
          doc.body.appendChild(s);
        });
      }
    };
    void boot();
  }, [wfPage, scripts, bodyClass]);

  return null;
}
