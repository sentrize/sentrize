"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { animate, inView } from "motion";
import Hero from "@/components/landing/Hero";
import Capabilities from "@/components/landing/Capabilities";

// The landing keeps its bespoke (Verifone-based) markup verbatim for 100% design
// fidelity, but we render it inside a client component so navigation is real
// Next.js client-side routing (no full page reloads) and the few interactive
// bits (equal-height cards, tab switching, scroll reveal) are ported from the
// old run-once jQuery main.js into a React effect that re-runs on every mount —
// so it all keeps working when you navigate back to the landing. The hero and
// the capabilities accordion have their own components (Hero, Capabilities)
// and own their own interactions (cursor glow, hero video, accordion).

const EQ_GROUPS = [
  ".section3 .flexBoxTitle",
  ".section3 .flexBoxDescription",
  ".section6 .flexContainerBox .flexBoxTitle",
  ".section6 .flexContainerBox .flexBoxDescription",
  ".section7 .flexBoxTitle",
  ".section7 .flexBoxDescription",
];

export default function LandingClient({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cleanups: Array<() => void> = [];
    const on = (
      el: EventTarget | null | undefined,
      type: string,
      fn: EventListener,
      opts?: AddEventListenerOptions
    ) => {
      if (!el) return;
      el.addEventListener(type, fn, opts);
      cleanups.push(() => el.removeEventListener(type, fn, opts));
    };

    // 1) Internal links -> Next.js client-side navigation (no full reload)
    const onClick: EventListener = (e) => {
      const me = e as MouseEvent;
      if (me.defaultPrevented || me.button !== 0 || me.metaKey || me.ctrlKey || me.shiftKey || me.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (a.getAttribute("target") === "_blank" || a.hasAttribute("download")) return;
      if (!href.startsWith("/") || href.startsWith("//")) return; // only app-internal paths
      e.preventDefault();
      router.push(href);
    };
    on(root, "click", onClick);

    // Equal-height card titles/descriptions (port of newSameHeight)
    const equalize = () => {
      EQ_GROUPS.forEach((sel) => {
        const els = Array.from(root.querySelectorAll<HTMLElement>(sel));
        els.forEach((el) => (el.style.height = ""));
        if (window.innerWidth < 768) return; // cards stack on mobile -> natural height
        const max = els.reduce((m, el) => Math.max(m, el.offsetHeight), 0);
        if (max) els.forEach((el) => (el.style.height = max + "px"));
      });
    };
    const raf = requestAnimationFrame(equalize);
    cleanups.push(() => cancelAnimationFrame(raf));
    on(window, "resize", equalize);
    on(window, "load", equalize);

    // "Built for ambitious technology teams" tabs — switch content panel,
    // crossfading the incoming panel in instead of an instant pop.
    const tabBox = root.querySelector<HTMLElement>(".tabBox");
    const tabContent = root.querySelector<HTMLElement>(".tabContentBox");
    if (tabBox && tabContent) {
      tabBox.querySelectorAll<HTMLElement>(".boxMenuItem[data-item]").forEach((item) => {
        on(item, "click", () => {
          const n = item.getAttribute("data-item");
          tabBox.querySelectorAll(".boxMenuItem").forEach((b) => b.classList.remove("active"));
          item.classList.add("active");
          tabContent.querySelectorAll(".contentItem").forEach((c) => c.classList.remove("active"));
          const next = tabContent.querySelector<HTMLElement>(".contentItem.item" + n);
          next?.classList.add("active");
          if (next) animate(next, { opacity: [0, 1], y: [8, 0] }, { duration: 0.3, ease: "easeOut" });
        });
        (item as HTMLElement).style.cursor = "pointer";
      });
    }

    // Scroll reveal — fade/slide the card grids (pricing, feature rows,
    // capability tiles) up as they enter the viewport.
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".flexBoxItem"));
    cards.forEach((el) => {
      el.style.opacity = "0";
    });
    const stopInView = cards.map((el, i) =>
      inView(
        el,
        () => {
          animate(
            el,
            { opacity: [0, 1], y: [24, 0] },
            { duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }
          );
        },
        { margin: "0px 0px -10% 0px" }
      )
    );
    cleanups.push(() => stopInView.forEach((stop) => stop()));

    return () => cleanups.forEach((fn) => fn());
  }, [router]);

  return (
    <div className="content">
      <div className="clearfix" />
      <div className="wrap_all homePage cookie-buffer">
        <Hero />
        <Capabilities />
        <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
