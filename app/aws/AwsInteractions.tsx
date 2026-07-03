"use client";

import { useEffect } from "react";

/* Progressive-enhancement script for the AWS recreation:
   - hamburger toggles the mobile nav
   - the customer-story carousel advances (arrows, dots, autoplay)
   Everything renders server-side; this only wires up interaction. */
export default function AwsInteractions() {
  useEffect(() => {
    const gnav = document.querySelector<HTMLElement>("[data-aws-gnav]");
    const toggle = document.querySelector<HTMLButtonElement>("[data-aws-toggle]");
    const onToggle = () => {
      const open = gnav?.classList.toggle("is-open");
      toggle?.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle?.addEventListener("click", onToggle);

    const carousel = document.querySelector<HTMLElement>("[data-aws-carousel]");
    let cleanupCarousel: (() => void) | undefined;
    if (carousel) {
      const slides = Array.from(
        carousel.querySelectorAll<HTMLElement>("[data-aws-slide]")
      );
      const dots = Array.from(
        carousel.querySelectorAll<HTMLButtonElement>("[data-aws-dot]")
      );
      let index = 0;

      const render = () => {
        slides.forEach((s, i) => (s.hidden = i !== index));
        dots.forEach((d, i) =>
          d.setAttribute("aria-selected", i === index ? "true" : "false")
        );
      };
      const go = (n: number) => {
        index = (n + slides.length) % slides.length;
        render();
      };

      const prev = carousel.querySelector<HTMLButtonElement>('[data-aws-prev]');
      const next = carousel.querySelector<HTMLButtonElement>('[data-aws-next]');
      const onPrev = () => go(index - 1);
      const onNext = () => go(index + 1);
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      const dotHandlers = dots.map((d, i) => {
        const h = () => go(i);
        d.addEventListener("click", h);
        return h;
      });

      let timer = window.setInterval(onNext, 6000);
      const pause = () => window.clearInterval(timer);
      const resume = () => (timer = window.setInterval(onNext, 6000));
      carousel.addEventListener("mouseenter", pause);
      carousel.addEventListener("mouseleave", resume);

      render();
      cleanupCarousel = () => {
        window.clearInterval(timer);
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        dots.forEach((d, i) => d.removeEventListener("click", dotHandlers[i]));
        carousel.removeEventListener("mouseenter", pause);
        carousel.removeEventListener("mouseleave", resume);
      };
    }

    return () => {
      toggle?.removeEventListener("click", onToggle);
      cleanupCarousel?.();
    };
  }, []);

  return null;
}
