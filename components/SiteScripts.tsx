"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Ports the vanilla interactions from the static site's site.js into React,
// re-initialising on every route change so they work with client navigation.
export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanups: Array<() => void> = [];

    // ---- Mobile nav toggle ----
    const nav = document.querySelector<HTMLElement>(".sh__nav");
    const toggle = document.querySelector<HTMLElement>(".sh__toggle");
    if (nav && toggle) {
      const onToggle = () => {
        const open = nav.getAttribute("data-open") === "true";
        nav.setAttribute("data-open", String(!open));
        toggle.setAttribute("aria-expanded", String(!open));
      };
      toggle.addEventListener("click", onToggle);
      cleanups.push(() => toggle.removeEventListener("click", onToggle));
    }

    // ---- Mega-menu expand on mobile ----
    document.querySelectorAll<HTMLElement>(".sh__item.has-mega > .sh__link").forEach((link) => {
      const onClick = (e: Event) => {
        if (window.matchMedia("(max-width:980px)").matches) {
          e.preventDefault();
          const item = link.closest(".sh__item") as HTMLElement | null;
          if (!item) return;
          const open = item.getAttribute("data-open") === "true";
          item.setAttribute("data-open", String(!open));
          const mega = item.querySelector<HTMLElement>(".sh__mega");
          if (mega) mega.style.opacity = open ? "" : "1";
        }
      };
      link.addEventListener("click", onClick);
      cleanups.push(() => link.removeEventListener("click", onClick));
    });

    // ---- Close menus after navigation / link click ----
    // Client-side nav keeps the header mounted, so the CSS :hover/:focus-within
    // can leave a mega open after you click through. Reset on each route change,
    // and force the hovered mega closed when a nav link is clicked.
    if (nav) nav.setAttribute("data-open", "false");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.querySelectorAll<HTMLAnchorElement>(".sh__link, .sh__mega a").forEach((a) => {
      const onClick = () => a.closest(".sh__item")?.classList.add("is-closing");
      a.addEventListener("click", onClick);
      cleanups.push(() => a.removeEventListener("click", onClick));
    });
    document.querySelectorAll<HTMLElement>(".sh__item").forEach((it) => {
      const onLeave = () => it.classList.remove("is-closing");
      it.addEventListener("mouseleave", onLeave);
      cleanups.push(() => it.removeEventListener("mouseleave", onLeave));
    });

    // ---- Overlay header: transparent at top, solid on scroll ----
    const overlay = document.querySelector<HTMLElement>(".sh--overlay");
    if (overlay) {
      const onScroll = () => overlay.classList.toggle("is-scrolled", window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    // ---- Scroll reveal ----
    const targets = document.querySelectorAll<HTMLElement>(
      "main .card, main .step, main .price-card, main .quote, main .stat, main .table-wrap, main .accordion, main .svc-hero__visual, main .feature, main .work"
    );
    if ("IntersectionObserver" in window && targets.length) {
      targets.forEach((el, i) => {
        el.classList.add("reveal");
        el.style.transitionDelay = `${(i % 6) * 60}ms`;
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // ---- Contact form validation ----
    document.querySelectorAll<HTMLFormElement>("form[data-validate]").forEach((form) => {
      const onSubmit = (e: Event) => {
        e.preventDefault();
        let ok = true;
        form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]").forEach((el) => {
          const field = el.closest(".field");
          const bad = !el.value.trim() || ((el as HTMLInputElement).type === "email" && !EMAIL.test(el.value.trim()));
          if (field) field.classList.toggle("field--error", bad);
          if (bad && ok) { el.focus(); ok = false; }
        });
        if (!ok) return;
        const msg = form.querySelector<HTMLElement>("[data-success]");
        form.classList.add("is-submitting");
        setTimeout(() => {
          form.classList.remove("is-submitting");
          if (msg) msg.style.display = "block";
          form.querySelectorAll<HTMLElement>(".input").forEach((i) => {
            if (i.tagName !== "SELECT") (i as HTMLInputElement).value = "";
          });
        }, 600);
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
      form.querySelectorAll<HTMLElement>(".input").forEach((el) => {
        const onInput = () => el.closest(".field")?.classList.remove("field--error");
        el.addEventListener("input", onInput);
        cleanups.push(() => el.removeEventListener("input", onInput));
      });
    });

    // ---- Newsletter ----
    document.querySelectorAll<HTMLFormElement>("form[data-newsletter]").forEach((form) => {
      const onSubmit = (e: Event) => {
        e.preventDefault();
        const input = form.querySelector<HTMLInputElement>("input");
        if (!input) return;
        if (!EMAIL.test((input.value || "").trim())) { input.focus(); input.style.borderColor = "#ff8585"; return; }
        input.style.borderColor = "";
        const msg = form.parentElement?.querySelector<HTMLElement>("[data-success]");
        if (msg) msg.style.display = "block";
        input.value = "";
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    });

    // ---- Portfolio filter ----
    const pf = document.querySelector<HTMLElement>("[data-portfolio-filters]");
    if (pf) {
      const grid = document.querySelector<HTMLElement>("[data-portfolio-grid]");
      pf.querySelectorAll<HTMLElement>("[data-filter]").forEach((btn, i) => {
        if (i === 0) btn.classList.add("active");
        const onClick = () => {
          pf.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const f = btn.getAttribute("data-filter");
          grid?.querySelectorAll<HTMLElement>("[data-cat]").forEach((card) => {
            card.style.display = f === "all" || card.getAttribute("data-cat") === f ? "" : "none";
          });
        };
        btn.addEventListener("click", onClick);
        cleanups.push(() => btn.removeEventListener("click", onClick));
      });
    }

    // ---- FAQ search ----
    const fs = document.querySelector<HTMLInputElement>("[data-faq-search]");
    if (fs) {
      const onInput = () => {
        const q = fs.value.toLowerCase().trim();
        document.querySelectorAll<HTMLElement>("[data-faq-item]").forEach((d) => {
          d.style.display = !q || d.textContent!.toLowerCase().indexOf(q) !== -1 ? "" : "none";
        });
      };
      fs.addEventListener("input", onInput);
      cleanups.push(() => fs.removeEventListener("input", onInput));
    }

    // ---- Pricing billing toggle ----
    document.querySelectorAll<HTMLElement>(".toggle [data-bill]").forEach((btn) => {
      const onClick = () => {
        const wrap = btn.closest(".toggle");
        wrap?.querySelectorAll("[data-bill]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
