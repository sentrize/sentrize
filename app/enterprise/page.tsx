// Generated from the static Sentrize template by the migration converter.
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: { absolute: "Enterprise Software & Cloud Engineering | Sentrize" },
  description: "Mission-critical software, modernization, and security for large organizations \u2014 engineered with the governance, compliance, and SLAs enterprise environments demand.",
  alternates: { canonical: "https://www.sentrize.com/enterprise" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "\n      @media (min-width: 992px) {\n        html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a4afaaef-90f0-ffb4-f1f9-caad29e2841d\"] {\n          opacity: 0;\n        }\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      html.w-mod-js:not(.w-mod-ix3)\n        :is(\n          [text-paragraph-animation-start],\n          [text-paragraph-animation],\n          .home-anim-2,\n          .home-anim-frameworks._2nd,\n          .home-anim-3\n        ) {\n        visibility: hidden !important;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -o-font-smoothing: antialiased;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* Make Flowbase / Tippy tooltip text respect \\n */\n      .tippy-box .tippy-content {\n        white-space: pre-line;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      [text-letters-animation-start] {\n        opacity: 0.3;\n        color: #7fc8ff;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* ==============================================================\n     LAYER A \u2014 SET VISIBILITY (unchanged behaviour)\n     Show only the picked set's images + headline per breakpoint.\n     ============================================================== */\n      @media (min-width: 992px) {\n        [data-image-mobile-newton=\"true\"] {\n          display: none !important;\n        }\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-image-newton-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-image-newton-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-image-einstein-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-image-einstein-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-image-franklin-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-image-franklin-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-hero-headline=\"newton\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-hero-headline=\"einstein\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-hero-headline=\"franklin\"] {\n          display: none !important;\n        }\n      }\n      @media (max-width: 991px) {\n        [data-image-newton-anim-main=\"true\"] {\n          display: none !important;\n        }\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-image-newton-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-image-mobile-newton=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-image-einstein-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-image-einstein-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-image-franklin-anim=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-image-franklin-anim-main=\"true\"],\n        html[data-hero-set]:not([data-hero-set=\"newton\"]) [data-hero-headline=\"newton\"],\n        html[data-hero-set]:not([data-hero-set=\"einstein\"]) [data-hero-headline=\"einstein\"],\n        html[data-hero-set]:not([data-hero-set=\"franklin\"]) [data-hero-headline=\"franklin\"] {\n          display: none !important;\n        }\n        html[data-hero-set=\"newton\"] [data-image-mobile-newton=\"true\"] {\n          display: block !important;\n        }\n      }\n\n      /* ==============================================================\n     LAYER B \u2014 LOAD-ANIMATION PRE-HIDE (hard-reload flicker fix)\n     Only the elements that animate IN on page load, scoped to the\n     ACTIVE set. visibility (not display) so layout is preserved and\n     the footer script can still measure sizes/positions.\n     ============================================================== */\n      html[data-hero-set=\"einstein\"] [data-image-einstein-anim=\"true\"],\n      html[data-hero-set=\"einstein\"] [data-image-einstein-anim-main=\"true\"],\n      html[data-hero-set=\"franklin\"] [data-image-franklin-anim-main=\"true\"] {\n        visibility: hidden;\n        /* LAYER C \u2014 FALLBACK: reveal after 2s in case the script never\n       takes over. 0s duration + forwards fill = a delayed, instant\n       switch back to visible at the normal Webflow position. */\n        animation: hero-reveal-fallback 0s linear 2s forwards;\n      }\n\n      /* The footer script stamps this class once GSAP is confirmed\n     loaded \u2014 kills the fallback so GSAP's inline styles win. */\n      html.hero-js [data-image-einstein-anim=\"true\"],\n      html.hero-js [data-image-einstein-anim-main=\"true\"],\n      html.hero-js [data-image-franklin-anim-main=\"true\"] {\n        animation: none;\n      }\n\n      @keyframes hero-reveal-fallback {\n        to {\n          visibility: visible;\n        }\n      }\n    " }} />
      <script dangerouslySetInnerHTML={{ __html: "(function () {\n        // Randomly pick one of the three hero sets, avoiding an immediate\n        // repeat within the same browser session (sessionStorage-backed).\n        // Runs synchronously in the <head> so data-hero-set is present\n        // before the first paint \u2014 the CSS below depends on that.\n        var sets = [\"newton\", \"einstein\", \"franklin\"];\n        var KEY = \"heroSet:last\";\n        var last = null;\n        try {\n          last = sessionStorage.getItem(KEY);\n        } catch (e) {}\n        function pick(excludeLast) {\n          var pool = excludeLast\n            ? sets.filter(function (s) {\n                return s !== last;\n              })\n            : sets;\n          if (!pool.length) pool = sets;\n          return pool[Math.floor(Math.random() * pool.length)];\n        }\n        function apply(set) {\n          document.documentElement.setAttribute(\"data-hero-set\", set);\n          last = set;\n          try {\n            sessionStorage.setItem(KEY, set);\n          } catch (e) {}\n        }\n        apply(pick(true));\n      })();" }} />
      <div className="global-styles">
        <div className="style-overrides w-embed">
          <style dangerouslySetInnerHTML={{ __html: "\n            /* Ensure all elements inherit the color from its parent */\n            a,\n/*     .w-input,    */\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-nav-brand,\n.w-dropdown-btn,\n/*.w-dropdown-toggle, */\n.w-slider-arrow-left,\n.w-slider-arrow-right,\n.w-dropdown-link {\n              color: inherit;\n              text-decoration: inherit;\n              font-size: inherit;\n            }\n\n            /* Focus state style for keyboard navigation for the focusable elements */\n            *[tabindex]:focus-visible,\n            input[type=\"file\"]:focus-visible {\n              outline: 0.125rem solid #4d65ff;\n              outline-offset: 0.125rem;\n            }\n\n            /* Get rid of top margin on first element in any rich text element */\n            .w-richtext > :not(div):first-child,\n            .w-richtext > div:first-child > :first-child {\n              margin-top: 0 !important;\n            }\n\n            /* Get rid of bottom margin on last element in any rich text element */\n            .w-richtext > :last-child,\n            .w-richtext ol li:last-child,\n            .w-richtext ul li:last-child {\n              margin-bottom: 0 !important;\n            }\n\n            /* Prevent all click and hover interaction with an element */\n            .pointer-events-off {\n              pointer-events: none;\n            }\n\n            /* Enables all click and hover interaction with an element */\n            .pointer-events-on {\n              pointer-events: auto;\n            }\n\n            /* Create a class of .div-square which maintains a 1:1 dimension of a div */\n            .div-square::after {\n              content: \"\";\n              display: block;\n              padding-bottom: 100%;\n            }\n\n            /* Make sure containers never lose their center alignment */\n            .container-medium,\n            .container-small,\n            .container-large {\n              margin-right: auto !important;\n              margin-left: auto !important;\n            }\n\n            /* Apply \"...\" after 3 lines of text */\n            .text-style-3lines {\n              display: -webkit-box;\n              overflow: hidden;\n              -webkit-line-clamp: 3;\n              -webkit-box-orient: vertical;\n            }\n\n            /* Apply \"...\" after 2 lines of text */\n            .text-style-2lines {\n              display: -webkit-box;\n              overflow: hidden;\n              -webkit-line-clamp: 2;\n              -webkit-box-orient: vertical;\n            }\n\n            /* Apply \"...\" after 1 line of text */\n            .text-style-1line {\n              display: -webkit-box;\n              overflow: hidden;\n              -webkit-line-clamp: 1;\n              -webkit-box-orient: vertical;\n            }\n\n            /* Adds inline flex display */\n            .display-inlineflex {\n              display: inline-flex;\n            }\n\n            /* These classes are never overwritten */\n            .hide {\n              display: none !important;\n            }\n\n            /* Remove default Webflow chevron from form select */\n            select {\n              -webkit-appearance: none;\n            }\n\n            @media screen and (max-width: 991px) {\n              .hide,\n              .hide-tablet {\n                display: none !important;\n              }\n            }\n            @media screen and (max-width: 767px) {\n              .hide-mobile-landscape {\n                display: none !important;\n              }\n            }\n            @media screen and (max-width: 479px) {\n              .hide-mobile {\n                display: none !important;\n              }\n            }\n\n            .margin-0 {\n              margin: 0rem !important;\n            }\n\n            .padding-0 {\n              padding: 0rem !important;\n            }\n\n            .spacing-clean {\n              padding: 0rem !important;\n              margin: 0rem !important;\n            }\n\n            .margin-top {\n              margin-right: 0rem !important;\n              margin-bottom: 0rem !important;\n              margin-left: 0rem !important;\n            }\n\n            .padding-top {\n              padding-right: 0rem !important;\n              padding-bottom: 0rem !important;\n              padding-left: 0rem !important;\n            }\n\n            .margin-right {\n              margin-top: 0rem !important;\n              margin-bottom: 0rem !important;\n              margin-left: 0rem !important;\n            }\n\n            .padding-right {\n              padding-top: 0rem !important;\n              padding-bottom: 0rem !important;\n              padding-left: 0rem !important;\n            }\n\n            .margin-bottom {\n              margin-top: 0rem !important;\n              margin-right: 0rem !important;\n              margin-left: 0rem !important;\n            }\n\n            .padding-bottom {\n              padding-top: 0rem !important;\n              padding-right: 0rem !important;\n              padding-left: 0rem !important;\n            }\n\n            .margin-left {\n              margin-top: 0rem !important;\n              margin-right: 0rem !important;\n              margin-bottom: 0rem !important;\n            }\n\n            .padding-left {\n              padding-top: 0rem !important;\n              padding-right: 0rem !important;\n              padding-bottom: 0rem !important;\n            }\n\n            .margin-horizontal {\n              margin-top: 0rem !important;\n              margin-bottom: 0rem !important;\n            }\n\n            .padding-horizontal {\n              padding-top: 0rem !important;\n              padding-bottom: 0rem !important;\n            }\n\n            .margin-vertical {\n              margin-right: 0rem !important;\n              margin-left: 0rem !important;\n            }\n\n            .padding-vertical {\n              padding-right: 0rem !important;\n              padding-left: 0rem !important;\n            }\n\n            /* Apply \"...\" at 100% width */\n            .truncate-width {\n              width: 100%;\n              white-space: nowrap;\n              overflow: hidden;\n              text-overflow: ellipsis;\n            }\n            /* Removes native scrollbar */\n            .no-scrollbar {\n              -ms-overflow-style: none;\n              overflow: -moz-scrollbars-none;\n            }\n\n            .no-scrollbar::-webkit-scrollbar {\n              display: none;\n            }\n\n            .page-wrapper {\n              overflow: clip;\n            }\n\n            /* Bullets Pricing */\n            .bullet-list_wrapper {\n              list-style: none;\n              margin: 0;\n            }\n\n            .bullet-list_wrapper > li {\n              position: relative;\n              padding-left: 1.3em;\n            }\n\n            .bullet-list_wrapper > li::before {\n              content: \"\";\n              position: absolute;\n              left: 0;\n              top: 50%;\n              width: 0.5em;\n              height: 0.5em;\n              border-radius: 999px;\n              background: var(--_v-2-colors---c-blue-light--900);\n              transform: translateY(-50%);\n            }\n          " }} />
          <style dangerouslySetInnerHTML={{ __html: "\n            /* Table wrapper */\n            .table-wrap {\n              width: 100%;\n              margin-top: 2rem;\n              margin-bottom: 2rem;\n              overflow-x: auto;\n              -webkit-overflow-scrolling: touch;\n              border-radius: 12px;\n              box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08); /* c-black--8p */\n            }\n\n            /* Table */\n            .table-wrap table {\n              width: 100%;\n              border-collapse: collapse;\n              font-size: 1rem;\n              background: var(--_v-2-colors---c-white);\n              min-width: 400px; /* prevents columns from squishing too much */\n            }\n\n            /* Header row (thead) */\n            .table-wrap table thead tr th {\n              background: var(--_v-2-colors---c-blue-dark--700); /* #161f34 */\n              color: var(--_v-2-colors---c-white);\n              font-weight: 500;\n              font-size: 0.85rem;\n              text-transform: uppercase;\n              letter-spacing: 0.05em;\n              padding: 14px 20px;\n              text-align: left;\n            }\n\n            .table-wrap table thead tr th:first-child {\n              border-radius: 12px 0 0 0;\n            }\n\n            .table-wrap table thead tr th:last-child {\n              border-radius: 0 12px 0 0;\n            }\n\n            /* Row label column (first td in each row) */\n            .table-wrap table tbody tr td:first-child {\n              font-weight: 400;\n              color: var(--_v-2-colors---c-blue-dark--700); /* #161f34 */\n              /* white-space: nowrap; */\n            }\n\n            /* Data rows */\n            .table-wrap table tbody tr td {\n              padding: 14px 20px;\n              border-bottom: 1px solid rgba(3, 7, 16, 0.16); /* c-black--16-p */\n              color: rgba(3, 7, 16, 0.6); /* c-black--60-p */\n            }\n\n            /* Zebra striping \u2014 c-blue-light--300, matches section background */\n            .table-wrap table tbody tr:nth-child(even) {\n              background: #f2faff;\n            }\n\n            /* Hover state \u2014 c-blue-light--400 */\n            .table-wrap table tbody tr:hover {\n              background: #e5f4ff;\n              transition: background 0.15s ease;\n            }\n\n            /* Last row \u2014 remove bottom border */\n            .table-wrap table tbody tr:last-child td {\n              border-bottom: none;\n            }\n\n            .table-wrap table tbody tr:last-child td:first-child {\n              border-radius: 0 0 0 12px;\n            }\n\n            .table-wrap table tbody tr:last-child td:last-child {\n              border-radius: 0 0 12px 0;\n            }\n\n            /* Mobile */\n            @media (max-width: 540px) {\n              .table-wrap table {\n                font-size: 0.85rem;\n                /* min-width: 340px; */\n              }\n\n              .table-wrap table thead tr th,\n              .table-wrap table tbody tr td {\n                padding: 11px 14px;\n              }\n            }\n\n            table {\n              text-wrap: balance !important;\n            }\n\n            li code {\n              color: var(--_v-2-colors---c-blue-dark--400);\n            }\n\n            pre {\n              background: transparent !important;\n              padding: none !important;\n              font-size: 0.875rem !important;\n            }\n\n            pre code.hljs {\n              line-height: 0.5rem !important;\n            }\n          " }} />
        </div>
        <div className="w-embed">
          <style dangerouslySetInnerHTML={{ __html: "\n            :root {\n              --font-from: 18;\n              --font-to: 20;\n              --vw-from: calc(1920 / 100);\n              --vw-to: calc(2400 / 100);\n              --coefficient: calc((var(--font-to) - var(--font-from)) / (var(--vw-to) - var(--vw-from)));\n              --base: calc((var(--font-from) - var(--vw-from) * var(--coefficient)) / 16);\n            }\n\n            html {\n              font-size: calc(var(--base) * 1rem + var(--coefficient) * 1vw);\n            }\n\n            @media screen and (max-width: 1920px) {\n              :root {\n                --font-from: 16;\n                --font-to: 18;\n                --vw-from: calc(1440 / 100);\n                --vw-to: calc(1920 / 100);\n              }\n            }\n\n            @media screen and (max-width: 1440px) {\n              :root {\n                --font-from: 16;\n                --font-to: 16;\n                --vw-from: calc(1 / 100);\n                --vw-to: calc(1440 / 100);\n              }\n            }\n          " }} />
        </div>
      </div>
      <div className="hide w-embed w-script">
        <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "function updateNavbarHeight() {\n            if (window.innerWidth > 992) return;\n\n            const navbar = document.querySelector(\".navbar2_menu.is-page-height-tablet\");\n            const topBanner = document.querySelector(\".top-banner\");\n            if (!navbar) return;\n\n            const bannerHeight = topBanner ? topBanner.getBoundingClientRect().height : 0;\n\n            if (window.scrollY <= bannerHeight) {\n              navbar.style.height = `calc(100dvh - (4rem + ${bannerHeight}px))`;\n            } else {\n              navbar.style.height = `calc(100dvh - 4rem)`;\n            }\n          }\n\n          function resetNavbarHeight() {\n            const navbar = document.querySelector(\".navbar2_menu.is-page-height-tablet\");\n            if (navbar) navbar.style.height = \"\";\n          }\n\n          function handleResize() {\n            if (window.innerWidth > 992) {\n              resetNavbarHeight();\n            } else {\n              updateNavbarHeight();\n            }\n          }\n\n          window.addEventListener(\"scroll\", updateNavbarHeight, { passive: true });\n          window.addEventListener(\"resize\", handleResize, { passive: true });\n\n          updateNavbarHeight();" }} />
      </div>
      <main className="main-wrapper">
        <section className="home_hero-section is-homepage-v3" data-section-hero="true">
          <img alt="" className="home_new-image is-einstein" data-image="einstein" data-image-einstein-anim="true" loading="lazy" sizes="(max-width: 3104px) 100vw, 3104px" src="/assets/images/hero/cloud-main.svg" />
          <img alt="" className="home_new-image is-newton is-mobile" data-image="newton" data-image-mobile-newton="true" data-image-newton-anim-main="true" loading="lazy" src="/assets/images/hero/mesh-main.svg" />
          <img alt="" className="home_new-image is-newton" data-image="newton" data-image-newton-anim-main="true" loading="lazy" sizes="(max-width: 3088px) 100vw, 3088px" src="/assets/images/hero/mesh-main.svg" />
          <img alt="" className="home_new-image is-franklin" data-image="franklin" data-image-franklin-anim-main="true" loading="lazy" sizes="(max-width: 2453px) 100vw, 2453px" src="/assets/images/hero/orbit-main.svg" />
          <img alt="" className="home_new-image-right is-einstein" data-image="einstein" data-image-einstein-anim-main="true" loading="lazy" sizes="(max-width: 3191px) 100vw, 3191px" src="/assets/images/hero/cloud-accent.svg" />
          <img alt="" className="home_new-image-right is-newton" data-image="newton" data-image-newton-anim="true" loading="lazy" sizes="(max-width: 1122px) 100vw, 1122px" src="/assets/images/hero/mesh-accent.svg" />
          <img alt="" className="home_new-image-right is-franklin" data-image="franklin" data-image-franklin-anim="true" loading="lazy" sizes="(max-width: 2992px) 100vw, 2992px" src="/assets/images/hero/orbit-accent.svg" />
          <div className="hero-linear-gradient is-top" />
          <div className="hero-linear-gradient is-left" />
          <div className="hero-linear-gradient is-right" />
          <div className="hero-linear-gradient is-bottom" />
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home_content-wrap">
                <div className="home-hero-wrapper is-homepagev3">
                  <div className="hero-title-row">
                    <h1 className="t-heading-2-rg text-c-blue-light-400">
                      {"\n                      Engineering built for organizations"}
                      <br />
                    </h1>
                    <div className="lm_wrapper">
                      <div className="lm_icon-arrow w-embed">
                        <style dangerouslySetInnerHTML={{ __html: "\n                          .hero-title-row {\n                            position: relative;\n                            width: fit-content;\n                            margin-inline: auto;\n                          }\n\n                          .hero-title-row h1 {\n                            margin: 0;\n                          }\n\n                          .roll-link {\n                            display: inline-block;\n                            vertical-align: bottom;\n                          }\n\n                          .lm_wrapper {\n                            position: absolute;\n                            left: 100%; /* zaraz za ko\u0144cem nag\u0142\u00f3wka */\n                            top: 50%; /* \u015brodek wysoko\u015bci wiersza */\n                            transform: translateY(-50%);\n                            margin-left: 0.5rem; /* odst\u0119p od \"Engine\" */\n                            display: flex;\n                            align-items: center;\n                          }\n\n                          .lm_icon-arrow svg {\n                            display: block;\n                          }\n                        " }} />
                      </div>
                    </div>
                  </div>
                  <div className="hero-subline">
                    <div className="t-heading-2-rg text-c-cyan-mailbu" data-hero-headline="newton">
                      {"\n                      that can't afford downtime.\n                    "}
                    </div>
                    <div className="t-heading-2-rg text-c-cyan-mailbu" data-hero-headline="einstein">
                      {"\n                      that can't afford downtime.\n                    "}
                    </div>
                    <div className="t-heading-2-rg text-c-cyan-mailbu" data-hero-headline="franklin">
                      {"\n                      that can't afford downtime.\n                    "}
                    </div>
                  </div>
                  <div className="spacer-24" />
                  <p className="t-paragraph-1-rg-twk">
                    {"\n                    Sentrize designs, builds, and operates the systems large organizations depend on \u2014 with the audit\n                    trails, access controls, integration depth, and 99.99% SLA-backed reliability that enterprise\n                    environments demand."}
                    <br />
                    {"\u2713 ISO 27001 \u00b7 SOC 2 Type II \u00b7 AWS Advanced Tier \u00b7 500+ projects across\n                    23+ countries\n                  "}
                  </p>
                  <div className="hide w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                      .t-heading-1-rg.color-t-7fc8ff.homepage {\n                        text-shadow:\n                          rgba(127, 200, 255, 0) 0px 0px 24px,\n                          rgba(127, 200, 255, 0) 0px 0px 48px,\n                          rgba(127, 200, 255, 0) 0px 2px 12px;\n                        animation: glowIn 500ms ease-out 300ms forwards;\n                      }\n\n                      @keyframes glowIn {\n                        to {\n                          text-shadow:\n                            rgba(127, 200, 255, 0.4) 0px 0px 24px,\n                            rgba(127, 200, 255, 0.15) 0px 0px 48px,\n                            rgba(127, 200, 255, 0.11) 0px 2px 12px;\n                        }\n                      }\n                    " }} />
                  </div>
                  <div className="spacer-48" />
                  <div className="button-group is-center">
                    <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%225eb11c12-30fc-26e5-89c8-eef144d436ee%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="5eb11c12-30fc-26e5-89c8-eef144d436ee:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Talk to engineering"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%225eb11c12-30fc-26e5-89c8-eef144d436ef%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="5eb11c12-30fc-26e5-89c8-eef144d436ef:cc338c70-b506-f985-732b-95e9d08eb22b" href="/pricing">
                      <div className="no-wrap-arrow">
                        {"View pricing"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="home_logos-wrapper is-home-v3">
                  <div className="home_logos-list-wrapper hide-tablet w-dyn-list">
                    <div className="home_logos-list w-dyn-items" role="list">
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="Cisco" className="home_logo" loading="lazy" src="/assets/images/clients/cisco.png" style={{ height: "32px", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="Bitdefender" className="home_logo" loading="lazy" src="/assets/images/clients/bitdefender.png" style={{ height: "32px", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="123 FormBuilder" className="home_logo" loading="lazy" src="/assets/images/clients/123formbuilder.png" style={{ height: "32px", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="EaseUS" className="home_logo" loading="lazy" src="/assets/images/clients/easeus.png" style={{ height: "32px", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="Mondly" className="home_logo" loading="lazy" src="/assets/images/clients/mondly.png" style={{ height: "32px", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                      <div className="home_logos-item w-dyn-item" data-has-link="true" role="listitem">
                        <div className="home_logos-wrapper-relative">
                          <a className="home_logos-link w-inline-block" href="/case-studies" />
                          <img alt="ViewSonic" className="home_logo" loading="lazy" src="/assets/images/clients/viewsonic.png" style={{ height: "32px", width: "auto" }} />
                          <div className="home_logo-icon w-embed">
                            <svg fill="none" height="7" viewBox="0 0 7 7" width="7" xmlns="http://www.w3.org/2000/svg">
                              <line stroke="white" strokeOpacity="0.6" x1="3.5" x2="3.5" y1="-2.18555e-08" y2="7" />
                              <line stroke="white" strokeOpacity="0.6" x2="7" y1="3.5" y2="3.5" />
                            </svg>
                          </div>
                          <div className="hero-lc_logo-caption">
                            {"Case study \u2197"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="logos-js w-embed w-script">
                    <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "(function () {\n                        function initHomeLogosHover() {\n                          // 1. Grab every \"Home Logos Wrapper\" on the page\n                          var wrappers = document.querySelectorAll(\".home_logos-wrapper\");\n                          if (!wrappers.length) return;\n\n                          // 2. Inject the hover styles once\n                          if (!document.getElementById(\"home-logos-hover-styles\")) {\n                            var style = document.createElement(\"style\");\n                            style.id = \"home-logos-hover-styles\";\n                            style.textContent = [\n                              /* Smooth transition for every logo item */\n                              \".home_logos-wrapper .home_logos-item {\",\n                              \"  transition: opacity .3s ease, filter .3s ease;\",\n                              \"}\",\n                              /* On wrapper hover: grey-out + dim ALL items */\n                              \".home_logos-wrapper:hover .home_logos-item {\",\n                              \"  opacity: .15;\",\n                              \"  filter: grayscale(1);\" /* delete this line to skip the grey-out */,\n                              \"}\",\n                              /* Items that DO have a link stay fully visible */\n                              '.home_logos-wrapper:hover .home_logos-item[data-has-link=\"true\"] {',\n                              \"  opacity: 1;\",\n                              /* '  filter: none;' */ /* uncomment to keep linked logos in full color */ \"}\",\n                            ].join(\"\\n\");\n                            document.head.appendChild(style);\n                          }\n\n                          // 3. Tag each item depending on whether it has a real link\n                          wrappers.forEach(function (wrapper) {\n                            var items = wrapper.querySelectorAll(\".home_logos-item\");\n                            items.forEach(function (item) {\n                              var hasLink = false;\n                              var anchors = item.querySelectorAll(\"a[href]\");\n                              for (var i = 0; i < anchors.length; i++) {\n                                var href = (anchors[i].getAttribute(\"href\") || \"\").trim();\n                                if (href && href !== \"#\") {\n                                  hasLink = true;\n                                  break;\n                                }\n                              }\n                              item.setAttribute(\"data-has-link\", hasLink ? \"true\" : \"false\");\n                            });\n                          });\n                        }\n\n                        // Run when the DOM is ready (Webflow-friendly)\n                        if (document.readyState === \"loading\") {\n                          document.addEventListener(\"DOMContentLoaded\", initHomeLogosHover);\n                        } else {\n                          initHomeLogosHover();\n                        }\n                      })();" }} />
                  </div>
                  <div className="logos-css w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                      /* Smooth fade for the caption */\n                      .hero-lc_logo-caption {\n                        transition: opacity 0.3s ease;\n                      }\n\n                      /* Reveal caption when hovering the item, the relative wrapper, or the link */\n                      .home_logos-item:hover .hero-lc_logo-caption,\n                      .home_logos-wrapper-relative:hover .hero-lc_logo-caption,\n                      .home_logos-link:hover ~ .hero-lc_logo-caption {\n                        opacity: 1;\n                      }\n                    " }} />
                  </div>
                </div>
                <div className="tablet-version is-logos-flex" data-w-id="5eb11c12-30fc-26e5-89c8-eef144d4370d">
                  <div className="tablet-logos-wrapper">
                    <div className="tablet-logos-marquee">
                      <div className="tablet-logos-marquee-track" style={{ willChange: "transform", transform: "translate3d(-23.5725%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)\n                            rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                        <div className="tablet-logos-marquee-item w-dyn-list">
                          <div className="home_logos-list w-dyn-items" role="list">
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Cisco" className="home_logo" loading="lazy" src="/assets/images/clients/cisco.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Bitdefender" className="home_logo" loading="lazy" src="/assets/images/clients/bitdefender.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="123 FormBuilder" className="home_logo" loading="lazy" src="/assets/images/clients/123formbuilder.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="EaseUS" className="home_logo" loading="lazy" src="/assets/images/clients/easeus.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Mondly" className="home_logo" loading="lazy" src="/assets/images/clients/mondly.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="ViewSonic" className="home_logo" loading="lazy" src="/assets/images/clients/viewsonic.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                          </div>
                        </div>
                        <div className="tablet-logos-marquee-item w-dyn-list">
                          <div className="home_logos-list w-dyn-items" role="list">
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Cisco" className="home_logo" loading="lazy" src="/assets/images/clients/cisco.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Bitdefender" className="home_logo" loading="lazy" src="/assets/images/clients/bitdefender.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="123 FormBuilder" className="home_logo" loading="lazy" src="/assets/images/clients/123formbuilder.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="EaseUS" className="home_logo" loading="lazy" src="/assets/images/clients/easeus.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Mondly" className="home_logo" loading="lazy" src="/assets/images/clients/mondly.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="ViewSonic" className="home_logo" loading="lazy" src="/assets/images/clients/viewsonic.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tablet-logos-wrapper">
                    <div className="tablet-logos-marquee is-reverse">
                      <div className="tablet-logos-marquee-track-reverse" style={{ willChange: "transform", transform: "translate3d(23.5725%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)\n                            rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                        <div className="tablet-logos-marquee-item w-dyn-list">
                          <div className="home_logos-list w-dyn-items" role="list">
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Cisco" className="home_logo" loading="lazy" src="/assets/images/clients/cisco.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Bitdefender" className="home_logo" loading="lazy" src="/assets/images/clients/bitdefender.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="123 FormBuilder" className="home_logo" loading="lazy" src="/assets/images/clients/123formbuilder.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="EaseUS" className="home_logo" loading="lazy" src="/assets/images/clients/easeus.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Mondly" className="home_logo" loading="lazy" src="/assets/images/clients/mondly.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="ViewSonic" className="home_logo" loading="lazy" src="/assets/images/clients/viewsonic.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                          </div>
                        </div>
                        <div className="tablet-logos-marquee-item w-dyn-list">
                          <div className="home_logos-list w-dyn-items" role="list">
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Cisco" className="home_logo" loading="lazy" src="/assets/images/clients/cisco.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Bitdefender" className="home_logo" loading="lazy" src="/assets/images/clients/bitdefender.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="123 FormBuilder" className="home_logo" loading="lazy" src="/assets/images/clients/123formbuilder.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="EaseUS" className="home_logo" loading="lazy" src="/assets/images/clients/easeus.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="Mondly" className="home_logo" loading="lazy" src="/assets/images/clients/mondly.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <div className="home_logos-item w-dyn-item" role="listitem">
                              <img alt="ViewSonic" className="home_logo" loading="lazy" src="/assets/images/clients/viewsonic.png" style={{ height: "28px", width: "auto" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-section-js w-embed w-script">
              <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "document.addEventListener(\"DOMContentLoaded\", function () {\n                  // ---------------------------------------------------------------\n                  // FALLBACK HANDSHAKE: if GSAP or ScrollTrigger failed to load,\n                  // bail out WITHOUT adding the hero-js class \u2014 the head CSS will\n                  // reveal the images at 2s. Only once both are confirmed present is\n                  // the fallback disarmed and control taken over.\n                  // ---------------------------------------------------------------\n                  if (!window.gsap || !window.ScrollTrigger) return;\n                  document.documentElement.classList.add(\"hero-js\");\n\n                  gsap.registerPlugin(ScrollTrigger);\n\n                  var hero = document.querySelector('[data-section-hero=\"true\"]');\n                  if (!hero) return;\n\n                  // Which set did the <head> script pick? Animate only that one \u2014\n                  // hidden elements measure as 0x0 and would break the distance math.\n                  var activeSet = document.documentElement.getAttribute(\"data-hero-set\") || \"newton\";\n\n                  function pick(name, selector) {\n                    return activeSet === name ? hero.querySelector(selector) : null;\n                  }\n\n                  var newton = pick(\"newton\", '[data-image-newton-anim=\"true\"]');\n                  var newtonMain = pick(\"newton\", '[data-image-newton-anim-main=\"true\"]');\n                  var einstein = pick(\"einstein\", '[data-image-einstein-anim=\"true\"]'); // the cloud\n                  var einsteinMain = pick(\"einstein\", '[data-image-einstein-anim-main=\"true\"]');\n                  var franklin = pick(\"franklin\", '[data-image-franklin-anim=\"true\"]');\n                  var franklinMain = pick(\"franklin\", '[data-image-franklin-anim-main=\"true\"]');\n\n                  if (!newton && !newtonMain && !einstein && !einsteinMain && !franklin && !franklinMain) return;\n\n                  // -----------------------------------------------------------------\n                  // Helper: how far the hero's top sits below the document top.\n                  // At scroll 0 this equals the space taken by the top-banner + navbar\n                  // above it. Used to offset the ScrollTrigger start so the animation\n                  // begins at the very first pixel of scroll.\n                  // -----------------------------------------------------------------\n                  function heroTopOffset() {\n                    return Math.round(hero.getBoundingClientRect().top + window.pageYOffset);\n                  }\n\n                  // The cloud's resting opacity, as set in Webflow. The intro must return\n                  // to THIS value, not to 1, or the image comes back too bright.\n                  var EINSTEIN_OPACITY = 0.65;\n\n                  var einsteinReturning = false; // true while the (load or re-entry) intro is playing\n\n                  // -----------------------------------------------------------------\n                  // Park the cloud completely out of sight. Called synchronously the\n                  // instant an intro is requested, and again as a zero-duration set at\n                  // position 0 of the intro timeline. y/rotation reset too, so it\n                  // re-enters level rather than still tilted from the exit.\n                  // FLICKER FIX: visibility:'visible' is set here \u2014 the element arrives\n                  // pre-hidden by the <head> CSS, and this is the safe moment to reveal\n                  // it (it is off-screen AND at opacity 0 in the very same set() call).\n                  // -----------------------------------------------------------------\n                  function parkEinsteinCloud() {\n                    if (!einstein) return;\n                    gsap.set(einstein, {\n                      x: -window.innerWidth, // far beyond the left edge\n                      y: 0,\n                      rotation: 0,\n                      opacity: 0, // belt and braces: invisible even if it pokes out\n                      visibility: \"visible\", // \u2190 reveal (pre-hidden by head CSS)\n                    });\n                  }\n\n                  // -----------------------------------------------------------------\n                  // Einstein EXIT \u2014 PAUSED timeline; its progress is driven by hand from\n                  // the scroll position (see onUpdate). ease:'none' so it maps linearly;\n                  // all the smoothing comes from the follower further down.\n                  // -----------------------------------------------------------------\n                  var einsteinExit = gsap.timeline({ paused: true });\n                  if (einstein) {\n                    einsteinExit.to(einstein, { y: \"80%\", rotation: -45, opacity: 0, ease: \"none\" }, 0);\n                  }\n                  if (einsteinMain) {\n                    einsteinExit.to(\n                      einsteinMain,\n                      {\n                        // push fully past the RIGHT edge, measured from the CURRENT left\n                        x: function () {\n                          return window.innerWidth - einsteinMain.getBoundingClientRect().left + 200;\n                        },\n                        rotation: -30,\n                        ease: \"none\",\n                      },\n                      0,\n                    );\n                  }\n\n                  // -----------------------------------------------------------------\n                  // Measure where einsteinMain naturally sits, so the intro knows how far\n                  // off-screen-left it has to start from. Only measured at rest.\n                  // -----------------------------------------------------------------\n                  var mainHomeLeft = 0,\n                    mainWidth = 0;\n                  function measureEinsteinMain() {\n                    if (!einsteinMain || einsteinReturning || einsteinExit.progress() !== 0) return;\n                    mainWidth = einsteinMain.offsetWidth; // layout width, ignores transforms\n                    mainHomeLeft =\n                      einsteinMain.getBoundingClientRect().left -\n                      (parseFloat(gsap.getProperty(einsteinMain, \"x\")) || 0);\n                  }\n                  measureEinsteinMain();\n                  window.addEventListener(\"load\", measureEinsteinMain); // images may size late\n                  window.addEventListener(\"resize\", measureEinsteinMain);\n\n                  function offscreenLeftX() {\n                    // fully past the left edge, + buffer so nothing pokes out at the start\n                    return -(mainHomeLeft + mainWidth + 200);\n                  }\n\n                  // -----------------------------------------------------------------\n                  // Einstein RE-ENTRY / LOAD INTRO. immediateRender:false everywhere\n                  // keeps the images untouched until this actually plays.\n                  // -----------------------------------------------------------------\n                  var einsteinIntro = gsap.timeline({ paused: true });\n                  if (einstein) {\n                    // FIRST thing the intro does: hide the cloud off-screen. A\n                    // zero-duration .set() rather than a callback on purpose \u2014\n                    // restart() suppresses callbacks at time 0 but always renders tweens.\n                    einsteinIntro.set(\n                      einstein,\n                      {\n                        x: function () {\n                          return -window.innerWidth;\n                        },\n                        y: 0,\n                        rotation: 0,\n                        opacity: 0,\n                        visibility: \"visible\", // FLICKER FIX: safe to reveal \u2014 off-screen + opacity 0\n                      },\n                      0,\n                    );\n                  }\n                  if (einsteinMain) {\n                    // Straight run from off-screen left to the home position.\n                    // Opacity is left alone so Webflow's own value survives.\n                    // FLICKER FIX: visibility:'visible' in the FROM state \u2014 the element\n                    // is revealed on the same tick it is placed off-screen, never at home.\n                    einsteinIntro.fromTo(\n                      einsteinMain,\n                      { x: offscreenLeftX, y: \"-50%\", rotation: 20, visibility: \"visible\" },\n                      {\n                        x: 0,\n                        y: 0,\n                        rotation: 0,\n                        duration: 3,\n                        ease: \"power3.out\",\n                        immediateRender: false,\n                      },\n                      0,\n                    );\n                  }\n                  if (einstein) {\n                    // Flies in from beyond the left edge at the halfway point of\n                    // einsteinMain's 3s move (3 / 2 = 1.5), fading 0 \u2192 Webflow's 65%.\n                    einsteinIntro.fromTo(\n                      einstein,\n                      {\n                        x: function () {\n                          return -window.innerWidth;\n                        },\n                        y: 0,\n                        rotation: 0,\n                        opacity: 0,\n                      },\n                      {\n                        x: 0,\n                        y: 0,\n                        rotation: 0,\n                        opacity: EINSTEIN_OPACITY,\n                        duration: 1,\n                        ease: \"power3.out\",\n                        immediateRender: false,\n                      },\n                      1.5,\n                    );\n                  }\n\n                  // When the intro finishes, hand Einstein back to the scroll and let the\n                  // exit re-record its start values from the fresh home position.\n                  einsteinIntro.eventCallback(\"onComplete\", function () {\n                    einsteinReturning = false;\n                    einsteinProxy.p = 0;\n                    einsteinExit.invalidate().progress(0);\n                    measureEinsteinMain();\n                  });\n\n                  // -----------------------------------------------------------------\n                  // ONE entry point for the intro \u2014 used by BOTH the first page load and\n                  // the scroll-back-up re-entry, so the two behave identically.\n                  // restart() renders time 0 synchronously, so by the time this function\n                  // returns, both elements are already positioned off-screen AND revealed\n                  // \u2014 all inside one JS task, no frame can paint in between.\n                  // -----------------------------------------------------------------\n                  function playEinsteinIntro() {\n                    einsteinReturning = true;\n                    gsap.killTweensOf(einsteinProxy); // stop the follower mid-flight\n                    parkEinsteinCloud(); // hide the cloud immediately + reveal element\n                    einsteinExit.invalidate(); // forget cached distances\n                    einsteinIntro.invalidate().restart(); // re-measure + play from the left\n                  }\n\n                  // -----------------------------------------------------------------\n                  // Smoothing follower: scroll sets a target, this eases toward it and\n                  // feeds the eased value into the exit timeline. Raise duration for\n                  // an even softer, laggier feel.\n                  // -----------------------------------------------------------------\n                  var einsteinProxy = { p: 0 };\n                  function driveEinsteinExit(target) {\n                    gsap.to(einsteinProxy, {\n                      p: target,\n                      duration: 1.2, // \u2190 smoothness dial\n                      ease: \"power3.out\",\n                      overwrite: true,\n                      onUpdate: function () {\n                        einsteinExit.progress(einsteinProxy.p);\n                      },\n                    });\n                  }\n\n                  // -----------------------------------------------------------------\n                  // NEWTON + FRANKLIN scrubbed timeline + the shared ScrollTrigger.\n                  // -----------------------------------------------------------------\n                  var tl = gsap.timeline({\n                    scrollTrigger: {\n                      trigger: hero,\n\n                      // Start at the very first pixel of scroll \u2014 offset by the hero's\n                      // distance from the document top (~150px of banner + navbar).\n                      start: function () {\n                        return \"top top+=\" + heroTopOffset();\n                      },\n\n                      // End after scrolling ~75% of the hero section's own height.\n                      // Tune the 0.75 multiplier: 0.70 = sooner, 0.80 = later.\n                      end: function () {\n                        return \"+=\" + hero.offsetHeight * 0.75;\n                      },\n\n                      scrub: 1, // Newton's + Franklin's smoothing\n                      invalidateOnRefresh: true, // re-measure on resize\n                      onUpdate: function (self) {\n                        if (!einsteinReturning) driveEinsteinExit(self.progress);\n                      },\n                      onEnterBack: function () {\n                        // scrolled back up into hero \u2192 play the intro\n                        playEinsteinIntro();\n                      },\n                      onLeave: function () {\n                        // scrolled back down mid-intro: abandon the half-played intro and\n                        // hand Einstein straight back to the scroll.\n                        if (!einsteinReturning) return;\n                        einsteinReturning = false;\n                        einsteinIntro.pause();\n                        einsteinExit.invalidate().progress(0); // re-record from live state \u2192 no jump\n                        einsteinProxy.p = 0;\n                        driveEinsteinExit(1);\n                      },\n                      // markers: true             // uncomment to debug start/end positions\n                    },\n                  });\n\n                  // Newton foreground: slide fully off the top + rotate to -30deg.\n                  if (newton) {\n                    tl.to(\n                      newton,\n                      {\n                        y: function () {\n                          return -(newton.getBoundingClientRect().bottom + 120);\n                        },\n                        rotation: -30,\n                        duration: 1,\n                        ease: \"none\",\n                      },\n                      0,\n                    );\n                  }\n                  // Newton parallax layer: rise by 3rem (spans the whole range)\n                  if (newtonMain) {\n                    tl.to(newtonMain, { y: \"-3rem\", duration: 1, ease: \"none\" }, 0);\n                  }\n\n                  // Franklin foreground: fade only \u2014 40% \u2192 100% over the first 40%.\n                  if (franklin) {\n                    tl.to(franklin, { opacity: 1, duration: 0.4, ease: \"none\" }, 0);\n                  }\n                  // Franklin main: partial exit \u2014 25% of the way toward the LEFT edge.\n                  if (franklinMain) {\n                    tl.to(\n                      franklinMain,\n                      {\n                        x: function () {\n                          return -franklinMain.getBoundingClientRect().right * 0.25;\n                        },\n                        duration: 1,\n                        ease: \"none\",\n                      },\n                      0,\n                    );\n                  }\n\n                  // -----------------------------------------------------------------\n                  // FRANKLIN LOAD INTRO (client request): slight move to the RIGHT on\n                  // load. Animates xPercent while the scroll owns x \u2014 the two channels\n                  // compose independently, so they can never conflict.\n                  // FLICKER FIX: the element arrives pre-hidden by the head CSS.\n                  // fromTo renders its FROM state immediately (synchronously, right\n                  // here), so the element is revealed already nudged -4% left \u2014 it can\n                  // never flash at its home position first. Tune -4 for the nudge size.\n                  // -----------------------------------------------------------------\n                  if (franklinMain) {\n                    gsap.fromTo(\n                      franklinMain,\n                      { xPercent: -4, visibility: \"visible\" },\n                      { xPercent: 0, duration: 1.4, ease: \"power3.out\" },\n                    );\n                  }\n\n                  // -----------------------------------------------------------------\n                  // EINSTEIN LOAD INTRO (client request): play the same intro once on\n                  // first page load, if the hero is still in view. If the page loads\n                  // already scrolled past the hero, the intro is skipped \u2014 but the\n                  // elements must STILL be revealed (they arrive pre-hidden by the head\n                  // CSS), placed straight into their scrolled-out exit state so nothing\n                  // flashes on screen; the scroll follower owns them from there.\n                  // -----------------------------------------------------------------\n                  if (activeSet === \"einstein\" && (einstein || einsteinMain)) {\n                    if (hero.getBoundingClientRect().bottom > 0) {\n                      // hero (at least partly) visible on load \u2192 full intro\n                      playEinsteinIntro();\n                    } else {\n                      // loaded past the hero \u2192 skip the intro, jump to the exited state,\n                      // then reveal. Both happen synchronously, so no flash is possible.\n                      einsteinProxy.p = 1;\n                      einsteinExit.progress(1);\n                      gsap.set([einstein, einsteinMain].filter(Boolean), { visibility: \"visible\" });\n                    }\n                  }\n                });" }} />
            </div>
            <div className="hero-heading-css w-embed">
              <style dangerouslySetInnerHTML={{ __html: "\n                .roll-link::after {\n                  content: \"\";\n                  display: inline-block;\n                  width: 30px;\n                  height: 30px;\n                  margin-left: 2rem;\n                  vertical-align: middle;\n                  background-color: #7dc8ff;\n                  -webkit-mask: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"%3E%3Cpath d=\"M8.65385 7.5V9.80769H18.5654L7.5 20.8731L9.12692 22.5L20.1923 11.4346V21.3462H22.5V7.5H8.65385Z\"/%3E%3C/svg%3E')\n                    no-repeat center / contain;\n                  mask: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"%3E%3Cpath d=\"M8.65385 7.5V9.80769H18.5654L7.5 20.8731L9.12692 22.5L20.1923 11.4346V21.3462H22.5V7.5H8.65385Z\"/%3E%3C/svg%3E')\n                    no-repeat center / contain;\n                  transition: transform 0.3s ease;\n                }\n\n                .roll-link:hover::after {\n                  transform: translateX(-0.75rem);\n                }\n\n                @media (max-width: 767px) {\n                  .roll-link::after {\n                    margin-left: 1rem;\n                  }\n\n                  .roll-link:hover::after {\n                    transform: translateX(-0.5rem);\n                  }\n                }\n              " }} />
            </div>
          </div>
        </section>
        <section className="home_animation-section">
          <div className="hide w-embed w-script">
            <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger);\n\n              const startTop = window.innerWidth < 479 ? 17 : window.innerWidth < 768 ? 12 : 13;\n\n              ScrollTrigger.create({\n                trigger: \".home_vertical-line\",\n                start: \"top 50%\",\n                end: \"bottom 50%\",\n                onUpdate: (self) => {\n                  gsap.set(\".line-circle\", { top: `${startTop + self.progress * (100 - startTop)}%` });\n                },\n              });" }} />
          </div>
          <div className="v2-padding-global _w-100">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home_text-wrapper">
                <div className="max-width-533 no-tablet">
                  <h3 className="t-heading-3-rg text-c-blue-light-900">
                    {"\n                    99.99% SLA-backed uptime. 500+ projects delivered. 98% client retention. 24/7 support coverage.\n                  "}
                  </h3>
                </div>
                <div className="max-width-445 no-tablet" id="w-node-a4afaaef-90f0-ffb4-f1f9-caad29e28469-87f82a27">
                  <p className="t-paragraph-1-rg-twk">
                    {"\n                    Support that matches the stakes. "}
                    <br />
                    <br />
                    {"Every enterprise engagement includes 24/7 coverage,\n                    defined response targets by severity, named escalation contacts, and quarterly service reviews \u2014\n                    backed by our published SLA commitments."}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home_cards-section">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-cards-wrapper">
                <div className="home_cards-toc" id="w-node-_280a458b-2f96-b33b-93ab-2071882dd4c2-87f82a27">
                  <div className="home_cards-toc-wrapper no-scrollbar">
                    <a className="home_cards-toc-link w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd4c4" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd4c4" href="#enterprise-software">
                      <div className="cards-toc-circle" />
                      <div className="t-label-1-rg blue-light-900">
                        {"Enterprise Software"}
                      </div>
                    </a>
                    <a className="home_cards-toc-link w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6804c697-adf2-6eda-fc20-adf365860441" data-wf-native-id-path="6804c697-adf2-6eda-fc20-adf365860441" href="#digital-transformation">
                      <div className="cards-toc-circle" />
                      <div className="t-label-1-rg blue-light-900">
                        {"Digital Transformation"}
                      </div>
                    </a>
                    <a className="home_cards-toc-link w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd4c8" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd4c8" href="#crm-development">
                      <div className="cards-toc-circle" />
                      <div className="t-label-1-rg blue-light-900">
                        {"CRM Development"}
                      </div>
                    </a>
                    <a className="home_cards-toc-link w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd4cc" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd4cc" href="#erp-development">
                      <div className="cards-toc-circle" />
                      <div className="t-label-1-rg blue-light-900">
                        {"ERP Development"}
                      </div>
                    </a>
                    <a className="home_cards-toc-link w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd4d0" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd4d0" href="#cybersecurity">
                      <div className="cards-toc-circle" />
                      <div className="t-label-1-rg blue-light-900">
                        {"Cybersecurity"}
                      </div>
                    </a>
                  </div>
                  <div className="hide w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                      .home_cards-toc-link.w--current .cards-toc-circle {\n                        opacity: 100%;\n                      }\n\n                      .home_cards-toc-link .cards-toc-circle {\n                        opacity: 0%;\n                      }\n                    " }} />
                  </div>
                  <div className="hide w-embed w-script">
                    <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "function initTocScroll() {\n                        const mq = window.matchMedia(\"(max-width: 768px)\");\n\n                        function setup() {\n                          if (!mq.matches) return;\n                          const wrapper = document.querySelector(\".home_cards-toc-wrapper\");\n                          if (!wrapper) return;\n\n                          const links = wrapper.querySelectorAll(\".home_cards-toc-link\");\n                          if (!links.length) return;\n\n                          const observer = new MutationObserver(() => {\n                            const activeLink = wrapper.querySelector(\".w--current\");\n                            if (!activeLink) return;\n\n                            const targetLeft =\n                              activeLink.offsetLeft -\n                              wrapper.offsetLeft -\n                              wrapper.offsetWidth / 2 +\n                              activeLink.offsetWidth / 2;\n\n                            try {\n                              wrapper.scrollTo({\n                                left: targetLeft,\n                                behavior: \"smooth\",\n                              });\n                            } catch (e) {\n                              wrapper.scrollLeft = targetLeft;\n                            }\n                          });\n\n                          links.forEach((link) => {\n                            observer.observe(link, { attributes: true, attributeFilter: [\"class\"] });\n                          });\n                        }\n\n                        // Try immediately\n                        setup();\n\n                        // Retry after Webflow finishes rendering\n                        window.addEventListener(\"load\", setup);\n\n                        // Also retry after a short delay as a fallback\n                        setTimeout(setup, 1500);\n\n                        if (mq.addEventListener) {\n                          mq.addEventListener(\"change\", setup);\n                        } else if (mq.addListener) {\n                          mq.addListener(setup);\n                        }\n                      }\n\n                      if (document.readyState === \"loading\") {\n                        document.addEventListener(\"DOMContentLoaded\", initTocScroll);\n                      } else {\n                        initTocScroll();\n                      }" }} />
                  </div>
                  <div className="cards-toc-circle is-end" />
                  <div className="hide w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                      @media only screen and (max-width: 992px) {\n                        .home_cards-toc-link {\n                          min-width: fit-content;\n                          flex-shrink: 0;\n                        }\n                      }\n                    " }} />
                  </div>
                </div>
                <div className="home_cards-wrapper">
                  <div className="home_card-grid more-gap is-first w-node-_280a458b-2f96-b33b-93ab-2071882dd4d8-87f82a27" id="enterprise-software">
                    <div className="home_card-content" data-w-id="280a458b-2f96-b33b-93ab-2071882dd4d9">
                      <div className="new-realease-stroke">
                        <div className="home_card-logo is-new-release-tag">
                          <div className="circle-6-6" />
                          <div className="t-label-1-rg text-c-blue-light-800">
                            {"WHAT WE DO"}
                          </div>
                        </div>
                        <div className="tag-glow" />
                      </div>
                      <div className="spacer-16" />
                      <div className="max-width-384 no-tablet">
                        <h4 className="t-heading-5-rg text-c-white balance">
                          {"Enterprise Software Development"}
                        </h4>
                      </div>
                      <div className="spacer-64 _40-landscape" />
                      <div className="text-rich-text-v2-in-section w-richtext">
                        <p>
                          {"\n                          Mission-critical systems engineered for scale, security, and governance \u2014 built to integrate\n                          with the tools you already run. Five practices, one accountable partner.\n                        "}
                        </p>
                      </div>
                      <div className="spacer-40 _32-landscape" />
                      <a className="button-v2-full-width w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-inline-block" data-wf--button--variant="secondary---arrow" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd4f9%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd4f9:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0">
                          {"\n                          Talk to engineering\n                        "}
                        </div>
                        <div className="embed-icon is-btn-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="feature-card-wrapper">
                      <img alt="Abstract network graph visualization" className="feature-card-image" loading="eager" src="/assets/images/graph-2.avif" />
                      <div className="feature-card-glow is-bigger" />
                    </div>
                  </div>
                  <div className="home_card-grid more-gap w-node-a753817d-b387-773a-bc77-abd881d88aa3-87f82a27" id="digital-transformation">
                    <div className="home_card-content">
                      <div className="home_card-logo">
                        <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/Frame-2147254707-2.svg" />
                        <div className="t-label-1-rg blue-light-900">
                          {"Digital Transformation"}
                        </div>
                      </div>
                      <div className="spacer-16" />
                      <div className="max-width-384 no-tablet">
                        <h4 className="t-heading-5-rg text-c-white">
                          {"Modernize how your organization builds and runs software"}
                        </h4>
                      </div>
                      <div className="spacer-64 _40-landscape" />
                      <div className="text-rich-text-v2-in-section w-richtext">
                        <p>
                          {"\n                          From legacy systems to cloud-native, automated delivery \u2014 without a risky big-bang\n                          rewrite."}
                          <br />
                        </p>
                      </div>
                      <div className="spacer-40 _32-landscape" />
                      <a className="button-v2-full-width w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-inline-block" data-wf--button--variant="secondary---arrow" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22a753817d-b387-773a-bc77-abd881d88ac4%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="a753817d-b387-773a-bc77-abd881d88ac4:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0">
                          {"\n                          Talk to engineering\n                        "}
                        </div>
                        <div className="embed-icon is-btn-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="feature-card-wrapper">
                      <img alt="Engineering team collaborating in an office" className="feature-card-image" loading="eager" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1456&h=1092&q=80" />
                      <div className="feature-card-glow" />
                    </div>
                  </div>
                  <div className="home_card-grid more-gap w-node-_280a458b-2f96-b33b-93ab-2071882dd4fe-87f82a27" id="crm-development">
                    <div className="home_card-content">
                      <div className="home_card-logo">
                        <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/Frame-2147254707-1-2.svg" />
                        <div className="t-label-1-rg blue-light-900">
                          {"Custom CRM Development"}
                        </div>
                      </div>
                      <div className="spacer-16" />
                      <h4 className="t-heading-5-rg text-c-white">
                        {"CRM systems built around your actual sales and service processes"}
                      </h4>
                      <div className="spacer-64 _40-landscape" />
                      <div className="text-rich-text-v2-in-section w-richtext">
                        <p>
                          {"\n                          Not a rigid off-the-shelf tool you fight against \u2014 a CRM shaped to your process."}
                          <br />
                        </p>
                      </div>
                      <div className="spacer-40 _32-landscape" />
                      <a className="button-v2-full-width w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-inline-block" data-wf--button--variant="secondary---arrow" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd51a%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd51a:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0">
                          {"\n                          Talk to engineering\n                        "}
                        </div>
                        <div className="embed-icon is-btn-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="feature-card-wrapper">
                      <img alt="Team reviewing plans around a meeting table" className="feature-card-image no-radius" loading="eager" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1456&h=1092&q=80" />
                      <div className="feature-card-glow" />
                    </div>
                  </div>
                  <div className="home_card-grid more-gap w-node-_280a458b-2f96-b33b-93ab-2071882dd51f-87f82a27" id="erp-development">
                    <div className="home_card-content">
                      <div className="home_card-logo">
                        <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/updated-2.svg" />
                        <div className="t-label-1-rg blue-light-900">
                          {"ERP Development"}
                        </div>
                      </div>
                      <div className="spacer-16" />
                      <div className="max-width-310 no-tablet">
                        <h4 className="t-heading-5-rg text-c-white">
                          {"One source of truth for operations"}
                        </h4>
                      </div>
                      <div className="spacer-64 _40-landscape" />
                      <div className="text-rich-text-v2-in-section w-richtext">
                        <p>
                          {"\n                          Custom ERP modules that connect finance, operations, and inventory into one source of truth\n                          tailored to your business.\n                        "}
                        </p>
                      </div>
                      <div className="spacer-40 _32-landscape" />
                      <a className="button-v2-full-width w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-inline-block" data-wf--button--variant="secondary---arrow" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd53b%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd53b:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0">
                          {"\n                          Talk to engineering\n                        "}
                        </div>
                        <div className="embed-icon is-btn-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="feature-card-wrapper">
                      <img alt="Colleagues working together at a whiteboard" className="feature-card-image no-radius" loading="eager" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1456&h=1092&q=80" />
                      <div className="feature-card-glow" />
                    </div>
                  </div>
                  <div className="home_card-grid more-gap w-node-_280a458b-2f96-b33b-93ab-2071882dd540-87f82a27" id="cybersecurity">
                    <div className="home_card-content">
                      <div className="home_card-logo">
                        <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/updated.svg" />
                        <div className="t-label-1-rg blue-light-900">
                          {"Cybersecurity Services"}
                        </div>
                      </div>
                      <div className="spacer-16" />
                      <h4 className="t-heading-5-rg text-c-white">
                        {"Reduce risk across your applications and infrastructure"}
                      </h4>
                      <div className="spacer-64 _40-landscape" />
                      <div className="text-rich-text-v2-in-section w-richtext">
                        <p>
                          {"\n                          Reviews, hardening, and monitoring built for real threats.\n                        "}
                        </p>
                      </div>
                      <div className="spacer-40 _32-landscape" />
                      <a className="button-v2-full-width w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-inline-block" data-wf--button--variant="secondary---arrow" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd55e%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd55e:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0">
                          {"Talk to engineering"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-variant-f44e612c-d93f-d147-e6a4-fd7888246ef0 w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="feature-card-wrapper">
                      <img alt="Earth at night seen from orbit with city lights" className="feature-card-image" loading="eager" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1456&h=1092&q=80" />
                      <div className="feature-card-glow" />
                    </div>
                  </div>
                  <div className="spacer-150 _100-landscape" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div light-bg="true">
          <section className="home_frameworks-section">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="v2-home-frameworks-wrapper">
                  <div className="frameworks-heading-wrapper">
                    <div className="max-width-445 no-tablet">
                      <h3 className="t-heading-3-rg">
                        {"A delivery model your governance team will approve of"}
                      </h3>
                    </div>
                    <div className="heading-text-wrapper">
                      <div className="max-width-445 no-tablet">
                        <p className="t-paragraph-1-rg-twk">
                          {"\n                          Three phases, one accountable partner \u2014 from assessment and architecture through governed\n                          delivery to 24/7 operations.\n                        "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frameworks-3col-grid">
                    <a className="frameworks-col-wrapper w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd59f" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd59f" href="/contact">
                      <img alt="" className="framework-image" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 912px" src="/assets/images/graph-2.avif" srcSet="/assets/images/graph-2-p-500.avif 500w, /assets/images/graph-2.avif 912w" />
                      <div className="spacer-32 _24-tablet" />
                      <div className="framework-content-wrapper">
                        <div>
                          <div className="home_card-logo">
                            <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/Frame-2147255016.svg" />
                            <div className="t-paragraph-1-rg">
                              {"Step 1"}
                            </div>
                          </div>
                          <div className="spacer-24" />
                          <h5 className="t-heading-5-rg">
                            {"Assessment & architecture"}
                          </h5>
                          <div className="spacer-16 _8-landscape" />
                          <div className="t-paragraph-2-rg">
                            {"We map systems, constraints, compliance requirements, and risks before any code is written"}
                          </div>
                          <div className="spacer-24" />
                        </div>
                        <div className="button-arrow-no-hover">
                          <div className="t-label-1-rg">
                            {"Talk to engineering"}
                          </div>
                          <div className="embed-icon link-arrow w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="frameworks-col-wrapper w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd5b3" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5b3" href="/contact">
                      <img alt="" className="framework-image" loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 912px" src="/assets/images/graph.avif" srcSet="/assets/images/graph-p-500.avif 500w, /assets/images/graph.avif 912w" />
                      <div className="spacer-32 _24-tablet" />
                      <div className="framework-content-wrapper">
                        <div>
                          <div className="home_card-logo">
                            <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/updated-1.svg" />
                            <div className="t-paragraph-1-rg">
                              {"Step 2"}
                            </div>
                          </div>
                          <div className="spacer-24 _16-landscape" />
                          <h5 className="t-heading-5-rg">
                            {"Governed delivery"}
                          </h5>
                          <div className="spacer-16 _8-landscape" />
                          <div className="t-paragraph-2-rg">
                            {"Reviewable increments, automated tests on every commit, audit trails, and RBAC baked into the process \u2014 with roadmaps and metrics visible to your stakeholders in real time"}
                          </div>
                          <div className="spacer-24" />
                        </div>
                        <div className="button-arrow-no-hover">
                          <div className="t-label-1-rg">
                            {"Talk to engineering"}
                          </div>
                          <div className="embed-icon link-arrow w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a className="frameworks-col-wrapper w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd5c7" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5c7" href="/contact">
                      <img alt="" className="framework-image" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 912px" src="/assets/images/graph-1.avif" srcSet="/assets/images/graph-1-p-500.avif 500w, /assets/images/graph-1.avif 912w" />
                      <div className="spacer-32 _24-tablet" />
                      <div className="framework-content-wrapper">
                        <div>
                          <div className="home_card-logo">
                            <img alt="" className="icon-40-40 is-v2" loading="lazy" src="/assets/images/Frame-2147254720.svg" />
                            <div className="t-paragraph-1-rg">
                              {"Step 3"}
                            </div>
                          </div>
                          <div className="spacer-24" />
                          <h5 className="t-heading-5-rg">
                            {"Operate & improve"}
                          </h5>
                        </div>
                        <div className="spacer-16 _8-landscape" />
                        <div className="t-paragraph-2-rg">
                          {"High-availability deployment, 24/7 monitoring, incident response, and continuous improvement backed by our SLA policy"}
                        </div>
                        <div className="spacer-24" />
                        <div className="button-arrow-no-hover">
                          <div className="t-label-1-rg">
                            {"Talk to engineering"}
                          </div>
                          <div className="embed-icon link-arrow w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hide w-embed">
              <style dangerouslySetInnerHTML={{ __html: "\n                .frameworks-col-wrapper:hover .link-arrow {\n                  transform: translateX(-0.75rem);\n                }\n\n                .frameworks-col-wrapper:hover .button-arrow-no-hover {\n                  color: var(--_v-2-colors---c-blue-dark--900);\n                }\n              " }} />
            </div>
          </section>
          <section className="home_usecases-section">
            <div className="full-width-line hide-mobile-landscape" />
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="v2-home-use-cases">
                  <div className="v2-use-cases-wrapper">
                    <div className="use-cases-heading-wrapper">
                      <div className="max-width-600">
                        <h2 className="t-heading-3-rg">
                          {"Built for scale, governed by default"}
                        </h2>
                      </div>
                      <div className="hide-mobile-landscape">
                        <a className="button-v2-full-width w-variant-2e956572-b1af-5b84-be93-9608dcc82abe w-inline-block" data-wf--button--variant="primary---dark" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd5e7%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5e7:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                          <div className="no-wrap-arrow">
                            {"Talk to engineering"}
                          </div>
                          <div className="embed-icon is-btn-arrow w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="use-cases-swiper is-v2">
                      <div className="swiper-wrapper v2-is-use-cases">
                        <a className="swiper-slide v2-is-use-cases w-inline-block" data-wf--use-case-element--variant="base" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22316b0850-729d-f8ad-7e5d-a0af3c322bc3%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd5eb%22%7D%5D" data-wf-element-id="316b0850-729d-f8ad-7e5d-a0af3c322bc3" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5eb:316b0850-729d-f8ad-7e5d-a0af3c322bc3" href="/contact">
                          <div className="v2-use-cases-box">
                            <div className="t-label-1-rg">
                              {"Security by default"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"\n                                  Least privilege, encryption, and auditability designed in from the first line of code\n                                  \u2014 not bolted on before an audit\n                                "}
                                </p>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Talk to engineering"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="swiper-slide v2-is-use-cases w-inline-block" data-wf--use-case-element--variant="base" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22316b0850-729d-f8ad-7e5d-a0af3c322bc3%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd5f2%22%7D%5D" data-wf-element-id="316b0850-729d-f8ad-7e5d-a0af3c322bc3" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5f2:316b0850-729d-f8ad-7e5d-a0af3c322bc3" href="/contact">
                          <div className="v2-use-cases-box">
                            <div className="t-label-1-rg">
                              {"Compliance-ready delivery"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"\n                                  ISO 27001 and SOC 2 Type II certified operations, GDPR-aligned data handling, and\n                                  HIPAA-ready infrastructure for regulated workloads\n                                "}
                                </p>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Talk to engineering"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="swiper-slide v2-is-use-cases w-inline-block" data-wf--use-case-element--variant="base" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22316b0850-729d-f8ad-7e5d-a0af3c322bc3%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd5f6%22%7D%5D" data-wf-element-id="316b0850-729d-f8ad-7e5d-a0af3c322bc3" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5f6:316b0850-729d-f8ad-7e5d-a0af3c322bc3" href="/contact">
                          <div className="v2-use-cases-box">
                            <div className="t-label-1-rg">
                              {"Integration depth"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"\n                                  SSO/SAML, RBAC, and clean integration with the ERP, CRM, and identity systems you\n                                  already run \u2014 no rip-and-replace\n                                "}
                                </p>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Talk to engineering"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="swiper-slide v2-is-use-cases w-inline-block" data-wf--use-case-element--variant="base" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22316b0850-729d-f8ad-7e5d-a0af3c322bc3%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd5fa%22%7D%5D" data-wf-element-id="316b0850-729d-f8ad-7e5d-a0af3c322bc3" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd5fa:316b0850-729d-f8ad-7e5d-a0af3c322bc3" href="/contact">
                          <div className="v2-use-cases-box">
                            <div className="t-label-1-rg">
                              {"Senior, stable teams"}
                            </div>
                            <div className="flex-y-space-between">
                              <div>
                                <p className="t-heading-6-rg">
                                  {"\n                                  Dedicated squads that stay for the long haul, with transparent roadmaps, metrics, and\n                                  trade-offs \u2014 not status theatre\n                                "}
                                </p>
                                <div className="spacer-40 _32-landscape" />
                              </div>
                              <div className="button-arrow-no-hover is-black">
                                <div className="t-label-1-rg">
                                  {"Talk to engineering"}
                                </div>
                                <div className="embed-icon link-arrow w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-elements">
                      <div className="swiper-dots">
                        <div className="swiper-dot is-active" />
                        <div className="swiper-dot" />
                        <div className="swiper-dot" />
                        <div className="swiper-dot" />
                      </div>
                      <div className="v2-swiper-buttons">
                        <button className="swiper-btn-prev">
                          <div className="embed-icon w-embed">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M-1.33514e-05 5.98687L5.98686 12L6.93215 11.0547L3.24288 7.36543L2.52078 6.66958H13.4967L13.4836 5.34355L2.49452 5.33041L3.15097 4.70022L6.91902 0.932166L5.98686 0L-1.33514e-05 5.98687Z" fill="#030710" />
                            </svg>
                          </div>
                        </button>
                        <button className="swiper-btn-next">
                          <div className="embed-icon w-embed">
                            <svg fill="none" height="12" viewBox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.4967 5.98687L7.50985 12L6.56455 11.0547L10.2538 7.36543L10.9759 6.66958H0L0.0131292 5.34355L11.0022 5.33041L10.3457 4.70022L6.57768 0.932166L7.50985 0L13.4967 5.98687Z" fill="#030710" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="hide w-embed w-script">
                      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/swiper12-bundle.min.js" />
                      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const useCasesSwiper = new Swiper(\".use-cases-swiper\", {\n                          slidesPerView: 1,\n                          spaceBetween: 16,\n                          grabCursor: true,\n                          loop: true,\n                          simulateTouch: true,\n                          breakpoints: {\n                            768: {\n                              slidesPerView: 2,\n                            },\n                            992: {\n                              slidesPerView: 3,\n                            },\n                            1280: {\n                              slidesPerView: 3,\n                            },\n                          },\n                          navigation: {\n                            prevEl: \".swiper-btn-prev\",\n                            nextEl: \".swiper-btn-next\",\n                          },\n                          pagination: {\n                            el: \".swiper-dots\",\n                            bulletClass: \"swiper-dot\",\n                            bulletActiveClass: \"is-active\",\n                            clickable: true,\n                          },\n                        });" }} />
                    </div>
                    <div className="w-embed">
                      <style dangerouslySetInnerHTML={{ __html: "\n                        .swiper-slide:hover .v2-use-cases-box {\n                          background: white;\n                        }\n\n                        a[data-wf--use-case-element--variant=\"no-link\"] {\n                          cursor: default;\n                        }\n                      " }} />
                    </div>
                    <div className="show-landscape">
                      <a className="button-v2-full-width w-variant-2e956572-b1af-5b84-be93-9608dcc82abe w-inline-block" data-wf--button--variant="primary---dark" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd610%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd610:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow">
                          {"Talk to engineering"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="use-cases-line">
                    <div className="line-circle-usecases" />
                  </div>
                  <div className="hide w-embed w-script">
                    <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "ScrollTrigger.create({\n                        trigger: \".use-cases-line\",\n                        start: \"top 50%\",\n                        end: \"bottom 50%\",\n                        onUpdate: (self) => {\n                          const circleHeight = document.querySelector(\".line-circle-usecases\").offsetHeight;\n                          const lineHeight = document.querySelector(\".use-cases-line\").offsetHeight;\n                          const maxPercent = ((lineHeight - circleHeight) / lineHeight) * 100;\n                          gsap.set(\".line-circle-usecases\", { top: `${16 + self.progress * (maxPercent - 16)}%` });\n                        },\n                      });" }} />
                  </div>
                  <div className="home-stats-wrapper">
                    <div className="max-width-809">
                      <h2 className="t-heading-2-rg">
                        {"Audited, certified, and ready for procurement"}
                      </h2>
                    </div>
                    <div className="spacer-100 _80-landscape" />
                    <div className="stats-3col">
                      <div className="stats-box">
                        <div className="t-label-3-rg">
                          {"ISO 27001"}
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"Certified information security management governing how we handle and protect client data"}
                        </div>
                      </div>
                      <div className="stats-box">
                        <div className="t-label-3-rg">
                          {"SOC 2 Type II"}
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"Independently audited controls for security, availability, and confidentiality"}
                        </div>
                      </div>
                      <div className="stats-box">
                        <div className="t-label-3-rg">
                          {"ISO 9001"}
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"Certified quality management for consistent, repeatable engineering and delivery"}
                        </div>
                      </div>
                      <div className="stats-box">
                        <div className="t-label-3-rg">
                          {"AWS Advanced Tier"}
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"Validated AWS expertise across architecture, migration, and managed operations"}
                        </div>
                      </div>
                      <div className="stats-box">
                        <div className="t-label-3-rg">
                          {"GDPR Compliant"}
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"Data handling, processing, and retention aligned with EU data protection law"}
                        </div>
                      </div>
                      <div className="stats-box">
                        <div className="t-label-3-rg">
                          {"HIPAA-Ready"}
                        </div>
                        <div className="t-label-1-rg is-opacity-60">
                          {"Engineering controls and infrastructure prepared for protected health workloads"}
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40 _32-landscape" />
                    <div className="t-label-1-rg is-opacity-60">
                      {"\n                      MSA, DPA, and security documentation available for procurement and vendor review \u2014\n                      "}
                      <a href="/contact">
                        {"contact us"}
                      </a>
                      {" to start the process.\n                    "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="home_cta-section">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-cta-wrapper">
                <div className="home-cta-image-wrapper">
                  <div className="cta-tablet-bg" />
                  <div className="cta-image-wrapper">
                    <img alt="" className="home-cta-image" loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1456&h=1092&q=80" srcSet="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&h=375&q=80 500w, https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1456&h=1092&q=80 1456w" />
                    <div className="cta-image-bg-desktop" />
                  </div>
                </div>
                <div className="home-cta-content-wrapper">
                  <div className="max-width-533">
                    <h2 className="t-heading-2-rg text-c-blue-light-900" text-letters-animation="">
                      {"\n                      Ready to put enterprise-grade engineering behind your roadmap?\n                    "}
                    </h2>
                  </div>
                  <div className="home-cta-content-absolute">
                    <div className="button-group v2">
                      <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd659%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd659:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow">
                          {"Talk to engineering"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                      <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22280a458b-2f96-b33b-93ab-2071882dd65a%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="280a458b-2f96-b33b-93ab-2071882dd65a:cc338c70-b506-f985-732b-95e9d08eb22b" href="/pricing">
                        <div className="no-wrap-arrow">
                          {"View pricing"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <p className="t-paragraph-1-rg-twk">
                      {"\n                      Tell us what you're running and where you need to be in twelve months \u2014 we'll map the\n                      path, the risks, and the team to get there.\n                    "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/jquery-3.5.1.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.6739ee8d3353008c.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.215811584586585b.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.958e3bbd.b4492d9062963867.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/gsap.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/ScrollTrigger.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/SplitText.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger, SplitText);" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "var Webflow = Webflow || [];\n      Webflow.push(function () {\n        // DOMready has fired\n        // May now use jQuery and Webflow api\n        document.querySelector(\".w-nav-button\").addEventListener(\"click\", function () {\n          var logo = document.querySelector(\".navbar_logo-svg\");\n\n          // Toggle 'open' class for both nav and logo\n          logo.classList.toggle(\"is-light\");\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "// Debounce function to limit the rate at which a function is executed\n      function debounce(func, wait) {\n        let timeout;\n        return function executedFunction(...args) {\n          const later = () => {\n            clearTimeout(timeout);\n            func(...args);\n          };\n          clearTimeout(timeout);\n          timeout = setTimeout(later, wait);\n        };\n      }\n\n      // Function to update video sources\n      function updateVideoSources() {\n        const videos = document.querySelectorAll(\"video\"); // Select all video elements\n        videos.forEach((video) => {\n          const sources = video.querySelectorAll(\"source[data-src]\"); // Select all source elements with a \"data-src\" attribute within each video\n          if (window.innerWidth > 990) {\n            sources.forEach((source) => {\n              source.src = source.getAttribute(\"data-src\"); // If screen width > 990, set src to data-src\n            });\n          } else {\n            sources.forEach((source) => {\n              source.src = \"#\";\n            });\n          }\n          video.load(); // Important: load the new source(s) into the video\n        });\n      }\n\n      // Event listener for DOMContentLoaded to run once on start\n      document.addEventListener(\"DOMContentLoaded\", function () {\n        updateVideoSources();\n      });\n\n      // Event listener for resize with debounce\n      window.addEventListener(\"resize\", debounce(updateVideoSources, 250)); // Debounce resize event" }} />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/split-type.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger);\n\n      // Shared animation factory\n      function animateLetters(el, { scrollTrigger, delay, colors, durations, stagger }) {\n        const { chars } = new SplitType(el, { types: \"words, chars\" });\n\n        // Set initial state\n        if (typeof colors.initial === \"function\") {\n          chars.forEach((char) => {\n            const c = colors.initial(char);\n            gsap.set(char, { opacity: 0.3, color: c });\n          });\n        } else {\n          gsap.set(chars, { opacity: 0.3, color: colors.initial });\n        }\n\n        if (delay !== undefined) gsap.set(el, { opacity: 1 });\n\n        const tl = gsap.timeline(scrollTrigger ? { scrollTrigger } : { delay: delay ?? 0 });\n\n        chars.forEach((char, i) => {\n          const highlight = typeof colors.highlight === \"function\" ? colors.highlight(char) : colors.highlight;\n          const base = typeof colors.base === \"function\" ? colors.base(char) : colors.base;\n          const offset = i * stagger;\n\n          tl.to(\n            char,\n            {\n              opacity: 1,\n              color: highlight,\n              textShadow: \"0 0 12px rgba(127, 200, 255, 0.6)\",\n              duration: durations[0],\n              ease: durations[2] || undefined,\n            },\n            offset,\n          ).to(\n            char,\n            {\n              color: base,\n              textShadow: \"none\",\n              duration: durations[1],\n              ease: durations[2] || undefined,\n            },\n            offset + durations[0],\n          );\n        });\n      }\n\n      const scrollConfig = (el, scrub = 0.3) => ({\n        trigger: el,\n        start: \"top bottom-=5%\",\n        end: \"center center-=5%\",\n        scrub,\n      });\n\n      // Scroll-triggered (light)\n      document.querySelectorAll(\"[text-letters-animation]\").forEach((el) => {\n        animateLetters(el, {\n          scrollTrigger: scrollConfig(el, 1), // increase scrub from 0.3 \u2192 1 for more lag/smoothing\n          colors: { initial: \"#7fc8ff\", highlight: \"#ffffff\", base: \"#7fc8ff\" },\n          durations: [0.8, 0.8], // slower highlight & fade (was 0.5, 0.5)\n          stagger: 0.15, // more spacing between letters (was 0.1)\n        });\n      });\n\n      // Page load\n      document.querySelectorAll(\"[text-letters-animation-start]\").forEach((el) => {\n        animateLetters(el, {\n          delay: 0.5,\n          colors: { initial: \"#7fc8ff\", highlight: \"#ffffff\", base: \"#7fc8ff\" },\n          durations: [0.15, 0.3, \"power2.out\"],\n          stagger: 0.03,\n        });\n      });\n\n      // Scroll-triggered (dark)\n      const getDarkColors = (char) => {\n        const isBlue = char.closest(\".text-c-blue-dark-400\");\n        return isBlue\n          ? { highlight: \"#ffffff\", base: \"#006ddd\", initial: \"#006ddd\" }\n          : { highlight: \"#7fc8ff\", base: \"#030710\", initial: \"#030710\" };\n      };\n\n      document.querySelectorAll(\"[text-letters-animation-dark]\").forEach((el) => {\n        animateLetters(el, {\n          scrollTrigger: scrollConfig(el),\n          colors: {\n            initial: (char) => getDarkColors(char).initial,\n            highlight: (char) => getDarkColors(char).highlight,\n            base: (char) => getDarkColors(char).base,\n          },\n          durations: [0.5, 0.5],\n          stagger: 0.1,\n        });\n      });\n\n      // Page load (dark)\n      document.querySelectorAll(\"[text-letters-animation-dark-start]\").forEach((el) => {\n        animateLetters(el, {\n          delay: 0.5,\n          colors: {\n            initial: (char) => getDarkColors(char).initial,\n            highlight: (char) => getDarkColors(char).highlight,\n            base: (char) => getDarkColors(char).base,\n          },\n          durations: [0.15, 0.3, \"power2.out\"],\n          stagger: 0.03,\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const navbar = document.querySelector(\".navbar2_component\");\n      const VARIANTS = {\n        light: \"w-variant-5ea50dfb-c632-4d13-5830-b2180e4df891\",\n        primaryDark: \"w-variant-2e956572-b1af-5b84-be93-9608dcc82abe\",\n        secondaryDark: \"w-variant-402b5851-8ab4-772f-b336-8fff22939a35\",\n        secondaryBase: \"w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9\",\n      };\n      const LIGHT_SELECTORS =\n        \".navbar2_container, .navbar2_logo.w-embed, .navbar2_menu.is-page-height-tablet.w-nav-menu, .navbar2_dropdwn-toggle.w-dropdown-toggle, .t-label-1-rg, .embed-icon.is-nav-arrow.w-embed, .navbar2_dropdown-list-wrapper.is-product, .t-label-1-rg.blue-light-500, .v2-navbar-divider, .v2-navbar-dropdown-link.w-inline-block, .t-paragraph-3-rg.text-c-white-60-p, .navbar2_link.t-label-1-rg.w-nav-link, .button-v2.w-inline-block, .embed-icon.is-btn-arrow.w-embed, .menu-icon2_line-top, .menu-icon2_line-middle, .menu-icon2_line-bottom, .nav-link\";\n      const BTN_CONFIG = [\n        { from: \"primary\", to: \"primary---dark\", variant: VARIANTS.primaryDark },\n        {\n          from: \"secondary\",\n          to: \"secondary---dark\",\n          variant: VARIANTS.secondaryDark,\n          embedIcon: true,\n        },\n      ];\n\n      function setNavbarTheme(isLight) {\n        const action = isLight ? \"add\" : \"remove\";\n\n        // Toggle navbar variant attribute\n        navbar.setAttribute(\"data-wf--navbar--variant\", isLight ? \"light\" : \"dark\");\n\n        // Toggle light variant on navbar + child elements\n        navbar.classList[action](VARIANTS.light);\n        if (isLight) {\n          navbar.querySelectorAll(LIGHT_SELECTORS).forEach((el) => el.classList.add(VARIANTS.light));\n        } else {\n          navbar\n            .querySelectorAll(`.${CSS.escape(VARIANTS.light)}`)\n            .forEach((el) => el.classList.remove(VARIANTS.light));\n        }\n\n        // Toggle button variants\n        BTN_CONFIG.forEach(({ from, to, variant, embedIcon }) => {\n          const [src, dest] = isLight ? [from, to] : [`${from}---dark`, from];\n          const btns = navbar.querySelectorAll(`[data-wf--button--variant=\"${src}\"]`);\n          btns.forEach((btn) => {\n            btn.setAttribute(\"data-wf--button--variant\", dest);\n            btn.classList[action](variant);\n            // Secondary buttons need base variant toggled inversely\n            if (from === \"secondary\") {\n              if (isLight) {\n                btn.classList.remove(VARIANTS.secondaryBase);\n              } else {\n                btn.classList.add(VARIANTS.secondaryBase);\n              }\n            }\n            if (embedIcon) btn.querySelector(\".embed-icon\")?.classList[action](variant);\n          });\n        });\n      }\n\n      document.querySelectorAll('[light-bg=\"true\"]').forEach((section) => {\n        ScrollTrigger.create({\n          trigger: section,\n          start: \"top top\",\n          end: \"bottom top\",\n          onEnter: () => setNavbarTheme(true),\n          onLeave: () => setNavbarTheme(false),\n          onEnterBack: () => setNavbarTheme(true),\n          onLeaveBack: () => setNavbarTheme(false),\n        });\n      });\n\n      document.querySelectorAll('[dark-bg=\"true\"]').forEach((section) => {\n        ScrollTrigger.create({\n          trigger: section,\n          start: \"top top\",\n          end: \"bottom top\",\n          onEnter: () => setNavbarTheme(false),\n          onLeave: () => setNavbarTheme(true),\n          onEnterBack: () => setNavbarTheme(false),\n          onLeaveBack: () => setNavbarTheme(true),\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "(function () {\n        var mq = matchMedia(\"(max-width: 991px)\");\n        var moved = false;\n        function moveShots() {\n          if (moved || !mq.matches) return;\n          document.querySelectorAll(\".platform-lc_card\").forEach(function (card) {\n            var stage = card.getAttribute(\"data-stage\");\n            var shot = document.querySelector('.platform-lc_shot[data-shot=\"' + stage + '\"]');\n            if (shot) card.appendChild(shot);\n          });\n          moved = true;\n        }\n        moveShots();\n        mq.addEventListener(\"change\", moveShots);\n      })();" }} />
      <TemplateScripts wfPage="660189f45f9033dd87f82a27" scripts={["/assets/vendor/finsweet-scrolldisable.js", "/assets/vendor/flowbase-tooltip.min.js"]} />
    </>
  );
}
