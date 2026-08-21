// Generated from the static Sentrize template by the migration converter.
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: { absolute: "Careers | Sentrize" },
  description: "Join Sentrize: 50+ engineers across 23+ countries building production software and cloud systems. Remote-friendly roles for specialists.",
  alternates: { canonical: "https://www.sentrize.com/careers" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "\n      @media (min-width: 992px) {\n        html.w-mod-js:not(.w-mod-ix) [data-w-id=\"0af61c35-1f91-3121-dac6-c936dc5d88eb\"] {\n          opacity: 0;\n        }\n      }\n      @media (max-width: 991px) and (min-width: 768px) {\n        html.w-mod-js:not(.w-mod-ix) [data-w-id=\"0af61c35-1f91-3121-dac6-c936dc5d88eb\"] {\n          opacity: 0;\n        }\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      html.w-mod-js:not(.w-mod-ix3) :is([text-paragraph-animation-start], [text-paragraph-animation]) {\n        visibility: hidden !important;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -o-font-smoothing: antialiased;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* Make Flowbase / Tippy tooltip text respect \\n */\n      .tippy-box .tippy-content {\n        white-space: pre-line;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      [text-letters-animation-start] {\n        opacity: 0.3;\n        color: #7fc8ff;\n      }\n    " }} />
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
        <header className="careers_hero-section is-illustration">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="career-hero-wrapper is-illustration">
                <div className="customer-hero_heading-wrapper">
                  <div className="t-label-1-rg text-c-blue-light-900">
                    {"Careers"}
                  </div>
                  <div className="spacer-16" />
                  <h1 className="t-heading-1-rg text-c-blue-light-900">
                    {"\n                    Build infrastructure and software that 23+ countries depend on.\n                  "}
                  </h1>
                  <div className="spacer-16" />
                  <p className="t-paragraph-1-rg-twk text-c-blue-light-500">
                    {"\n                    Ship production systems for startups and enterprises alike, with the autonomy to own outcomes and\n                    the engineering rigor to do it right.\n                  "}
                  </p>
                  <div className="spacer-40" />
                  <div className="button-group">
                    <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%2251bb758c-3bac-db2a-b0d7-5884929d4e4c%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="51bb758c-3bac-db2a-b0d7-5884929d4e4c:cc338c70-b506-f985-732b-95e9d08eb22b" href="#roles">
                      <div className="no-wrap-arrow">
                        {"See open roles"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hero-illustration-wrapper is-carrers">
                  <img alt="" className="hero-illustration is-careers" loading="lazy" src="/assets/images/Group-2147239212.svg" />
                  <div className="hero-illustration-bg is-carrer" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="careers_backed-section is-relative">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-content-wrapper is-big-padding">
                <div className="home-content-2col is-logos">
                  <div className="backed-logo_grid-logo-card" id="w-node-_51bb758c-3bac-db2a-b0d7-5884929d4e7a-87f82ab2">
                    <div className="backed-logo_grid-logo">
                      <div className="t-heading-5-rg text-c-white">
                        {"50+"}
                      </div>
                      <div className="t-label-1-rg text-padding">
                        {"Engineers"}
                      </div>
                    </div>
                  </div>
                  <div className="backed-logo_grid-logo-card" id="w-node-_51bb758c-3bac-db2a-b0d7-5884929d4e7d-87f82ab2">
                    <div className="backed-logo_grid-logo">
                      <div className="t-heading-5-rg text-c-white">
                        {"23+"}
                      </div>
                      <div className="t-label-1-rg text-padding">
                        {"Countries"}
                      </div>
                    </div>
                  </div>
                  <div className="backed-logo_grid-logo-card" id="w-node-_51bb758c-3bac-db2a-b0d7-5884929d4e80-87f82ab2">
                    <div className="backed-logo_grid-logo">
                      <div className="t-heading-5-rg text-c-white">
                        {"Remote"}
                      </div>
                      <div className="t-label-1-rg text-padding">
                        {"First"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="career_principles-section is-relative">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-content-wrapper is-big-padding">
                <div className="home-content-heading-wrapper">
                  <div className="t-label-1-rg text-c-blue-light-900">
                    {"Why join"}
                  </div>
                  <div className="spacer-16" />
                  <h2 className="t-heading-4-rg text-c-blue-light-900">
                    {"What you get building here"}
                  </h2>
                </div>
                <div className="home-content-2col">
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Senior engineering, not staffing"}
                    </div>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      Experienced engineers and architects lead every project \u2014 production decisions, not billable headcount.\n                    "}
                    </p>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Outcome ownership"}
                    </div>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      We measure success by uptime, performance, and shipped features, and stay accountable to those metrics.\n                    "}
                    </p>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Cloud-native by default"}
                    </div>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      We design on AWS, Kubernetes, and Terraform from day one, so systems scale without rebuilds.\n                    "}
                    </p>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Security & compliance built in"}
                    </div>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      Encryption, access control, and audit readiness are part of the architecture, not a later phase.\n                    "}
                    </p>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Transparent delivery"}
                    </div>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      Clear roadmaps, visible progress, and direct access to the people building your systems.\n                    "}
                    </p>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Global delivery, single standard"}
                    </div>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      Teams across 23+ countries operate to one engineering bar for consistent quality.\n                    "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img alt="" className="content-bg-img" loading="lazy" sizes="(max-width: 2992px) 100vw, 2992px" src="/assets/images/funnel2.png" srcSet="/assets/images/funnel2-p-500.png   500w, /assets/images/funnel2-p-800.png   800w, /assets/images/funnel2-p-1080.png 1080w, /assets/images/funnel2-p-1600.png 1600w, /assets/images/funnel2-p-2000.png 2000w, /assets/images/funnel2-p-2600.png 2600w, /assets/images/funnel2.png        2992w" />
        </section>
        <section className="career_principles-section is-relative">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-content-wrapper is-big-padding">
                <div className="home-content-heading-wrapper">
                  <div className="t-label-1-rg text-c-blue-light-900">
                    {"Benefits"}
                  </div>
                  <div className="spacer-16" />
                  <h2 className="t-heading-4-rg text-c-blue-light-900">
                    {"Built for sustainable, senior engineering"}
                  </h2>
                  <div className="spacer-16" />
                  <p className="t-paragraph-2-rg text-c-white-60-p">
                    {"\n                    Remote-first, well-compensated, and designed so good engineering is sustainable over the long term.\n                  "}
                  </p>
                </div>
                <div className="home-content-2col">
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Fully remote across 23+ countries"}
                    </div>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Market-leading global compensation"}
                    </div>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Equity & ownership"}
                    </div>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Annual learning budget"}
                    </div>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Home-office setup allowance"}
                    </div>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Flexible, trust-based PTO"}
                    </div>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Health & wellness stipend"}
                    </div>
                  </div>
                  <div className="home-content-box">
                    <div className="t-heading-6-rg text-c-white">
                      {"Clear cross-discipline growth tracks"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img alt="" className="content-bg-img" loading="lazy" sizes="(max-width: 2992px) 100vw, 2992px" src="/assets/images/funnel2.png" srcSet="/assets/images/funnel2-p-500.png   500w, /assets/images/funnel2-p-800.png   800w, /assets/images/funnel2-p-1080.png 1080w, /assets/images/funnel2-p-1600.png 1600w, /assets/images/funnel2-p-2000.png 2000w, /assets/images/funnel2-p-2600.png 2600w, /assets/images/funnel2.png        2992w" />
        </section>
        <section className="section_job-offer" id="roles" light-bg="true">
          <div className="v2-padding-global">
            <div className="v2-container">
              <div className="career_job-offer">
                <div className="t-label-1-rg">
                  {"Open roles"}
                </div>
                <div className="spacer-16" />
                <h3 className="t-heading-3-rg" id="explore-jobs">
                  {"Where we are hiring"}
                </h3>
                <div className="spacer-xxlarge" />
                <div className="w-embed w-script">
                  <style dangerouslySetInnerHTML={{ __html: "\n                    .job-list {\n                      display: flex;\n                      flex-direction: column;\n                    }\n                    .job-row {\n                      display: flex;\n                      align-items: center;\n                      justify-content: space-between;\n                      gap: 1.5rem;\n                      padding: 1.5rem 0.25rem;\n                      border-bottom: 1px solid rgba(3, 7, 16, 0.16);\n                      color: inherit;\n                      text-decoration: none;\n                    }\n                    .job-row:first-child {\n                      border-top: 1px solid rgba(3, 7, 16, 0.16);\n                    }\n                    .job-row-main {\n                      display: flex;\n                      flex-direction: column;\n                      gap: 0.375rem;\n                    }\n                    .job-row-title {\n                      font-size: 1.25rem;\n                      font-weight: 500;\n                    }\n                    .job-row-meta {\n                      font-size: 0.9rem;\n                      color: rgba(3, 7, 16, 0.6);\n                    }\n                    .job-row-right {\n                      display: flex;\n                      align-items: center;\n                      gap: 1rem;\n                      flex-shrink: 0;\n                    }\n                    .job-row-pill {\n                      font-size: 0.8rem;\n                      border: 1px solid rgba(3, 7, 16, 0.24);\n                      border-radius: 999px;\n                      padding: 0.375rem 0.875rem;\n                      white-space: nowrap;\n                    }\n                    .job-row-arrow {\n                      font-size: 1.25rem;\n                      transition: transform 0.2s ease;\n                    }\n                    .job-row:hover .job-row-arrow {\n                      transform: translateX(0.25rem);\n                    }\n                    @media (max-width: 767px) {\n                      .job-row {\n                        flex-direction: column;\n                        align-items: flex-start;\n                        gap: 0.75rem;\n                      }\n                    }\n                  " }} />
                  <div className="job-list">
                    <a className="job-row" href="/contact">
                      <div className="job-row-main">
                        <div className="job-row-title">
                          {"Senior Backend Engineer"}
                        </div>
                        <div className="job-row-meta">
                          {"Software Engineering \u00a0\u00b7\u00a0 Node.js / TypeScript"}
                        </div>
                      </div>
                      <div className="job-row-right">
                        <div className="job-row-pill">
                          {"Remote \u00b7 Full-time"}
                        </div>
                        <div className="job-row-arrow">
                          {"\u2192"}
                        </div>
                      </div>
                    </a>
                    <a className="job-row" href="/contact">
                      <div className="job-row-main">
                        <div className="job-row-title">
                          {"Cloud Infrastructure Engineer"}
                        </div>
                        <div className="job-row-meta">
                          {"DevOps & Infrastructure \u00a0\u00b7\u00a0 AWS / Terraform"}
                        </div>
                      </div>
                      <div className="job-row-right">
                        <div className="job-row-pill">
                          {"Remote \u00b7 Full-time"}
                        </div>
                        <div className="job-row-arrow">
                          {"\u2192"}
                        </div>
                      </div>
                    </a>
                    <a className="job-row" href="/contact">
                      <div className="job-row-main">
                        <div className="job-row-title">
                          {"Site Reliability Engineer"}
                        </div>
                        <div className="job-row-meta">
                          {"DevOps & Infrastructure \u00a0\u00b7\u00a0 Kubernetes"}
                        </div>
                      </div>
                      <div className="job-row-right">
                        <div className="job-row-pill">
                          {"Remote / Hybrid \u00b7 Full-time"}
                        </div>
                        <div className="job-row-arrow">
                          {"\u2192"}
                        </div>
                      </div>
                    </a>
                    <a className="job-row" href="/contact">
                      <div className="job-row-main">
                        <div className="job-row-title">
                          {"Full-Stack Engineer"}
                        </div>
                        <div className="job-row-meta">
                          {"Software Engineering \u00a0\u00b7\u00a0 React / Next.js / Laravel"}
                        </div>
                      </div>
                      <div className="job-row-right">
                        <div className="job-row-pill">
                          {"Remote \u00b7 Full-time"}
                        </div>
                        <div className="job-row-arrow">
                          {"\u2192"}
                        </div>
                      </div>
                    </a>
                    <a className="job-row" href="/contact">
                      <div className="job-row-main">
                        <div className="job-row-title">
                          {"Senior Mobile Engineer"}
                        </div>
                        <div className="job-row-meta">
                          {"Software Engineering \u00a0\u00b7\u00a0 React Native / Flutter"}
                        </div>
                      </div>
                      <div className="job-row-right">
                        <div className="job-row-pill">
                          {"Remote \u00b7 Full-time"}
                        </div>
                        <div className="job-row-arrow">
                          {"\u2192"}
                        </div>
                      </div>
                    </a>
                    <a className="job-row" href="/contact">
                      <div className="job-row-main">
                        <div className="job-row-title">
                          {"AI & Automation Engineer"}
                        </div>
                        <div className="job-row-meta">
                          {"AI & Automation \u00a0\u00b7\u00a0 Python / LLMs"}
                        </div>
                      </div>
                      <div className="job-row-right">
                        <div className="job-row-pill">
                          {"Remote \u00b7 Full-time"}
                        </div>
                        <div className="job-row-arrow">
                          {"\u2192"}
                        </div>
                      </div>
                    </a>
                    <a className="job-row" href="/contact">
                      <div className="job-row-main">
                        <div className="job-row-title">
                          {"Senior Product Designer"}
                        </div>
                        <div className="job-row-meta">
                          {"Design \u00a0\u00b7\u00a0 Figma / Design systems"}
                        </div>
                      </div>
                      <div className="job-row-right">
                        <div className="job-row-pill">
                          {"Remote / Hybrid \u00b7 Full-time"}
                        </div>
                        <div className="job-row-arrow">
                          {"\u2192"}
                        </div>
                      </div>
                    </a>
                    <a className="job-row" href="/contact">
                      <div className="job-row-main">
                        <div className="job-row-title">
                          {"Security & Compliance Engineer"}
                        </div>
                        <div className="job-row-meta">
                          {"Security \u00a0\u00b7\u00a0 SOC 2 / ISO 27001"}
                        </div>
                      </div>
                      <div className="job-row-right">
                        <div className="job-row-pill">
                          {"Remote \u00b7 Full-time"}
                        </div>
                        <div className="job-row-arrow">
                          {"\u2192"}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="careers_awards-section is-relative">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-content-wrapper is-big-padding">
                <div className="home-content-heading-wrapper">
                  <h3 className="t-heading-4-rg text-c-blue-light-900">
                    {"Our hiring process"}
                  </h3>
                </div>
                <div className="home-content-2col is-logos">
                  <div className="award-logo_grid-logo-card w-inline-block" id="w-node-_51bb758c-3bac-db2a-b0d7-5884929d4eb4-87f82ab2">
                    <div className="backed-logo_grid-logo is-awards" style={{ height: "auto", minHeight: "12.375rem" }}>
                      <div className="t-label-1-rg">
                        {"Step 1"}
                      </div>
                      <h4 className="t-heading-5-rg text-c-white">
                        {"Application review"}
                      </h4>
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"We read every application and respond within five business days."}
                      </p>
                    </div>
                  </div>
                  <div className="award-logo_grid-logo-card w-inline-block" id="w-node-_51bb758c-3bac-db2a-b0d7-5884929d4eba-87f82ab2">
                    <div className="backed-logo_grid-logo is-awards" style={{ height: "auto", minHeight: "12.375rem" }}>
                      <div className="t-label-1-rg">
                        {"Step 2"}
                      </div>
                      <h4 className="t-heading-5-rg text-c-white">
                        {"Intro conversation"}
                      </h4>
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"A 30-minute call to align on the role, your goals, and how we work."}
                      </p>
                    </div>
                  </div>
                  <div className="award-logo_grid-logo-card w-inline-block" id="w-node-_51bb758c-3bac-db2a-b0d7-5884929d4ec0-87f82ab2">
                    <div className="backed-logo_grid-logo is-awards" style={{ height: "auto", minHeight: "12.375rem" }}>
                      <div className="t-label-1-rg">
                        {"Step 3"}
                      </div>
                      <h4 className="t-heading-5-rg text-c-white">
                        {"Technical interview"}
                      </h4>
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"A practical, real-world problem in your domain \u2014 no whiteboard trivia."}
                      </p>
                    </div>
                  </div>
                  <div className="award-logo_grid-logo-card w-inline-block" id="w-node-_51bb758c-3bac-db2a-b0d7-5884929d4ec6-87f82ab2">
                    <div className="backed-logo_grid-logo is-awards" style={{ height: "auto", minHeight: "12.375rem" }}>
                      <div className="t-label-1-rg">
                        {"Step 4"}
                      </div>
                      <h4 className="t-heading-5-rg text-c-white">
                        {"Team & systems round"}
                      </h4>
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"Meet your future teammates and dig into architecture and trade-offs."}
                      </p>
                    </div>
                  </div>
                  <div className="award-logo_grid-logo-card w-inline-block" id="w-node-_51bb758c-3bac-db2a-b0d7-5884929d4ec6-87f82ab2">
                    <div className="backed-logo_grid-logo is-awards" style={{ height: "auto", minHeight: "12.375rem" }}>
                      <div className="t-label-1-rg">
                        {"Step 5"}
                      </div>
                      <h4 className="t-heading-5-rg text-c-white">
                        {"Offer & onboarding"}
                      </h4>
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"A clear offer, fast turnaround, and a structured first-30-days plan."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img alt="" className="content-bg-img" loading="lazy" sizes="(max-width: 2992px) 100vw, 2992px" src="/assets/images/funnel2.png" srcSet="/assets/images/funnel2-p-500.png   500w, /assets/images/funnel2-p-800.png   800w, /assets/images/funnel2-p-1080.png 1080w, /assets/images/funnel2-p-1600.png 1600w, /assets/images/funnel2-p-2000.png 2000w, /assets/images/funnel2-p-2600.png 2600w, /assets/images/funnel2.png        2992w" />
        </section>
        <section className="cta-section" dark-bg="" data-wf--cta--variant="base">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="v2-cta-wrapper">
                <div className="v2-cta-content-wrapper">
                  <h3 className="t-heading-3-rg text-c-blue-light-900 balance" text-letters-animation="">
                    {"\n                    Don't see your role?\n                  "}
                  </h3>
                  <div className="spacer-40" />
                  <div className="max-width-80">
                    <p className="t-paragraph-1-rg-twk text-c-blue-light-500 balance">
                      {"\n                      Send us your work anyway \u2014 we're always interested in great engineers.\n                    "}
                    </p>
                  </div>
                  <div className="spacer-32" />
                  <div className="button-group v2">
                    <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88e0%22%2C%22instanceId%22%3A%2251bb758c-3bac-db2a-b0d7-5884929d4ecd%22%7D%2C%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88f0%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="51bb758c-3bac-db2a-b0d7-5884929d4ecd:da845d9e-acbd-d096-1641-bb8fe34e88f0:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Start a project"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88e0%22%2C%22instanceId%22%3A%2251bb758c-3bac-db2a-b0d7-5884929d4ecd%22%7D%2C%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88f2%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="51bb758c-3bac-db2a-b0d7-5884929d4ecd:da845d9e-acbd-d096-1641-bb8fe34e88f2:cc338c70-b506-f985-732b-95e9d08eb22b" href="/pricing">
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
                  <div className="spacer-24" />
                  <p className="t-paragraph-1-rg-twk text-c-blue-light-500 balance">
                    {"\n                    We review every application personally.\n                  "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-deco1 is-blog-1">
            <div className="blog-deco-circle" />
          </div>
          <div className="blog-deco1 is-blog-1 is-right">
            <div className="blog-deco-circle is-left" />
          </div>
          <div className="blog-deco1 is-blog-1 is-right is-down">
            <div className="blog-deco-circle is-left" />
            <div className="blog-deco-circle is-2 is-right" />
          </div>
          <div className="blog-deco1 is-blog-1 is-down">
            <div className="blog-deco-circle" />
            <div className="blog-deco-circle is-2" />
          </div>
        </section>
      </main>
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/jquery-3.5.1.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.6739ee8d3353008c.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.215811584586585b.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.c69b24e5ef588df7.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.21c3f0e2.c98ab5e3127d9908.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/gsap.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/ScrollTrigger.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/SplitText.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger, SplitText);" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "var Webflow = Webflow || [];\n      Webflow.push(function () {\n        // DOMready has fired\n        // May now use jQuery and Webflow api\n        document.querySelector(\".w-nav-button\").addEventListener(\"click\", function () {\n          var logo = document.querySelector(\".navbar_logo-svg\");\n\n          // Toggle 'open' class for both nav and logo\n          logo.classList.toggle(\"is-light\");\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "// Debounce function to limit the rate at which a function is executed\n      function debounce(func, wait) {\n        let timeout;\n        return function executedFunction(...args) {\n          const later = () => {\n            clearTimeout(timeout);\n            func(...args);\n          };\n          clearTimeout(timeout);\n          timeout = setTimeout(later, wait);\n        };\n      }\n\n      // Function to update video sources\n      function updateVideoSources() {\n        const videos = document.querySelectorAll(\"video\"); // Select all video elements\n        videos.forEach((video) => {\n          const sources = video.querySelectorAll(\"source[data-src]\"); // Select all source elements with a \"data-src\" attribute within each video\n          if (window.innerWidth > 990) {\n            sources.forEach((source) => {\n              source.src = source.getAttribute(\"data-src\"); // If screen width > 990, set src to data-src\n            });\n          } else {\n            sources.forEach((source) => {\n              source.src = \"#\";\n            });\n          }\n          video.load(); // Important: load the new source(s) into the video\n        });\n      }\n\n      // Event listener for DOMContentLoaded to run once on start\n      document.addEventListener(\"DOMContentLoaded\", function () {\n        updateVideoSources();\n      });\n\n      // Event listener for resize with debounce\n      window.addEventListener(\"resize\", debounce(updateVideoSources, 250)); // Debounce resize event" }} />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/split-type.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger);\n\n      // Shared animation factory\n      function animateLetters(el, { scrollTrigger, delay, colors, durations, stagger }) {\n        const { chars } = new SplitType(el, { types: \"words, chars\" });\n\n        // Set initial state\n        if (typeof colors.initial === \"function\") {\n          chars.forEach((char) => {\n            const c = colors.initial(char);\n            gsap.set(char, { opacity: 0.3, color: c });\n          });\n        } else {\n          gsap.set(chars, { opacity: 0.3, color: colors.initial });\n        }\n\n        if (delay !== undefined) gsap.set(el, { opacity: 1 });\n\n        const tl = gsap.timeline(scrollTrigger ? { scrollTrigger } : { delay: delay ?? 0 });\n\n        chars.forEach((char, i) => {\n          const highlight = typeof colors.highlight === \"function\" ? colors.highlight(char) : colors.highlight;\n          const base = typeof colors.base === \"function\" ? colors.base(char) : colors.base;\n          const offset = i * stagger;\n\n          tl.to(\n            char,\n            {\n              opacity: 1,\n              color: highlight,\n              textShadow: \"0 0 12px rgba(127, 200, 255, 0.6)\",\n              duration: durations[0],\n              ease: durations[2] || undefined,\n            },\n            offset,\n          ).to(\n            char,\n            {\n              color: base,\n              textShadow: \"none\",\n              duration: durations[1],\n              ease: durations[2] || undefined,\n            },\n            offset + durations[0],\n          );\n        });\n      }\n\n      const scrollConfig = (el, scrub = 0.3) => ({\n        trigger: el,\n        start: \"top bottom-=5%\",\n        end: \"center center-=5%\",\n        scrub,\n      });\n\n      // Scroll-triggered (light)\n      document.querySelectorAll(\"[text-letters-animation]\").forEach((el) => {\n        animateLetters(el, {\n          scrollTrigger: scrollConfig(el, 1), // increase scrub from 0.3 \u2192 1 for more lag/smoothing\n          colors: { initial: \"#7fc8ff\", highlight: \"#ffffff\", base: \"#7fc8ff\" },\n          durations: [0.8, 0.8], // slower highlight & fade (was 0.5, 0.5)\n          stagger: 0.15, // more spacing between letters (was 0.1)\n        });\n      });\n\n      // Page load\n      document.querySelectorAll(\"[text-letters-animation-start]\").forEach((el) => {\n        animateLetters(el, {\n          delay: 0.5,\n          colors: { initial: \"#7fc8ff\", highlight: \"#ffffff\", base: \"#7fc8ff\" },\n          durations: [0.15, 0.3, \"power2.out\"],\n          stagger: 0.03,\n        });\n      });\n\n      // Scroll-triggered (dark)\n      const getDarkColors = (char) => {\n        const isBlue = char.closest(\".text-c-blue-dark-400\");\n        return isBlue\n          ? { highlight: \"#ffffff\", base: \"#006ddd\", initial: \"#006ddd\" }\n          : { highlight: \"#7fc8ff\", base: \"#030710\", initial: \"#030710\" };\n      };\n\n      document.querySelectorAll(\"[text-letters-animation-dark]\").forEach((el) => {\n        animateLetters(el, {\n          scrollTrigger: scrollConfig(el),\n          colors: {\n            initial: (char) => getDarkColors(char).initial,\n            highlight: (char) => getDarkColors(char).highlight,\n            base: (char) => getDarkColors(char).base,\n          },\n          durations: [0.5, 0.5],\n          stagger: 0.1,\n        });\n      });\n\n      // Page load (dark)\n      document.querySelectorAll(\"[text-letters-animation-dark-start]\").forEach((el) => {\n        animateLetters(el, {\n          delay: 0.5,\n          colors: {\n            initial: (char) => getDarkColors(char).initial,\n            highlight: (char) => getDarkColors(char).highlight,\n            base: (char) => getDarkColors(char).base,\n          },\n          durations: [0.15, 0.3, \"power2.out\"],\n          stagger: 0.03,\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const navbar = document.querySelector(\".navbar2_component\");\n      const VARIANTS = {\n        light: \"w-variant-5ea50dfb-c632-4d13-5830-b2180e4df891\",\n        primaryDark: \"w-variant-2e956572-b1af-5b84-be93-9608dcc82abe\",\n        secondaryDark: \"w-variant-402b5851-8ab4-772f-b336-8fff22939a35\",\n        secondaryBase: \"w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9\",\n      };\n      const LIGHT_SELECTORS =\n        \".navbar2_container, .navbar2_logo.w-embed, .navbar2_menu.is-page-height-tablet.w-nav-menu, .navbar2_dropdwn-toggle.w-dropdown-toggle, .t-label-1-rg, .embed-icon.is-nav-arrow.w-embed, .navbar2_dropdown-list-wrapper.is-product, .t-label-1-rg.blue-light-500, .v2-navbar-divider, .v2-navbar-dropdown-link.w-inline-block, .t-paragraph-3-rg.text-c-white-60-p, .navbar2_link.t-label-1-rg.w-nav-link, .button-v2.w-inline-block, .embed-icon.is-btn-arrow.w-embed, .menu-icon2_line-top, .menu-icon2_line-middle, .menu-icon2_line-bottom, .nav-link\";\n      const BTN_CONFIG = [\n        { from: \"primary\", to: \"primary---dark\", variant: VARIANTS.primaryDark },\n        {\n          from: \"secondary\",\n          to: \"secondary---dark\",\n          variant: VARIANTS.secondaryDark,\n          embedIcon: true,\n        },\n      ];\n\n      function setNavbarTheme(isLight) {\n        const action = isLight ? \"add\" : \"remove\";\n\n        // Toggle navbar variant attribute\n        navbar.setAttribute(\"data-wf--navbar--variant\", isLight ? \"light\" : \"dark\");\n\n        // Toggle light variant on navbar + child elements\n        navbar.classList[action](VARIANTS.light);\n        if (isLight) {\n          navbar.querySelectorAll(LIGHT_SELECTORS).forEach((el) => el.classList.add(VARIANTS.light));\n        } else {\n          navbar\n            .querySelectorAll(`.${CSS.escape(VARIANTS.light)}`)\n            .forEach((el) => el.classList.remove(VARIANTS.light));\n        }\n\n        // Toggle button variants\n        BTN_CONFIG.forEach(({ from, to, variant, embedIcon }) => {\n          const [src, dest] = isLight ? [from, to] : [`${from}---dark`, from];\n          const btns = navbar.querySelectorAll(`[data-wf--button--variant=\"${src}\"]`);\n          btns.forEach((btn) => {\n            btn.setAttribute(\"data-wf--button--variant\", dest);\n            btn.classList[action](variant);\n            // Secondary buttons need base variant toggled inversely\n            if (from === \"secondary\") {\n              if (isLight) {\n                btn.classList.remove(VARIANTS.secondaryBase);\n              } else {\n                btn.classList.add(VARIANTS.secondaryBase);\n              }\n            }\n            if (embedIcon) btn.querySelector(\".embed-icon\")?.classList[action](variant);\n          });\n        });\n      }\n\n      document.querySelectorAll('[light-bg=\"true\"]').forEach((section) => {\n        ScrollTrigger.create({\n          trigger: section,\n          start: \"top top\",\n          end: \"bottom top\",\n          onEnter: () => setNavbarTheme(true),\n          onLeave: () => setNavbarTheme(false),\n          onEnterBack: () => setNavbarTheme(true),\n          onLeaveBack: () => setNavbarTheme(false),\n        });\n      });\n\n      document.querySelectorAll('[dark-bg=\"true\"]').forEach((section) => {\n        ScrollTrigger.create({\n          trigger: section,\n          start: \"top top\",\n          end: \"bottom top\",\n          onEnter: () => setNavbarTheme(false),\n          onLeave: () => setNavbarTheme(true),\n          onEnterBack: () => setNavbarTheme(false),\n          onLeaveBack: () => setNavbarTheme(true),\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const jobListEmbed = document.querySelector(\".job-list\");\n      if (jobListEmbed) {\n        new ResizeObserver(() => {\n          ScrollTrigger.refresh();\n        }).observe(jobListEmbed);\n      }" }} />
      <TemplateScripts wfPage="660189f45f9033dd87f82ab2" scripts={["/assets/vendor/finsweet-scrolldisable.js", "/assets/vendor/flowbase-tooltip.min.js"]} />
    </>
  );
}
