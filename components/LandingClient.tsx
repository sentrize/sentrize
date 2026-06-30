"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// The landing keeps its bespoke (Verifone-based) markup verbatim for 100% design
// fidelity, but we render it inside a client component so navigation is real
// Next.js client-side routing (no full page reloads) and the few interactive
// bits (cursor glow, equal-height cards, hero video) are ported from the old
// run-once jQuery main.js into a React effect that re-runs on every mount —
// so it all keeps working when you navigate back to the landing.

const VIDEO_ID = "2tJz42k1CA4";
const POSTER = "/assets/images/homepage-img-video.png";
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

    // 2) Hero banner cursor glow (desktop only)
    const banner = root.querySelector<HTMLElement>("#banner");
    const glow = root.querySelector<HTMLElement>("#glow");
    if (banner && glow && window.innerWidth > 991) {
      const onMove: EventListener = (e) => {
        const me = e as MouseEvent;
        const r = banner.getBoundingClientRect();
        glow.style.setProperty("--mx", (((me.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
        glow.style.setProperty("--my", (((me.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
      };
      on(banner, "mousemove", onMove);
      on(banner, "mouseenter", () => (glow.style.opacity = "1"));
      on(banner, "mouseleave", () => (glow.style.opacity = "0"));
    }

    // 3) Equal-height card titles/descriptions (port of newSameHeight)
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

    // 4) Hero video (lightweight autoplay iframe, no YouTube IFrame API)
    const playBtn = root.querySelector<HTMLElement>(".introPagePlayBox");
    const wrap = root.querySelector<HTMLElement>(".wrapVideoBannerVideo");
    const video = root.querySelector<HTMLElement>("#video");
    const box = root.querySelector<HTMLElement>("#linkFullBox");
    const closeBtn = root.querySelector<HTMLElement>("#closeVideo");
    if (playBtn && box) {
      on(playBtn, "click", () => {
        box.innerHTML =
          '<iframe width="100%" height="388" src="https://www.youtube.com/embed/' +
          VIDEO_ID +
          '?autoplay=1&rel=0" title="Sentrize" frameborder="0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>';
        wrap?.classList.add("active");
        video?.classList.add("active");
      });
    }
    if (closeBtn && box) {
      on(closeBtn, "click", () => {
        box.innerHTML = '<img class="imgResponsive center-block" src="' + POSTER + '" alt="Sentrize">';
        wrap?.classList.remove("active");
        video?.classList.remove("active");
      });
    }

    // 5) Default active tab marker
    root.querySelector(".mobileItem1")?.classList.add("active");

    return () => cleanups.forEach((fn) => fn());
  }, [router]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
