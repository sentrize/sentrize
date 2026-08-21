// Generated from the static Sentrize template by the migration converter.
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: { absolute: "Pricing | Sentrize" },
  description: "Sentrize pricing built around your scope: flexible engagement models for software, cloud, and DevOps. Transparent and outcome-driven.",
  alternates: { canonical: "https://www.sentrize.com/pricing" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "\n      html.w-mod-js:not(.w-mod-ix3) :is([text-paragraph-animation-start], [text-paragraph-animation]) {\n        visibility: hidden !important;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -o-font-smoothing: antialiased;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* Make Flowbase / Tippy tooltip text respect \\n */\n      .tippy-box .tippy-content {\n        white-space: pre-line;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      [text-letters-animation-start] {\n        opacity: 0.3;\n        color: #7fc8ff;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      .tippy-tooltip.bluebg-theme {\n        background-color: var(--_v-2-colors---c-blue-light--500);\n        color: var(--_v-2-colors---c-blue-dark--900);\n        text-align: left;\n      }\n      .tippy-tooltip.bluebg-theme[data-animatefill] {\n        background-color: var(--_v-2-colors---c-blue-light--500);\n      }\n      .tippy-tooltip.bluebg-theme .tippy-backdrop {\n        background-color: var(--_v-2-colors---c-blue-light--500);\n      }\n      .tippy-tooltip.bluebg-theme .tippy-roundarrow {\n        fill: var(--_v-2-colors---c-blue-light--500);\n      }\n    " }} />
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
        <section className="v2-pricing-hero-section">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="v2-pricing-hero-wrapper">
                <div className="t-label-1-rg text-c-blue-dark-400">
                  {"Pricing"}
                </div>
                <div className="spacer-16 _8-landscape" />
                <h1 className="t-heading-1-rg">
                  {"Engagement models that scale with you"}
                </h1>
                <div className="spacer-24 _16-landscape" />
                <div className="t-paragraph-1-rg-twk">
                  {"\n                  Transparent, role-based pricing. Every plan includes source-code ownership, CI/CD, and documented\n                  infrastructure.\n                "}
                </div>
                <div className="spacer-24 _16-landscape" />
                <div className="t-label-1-rg text-c-blue-dark-400" role="group" aria-label="Billing period">
                  {"\n                  Billing period: Project / Monthly\n                "}
                </div>
                <div className="spacer-16 _8-landscape" />
                <div className="t-label-1-rg is-opacity-60">
                  {"Annual (save 15%)"}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="v2-pricing-hero-section">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="v2-pricing-items_wrapper">
                <div className="p-item-background-gradient">
                  <div className="p-item_wrapper is-light">
                    <div className="p-plan-name_wrapper">
                      <h2 className="t-heading-5-rg">
                        {"Launch"}
                      </h2>
                      <div className="spacer-16 _8-landscape" />
                      <div className="t-label-1-rg c-white-60p is-pricing is-dark">
                        {"\n                        For getting a validated product to market \u2014 fast and well-engineered.\n                      "}
                      </div>
                    </div>
                    <div className="spacer-32 _24-landscape" />
                    <div className="p-plan-price_wrapper">
                      <div className="t-heading-5-rg">
                        {"From $18k"}
                      </div>
                      <div className="spacer-16 _8-landscape" />
                      <div className="t-label-1-rg is-opacity-60">
                        {"Startups & founders building an MVP"}
                      </div>
                    </div>
                    <div className="spacer-32 _24-landscape" />
                    <a className="button-v2-full-width w-variant-2e956572-b1af-5b84-be93-9608dcc82abe w-inline-block" data-wf--button--variant="primary---dark" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22269f38ef-04ff-deeb-544c-51516ca5d91d%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="269f38ef-04ff-deeb-544c-51516ca5d91d:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Start your build"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <div className="spacer-32 _24-landscape" />
                    <div className="p-bullets_wrapper">
                      <ul className="bullet-list_wrapper" role="list">
                        <li className="t-paragraph-2-rg">
                          {"Discovery workshop & technical scoping"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Single web or mobile application build"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Modern stack: React/Next.js or React Native/Flutter"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Core API and PostgreSQL design"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"AWS deployment with CI/CD pipeline"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"SSL, baseline hardening, and monitoring"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Source code + IaC handover"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"30 days post-launch support"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-item-background-gradient">
                  <div className="p-item_wrapper is-light">
                    <div className="p-plan-name_wrapper">
                      <div className="t-label-1-rg text-c-blue-dark-400">
                        {"Most popular"}
                      </div>
                      <div className="spacer-16 _8-landscape" />
                      <h2 className="t-heading-5-rg">
                        {"Scale"}
                      </h2>
                      <div className="spacer-16 _8-landscape" />
                      <div className="t-label-1-rg c-white-60p is-pricing is-dark">
                        {"\n                        For growing products that need to ship faster and handle more load.\n                      "}
                      </div>
                    </div>
                    <div className="spacer-32 _24-landscape" />
                    <div className="p-plan-price_wrapper">
                      <div className="t-heading-5-rg">
                        {"From $14k / month"}
                      </div>
                      <div className="spacer-16 _8-landscape" />
                      <div className="t-label-1-rg is-opacity-60">
                        {"Funded startups & scaling SaaS"}
                      </div>
                    </div>
                    <div className="spacer-32 _24-landscape" />
                    <a className="button-v2-full-width w-variant-2e956572-b1af-5b84-be93-9608dcc82abe w-inline-block" data-wf--button--variant="primary---dark" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22269f38ef-04ff-deeb-544c-51516ca5d949%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="269f38ef-04ff-deeb-544c-51516ca5d949:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Scale with us"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <div className="spacer-32 _24-landscape" />
                    <div className="p-bullets_wrapper">
                      <ul className="bullet-list_wrapper" role="list">
                        <li className="t-paragraph-2-rg">
                          {"Everything in Launch, plus:"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Cross-platform web and mobile delivery"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Dedicated multi-disciplinary squad"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Auto-scaling AWS + Kubernetes infrastructure"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"CI/CD with automated testing and staged releases"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"AI & automation features and integrations"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Observability (Prometheus/Grafana) + 24/7 monitoring"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"99.99% SLA-backed uptime"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-item-background-gradient">
                  <div className="p-item_wrapper is-light">
                    <div className="p-plan-name_wrapper">
                      <h2 className="t-heading-5-rg">
                        {"Enterprise"}
                      </h2>
                      <div className="spacer-16 _8-landscape" />
                      <div className="t-label-1-rg c-white-60p is-pricing is-dark">
                        {"\n                        For mission-critical systems requiring compliance, scale, and rigor.\n                      "}
                      </div>
                    </div>
                    <div className="spacer-32 _24-landscape" />
                    <div className="p-plan-price_wrapper">
                      <div className="t-heading-5-rg">
                        {"Custom"}
                      </div>
                      <div className="spacer-16 _8-landscape" />
                      <div className="t-label-1-rg is-opacity-60">
                        {"Enterprises & regulated SMEs"}
                      </div>
                    </div>
                    <div className="spacer-32 _24-landscape" />
                    <a className="button-v2-full-width w-variant-2e956572-b1af-5b84-be93-9608dcc82abe w-inline-block" data-wf--button--variant="primary---dark" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22269f38ef-04ff-deeb-544c-51516ca5d973%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="269f38ef-04ff-deeb-544c-51516ca5d973:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Talk to sales"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <div className="spacer-32 _24-landscape" />
                    <div className="p-bullets_wrapper">
                      <ul className="bullet-list_wrapper" role="list">
                        <li className="t-paragraph-2-rg">
                          {"Everything in Scale, plus:"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Enterprise software, digital transformation, CRM/ERP"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Multi-region architecture + data residency controls"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Security & compliance program (SOC 2, ISO 27001, HIPAA, PCI-DSS)"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Cloud migration and IaC modernization"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Managed DevOps with on-call incident response"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Dedicated solutions architect & delivery lead"}
                        </li>
                        <li className="t-paragraph-2-rg">
                          {"Custom SLA, audit support, quarterly reviews"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="hide w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n                    .bullet-list_wrapper > li::before {\n                      background: var(--_v-2-colors---c-blue-dark--400);\n                    }\n                  " }} />
                </div>
              </div>
              <div className="spacer-32 _24-landscape" />
              <div className="t-paragraph-2-rg text-c-black-60p text-align-center">
                {"\n                Transparent estimates before any work begins. Month-to-month, full code ownership, no lock-in.\n              "}
              </div>
            </div>
          </div>
        </section>
        <section className="v2-pricing-hero-section is-border-bottom">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="pricing-cta-wrapper">
                <div className="spacer-40 hide-mobile-landscape" />
                <div className="t-label-1-rg text-c-blue-dark-400">
                  {"Custom / Dedicated Team"}
                </div>
                <div className="spacer-16 _8-landscape" />
                <h3 className="t-heading-4-rg">
                  {"A ring-fenced squad built around your roadmap"}
                </h3>
                <div className="spacer-24 _16-landscape" />
                <div className="t-paragraph-1-rg-twk text-color-black-60-p">
                  {"\n                  Engineers, DevOps specialists, and designers embedded into your workflow, scaling up or down at a\n                  transparent monthly rate per role.\n                "}
                </div>
                <div className="spacer-24 _16-landscape" />
                <a className="button-v2-full-width w-variant-7365af83-1a95-e69d-8fd0-f4deb400faa3 w-inline-block" data-wf--button--variant="primary---dark---arrow" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22269f38ef-04ff-deeb-544c-51516ca5d995%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="269f38ef-04ff-deeb-544c-51516ca5d995:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                  <div className="no-wrap-arrow">
                    {"Build my team"}
                  </div>
                  <div className="embed-icon is-btn-arrow w-variant-7365af83-1a95-e69d-8fd0-f4deb400faa3 w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="home_usecases-section" light-bg="">
          <div className="full-width-line" />
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="v2-home-use-cases">
                <div className="v2-use-cases-wrapper is-product">
                  <div className="faq-heading-sticky" id="w-node-bfd285d6-2153-2a1e-ad36-3a2439d50838-39d50833">
                    <div className="t-label-1-rg text-c-blue-dark-400">
                      {"Pricing FAQ"}
                    </div>
                    <div className="spacer-16 _8-landscape" />
                    <h3 className="t-heading-3-rg balance">
                      {"Common questions"}
                    </h3>
                  </div>
                  <div className="faq-list-wrapper w-dyn-list">
                    <div className="w-dyn-items" role="list">
                      <div className="faq_component w-dyn-item" role="listitem">
                        <div className="faq_accordion">
                          <div className="faq_question v2" data-w-id="bfd285d6-2153-2a1e-ad36-3a2439d5083f">
                            <div className="t-heading-6-rg">
                              {"What engagement models do you offer?"}
                            </div>
                            <div className="faq5_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#030710" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq_answer v2">
                            <div className="margin-bottom margin-small">
                              <div>
                                <div className="text-rich-text-v2 w-richtext">
                                  <p>
                                    {"\n                                    Three core models: fixed-scope projects with defined deliverables and\n                                    budget; time & materials for evolving scope; and dedicated teams\n                                    embedded into your workflow under your roadmap. Most clients start with a\n                                    fixed-scope discovery, then transition to T&M or a dedicated team.\n                                  "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="faq_component w-dyn-item" role="listitem">
                        <div className="faq_accordion">
                          <div className="faq_question v2" data-w-id="bfd285d6-2153-2a1e-ad36-3a2439d5083f">
                            <div className="t-heading-6-rg">
                              {"How do you price projects and produce estimates?"}
                            </div>
                            <div className="faq5_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#030710" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq_answer v2">
                            <div className="margin-bottom margin-small">
                              <div>
                                <div className="text-rich-text-v2 w-richtext">
                                  <p>
                                    {"\n                                    After a scoping call we issue a written estimate in 3-5 business days. Fixed-scope\n                                    is quoted as a total with milestone payments; T&M and dedicated teams are priced\n                                    per role per month. We provide a low/expected/high range with the assumptions behind\n                                    each number. Estimates are free.\n                                  "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="faq_component w-dyn-item" role="listitem">
                        <div className="faq_accordion">
                          <div className="faq_question v2" data-w-id="bfd285d6-2153-2a1e-ad36-3a2439d5083f">
                            <div className="t-heading-6-rg">
                              {"What are typical project timelines?"}
                            </div>
                            <div className="faq5_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#030710" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq_answer v2">
                            <div className="margin-bottom margin-small">
                              <div>
                                <div className="text-rich-text-v2 w-richtext">
                                  <p>
                                    {"\n                                    A focused MVP or web/mobile launch runs 8-14 weeks. Mid-size SaaS and CRM/ERP builds\n                                    run 4-8 months. Enterprise modernization and large migrations are phased over 6-18\n                                    months with production-ready increments every 2-3 weeks.\n                                  "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="faq_component w-dyn-item" role="listitem">
                        <div className="faq_accordion">
                          <div className="faq_question v2" data-w-id="bfd285d6-2153-2a1e-ad36-3a2439d5083f">
                            <div className="t-heading-6-rg">
                              {"Fixed-price or time & materials \u2014 which should we choose?"}
                            </div>
                            <div className="faq5_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#030710" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq_answer v2">
                            <div className="margin-bottom margin-small">
                              <div>
                                <div className="text-rich-text-v2 w-richtext">
                                  <p>
                                    {"\n                                    Fixed-price suits well-defined, stable scope (budget certainty). T&M suits\n                                    evolving requirements and iterative products (flexibility). A common pattern is\n                                    fixed-price discovery and MVP, then T&M or a dedicated team for ongoing\n                                    development.\n                                  "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="use-cases-line is-full">
                  <div className="line-circle-faq" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section w-variant-da110dd5-88f9-30ea-7aef-7c93e2b5d1af" dark-bg="true" data-wf--cta--variant="lines">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="v2-cta-wrapper">
                <div className="v2-cta-content-wrapper">
                  <h3 className="t-heading-3-rg text-c-blue-light-900 balance" text-letters-animation="">
                    {"\n                    Ready to build your next product with confidence?\n                  "}
                  </h3>
                  <div className="spacer-40" />
                  <div className="max-width-80">
                    <p className="t-paragraph-1-rg-twk text-c-blue-light-500 balance">
                      {"\n                      Tell us what you're building and we'll map the fastest reliable path to production.\n                    "}
                    </p>
                  </div>
                  <div className="spacer-32" />
                  <div className="button-group v2">
                    <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88e0%22%2C%22instanceId%22%3A%22269f38ef-04ff-deeb-544c-51516ca5dcd5%22%7D%2C%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88f0%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="269f38ef-04ff-deeb-544c-51516ca5dcd5:da845d9e-acbd-d096-1641-bb8fe34e88f0:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Start a project"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88e0%22%2C%22instanceId%22%3A%22269f38ef-04ff-deeb-544c-51516ca5dcd5%22%7D%2C%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88f2%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="269f38ef-04ff-deeb-544c-51516ca5dcd5:da845d9e-acbd-d096-1641-bb8fe34e88f2:cc338c70-b506-f985-732b-95e9d08eb22b" href="/pricing">
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
              </div>
            </div>
          </div>
          <div className="blog-deco1 is-blog-1 w-variant-da110dd5-88f9-30ea-7aef-7c93e2b5d1af">
            <div className="blog-deco-circle" />
          </div>
          <div className="blog-deco1 is-blog-1 w-variant-da110dd5-88f9-30ea-7aef-7c93e2b5d1af is-right">
            <div className="blog-deco-circle is-left" />
          </div>
          <div className="blog-deco1 is-blog-1 w-variant-da110dd5-88f9-30ea-7aef-7c93e2b5d1af is-right is-down">
            <div className="blog-deco-circle is-left" />
            <div className="blog-deco-circle is-2 w-variant-da110dd5-88f9-30ea-7aef-7c93e2b5d1af is-right" />
          </div>
          <div className="blog-deco1 is-blog-1 w-variant-da110dd5-88f9-30ea-7aef-7c93e2b5d1af is-down">
            <div className="blog-deco-circle" />
            <div className="blog-deco-circle is-2 w-variant-da110dd5-88f9-30ea-7aef-7c93e2b5d1af" />
          </div>
        </section>
      </main>
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/jquery-3.5.1.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.6739ee8d3353008c.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.215811584586585b.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.cb92fc2c.4442570b9e549c1d.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/gsap.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/ScrollTrigger.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/SplitText.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger, SplitText);" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "var Webflow = Webflow || [];\n      Webflow.push(function () {\n        // DOMready has fired\n        // May now use jQuery and Webflow api\n        document.querySelector(\".w-nav-button\").addEventListener(\"click\", function () {\n          var logo = document.querySelector(\".navbar_logo-svg\");\n\n          // Toggle 'open' class for both nav and logo\n          logo.classList.toggle(\"is-light\");\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "// Debounce function to limit the rate at which a function is executed\n      function debounce(func, wait) {\n        let timeout;\n        return function executedFunction(...args) {\n          const later = () => {\n            clearTimeout(timeout);\n            func(...args);\n          };\n          clearTimeout(timeout);\n          timeout = setTimeout(later, wait);\n        };\n      }\n\n      // Function to update video sources\n      function updateVideoSources() {\n        const videos = document.querySelectorAll(\"video\"); // Select all video elements\n        videos.forEach((video) => {\n          const sources = video.querySelectorAll(\"source[data-src]\"); // Select all source elements with a \"data-src\" attribute within each video\n          if (window.innerWidth > 990) {\n            sources.forEach((source) => {\n              source.src = source.getAttribute(\"data-src\"); // If screen width > 990, set src to data-src\n            });\n          } else {\n            sources.forEach((source) => {\n              source.src = \"#\";\n            });\n          }\n          video.load(); // Important: load the new source(s) into the video\n        });\n      }\n\n      // Event listener for DOMContentLoaded to run once on start\n      document.addEventListener(\"DOMContentLoaded\", function () {\n        updateVideoSources();\n      });\n\n      // Event listener for resize with debounce\n      window.addEventListener(\"resize\", debounce(updateVideoSources, 250)); // Debounce resize event" }} />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/split-type.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger);\n\n      // Shared animation factory\n      function animateLetters(el, { scrollTrigger, delay, colors, durations, stagger }) {\n        const { chars } = new SplitType(el, { types: \"words, chars\" });\n\n        // Set initial state\n        if (typeof colors.initial === \"function\") {\n          chars.forEach((char) => {\n            const c = colors.initial(char);\n            gsap.set(char, { opacity: 0.3, color: c });\n          });\n        } else {\n          gsap.set(chars, { opacity: 0.3, color: colors.initial });\n        }\n\n        if (delay !== undefined) gsap.set(el, { opacity: 1 });\n\n        const tl = gsap.timeline(scrollTrigger ? { scrollTrigger } : { delay: delay ?? 0 });\n\n        chars.forEach((char, i) => {\n          const highlight = typeof colors.highlight === \"function\" ? colors.highlight(char) : colors.highlight;\n          const base = typeof colors.base === \"function\" ? colors.base(char) : colors.base;\n          const offset = i * stagger;\n\n          tl.to(\n            char,\n            {\n              opacity: 1,\n              color: highlight,\n              textShadow: \"0 0 12px rgba(127, 200, 255, 0.6)\",\n              duration: durations[0],\n              ease: durations[2] || undefined,\n            },\n            offset,\n          ).to(\n            char,\n            {\n              color: base,\n              textShadow: \"none\",\n              duration: durations[1],\n              ease: durations[2] || undefined,\n            },\n            offset + durations[0],\n          );\n        });\n      }\n\n      const scrollConfig = (el, scrub = 0.3) => ({\n        trigger: el,\n        start: \"top bottom-=5%\",\n        end: \"center center-=5%\",\n        scrub,\n      });\n\n      // Scroll-triggered (light)\n      document.querySelectorAll(\"[text-letters-animation]\").forEach((el) => {\n        animateLetters(el, {\n          scrollTrigger: scrollConfig(el, 1), // increase scrub from 0.3 \u2192 1 for more lag/smoothing\n          colors: { initial: \"#7fc8ff\", highlight: \"#ffffff\", base: \"#7fc8ff\" },\n          durations: [0.8, 0.8], // slower highlight & fade (was 0.5, 0.5)\n          stagger: 0.15, // more spacing between letters (was 0.1)\n        });\n      });\n\n      // Page load\n      document.querySelectorAll(\"[text-letters-animation-start]\").forEach((el) => {\n        animateLetters(el, {\n          delay: 0.5,\n          colors: { initial: \"#7fc8ff\", highlight: \"#ffffff\", base: \"#7fc8ff\" },\n          durations: [0.15, 0.3, \"power2.out\"],\n          stagger: 0.03,\n        });\n      });\n\n      // Scroll-triggered (dark)\n      const getDarkColors = (char) => {\n        const isBlue = char.closest(\".text-c-blue-dark-400\");\n        return isBlue\n          ? { highlight: \"#ffffff\", base: \"#006ddd\", initial: \"#006ddd\" }\n          : { highlight: \"#7fc8ff\", base: \"#030710\", initial: \"#030710\" };\n      };\n\n      document.querySelectorAll(\"[text-letters-animation-dark]\").forEach((el) => {\n        animateLetters(el, {\n          scrollTrigger: scrollConfig(el),\n          colors: {\n            initial: (char) => getDarkColors(char).initial,\n            highlight: (char) => getDarkColors(char).highlight,\n            base: (char) => getDarkColors(char).base,\n          },\n          durations: [0.5, 0.5],\n          stagger: 0.1,\n        });\n      });\n\n      // Page load (dark)\n      document.querySelectorAll(\"[text-letters-animation-dark-start]\").forEach((el) => {\n        animateLetters(el, {\n          delay: 0.5,\n          colors: {\n            initial: (char) => getDarkColors(char).initial,\n            highlight: (char) => getDarkColors(char).highlight,\n            base: (char) => getDarkColors(char).base,\n          },\n          durations: [0.15, 0.3, \"power2.out\"],\n          stagger: 0.03,\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const navbar = document.querySelector(\".navbar2_component\");\n      const VARIANTS = {\n        light: \"w-variant-5ea50dfb-c632-4d13-5830-b2180e4df891\",\n        primaryDark: \"w-variant-2e956572-b1af-5b84-be93-9608dcc82abe\",\n        secondaryDark: \"w-variant-402b5851-8ab4-772f-b336-8fff22939a35\",\n        secondaryBase: \"w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9\",\n      };\n      const LIGHT_SELECTORS =\n        \".navbar2_container, .navbar2_logo.w-embed, .navbar2_menu.is-page-height-tablet.w-nav-menu, .navbar2_dropdwn-toggle.w-dropdown-toggle, .t-label-1-rg, .embed-icon.is-nav-arrow.w-embed, .navbar2_dropdown-list-wrapper.is-product, .t-label-1-rg.blue-light-500, .v2-navbar-divider, .v2-navbar-dropdown-link.w-inline-block, .t-paragraph-3-rg.text-c-white-60-p, .navbar2_link.t-label-1-rg.w-nav-link, .button-v2.w-inline-block, .embed-icon.is-btn-arrow.w-embed, .menu-icon2_line-top, .menu-icon2_line-middle, .menu-icon2_line-bottom, .nav-link\";\n      const BTN_CONFIG = [\n        { from: \"primary\", to: \"primary---dark\", variant: VARIANTS.primaryDark },\n        {\n          from: \"secondary\",\n          to: \"secondary---dark\",\n          variant: VARIANTS.secondaryDark,\n          embedIcon: true,\n        },\n      ];\n\n      function setNavbarTheme(isLight) {\n        const action = isLight ? \"add\" : \"remove\";\n\n        // Toggle navbar variant attribute\n        navbar.setAttribute(\"data-wf--navbar--variant\", isLight ? \"light\" : \"dark\");\n\n        // Toggle light variant on navbar + child elements\n        navbar.classList[action](VARIANTS.light);\n        if (isLight) {\n          navbar.querySelectorAll(LIGHT_SELECTORS).forEach((el) => el.classList.add(VARIANTS.light));\n        } else {\n          navbar\n            .querySelectorAll(`.${CSS.escape(VARIANTS.light)}`)\n            .forEach((el) => el.classList.remove(VARIANTS.light));\n        }\n\n        // Toggle button variants\n        BTN_CONFIG.forEach(({ from, to, variant, embedIcon }) => {\n          const [src, dest] = isLight ? [from, to] : [`${from}---dark`, from];\n          const btns = navbar.querySelectorAll(`[data-wf--button--variant=\"${src}\"]`);\n          btns.forEach((btn) => {\n            btn.setAttribute(\"data-wf--button--variant\", dest);\n            btn.classList[action](variant);\n            // Secondary buttons need base variant toggled inversely\n            if (from === \"secondary\") {\n              if (isLight) {\n                btn.classList.remove(VARIANTS.secondaryBase);\n              } else {\n                btn.classList.add(VARIANTS.secondaryBase);\n              }\n            }\n            if (embedIcon) btn.querySelector(\".embed-icon\")?.classList[action](variant);\n          });\n        });\n      }\n\n      document.querySelectorAll('[light-bg=\"true\"]').forEach((section) => {\n        ScrollTrigger.create({\n          trigger: section,\n          start: \"top top\",\n          end: \"bottom top\",\n          onEnter: () => setNavbarTheme(true),\n          onLeave: () => setNavbarTheme(false),\n          onEnterBack: () => setNavbarTheme(true),\n          onLeaveBack: () => setNavbarTheme(false),\n        });\n      });\n\n      document.querySelectorAll('[dark-bg=\"true\"]').forEach((section) => {\n        ScrollTrigger.create({\n          trigger: section,\n          start: \"top top\",\n          end: \"bottom top\",\n          onEnter: () => setNavbarTheme(false),\n          onLeave: () => setNavbarTheme(true),\n          onEnterBack: () => setNavbarTheme(false),\n          onLeaveBack: () => setNavbarTheme(true),\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/popper.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/tippy.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "tippy(\".tooltip-pricing\", {\n        animation: \"scale\",\n        placement: \"top\",\n        delay: [100, 0],\n        trigger: \"mouseenter focus\",\n        placement: \"top\",\n        arrow: true,\n        arrowType: \"round\",\n        theme: \"bluebg\",\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "document.querySelectorAll(\".faq_question\").forEach((trigger) => {\n        trigger.addEventListener(\"click\", () => {\n          setTimeout(() => ScrollTrigger.refresh(), 600);\n        });\n      });" }} />
      <TemplateScripts wfPage="685598a75e32265c30b93bfa" scripts={["/assets/vendor/finsweet-scrolldisable.js", "/assets/vendor/flowbase-tooltip.min.js"]} bodyClass="is-light" />
    </>
  );
}
