// Generated from the static Sentrize template by the migration converter.
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: { absolute: "Partners | Sentrize" },
  description: "Partner with Sentrize \u2014 AWS, technology, referral, agency, and reseller programs.",
  alternates: { canonical: "https://www.sentrize.com/partners" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "\n      @media (min-width: 992px) {\n        html.w-mod-js:not(.w-mod-ix) [data-w-id=\"86813a9a-f980-0b2d-7877-8d942ec523a7\"] {\n          opacity: 0;\n        }\n      }\n      @media (max-width: 991px) and (min-width: 768px) {\n        html.w-mod-js:not(.w-mod-ix) [data-w-id=\"86813a9a-f980-0b2d-7877-8d942ec523a7\"] {\n          opacity: 0;\n        }\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      html.w-mod-js:not(.w-mod-ix3) :is([text-paragraph-animation-start], [text-paragraph-animation]) {\n        visibility: hidden !important;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -o-font-smoothing: antialiased;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* Make Flowbase / Tippy tooltip text respect \\n */\n      .tippy-box .tippy-content {\n        white-space: pre-line;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      [text-letters-animation-start] {\n        opacity: 0.3;\n        color: #7fc8ff;\n      }\n    " }} />
      <div className="page-wrapper">
        <div className="global-styles">
          <div className="style-overrides w-embed">
            <style dangerouslySetInnerHTML={{ __html: "\n            /* Ensure all elements inherit the color from its parent */\n            a,\n/*     .w-input,    */\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-nav-brand,\n.w-dropdown-btn,\n/*.w-dropdown-toggle, */\n.w-slider-arrow-left,\n.w-slider-arrow-right,\n.w-dropdown-link {\n              color: inherit;\n              text-decoration: inherit;\n              font-size: inherit;\n            }\n\n            /* Focus state style for keyboard navigation for the focusable elements */\n            *[tabindex]:focus-visible,\n            input[type=\"file\"]:focus-visible {\n              outline: 0.125rem solid #4d65ff;\n              outline-offset: 0.125rem;\n            }\n\n            /* Get rid of top margin on first element in any rich text element */\n            .w-richtext > :not(div):first-child,\n            .w-richtext > div:first-child > :first-child {\n              margin-top: 0 !important;\n            }\n\n            /* Get rid of bottom margin on last element in any rich text element */\n            .w-richtext > :last-child,\n            .w-richtext ol li:last-child,\n            .w-richtext ul li:last-child {\n              margin-bottom: 0 !important;\n            }\n\n            /* Prevent all click and hover interaction with an element */\n            .pointer-events-off {\n              pointer-events: none;\n            }\n\n            /* Enables all click and hover interaction with an element */\n            .pointer-events-on {\n              pointer-events: auto;\n            }\n\n            /* Create a class of .div-square which maintains a 1:1 dimension of a div */\n            .div-square::after {\n              content: \"\";\n              display: block;\n              padding-bottom: 100%;\n            }\n\n            /* Make sure containers never lose their center alignment */\n            .container-medium,\n            .container-small,\n            .container-large {\n              margin-right: auto !important;\n              margin-left: auto !important;\n            }\n\n            /* Apply \"...\" after 3 lines of text */\n            .text-style-3lines {\n              display: -webkit-box;\n              overflow: hidden;\n              -webkit-line-clamp: 3;\n              -webkit-box-orient: vertical;\n            }\n\n            /* Apply \"...\" after 2 lines of text */\n            .text-style-2lines {\n              display: -webkit-box;\n              overflow: hidden;\n              -webkit-line-clamp: 2;\n              -webkit-box-orient: vertical;\n            }\n\n            /* Apply \"...\" after 1 line of text */\n            .text-style-1line {\n              display: -webkit-box;\n              overflow: hidden;\n              -webkit-line-clamp: 1;\n              -webkit-box-orient: vertical;\n            }\n\n            /* Adds inline flex display */\n            .display-inlineflex {\n              display: inline-flex;\n            }\n\n            /* These classes are never overwritten */\n            .hide {\n              display: none !important;\n            }\n\n            /* Remove default Webflow chevron from form select */\n            select {\n              -webkit-appearance: none;\n            }\n\n            @media screen and (max-width: 991px) {\n              .hide,\n              .hide-tablet {\n                display: none !important;\n              }\n            }\n            @media screen and (max-width: 767px) {\n              .hide-mobile-landscape {\n                display: none !important;\n              }\n            }\n            @media screen and (max-width: 479px) {\n              .hide-mobile {\n                display: none !important;\n              }\n            }\n\n            .margin-0 {\n              margin: 0rem !important;\n            }\n\n            .padding-0 {\n              padding: 0rem !important;\n            }\n\n            .spacing-clean {\n              padding: 0rem !important;\n              margin: 0rem !important;\n            }\n\n            .margin-top {\n              margin-right: 0rem !important;\n              margin-bottom: 0rem !important;\n              margin-left: 0rem !important;\n            }\n\n            .padding-top {\n              padding-right: 0rem !important;\n              padding-bottom: 0rem !important;\n              padding-left: 0rem !important;\n            }\n\n            .margin-right {\n              margin-top: 0rem !important;\n              margin-bottom: 0rem !important;\n              margin-left: 0rem !important;\n            }\n\n            .padding-right {\n              padding-top: 0rem !important;\n              padding-bottom: 0rem !important;\n              padding-left: 0rem !important;\n            }\n\n            .margin-bottom {\n              margin-top: 0rem !important;\n              margin-right: 0rem !important;\n              margin-left: 0rem !important;\n            }\n\n            .padding-bottom {\n              padding-top: 0rem !important;\n              padding-right: 0rem !important;\n              padding-left: 0rem !important;\n            }\n\n            .margin-left {\n              margin-top: 0rem !important;\n              margin-right: 0rem !important;\n              margin-bottom: 0rem !important;\n            }\n\n            .padding-left {\n              padding-top: 0rem !important;\n              padding-right: 0rem !important;\n              padding-bottom: 0rem !important;\n            }\n\n            .margin-horizontal {\n              margin-top: 0rem !important;\n              margin-bottom: 0rem !important;\n            }\n\n            .padding-horizontal {\n              padding-top: 0rem !important;\n              padding-bottom: 0rem !important;\n            }\n\n            .margin-vertical {\n              margin-right: 0rem !important;\n              margin-left: 0rem !important;\n            }\n\n            .padding-vertical {\n              padding-right: 0rem !important;\n              padding-left: 0rem !important;\n            }\n\n            /* Apply \"...\" at 100% width */\n            .truncate-width {\n              width: 100%;\n              white-space: nowrap;\n              overflow: hidden;\n              text-overflow: ellipsis;\n            }\n            /* Removes native scrollbar */\n            .no-scrollbar {\n              -ms-overflow-style: none;\n              overflow: -moz-scrollbars-none;\n            }\n\n            .no-scrollbar::-webkit-scrollbar {\n              display: none;\n            }\n\n            .page-wrapper {\n              overflow: clip;\n            }\n\n            /* Bullets Pricing */\n            .bullet-list_wrapper {\n              list-style: none;\n              margin: 0;\n            }\n\n            .bullet-list_wrapper > li {\n              position: relative;\n              padding-left: 1.3em;\n            }\n\n            .bullet-list_wrapper > li::before {\n              content: \"\";\n              position: absolute;\n              left: 0;\n              top: 50%;\n              width: 0.5em;\n              height: 0.5em;\n              border-radius: 999px;\n              background: var(--_v-2-colors---c-blue-light--900);\n              transform: translateY(-50%);\n            }\n          " }} />
            <style dangerouslySetInnerHTML={{ __html: "\n            /* Table wrapper */\n            .table-wrap {\n              width: 100%;\n              margin-top: 2rem;\n              margin-bottom: 2rem;\n              overflow-x: auto;\n              -webkit-overflow-scrolling: touch;\n              border-radius: 12px;\n              box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08); /* c-black--8p */\n            }\n\n            /* Table */\n            .table-wrap table {\n              width: 100%;\n              border-collapse: collapse;\n              font-size: 1rem;\n              background: var(--_v-2-colors---c-white);\n              min-width: 400px; /* prevents columns from squishing too much */\n            }\n\n            /* Header row (thead) */\n            .table-wrap table thead tr th {\n              background: var(--_v-2-colors---c-blue-dark--700); /* #161f34 */\n              color: var(--_v-2-colors---c-white);\n              font-weight: 500;\n              font-size: 0.85rem;\n              text-transform: uppercase;\n              letter-spacing: 0.05em;\n              padding: 14px 20px;\n              text-align: left;\n            }\n\n            .table-wrap table thead tr th:first-child {\n              border-radius: 12px 0 0 0;\n            }\n\n            .table-wrap table thead tr th:last-child {\n              border-radius: 0 12px 0 0;\n            }\n\n            /* Row label column (first td in each row) */\n            .table-wrap table tbody tr td:first-child {\n              font-weight: 400;\n              color: var(--_v-2-colors---c-blue-dark--700); /* #161f34 */\n              /* white-space: nowrap; */\n            }\n\n            /* Data rows */\n            .table-wrap table tbody tr td {\n              padding: 14px 20px;\n              border-bottom: 1px solid rgba(3, 7, 16, 0.16); /* c-black--16-p */\n              color: rgba(3, 7, 16, 0.6); /* c-black--60-p */\n            }\n\n            /* Zebra striping \u2014 c-blue-light--300, matches section background */\n            .table-wrap table tbody tr:nth-child(even) {\n              background: #f2faff;\n            }\n\n            /* Hover state \u2014 c-blue-light--400 */\n            .table-wrap table tbody tr:hover {\n              background: #e5f4ff;\n              transition: background 0.15s ease;\n            }\n\n            /* Last row \u2014 remove bottom border */\n            .table-wrap table tbody tr:last-child td {\n              border-bottom: none;\n            }\n\n            .table-wrap table tbody tr:last-child td:first-child {\n              border-radius: 0 0 0 12px;\n            }\n\n            .table-wrap table tbody tr:last-child td:last-child {\n              border-radius: 0 0 12px 0;\n            }\n\n            /* Mobile */\n            @media (max-width: 540px) {\n              .table-wrap table {\n                font-size: 0.85rem;\n                /* min-width: 340px; */\n              }\n\n              .table-wrap table thead tr th,\n              .table-wrap table tbody tr td {\n                padding: 11px 14px;\n              }\n            }\n\n            table {\n              text-wrap: balance !important;\n            }\n\n            li code {\n              color: var(--_v-2-colors---c-blue-dark--400);\n            }\n\n            pre {\n              background: transparent !important;\n              padding: none !important;\n              font-size: 0.875rem !important;\n            }\n\n            pre code.hljs {\n              line-height: 0.5rem !important;\n            }\n          " }} />
          </div>
          <div className="w-embed">
            <style dangerouslySetInnerHTML={{ __html: "\n            :root {\n              --font-from: 18;\n              --font-to: 20;\n              --vw-from: calc(1920 / 100);\n              --vw-to: calc(2400 / 100);\n              --coefficient: calc((var(--font-to) - var(--font-from)) / (var(--vw-to) - var(--vw-from)));\n              --base: calc((var(--font-from) - var(--vw-from) * var(--coefficient)) / 16);\n            }\n\n            html {\n              font-size: calc(var(--base) * 1rem + var(--coefficient) * 1vw);\n            }\n\n            @media screen and (max-width: 1920px) {\n              :root {\n                --font-from: 16;\n                --font-to: 18;\n                --vw-from: calc(1440 / 100);\n                --vw-to: calc(1920 / 100);\n              }\n            }\n\n            @media screen and (max-width: 1440px) {\n              :root {\n                --font-from: 16;\n                --font-to: 16;\n                --vw-from: calc(1 / 100);\n                --vw-to: calc(1440 / 100);\n              }\n            }\n          " }} />
          </div>
        </div>
        <div className="top-banner">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="top-banner-wrapper">
                <div className="t-paragraph-23-b">
                  {"Sentrize is an AWS Advanced Tier Partner"}
                </div>
                <a className="banner-link w-inline-block" data-wf-element-id="280a458b-2f96-b33b-93ab-2071882dd44b" href="/partners">
                  <div className="t-label-1-rg">
                    {"Partner with us"}
                  </div>
                  <div className="embed-icon is-banner w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.61538 4V5.23077H9.90154L4 11.1323L4.86769 12L10.7692 6.09846V11.3846H12V4H4.61538Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
                <div className="hide w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n                  .banner-link:hover .embed-icon.is-banner {\n                    transform: translateX(-0.75rem);\n                  }\n                " }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar2_component w-nav" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-w-id="162b5140-9840-3ab9-d243-3a325f908689" data-wf--navbar--variant="dark" fs-scrolldisable-element="smart-nav" role="banner">
          <div className="navbar2_container">
            <a aria-current="page" aria-label="home" className="navbar2_logo-link w-nav-brand w--current" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f90868b" href="/">
              <div className="navbar2_logo w-embed">
                <span style={{ fontWeight: "700", fontSize: "1.25rem", letterSpacing: "-0.02em", color: "currentColor" }}>
                  {"Sentrize"}
                </span>
              </div>
            </a>
            <nav className="navbar2_menu is-page-height-tablet w-nav-menu" id="w-node-_162b5140-9840-3ab9-d243-3a325f90868d-5f908689" role="navigation">
              <div className="navbar-menu-wrapper">
                <div className="navbar2_menu-dropdown is-static-small-breakpoint w-dropdown" data-delay="100" data-hover="true" data-w-id="162b5140-9840-3ab9-d243-3a325f90868e">
                  <div aria-controls="w-dropdown-list-0" aria-expanded="false" aria-haspopup="menu" className="navbar2_dropdwn-toggle w-dropdown-toggle" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f90868f" id="w-dropdown-toggle-0" role="button" tabIndex={0}>
                    <div className="t-label-1-rg is-bigger-nav">
                      {"Products"}
                    </div>
                    <div className="embed-icon is-nav-arrow w-embed">
                      <svg fill="none" height="100%" viewBox="0 0 6 4" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5.96046e-07L3.26786 4H2.66071L0 0L0.958333 1.19209e-07L2.96429 3L5.04167 4.76837e-07L6 5.96046e-07Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <nav aria-labelledby="w-dropdown-toggle-0" className="navbar2_dropdown-list is-product w-dropdown-list" id="w-dropdown-list-0">
                    <div className="navbar2_dropdown-list-wrapper is-product">
                      <div className="v2-navbar-dropdown-grid is-2col-prod">
                        <div className="v2-navbar-dropdown-column">
                          <a className="nav-link w-inline-block" data-wf-element-id="2bd3fb27-ac1d-5c4e-17dd-f101d2ef7329" href="/services" tabIndex={0}>
                            <div className="t-label-1-rg is-primary-font">
                              {"Product Services"}
                            </div>
                            <div className="embed-icon-2 is-nav w-embed">
                              <svg fill="none" height="14" viewBox="0 0 16 16" width="14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.61538 4V5.23077H9.90154L4 11.1323L4.86769 12L10.7692 6.09846V11.3846H12V4H4.61538Z" fill="currentColor" />
                              </svg>
                            </div>
                          </a>
                          <div className="v2-navbar-divider" />
                          <div className="nav-prod-wrapper">
                            <div className="nav-prod-group">
                              <div className="t-paragraph-3-rg text-c-white-60-p">
                                {"Build"}
                              </div>
                              <div className="v2-navbar-dropdown-links is-left-padding">
                                <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f90869b" href="/services#software-development" tabIndex={0}>
                                  <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/nav-icon-build.svg" />
                                  <div className="v2-navbar-dropdown-content">
                                    <div className="t-label-1-rg is-primary-font">
                                      {"Software Development"}
                                    </div>
                                    <div className="t-paragraph-3-rg text-c-white-60-p">
                                      {"Custom systems built to last"}
                                    </div>
                                  </div>
                                  {" "}
                                </a>
                                <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="fa278824-f02d-9c53-88cf-16cb701ead51" href="/services#saas-development" tabIndex={0}>
                                  <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147254707.svg" />
                                  <div className="v2-navbar-dropdown-content">
                                    <div className="t-label-1-rg is-primary-font">
                                      {"SaaS Development"}
                                    </div>
                                    <div className="t-paragraph-3-rg text-c-white-60-p">
                                      {"\n                                    Multi-tenant products, MVP to scale\n                                  "}
                                    </div>
                                  </div>
                                  {" "}
                                </a>
                                <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086a2" href="/services#web-applications" tabIndex={0}>
                                  <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147255166.svg" />
                                  <div className="v2-navbar-dropdown-content">
                                    <div className="t-label-1-rg is-primary-font">
                                      {"Web Applications"}
                                    </div>
                                    <div className="t-paragraph-3-rg text-c-white-60-p">
                                      {"\n                                    React & Next.js front ends\n                                  "}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="nav-prod-group">
                              <div className="t-paragraph-3-rg text-c-white-60-p">
                                {"Ship & integrate"}
                              </div>
                              <div className="v2-navbar-dropdown-links is-left-padding">
                                <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="ad19a62e-30d3-b5f1-3caf-ba16ed8a7a48" href="/services#mobile-applications" tabIndex={0}>
                                  <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/updated.svg" />
                                  <div className="v2-navbar-dropdown-content">
                                    <div className="t-label-1-rg is-primary-font">
                                      {"Mobile Applications"}
                                    </div>
                                    <div className="t-paragraph-3-rg text-c-white-60-p">
                                      {"\n                                    iOS & Android, one codebase\n                                  "}
                                    </div>
                                  </div>
                                  {" "}
                                </a>
                                <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="ad19a62e-30d3-b5f1-3caf-ba16ed8a7a56" href="/services#api-development" tabIndex={0}>
                                  <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/sandboxes_light_mode-2.svg" />
                                  <div className="v2-navbar-dropdown-content">
                                    <div className="t-label-1-rg is-primary-font">
                                      {"API Development"}
                                    </div>
                                    <div className="t-paragraph-3-rg text-c-white-60-p">
                                      {"REST & GraphQL, built to integrate"}
                                    </div>
                                  </div>
                                  {" "}
                                </a>
                                <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="1939be9d-ca29-058d-e957-22b55236b2ce" href="/services#ai-automation" tabIndex={0}>
                                  <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/nav-icon-ai.png" />
                                  <div className="v2-navbar-dropdown-content">
                                    <div className="t-label-1-rg is-primary-font">
                                      {"AI & Automation"}
                                    </div>
                                    <div className="t-paragraph-3-rg text-c-white-60-p">
                                      {"Practical AI in your product"}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="nav-prod-group">
                              <div className="t-paragraph-3-rg text-c-white-60-p">
                                {"Design"}
                              </div>
                              <div className="v2-navbar-dropdown-links is-left-padding">
                                <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="37d32479-3167-00e5-cf2e-1c82e75bed26" href="/services#ui-ux-design" tabIndex={0}>
                                  <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/nav-icon-design.svg" />
                                  <div className="v2-navbar-dropdown-content">
                                    <div className="t-label-1-rg is-primary-font">
                                      {"UI/UX Design"}
                                    </div>
                                    <div className="t-paragraph-3-rg text-c-white-60-p">
                                      {"Build-ready interface design"}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="hide w-embed">
                            <style dangerouslySetInnerHTML={{ __html: "\n                            .nav-link:hover .embed-icon-2.is-nav {\n                              transform: translateX(-0.75rem);\n                            }\n                          " }} />
                          </div>
                        </div>
                        <div className="v2-navbar-dropdown-column">
                          <div className="t-label-1-rg blue-light-500 is-primary-font">
                            {"Enterprise"}
                          </div>
                          <div className="v2-navbar-divider" />
                          <div className="t-paragraph-3-rg text-c-white-60-p">
                            {"Enterprise practices"}
                          </div>
                          <div className="v2-navbar-dropdown-links is-left-padding">
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086ca" href="/enterprise#enterprise-software" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/updated-1.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Enterprise Software"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"\n                                Mission-critical systems, governed\n                              "}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086c3" href="/enterprise#digital-transformation" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147255166-1.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Digital Transformation"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Legacy to cloud-native, safely"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086bc" href="/enterprise#cybersecurity" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147254707-1.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Cybersecurity Services"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"\n                                Assess, harden, monitor\n                              "}
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="t-paragraph-3-rg text-c-white-60-p">
                            {"Business platforms"}
                          </div>
                          <div className="v2-navbar-dropdown-links is-left-padding">
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="958ba4cd-aa22-a3ca-4795-c750671fbdfc" href="/enterprise#crm-development" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Component-12.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"CRM & ERP Development"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"One source of truth for operations"}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-embed">
                      <style dangerouslySetInnerHTML={{ __html: "\n                      @media (min-width: 992px) and (max-height: 900px) {\n                        .navbar2_dropdown-list-wrapper.is-product {\n                          padding: 1.5rem;\n                        }\n\n                        .v2-navbar-dropdown-column {\n                          gap: 1rem;\n                        }\n\n                        .v2-navbar-dropdown-links.is-left-padding {\n                          gap: 1rem;\n                        }\n\n                        .v2-navbar-dropdown-content {\n                          gap: 0.25rem;\n                        }\n                      }\n                    " }} />
                    </div>
                  </nav>
                </div>
                <div className="navbar2_menu-dropdown w-dropdown" data-delay="100" data-hover="true" data-w-id="162b5140-9840-3ab9-d243-3a325f9086d1">
                  <div aria-controls="w-dropdown-list-1" aria-expanded="false" aria-haspopup="menu" className="navbar2_dropdwn-toggle w-dropdown-toggle" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086d2" id="w-dropdown-toggle-1" role="button" tabIndex={0}>
                    <div className="t-label-1-rg is-bigger-nav">
                      {"Solutions"}
                    </div>
                    <div className="embed-icon is-nav-arrow w-embed">
                      <svg fill="none" height="100%" viewBox="0 0 6 4" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5.96046e-07L3.26786 4H2.66071L0 0L0.958333 1.19209e-07L2.96429 3L5.04167 4.76837e-07L6 5.96046e-07Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <nav aria-labelledby="w-dropdown-toggle-1" className="navbar2_dropdown-list is-learn w-dropdown-list" id="w-dropdown-list-1">
                    <div className="navbar2_dropdown-list-wrapper is-product">
                      <div className="v2-navbar-dropdown-grid is-3col">
                        <div className="v2-navbar-dropdown-column">
                          <div className="t-label-1-rg blue-light-500 is-primary-font">
                            {"Cloud & infrastructure"}
                          </div>
                          <div className="v2-navbar-divider" />
                          <div className="v2-navbar-dropdown-links is-gap-16">
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086de" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147254707.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Cloud Infrastructure"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Resilient, cost-aware cloud"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086e4" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147254707-1.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"AWS Consulting"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Well-Architected on AWS"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086e7" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147255166.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Cloud Migration"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Move without the downtime"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="43d6a22c-7e14-4134-bf2c-89ab771c5733" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147255166-1.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Managed Hosting"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"We run it, you build it"}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="v2-navbar-dropdown-column">
                          <div className="t-label-1-rg blue-light-500 is-primary-font">
                            {"Automation & delivery"}
                          </div>
                          <div className="v2-navbar-divider" />
                          <div className="v2-navbar-dropdown-links is-gap-16">
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086f8" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/updated.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"DevOps Services"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Automate build, deploy, monitor"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086fb" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/updated-1.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"CI/CD Automation"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Ship safely, many times a day"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f9086fe" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/sandboxes_light_mode-2.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Infrastructure as Code"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Terraform-managed environments"}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="v2-navbar-dropdown-column">
                          <div className="t-label-1-rg blue-light-500 is-primary-font">
                            {"Operations & security"}
                          </div>
                          <div className="v2-navbar-divider" />
                          <div className="v2-navbar-dropdown-links is-gap-16">
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f908706" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Component-12.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Kubernetes"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Orchestration done right"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="463d3455-81b9-ddfe-c5bb-cd2e74ef35b2" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/nav-icon-build.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Infrastructure Monitoring"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Observability by default"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f908709" href="/solutions" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/nav-icon-ai.png" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Security & Compliance"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Secure from the first commit"}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <a className="navbar2_link t-label-1-rg w-nav-link" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f908712" href="/enterprise">
                  {"Enterprise"}
                </a>
                <div className="navbar2_menu-dropdown w-dropdown" data-delay="100" data-hover="true" data-w-id="162b5140-9840-3ab9-d243-3a325f908714">
                  <div aria-controls="w-dropdown-list-2" aria-expanded="false" aria-haspopup="menu" className="navbar2_dropdwn-toggle w-dropdown-toggle" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f908715" id="w-dropdown-toggle-2" role="button" tabIndex={0}>
                    <div className="t-label-1-rg is-bigger-nav">
                      {"Company"}
                    </div>
                    <div className="embed-icon is-nav-arrow w-embed">
                      <svg fill="none" height="100%" viewBox="0 0 6 4" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5.96046e-07L3.26786 4H2.66071L0 0L0.958333 1.19209e-07L2.96429 3L5.04167 4.76837e-07L6 5.96046e-07Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <nav aria-labelledby="w-dropdown-toggle-2" className="navbar2_dropdown-list is-company w-dropdown-list" id="w-dropdown-list-2">
                    <div className="navbar2_dropdown-list-wrapper is-product">
                      <div className="v2-navbar-dropdown-grid is-1col">
                        <div className="v2-navbar-dropdown-column">
                          <div className="v2-navbar-dropdown-links is-gap-16">
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f90871e" href="/about" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/nav-icon-design.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"About"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Who we are"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f908721" href="/careers" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/updated.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Careers"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Build with us"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f908724" href="/partners" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Frame-2147255166.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Partners"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Our partner ecosystem"}
                                </div>
                              </div>
                              {" "}
                            </a>
                            <a className="v2-navbar-dropdown-link w-inline-block" data-wf-element-id="d68047bf-a048-fbae-f386-34cc55bf1a20" href="/case-studies" tabIndex={0}>
                              <img alt="" className="v2-navbar-dropdown-icon" loading="lazy" src="/assets/images/Component-12.svg" />
                              <div className="v2-navbar-dropdown-content">
                                <div className="t-label-1-rg is-primary-font">
                                  {"Case Studies"}
                                </div>
                                <div className="t-paragraph-3-rg text-c-white-60-p">
                                  {"Detailed engagements"}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <a className="navbar2_link t-label-1-rg w-nav-link" data-wf-element-id="162b5140-9840-3ab9-d243-3a325f908727" href="/pricing">
                  {"Pricing"}
                </a>
                <div className="navbar-tablet-buttons">
                  <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" href="/contact">
                    <div className="no-wrap-arrow">
                      {"Get started"}
                    </div>
                    <div className="embed-icon is-btn-arrow w-embed">
                      <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                      </svg>
                    </div>
                    {" "}
                  </a>
                  <a className="button-v2-full-width w-inline-block w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9" data-wf--button--variant="secondary" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" href="/contact">
                    <div className="no-wrap-arrow">
                      {"Contact us"}
                    </div>
                    <div className="embed-icon is-btn-arrow w-embed">
                      <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
            <div className="navbar2_button-wrapper" id="w-node-_162b5140-9840-3ab9-d243-3a325f908729-5f908689">
              <div className="hide-tablet">
                <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" href="/contact">
                  <div className="no-wrap-arrow">
                    {"Get started"}
                  </div>
                  <div className="embed-icon is-btn-arrow w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="hide-tablet">
                <a className="button-v2-full-width w-inline-block w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9" data-wf--button--variant="secondary" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" href="/contact">
                  <div className="no-wrap-arrow">
                    {"Contact us"}
                  </div>
                  <div className="embed-icon is-btn-arrow w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="hide w-embed">
                <style dangerouslySetInnerHTML={{ __html: "\n                @media only screen and (min-width: 992px) and (max-width: 1279px) {\n                  .navbar2_button-wrapper a {\n                    padding: 0.5rem 0.5rem;\n                    min-height: 2.5rem;\n                  }\n                }\n              " }} />
              </div>
              <div aria-controls="w-nav-overlay-0" aria-expanded="false" aria-haspopup="menu" aria-label="menu" className="navbar2_menu-button w-nav-button" role="button" tabIndex={0}>
                <div className="menu-icon2">
                  <div className="menu-icon2_line-top" />
                  <div className="menu-icon2_line-middle">
                    <div className="menu-icon2_line-middle-inner" />
                  </div>
                  <div className="menu-icon2_line-bottom" />
                </div>
              </div>
            </div>
          </div>
          <div className="hide w-embed">
            <style dangerouslySetInnerHTML={{ __html: "\n            @media only screen and (max-width: 991px) {\n              .navbar2_component.w-nav.w--open,\n              .navbar2_component:has(.w-nav-button.w--open) {\n                background-color: var(--_v-2-colors---c-blue-dark--900);\n              }\n\n              .navbar2_component.w-variant-5ea50dfb-c632-4d13-5830-b2180e4df891.w-nav.w--open,\n              .navbar2_component.w-variant-5ea50dfb-c632-4d13-5830-b2180e4df891:has(.w-nav-button.w--open),\n              .navbar2_component[data-wf--navbar--variant=\"light\"].w-nav.w--open,\n              .navbar2_component[data-wf--navbar--variant=\"light\"]:has(.w-nav-button.w--open) {\n                background-color: var(--_v-2-colors---c-blue-light--300);\n              }\n            }\n          " }} />
          </div>
          <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
        </div>
        <div className="hide w-embed w-script">
          <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "function updateNavbarHeight() {\n            if (window.innerWidth > 992) return;\n\n            const navbar = document.querySelector(\".navbar2_menu.is-page-height-tablet\");\n            const topBanner = document.querySelector(\".top-banner\");\n            if (!navbar) return;\n\n            const bannerHeight = topBanner ? topBanner.getBoundingClientRect().height : 0;\n\n            if (window.scrollY <= bannerHeight) {\n              navbar.style.height = `calc(100dvh - (4rem + ${bannerHeight}px))`;\n            } else {\n              navbar.style.height = `calc(100dvh - 4rem)`;\n            }\n          }\n\n          function resetNavbarHeight() {\n            const navbar = document.querySelector(\".navbar2_menu.is-page-height-tablet\");\n            if (navbar) navbar.style.height = \"\";\n          }\n\n          function handleResize() {\n            if (window.innerWidth > 992) {\n              resetNavbarHeight();\n            } else {\n              updateNavbarHeight();\n            }\n          }\n\n          window.addEventListener(\"scroll\", updateNavbarHeight, { passive: true });\n          window.addEventListener(\"resize\", handleResize, { passive: true });\n\n          updateNavbarHeight();" }} />
        </div>
        <main className="main-wrapper">
          <section className="customer_hero-section">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="customer-hero-wrapper is-community">
                  <div className="customer-hero_heading-wrapper is-large">
                    <div className="t-label-1-rg text-c-blue-light-900">
                      {"Company"}
                    </div>
                    <div className="spacer-16" />
                    <h1 className="t-heading-1-rg text-c-blue-light-900">
                      {"Partners"}
                    </h1>
                    <div className="spacer-24" />
                    <p className="t-paragraph-1-rg-twk text-c-white-60-p">
                      {"\n                    Grow with a certified engineering partner. Refer clients, white-label our teams, or build on our\n                    stack.\n                  "}
                    </p>
                  </div>
                  <img alt="" className="customer-hero_lines hide-tablet" loading="lazy" sizes="100vw" src="/assets/images/Group-2147239194-line.avif" srcSet="/assets/images/Group-2147239194-line-p-500.png   500w, /assets/images/Group-2147239194-line-p-800.png   800w, /assets/images/Group-2147239194-line-p-1080.png 1080w, /assets/images/Group-2147239194-line-p-1600.png 1600w, /assets/images/Group-2147239194-line.avif       2749w" />
                </div>
              </div>
            </div>
          </section>
          <section className="community_content-section is-relative">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="home-content-wrapper">
                  <div className="home-content-heading-wrapper is-community">
                    <h2 className="t-heading-4-rg text-c-blue-light-900">
                      {"Partner programs"}
                    </h2>
                    <div className="spacer-16" />
                    <p className="t-paragraph-1-rg-twk text-c-white-60-p">
                      {"Choose the relationship that fits your business."}
                    </p>
                  </div>
                  <div className="home-content-3col">
                    <div className="home-content-box">
                      <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/sandboxes_light_mode-2.svg" />
                      <div className="spacer-24 _16-landscape" />
                      <h5 className="t-heading-6-rg text-c-white">
                        {"AWS Partner"}
                      </h5>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"\n                      Certified AWS delivery and co-selling. We design and operate Well-Architected workloads and bring\n                      AWS expertise to joint engagements.\n                    "}
                      </p>
                      <div className="spacer-24" />
                      <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b778" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b778" href="/contact">
                        <div className="t-label-1-rg">
                          {"Learn more"}
                        </div>
                        <div className="embed-icon link-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="home-content-box">
                      <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/Frame-2147254707.svg" />
                      <div className="spacer-24 _16-landscape" />
                      <h5 className="t-heading-6-rg text-c-white">
                        {"Technology Partners"}
                      </h5>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"\n                      Integrate your product with our platform and reach our client base. We build and maintain\n                      reliable integrations together.\n                    "}
                      </p>
                      <div className="spacer-24" />
                      <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b785" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b785" href="/contact">
                        <div className="t-label-1-rg">
                          {"Learn more"}
                        </div>
                        <div className="embed-icon link-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="home-content-box">
                      <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/Frame-2147254720.svg" />
                      <div className="spacer-24 _16-landscape" />
                      <h5 className="t-heading-6-rg text-c-white">
                        {"Referral Program"}
                      </h5>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"\n                      Earn for every client you refer that converts. Simple terms, transparent tracking, prompt\n                      payouts.\n                    "}
                      </p>
                      <div className="spacer-24" />
                      <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b796" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b796" href="/contact">
                        <div className="t-label-1-rg">
                          {"Learn more"}
                        </div>
                        <div className="embed-icon link-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="home-content-box">
                      <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/Frame-2147255016.svg" />
                      <div className="spacer-24 _16-landscape" />
                      <h5 className="t-heading-6-rg text-c-white">
                        {"Agency Partnership"}
                      </h5>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"\n                      White-label engineering capacity for agencies. Deliver software and cloud projects under your\n                      brand, backed by our senior team.\n                    "}
                      </p>
                      <div className="spacer-24" />
                      <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b778" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b778" href="/contact">
                        <div className="t-label-1-rg">
                          {"Learn more"}
                        </div>
                        <div className="embed-icon link-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="home-content-box">
                      <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/Frame-2147255166.svg" />
                      <div className="spacer-24 _16-landscape" />
                      <h5 className="t-heading-6-rg text-c-white">
                        {"Reseller Program"}
                      </h5>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg text-c-white-60-p">
                        {"\n                      Resell our managed services and development capacity with margin, support, and enablement.\n                    "}
                      </p>
                      <div className="spacer-24" />
                      <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b785" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b785" href="/contact">
                        <div className="t-label-1-rg">
                          {"Learn more"}
                        </div>
                        <div className="embed-icon link-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="hide w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                    .button-arrow-no-hover:hover .link-arrow {\n                      transform: translateX(-0.75rem);\n                    }\n\n                    .button-arrow-no-hovert:hover {\n                      color: var(--_v-2-colors---c-blue-light--500);\n                    }\n                  " }} />
                  </div>
                </div>
              </div>
            </div>
            <img alt="" className="content-bg-img" loading="lazy" sizes="(max-width: 2992px) 100vw, 2992px" src="/assets/images/funnel2.png" srcSet="/assets/images/funnel2-p-500.png   500w, /assets/images/funnel2-p-800.png   800w, /assets/images/funnel2-p-1080.png 1080w, /assets/images/funnel2-p-1600.png 1600w, /assets/images/funnel2-p-2000.png 2000w, /assets/images/funnel2-p-2600.png 2600w, /assets/images/funnel2.png        2992w" />
          </section>
          <section className="section_resources">
            <div className="padding-global">
              <div className="container-large" />
            </div>
          </section>
          <section className="community_header-section">
            <div className="v2-padding-global">
              <div className="v2-container">
                <div className="community-templates-heading">
                  <div className="community-heading-wrapper max-width-634">
                    <h2 className="t-heading-3-rg text-c-blue-light-900">
                      {"Interested in partnering?"}
                    </h2>
                    <div className="spacer-40" />
                    <p className="t-paragraph-1-rg">
                      {"\n                    Tell us about your business and we'll find the right program.\n                  "}
                    </p>
                    <div className="spacer-24" />
                    <div>
                      <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%2201c58b4d-833d-1600-f163-fc719a629ceb%22%2C%22instanceId%22%3A%226838a039-bb57-7965-6118-de694010b79f%22%7D%2C%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%2201c58b4d-833d-1600-f163-fc719a629cf6%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b79f:01c58b4d-833d-1600-f163-fc719a629cf6:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow">
                          {"Start a project"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="community-heading-content">
                    <p className="t-paragraph-1-rg-twk">
                      {"\n                    Partner with Sentrize across AWS, technology, referral, agency, and reseller programs."}
                      <br />
                      <br />
                      {"Refer\n                    clients, white-label our teams, or build on our stack \u2014 and choose the relationship that fits your\n                    business.\n                  "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="v2-footer" dark-bg="">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="v2-footer-wrapper">
                <div className="v2-footer-grid">
                  <div className="v2-footer-col">
                    <div className="v2-footer-divider" />
                    <h6 className="t-heading-6-rg text-c-blue-light-900">
                      {"Products"}
                    </h6>
                    <div className="v2-footer-links">
                      <a className="v2-footer-link t-label-1-rg" href="/services">
                        {"Software Development"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/services">
                        {"SaaS Development"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/services">
                        {"Web Applications"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/services">
                        {"Mobile Applications"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/services">
                        {"API Development"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/services">
                        {"AI & Automation"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/services">
                        {"UI/UX Design"}
                      </a>
                    </div>
                  </div>
                  <div className="v2-footer-col">
                    <div className="v2-footer-divider" />
                    <h6 className="t-heading-6-rg text-c-blue-light-900">
                      {"Solutions"}
                    </h6>
                    <div className="v2-footer-links">
                      <a className="v2-footer-link t-label-1-rg" href="/solutions">
                        {"DevOps Services"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/solutions">
                        {"Cloud Infrastructure"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/solutions">
                        {"AWS Consulting"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/solutions">
                        {"Kubernetes"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/solutions">
                        {"CI/CD Automation"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/solutions">
                        {"Security & Compliance"}
                      </a>
                    </div>
                  </div>
                  <div className="v2-footer-col">
                    <div className="v2-footer-divider" />
                    <h6 className="t-heading-6-rg text-c-blue-light-900">
                      {"Company"}
                    </h6>
                    <div className="v2-footer-links">
                      <a className="v2-footer-link t-label-1-rg" href="/about">
                        {"About"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/careers">
                        {"Careers"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/partners">
                        {"Partners"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/case-studies">
                        {"Case Studies"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/contact">
                        {"Contact"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/enterprise">
                        {"Enterprise"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/blog">
                        {"Blog"}
                      </a>
                      <a className="v2-footer-link t-label-1-rg" href="/pricing">
                        {"Pricing"}
                      </a>
                    </div>
                  </div>
                  <div className="v2-footer-col">
                    <div className="v2-footer-divider" />
                    <h6 className="t-heading-6-rg text-c-blue-light-900">
                      {"Engineering insights, a few times a month"}
                    </h6>
                    <div className="spacer-24" />
                    <div className="v2-footer-form-block w-form">
                      <form action="#" aria-label="footer_form" className="v2-footer-form" data-name="footer_form" data-wf-element-id="606ebe6c-e56a-68eb-635f-3431f4bf7c7e" data-wf-page-id="66ecce2b725b6631fd9db0b1" id="wf-form-footer_form" method="post" name="wf-form-footer_form">
                        <input className="v2-input w-input" data-name="EMAIL" data-wfhsfieldname="FormTextInput-2" id="EMAIL" maxLength={256} name="EMAIL" placeholder="Your email" required type="email" />
                        <div className="spacer-16" />
                        <input aria-label="Subscribe" className="button-v2-full-width is-right w-button" data-wait="Please wait..." data-wf-element-id="606ebe6c-e56a-68eb-635f-3431f4bf7c80" type="submit" value="Subscribe" />
                        <input name="hutk" type="hidden" value="" />
                        <input name="ipAddress" type="hidden" value="" />
                        <input name="pageUri" type="hidden" value="" />
                        <input name="pageId" type="hidden" value="" />
                        <input name="pageName" type="hidden" value="" />
                      </form>
                      <div aria-label="footer_form success" className="v2-footer-success-message w-form-done" role="region" tabIndex={-1}>
                        <div className="v2-footer-success-wrapper">
                          <div className="embed-icon w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path clipRule="evenodd" d="M8 0C12.416 0 16 3.584 16 8C16 12.416 12.416 16 8 16C3.58401 16 8.25596e-06 12.416 0 8C0 3.584 3.584 0 8 0ZM6.40039 9.73633L4.32812 7.67188L3.20117 8.80078L6.40039 12L12.8008 5.59961L11.6719 4.46484L6.40039 9.73633Z" fill="#7FC8FF" fillRule="evenodd" />
                            </svg>
                          </div>
                          <div className="t-label-1-rg text-padding">
                            <span className="text-c-white">
                              {"Thank you!"}
                            </span>
                            {" Your submission has been received!\n                        "}
                          </div>
                        </div>
                      </div>
                      <div aria-label="footer_form failure" className="form_error is-news w-form-fail" role="region" tabIndex={-1}>
                        <div>
                          {"Oops! Something went wrong while submitting the form."}
                        </div>
                      </div>
                    </div>
                    <div className="spacer-16" />
                    <div className="v2-footer-sm">
                      <a className="v2-footer-sm-link w-inline-block" data-wf-element-id="08562405-8b11-48b6-ab5d-f3b7e924efb8" href="https://www.linkedin.com/company/sentrize" target="_blank">
                        <div className="embed-icon w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8571 0H1.13929C0.510714 0 0 0.517857 0 1.15357V14.8464C0 15.4821 0.510714 16 1.13929 16H14.8571C15.4857 16 16 15.4821 16 14.8464V1.15357C16 0.517857 15.4857 0 14.8571 0ZM4.83571 13.7143H2.46429V6.07857H4.83929V13.7143H4.83571ZM3.65 5.03571C2.88929 5.03571 2.275 4.41786 2.275 3.66071C2.275 2.90357 2.88929 2.28571 3.65 2.28571C4.40714 2.28571 5.025 2.90357 5.025 3.66071C5.025 4.42143 4.41071 5.03571 3.65 5.03571ZM13.725 13.7143H11.3536V10C11.3536 9.11429 11.3357 7.975 10.1214 7.975C8.88571 7.975 8.69643 8.93929 8.69643 9.93571V13.7143H6.325V6.07857H8.6V7.12143H8.63214C8.95 6.52143 9.725 5.88929 10.8786 5.88929C13.2786 5.88929 13.725 7.47143 13.725 9.52857V13.7143Z" fill="currentColor" />
                          </svg>
                        </div>
                        {" "}
                      </a>
                      <a className="v2-footer-sm-link w-inline-block" data-wf-element-id="08562405-8b11-48b6-ab5d-f3b7e924efba" href="https://x.com/sentrize" target="_blank">
                        <div className="embed-icon w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0390096 0L6.21643 8.82495L0 16H1.39907L6.84154 9.71813L11.2389 16H16L9.47501 6.67867L15.2612 0H13.8621L8.8499 5.78548L4.8001 0H0.0390096ZM2.09644 1.10107H4.2837L13.9422 14.8988H11.755L2.09644 1.10107Z" fill="currentColor" />
                          </svg>
                        </div>
                        {" "}
                      </a>
                      <a className="v2-footer-sm-link w-inline-block" data-wf-element-id="08562405-8b11-48b6-ab5d-f3b7e924efbc" href="https://github.com/sentrize" target="_blank">
                        <div className="embed-icon w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="v2-footer-logo-animation">
                  <div className="footer-logo-html w-embed">
                    <div className="logo-wrap">
                      <svg viewBox="0 0 1160 240" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="fill-grad" gradientUnits="userSpaceOnUse" x1="0" y1="120" x2="1160" y2="120">
                            <stop stopColor="#25486C" stopOpacity="0.12" />
                            <stop offset="1" stopColor="#25486C" stopOpacity="0.38" />
                          </linearGradient>
                        </defs>
                        <text x="8" y="206" fontFamily="Manrope, Arial, sans-serif" fontWeight="800" fontSize="216" letterSpacing="-0.02em" textLength="1144" lengthAdjust="spacingAndGlyphs" fill="url(#fill-grad)">
                          {"Sentrize"}
                        </text>
                      </svg>
                      <svg id="strokes-svg" style={{ maskImage: "radial-gradient(63.9394px at -63.9394px 41.5078px, black 0%, rgba(0, 0, 0, 0.3) 100%)" }} viewBox="0 0 1160 240" xmlns="http://www.w3.org/2000/svg">
                        <text x="8" y="206" fontFamily="Manrope, Arial, sans-serif" fontWeight="800" fontSize="216" letterSpacing="-0.02em" textLength="1144" lengthAdjust="spacingAndGlyphs" fill="none" stroke="#9ED2FA" strokeWidth="2.5">
                          {"Sentrize"}
                        </text>
                      </svg>
                    </div>
                    <div id="glow-cursor" />
                  </div>
                  <div className="footer-logo-css w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                    .logo-wrap {\n                      position: relative;\n                      width: 100%;\n                    }\n\n                    .logo-wrap svg {\n                      width: 100%;\n                      height: auto;\n                      display: block;\n                    }\n\n                    #strokes-svg {\n                      position: absolute;\n                      top: 0;\n                      left: 0;\n                      pointer-events: none;\n                      opacity: 1;\n                      -webkit-mask-image: radial-gradient(248px at -999px 50%, black 0%, rgba(0, 0, 0, 0.3) 100%);\n                      mask-image: radial-gradient(248px at -999px 50%, black 0%, rgba(0, 0, 0, 0.3) 100%);\n                    }\n                  " }} />
                  </div>
                  <div className="hide w-embed w-script">
                    <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const strokesSvg = document.getElementById(\"strokes-svg\");\n                    const logoWrap = document.querySelector(\".logo-wrap\");\n                    const footer = document.querySelector(\".v2-footer\");\n\n                    // Tune these\n                    const RADIUS_RATIO = 0.18; // radius = 18% of logo width (scales on mobile)\n                    const SMOOTHING = 0.12; // 0 = frozen, 1 = instant. Lower = smoother/slower.\n\n                    let targetX = null;\n                    let currentX = null;\n                    let rafId = null;\n\n                    function computeTarget() {\n                      const logoRect = logoWrap.getBoundingClientRect();\n                      const footerRect = footer.getBoundingClientRect();\n                      const vh = window.innerHeight;\n\n                      const radius = logoRect.width * RADIUS_RATIO;\n                      const START_OFFSET = logoRect.height * 0.1;\n\n                      const totalRange = footerRect.bottom - logoRect.top - START_OFFSET;\n                      const scrolled = vh - logoRect.top - START_OFFSET;\n                      const progress = Math.max(0, Math.min(1, scrolled / totalRange));\n\n                      targetX = -radius + progress * logoRect.width;\n\n                      // Initialize currentX on first run so there's no jump-in\n                      if (currentX === null) currentX = targetX;\n\n                      return { radius, y: logoRect.height / 2 };\n                    }\n\n                    function applyMask(x, y, radius) {\n                      const grad = `radial-gradient(${radius}px at ${x}px ${y}px, black 0%, rgba(0,0,0,0.3) 100%)`;\n                      strokesSvg.style.webkitMaskImage = grad;\n                      strokesSvg.style.maskImage = grad;\n                    }\n\n                    function tick() {\n                      const { radius, y } = computeTarget();\n\n                      // Ease currentX toward targetX\n                      currentX += (targetX - currentX) * SMOOTHING;\n\n                      applyMask(currentX, y, radius);\n\n                      // Keep animating until we're essentially at the target\n                      if (Math.abs(targetX - currentX) > 0.3) {\n                        rafId = requestAnimationFrame(tick);\n                      } else {\n                        currentX = targetX;\n                        applyMask(currentX, y, radius);\n                        rafId = null;\n                      }\n                    }\n\n                    function onScroll() {\n                      if (rafId === null) {\n                        rafId = requestAnimationFrame(tick);\n                      }\n                    }\n\n                    window.addEventListener(\"scroll\", onScroll, { passive: true });\n                    window.addEventListener(\"resize\", onScroll);\n                    tick(); // set initial state" }} />
                  </div>
                </div>
                <div className="footer-bottom-wrapper">
                  <a className="footer-system-lin w-inline-block" data-wf-element-id="08562405-8b11-48b6-ab5d-f3b7e924efc6" href="#" data-todo="status-page">
                    <div className="v2-status-dot" />
                    <div className="t-label-1-rg">
                      {"All systems operational"}
                    </div>
                  </a>
                  <div className="v2-footer-policy">
                    <a className="footer-policy-link t-label-1-rg" data-wf-element-id="08562405-8b11-48b6-ab5d-f3b7e924efcb" href="#" data-todo="legal-page">
                      {"Privacy policy"}
                    </a>
                    <a className="footer-policy-link t-label-1-rg" data-wf-element-id="08562405-8b11-48b6-ab5d-f3b7e924efcd" href="#">
                      {"Terms of service"}
                    </a>
                    <a className="footer-policy-link t-label-1-rg" data-todo="legal-page" href="#">
                      {"SLA"}
                    </a>
                    <div className="footer-policy-link t-label-1-rg" style={{ opacity: "0.55" }}>
                      {"\u00a9 2026 Sentrize"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/jquery-3.5.1.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.6739ee8d3353008c.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.schunk.215811584586585b.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/js/sentrize-tonik.cb682089.9114c7be58ce773a.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/gsap.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/ScrollTrigger.min.js" />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/SplitText.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger, SplitText);" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "var Webflow = Webflow || [];\n      Webflow.push(function () {\n        // DOMready has fired\n        // May now use jQuery and Webflow api\n        document.querySelector(\".w-nav-button\").addEventListener(\"click\", function () {\n          var logo = document.querySelector(\".navbar_logo-svg\");\n\n          // Toggle 'open' class for both nav and logo\n          logo.classList.toggle(\"is-light\");\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "// Debounce function to limit the rate at which a function is executed\n      function debounce(func, wait) {\n        let timeout;\n        return function executedFunction(...args) {\n          const later = () => {\n            clearTimeout(timeout);\n            func(...args);\n          };\n          clearTimeout(timeout);\n          timeout = setTimeout(later, wait);\n        };\n      }\n\n      // Function to update video sources\n      function updateVideoSources() {\n        const videos = document.querySelectorAll(\"video\"); // Select all video elements\n        videos.forEach((video) => {\n          const sources = video.querySelectorAll(\"source[data-src]\"); // Select all source elements with a \"data-src\" attribute within each video\n          if (window.innerWidth > 990) {\n            sources.forEach((source) => {\n              source.src = source.getAttribute(\"data-src\"); // If screen width > 990, set src to data-src\n            });\n          } else {\n            sources.forEach((source) => {\n              source.src = \"#\";\n            });\n          }\n          video.load(); // Important: load the new source(s) into the video\n        });\n      }\n\n      // Event listener for DOMContentLoaded to run once on start\n      document.addEventListener(\"DOMContentLoaded\", function () {\n        updateVideoSources();\n      });\n\n      // Event listener for resize with debounce\n      window.addEventListener(\"resize\", debounce(updateVideoSources, 250)); // Debounce resize event" }} />
      <script type="text/template" data-tpl="1" data-tpl-src="/assets/vendor/split-type.min.js" />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger);\n\n      // Shared animation factory\n      function animateLetters(el, { scrollTrigger, delay, colors, durations, stagger }) {\n        const { chars } = new SplitType(el, { types: \"words, chars\" });\n\n        // Set initial state\n        if (typeof colors.initial === \"function\") {\n          chars.forEach((char) => {\n            const c = colors.initial(char);\n            gsap.set(char, { opacity: 0.3, color: c });\n          });\n        } else {\n          gsap.set(chars, { opacity: 0.3, color: colors.initial });\n        }\n\n        if (delay !== undefined) gsap.set(el, { opacity: 1 });\n\n        const tl = gsap.timeline(scrollTrigger ? { scrollTrigger } : { delay: delay ?? 0 });\n\n        chars.forEach((char, i) => {\n          const highlight = typeof colors.highlight === \"function\" ? colors.highlight(char) : colors.highlight;\n          const base = typeof colors.base === \"function\" ? colors.base(char) : colors.base;\n          const offset = i * stagger;\n\n          tl.to(\n            char,\n            {\n              opacity: 1,\n              color: highlight,\n              textShadow: \"0 0 12px rgba(127, 200, 255, 0.6)\",\n              duration: durations[0],\n              ease: durations[2] || undefined,\n            },\n            offset,\n          ).to(\n            char,\n            {\n              color: base,\n              textShadow: \"none\",\n              duration: durations[1],\n              ease: durations[2] || undefined,\n            },\n            offset + durations[0],\n          );\n        });\n      }\n\n      const scrollConfig = (el, scrub = 0.3) => ({\n        trigger: el,\n        start: \"top bottom-=5%\",\n        end: \"center center-=5%\",\n        scrub,\n      });\n\n      // Scroll-triggered (light)\n      document.querySelectorAll(\"[text-letters-animation]\").forEach((el) => {\n        animateLetters(el, {\n          scrollTrigger: scrollConfig(el, 1), // increase scrub from 0.3 \u2192 1 for more lag/smoothing\n          colors: { initial: \"#7fc8ff\", highlight: \"#ffffff\", base: \"#7fc8ff\" },\n          durations: [0.8, 0.8], // slower highlight & fade (was 0.5, 0.5)\n          stagger: 0.15, // more spacing between letters (was 0.1)\n        });\n      });\n\n      // Page load\n      document.querySelectorAll(\"[text-letters-animation-start]\").forEach((el) => {\n        animateLetters(el, {\n          delay: 0.5,\n          colors: { initial: \"#7fc8ff\", highlight: \"#ffffff\", base: \"#7fc8ff\" },\n          durations: [0.15, 0.3, \"power2.out\"],\n          stagger: 0.03,\n        });\n      });\n\n      // Scroll-triggered (dark)\n      const getDarkColors = (char) => {\n        const isBlue = char.closest(\".text-c-blue-dark-400\");\n        return isBlue\n          ? { highlight: \"#ffffff\", base: \"#006ddd\", initial: \"#006ddd\" }\n          : { highlight: \"#7fc8ff\", base: \"#030710\", initial: \"#030710\" };\n      };\n\n      document.querySelectorAll(\"[text-letters-animation-dark]\").forEach((el) => {\n        animateLetters(el, {\n          scrollTrigger: scrollConfig(el),\n          colors: {\n            initial: (char) => getDarkColors(char).initial,\n            highlight: (char) => getDarkColors(char).highlight,\n            base: (char) => getDarkColors(char).base,\n          },\n          durations: [0.5, 0.5],\n          stagger: 0.1,\n        });\n      });\n\n      // Page load (dark)\n      document.querySelectorAll(\"[text-letters-animation-dark-start]\").forEach((el) => {\n        animateLetters(el, {\n          delay: 0.5,\n          colors: {\n            initial: (char) => getDarkColors(char).initial,\n            highlight: (char) => getDarkColors(char).highlight,\n            base: (char) => getDarkColors(char).base,\n          },\n          durations: [0.15, 0.3, \"power2.out\"],\n          stagger: 0.03,\n        });\n      });" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const navbar = document.querySelector(\".navbar2_component\");\n      const VARIANTS = {\n        light: \"w-variant-5ea50dfb-c632-4d13-5830-b2180e4df891\",\n        primaryDark: \"w-variant-2e956572-b1af-5b84-be93-9608dcc82abe\",\n        secondaryDark: \"w-variant-402b5851-8ab4-772f-b336-8fff22939a35\",\n        secondaryBase: \"w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9\",\n      };\n      const LIGHT_SELECTORS =\n        \".navbar2_container, .navbar2_logo.w-embed, .navbar2_menu.is-page-height-tablet.w-nav-menu, .navbar2_dropdwn-toggle.w-dropdown-toggle, .t-label-1-rg, .embed-icon.is-nav-arrow.w-embed, .navbar2_dropdown-list-wrapper.is-product, .t-label-1-rg.blue-light-500, .v2-navbar-divider, .v2-navbar-dropdown-link.w-inline-block, .t-paragraph-3-rg.text-c-white-60-p, .navbar2_link.t-label-1-rg.w-nav-link, .button-v2.w-inline-block, .embed-icon.is-btn-arrow.w-embed, .menu-icon2_line-top, .menu-icon2_line-middle, .menu-icon2_line-bottom, .nav-link\";\n      const BTN_CONFIG = [\n        { from: \"primary\", to: \"primary---dark\", variant: VARIANTS.primaryDark },\n        {\n          from: \"secondary\",\n          to: \"secondary---dark\",\n          variant: VARIANTS.secondaryDark,\n          embedIcon: true,\n        },\n      ];\n\n      function setNavbarTheme(isLight) {\n        const action = isLight ? \"add\" : \"remove\";\n\n        // Toggle navbar variant attribute\n        navbar.setAttribute(\"data-wf--navbar--variant\", isLight ? \"light\" : \"dark\");\n\n        // Toggle light variant on navbar + child elements\n        navbar.classList[action](VARIANTS.light);\n        if (isLight) {\n          navbar.querySelectorAll(LIGHT_SELECTORS).forEach((el) => el.classList.add(VARIANTS.light));\n        } else {\n          navbar\n            .querySelectorAll(`.${CSS.escape(VARIANTS.light)}`)\n            .forEach((el) => el.classList.remove(VARIANTS.light));\n        }\n\n        // Toggle button variants\n        BTN_CONFIG.forEach(({ from, to, variant, embedIcon }) => {\n          const [src, dest] = isLight ? [from, to] : [`${from}---dark`, from];\n          const btns = navbar.querySelectorAll(`[data-wf--button--variant=\"${src}\"]`);\n          btns.forEach((btn) => {\n            btn.setAttribute(\"data-wf--button--variant\", dest);\n            btn.classList[action](variant);\n            // Secondary buttons need base variant toggled inversely\n            if (from === \"secondary\") {\n              if (isLight) {\n                btn.classList.remove(VARIANTS.secondaryBase);\n              } else {\n                btn.classList.add(VARIANTS.secondaryBase);\n              }\n            }\n            if (embedIcon) btn.querySelector(\".embed-icon\")?.classList[action](variant);\n          });\n        });\n      }\n\n      document.querySelectorAll('[light-bg=\"true\"]').forEach((section) => {\n        ScrollTrigger.create({\n          trigger: section,\n          start: \"top top\",\n          end: \"bottom top\",\n          onEnter: () => setNavbarTheme(true),\n          onLeave: () => setNavbarTheme(false),\n          onEnterBack: () => setNavbarTheme(true),\n          onLeaveBack: () => setNavbarTheme(false),\n        });\n      });\n\n      document.querySelectorAll('[dark-bg=\"true\"]').forEach((section) => {\n        ScrollTrigger.create({\n          trigger: section,\n          start: \"top top\",\n          end: \"bottom top\",\n          onEnter: () => setNavbarTheme(false),\n          onLeave: () => setNavbarTheme(true),\n          onEnterBack: () => setNavbarTheme(false),\n          onLeaveBack: () => setNavbarTheme(true),\n        });\n      });" }} />
      <main className="main-wrapper">
        <section className="customer_hero-section">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="customer-hero-wrapper is-community">
                <div className="customer-hero_heading-wrapper is-large">
                  <div className="t-label-1-rg text-c-blue-light-900">
                    {"Company"}
                  </div>
                  <div className="spacer-16" />
                  <h1 className="t-heading-1-rg text-c-blue-light-900">
                    {"Partners"}
                  </h1>
                  <div className="spacer-24" />
                  <p className="t-paragraph-1-rg-twk text-c-white-60-p">
                    {"\n                    Grow with a certified engineering partner. Refer clients, white-label our teams, or build on our\n                    stack.\n                  "}
                  </p>
                </div>
                <img alt="" className="customer-hero_lines hide-tablet" loading="lazy" sizes="100vw" src="/assets/images/Group-2147239194-line.avif" srcSet="/assets/images/Group-2147239194-line-p-500.png   500w, /assets/images/Group-2147239194-line-p-800.png   800w, /assets/images/Group-2147239194-line-p-1080.png 1080w, /assets/images/Group-2147239194-line-p-1600.png 1600w, /assets/images/Group-2147239194-line.avif       2749w" />
              </div>
            </div>
          </div>
        </section>
        <section className="community_content-section is-relative">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-content-wrapper">
                <div className="home-content-heading-wrapper is-community">
                  <h2 className="t-heading-4-rg text-c-blue-light-900">
                    {"Partner programs"}
                  </h2>
                  <div className="spacer-16" />
                  <p className="t-paragraph-1-rg-twk text-c-white-60-p">
                    {"Choose the relationship that fits your business."}
                  </p>
                </div>
                <div className="home-content-3col">
                  <div className="home-content-box">
                    <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/sandboxes_light_mode-2.svg" />
                    <div className="spacer-24 _16-landscape" />
                    <h5 className="t-heading-6-rg text-c-white">
                      {"AWS Partner"}
                    </h5>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      Certified AWS delivery and co-selling. We design and operate Well-Architected workloads and bring\n                      AWS expertise to joint engagements.\n                    "}
                    </p>
                    <div className="spacer-24" />
                    <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b778" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b778" href="/contact">
                      <div className="t-label-1-rg">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon link-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="home-content-box">
                    <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/Frame-2147254707.svg" />
                    <div className="spacer-24 _16-landscape" />
                    <h5 className="t-heading-6-rg text-c-white">
                      {"Technology Partners"}
                    </h5>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      Integrate your product with our platform and reach our client base. We build and maintain\n                      reliable integrations together.\n                    "}
                    </p>
                    <div className="spacer-24" />
                    <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b785" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b785" href="/contact">
                      <div className="t-label-1-rg">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon link-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="home-content-box">
                    <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/Frame-2147254720.svg" />
                    <div className="spacer-24 _16-landscape" />
                    <h5 className="t-heading-6-rg text-c-white">
                      {"Referral Program"}
                    </h5>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      Earn for every client you refer that converts. Simple terms, transparent tracking, prompt\n                      payouts.\n                    "}
                    </p>
                    <div className="spacer-24" />
                    <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b796" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b796" href="/contact">
                      <div className="t-label-1-rg">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon link-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="home-content-box">
                    <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/Frame-2147255016.svg" />
                    <div className="spacer-24 _16-landscape" />
                    <h5 className="t-heading-6-rg text-c-white">
                      {"Agency Partnership"}
                    </h5>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      White-label engineering capacity for agencies. Deliver software and cloud projects under your\n                      brand, backed by our senior team.\n                    "}
                    </p>
                    <div className="spacer-24" />
                    <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b778" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b778" href="/contact">
                      <div className="t-label-1-rg">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon link-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="home-content-box">
                    <img alt="" className="icon-48-48" loading="lazy" src="/assets/images/Frame-2147255166.svg" />
                    <div className="spacer-24 _16-landscape" />
                    <h5 className="t-heading-6-rg text-c-white">
                      {"Reseller Program"}
                    </h5>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg text-c-white-60-p">
                      {"\n                      Resell our managed services and development capacity with margin, support, and enablement.\n                    "}
                    </p>
                    <div className="spacer-24" />
                    <a className="button-arrow-no-hover is-blue w-inline-block" data-todo="partner-page" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="6838a039-bb57-7965-6118-de694010b785" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b785" href="/contact">
                      <div className="t-label-1-rg">
                        {"Learn more"}
                      </div>
                      <div className="embed-icon link-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hide w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n                    .button-arrow-no-hover:hover .link-arrow {\n                      transform: translateX(-0.75rem);\n                    }\n\n                    .button-arrow-no-hovert:hover {\n                      color: var(--_v-2-colors---c-blue-light--500);\n                    }\n                  " }} />
                </div>
              </div>
            </div>
          </div>
          <img alt="" className="content-bg-img" loading="lazy" sizes="(max-width: 2992px) 100vw, 2992px" src="/assets/images/funnel2.png" srcSet="/assets/images/funnel2-p-500.png   500w, /assets/images/funnel2-p-800.png   800w, /assets/images/funnel2-p-1080.png 1080w, /assets/images/funnel2-p-1600.png 1600w, /assets/images/funnel2-p-2000.png 2000w, /assets/images/funnel2-p-2600.png 2600w, /assets/images/funnel2.png        2992w" />
        </section>
        <section className="section_resources">
          <div className="padding-global">
            <div className="container-large" />
          </div>
        </section>
        <section className="community_header-section">
          <div className="v2-padding-global">
            <div className="v2-container">
              <div className="community-templates-heading">
                <div className="community-heading-wrapper max-width-634">
                  <h2 className="t-heading-3-rg text-c-blue-light-900">
                    {"Interested in partnering?"}
                  </h2>
                  <div className="spacer-40" />
                  <p className="t-paragraph-1-rg">
                    {"\n                    Tell us about your business and we'll find the right program.\n                  "}
                  </p>
                  <div className="spacer-24" />
                  <div>
                    <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%2201c58b4d-833d-1600-f163-fc719a629ceb%22%2C%22instanceId%22%3A%226838a039-bb57-7965-6118-de694010b79f%22%7D%2C%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%2201c58b4d-833d-1600-f163-fc719a629cf6%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="6838a039-bb57-7965-6118-de694010b79f:01c58b4d-833d-1600-f163-fc719a629cf6:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Start a project"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="community-heading-content">
                  <p className="t-paragraph-1-rg-twk">
                    {"\n                    Partner with Sentrize across AWS, technology, referral, agency, and reseller programs."}
                    <br />
                    <br />
                    {"Refer\n                    clients, white-label our teams, or build on our stack \u2014 and choose the relationship that fits your\n                    business.\n                  "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <TemplateScripts wfPage="66ecce2b725b6631fd9db0b1" scripts={["/assets/vendor/finsweet-scrolldisable.js", "/assets/vendor/flowbase-tooltip.min.js"]} />
    </>
  );
}
