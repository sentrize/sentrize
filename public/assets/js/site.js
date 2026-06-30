/* Sentrize — shared site chrome nav interactions */
(function () {
  "use strict";

  var nav = document.querySelector(".sh__nav");
  var toggle = document.querySelector(".sh__toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
  }

  // On mobile, tapping a mega-menu parent expands it in place
  document.querySelectorAll(".sh__item.has-mega > .sh__link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width:980px)").matches) {
        e.preventDefault();
        var item = link.closest(".sh__item");
        var mega = item.querySelector(".sh__mega");
        var open = item.getAttribute("data-open") === "true";
        item.setAttribute("data-open", String(!open));
        if (mega) mega.style.opacity = open ? "" : "1";
      }
    });
  });

  // Overlay header (landing): transparent at top, solid black once scrolled
  var overlay = document.querySelector(".sh--overlay");
  if (overlay) {
    var onScroll = function () {
      overlay.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Fade-up on scroll. JS adds .reveal (so no-JS users see content normally),
  // then an observer adds .in when the element scrolls into view.
  var targets = document.querySelectorAll(
    "main .card, main .step, main .price-card, main .quote, main .stat, " +
    "main .table-wrap, main .accordion, main .svc-hero__visual, main .feature");
  if ("IntersectionObserver" in window && targets.length) {
    targets.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 6) * 60 + "ms";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }

  // Highlight the current page link
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sh a, .sf a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.style.color = "var(--c-blue)";
  });
})();

/* Interactive components (forms, filters, search, toggles) */
(function () {
  "use strict";
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ---- Contact form validation ----
  document.querySelectorAll("form[data-validate]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (el) {
        var field = el.closest(".field");
        var bad = !el.value.trim() || (el.type === "email" && !EMAIL.test(el.value.trim()));
        if (field) field.classList.toggle("field--error", bad);
        if (bad && ok) { el.focus(); ok = false; }
      });
      if (!ok) return;
      var msg = form.querySelector("[data-success]");
      form.classList.add("is-submitting");
      setTimeout(function () {
        form.classList.remove("is-submitting");
        if (msg) msg.style.display = "block";
        form.querySelectorAll(".input").forEach(function (i) { if (i.tagName !== "SELECT") i.value = ""; });
      }, 600);
    });
    form.querySelectorAll(".input").forEach(function (el) {
      el.addEventListener("input", function () {
        var f = el.closest(".field"); if (f) f.classList.remove("field--error");
      });
    });
  });

  // ---- Newsletter ----
  document.querySelectorAll("form[data-newsletter]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input");
      if (!EMAIL.test((input.value || "").trim())) { input.focus(); input.style.borderColor = "#ff8585"; return; }
      input.style.borderColor = "";
      var msg = form.parentElement.querySelector("[data-success]");
      if (msg) msg.style.display = "block";
      input.value = "";
    });
  });

  // ---- Portfolio filter ----
  var pf = document.querySelector("[data-portfolio-filters]");
  if (pf) {
    var grid = document.querySelector("[data-portfolio-grid]");
    pf.querySelectorAll("[data-filter]").forEach(function (btn, i) {
      if (i === 0) btn.classList.add("active");
      btn.addEventListener("click", function () {
        pf.querySelectorAll("[data-filter]").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var f = btn.getAttribute("data-filter");
        grid.querySelectorAll("[data-cat]").forEach(function (card) {
          card.style.display = (f === "all" || card.getAttribute("data-cat") === f) ? "" : "none";
        });
      });
    });
  }

  // ---- FAQ search ----
  var fs = document.querySelector("[data-faq-search]");
  if (fs) {
    fs.addEventListener("input", function () {
      var q = fs.value.toLowerCase().trim();
      document.querySelectorAll("[data-faq-item]").forEach(function (d) {
        var t = d.textContent.toLowerCase();
        d.style.display = (!q || t.indexOf(q) !== -1) ? "" : "none";
      });
    });
  }

  // ---- Pricing billing toggle ----
  document.querySelectorAll(".toggle [data-bill]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wrap = btn.closest(".toggle");
      wrap.querySelectorAll("[data-bill]").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var annual = btn.getAttribute("data-bill") === "annual";
      document.querySelectorAll("[data-price]").forEach(function (p) {
        var base = p.getAttribute("data-base") || (p.setAttribute("data-base", p.textContent), p.textContent);
        p.innerHTML = annual && base.indexOf("$") !== -1 ? base + ' <small>billed yearly</small>' : base;
      });
    });
  });
})();
