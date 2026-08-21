// Generated from the static Sentrize template by the migration converter.
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: { absolute: "About Us | Sentrize" },
  description: "Founded 2014, Sentrize is a global engineering firm of 50+ specialists with 500+ delivered projects, 98% retention, and 24/7 support across 23+ countries.",
  alternates: { canonical: "https://www.sentrize.com/about" },
};

export default function Page() {
  return (
    <>
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
          <section className="section_about-hero">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="about-hero-wrapper">
                  <div className="about-hero-top">
                    <div className="t-label-1-rg blue-light-900">
                      {"About Sentrize"}
                    </div>
                    <div className="spacer-16 _8-landscape" />
                    <h1 className="t-heading-1-rg text-c-blue-light-900">
                      {"\n                    A global engineering firm built on rigor, ownership, and uptime.\n                  "}
                    </h1>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-1-rg-twk">
                      {"\n                    Since 2014 we have helped startups, SMEs, and enterprises build, scale, and operate the software and\n                    cloud infrastructure their businesses run on.\n                  "}
                    </p>
                  </div>
                  <div className="about-hero-image">
                    <div className="about-hero-image_inner">
                      <img alt="The Sentrize team collaborating in the office" className="about-hero-image_asset" loading="eager" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&h=900&q=80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_about-mission">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="w-layout-grid about-mission-grid">
                  <div className="about-mission-line" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f628-87f82a87">
                    <div className="about-mission-line_dot" />
                  </div>
                  <div className="about-mission-content">
                    <div className="about-mission-group">
                      <div className="about-mission-group_left">
                        <h2 className="t-heading-4-rg text-c-blue-light-900">
                          {"Our story"}
                        </h2>
                        <div className="spacer-48 _32-landscape" />
                        <p className="t-paragraph-2-rg">
                          {"\n                        Sentrize started with a simple conviction: most software problems are really\n                        engineering-discipline problems.\n                      "}
                        </p>
                        <div className="spacer-40 _24-landscape" />
                        <p className="t-paragraph-2-rg">
                          {"\n                        Early clients came to us with products that worked in a demo but buckled under real traffic. We\n                        rebuilt them properly \u2014 automated testing, version-controlled infrastructure, and deployment\n                        pipelines that did not depend on one person remembering the right command. That approach earned\n                        repeat work, and repeat work let us grow deliberately into a distributed firm of 50+ engineers\n                        across 23+ countries.\n                      "}
                        </p>
                        <div className="spacer-40 _24-landscape" />
                        <p className="t-paragraph-2-rg">
                          {"\n                        The tools have changed since 2014. The standard has not. We build software that holds up in\n                        production, then stay to help it scale.\n                      "}
                        </p>
                      </div>
                      <div className="about-mission-image" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f635-87f82a87">
                        <div className="about-mission-image_inner">
                          <img alt="Engineers pairing on infrastructure work" className="about-mission-image_asset" loading="eager" sizes="100vw" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1038&h=780&q=80" />
                        </div>
                      </div>
                    </div>
                    <div className="about-mission-group is--second">
                      <div className="about-mission-image is--story" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f639-87f82a87">
                        <div className="about-mission-image_inner">
                          <img alt="Global network connections across regions" className="about-mission-image_asset" loading="eager" sizes="100vw" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=889&h=667&q=80" />
                        </div>
                      </div>
                      <div className="about-mission-group_left">
                        <h2 className="t-heading-4-rg text-c-blue-light-900">
                          {"Mission & vision"}
                        </h2>
                        <div className="spacer-48 _32-landscape" />
                        <p className="t-paragraph-2-rg">
                          <strong>
                            {"Our mission \u2014 reliable by design, not by luck."}
                          </strong>
                        </p>
                        <div className="spacer-40 _24-landscape" />
                        <p className="t-paragraph-2-rg">
                          {"\n                        We make modern engineering practices the default, so the software businesses depend on is\n                        dependable from the first release \u2014 shipped with automated testing, infrastructure as code,\n                        observability, and zero-downtime deploys.\n                      "}
                        </p>
                        <div className="spacer-40 _24-landscape" />
                        <p className="t-paragraph-2-rg">
                          <strong>
                            {"Our vision \u2014 the partner trusted to run what matters."}
                          </strong>
                        </p>
                        <div className="spacer-40 _24-landscape" />
                        <p className="t-paragraph-2-rg">
                          {"\n                        To be the long-term engineering partner businesses trust to build and operate their most\n                        important systems \u2014 measured not by what we launch, but by what keeps running years later.\n                      "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_about-operations">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="w-layout-grid about-operations-grid">
                  <div className="max-width-280">
                    <h3 className="t-heading-4-rg text-c-blue-light-900">
                      {"Principles we engineer by"}
                    </h3>
                  </div>
                  <div>
                    <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f653">
                      <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f654">
                        <div className="t-heading-6-rg text-color-white">
                          {"01 \u2014 Engineering Rigor"}
                        </div>
                        <div className="faq5_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="faq_answer is-black-bg">
                        <div className="margin-bottom margin-small">
                          <div>
                            <div className="text-rich-text is-primary-font w-richtext">
                              <p>
                                {"\n                              Production-grade discipline \u2014 architecture, testing, and code review \u2014 on every system we ship.\n                            "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f663">
                      <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f664">
                        <div className="t-heading-6-rg text-color-white">
                          {"02 \u2014 Radical Ownership"}
                        </div>
                        <div className="faq5_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="faq_answer is-black-bg">
                        <div className="margin-bottom margin-small">
                          <div>
                            <div className="text-rich-text is-primary-font w-richtext">
                              <p>
                                {"\n                              Engineers own outcomes end to end, from first commit to the on-call page at 3 a.m.\n                            "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f675">
                      <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f676">
                        <div className="t-heading-6-rg text-color-white">
                          {"03 \u2014 Transparent Partnership"}
                        </div>
                        <div className="faq5_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="faq_answer is-black-bg">
                        <div className="margin-bottom margin-small">
                          <div>
                            <div className="text-rich-text is-primary-font w-richtext">
                              <p>
                                {"\n                              Clients see roadmaps, metrics, and trade-offs in real time, not polished status theatre.\n                            "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f663">
                      <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f664">
                        <div className="t-heading-6-rg text-color-white">
                          {"04 \u2014 Security by Default"}
                        </div>
                        <div className="faq5_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="faq_answer is-black-bg">
                        <div className="margin-bottom margin-small">
                          <div>
                            <div className="text-rich-text is-primary-font w-richtext">
                              <p>
                                {"\n                              Least privilege, encryption, and auditability designed in from the first line of code.\n                            "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f663">
                      <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f664">
                        <div className="t-heading-6-rg text-color-white">
                          {"05 \u2014 Pragmatic Innovation"}
                        </div>
                        <div className="faq5_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="faq_answer is-black-bg">
                        <div className="margin-bottom margin-small">
                          <div>
                            <div className="text-rich-text is-primary-font w-richtext">
                              <p>
                                {"\n                              We adopt new technology when it measurably improves reliability, speed, or cost.\n                            "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="faq_accordion is-black-bg is-last" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f687">
                      <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f688">
                        <div className="t-heading-6-rg text-color-white">
                          {"06 \u2014 Continuous Improvement"}
                        </div>
                        <div className="faq5_icon-wrapper">
                          <div className="icon-embed-small w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="faq_answer is-black-bg">
                        <div className="margin-bottom margin-small">
                          <div>
                            <div className="text-rich-text is-primary-font w-richtext">
                              <p>
                                {"\n                              Every incident and release is data that makes the next one better.\n                            "}
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
          </section>
          <section className="careers_backed-section is-relative">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="home-content-wrapper is-big-padding">
                  <div className="careers_backed-heading-wrapper">
                    <h3 className="t-heading-4-rg text-c-blue-light-900">
                      {"Our journey"}
                    </h3>
                  </div>
                  <div className="news-list-wrapper w-dyn-list">
                    <div className="home-content-2col is-news w-dyn-items" role="list">
                      <div className="w-dyn-item" role="listitem">
                        <div className="backed-logo_grid-logo-card is-news">
                          <div className="backed-logo_grid-logo is-news">
                            <div>
                              <div className="t-heading-4-rg text-c-blue-light-900">
                                {"2014"}
                              </div>
                              <div className="spacer-16 _8-landscape" />
                              <h3 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                              Sentrize is founded, delivering its first custom platform builds for early SME clients.\n                            "}
                              </h3>
                              <div className="spacer-32 _24-landscape" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-item" role="listitem">
                        <div className="backed-logo_grid-logo-card is-news">
                          <div className="backed-logo_grid-logo is-news">
                            <div>
                              <div className="t-heading-4-rg text-c-blue-light-900">
                                {"2016"}
                              </div>
                              <div className="spacer-16 _8-landscape" />
                              <h3 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                              Crossed 50 delivered projects and established a dedicated DevOps practice.\n                            "}
                              </h3>
                              <div className="spacer-32 _24-landscape" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-item" role="listitem">
                        <div className="backed-logo_grid-logo-card is-news">
                          <div className="backed-logo_grid-logo is-news">
                            <div>
                              <div className="t-heading-4-rg text-c-blue-light-900">
                                {"2017"}
                              </div>
                              <div className="spacer-16 _8-landscape" />
                              <h3 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                              Became an AWS Partner and opened a second delivery region across new time zones.\n                            "}
                              </h3>
                              <div className="spacer-32 _24-landscape" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-item" role="listitem">
                        <div className="backed-logo_grid-logo-card is-news">
                          <div className="backed-logo_grid-logo is-news">
                            <div>
                              <div className="t-heading-4-rg text-c-blue-light-900">
                                {"2019"}
                              </div>
                              <div className="spacer-16 _8-landscape" />
                              <h3 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                              Achieved ISO 27001 and SOC 2 Type II, formalizing our enterprise security posture.\n                            "}
                              </h3>
                              <div className="spacer-32 _24-landscape" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-item" role="listitem">
                        <div className="backed-logo_grid-logo-card is-news">
                          <div className="backed-logo_grid-logo is-news">
                            <div>
                              <div className="t-heading-4-rg text-c-blue-light-900">
                                {"2020"}
                              </div>
                              <div className="spacer-16 _8-landscape" />
                              <h3 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                              Scaled to a fully distributed delivery model spanning multiple regions without missing SLAs.\n                            "}
                              </h3>
                              <div className="spacer-32 _24-landscape" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-item" role="listitem">
                        <div className="backed-logo_grid-logo-card is-news">
                          <div className="backed-logo_grid-logo is-news">
                            <div>
                              <div className="t-heading-4-rg text-c-blue-light-900">
                                {"2022"}
                              </div>
                              <div className="spacer-16 _8-landscape" />
                              <h3 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                              Reached AWS Advanced Tier Partner status and surpassed 300 projects at 99.99% uptime.\n                            "}
                              </h3>
                              <div className="spacer-32 _24-landscape" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-item" role="listitem">
                        <div className="backed-logo_grid-logo-card is-news">
                          <div className="backed-logo_grid-logo is-news">
                            <div>
                              <div className="t-heading-4-rg text-c-blue-light-900">
                                {"2024"}
                              </div>
                              <div className="spacer-16 _8-landscape" />
                              <h3 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                              Launched a dedicated AI & Automation practice across client products and pipelines.\n                            "}
                              </h3>
                              <div className="spacer-32 _24-landscape" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-item" role="listitem">
                        <div className="backed-logo_grid-logo-card is-news">
                          <div className="backed-logo_grid-logo is-news">
                            <div>
                              <div className="t-heading-4-rg text-c-blue-light-900">
                                {"2026"}
                              </div>
                              <div className="spacer-16 _8-landscape" />
                              <h3 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                              Surpassed 500 projects across 23+ countries with 50+ specialists and 98% retention.\n                            "}
                              </h3>
                              <div className="spacer-32 _24-landscape" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hide w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                    @media (min-width: 768px) {\n                      .home-content-2col.is-news .w-dyn-item:last-child:nth-child(odd) {\n                        grid-column: 1 / -1; /* span the full grid width */\n                      }\n                    }\n                  " }} />
                  </div>
                  <div className="hide w-embed">
                    <style dangerouslySetInnerHTML={{ __html: "\n                    .backed-logo_grid-logo-card:hover .button-arrow-no-hover {\n                      color: var(--_v-2-colors---c-blue-light--400);\n                    }\n                  " }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="careers_backed-section is-relative">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="home-content-wrapper is-big-padding">
                  <div className="careers_backed-heading-wrapper">
                    <h3 className="t-heading-4-rg text-c-blue-light-900">
                      {"Certifications"}
                    </h3>
                  </div>
                  <div className="home-content-2col is-logos">
                    <div className="backed-logo_grid-logo-card" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f6b2-87f82a87">
                      <div className="backed-logo_grid-logo">
                        <div>
                          <div className="t-heading-5-rg text-c-blue-light-900">
                            {"I2"}
                          </div>
                          <div className="spacer-8" />
                          <div className="t-heading-6-rg text-c-blue-light-900">
                            {"ISO 27001"}
                          </div>
                          <div className="spacer-8" />
                          <p className="t-paragraph-3-rg">
                            {"Certified information security management governing how we handle and protect client data."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backed-logo_grid-logo-card" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f6b5-87f82a87">
                      <div className="backed-logo_grid-logo">
                        <div>
                          <div className="t-heading-5-rg text-c-blue-light-900">
                            {"S2"}
                          </div>
                          <div className="spacer-8" />
                          <div className="t-heading-6-rg text-c-blue-light-900">
                            {"SOC 2 Type II"}
                          </div>
                          <div className="spacer-8" />
                          <p className="t-paragraph-3-rg">
                            {"Independently audited controls for security, availability, and confidentiality."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backed-logo_grid-logo-card" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f6b8-87f82a87">
                      <div className="backed-logo_grid-logo">
                        <div>
                          <div className="t-heading-5-rg text-c-blue-light-900">
                            {"I9"}
                          </div>
                          <div className="spacer-8" />
                          <div className="t-heading-6-rg text-c-blue-light-900">
                            {"ISO 9001"}
                          </div>
                          <div className="spacer-8" />
                          <p className="t-paragraph-3-rg">
                            {"Certified quality management for consistent, repeatable engineering and delivery."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backed-logo_grid-logo-card">
                      <div className="backed-logo_grid-logo">
                        <div>
                          <div className="t-heading-5-rg text-c-blue-light-900">
                            {"AA"}
                          </div>
                          <div className="spacer-8" />
                          <div className="t-heading-6-rg text-c-blue-light-900">
                            {"AWS Advanced Tier"}
                          </div>
                          <div className="spacer-8" />
                          <p className="t-paragraph-3-rg">
                            {"Validated AWS expertise across architecture, migration, and managed operations."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backed-logo_grid-logo-card">
                      <div className="backed-logo_grid-logo">
                        <div>
                          <div className="t-heading-5-rg text-c-blue-light-900">
                            {"GC"}
                          </div>
                          <div className="spacer-8" />
                          <div className="t-heading-6-rg text-c-blue-light-900">
                            {"GDPR Compliant"}
                          </div>
                          <div className="spacer-8" />
                          <p className="t-paragraph-3-rg">
                            {"Data handling, processing, and retention aligned with EU data protection law."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backed-logo_grid-logo-card">
                      <div className="backed-logo_grid-logo">
                        <div>
                          <div className="t-heading-5-rg text-c-blue-light-900">
                            {"HR"}
                          </div>
                          <div className="spacer-8" />
                          <div className="t-heading-6-rg text-c-blue-light-900">
                            {"HIPAA-Ready"}
                          </div>
                          <div className="spacer-8" />
                          <p className="t-paragraph-3-rg">
                            {"Engineering controls and infrastructure prepared for protected health workloads."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_about-hiring">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="w-layout-grid about_hiring-grid">
                  <div className="w-embed w-script">
                    <style dangerouslySetInnerHTML={{ __html: "\n                    .dot-globe-wrap {\n                      width: 100%;\n                      max-width: 470px;\n                      aspect-ratio: 1/1;\n                      margin: 0 auto;\n                      display: block;\n                    }\n                    .dot-globe-wrap canvas {\n                      display: block;\n                      width: 100%;\n                      height: 100%;\n                      touch-action: none;\n                      cursor: grab;\n                    }\n                  " }} />
                    <div className="dot-globe-wrap">
                      <canvas id="dot-globe" />
                    </div>
                    <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "(function () {\n                      const POINTS_RAW =\n                        \"755,-282,592,-305,-950,65,-351,19,936,-322,797,511,516,-477,-712,23,914,-405,-378,-495,782,-9,699,-715,831,489,264,414,-291,-863,-736,-668,105,725,679,-115,284,851,442,665,667,336,756,-181,629,-770,-326,548,973,229,14,-671,-551,497,381,-526,-761,481,76,-874,242,-969,54,-145,392,908,-274,266,924,838,545,19,-64,972,228,231,202,952,13,-976,217,-544,-350,763,-470,745,473,921,-54,385,-56,956,287,633,765,123,823,100,559,-255,889,380,640,-82,-764,-287,788,-545,807,582,100,238,391,889,-583,-451,676,871,-403,281,723,-206,-659,650,-303,697,260,-616,-744,-247,354,-902,89,-994,-60,587,566,579,293,-593,-750,-175,304,937,-578,-504,642,43,954,298,340,590,732,-377,648,-662,775,-294,560,917,178,357,532,-419,-735,20,465,885,220,929,297,630,777,5,-229,369,901,810,-145,569,-71,784,-617,806,-528,268,404,-411,-817,281,901,331,-446,81,892,780,-416,468,103,-974,201,374,79,-924,-9,985,-171,-738,-34,674,428,-308,-849,780,-147,-608,921,-118,371,-344,899,-270,37,899,436,-361,702,614,416,793,444,103,545,-832,244,905,349,409,880,241,-501,840,207,-131,-960,246,272,-526,-805,682,107,723,160,378,912,-278,-937,213,305,-206,-930,988,127,-86,98,906,-412,300,-495,-816,360,-441,-822,124,616,-778,322,486,813,-271,-950,156,-390,921,19,-149,501,852,398,905,150,39,530,-847,860,-247,447,-355,676,-646,-25,613,790,661,483,574,650,760,-1,773,247,584,-537,-437,721,-87,-988,-127,203,556,806,968,170,184,218,760,-612,19,815,-579,-10,-955,298,949,217,227,255,-967,0,910,279,306,-243,865,-440,-44,910,413,-303,840,450,444,747,494,-484,-56,873,109,586,-803,13,538,-843,984,158,80,-208,-942,264,-260,944,203,164,573,803,491,838,237,-166,-965,203,562,-240,-792,-324,608,725,772,636,-25,-125,-988,92,174,913,369,513,-374,-773,841,-341,421,303,715,-630,557,830,-36,-55,-970,235,141,-933,-332,-358,671,650,525,850,-48,523,805,281,-95,893,-440,231,832,-504,-80,390,917,612,22,-790,675,374,635,4,-961,278,171,421,891,309,733,606,-444,461,769,653,543,527,283,798,532,246,948,-204,214,944,-253,-582,-478,658,-125,352,928,950,311,-9,348,890,294,383,-311,-870,-219,939,-265,278,593,756,868,-386,311,328,-32,-944,221,697,682,797,-282,534,738,160,655,-356,-25,934,-485,706,515,118,986,-115,775,-447,446,125,819,560,759,234,608,478,782,400,-356,757,-548,312,-944,109,328,553,766,185,982,43,880,275,388,314,888,336,847,-208,488,-720,-53,692,645,759,88,-78,-971,226,-180,607,774,591,760,270,-319,-121,940,-106,769,630,-374,705,-602,842,-69,536,-63,577,-814,632,-287,-720,431,-575,-695,234,-617,-751,587,-12,-810,-130,-975,-180,162,752,639,968,65,243,-121,392,912,335,799,-499,-104,945,-311,-685,-574,449,829,194,525,229,-745,-627,964,42,262,-825,-109,555,-212,899,-382,505,855,113,634,-387,-669,701,450,553,-704,-519,484,-113,-992,47,256,-71,-964,288,118,-950,-215,867,450,196,455,869,-186,25,982,155,-985,-76,-7,-986,167,980,194,-51,689,429,584,896,443,-20,-186,-980,67,605,595,530,-166,846,-507,271,704,656,922,-11,386,671,-77,-737,123,881,457,374,754,540,-287,797,531,76,-973,218,-452,864,221,182,231,956,-132,872,472,96,939,-331,-37,826,-562,-226,857,-463,228,894,385,840,489,234,154,973,-172,-244,852,463,-50,836,546,851,506,-138,-39,694,-719,-332,652,681,-299,891,340,670,515,535,481,-223,-848,717,-135,-684,950,196,242,679,-280,-679,-83,560,825,791,-95,-605,-614,-459,643,656,511,555,255,103,-961,-754,-132,644,166,832,530,951,112,289,455,564,689,656,-30,-755,334,-273,-902,872,460,168,357,-26,-934,-16,-996,84,-449,890,81,-524,827,204,-23,907,-421,886,-365,285,813,-347,469,967,123,223,-124,480,868,598,-416,-685,596,-392,-701,790,307,531,151,927,-342,887,89,453,-403,858,318,183,-944,275,-80,336,938,73,570,-818,973,137,-187,938,276,-211,-264,786,559,745,458,486,373,913,163,338,855,393,-427,750,504,494,691,528,-7,970,-244,22,-985,-172,942,19,335,-162,-973,-162,149,-985,91,-391,709,-587,631,-382,676,-386,-443,810,-163,680,-715,218,-961,172,29,667,745,68,679,-731,-347,839,420,-188,903,386,85,-992,-91,637,569,519,525,-337,-781,931,329,-156,535,22,-844,721,121,682,463,-308,-831,420,771,478,92,667,-739,-691,-498,524,228,-948,220,-367,930,12,847,239,475,-184,684,-706,7,803,-596,-111,920,376,340,790,511,464,-250,-850,947,-245,208,281,-186,-941,171,608,776,772,123,624,547,-475,-690,785,616,-64,-271,854,-444,717,219,662,48,-964,262,873,375,311,-331,717,613,-322,331,887,81,533,-842,249,165,-954,802,-443,401,481,531,698,837,-102,537,357,760,-543,841,-162,516,34,482,875,481,-553,-680,-180,872,-456,-37,-949,314,249,-706,-663,781,-347,519,-9,460,888,481,127,-867,-632,-287,720,754,88,652,461,-277,-843,382,851,360,-72,785,615,-309,629,-714,-486,-420,766,-10,-981,-195,300,-126,-946,530,-268,-805,933,-302,194,147,734,663,225,-87,-970,925,381,4,-250,863,439,264,918,296,836,-429,343,34,-950,311,184,-139,-973,-403,601,691,181,875,449,844,-436,314,908,419,-11,850,527,-8,-267,-117,957,-34,748,-663,926,376,35,-378,582,720,205,834,-512,58,-998,19,947,-222,231,297,-273,-915,869,450,-207,748,652,124,305,835,458,561,-347,-752,-100,712,-695,861,-171,479,339,316,-886,86,973,216,-115,865,-488,-559,217,801,-37,-981,-190,424,866,264,346,108,-932,785,-36,618,-105,748,656,269,151,-951,953,296,-68,330,-579,-746,18,-999,42,623,-65,-779,180,-801,-570,-592,689,418,39,605,795,995,101,9,557,-114,-823,-363,691,-625,140,895,424,925,-222,308,-237,788,-568,-53,887,458,-210,876,-434,228,343,911,409,-540,-736,397,749,531,724,-95,-684,-331,450,-830,919,87,385,280,910,-305,620,-357,-698,900,409,149,-12,905,425,-793,-135,594,884,458,-95,-614,-684,394,443,-162,-882,638,-360,-680,-367,906,-211,944,330,15,794,19,607,-136,680,721,-241,738,-630,167,719,-675,457,-528,-716,538,814,218,152,-988,-37,708,-348,-614,-741,-355,570,-130,-967,-218,634,299,713,465,-452,-761,911,-209,355,-440,436,785,653,-6,-757,992,102,-73,798,-496,342,-78,-980,183,555,-497,-667,133,443,887,-48,449,892,926,234,296,337,836,433,843,534,-60,887,406,-220,390,-31,-920,604,797,-28,988,114,100,966,252,-56,586,332,739,-108,-986,-124,241,820,-519,-392,887,-243,-746,-375,551,704,133,698,41,798,601,751,624,218,189,-104,-977,422,895,144,-179,743,-645,835,453,312,-255,160,954,491,812,316,969,234,-84,-322,845,-427,267,-963,22,211,153,-965,897,434,84,270,-949,164,89,226,-970,-198,830,521,255,279,926,616,782,97,-233,927,-295,-150,-935,322,663,99,742,361,-417,-834,-25,-973,229,-618,-256,743,790,-127,-600,840,-376,392,-629,-530,568,-211,341,916,-189,564,-804,931,281,-234,27,569,-822,647,712,274,436,-205,-876,-281,927,250,830,417,370,161,379,-911,-549,-310,776,758,55,650,974,221,-50,936,-260,239,-307,259,916,171,575,-800,-248,-952,181,-222,668,-710,601,351,718,-187,620,-762,140,747,-650,30,897,-441,203,650,-733,47,-956,289,893,381,-241,903,-211,375,889,45,456,38,-931,362,-818,-132,560,21,-976,-215,-216,917,335,-647,-514,563,423,-488,-763,-258,226,939,657,657,369,95,816,570,80,796,-600,-367,520,-771,139,-928,347,-3,506,-863,-623,-611,488,265,651,711,24,875,484,-48,775,-630,-415,-499,761,37,547,836,169,285,944,-291,-920,261,-158,525,836,-740,-533,410,-242,677,695,-344,924,167,273,-961,-41,262,802,536,709,51,704,177,400,899,874,442,203,507,-322,-799,101,654,750,63,-984,164,697,681,226,-343,885,315,561,764,318,887,459,46,-274,656,703,952,-194,236,-233,448,863,375,-496,-783,833,-402,381,-222,87,971,-315,-944,96,642,733,223,-779,-464,423,274,948,-165,521,736,432,-154,-978,143,557,-181,-811,-197,-9,980,62,624,-779,262,543,798,466,770,435,409,614,675,960,-106,261,887,245,393,933,-218,285,-273,196,942,628,776,-50,960,278,-38,-693,-307,652,570,-396,-720,-203,447,-871,-683,-28,730,-248,-961,122,860,424,285,884,363,295,-224,577,-786,950,-13,313,224,226,948,-313,877,-364,-68,-998,-15,-147,709,690,791,465,397,482,-152,-863,-221,-967,123,471,-104,-876,-317,731,-604,-105,693,713,-374,825,-424,880,461,111,230,956,-185,444,761,472,320,-135,-938,-139,886,-443,128,-969,213,-172,946,276,919,365,151,-216,500,839,-278,908,313,-290,370,883,40,-989,-142,126,818,-561,184,737,-651,186,840,509,-49,898,437,824,22,566,968,218,127,179,775,606,527,354,773,-422,685,594,276,739,-615,835,529,148,-288,772,566,-144,869,-473,886,464,23,27,925,379,761,-426,489,322,804,500,656,600,459,100,512,-853,127,531,-838,810,392,436,510,676,532,-310,919,-243,-236,598,-766,13,830,558,755,-141,-641,181,-728,-662,420,646,638,6,905,-426,-178,559,810,186,436,880,251,780,-573,-331,617,-714,-138,292,946,206,937,-282,-799,-418,432,79,362,929,-157,835,-528,-159,367,-916,98,843,529,489,-262,-832,-172,275,946,940,-185,286,536,625,567,-19,418,908,399,669,627,-670,-410,619,827,166,537,167,-980,111,746,32,665,759,643,-100,851,19,525,-332,887,-322,-670,-510,540,468,-32,-883,-205,-29,978,137,299,944,910,-320,265,-265,898,-352,820,-65,569,-714,-411,567,-277,881,-384,72,404,912,-358,742,567,-20,517,856,986,165,-28,918,-301,256,876,349,333,716,-255,-650,728,483,486,967,-81,243,-424,882,-206,-287,415,864,867,299,400,215,839,500,263,356,897,-29,383,923,556,823,120,491,-438,-753,-261,540,-801,895,430,117,399,-263,-879,-371,871,323,119,376,919,35,833,553,936,-19,351,-188,907,-378,132,-973,190,-261,923,281,-592,-525,612,901,-346,263,-653,-473,592,402,891,214,918,-79,388,751,418,511,864,24,503,-121,569,-814,-462,-445,767,-397,738,545,-452,793,408,913,66,403,608,781,146,240,427,872,-29,654,756,359,636,683,-140,885,444,117,982,-151,-148,856,-495,-144,948,285,504,817,282,891,-74,448,38,324,-945,907,362,216,157,718,678,-624,-397,673,579,715,391,315,860,402,780,-534,327,-262,565,-782,973,186,137,238,843,-483,174,668,-723,661,625,416,-109,371,922,254,-188,-949,-114,785,-609,818,257,515,943,280,-178,851,-379,364,-781,-59,622,619,-176,-766,-440,886,-148,619,742,258,-364,632,-684,486,805,341,18,657,-754,138,355,924,16,761,-648,-66,819,-569,504,458,733,-646,-323,692,731,94,676,735,-219,-642,876,66,478,196,-965,173,682,723,115,421,755,503,-289,567,-771,830,555,-52,415,832,368,33,269,-963,-1,924,383,741,-13,671,40,991,-125,755,654,-56,-22,869,494,451,-96,-887,-723,-317,614,946,44,322,-171,867,469,732,64,678,313,793,523,928,-291,231,-391,902,-182,886,169,431,-565,674,476,827,-466,314,966,178,-190,805,-413,426,50,931,-363,830,435,348,695,-201,-690,397,438,807,-573,-409,710,517,792,325,798,-49,601,888,201,413,-290,914,284,-273,821,502,173,632,755,601,729,327,-170,857,-486,-271,811,-519,377,491,785,784,168,597,406,815,414,873,-414,257,811,473,345,873,108,475,630,46,-776,938,297,181,-256,-942,216,-258,437,-862,512,561,650,-459,661,594,431,-400,-809,-378,673,636,41,-971,235,938,-137,319,-269,492,828,245,739,628,857,-433,279,-82,-997,4,518,-195,-833,-317,569,759,103,731,674,812,-252,527,93,637,765,185,842,-507,369,453,812,109,-986,-123,534,605,591,73,928,365,209,-949,238,891,383,243,388,-621,-681,-82,-961,263,-142,845,516,924,-200,325,778,193,598,-239,691,-682,752,-230,-618,-677,-317,664,494,856,149,-172,753,635,693,-364,-622,272,706,-654,164,812,560,-349,821,-452,-396,688,-608,279,-255,-926,662,-243,-709,789,265,554,862,79,501,-410,528,744,-113,511,-852,350,617,705,-203,788,-581,-264,528,807,904,255,343,-278,870,408,982,189,-11,634,747,199,-83,303,949,-23,275,-961,253,26,-967,765,-162,623,292,932,-214,-56,-975,-213,-459,727,511,272,436,858,92,704,704,641,254,724,425,859,287,716,81,693,-255,879,404,-119,81,990,575,645,503,-426,703,569,-49,370,928,879,444,-174,-145,923,-357,-273,932,-238,127,989,-77,371,894,251,134,646,751,653,719,239,-386,913,-128,138,330,934,-569,785,244,958,239,-156,86,945,316,182,729,659,-798,-396,453,412,-127,-902,807,503,310,283,374,883,-204,628,751,-435,794,424,290,807,514,552,-210,-807,319,443,838,-310,553,773,-767,-396,505,348,881,321,-660,-259,705,849,-13,528,860,138,491,-211,430,878,34,627,779,929,-73,363,932,350,-92,-269,662,-699,679,734,17,-67,-967,-246,-77,904,-420,519,-72,-852,982,163,-90,214,309,-927,858,165,486,953,303,20,-222,568,792,-438,887,145,907,-360,219,624,-16,-781,496,61,-866,151,919,365,891,330,312,-223,843,489,437,700,565,871,-339,356,641,765,64,764,507,399,-654,-576,490,-431,-516,741,78,273,-959,980,146,-133,-515,-314,798,965,242,102,-383,561,-733,521,687,506,9,948,319,150,-922,-357,210,-957,202,318,-159,-935,-16,774,-633,164,824,-543,904,-281,321,-236,604,761,-371,880,297,204,367,-908,-349,876,-333,640,751,165,-100,727,679,-419,741,525,-131,-982,139,582,535,613,894,-145,423,50,935,350,476,796,374,694,-24,-720,-190,893,408,122,921,371,805,305,510,-500,741,447,12,-971,241,-131,432,-892,-352,551,-757,-312,735,603,-116,455,-883,-573,-433,696,89,992,-87,564,439,700,327,657,680,89,983,-159,990,100,-96,-506,688,521,-370,862,-346,115,944,309,759,384,526,-248,883,-399,917,388,97,452,810,372,400,849,345,-410,-447,795,-85,507,858,-179,809,560,-411,902,128,495,-97,-863,817,-371,441,-365,587,-723,777,-11,630,-246,944,221,373,-58,-926,344,54,-938,-341,629,698,-400,832,384,-574,-308,759,793,193,577,970,242,-26,-144,930,339,869,-276,411,245,916,-316,596,622,507,244,-114,-963,825,-238,512,940,323,113,261,-590,-764,815,-470,340,470,41,-882,-369,892,-260,875,-19,484,-255,-56,965,13,348,-937,668,738,93,337,-532,-777,400,-50,-915,-375,800,-469,-79,-991,-105,955,285,76,-119,973,-199,-96,-990,106,250,-928,278,618,784,55,911,24,412,337,-551,-763,763,276,585,90,783,616,-310,217,926,342,-335,-878,178,-977,-114,-165,633,756,-120,437,892,693,312,650,626,-118,-771,217,671,709,-193,232,953,-196,-961,195,789,514,336,704,101,703,228,-648,-727,162,649,744,685,353,638,111,-991,-78,-48,791,-610,-295,827,478,819,-214,532,-319,814,-486,844,523,115,-373,600,-707,157,484,861,2,498,867,-129,704,-698,-386,894,229,-315,582,-750,8,-991,-137,793,602,96,-424,-392,816,788,-178,589,467,-388,-795,755,-97,-649,-23,950,311,-408,-523,748,53,518,854,-612,-437,659,420,-618,-665,861,491,136,-485,-503,715,540,-435,-720,478,502,721,909,380,168,-337,868,364,-131,549,-825,651,-102,-752,-23,951,-307,692,-94,-716,476,593,650,625,409,665,90,-986,140,-37,-995,92,-280,487,-827,-43,-937,346,745,-527,408,204,594,778,931,85,354,-638,-463,615,-12,750,-662,874,179,451,-8,637,-771,936,232,266,425,514,745,-143,-961,-235,920,295,257,-418,893,-167,-248,544,801,240,-936,256,156,-973,173,-678,-343,650,983,-13,185,596,310,740,-225,887,403,981,192,39,493,-388,-779,53,737,-673,966,213,-147,874,213,436,537,804,254,307,882,-358,160,797,582,-128,575,808,976,146,-160,236,631,739,547,711,442,-473,868,-153,273,-102,-957,332,926,179,989,140,49,-43,768,639,-310,474,824,-661,-351,663,746,479,462,624,530,575,918,392,54,156,-934,322,865,501,35,939,-233,253,42,-979,-202,276,768,578,-310,899,-310,-529,-67,846,79,722,688,-503,-381,776,756,-205,622,705,705,82,-382,516,767,448,-133,-884,233,283,930,-88,809,-581,-463,406,788,115,-983,142,-349,908,232,312,646,696,904,427,18,-348,862,-368,-462,-347,816,-65,855,-515,763,-536,360,699,-159,-697,-213,-923,322,-378,755,-536,311,897,-314,885,-295,360,668,731,136,811,130,570,410,-444,-797,725,631,275,962,-124,242,-396,401,826,-242,-923,299,-158,233,959,672,740,-15,-559,-461,689,-736,-63,674,-83,966,246,-655,-612,443,523,-126,-843,20,583,812,-429,29,903,-241,901,-362,420,-371,-828,-390,-541,745,843,-188,504,977,111,181,314,704,637,111,878,-465,-561,801,212,-191,339,-921,522,-7,-853,-604,-318,730,-219,538,814,87,935,344,934,170,315,-147,637,-757,313,872,375,226,552,803,-394,874,-285,914,-337,226,-73,-994,-84,191,930,315,839,-291,459,906,412,94,-392,871,297,95,-941,325,810,-5,587,-96,603,792,-11,-975,-224,-93,846,-526,-24,-1000,7,-458,684,568,259,82,-962,341,751,-566,-796,-91,598,967,-40,251,-523,-475,708,-16,785,620,730,514,451,895,427,-133,-562,-331,758,-114,-993,25,426,107,-898,-337,444,830,323,-257,-911,78,-996,48,788,-390,477,524,-454,-721,718,441,538,-319,768,-556,351,842,410,-706,-493,508,-449,36,893,-64,730,-680,327,788,-522,950,-163,267,885,-253,391,641,637,428,37,-998,-53,-142,-977,162,992,118,45,957,-18,291,547,-316,-775,974,211,79,218,707,-673,-167,381,909,-211,-947,240,-467,883,44,604,-193,-774,-24,-993,119,196,325,925,769,352,533,331,-307,-892,872,482,91,598,638,485,484,826,289,499,865,51,-105,939,326,-95,480,872,329,144,-933,855,-115,505,-125,722,-681,-47,941,334,-131,764,632,740,-195,-643,753,-380,537,-102,-980,173,821,-385,422,828,-24,560,679,-221,-700,162,960,227,502,784,364,169,603,-779,-195,946,258,-170,-949,267,-594,608,527,-4,312,-950,369,-476,-799,-519,-37,854,742,136,657,86,-962,-259,238,726,-645,12,866,500,880,4,476,-18,937,-350,202,-806,-556,-429,-65,901,-543,821,178,-81,835,544,-696,-702,147,-380,816,436,-10,959,283,-382,533,-755,163,-761,-628,-395,853,341,206,638,742,-569,-370,734,984,97,151,775,-92,626,-331,756,564,-116,910,398,557,779,288,-573,-285,768,782,291,551,-221,808,546,918,334,-212,9,-1000,-28,-27,843,-537,463,-369,-806,388,555,736,630,-155,-761,551,646,528,377,876,301,361,694,623,442,775,451,564,21,-826,285,-159,-945,-58,751,657,-373,555,744,747,664,-9,205,178,962,305,-950,67,935,296,-193,129,451,-883,-307,940,-148,928,193,319,231,489,841,-422,606,674,-155,956,-249,441,61,-895,931,260,-257,-653,-386,651,111,-951,-287,617,-223,-755,683,-49,-729,-629,-572,526,306,418,855,443,894,70,51,218,-975,-266,356,896,572,-201,-796,942,201,269,-257,-933,250,-246,831,-499,976,195,100,703,481,524,949,291,123,8,-996,-88,-197,726,-659,958,91,274,766,-503,401,399,911,-107,-14,932,363,965,262,16,-759,-252,600,-779,-486,396,794,343,502,-762,-366,534,687,606,401,650,342,679,-254,924,-284,103,409,907,952,-66,297,-548,-387,742,-436,-479,762,372,-278,-886,930,285,232,-529,-328,783,-40,528,-848,184,981,-67,352,922,162,-808,-103,580,233,781,580,-205,-973,108,794,-14,608,-274,852,447,-375,-573,729,813,580,52,889,427,168,20,936,350,722,-299,-624,391,-106,-914,8,-947,320,-415,420,807,-134,947,-293,388,587,710,932,359,48,449,125,-885,298,885,357,171,-744,-646,825,-449,344,-56,-989,-133,523,-40,-851,813,-186,552,985,167,53,-193,-967,166,687,-313,-656,479,-323,-816,827,-282,485,-321,911,258,694,402,597,959,185,-213,582,805,118,-213,791,573,634,618,465,886,-127,446,872,314,375,189,947,261,458,884,89,-433,878,205,189,206,960,646,-317,-694,-106,306,946,-266,948,173,866,-191,461,658,-153,-738,270,483,833,939,98,329,-413,625,-663,991,136,18,-130,539,832,-199,877,437,733,231,640,-434,522,734,890,418,-181,692,266,671,-43,-986,162,-132,806,-577,826,553,-106,901,-19,433,240,-963,121,790,-162,-592,-32,579,-815,-421,78,904,456,-15,-890,-222,935,275,-122,898,-424,181,-983,3,284,96,-954,238,799,553,-566,-525,636,350,930,111,507,-535,-676,779,-208,592,242,593,768,823,352,446,125,493,-861,-122,921,-370,959,271,-78,743,-241,625,213,818,534,495,-417,-762,982,41,187,20,746,666,-450,481,753,-481,-386,787,929,-107,354,-286,608,-740,-74,767,-638,595,-51,-802,839,370,399,-17,-999,-34,-382,828,410,474,177,-863,969,222,-105,701,-66,-710,-108,-937,333,-22,729,684,254,326,911,-704,-338,625,854,114,508,-144,776,614,849,305,431,701,-322,-637,942,-157,295,60,-960,-273,647,368,668,-487,770,412,-100,666,-739,-154,544,-825,24,431,902,294,30,-955,860,510,7,298,-552,-779,-66,-923,378,37,357,-933,-137,896,422,848,158,506,914,-38,403,539,49,-841,334,-174,-926,824,518,228,183,691,-700,507,717,478,-43,550,-834,870,-72,489,316,763,564,208,758,618,795,-484,365,601,795,-83,132,-991,-19,142,868,476,698,-243,-673,-468,873,136,-110,820,-562,63,587,-807,924,133,357,-388,-48,921,776,326,540,-323,674,-665,-547,546,635,322,-9,-947,-30,640,-768,9,-982,188,963,159,-219,-464,12,886,273,822,499,939,-53,339,-485,261,835,355,136,-925,-517,763,388,186,813,-552,852,-361,379,379,835,399,610,525,594,703,178,689,-491,599,633,-308,-923,230,115,786,607,294,-955,-23,-17,-963,269,551,-15,-834,-334,596,-730,989,143,-39,-152,182,972,-60,674,-736,75,733,-676,598,-286,-749,91,973,-212,639,-205,-741,-106,846,523,102,901,421,-695,-58,716,819,-507,268,-393,47,918,138,771,-621,-204,384,901,204,869,452,92,925,-368,245,-218,-945,797,132,590,-155,741,-653,-62,638,768,381,-213,-899,971,123,-204,-534,-20,845,510,856,82,-42,688,724,132,841,-525,938,280,205,-746,-422,515,913,-287,290,443,442,780,785,-555,275,284,337,-898,837,516,180,-286,940,-187,378,900,219,799,-397,452,786,-310,535,-319,936,148,450,871,198,-717,-520,464,257,913,318,153,-979,133,270,0,-963,785,-456,420,-187,512,839,-172,798,-577,811,40,584,-749,-313,584,-207,258,944,-792,-376,482,627,-310,714,123,867,-483,699,702,134,603,788,125,-326,493,-807,467,457,758,-356,911,206,858,447,253,214,975,65,74,-959,272,-233,418,-878,529,496,689,549,811,199,-89,794,601,215,-188,-958,671,463,579,493,-484,-723,-133,476,-869,812,234,535,366,771,522,-294,234,927,523,420,742,838,284,467,792,92,604,978,-26,206,-63,893,-446,693,508,513,-44,607,-794,-165,544,823,840,82,536,189,261,947,-469,167,868,945,207,-253,922,256,290,942,259,212,43,983,-177,-153,858,490,-85,873,480,-88,-995,46,955,155,255,-182,884,-431,823,567,17,443,-480,-757,961,-159,227,-334,650,-683,934,358,0,87,199,-976,-304,513,803,692,629,355,-105,771,-628,334,-417,-846,-790,-272,549,937,310,163,-154,594,790,797,-231,557,305,852,427,-52,967,249,344,-657,-671,-186,710,679,-264,403,-876,199,-980,-26,654,755,43,-52,-998,24,832,59,552,291,-935,205,109,-992,60,-183,122,976,-365,-464,807,-237,785,573,44,-972,-232,-462,881,104,-130,-969,210,676,-193,-711,867,251,430,63,656,752,853,476,213,-188,429,-884,188,-929,319,879,453,-149,141,560,-816,753,-75,-653,2,566,-824,985,-34,169,-348,709,-614,-298,675,674,744,-260,-615,187,974,-129,-77,915,-396,639,392,662,-48,-959,280,-62,735,675,347,489,800,-139,829,542,-41,-958,-282,-134,-919,371,-222,648,729,-2,711,703,341,748,569,205,-718,-665,731,-174,-659,274,402,874,-105,931,-350,-309,933,183,-510,-344,788,57,454,889,428,184,-885,387,-134,-913,976,164,145,-514,-523,680,284,-957,63,250,-252,-935,-170,934,-314,-95,302,-949,-133,598,-790,-734,-444,514,471,874,124,-137,755,-642,939,-95,331,298,803,-517,-173,764,-621,881,292,373,-40,921,388,980,145,134,375,129,-918,614,476,629,-401,913,80,318,902,293,-39,876,-480,74,-950,304,741,667,-80,-82,927,367,-374,908,187,23,-992,126,524,84,-847,-20,968,251,220,675,-704,-91,957,-276,514,-225,-827,836,235,497,650,427,629,142,698,-701,575,290,765,940,126,317,-155,337,-929,-468,-518,716,542,-167,-824,931,361,-46,229,348,-909,-228,944,240,-40,-966,-256,-639,-431,637,193,815,546,44,-989,143,975,172,-143,213,-930,299,-674,-721,160,-145,737,660,435,-247,-866,404,463,789,-64,-994,93,-415,-473,777,855,65,515,848,442,292,0,879,477,662,-212,-719,753,324,573,370,812,452,826,553,113,166,343,925,-579,153,801,-110,866,488,595,-242,-766,699,671,246,69,487,871,666,309,679,660,-315,682,299,591,749,-96,-977,-190,-410,882,-230,-15,-997,-71,-377,926,-10,296,-942,160,857,-389,338,337,682,649,384,792,474,-517,834,-191,-348,874,340,668,257,699,-103,-985,140,-332,530,-780,186,-978,97,-257,637,727,-238,2,971,837,544,56,96,-963,251,222,731,645,-34,664,-747,807,-452,380,298,-229,-927,283,621,731,177,-955,238,866,495,71,439,-346,-829,299,-634,-713,-950,-309,36,443,463,767,878,458,140,-527,122,841,-355,886,-299,-670,-239,703,670,549,499,143,-954,-262,-238,637,-733,-397,-140,907,-340,769,541,-253,615,747,-385,690,613,-2,252,-968,128,919,-373,-641,-545,541,-161,-982,94,-719,-684,123,974,224,40,890,117,440,117,174,-978,-387,426,818,231,930,-287,862,-222,456,17,992,-124,-415,-44,909,956,275,104,881,472,-24,461,-566,-683,890,-391,236,281,-46,-959,911,389,-138,219,-782,-584,773,-188,-606,887,457,73,867,487,-106,291,718,632,644,-360,675,34,-997,73,-198,852,485,16,565,825,-370,5,929,761,186,621,657,-356,-665,969,246,31,964,257,61,-67,476,877,351,173,-920,-348,580,737,253,844,473,-781,-123,612,979,-63,194,-251,506,-825,-99,756,-647,424,899,110,400,-80,-913,846,326,421,955,36,296,-377,774,-509,419,534,734,567,611,553,260,-689,-676,250,862,440,-703,-561,437,898,-56,437,895,388,221,-195,845,-498,67,-998,-4,-208,694,690,645,407,647,-638,-655,404,-85,280,956,-408,782,471,18,713,-701,448,610,654,63,701,-710,-600,640,479,135,591,795,276,-953,125,-638,-361,680,-65,750,-658,474,855,213,-336,484,808,-274,169,947,-508,6,861,494,480,725,-217,889,-403,-701,-225,677,303,911,279,784,368,500,-409,673,616,-230,720,-655,441,728,525,-615,-505,606,-276,690,669,-119,507,854,-109,886,452,198,-168,-966,-597,-60,800,292,-951,104,149,985,-85,977,214,-7,522,-161,-838,822,564,-74,-749,-493,443,542,-455,-706,822,78,565,671,76,738,322,586,744,-306,864,400,223,-970,100,900,395,185,217,411,885,-273,776,-569,-219,403,-889,-490,858,156,217,-941,258,-234,916,-327,-73,593,-802,791,239,563,-154,919,362,505,366,782,946,289,-150,-353,496,793,-191,928,-321,-53,713,699,859,-86,505,806,282,520,639,478,603,731,681,33,-240,525,816,208,964,-166,-278,-954,110,112,309,945,420,-336,-843,433,-282,-856,567,61,-822,-260,760,-596,-369,-537,758,730,684,-14,527,762,377,-503,-173,847,137,712,688,-361,921,144,520,516,680,-245,911,331,927,-156,342,-463,-545,699,846,521,-112,-330,936,-122,-730,-498,467,-284,916,-283,241,469,849,-141,294,-945,135,-948,-287,-761,-286,582,249,-731,-635,634,186,751,208,276,939,7,-998,68,276,755,-595,312,935,171,-520,204,829,-23,-989,-143,96,919,383,-9,436,900,-3,922,-386,561,748,354,666,-178,-725,604,665,439,531,540,652,97,-995,-10,402,631,664,887,-183,423,185,-784,-593,730,-279,-624,718,673,177,79,640,-765,537,-247,-807,-212,526,-824,65,898,435,759,-462,459,261,-32,-965,16,612,791,-248,476,844,-215,496,-841,-319,686,654,825,326,461,890,139,433,973,-60,222,-187,-927,325,772,-120,624,-151,710,-688,232,-670,-705,-86,616,-783,-760,-467,453,57,259,-964,256,-142,-956,141,150,-979,758,-179,-627,257,-946,198,894,-36,448,530,793,301,347,-92,-933,371,828,420,-415,804,426,-231,52,972,-160,654,739,-132,521,-843,246,678,693,293,-75,-953,993,115,-14,-96,526,845,275,314,909,-444,767,463,-35,298,-954,912,406,-57,117,-964,-239,478,-202,-855,805,-67,589,16,701,713,891,365,-271,148,677,721,30,591,-806,-30,592,805,969,190,-158,324,-946,14,-106,604,-790,-405,640,653,948,312,68,301,-945,128,653,730,202,-398,911,-105,672,429,604,237,755,612,104,-980,169,581,-462,-670,-137,-948,288,179,362,915,161,897,-412,259,-659,-706,776,-85,-625,921,369,128,638,-212,741,481,748,458,554,383,739,972,196,-133,-232,-936,264,452,-49,-890,192,958,-211,364,37,-930,326,885,-331,54,-998,-35,901,330,282,812,322,487,-401,2,916,-61,926,373,478,875,78,-231,-946,228,329,120,-937,180,970,-166,-120,604,788,-369,838,-403,444,-557,-702,-553,-420,720,816,197,544,9,-925,380,174,894,414,188,900,392,194,592,-782,-62,-989,134,591,-123,-797,-586,-340,736,-749,-456,481,-147,475,867,-98,683,-724,-377,609,698,-299,675,-675,961,170,216,-312,788,531,-360,438,823,399,877,269,-783,-409,468,394,37,-918,345,863,370,-860,-104,499,958,213,189,-353,780,517,-418,891,176,-349,464,814,356,-557,-751,806,-94,-584,-832,-137,537,-34,731,-681,-371,751,545,-422,607,-674,771,-393,502,-771,-234,592,-155,-969,-191,-116,281,-953,968,238,75,592,-307,-745,-413,872,263,-316,803,-506,603,88,-793,-341,575,-744,528,772,354,145,464,-874,-399,-369,840,991,121,-61,905,358,-231,826,529,195,853,-408,325,-925,-168,342,840,524,-141,-238,823,515,-87,-953,291,559,600,572,846,528,71,168,749,-641,897,431,-101,278,800,-531,-210,12,978,974,155,168,-77,719,691,-765,-510,392,904,-120,409,252,-164,-954,270,891,365,393,527,753,30,954,-299,-727,-345,593,-749,-660,57,267,571,776,855,404,325,-197,784,588,829,364,424,-155,-980,121,606,-317,-730,-563,552,615,-551,-520,653,-112,332,-937,-758,-100,644,825,-310,472,617,573,539,961,-42,275,-213,926,-311,956,-82,281,-659,-294,692,881,-60,470,187,676,712,-64,658,750,-27,985,172,-243,810,534,160,-986,48,-610,-354,709,-70,620,782,311,-398,-863,-60,314,-947,596,54,-801,303,-177,-936,404,909,102,-779,-190,597,816,412,406,-612,-548,571,796,-364,483,-5,-990,138,428,-59,-902,-376,803,462,-54,-998,-42,914,368,-173,-396,-558,729,22,817,577,155,529,834,664,-330,-671,195,484,853,117,631,767,-455,-466,759,798,63,599,-256,773,580,127,852,507,400,-199,-895,373,-193,-907,-173,451,876,943,311,-118,-578,-248,777,755,-408,514,216,972,-92,773,12,634,961,249,-116,354,925,138,-190,806,-560,54,429,902,464,832,305,965,198,171,274,-643,-715,-503,-95,859,929,49,367,429,-463,-775,-374,389,842,528,573,627,772,-270,576,613,-380,-693,-386,863,-325,-300,809,506,128,-990,-59,616,505,604,731,679,-62,49,699,713,698,715,43,-473,791,389,-224,549,-806,-220,226,949,-443,-21,896,642,703,307,503,14,-864,850,-464,250,-590,-359,723,-272,709,-651,946,278,166,557,406,724,-370,737,-565,-95,-995,-17,-426,454,782,714,159,681,237,-971,21,-301,394,868,-374,786,492,810,586,1,-191,676,712,-283,629,724,48,724,688,-157,914,-375,-62,420,906,428,-90,-899,-408,911,-60,837,-486,251,662,611,434,-768,-48,639,168,794,-584,-680,-609,408,-350,622,-701,94,541,836,84,987,-135,-785,-618,39,233,-922,310,-492,-475,730,-403,-415,816,-855,336,-394,327,-649,-687,580,-294,-760,-260,-963,67,771,465,435,320,-946,44,69,630,773,-5,940,342,-70,950,305,-319,868,381,183,852,491,-450,-532,717,-687,-480,546,921,13,390,205,851,483,-457,-374,807,-250,657,-711,261,-933,247,857,364,366,234,-32,-972,-420,-371,828,796,603,-48,315,917,-246,-398,563,724,112,910,399,208,-41,-977,-65,804,-590,533,-505,-679,179,-40,-983,-6,810,586,92,605,-791,-487,282,826,409,-593,-694,789,440,429,387,653,651,19,411,911,-113,946,305,588,779,216,101,384,-918,-7,755,655,-521,-286,804,517,-402,-756,889,-377,260,52,672,739,163,862,-481,230,-970,-73,-327,852,409,203,392,897,124,678,-725,345,-493,-799,845,472,251,-74,703,707,-5,545,838,-298,727,-619,-253,415,874,-62,867,494,972,38,230,-166,466,-869,-769,-425,477,631,697,340,276,-567,-776,451,170,-876,294,534,793,637,446,629,719,-61,-692,-375,721,583,-501,-402,766,62,538,841,25,775,-631,913,363,187,239,247,939,-478,-147,866,261,617,742,921,303,-246,-115,535,-837,844,384,373,509,-250,-824,298,775,557,253,-966,-56,403,109,-909,310,941,134,881,474,-2,793,482,374,432,688,583,-397,-394,829,294,913,-283,-287,890,-354,-342,399,851,-475,695,540,907,213,364,121,697,-707,334,-630,-701,-323,828,459,574,813,95,-157,-959,237,-451,636,626,352,-54,-934,-162,695,701,-402,759,512,968,13,251,302,4,-953,224,513,828,297,820,-489,707,515,485,875,147,461,-138,636,759,668,-302,-680,638,-404,-655,227,-900,-372,48,959,-279,-375,771,514,333,-385,-861,950,233,-210,195,660,726,189,541,819,-514,843,161,-274,516,-812,619,613,491,387,-462,-798,-81,686,723,-210,817,-537,-18,812,-583,-442,-421,792,-103,-989,-103,327,512,794,897,-242,370,580,793,188,-584,599,547,311,819,482,117,691,713,586,610,534,914,353,-199,37,631,-775,751,-485,448,331,85,-940,286,-664,-691,327,186,-927,-276,826,-492,-701,-442,560,967,148,207,420,-264,-868,121,515,849,954,237,-186,812,485,325,0,896,445,424,-513,-747,305,693,-653,-365,916,168,-623,-596,507,21,791,-611,827,-331,454,374,-163,-913,-193,-974,-122,-407,818,406,16,-986,167,911,169,377,-300,613,731,143,422,895,757,121,642,638,545,545,-89,699,-710,-283,-956,73,884,462,-72,933,-184,308,775,623,-103,869,495,-13,679,650,342,531,312,788,-401,591,-700,109,494,863,-19,-998,57,859,198,471,491,759,427,-266,586,-765,538,367,759,44,-982,184,346,429,835,-203,70,977,944,329,-27,-59,642,-765,-315,878,359,-266,-920,288,-363,930,54,652,737,181,786,-478,392,-234,762,-604,215,815,-539,-87,458,885,182,635,-751,952,230,204,925,354,-136,322,924,204,113,761,638,190,795,-576,770,153,620,705,365,608,-271,-946,178,424,-183,-887,959,280,33,445,549,708,778,422,465,213,-976,52,-900,-103,424,296,938,-182,93,993,-65,-565,183,805,-170,526,-834,219,-696,-684,-147,316,-938,852,390,349,0,-1000,-5,834,547,77,-133,-989,60,991,114,71,962,187,201,506,655,561,677,-359,-643,119,459,880,61,876,478,292,457,840,-346,829,440,-199,658,-727,901,402,-163,-683,-287,672,-226,778,-586,-286,631,-721,51,583,811,616,-100,-782,565,-449,-692,143,981,-135,956,251,150,92,325,941,817,576,-26,351,-152,-924,783,-509,359,440,646,624,309,-683,-662,246,965,-91,715,-174,-677,874,-215,435,-66,-932,357,-284,932,224,-678,-723,130,-442,-496,748,350,730,587,401,-325,-857,924,-249,290,501,768,400,792,-326,516,604,-73,-794,266,907,-328,-327,923,204,896,355,266,-100,-920,379,-25,788,-615,573,749,333,320,-464,-826,790,388,474,-83,-988,128,459,18,-888,913,-233,334,-295,847,-443,206,959,-194,532,-93,-842,-4,834,-551,-291,548,784,690,244,682,-17,529,-848,488,96,-868,-685,-374,625,141,635,-760,511,-288,-810,928,-129,350,-778,-369,509,-286,719,633,-160,52,986,-496,-326,805,605,-159,-780,951,251,181,812,-491,317,160,986,-55,443,835,326,-510,298,807,-476,801,363,-251,336,908,74,507,-859,948,89,306,18,972,-233,-634,-54,771,823,544,166,193,759,-622,875,-170,454,-723,-386,573,136,380,-915,683,573,452,485,-3,-874,29,-999,19,-613,35,789,963,269,-11,-363,922,-135,904,-248,348,911,-8,412,-190,312,-931,-105,-992,68,557,736,384,375,-335,-864,423,-13,-906,-320,930,-183,627,-247,-739,448,483,752,552,311,774,-85,520,-850,951,-124,282,862,480,161,385,903,189,102,888,449,599,797,81,239,698,-675,392,-566,-725,464,741,486,-845,-177,504,-323,863,-389,-292,713,-637,-163,432,-887,365,713,599,973,104,205,869,475,-142,-602,619,505,-178,778,-603,16,606,-795,61,809,584,761,340,553,590,375,715,973,1,229,269,509,818,187,-982,32,-28,563,826,335,875,-350,577,-44,-816,983,16,181,48,-977,208,565,528,634,-79,-994,75,94,389,916,940,314,134,922,332,201,-67,961,268,-407,665,-627,113,569,814,-373,-405,835,-180,-966,-185,283,-958,39,115,735,-668,-160,723,672,586,-144,-798,59,770,635,-4,-995,104,789,608,-94,-147,447,883,504,-141,-852,-172,392,-904,-310,773,553,650,287,703,279,877,391,782,502,369,488,-463,-740,763,-486,427,110,636,-764,894,301,331,322,-495,-807,803,-297,517,-680,-592,433,732,191,654,975,61,212,-314,402,-860,825,138,549,-167,902,-397,-346,797,495,743,578,339,469,-72,-880,231,967,-109,677,702,220,457,731,507,203,-971,127,63,850,523,337,458,822,-41,-997,-68,622,-284,729,378,173,-909,-340,898,279,199,-768,-608,54,739,672,671,152,726,184,-980,-78,824,-105,557,130,-989,68,18,966,-258,365,-606,-707,437,809,394,-296,871,-392,-373,35,927,-142,-982,-126,-182,773,608,-306,466,-830,117,765,-633,-179,885,429,854,486,184,701,651,291,-78,830,-553,991,135,-5,-108,823,557,953,14,303,428,-597,-679,8,910,415,-270,844,-464,-402,915,-21,282,832,478,476,839,262,166,137,977,-225,828,-513,-183,927,327,-199,286,937,-197,969,149,-408,913,6,206,28,-978,535,740,406,542,771,335,87,802,591,331,709,623,374,-396,-838,34,849,527,-167,415,894,232,856,463,582,89,-809,-737,-395,548,180,705,686,-150,355,923,120,-993,16,688,139,712,360,787,501,552,548,628,-219,744,-631,838,538,-94,-339,931,135,717,480,506,305,190,-933,-629,-313,712,281,177,-943,-137,934,-330,387,910,-150,222,916,333,399,-350,-848,-26,885,-464,-602,-279,748,627,165,761,-147,618,772,157,445,882,-48,969,-243,553,-412,-724,-159,409,-899,-44,478,877,-124,954,274,-124,796,593,-482,872,87,648,322,690,527,700,481,937,231,-261,295,635,714,492,-345,-800,-154,-922,356,88,-991,106,-352,533,770,358,567,742,-79,935,346,224,-149,-963,-95,970,-222,924,273,267,173,926,337,220,880,420,189,-936,297,-177,-982,-61,918,395,-15,758,-254,600,550,483,682,-28,672,740,240,767,-595,-273,758,592,-460,868,-187,963,204,-178,759,-446,475,-210,747,631,482,402,779,-787,-327,524,385,-587,-712,806,460,371,900,238,365,862,501,-71,-42,509,-860,779,223,586,-392,907,152,326,-516,-792,431,38,-902,-503,-511,697,-183,656,732,-264,467,-844,-443,864,-239,-373,842,390,25,780,626,-498,-70,864,-298,875,381,-99,-967,236,102,953,286,-236,-969,71,277,951,-140,-21,882,471,56,889,-455,769,-117,-628,186,753,632,585,795,160,-362,795,-487,452,792,410,709,705,-14,661,-397,637,739,-108,-665,401,-162,-902,500,549,670,-247,-25,969,595,765,247,306,155,-939,112,986,121,-329,917,-223,964,107,242,-524,243,816,994,103,-41,787,41,616,-83,500,-862,-180,833,-523,-12,-944,329,571,782,251,-162,901,402,-223,-62,973,-40,849,526,-136,350,-927,-188,-951,244,-139,619,-773,-367,458,-809,-244,-85,966,-79,757,649,-560,-492,667,337,-214,-917,-313,927,-205,-168,9,986,62,918,391,197,-969,151,-427,477,768,764,492,417,25,-941,337,902,-321,290,156,769,620,79,614,785,937,260,233,-252,659,708,479,378,793,649,-250,718,-249,933,-260,-361,926,114,891,259,373,800,587,125,-253,736,628,829,479,289,-84,942,-326,-303,930,209,-692,-425,583,130,-991,39,627,660,413,898,-94,429,222,151,963,891,-323,320,815,-41,579,225,-974,-8,16,-959,-284,63,-991,-117,-138,333,933,275,314,-909,-153,570,-807,866,-150,477,863,-365,350,138,-944,301,933,345,98,-367,649,666,201,-973,-111,307,571,761,326,627,708,459,647,609,-183,921,-345,683,711,169,908,401,118,317,-787,-529,929,361,82,176,-983,-41,985,107,-138,149,907,394,348,18,-937,734,653,185,691,-124,-712,247,-50,-968,-70,-944,324,-877,-90,472,305,-951,-57,-56,502,863,207,343,-916,-179,582,-793,981,165,101,410,139,-901,-393,919,43,-344,731,589,-298,-947,122,37,802,-596,726,655,211,558,345,755,-509,579,637,-66,698,-713,269,689,673,-480,848,-224,372,921,113,99,777,-622,618,324,716,-224,713,665,921,381,-77,-346,933,-101,-553,12,833,221,372,902,593,-440,-674,856,507,-95,514,111,-851,301,398,867,-672,-470,573,162,507,847,-187,585,789,223,61,-973,186,509,841,95,978,-186,555,815,168,977,113,-179,-98,-929,358,953,288,-93,288,-691,-663,-281,749,-600,211,850,-483,322,368,872,-446,750,489,664,694,278,264,744,613,897,-168,410,561,-143,-815,580,419,699,167,151,-974,388,-429,-816,605,382,698,-777,-280,564,-295,-123,947,197,346,917,-114,625,-773,-38,796,604,-132,810,571,-331,744,-581,200,-81,-976,-255,618,-744,-96,873,-479,374,311,-874,-389,882,266,233,14,-972,-56,925,-375,311,-443,-840,-111,550,828,-368,858,360,906,349,239,653,-54,-755,-119,-981,-153,499,735,460,447,887,117,-506,-447,738,-20,820,572\";\n                      const arr = POINTS_RAW.split(\",\");\n                      const N = arr.length / 3;\n                      const POINTS = new Float32Array(arr.length);\n                      for (let i = 0; i < arr.length; i++) POINTS[i] = +arr[i] / 1000;\n\n                      const canvas = document.getElementById(\"dot-globe\");\n                      const wrap = canvas.parentElement;\n                      const ctx = canvas.getContext(\"2d\");\n\n                      let size = 470;\n                      function resize() {\n                        size = Math.max(1, wrap.clientWidth);\n                        const dpr = Math.min(window.devicePixelRatio || 1, 2);\n                        canvas.width = size * dpr;\n                        canvas.height = size * dpr;\n                        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\n                      }\n                      new ResizeObserver(resize).observe(wrap);\n                      resize();\n\n                      const ROTATION_SECONDS = 24;\n                      const DRAG_SPEED = 0.008;\n                      const MAX_VEL = 8;\n                      const autoSpeed = (Math.PI * 2) / ROTATION_SECONDS;\n\n                      let yaw = 0,\n                        yawVel = 0,\n                        tilt = 0,\n                        dragVel = 0,\n                        dragging = false;\n                      let lastX = 0,\n                        lastY = 0,\n                        lastT = 0;\n\n                      let visible = true;\n                      new IntersectionObserver(\n                        (es) => {\n                          visible = es[0].isIntersecting;\n                        },\n                        { threshold: 0.01 },\n                      ).observe(wrap);\n\n                      let last = performance.now();\n                      function render(now) {\n                        const dt = (now - last) / 1000;\n                        last = now;\n                        if (!dragging) {\n                          yawVel += (autoSpeed - yawVel) * Math.min(1, dt * 1.2);\n                          yaw += yawVel * dt;\n                          tilt += (0 - tilt) * Math.min(1, dt * 4);\n                        }\n                        if (visible) {\n                          const cosA = Math.cos(yaw),\n                            sinA = Math.sin(yaw);\n                          const cosT = Math.cos(tilt),\n                            sinT = Math.sin(tilt);\n                          const cx = size / 2,\n                            cy = size / 2,\n                            r = size / 2 - Math.max(3, size * 0.013);\n                          const dr = Math.max(1, size * 0.0038);\n                          ctx.clearRect(0, 0, size, size);\n                          ctx.fillStyle = \"rgba(127,200,255,0.95)\";\n                          for (let i = 0; i < N; i++) {\n                            const px3 = POINTS[i * 3],\n                              py3 = POINTS[i * 3 + 1],\n                              pz3 = POINTS[i * 3 + 2];\n                            const x = px3 * cosA - pz3 * sinA;\n                            const zy = px3 * sinA + pz3 * cosA;\n                            const y = py3 * cosT - zy * sinT;\n                            const z = py3 * sinT + zy * cosT;\n                            if (z < 0) continue;\n                            ctx.beginPath();\n                            ctx.arc(cx - x * r, cy - y * r, dr, 0, Math.PI * 2);\n                            ctx.fill();\n                          }\n                        }\n                        requestAnimationFrame(render);\n                      }\n\n                      canvas.addEventListener(\"pointerdown\", (e) => {\n                        dragging = true;\n                        lastX = e.clientX;\n                        lastY = e.clientY;\n                        lastT = performance.now();\n                        dragVel = 0;\n                        canvas.style.cursor = \"grabbing\";\n                      });\n                      canvas.addEventListener(\"pointermove\", (e) => {\n                        if (!dragging) return;\n                        const now = performance.now();\n                        const dt = Math.max((now - lastT) / 1000, 1 / 240);\n                        const dx = e.clientX - lastX,\n                          dy = e.clientY - lastY;\n                        lastX = e.clientX;\n                        lastY = e.clientY;\n                        lastT = now;\n                        const dYaw = dx * DRAG_SPEED;\n                        yaw += dYaw;\n                        dragVel = dYaw / dt;\n                        tilt = Math.max(-1.2, Math.min(1.2, tilt + dy * DRAG_SPEED));\n                      });\n                      const release = () => {\n                        if (!dragging) return;\n                        dragging = false;\n                        yawVel = Math.max(-MAX_VEL, Math.min(MAX_VEL, dragVel));\n                        canvas.style.cursor = \"grab\";\n                      };\n                      canvas.addEventListener(\"pointerup\", release);\n                      canvas.addEventListener(\"pointercancel\", release);\n                      canvas.addEventListener(\"pointerleave\", release);\n\n                      requestAnimationFrame(render);\n                    })();" }} />
                  </div>
                  <div className="careers_about-hiring-right-col">
                    <div className="t-label-1-rg blue-light-900">
                      {"Engineering culture"}
                    </div>
                    <div className="spacer-8" />
                    <h2 className="t-heading-3-rg text-c-blue-light-900">
                      {"Small senior pods that own the whole system"}
                    </h2>
                    <div className="spacer-40 _24-landscape" />
                    <p className="t-paragraph-2-rg">
                      {"\n                    We build around small, senior, cross-functional pods that own a product end to end \u2014\n                    architecture, delivery, and the on-call rotation that keeps it running. Automated testing,\n                    infrastructure-as-code, and continuous delivery are defaults, and every incident becomes a\n                    blameless retrospective that feeds back into tooling and standards.\n                  "}
                    </p>
                    <div className="spacer-32" />
                    <div className="button-group">
                      <a className="button-v2-full-width w-variant-90b6dd41-09af-80c6-647c-dd9797e6ff46 w-inline-block" data-wf--button--variant="primary---big" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%229be1f9e2-08b9-8077-aba2-92459923f6a8%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="9be1f9e2-08b9-8077-aba2-92459923f6a8:cc338c70-b506-f985-732b-95e9d08eb22b" href="/careers">
                        <div className="no-wrap-arrow">
                          {"Join the team"}
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
          </section>
          <div className="v2-navbar-divider" />
          <section className="cta_parrot-section" dark-bg="">
            <div className="v2-padding-global">
              <div className="w-layout-blockcontainer v2-container w-container">
                <div className="parrot_cta-wrapper">
                  <div className="parrot_cta-left-content">
                    <h3 className="t-heading-3-rg text-c-blue-light-900" text-letters-animation="">
                      {"\n                    Ready to build your next product with confidence?\n                  "}
                    </h3>
                    <div className="spacer-40" />
                    <div className="max-width-80">
                      <p className="t-paragraph-1-rg-twk text-c-blue-light-500">
                        {"\n                      Tell us what you're building and we'll map the fastest reliable path to production.\n                    "}
                      </p>
                    </div>
                    <div className="spacer-32" />
                    <div className="button-group v2">
                      <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%229be1f9e2-08b9-8077-aba2-92459923f6e3%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="9be1f9e2-08b9-8077-aba2-92459923f6e3:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                        <div className="no-wrap-arrow">
                          {"Start a project"}
                        </div>
                        <div className="embed-icon is-btn-arrow w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                          </svg>
                        </div>
                      </a>
                      <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%229be1f9e2-08b9-8077-aba2-92459923f6e5%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="9be1f9e2-08b9-8077-aba2-92459923f6e5:cc338c70-b506-f985-732b-95e9d08eb22b" href="/pricing">
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
                  <div className="parrot_wrapper">
                    <div className="w-embed w-script">
                      <div className="parrot-wings" data-flap="" />
                      <style dangerouslySetInnerHTML={{ __html: "\n                      .parrot-wings {\n                        position: relative;\n                        width: 100%;\n                        max-height: 600px;\n                        margin: 0 auto;\n                        aspect-ratio: 1072/960;\n                        overflow: hidden;\n                      }\n                      .parrot-wings canvas {\n                        position: absolute;\n                        inset: 0;\n                        width: 100%;\n                        height: 100%;\n                        display: block;\n                      }\n                    " }} />
                      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const DOTS = [\n                        1189.8, 102.2, 181.2, 106.6, 189.0, 110.7, 211.5, 116.0, 1177.9, 116.3, 190.4, 120.5, 194.8,\n                        119.8, 172.6, 124.1, 194.7, 124.4, 1194.2, 128.3, 1208.0, 132.9, 163.8, 142.8, 216.4, 142.7,\n                        1159.8, 142.4, 1164.8, 141.5, 1185.8, 142.9, 246.5, 146.6, 1181.2, 146.1, 1194.4, 146.0, 1199.0,\n                        145.8, 185.5, 150.9, 1169.0, 150.7, 1194.0, 150.4, 1203.2, 151.1, 219.8, 156.1, 255.1, 154.7,\n                        1204.1, 155.4, 1208.9, 154.4, 243.0, 159.2, 1155.6, 160.1, 1190.7, 160.4, 1199.5, 160.1, 282.4,\n                        164.6, 1159.5, 164.2, 1177.4, 163.3, 1181.9, 164.2, 1198.8, 164.8, 212.6, 167.9, 269.6, 168.5,\n                        1177.6, 169.2, 1195.3, 169.2, 1207.2, 168.2, 1185.9, 172.5, 230.1, 177.6, 277.4, 177.5, 303.7,\n                        177.3, 1186.3, 177.8, 1199.6, 176.9, 180.6, 181.1, 185.0, 182.0, 1181.5, 181.4, 1189.7, 181.5,\n                        260.0, 186.3, 304.4, 186.5, 339.6, 185.6, 1164.7, 185.4, 1190.7, 186.8, 180.8, 191.0, 276.9,\n                        190.3, 304.1, 190.8, 309.0, 190.2, 1191.2, 190.4, 1195.3, 190.8, 1203.7, 189.8, 211.6, 194.2,\n                        264.6, 195.0, 307.6, 195.0, 312.5, 194.5, 321.6, 195.0, 339.4, 194.1, 1158.9, 194.2, 1172.8,\n                        194.4, 1195.2, 194.8, 1204.0, 194.5, 1208.5, 194.0, 195.0, 199.6, 274.0, 198.6, 290.4, 198.9,\n                        339.4, 199.6, 356.7, 198.7, 1137.2, 200.1, 1164.6, 199.3, 1178.0, 198.8, 1182.3, 199.2, 1185.9,\n                        199.3, 1203.6, 200.1, 1207.8, 199.7, 198.5, 203.0, 215.9, 203.8, 348.4, 203.0, 361.7, 204.4,\n                        1177.4, 203.7, 1198.4, 203.7, 1208.4, 204.2, 225.7, 207.6, 233.4, 207.4, 295.1, 207.2, 333.9,\n                        207.2, 344.0, 207.4, 347.8, 208.6, 1120.5, 208.4, 1142.5, 207.6, 1151.7, 208.0, 1173.2, 208.3,\n                        1186.1, 207.5, 180.6, 213.2, 221.1, 211.6, 238.8, 212.2, 365.1, 212.3, 1150.9, 213.2, 1164.5,\n                        212.0, 1208.4, 211.9, 251.8, 216.1, 361.1, 216.3, 1132.6, 216.8, 1141.8, 217.0, 1164.1, 217.4,\n                        1168.1, 217.5, 1190.0, 216.9, 1194.8, 217.4, 190.3, 220.5, 278.0, 222.0, 1137.4, 221.9, 1150.4,\n                        221.1, 1163.7, 222.0, 1185.9, 220.8, 413.9, 225.1, 1128.8, 224.9, 1155.2, 225.0, 1164.5, 225.3,\n                        1173.7, 226.3, 1190.5, 225.7, 1194.9, 226.0, 163.0, 230.7, 168.0, 230.8, 207.0, 229.4, 260.8,\n                        230.3, 291.3, 230.1, 387.4, 230.3, 434.9, 229.2, 1133.7, 229.3, 1151.2, 230.5, 1155.7, 230.3,\n                        1160.2, 230.3, 1177.0, 230.0, 1181.2, 229.5, 1185.5, 229.3, 1190.8, 230.8, 1195.6, 229.7, 260.9,\n                        235.2, 295.5, 235.0, 299.5, 234.4, 303.9, 234.8, 344.2, 234.6, 349.0, 233.8, 356.7, 234.1,\n                        401.1, 234.2, 427.6, 234.5, 444.8, 234.7, 1129.3, 235.1, 1141.8, 234.7, 1146.3, 233.7, 1158.8,\n                        235.1, 1168.2, 234.6, 1115.6, 239.0, 1133.1, 238.5, 1138.1, 239.1, 1142.2, 239.4, 1146.6, 238.9,\n                        1185.6, 238.9, 1195.4, 239.3, 212.4, 243.9, 331.0, 242.5, 335.0, 243.6, 390.9, 242.4, 417.5,\n                        243.5, 421.8, 243.7, 448.3, 243.6, 1121.0, 243.7, 1125.3, 243.5, 1141.9, 243.9, 1150.3, 242.8,\n                        1182.1, 243.3, 1186.0, 243.5, 330.0, 247.3, 444.4, 247.0, 452.9, 248.0, 1093.4, 247.4, 1137.1,\n                        247.9, 1186.0, 247.6, 1203.7, 247.3, 221.0, 251.6, 343.3, 252.0, 347.9, 251.0, 483.0, 251.9,\n                        487.6, 252.1, 1111.0, 252.3, 1116.5, 252.3, 1159.5, 251.4, 1168.0, 252.7, 1177.5, 252.5, 1199.5,\n                        251.4, 164.2, 256.2, 198.0, 256.5, 373.8, 257.0, 417.7, 257.1, 475.2, 256.6, 1124.2, 255.9,\n                        1129.1, 255.7, 1142.4, 256.1, 177.0, 260.9, 181.4, 261.4, 198.6, 260.5, 220.5, 260.4, 225.5,\n                        260.2, 392.2, 261.0, 426.4, 260.6, 457.5, 261.1, 487.7, 260.6, 1110.7, 260.9, 1115.2, 261.1,\n                        1128.4, 260.0, 1137.2, 260.9, 1141.8, 260.7, 1163.8, 261.0, 176.7, 265.5, 225.1, 265.4, 246.4,\n                        265.8, 401.3, 265.7, 518.6, 265.3, 1085.5, 265.6, 1107.8, 265.2, 1120.4, 264.7, 1133.8, 264.6,\n                        1137.3, 264.9, 1151.5, 265.5, 1168.3, 264.4, 1177.3, 264.3, 246.4, 269.0, 291.2, 269.3, 422.2,\n                        270.2, 466.3, 270.1, 488.1, 269.4, 1085.1, 269.8, 1097.6, 270.1, 1115.5, 270.1, 1128.5, 269.7,\n                        1138.0, 268.8, 1142.1, 269.8, 1147.0, 269.6, 1159.0, 269.5, 1173.4, 270.1, 193.4, 273.4, 216.5,\n                        274.1, 238.7, 273.8, 251.5, 273.4, 264.5, 273.4, 269.2, 274.2, 273.9, 274.7, 452.6, 274.6,\n                        545.1, 274.4, 1084.8, 274.2, 1102.3, 273.5, 1111.0, 274.2, 1119.6, 273.2, 1124.5, 273.4, 1138.0,\n                        274.0, 1145.9, 274.5, 1159.7, 274.1, 1177.3, 273.6, 1185.8, 274.3, 1189.9, 274.1, 202.5, 279.0,\n                        220.5, 277.8, 233.8, 278.4, 465.7, 278.7, 1120.3, 278.1, 1125.3, 278.1, 1136.8, 278.3, 1150.6,\n                        278.9, 1163.9, 277.9, 228.9, 282.7, 234.1, 283.4, 281.2, 282.7, 320.6, 283.1, 360.3, 282.8,\n                        409.7, 282.7, 471.0, 282.9, 487.6, 282.0, 1097.8, 282.5, 1107.1, 283.2, 1124.9, 282.6, 1128.7,\n                        282.5, 1168.3, 283.2, 1172.5, 282.1, 298.9, 287.8, 330.1, 287.6, 479.7, 287.4, 519.3, 287.7,\n                        576.0, 286.8, 1067.2, 287.6, 1088.8, 286.9, 1110.8, 286.5, 1125.4, 287.0, 1129.0, 286.6, 1132.6,\n                        287.1, 1137.3, 287.7, 1155.3, 286.4, 1195.2, 287.4, 255.5, 291.0, 334.3, 290.7, 351.9, 290.6,\n                        356.7, 291.3, 387.3, 291.9, 483.7, 292.3, 549.5, 290.9, 580.2, 292.0, 1076.1, 291.2, 1081.0,\n                        290.9, 1085.3, 290.5, 1089.6, 291.9, 1119.5, 291.6, 1125.2, 290.8, 250.8, 295.8, 281.4, 295.1,\n                        286.4, 295.6, 291.3, 296.3, 334.4, 296.4, 347.9, 296.6, 378.4, 296.3, 401.1, 296.5, 514.6,\n                        296.2, 576.1, 295.8, 597.6, 296.3, 1071.3, 295.9, 1099.0, 295.9, 1133.9, 295.9, 1138.5, 296.3,\n                        1159.3, 296.4, 1177.6, 296.3, 304.6, 301.0, 364.7, 299.6, 382.3, 300.4, 391.1, 299.9, 584.3,\n                        300.7, 590.0, 300.8, 616.0, 300.5, 1054.6, 300.4, 1059.0, 299.6, 1063.4, 299.6, 1067.8, 300.4,\n                        1075.9, 300.6, 1115.4, 300.4, 1146.6, 299.6, 1185.7, 300.5, 320.8, 305.0, 369.5, 303.9, 386.6,\n                        304.5, 444.3, 304.5, 544.7, 304.2, 571.2, 305.4, 624.7, 304.0, 1059.1, 304.5, 1063.2, 304.5,\n                        1068.3, 305.2, 1080.1, 304.3, 1085.7, 304.1, 1097.7, 304.2, 1107.0, 305.0, 1120.3, 303.9,\n                        1125.3, 304.8, 1145.8, 304.3, 1177.4, 305.3, 405.2, 309.2, 409.9, 308.6, 417.6, 308.3, 435.7,\n                        309.2, 461.1, 308.9, 466.5, 309.8, 532.3, 309.3, 567.7, 309.0, 585.1, 309.4, 592.8, 308.7,\n                        601.8, 308.5, 620.5, 309.5, 624.7, 309.5, 1050.1, 308.5, 1055.0, 309.2, 1066.8, 309.7, 1075.5,\n                        309.6, 1089.4, 309.1, 1093.8, 309.7, 1106.6, 309.9, 1111.8, 309.0, 1124.3, 309.8, 300.1, 313.1,\n                        352.8, 313.6, 453.8, 314.0, 483.3, 313.4, 496.3, 313.6, 500.7, 313.7, 579.8, 312.7, 589.7,\n                        314.0, 611.0, 313.5, 619.4, 313.7, 628.5, 312.7, 633.6, 313.9, 638.0, 314.0, 663.2, 314.3,\n                        1041.0, 314.2, 1045.2, 313.5, 1067.4, 314.1, 1111.2, 313.5, 1116.2, 314.3, 1129.5, 313.0,\n                        1155.6, 314.3, 1173.5, 313.9, 193.7, 317.2, 202.2, 318.6, 357.2, 317.9, 374.0, 316.6, 405.3,\n                        318.6, 474.7, 317.5, 501.2, 318.2, 506.3, 318.2, 519.6, 318.0, 558.7, 317.8, 649.9, 318.2,\n                        667.8, 318.6, 681.7, 317.2, 1032.7, 317.3, 1037.3, 318.1, 1049.3, 317.8, 1055.2, 317.2, 1059.2,\n                        318.0, 1076.5, 317.2, 1084.0, 317.2, 1089.0, 318.0, 1098.5, 318.3, 1102.5, 317.6, 1112.2, 317.5,\n                        1138.2, 317.9, 1142.5, 317.4, 1167.9, 317.2, 1181.4, 317.3, 172.2, 322.8, 219.9, 322.3, 373.4,\n                        321.6, 493.5, 322.4, 540.4, 322.4, 620.6, 321.5, 628.7, 322.8, 655.8, 323.1, 663.9, 321.8,\n                        1019.2, 322.2, 1023.4, 322.3, 1027.6, 321.7, 1036.2, 322.3, 1040.6, 322.1, 1050.0, 321.9,\n                        1059.5, 322.1, 1072.2, 322.6, 1081.3, 322.9, 1089.0, 322.2, 1093.7, 321.5, 1111.0, 321.8,\n                        1133.3, 322.7, 1168.0, 322.5, 391.3, 327.1, 404.8, 327.4, 465.9, 326.7, 528.2, 326.1, 532.8,\n                        327.3, 580.8, 326.0, 593.0, 326.4, 606.2, 326.6, 654.5, 327.2, 672.6, 327.0, 690.2, 326.3,\n                        694.7, 327.1, 699.7, 326.4, 1010.5, 326.8, 1023.9, 327.4, 1028.2, 326.6, 1032.2, 327.3, 1041.1,\n                        326.0, 1046.1, 327.0, 1054.5, 327.5, 1063.5, 327.5, 1084.5, 326.6, 1097.3, 325.4, 1101.9, 326.7,\n                        1128.4, 326.5, 1134.3, 327.6, 1159.1, 325.9, 1164.0, 327.0, 242.7, 330.3, 255.9, 331.7, 365.4,\n                        330.8, 413.0, 330.8, 431.8, 331.6, 545.0, 331.8, 567.7, 330.8, 575.8, 330.2, 588.4, 330.7,\n                        593.4, 331.7, 602.9, 330.6, 624.2, 330.8, 726.0, 330.3, 747.3, 331.9, 1010.0, 331.9, 1014.7,\n                        331.2, 1032.3, 332.0, 1050.2, 331.3, 1063.5, 332.3, 1085.4, 331.0, 1103.2, 330.8, 1119.4, 331.2,\n                        430.2, 336.4, 584.4, 336.3, 597.9, 335.7, 620.3, 336.1, 625.0, 335.8, 733.6, 334.7, 738.4,\n                        335.3, 755.5, 335.3, 1006.7, 335.9, 1015.3, 335.5, 1022.8, 335.9, 1041.1, 334.7, 1055.0, 334.7,\n                        1067.3, 335.6, 1075.9, 335.1, 1098.7, 335.4, 1106.2, 336.0, 1111.7, 334.9, 1185.8, 334.6, 172.4,\n                        339.5, 225.4, 339.9, 291.3, 339.6, 294.9, 339.9, 479.7, 339.2, 527.5, 339.2, 562.7, 340.2,\n                        576.3, 340.3, 650.2, 339.9, 663.4, 339.2, 668.2, 339.4, 755.2, 340.5, 760.1, 339.7, 782.7,\n                        339.7, 1002.4, 339.6, 1006.5, 340.6, 1011.5, 340.1, 1027.9, 339.6, 1033.1, 339.2, 1040.5, 339.9,\n                        1045.7, 340.0, 1049.8, 340.3, 1058.7, 339.6, 1063.1, 339.0, 1067.4, 339.6, 1081.4, 340.6,\n                        1085.1, 339.2, 1088.9, 340.5, 1137.6, 339.2, 1159.4, 340.3, 238.2, 344.8, 430.9, 344.4, 505.5,\n                        344.3, 513.9, 344.9, 554.8, 344.2, 580.8, 344.9, 672.1, 344.8, 690.3, 343.6, 725.7, 344.2,\n                        737.7, 344.8, 772.7, 343.6, 778.2, 344.7, 786.6, 344.7, 791.3, 344.9, 800.0, 345.0, 804.5,\n                        344.9, 996.7, 344.5, 1002.4, 344.5, 1005.5, 344.3, 1010.9, 344.6, 1019.1, 343.4, 1028.8, 343.9,\n                        1041.1, 344.0, 1045.6, 344.1, 1062.6, 344.0, 1090.5, 344.1, 1120.6, 344.7, 1124.4, 343.9,\n                        1138.1, 344.0, 1146.0, 344.8, 1177.1, 344.7, 347.3, 349.3, 522.8, 347.8, 531.4, 348.5, 593.3,\n                        349.1, 760.8, 348.0, 782.8, 348.0, 791.4, 348.3, 795.3, 347.8, 799.5, 349.4, 808.2, 348.0,\n                        813.7, 349.2, 992.3, 348.4, 996.6, 348.7, 1005.9, 349.3, 1010.7, 348.2, 1015.2, 347.9, 1019.6,\n                        349.2, 1023.3, 349.2, 1037.1, 349.2, 1041.1, 348.8, 1044.9, 348.1, 1054.2, 349.0, 1058.9, 348.5,\n                        1106.5, 349.4, 1137.7, 348.3, 211.5, 352.4, 361.5, 353.2, 369.0, 353.5, 479.1, 352.8, 594.0,\n                        353.7, 680.5, 352.4, 685.1, 353.5, 690.0, 353.1, 764.1, 352.6, 787.0, 352.2, 795.1, 353.3,\n                        804.4, 353.1, 812.2, 352.8, 817.4, 353.1, 821.0, 352.9, 993.3, 352.7, 997.6, 353.1, 1015.2,\n                        353.0, 1019.2, 353.6, 1023.8, 353.1, 1037.2, 353.3, 1041.0, 354.0, 1044.8, 353.5, 1059.3, 353.0,\n                        1067.0, 353.0, 1076.2, 352.7, 1081.2, 352.5, 207.3, 357.7, 299.6, 357.6, 378.9, 356.8, 386.6,\n                        356.7, 502.1, 357.2, 628.3, 357.6, 646.7, 358.2, 659.4, 357.0, 667.7, 357.8, 698.9, 357.4,\n                        702.9, 357.0, 716.6, 358.1, 755.8, 358.0, 778.7, 358.2, 805.0, 357.6, 816.6, 357.6, 822.0,\n                        357.2, 825.9, 357.8, 829.8, 357.7, 988.8, 357.9, 993.3, 357.3, 1005.6, 357.0, 1010.2, 357.5,\n                        1023.7, 357.1, 1027.9, 357.9, 1032.8, 356.9, 1053.7, 358.1, 1058.8, 357.1, 1063.0, 358.0,\n                        1071.2, 358.0, 1080.2, 357.6, 1085.4, 356.6, 1128.7, 356.7, 238.8, 361.2, 418.7, 361.8, 426.2,\n                        362.0, 536.0, 362.0, 544.6, 361.4, 628.0, 362.5, 677.7, 361.6, 721.4, 361.9, 751.3, 362.6,\n                        804.3, 362.5, 817.6, 362.0, 822.0, 362.5, 829.8, 361.0, 838.6, 362.4, 984.3, 362.1, 989.4,\n                        361.7, 997.4, 362.0, 1001.7, 361.7, 1006.0, 361.7, 1032.7, 362.3, 1058.3, 362.5, 1072.5, 361.3,\n                        1119.9, 361.4, 1134.0, 361.0, 1142.1, 362.6, 356.1, 367.0, 458.2, 366.3, 576.5, 365.7, 584.1,\n                        366.4, 673.1, 365.4, 677.4, 367.3, 729.0, 365.9, 786.1, 365.8, 794.9, 366.1, 835.3, 365.8,\n                        839.5, 366.7, 856.8, 366.6, 983.4, 366.0, 992.6, 366.8, 997.2, 367.0, 1010.6, 366.2, 1015.4,\n                        365.4, 1033.0, 365.4, 1067.7, 365.7, 1071.4, 365.5, 225.6, 371.1, 277.2, 371.1, 374.4, 369.8,\n                        382.7, 369.9, 493.2, 370.1, 641.7, 370.8, 717.3, 371.2, 742.6, 370.6, 750.9, 370.1, 755.6,\n                        369.9, 786.5, 371.1, 790.9, 371.0, 808.7, 371.3, 825.9, 370.5, 838.5, 371.4, 843.3, 371.3,\n                        848.5, 370.3, 865.0, 370.9, 979.6, 370.5, 983.8, 370.1, 988.8, 370.9, 997.1, 371.0, 1001.6,\n                        371.1, 1006.1, 371.0, 1010.2, 370.1, 1014.7, 370.0, 1023.5, 370.5, 1028.4, 370.7, 1037.2, 370.4,\n                        1041.3, 370.6, 1045.7, 371.5, 1049.8, 370.1, 1054.6, 369.8, 1059.4, 369.8, 1068.4, 370.3,\n                        1085.5, 369.8, 1088.8, 369.9, 1093.5, 370.3, 1111.3, 370.0, 1119.8, 371.2, 1124.2, 371.3,\n                        1150.7, 370.3, 233.8, 375.0, 404.5, 375.5, 417.8, 375.8, 474.5, 375.5, 549.0, 374.6, 689.6,\n                        374.3, 768.6, 374.9, 822.0, 374.4, 835.2, 375.2, 848.6, 375.1, 852.6, 375.2, 970.7, 375.5,\n                        975.7, 374.9, 979.9, 375.8, 984.2, 375.8, 988.9, 375.3, 993.7, 374.9, 997.8, 375.6, 1002.0,\n                        375.7, 1010.5, 375.3, 1036.2, 375.6, 1040.6, 374.4, 1089.8, 374.2, 1142.1, 375.1, 1151.0, 375.4,\n                        246.8, 379.0, 436.3, 379.4, 445.1, 380.1, 448.3, 380.0, 615.7, 380.1, 623.6, 380.1, 646.3,\n                        380.1, 720.8, 379.2, 739.1, 380.0, 799.8, 378.8, 826.9, 378.8, 839.9, 379.7, 847.9, 379.5,\n                        852.5, 379.7, 856.9, 378.5, 861.5, 378.9, 966.8, 378.6, 970.5, 380.0, 984.4, 379.6, 988.8,\n                        379.4, 1002.5, 379.8, 1019.9, 379.6, 1032.2, 379.1, 1046.0, 378.9, 1125.3, 379.6, 1159.4, 379.8,\n                        255.5, 383.4, 360.5, 384.1, 479.2, 383.6, 519.0, 383.3, 522.7, 384.5, 619.9, 383.0, 641.1,\n                        383.9, 778.3, 383.5, 807.8, 384.0, 816.6, 383.5, 843.3, 383.7, 847.6, 384.0, 856.0, 383.8,\n                        861.6, 383.9, 865.7, 383.0, 883.1, 384.1, 957.1, 383.9, 970.9, 383.9, 974.8, 383.9, 979.6,\n                        383.7, 983.6, 383.1, 1002.4, 384.3, 1010.2, 383.8, 1019.3, 384.0, 1023.7, 383.9, 1037.2, 382.9,\n                        1045.3, 383.6, 1089.8, 384.3, 1123.8, 383.7, 273.8, 387.7, 392.3, 387.7, 558.9, 388.0, 571.8,\n                        388.5, 593.9, 388.7, 615.6, 388.4, 637.7, 389.0, 651.1, 388.1, 659.5, 387.6, 800.4, 388.3,\n                        813.3, 388.6, 843.2, 389.1, 847.9, 388.8, 852.6, 388.5, 857.1, 388.1, 861.5, 389.0, 866.0,\n                        388.5, 869.6, 387.9, 874.9, 387.5, 878.8, 387.9, 883.9, 388.2, 896.7, 387.6, 927.6, 388.1,\n                        952.8, 387.4, 962.4, 387.8, 966.6, 387.9, 970.9, 388.2, 975.4, 388.9, 979.8, 388.1, 984.4,\n                        387.8, 988.9, 388.9, 996.7, 387.9, 1002.3, 388.8, 1024.5, 388.2, 1036.3, 387.9, 1119.7, 387.2,\n                        1160.1, 388.1, 417.2, 392.4, 435.2, 392.6, 554.1, 392.2, 720.7, 392.6, 795.8, 392.5, 817.4,\n                        391.9, 826.6, 391.8, 839.4, 392.5, 847.3, 392.9, 851.9, 393.0, 856.4, 392.8, 861.0, 392.8,\n                        870.3, 393.2, 879.6, 392.8, 886.8, 392.6, 891.8, 393.0, 896.0, 392.2, 900.2, 393.4, 914.1,\n                        392.8, 935.6, 392.8, 941.0, 393.2, 948.6, 392.7, 953.5, 392.7, 957.3, 392.9, 961.8, 392.6,\n                        966.6, 392.8, 984.1, 392.7, 992.9, 393.0, 1023.4, 393.2, 1049.4, 392.3, 1054.8, 392.3, 1059.0,\n                        392.1, 1094.3, 393.3, 1120.6, 391.8, 1146.8, 393.1, 1163.6, 391.9, 703.6, 397.3, 711.6, 397.7,\n                        725.1, 396.4, 768.5, 396.8, 803.9, 396.5, 826.9, 397.2, 848.9, 397.7, 858.2, 396.6, 874.2,\n                        396.1, 878.9, 397.3, 883.8, 397.8, 888.1, 397.7, 892.0, 397.3, 895.8, 396.3, 901.3, 397.0,\n                        909.1, 397.6, 919.1, 397.1, 923.3, 397.7, 927.0, 396.5, 931.5, 396.8, 935.5, 396.7, 940.7,\n                        397.2, 953.6, 396.4, 961.9, 397.3, 971.8, 397.6, 992.1, 397.6, 1005.5, 395.7, 1010.0, 397.5,\n                        1019.4, 397.5, 1053.6, 397.5, 1058.1, 396.2, 1062.7, 396.4, 1067.2, 397.4, 1138.2, 397.7,\n                        1155.7, 396.4, 281.6, 401.9, 546.0, 400.9, 606.4, 401.6, 619.7, 401.0, 667.4, 401.7, 751.8,\n                        400.9, 756.1, 401.7, 759.9, 401.2, 765.1, 401.2, 772.9, 400.6, 808.1, 400.9, 812.2, 401.4,\n                        830.8, 401.2, 835.3, 400.9, 843.0, 401.7, 856.5, 400.9, 861.7, 401.8, 869.4, 400.8, 873.9,\n                        400.7, 878.7, 401.8, 883.3, 402.3, 892.4, 401.6, 896.8, 401.6, 909.8, 402.0, 922.7, 400.7,\n                        926.5, 400.5, 931.7, 401.3, 936.4, 401.3, 948.8, 402.0, 957.5, 401.1, 979.0, 401.0, 984.7,\n                        400.6, 1005.3, 401.4, 1028.3, 400.8, 1058.2, 401.9, 1063.1, 401.6, 1085.7, 401.9, 365.1, 406.1,\n                        694.6, 406.6, 715.7, 405.3, 725.7, 406.3, 742.9, 405.7, 756.1, 405.6, 760.0, 406.1, 769.0,\n                        405.8, 781.5, 405.0, 799.8, 406.1, 812.7, 405.5, 816.9, 405.4, 848.5, 406.5, 852.6, 406.0,\n                        856.3, 405.2, 866.4, 406.5, 874.0, 406.4, 896.1, 406.5, 900.3, 405.1, 908.9, 405.1, 914.4,\n                        405.0, 917.7, 405.9, 926.7, 405.3, 931.3, 406.0, 935.9, 405.6, 939.5, 405.9, 953.3, 406.4,\n                        962.6, 405.6, 966.9, 405.9, 971.0, 406.0, 975.1, 405.4, 992.4, 405.2, 997.0, 405.2, 1002.3,\n                        406.4, 1010.8, 405.5, 1023.6, 405.5, 1036.7, 405.6, 1054.7, 406.3, 1076.2, 406.4, 1106.5, 406.2,\n                        1120.9, 405.0, 1133.1, 405.5, 1138.1, 405.7, 387.9, 409.4, 401.0, 410.3, 466.1, 410.1, 470.9,\n                        409.9, 649.8, 409.7, 663.6, 410.7, 681.0, 409.8, 686.1, 410.0, 693.9, 409.8, 756.4, 410.7,\n                        777.3, 411.1, 782.0, 409.9, 803.4, 409.6, 825.7, 409.8, 834.5, 410.0, 843.1, 409.3, 851.7,\n                        409.8, 856.7, 410.4, 878.6, 409.9, 887.7, 410.6, 901.0, 410.6, 905.8, 409.6, 913.2, 410.5,\n                        919.1, 409.9, 923.3, 410.8, 927.1, 409.4, 940.7, 409.8, 944.7, 409.5, 953.6, 410.6, 958.2,\n                        410.6, 963.0, 410.2, 975.9, 409.6, 979.1, 410.3, 988.1, 410.1, 996.5, 409.8, 1014.7, 409.8,\n                        1019.1, 410.6, 1054.5, 410.3, 1071.6, 410.1, 1081.1, 410.0, 1120.3, 409.5, 453.5, 413.7, 491.9,\n                        414.7, 497.3, 414.6, 514.2, 414.8, 550.4, 414.5, 558.8, 415.3, 588.5, 414.9, 611.8, 415.0,\n                        614.9, 414.0, 620.4, 414.6, 794.7, 415.0, 803.9, 414.6, 813.0, 414.7, 822.2, 414.6, 826.8,\n                        414.9, 834.1, 414.5, 853.3, 413.8, 861.8, 414.5, 865.7, 413.6, 870.7, 414.5, 882.7, 414.2,\n                        905.9, 414.6, 910.0, 414.9, 914.4, 415.0, 922.2, 414.4, 926.7, 415.0, 930.8, 414.5, 936.3,\n                        414.2, 944.5, 414.1, 953.0, 415.2, 966.5, 414.2, 971.4, 414.5, 980.6, 415.1, 992.7, 414.2,\n                        1024.4, 414.8, 1050.4, 414.4, 1067.4, 415.3, 1102.5, 414.3, 1137.9, 414.8, 322.1, 418.8, 593.4,\n                        418.9, 597.5, 418.2, 760.0, 419.2, 765.1, 418.6, 772.7, 418.9, 778.6, 418.4, 795.8, 418.9,\n                        816.9, 418.4, 853.0, 418.1, 856.6, 418.8, 861.4, 418.7, 865.7, 419.5, 892.3, 419.2, 896.5,\n                        418.9, 904.8, 418.6, 917.7, 418.6, 923.2, 418.7, 939.4, 419.1, 944.0, 418.4, 948.6, 418.9,\n                        953.7, 419.9, 962.7, 418.4, 993.7, 419.5, 1006.4, 419.4, 1027.5, 418.6, 1036.0, 419.7, 1044.8,\n                        418.6, 1080.6, 418.7, 1107.7, 418.3, 1120.9, 419.0, 672.5, 423.4, 676.4, 423.0, 686.5, 422.8,\n                        695.0, 424.0, 774.0, 423.5, 786.5, 422.5, 799.7, 423.3, 808.3, 423.2, 813.6, 423.5, 817.2,\n                        422.8, 835.5, 423.5, 861.4, 422.7, 883.5, 423.3, 888.4, 422.5, 901.2, 423.4, 914.4, 423.8,\n                        918.9, 423.4, 922.9, 423.0, 927.0, 423.4, 943.9, 423.1, 958.7, 423.8, 965.9, 423.2, 984.3,\n                        422.8, 1011.1, 423.3, 1019.9, 423.7, 1054.5, 423.7, 584.3, 427.1, 624.7, 427.3, 663.4, 427.2,\n                        673.4, 427.5, 760.3, 427.1, 764.8, 427.3, 791.0, 428.0, 808.4, 428.1, 813.3, 427.2, 817.6,\n                        427.4, 825.2, 427.1, 829.8, 428.0, 870.9, 426.9, 883.6, 428.2, 892.0, 427.1, 908.8, 427.8,\n                        913.2, 428.0, 918.2, 428.1, 923.4, 427.6, 935.3, 426.9, 939.6, 427.7, 944.5, 427.5, 971.7,\n                        428.3, 975.9, 426.9, 997.5, 427.3, 1001.7, 427.5, 1066.8, 427.0, 255.2, 432.1, 287.0, 431.6,\n                        400.5, 431.3, 409.8, 432.6, 440.0, 432.9, 637.9, 432.5, 650.8, 432.2, 655.6, 431.9, 673.2,\n                        432.6, 680.7, 431.5, 694.2, 431.7, 712.1, 431.3, 759.8, 431.3, 777.2, 432.4, 786.9, 432.1,\n                        795.1, 431.3, 800.6, 432.9, 817.3, 432.5, 843.1, 431.7, 869.5, 431.4, 878.8, 431.9, 887.8,\n                        432.5, 891.5, 431.4, 897.0, 432.4, 900.9, 431.4, 905.4, 431.4, 910.2, 432.7, 915.0, 432.1,\n                        923.3, 431.6, 926.9, 431.7, 957.1, 431.5, 962.4, 431.3, 971.9, 432.2, 976.0, 431.7, 979.7,\n                        433.1, 989.4, 432.6, 1001.3, 432.5, 1015.6, 431.9, 1019.6, 432.9, 1068.2, 432.8, 255.2, 437.0,\n                        483.5, 436.2, 488.8, 436.9, 527.3, 436.9, 537.3, 436.8, 545.0, 436.6, 571.7, 437.0, 575.8,\n                        436.9, 584.1, 436.9, 589.5, 435.8, 603.1, 436.7, 694.9, 436.2, 703.1, 436.4, 764.9, 435.9,\n                        782.7, 436.4, 787.4, 437.0, 813.2, 437.3, 821.1, 436.9, 834.2, 436.3, 860.1, 436.5, 864.9,\n                        436.6, 888.0, 436.3, 892.7, 436.3, 901.0, 437.1, 913.7, 436.6, 932.2, 436.7, 939.7, 436.9,\n                        952.7, 436.3, 970.2, 436.1, 983.8, 435.9, 992.7, 437.0, 1006.7, 436.2, 1023.9, 436.1, 1036.1,\n                        435.8, 1076.5, 437.0, 1081.2, 436.7, 1110.7, 435.9, 1137.7, 437.2, 479.3, 440.3, 496.3, 440.2,\n                        620.4, 440.1, 641.4, 440.3, 650.5, 440.1, 654.8, 440.2, 663.3, 440.8, 712.1, 440.8, 717.0,\n                        440.1, 747.1, 440.2, 790.5, 440.5, 860.7, 441.6, 865.5, 440.1, 879.2, 440.4, 887.7, 441.1,\n                        905.2, 441.1, 913.5, 441.3, 931.7, 441.4, 953.0, 441.3, 957.3, 440.4, 974.7, 440.6, 983.7,\n                        440.9, 992.8, 441.5, 997.7, 440.7, 1023.3, 440.5, 1041.4, 441.4, 1067.5, 440.1, 1089.0, 440.6,\n                        356.6, 444.9, 382.7, 444.5, 396.8, 444.8, 423.1, 445.0, 439.7, 445.2, 452.5, 445.6, 708.2,\n                        445.8, 738.1, 445.3, 751.6, 444.8, 778.6, 445.2, 790.4, 446.1, 844.2, 445.2, 869.6, 444.8,\n                        875.2, 446.0, 905.0, 445.1, 923.5, 445.9, 936.5, 444.7, 953.8, 445.8, 967.2, 444.4, 984.2,\n                        445.7, 1023.2, 445.9, 1027.9, 446.1, 1049.9, 445.7, 1076.0, 444.7, 1098.3, 444.5, 1133.2, 446.0,\n                        396.1, 449.0, 535.8, 449.5, 642.5, 450.2, 703.7, 450.0, 716.3, 449.3, 720.8, 449.5, 729.7,\n                        448.9, 764.0, 449.3, 773.6, 449.1, 778.2, 450.1, 782.6, 449.3, 787.0, 450.4, 804.9, 450.2,\n                        821.3, 449.7, 826.6, 450.1, 852.5, 449.0, 861.6, 448.9, 878.2, 450.1, 883.3, 449.6, 917.6,\n                        449.0, 953.9, 450.3, 971.1, 449.1, 979.4, 448.9, 983.4, 450.3, 988.1, 449.9, 1001.6, 449.4,\n                        1036.0, 449.2, 1050.6, 449.5, 1067.7, 449.1, 1093.7, 450.1, 225.7, 454.2, 229.3, 453.3, 312.8,\n                        453.8, 484.0, 454.8, 606.6, 454.4, 611.7, 454.7, 615.9, 454.8, 619.9, 453.3, 685.9, 454.4,\n                        698.2, 454.9, 746.7, 454.3, 756.5, 454.8, 764.6, 453.6, 768.4, 454.4, 790.5, 454.4, 826.2,\n                        455.1, 848.2, 454.1, 873.8, 453.3, 883.9, 454.6, 888.2, 453.4, 908.7, 453.8, 927.1, 454.3,\n                        944.5, 454.6, 949.8, 453.3, 953.6, 455.6, 957.7, 453.9, 1011.1, 453.8, 1037.5, 454.0, 1041.9,\n                        453.8, 1050.2, 454.4, 1072.6, 453.4, 1107.3, 453.8, 356.3, 457.8, 360.7, 459.2, 365.2, 459.2,\n                        369.6, 458.4, 461.8, 459.1, 471.0, 458.1, 676.3, 459.1, 680.5, 458.0, 725.3, 459.1, 729.9,\n                        458.2, 756.7, 459.4, 800.3, 457.8, 809.3, 458.0, 818.2, 458.7, 834.4, 459.1, 843.7, 457.9,\n                        856.2, 457.8, 870.0, 458.0, 874.9, 458.1, 879.2, 458.4, 900.2, 458.5, 945.5, 459.2, 970.3,\n                        458.5, 987.8, 458.2, 1022.8, 459.0, 1027.7, 458.7, 1036.8, 458.3, 1041.6, 458.6, 1062.7, 458.7,\n                        1090.1, 458.7, 412.9, 462.3, 527.5, 463.6, 567.5, 462.1, 778.1, 463.5, 803.8, 462.9, 817.4,\n                        463.5, 826.6, 463.4, 835.5, 463.6, 847.3, 463.0, 851.9, 462.6, 857.2, 462.8, 869.7, 463.0,\n                        874.1, 463.6, 878.9, 463.0, 883.8, 462.3, 896.8, 462.9, 913.2, 462.7, 949.5, 463.3, 954.0,\n                        463.1, 966.0, 462.4, 970.6, 462.9, 993.5, 463.3, 996.7, 462.8, 1005.7, 463.1, 1015.0, 463.0,\n                        1027.4, 463.5, 1050.8, 462.4, 483.5, 467.9, 519.3, 467.0, 523.8, 466.6, 528.1, 467.6, 532.5,\n                        466.5, 628.5, 467.3, 637.8, 466.4, 645.8, 467.3, 698.1, 468.1, 704.1, 466.6, 715.9, 466.8,\n                        720.2, 467.0, 725.6, 467.3, 733.2, 467.6, 742.0, 467.5, 755.5, 467.8, 834.7, 467.5, 838.8,\n                        467.9, 851.9, 466.7, 873.8, 467.0, 883.2, 468.0, 949.1, 467.4, 953.9, 467.1, 971.4, 467.3,\n                        1020.0, 466.6, 1036.2, 466.4, 1041.9, 466.5, 1053.6, 467.5, 1058.5, 467.9, 1063.3, 467.2,\n                        1072.1, 467.8, 1077.1, 467.4, 1103.0, 467.1, 378.4, 472.1, 611.1, 471.2, 627.9, 471.7, 703.9,\n                        472.2, 725.1, 471.9, 756.6, 471.6, 817.3, 470.9, 870.5, 472.3, 873.8, 471.3, 887.2, 472.3,\n                        917.9, 471.0, 967.1, 471.9, 980.4, 471.1, 984.7, 471.7, 988.3, 472.2, 1002.0, 472.4, 1023.0,\n                        472.1, 1049.3, 472.3, 1067.0, 472.1, 303.7, 475.9, 316.8, 476.8, 409.7, 476.7, 427.6, 475.6,\n                        462.3, 476.7, 588.4, 476.0, 667.9, 476.6, 695.0, 476.2, 711.6, 476.2, 791.9, 475.7, 796.6,\n                        476.0, 808.2, 476.6, 848.5, 475.7, 853.3, 476.0, 861.4, 475.6, 875.2, 476.2, 944.2, 476.4,\n                        948.3, 475.8, 962.9, 476.2, 979.2, 476.4, 1041.1, 476.8, 1068.2, 476.4, 321.6, 480.3, 531.7,\n                        480.3, 554.2, 479.9, 558.9, 480.6, 598.1, 480.1, 654.6, 479.7, 664.0, 481.2, 685.5, 479.8,\n                        699.1, 480.4, 704.1, 479.9, 787.2, 480.2, 835.6, 480.8, 839.9, 480.6, 843.8, 481.1, 848.1,\n                        481.3, 861.0, 479.8, 874.9, 480.7, 883.4, 479.7, 948.3, 481.2, 974.8, 481.1, 997.9, 480.7,\n                        1024.3, 480.8, 1031.6, 481.2, 1037.2, 481.1, 1049.7, 479.8, 1066.9, 481.1, 382.6, 484.9, 404.6,\n                        484.0, 408.4, 485.6, 452.4, 485.2, 514.7, 484.7, 566.9, 485.5, 611.0, 485.8, 614.9, 484.1,\n                        655.8, 484.3, 681.2, 485.3, 699.2, 485.2, 716.0, 485.3, 720.7, 484.4, 729.3, 485.1, 813.2,\n                        485.6, 839.1, 485.5, 856.5, 485.4, 869.3, 484.4, 874.3, 485.2, 926.7, 484.5, 944.1, 484.2,\n                        948.6, 485.6, 966.3, 484.9, 970.7, 484.9, 1005.7, 485.0, 1023.2, 484.6, 1045.4, 484.8, 352.6,\n                        489.5, 396.3, 489.2, 457.3, 489.7, 537.2, 488.1, 553.6, 489.2, 594.0, 489.2, 623.7, 489.5,\n                        690.4, 488.7, 699.5, 489.4, 769.6, 489.8, 790.9, 488.7, 843.5, 490.0, 861.4, 488.4, 875.0,\n                        488.4, 953.1, 489.4, 965.6, 489.6, 993.8, 489.2, 247.0, 493.7, 382.5, 493.9, 426.5, 494.1,\n                        430.5, 493.3, 523.3, 493.5, 531.6, 493.3, 536.2, 492.8, 593.8, 494.0, 597.7, 492.4, 638.1,\n                        494.4, 650.5, 492.9, 681.5, 493.0, 716.8, 494.2, 733.6, 494.2, 764.2, 493.9, 777.1, 492.8,\n                        799.5, 493.0, 804.2, 493.3, 822.6, 494.2, 839.0, 493.2, 852.3, 494.4, 869.4, 493.8, 949.1,\n                        492.9, 958.0, 493.8, 965.7, 493.5, 980.6, 492.9, 1009.8, 494.4, 1019.8, 493.8, 193.8, 498.3,\n                        400.7, 498.4, 444.6, 497.4, 479.2, 497.6, 588.8, 498.7, 593.5, 498.8, 597.6, 497.3, 601.6,\n                        498.5, 659.0, 498.4, 677.3, 497.9, 689.3, 497.9, 742.4, 498.4, 791.7, 498.2, 795.8, 498.8,\n                        830.3, 498.1, 857.4, 498.4, 861.3, 498.4, 865.2, 497.4, 879.6, 498.8, 940.7, 497.9, 953.0,\n                        498.0, 966.6, 497.9, 975.5, 498.6, 987.6, 497.7, 992.6, 498.1, 997.1, 497.5, 1033.0, 497.4,\n                        1041.2, 498.1, 475.7, 502.5, 480.0, 502.5, 624.8, 503.1, 765.6, 502.1, 777.4, 502.5, 800.4,\n                        502.1, 834.7, 502.0, 839.8, 502.9, 966.2, 502.1, 979.7, 502.4, 997.2, 502.2, 1036.8, 502.4,\n                        439.3, 506.5, 571.7, 506.1, 575.8, 506.2, 625.0, 507.5, 638.1, 506.5, 756.6, 506.5, 763.8,\n                        506.9, 781.8, 507.5, 796.0, 507.2, 804.1, 506.7, 848.4, 507.4, 865.8, 507.5, 874.0, 506.4,\n                        936.2, 507.5, 949.2, 506.6, 952.9, 507.1, 975.5, 506.6, 979.8, 507.2, 984.1, 506.7, 992.6,\n                        506.9, 1020.0, 506.3, 1093.4, 506.1, 401.1, 511.4, 404.8, 510.8, 440.3, 511.4, 523.0, 511.1,\n                        619.4, 511.3, 702.6, 510.5, 708.4, 510.8, 720.2, 511.2, 725.8, 510.5, 760.9, 511.6, 777.2,\n                        511.1, 799.5, 511.3, 821.2, 510.4, 825.4, 511.6, 843.3, 511.2, 861.9, 510.7, 953.8, 511.4,\n                        958.4, 510.3, 970.2, 510.6, 1010.5, 511.8, 260.5, 515.7, 387.8, 514.9, 400.0, 515.2, 677.1,\n                        516.3, 768.9, 516.1, 786.0, 516.4, 826.4, 514.9, 830.1, 515.2, 835.2, 515.6, 865.5, 516.1,\n                        953.5, 515.9, 957.2, 515.0, 971.7, 515.9, 976.2, 515.8, 984.5, 514.8, 1019.8, 515.9, 199.1,\n                        519.8, 259.9, 519.5, 299.7, 519.8, 313.0, 520.8, 347.4, 519.5, 607.1, 519.6, 655.2, 519.7,\n                        672.7, 520.4, 725.5, 520.4, 782.6, 519.3, 786.1, 520.1, 790.6, 520.7, 800.1, 520.5, 821.2,\n                        519.9, 869.7, 520.3, 939.8, 519.3, 957.5, 520.5, 975.5, 520.3, 979.4, 520.3, 983.8, 519.3,\n                        1010.5, 520.0, 1014.5, 520.3, 1028.0, 519.7, 1050.6, 519.8, 488.5, 524.9, 492.5, 524.3, 557.7,\n                        524.2, 638.1, 525.2, 685.4, 525.1, 698.0, 523.9, 721.2, 524.0, 734.2, 523.8, 787.5, 524.2,\n                        804.3, 524.6, 821.0, 524.9, 826.5, 525.2, 857.2, 524.7, 861.7, 524.0, 948.4, 523.5, 966.4,\n                        524.5, 983.7, 523.9, 1005.8, 524.0, 1019.0, 523.6, 1041.5, 524.1, 1045.8, 524.0, 1050.3, 524.2,\n                        488.9, 528.3, 493.2, 528.8, 629.4, 528.6, 672.5, 529.4, 699.2, 528.9, 747.6, 528.5, 760.5,\n                        529.2, 839.4, 529.4, 856.1, 529.2, 949.1, 528.0, 958.5, 528.1, 980.5, 528.2, 989.4, 528.9,\n                        1010.8, 528.3, 1019.5, 528.4, 549.4, 533.1, 650.6, 532.8, 742.1, 533.8, 768.5, 532.5, 791.4,\n                        532.4, 852.7, 532.5, 949.1, 532.7, 966.2, 533.1, 1015.5, 533.0, 1063.5, 533.0, 413.5, 536.8,\n                        532.5, 536.9, 651.0, 537.0, 672.4, 537.1, 685.3, 538.1, 693.7, 538.0, 729.1, 536.8, 747.2,\n                        537.0, 777.2, 538.1, 800.3, 538.2, 830.3, 537.0, 843.8, 537.1, 857.5, 538.0, 865.3, 536.7,\n                        935.6, 536.9, 953.6, 537.7, 962.1, 537.3, 979.6, 537.0, 365.8, 541.3, 404.5, 542.4, 510.5,\n                        541.4, 646.3, 541.9, 650.8, 541.1, 681.3, 541.6, 734.4, 541.9, 759.9, 542.1, 808.7, 542.1,\n                        813.8, 541.7, 838.8, 542.6, 843.2, 541.3, 847.5, 542.1, 851.8, 541.8, 957.0, 542.3, 961.8,\n                        541.3, 980.4, 542.1, 1001.0, 541.7, 343.8, 545.6, 410.1, 546.2, 422.4, 546.4, 440.5, 546.4,\n                        584.6, 547.0, 650.0, 545.8, 725.3, 546.6, 737.7, 545.5, 803.5, 547.1, 830.0, 546.7, 848.3,\n                        546.0, 855.8, 546.1, 971.7, 545.6, 975.6, 546.2, 980.5, 545.9, 1045.0, 546.7, 404.8, 550.5,\n                        629.4, 551.5, 751.5, 550.9, 799.0, 550.0, 803.6, 551.5, 808.9, 550.0, 813.0, 551.2, 830.3,\n                        551.6, 840.1, 550.3, 844.5, 551.4, 857.5, 550.8, 962.6, 550.0, 971.4, 550.2, 979.6, 551.1,\n                        256.0, 555.5, 457.8, 554.8, 659.7, 555.1, 708.4, 555.3, 716.0, 554.9, 720.5, 555.3, 786.5,\n                        555.6, 791.2, 555.9, 940.0, 555.4, 944.5, 554.8, 957.9, 555.8, 962.3, 554.3, 1001.6, 555.4,\n                        677.4, 559.8, 729.7, 559.7, 739.0, 558.8, 782.5, 558.9, 796.2, 559.3, 809.0, 559.2, 813.4,\n                        558.8, 835.0, 559.3, 965.8, 559.9, 970.5, 559.2, 984.1, 559.6, 1067.8, 559.7, 575.3, 564.5,\n                        606.0, 564.4, 611.0, 564.3, 637.7, 563.2, 646.6, 563.1, 672.7, 563.4, 703.8, 563.2, 725.3,\n                        563.5, 746.9, 563.7, 795.6, 564.7, 800.5, 564.7, 843.6, 563.4, 958.5, 564.2, 1040.8, 563.7,\n                        417.8, 567.5, 492.4, 567.6, 502.2, 567.5, 585.4, 567.9, 690.8, 567.5, 734.0, 569.1, 803.5,\n                        567.6, 822.0, 567.7, 830.6, 568.8, 857.7, 568.4, 870.8, 568.9, 971.6, 568.4, 975.8, 568.4,\n                        576.1, 573.0, 791.0, 573.1, 308.7, 577.9, 566.7, 576.5, 624.2, 577.3, 637.1, 577.1, 645.6,\n                        576.4, 681.4, 576.3, 777.2, 577.8, 783.0, 576.5, 808.1, 577.5, 269.0, 581.0, 536.2, 581.4,\n                        585.5, 581.4, 629.0, 580.8, 664.0, 580.8, 680.7, 581.3, 746.3, 580.7, 528.6, 585.6, 544.7,\n                        586.2, 712.2, 586.5, 730.3, 586.0, 975.4, 585.8, 1005.5, 586.2, 326.4, 590.7, 505.0, 590.6,\n                        532.8, 590.6, 566.5, 589.7, 658.6, 590.4, 668.5, 590.3, 686.1, 590.5, 782.7, 590.1, 787.4,\n                        590.1, 484.5, 594.7, 497.7, 594.3, 527.0, 594.1, 610.9, 595.4, 637.7, 594.9, 703.6, 595.5,\n                        769.5, 594.8, 790.4, 594.7, 799.9, 594.3, 598.0, 599.6, 664.0, 598.7, 699.0, 598.9, 782.5,\n                        599.0, 808.7, 598.4, 540.1, 603.1, 655.2, 604.0, 690.4, 603.1, 699.0, 603.6, 783.0, 603.9,\n                        979.4, 602.7, 484.3, 607.9, 752.3, 608.0, 774.3, 608.2, 444.0, 612.9, 510.8, 611.9, 567.8,\n                        612.4, 620.0, 611.5, 685.3, 611.4, 690.6, 612.3, 698.3, 611.6, 703.4, 613.0, 773.2, 613.1,\n                        843.6, 612.5, 414.3, 616.0, 431.4, 616.7, 457.2, 615.9, 637.1, 616.1, 677.5, 617.3, 685.7,\n                        616.7, 739.0, 616.5, 743.0, 616.6, 751.1, 616.0, 756.1, 617.2, 431.6, 620.9, 502.1, 620.6,\n                        598.0, 621.7, 663.7, 620.5, 680.6, 620.7, 699.6, 620.3, 734.0, 621.4, 737.8, 621.8, 755.7,\n                        621.9, 597.7, 624.8, 655.7, 626.2, 676.8, 624.9, 690.1, 626.1, 738.7, 625.9, 746.8, 626.0,\n                        760.6, 625.4, 799.2, 625.0, 475.7, 629.7, 659.9, 629.9, 671.9, 630.1, 730.0, 629.7, 734.7,\n                        629.7, 756.7, 630.3, 997.0, 629.7, 645.6, 634.5, 681.7, 634.9, 708.0, 634.4, 768.6, 635.0,\n                        772.9, 634.4, 663.6, 638.6, 681.9, 638.3, 725.1, 642.6, 746.7, 642.4, 452.5, 647.2, 625.0,\n                        648.1, 716.9, 648.2, 628.8, 652.4, 549.2, 655.8, 593.0, 660.4, 627.9, 661.4, 636.6, 660.2,\n                        698.6, 660.7, 704.0, 660.3, 558.7, 665.3, 611.0, 665.3, 616.3, 664.2, 711.5, 664.5, 606.9,\n                        668.8, 496.9, 678.3, 537.0, 678.3, 611.7, 678.1, 641.9, 677.4, 664.4, 677.3, 480.3, 682.0,\n                        606.4, 682.1, 330.0, 686.5, 598.3, 686.7, 737.7, 686.9, 805.0, 686.6, 351.9, 692.1, 418.2,\n                        691.5, 579.8, 691.4, 593.9, 695.3, 681.6, 696.3, 764.3, 700.2, 567.2, 704.3, 636.8, 708.5,\n                        645.7, 717.1, 694.5, 717.1, 545.1, 722.3, 528.4, 727.1, 558.0, 731.6, 549.2, 739.9, 522.7,\n                        744.0, 474.9, 752.5, 535.9, 752.2, 440.7, 762.1, 518.9, 762.2, 487.8, 778.5, 483.9, 784.3,\n                        471.3, 793.1, 505.8, 809.3, 453.3, 814.2, 440.5, 818.1, 483.7, 819.1, 430.8, 823.7, 435.5,\n                        823.2, 465.5, 827.3, 391.5, 850.0, 378.9, 857.7,\n                      ];\n\n                      (function () {\n                        const W = 1372,\n                          H = 960;\n                        const X_OFFSET = 150;\n                        const W_VISIBLE = 1072;\n                        const R = 2.2;\n                        const PERIOD = 4.0;\n                        const DOT_COLOR = \"#7FC8FF\";\n                        const OMEGA = (2 * Math.PI) / PERIOD;\n\n                        const N = DOTS.length / 2;\n                        const CX = 878;\n                        let maxL = 0,\n                          maxR = 0;\n                        for (let i = 0; i < N; i++) {\n                          const x = DOTS[i * 2];\n                          if (x < CX) maxL = Math.max(maxL, CX - x);\n                          else maxR = Math.max(maxR, x - CX);\n                        }\n                        const ease = new Float32Array(N);\n                        const lag = new Float32Array(N);\n                        const sgn = new Float32Array(N);\n                        const amp = new Float32Array(N);\n                        const bw = new Float32Array(N);\n                        const jp = new Float32Array(N);\n                        const ja = new Float32Array(N);\n                        function rand(seed) {\n                          const v = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;\n                          return v - Math.floor(v);\n                        }\n                        for (let i = 0; i < N; i++) {\n                          const x = DOTS[i * 2],\n                            y = DOTS[i * 2 + 1];\n                          const left = x < CX;\n                          const md = left ? maxL : maxR;\n                          const ui = Math.min(1, Math.abs(x - CX) / md);\n                          ease[i] = Math.pow(ui, 1.5);\n                          lag[i] = 1.15 * ui;\n                          sgn[i] = left ? -1 : 1;\n                          const topClear = y - R - 4;\n                          const botClear = H - 4 - y - R;\n                          amp[i] = Math.max(0, Math.min(92 * ease[i], topClear, botClear));\n                          const w = Math.max(0, 1 - ui / 0.28);\n                          bw[i] = w * w;\n                          jp[i] = rand(i + 101) * Math.PI * 2;\n                          ja[i] = 0.4 + rand(i + 211) * 0.9;\n                        }\n\n                        document.querySelectorAll(\"[data-flap]\").forEach(setup);\n\n                        function setup(host) {\n                          const canvas = document.createElement(\"canvas\");\n                          host.appendChild(canvas);\n                          const ctx = canvas.getContext(\"2d\");\n                          let dpr = 1,\n                            sx = 1,\n                            sy = 1,\n                            rpx = 2;\n                          function resize() {\n                            dpr = Math.min(window.devicePixelRatio || 1, 2);\n                            const rect = host.getBoundingClientRect();\n                            canvas.width = Math.round(rect.width * dpr);\n                            canvas.height = Math.round(rect.height * dpr);\n                            sx = canvas.width / W_VISIBLE;\n                            sy = canvas.height / H;\n                            rpx = R * sx;\n                          }\n                          resize();\n                          new ResizeObserver(resize).observe(host);\n\n                          const reduce = matchMedia(\"(prefers-reduced-motion: reduce)\").matches;\n                          const TAU = Math.PI * 2;\n                          let start = null;\n                          let visible = false;\n                          let rafId = null;\n\n                          function ensureRunning() {\n                            if (rafId === null) rafId = requestAnimationFrame(tick);\n                          }\n\n                          new IntersectionObserver(\n                            (es) => {\n                              visible = es[0].isIntersecting;\n                              if (visible || reduce) ensureRunning();\n                            },\n                            { threshold: 0.01 },\n                          ).observe(host);\n\n                          function tick(ts) {\n                            if (!visible && !reduce) {\n                              rafId = null;\n                              return;\n                            } // pauza poza ekranem\n                            if (start === null) start = ts;\n                            const t = reduce ? 0.25 * PERIOD : ((ts - start) / 1000) % PERIOD;\n                            ctx.clearRect(0, 0, canvas.width, canvas.height);\n                            ctx.fillStyle = DOT_COLOR;\n                            ctx.beginPath();\n                            for (let i = 0; i < N; i++) {\n                              const ph = OMEGA * t - lag[i];\n                              const s1 = Math.sin(ph);\n                              const s2 = Math.sin(2 * OMEGA * t - 2 * lag[i]);\n                              let dy = -amp[i] * (0.85 * s1 + 0.15 * s2);\n                              dy += bw[i] * 7 * Math.sin(OMEGA * t + Math.PI);\n                              dy += ja[i] * Math.sin(2 * OMEGA * t + jp[i]) * 0.6;\n                              let dx = -sgn[i] * 9 * ease[i] * Math.sin(OMEGA * t - lag[i] - 0.6);\n                              dx += ja[i] * Math.cos(OMEGA * t + jp[i]) * 0.5;\n                              const x = DOTS[i * 2] + dx;\n                              let y = DOTS[i * 2 + 1] + dy;\n                              if (y < R + 2) y = R + 2;\n                              else if (y > H - R - 2) y = H - R - 2;\n                              const px = (x - X_OFFSET) * sx,\n                                py = y * sy;\n                              ctx.moveTo(px + rpx, py);\n                              ctx.arc(px, py, rpx, 0, TAU);\n                            }\n                            ctx.fill();\n                            rafId = requestAnimationFrame(tick);\n                          }\n\n                          if (reduce) ensureRunning();\n                        }\n                      })();" }} />
                    </div>
                    <div className="parrot_linear-gradient is-bottom" />
                    <div className="parrot_linear-gradient" />
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
                      <form action="#" aria-label="footer_form" className="v2-footer-form" data-name="footer_form" data-wf-element-id="606ebe6c-e56a-68eb-635f-3431f4bf7c7e" data-wf-page-id="660189f45f9033dd87f82a87" id="wf-form-footer_form" method="post" name="wf-form-footer_form">
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
      <main className="main-wrapper">
        <section className="section_about-hero">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="about-hero-wrapper">
                <div className="about-hero-top">
                  <div className="t-label-1-rg blue-light-900">
                    {"About Sentrize"}
                  </div>
                  <div className="spacer-16 _8-landscape" />
                  <h1 className="t-heading-1-rg text-c-blue-light-900">
                    {"\n                    A global engineering firm built on rigor, ownership, and uptime.\n                  "}
                  </h1>
                  <div className="spacer-40 _24-landscape" />
                  <p className="t-paragraph-1-rg-twk">
                    {"\n                    Since 2014 we have helped startups, SMEs, and enterprises build, scale, and operate the software and\n                    cloud infrastructure their businesses run on.\n                  "}
                  </p>
                </div>
                <div className="about-hero-image">
                  <div className="about-hero-image_inner">
                    <img alt="The Sentrize team collaborating in the office" className="about-hero-image_asset" loading="eager" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&h=900&q=80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_about-mission">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="w-layout-grid about-mission-grid">
                <div className="about-mission-line" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f628-87f82a87">
                  <div className="about-mission-line_dot" />
                </div>
                <div className="about-mission-content">
                  <div className="about-mission-group">
                    <div className="about-mission-group_left">
                      <h2 className="t-heading-4-rg text-c-blue-light-900">
                        {"Our story"}
                      </h2>
                      <div className="spacer-48 _32-landscape" />
                      <p className="t-paragraph-2-rg">
                        {"\n                        Sentrize started with a simple conviction: most software problems are really\n                        engineering-discipline problems.\n                      "}
                      </p>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg">
                        {"\n                        Early clients came to us with products that worked in a demo but buckled under real traffic. We\n                        rebuilt them properly \u2014 automated testing, version-controlled infrastructure, and deployment\n                        pipelines that did not depend on one person remembering the right command. That approach earned\n                        repeat work, and repeat work let us grow deliberately into a distributed firm of 50+ engineers\n                        across 23+ countries.\n                      "}
                      </p>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg">
                        {"\n                        The tools have changed since 2014. The standard has not. We build software that holds up in\n                        production, then stay to help it scale.\n                      "}
                      </p>
                    </div>
                    <div className="about-mission-image" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f635-87f82a87">
                      <div className="about-mission-image_inner">
                        <img alt="Engineers pairing on infrastructure work" className="about-mission-image_asset" loading="eager" sizes="100vw" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1038&h=780&q=80" />
                      </div>
                    </div>
                  </div>
                  <div className="about-mission-group is--second">
                    <div className="about-mission-image is--story" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f639-87f82a87">
                      <div className="about-mission-image_inner">
                        <img alt="Global network connections across regions" className="about-mission-image_asset" loading="eager" sizes="100vw" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=889&h=667&q=80" />
                      </div>
                    </div>
                    <div className="about-mission-group_left">
                      <h2 className="t-heading-4-rg text-c-blue-light-900">
                        {"Mission & vision"}
                      </h2>
                      <div className="spacer-48 _32-landscape" />
                      <p className="t-paragraph-2-rg">
                        <strong>
                          {"Our mission \u2014 reliable by design, not by luck."}
                        </strong>
                      </p>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg">
                        {"\n                        We make modern engineering practices the default, so the software businesses depend on is\n                        dependable from the first release \u2014 shipped with automated testing, infrastructure as code,\n                        observability, and zero-downtime deploys.\n                      "}
                      </p>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg">
                        <strong>
                          {"Our vision \u2014 the partner trusted to run what matters."}
                        </strong>
                      </p>
                      <div className="spacer-40 _24-landscape" />
                      <p className="t-paragraph-2-rg">
                        {"\n                        To be the long-term engineering partner businesses trust to build and operate their most\n                        important systems \u2014 measured not by what we launch, but by what keeps running years later.\n                      "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_about-operations">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="w-layout-grid about-operations-grid">
                <div className="max-width-280">
                  <h3 className="t-heading-4-rg text-c-blue-light-900">
                    {"Principles we engineer by"}
                  </h3>
                </div>
                <div>
                  <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f653">
                    <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f654">
                      <div className="t-heading-6-rg text-color-white">
                        {"01 \u2014 Engineering Rigor"}
                      </div>
                      <div className="faq5_icon-wrapper">
                        <div className="icon-embed-small w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="faq_answer is-black-bg">
                      <div className="margin-bottom margin-small">
                        <div>
                          <div className="text-rich-text is-primary-font w-richtext">
                            <p>
                              {"\n                              Production-grade discipline \u2014 architecture, testing, and code review \u2014 on every system we ship.\n                            "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f663">
                    <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f664">
                      <div className="t-heading-6-rg text-color-white">
                        {"02 \u2014 Radical Ownership"}
                      </div>
                      <div className="faq5_icon-wrapper">
                        <div className="icon-embed-small w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="faq_answer is-black-bg">
                      <div className="margin-bottom margin-small">
                        <div>
                          <div className="text-rich-text is-primary-font w-richtext">
                            <p>
                              {"\n                              Engineers own outcomes end to end, from first commit to the on-call page at 3 a.m.\n                            "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f675">
                    <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f676">
                      <div className="t-heading-6-rg text-color-white">
                        {"03 \u2014 Transparent Partnership"}
                      </div>
                      <div className="faq5_icon-wrapper">
                        <div className="icon-embed-small w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="faq_answer is-black-bg">
                      <div className="margin-bottom margin-small">
                        <div>
                          <div className="text-rich-text is-primary-font w-richtext">
                            <p>
                              {"\n                              Clients see roadmaps, metrics, and trade-offs in real time, not polished status theatre.\n                            "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f663">
                    <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f664">
                      <div className="t-heading-6-rg text-color-white">
                        {"04 \u2014 Security by Default"}
                      </div>
                      <div className="faq5_icon-wrapper">
                        <div className="icon-embed-small w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="faq_answer is-black-bg">
                      <div className="margin-bottom margin-small">
                        <div>
                          <div className="text-rich-text is-primary-font w-richtext">
                            <p>
                              {"\n                              Least privilege, encryption, and auditability designed in from the first line of code.\n                            "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq_accordion is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f663">
                    <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f664">
                      <div className="t-heading-6-rg text-color-white">
                        {"05 \u2014 Pragmatic Innovation"}
                      </div>
                      <div className="faq5_icon-wrapper">
                        <div className="icon-embed-small w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="faq_answer is-black-bg">
                      <div className="margin-bottom margin-small">
                        <div>
                          <div className="text-rich-text is-primary-font w-richtext">
                            <p>
                              {"\n                              We adopt new technology when it measurably improves reliability, speed, or cost.\n                            "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq_accordion is-black-bg is-last" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f687">
                    <div className="faq_question is-black-bg" data-w-id="9be1f9e2-08b9-8077-aba2-92459923f688">
                      <div className="t-heading-6-rg text-color-white">
                        {"06 \u2014 Continuous Improvement"}
                      </div>
                      <div className="faq5_icon-wrapper">
                        <div className="icon-embed-small w-embed">
                          <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.13514 5L7.86487 8.72973L11.5946 5L12.7297 6.13514L7.86487 11L3 6.13514L4.13514 5Z" fill="#7FC8FF" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="faq_answer is-black-bg">
                      <div className="margin-bottom margin-small">
                        <div>
                          <div className="text-rich-text is-primary-font w-richtext">
                            <p>
                              {"\n                              Every incident and release is data that makes the next one better.\n                            "}
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
        </section>
        <section className="careers_backed-section is-relative">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-content-wrapper is-big-padding">
                <div className="careers_backed-heading-wrapper">
                  <h3 className="t-heading-4-rg text-c-blue-light-900">
                    {"Our journey"}
                  </h3>
                </div>
                <div className="news-list-wrapper w-dyn-list">
                  <div className="home-content-2col is-news w-dyn-items" role="list">
                    <div className="w-dyn-item" role="listitem">
                      <div className="backed-logo_grid-logo-card is-news">
                        <div className="backed-logo_grid-logo is-news">
                          <div>
                            <div className="t-heading-4-rg text-c-blue-light-900">
                              {"2014"}
                            </div>
                            <div className="spacer-16 _8-landscape" />
                            <h3 className="t-heading-6-rg text-c-blue-light-900">
                              {"\n                              Sentrize is founded, delivering its first custom platform builds for early SME clients.\n                            "}
                            </h3>
                            <div className="spacer-32 _24-landscape" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-item" role="listitem">
                      <div className="backed-logo_grid-logo-card is-news">
                        <div className="backed-logo_grid-logo is-news">
                          <div>
                            <div className="t-heading-4-rg text-c-blue-light-900">
                              {"2016"}
                            </div>
                            <div className="spacer-16 _8-landscape" />
                            <h3 className="t-heading-6-rg text-c-blue-light-900">
                              {"\n                              Crossed 50 delivered projects and established a dedicated DevOps practice.\n                            "}
                            </h3>
                            <div className="spacer-32 _24-landscape" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-item" role="listitem">
                      <div className="backed-logo_grid-logo-card is-news">
                        <div className="backed-logo_grid-logo is-news">
                          <div>
                            <div className="t-heading-4-rg text-c-blue-light-900">
                              {"2017"}
                            </div>
                            <div className="spacer-16 _8-landscape" />
                            <h3 className="t-heading-6-rg text-c-blue-light-900">
                              {"\n                              Became an AWS Partner and opened a second delivery region across new time zones.\n                            "}
                            </h3>
                            <div className="spacer-32 _24-landscape" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-item" role="listitem">
                      <div className="backed-logo_grid-logo-card is-news">
                        <div className="backed-logo_grid-logo is-news">
                          <div>
                            <div className="t-heading-4-rg text-c-blue-light-900">
                              {"2019"}
                            </div>
                            <div className="spacer-16 _8-landscape" />
                            <h3 className="t-heading-6-rg text-c-blue-light-900">
                              {"\n                              Achieved ISO 27001 and SOC 2 Type II, formalizing our enterprise security posture.\n                            "}
                            </h3>
                            <div className="spacer-32 _24-landscape" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-item" role="listitem">
                      <div className="backed-logo_grid-logo-card is-news">
                        <div className="backed-logo_grid-logo is-news">
                          <div>
                            <div className="t-heading-4-rg text-c-blue-light-900">
                              {"2020"}
                            </div>
                            <div className="spacer-16 _8-landscape" />
                            <h3 className="t-heading-6-rg text-c-blue-light-900">
                              {"\n                              Scaled to a fully distributed delivery model spanning multiple regions without missing SLAs.\n                            "}
                            </h3>
                            <div className="spacer-32 _24-landscape" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-item" role="listitem">
                      <div className="backed-logo_grid-logo-card is-news">
                        <div className="backed-logo_grid-logo is-news">
                          <div>
                            <div className="t-heading-4-rg text-c-blue-light-900">
                              {"2022"}
                            </div>
                            <div className="spacer-16 _8-landscape" />
                            <h3 className="t-heading-6-rg text-c-blue-light-900">
                              {"\n                              Reached AWS Advanced Tier Partner status and surpassed 300 projects at 99.99% uptime.\n                            "}
                            </h3>
                            <div className="spacer-32 _24-landscape" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-item" role="listitem">
                      <div className="backed-logo_grid-logo-card is-news">
                        <div className="backed-logo_grid-logo is-news">
                          <div>
                            <div className="t-heading-4-rg text-c-blue-light-900">
                              {"2024"}
                            </div>
                            <div className="spacer-16 _8-landscape" />
                            <h3 className="t-heading-6-rg text-c-blue-light-900">
                              {"\n                              Launched a dedicated AI & Automation practice across client products and pipelines.\n                            "}
                            </h3>
                            <div className="spacer-32 _24-landscape" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-dyn-item" role="listitem">
                      <div className="backed-logo_grid-logo-card is-news">
                        <div className="backed-logo_grid-logo is-news">
                          <div>
                            <div className="t-heading-4-rg text-c-blue-light-900">
                              {"2026"}
                            </div>
                            <div className="spacer-16 _8-landscape" />
                            <h3 className="t-heading-6-rg text-c-blue-light-900">
                              {"\n                              Surpassed 500 projects across 23+ countries with 50+ specialists and 98% retention.\n                            "}
                            </h3>
                            <div className="spacer-32 _24-landscape" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n                    @media (min-width: 768px) {\n                      .home-content-2col.is-news .w-dyn-item:last-child:nth-child(odd) {\n                        grid-column: 1 / -1; /* span the full grid width */\n                      }\n                    }\n                  " }} />
                </div>
                <div className="hide w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n                    .backed-logo_grid-logo-card:hover .button-arrow-no-hover {\n                      color: var(--_v-2-colors---c-blue-light--400);\n                    }\n                  " }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="careers_backed-section is-relative">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="home-content-wrapper is-big-padding">
                <div className="careers_backed-heading-wrapper">
                  <h3 className="t-heading-4-rg text-c-blue-light-900">
                    {"Certifications"}
                  </h3>
                </div>
                <div className="home-content-2col is-logos">
                  <div className="backed-logo_grid-logo-card" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f6b2-87f82a87">
                    <div className="backed-logo_grid-logo">
                      <div>
                        <div className="t-heading-5-rg text-c-blue-light-900">
                          {"I2"}
                        </div>
                        <div className="spacer-8" />
                        <div className="t-heading-6-rg text-c-blue-light-900">
                          {"ISO 27001"}
                        </div>
                        <div className="spacer-8" />
                        <p className="t-paragraph-3-rg">
                          {"Certified information security management governing how we handle and protect client data."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="backed-logo_grid-logo-card" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f6b5-87f82a87">
                    <div className="backed-logo_grid-logo">
                      <div>
                        <div className="t-heading-5-rg text-c-blue-light-900">
                          {"S2"}
                        </div>
                        <div className="spacer-8" />
                        <div className="t-heading-6-rg text-c-blue-light-900">
                          {"SOC 2 Type II"}
                        </div>
                        <div className="spacer-8" />
                        <p className="t-paragraph-3-rg">
                          {"Independently audited controls for security, availability, and confidentiality."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="backed-logo_grid-logo-card" id="w-node-_9be1f9e2-08b9-8077-aba2-92459923f6b8-87f82a87">
                    <div className="backed-logo_grid-logo">
                      <div>
                        <div className="t-heading-5-rg text-c-blue-light-900">
                          {"I9"}
                        </div>
                        <div className="spacer-8" />
                        <div className="t-heading-6-rg text-c-blue-light-900">
                          {"ISO 9001"}
                        </div>
                        <div className="spacer-8" />
                        <p className="t-paragraph-3-rg">
                          {"Certified quality management for consistent, repeatable engineering and delivery."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="backed-logo_grid-logo-card">
                    <div className="backed-logo_grid-logo">
                      <div>
                        <div className="t-heading-5-rg text-c-blue-light-900">
                          {"AA"}
                        </div>
                        <div className="spacer-8" />
                        <div className="t-heading-6-rg text-c-blue-light-900">
                          {"AWS Advanced Tier"}
                        </div>
                        <div className="spacer-8" />
                        <p className="t-paragraph-3-rg">
                          {"Validated AWS expertise across architecture, migration, and managed operations."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="backed-logo_grid-logo-card">
                    <div className="backed-logo_grid-logo">
                      <div>
                        <div className="t-heading-5-rg text-c-blue-light-900">
                          {"GC"}
                        </div>
                        <div className="spacer-8" />
                        <div className="t-heading-6-rg text-c-blue-light-900">
                          {"GDPR Compliant"}
                        </div>
                        <div className="spacer-8" />
                        <p className="t-paragraph-3-rg">
                          {"Data handling, processing, and retention aligned with EU data protection law."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="backed-logo_grid-logo-card">
                    <div className="backed-logo_grid-logo">
                      <div>
                        <div className="t-heading-5-rg text-c-blue-light-900">
                          {"HR"}
                        </div>
                        <div className="spacer-8" />
                        <div className="t-heading-6-rg text-c-blue-light-900">
                          {"HIPAA-Ready"}
                        </div>
                        <div className="spacer-8" />
                        <p className="t-paragraph-3-rg">
                          {"Engineering controls and infrastructure prepared for protected health workloads."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_about-hiring">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="w-layout-grid about_hiring-grid">
                <div className="w-embed w-script">
                  <style dangerouslySetInnerHTML={{ __html: "\n                    .dot-globe-wrap {\n                      width: 100%;\n                      max-width: 470px;\n                      aspect-ratio: 1/1;\n                      margin: 0 auto;\n                      display: block;\n                    }\n                    .dot-globe-wrap canvas {\n                      display: block;\n                      width: 100%;\n                      height: 100%;\n                      touch-action: none;\n                      cursor: grab;\n                    }\n                  " }} />
                  <div className="dot-globe-wrap">
                    <canvas id="dot-globe" />
                  </div>
                  <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "(function () {\n                      const POINTS_RAW =\n                        \"755,-282,592,-305,-950,65,-351,19,936,-322,797,511,516,-477,-712,23,914,-405,-378,-495,782,-9,699,-715,831,489,264,414,-291,-863,-736,-668,105,725,679,-115,284,851,442,665,667,336,756,-181,629,-770,-326,548,973,229,14,-671,-551,497,381,-526,-761,481,76,-874,242,-969,54,-145,392,908,-274,266,924,838,545,19,-64,972,228,231,202,952,13,-976,217,-544,-350,763,-470,745,473,921,-54,385,-56,956,287,633,765,123,823,100,559,-255,889,380,640,-82,-764,-287,788,-545,807,582,100,238,391,889,-583,-451,676,871,-403,281,723,-206,-659,650,-303,697,260,-616,-744,-247,354,-902,89,-994,-60,587,566,579,293,-593,-750,-175,304,937,-578,-504,642,43,954,298,340,590,732,-377,648,-662,775,-294,560,917,178,357,532,-419,-735,20,465,885,220,929,297,630,777,5,-229,369,901,810,-145,569,-71,784,-617,806,-528,268,404,-411,-817,281,901,331,-446,81,892,780,-416,468,103,-974,201,374,79,-924,-9,985,-171,-738,-34,674,428,-308,-849,780,-147,-608,921,-118,371,-344,899,-270,37,899,436,-361,702,614,416,793,444,103,545,-832,244,905,349,409,880,241,-501,840,207,-131,-960,246,272,-526,-805,682,107,723,160,378,912,-278,-937,213,305,-206,-930,988,127,-86,98,906,-412,300,-495,-816,360,-441,-822,124,616,-778,322,486,813,-271,-950,156,-390,921,19,-149,501,852,398,905,150,39,530,-847,860,-247,447,-355,676,-646,-25,613,790,661,483,574,650,760,-1,773,247,584,-537,-437,721,-87,-988,-127,203,556,806,968,170,184,218,760,-612,19,815,-579,-10,-955,298,949,217,227,255,-967,0,910,279,306,-243,865,-440,-44,910,413,-303,840,450,444,747,494,-484,-56,873,109,586,-803,13,538,-843,984,158,80,-208,-942,264,-260,944,203,164,573,803,491,838,237,-166,-965,203,562,-240,-792,-324,608,725,772,636,-25,-125,-988,92,174,913,369,513,-374,-773,841,-341,421,303,715,-630,557,830,-36,-55,-970,235,141,-933,-332,-358,671,650,525,850,-48,523,805,281,-95,893,-440,231,832,-504,-80,390,917,612,22,-790,675,374,635,4,-961,278,171,421,891,309,733,606,-444,461,769,653,543,527,283,798,532,246,948,-204,214,944,-253,-582,-478,658,-125,352,928,950,311,-9,348,890,294,383,-311,-870,-219,939,-265,278,593,756,868,-386,311,328,-32,-944,221,697,682,797,-282,534,738,160,655,-356,-25,934,-485,706,515,118,986,-115,775,-447,446,125,819,560,759,234,608,478,782,400,-356,757,-548,312,-944,109,328,553,766,185,982,43,880,275,388,314,888,336,847,-208,488,-720,-53,692,645,759,88,-78,-971,226,-180,607,774,591,760,270,-319,-121,940,-106,769,630,-374,705,-602,842,-69,536,-63,577,-814,632,-287,-720,431,-575,-695,234,-617,-751,587,-12,-810,-130,-975,-180,162,752,639,968,65,243,-121,392,912,335,799,-499,-104,945,-311,-685,-574,449,829,194,525,229,-745,-627,964,42,262,-825,-109,555,-212,899,-382,505,855,113,634,-387,-669,701,450,553,-704,-519,484,-113,-992,47,256,-71,-964,288,118,-950,-215,867,450,196,455,869,-186,25,982,155,-985,-76,-7,-986,167,980,194,-51,689,429,584,896,443,-20,-186,-980,67,605,595,530,-166,846,-507,271,704,656,922,-11,386,671,-77,-737,123,881,457,374,754,540,-287,797,531,76,-973,218,-452,864,221,182,231,956,-132,872,472,96,939,-331,-37,826,-562,-226,857,-463,228,894,385,840,489,234,154,973,-172,-244,852,463,-50,836,546,851,506,-138,-39,694,-719,-332,652,681,-299,891,340,670,515,535,481,-223,-848,717,-135,-684,950,196,242,679,-280,-679,-83,560,825,791,-95,-605,-614,-459,643,656,511,555,255,103,-961,-754,-132,644,166,832,530,951,112,289,455,564,689,656,-30,-755,334,-273,-902,872,460,168,357,-26,-934,-16,-996,84,-449,890,81,-524,827,204,-23,907,-421,886,-365,285,813,-347,469,967,123,223,-124,480,868,598,-416,-685,596,-392,-701,790,307,531,151,927,-342,887,89,453,-403,858,318,183,-944,275,-80,336,938,73,570,-818,973,137,-187,938,276,-211,-264,786,559,745,458,486,373,913,163,338,855,393,-427,750,504,494,691,528,-7,970,-244,22,-985,-172,942,19,335,-162,-973,-162,149,-985,91,-391,709,-587,631,-382,676,-386,-443,810,-163,680,-715,218,-961,172,29,667,745,68,679,-731,-347,839,420,-188,903,386,85,-992,-91,637,569,519,525,-337,-781,931,329,-156,535,22,-844,721,121,682,463,-308,-831,420,771,478,92,667,-739,-691,-498,524,228,-948,220,-367,930,12,847,239,475,-184,684,-706,7,803,-596,-111,920,376,340,790,511,464,-250,-850,947,-245,208,281,-186,-941,171,608,776,772,123,624,547,-475,-690,785,616,-64,-271,854,-444,717,219,662,48,-964,262,873,375,311,-331,717,613,-322,331,887,81,533,-842,249,165,-954,802,-443,401,481,531,698,837,-102,537,357,760,-543,841,-162,516,34,482,875,481,-553,-680,-180,872,-456,-37,-949,314,249,-706,-663,781,-347,519,-9,460,888,481,127,-867,-632,-287,720,754,88,652,461,-277,-843,382,851,360,-72,785,615,-309,629,-714,-486,-420,766,-10,-981,-195,300,-126,-946,530,-268,-805,933,-302,194,147,734,663,225,-87,-970,925,381,4,-250,863,439,264,918,296,836,-429,343,34,-950,311,184,-139,-973,-403,601,691,181,875,449,844,-436,314,908,419,-11,850,527,-8,-267,-117,957,-34,748,-663,926,376,35,-378,582,720,205,834,-512,58,-998,19,947,-222,231,297,-273,-915,869,450,-207,748,652,124,305,835,458,561,-347,-752,-100,712,-695,861,-171,479,339,316,-886,86,973,216,-115,865,-488,-559,217,801,-37,-981,-190,424,866,264,346,108,-932,785,-36,618,-105,748,656,269,151,-951,953,296,-68,330,-579,-746,18,-999,42,623,-65,-779,180,-801,-570,-592,689,418,39,605,795,995,101,9,557,-114,-823,-363,691,-625,140,895,424,925,-222,308,-237,788,-568,-53,887,458,-210,876,-434,228,343,911,409,-540,-736,397,749,531,724,-95,-684,-331,450,-830,919,87,385,280,910,-305,620,-357,-698,900,409,149,-12,905,425,-793,-135,594,884,458,-95,-614,-684,394,443,-162,-882,638,-360,-680,-367,906,-211,944,330,15,794,19,607,-136,680,721,-241,738,-630,167,719,-675,457,-528,-716,538,814,218,152,-988,-37,708,-348,-614,-741,-355,570,-130,-967,-218,634,299,713,465,-452,-761,911,-209,355,-440,436,785,653,-6,-757,992,102,-73,798,-496,342,-78,-980,183,555,-497,-667,133,443,887,-48,449,892,926,234,296,337,836,433,843,534,-60,887,406,-220,390,-31,-920,604,797,-28,988,114,100,966,252,-56,586,332,739,-108,-986,-124,241,820,-519,-392,887,-243,-746,-375,551,704,133,698,41,798,601,751,624,218,189,-104,-977,422,895,144,-179,743,-645,835,453,312,-255,160,954,491,812,316,969,234,-84,-322,845,-427,267,-963,22,211,153,-965,897,434,84,270,-949,164,89,226,-970,-198,830,521,255,279,926,616,782,97,-233,927,-295,-150,-935,322,663,99,742,361,-417,-834,-25,-973,229,-618,-256,743,790,-127,-600,840,-376,392,-629,-530,568,-211,341,916,-189,564,-804,931,281,-234,27,569,-822,647,712,274,436,-205,-876,-281,927,250,830,417,370,161,379,-911,-549,-310,776,758,55,650,974,221,-50,936,-260,239,-307,259,916,171,575,-800,-248,-952,181,-222,668,-710,601,351,718,-187,620,-762,140,747,-650,30,897,-441,203,650,-733,47,-956,289,893,381,-241,903,-211,375,889,45,456,38,-931,362,-818,-132,560,21,-976,-215,-216,917,335,-647,-514,563,423,-488,-763,-258,226,939,657,657,369,95,816,570,80,796,-600,-367,520,-771,139,-928,347,-3,506,-863,-623,-611,488,265,651,711,24,875,484,-48,775,-630,-415,-499,761,37,547,836,169,285,944,-291,-920,261,-158,525,836,-740,-533,410,-242,677,695,-344,924,167,273,-961,-41,262,802,536,709,51,704,177,400,899,874,442,203,507,-322,-799,101,654,750,63,-984,164,697,681,226,-343,885,315,561,764,318,887,459,46,-274,656,703,952,-194,236,-233,448,863,375,-496,-783,833,-402,381,-222,87,971,-315,-944,96,642,733,223,-779,-464,423,274,948,-165,521,736,432,-154,-978,143,557,-181,-811,-197,-9,980,62,624,-779,262,543,798,466,770,435,409,614,675,960,-106,261,887,245,393,933,-218,285,-273,196,942,628,776,-50,960,278,-38,-693,-307,652,570,-396,-720,-203,447,-871,-683,-28,730,-248,-961,122,860,424,285,884,363,295,-224,577,-786,950,-13,313,224,226,948,-313,877,-364,-68,-998,-15,-147,709,690,791,465,397,482,-152,-863,-221,-967,123,471,-104,-876,-317,731,-604,-105,693,713,-374,825,-424,880,461,111,230,956,-185,444,761,472,320,-135,-938,-139,886,-443,128,-969,213,-172,946,276,919,365,151,-216,500,839,-278,908,313,-290,370,883,40,-989,-142,126,818,-561,184,737,-651,186,840,509,-49,898,437,824,22,566,968,218,127,179,775,606,527,354,773,-422,685,594,276,739,-615,835,529,148,-288,772,566,-144,869,-473,886,464,23,27,925,379,761,-426,489,322,804,500,656,600,459,100,512,-853,127,531,-838,810,392,436,510,676,532,-310,919,-243,-236,598,-766,13,830,558,755,-141,-641,181,-728,-662,420,646,638,6,905,-426,-178,559,810,186,436,880,251,780,-573,-331,617,-714,-138,292,946,206,937,-282,-799,-418,432,79,362,929,-157,835,-528,-159,367,-916,98,843,529,489,-262,-832,-172,275,946,940,-185,286,536,625,567,-19,418,908,399,669,627,-670,-410,619,827,166,537,167,-980,111,746,32,665,759,643,-100,851,19,525,-332,887,-322,-670,-510,540,468,-32,-883,-205,-29,978,137,299,944,910,-320,265,-265,898,-352,820,-65,569,-714,-411,567,-277,881,-384,72,404,912,-358,742,567,-20,517,856,986,165,-28,918,-301,256,876,349,333,716,-255,-650,728,483,486,967,-81,243,-424,882,-206,-287,415,864,867,299,400,215,839,500,263,356,897,-29,383,923,556,823,120,491,-438,-753,-261,540,-801,895,430,117,399,-263,-879,-371,871,323,119,376,919,35,833,553,936,-19,351,-188,907,-378,132,-973,190,-261,923,281,-592,-525,612,901,-346,263,-653,-473,592,402,891,214,918,-79,388,751,418,511,864,24,503,-121,569,-814,-462,-445,767,-397,738,545,-452,793,408,913,66,403,608,781,146,240,427,872,-29,654,756,359,636,683,-140,885,444,117,982,-151,-148,856,-495,-144,948,285,504,817,282,891,-74,448,38,324,-945,907,362,216,157,718,678,-624,-397,673,579,715,391,315,860,402,780,-534,327,-262,565,-782,973,186,137,238,843,-483,174,668,-723,661,625,416,-109,371,922,254,-188,-949,-114,785,-609,818,257,515,943,280,-178,851,-379,364,-781,-59,622,619,-176,-766,-440,886,-148,619,742,258,-364,632,-684,486,805,341,18,657,-754,138,355,924,16,761,-648,-66,819,-569,504,458,733,-646,-323,692,731,94,676,735,-219,-642,876,66,478,196,-965,173,682,723,115,421,755,503,-289,567,-771,830,555,-52,415,832,368,33,269,-963,-1,924,383,741,-13,671,40,991,-125,755,654,-56,-22,869,494,451,-96,-887,-723,-317,614,946,44,322,-171,867,469,732,64,678,313,793,523,928,-291,231,-391,902,-182,886,169,431,-565,674,476,827,-466,314,966,178,-190,805,-413,426,50,931,-363,830,435,348,695,-201,-690,397,438,807,-573,-409,710,517,792,325,798,-49,601,888,201,413,-290,914,284,-273,821,502,173,632,755,601,729,327,-170,857,-486,-271,811,-519,377,491,785,784,168,597,406,815,414,873,-414,257,811,473,345,873,108,475,630,46,-776,938,297,181,-256,-942,216,-258,437,-862,512,561,650,-459,661,594,431,-400,-809,-378,673,636,41,-971,235,938,-137,319,-269,492,828,245,739,628,857,-433,279,-82,-997,4,518,-195,-833,-317,569,759,103,731,674,812,-252,527,93,637,765,185,842,-507,369,453,812,109,-986,-123,534,605,591,73,928,365,209,-949,238,891,383,243,388,-621,-681,-82,-961,263,-142,845,516,924,-200,325,778,193,598,-239,691,-682,752,-230,-618,-677,-317,664,494,856,149,-172,753,635,693,-364,-622,272,706,-654,164,812,560,-349,821,-452,-396,688,-608,279,-255,-926,662,-243,-709,789,265,554,862,79,501,-410,528,744,-113,511,-852,350,617,705,-203,788,-581,-264,528,807,904,255,343,-278,870,408,982,189,-11,634,747,199,-83,303,949,-23,275,-961,253,26,-967,765,-162,623,292,932,-214,-56,-975,-213,-459,727,511,272,436,858,92,704,704,641,254,724,425,859,287,716,81,693,-255,879,404,-119,81,990,575,645,503,-426,703,569,-49,370,928,879,444,-174,-145,923,-357,-273,932,-238,127,989,-77,371,894,251,134,646,751,653,719,239,-386,913,-128,138,330,934,-569,785,244,958,239,-156,86,945,316,182,729,659,-798,-396,453,412,-127,-902,807,503,310,283,374,883,-204,628,751,-435,794,424,290,807,514,552,-210,-807,319,443,838,-310,553,773,-767,-396,505,348,881,321,-660,-259,705,849,-13,528,860,138,491,-211,430,878,34,627,779,929,-73,363,932,350,-92,-269,662,-699,679,734,17,-67,-967,-246,-77,904,-420,519,-72,-852,982,163,-90,214,309,-927,858,165,486,953,303,20,-222,568,792,-438,887,145,907,-360,219,624,-16,-781,496,61,-866,151,919,365,891,330,312,-223,843,489,437,700,565,871,-339,356,641,765,64,764,507,399,-654,-576,490,-431,-516,741,78,273,-959,980,146,-133,-515,-314,798,965,242,102,-383,561,-733,521,687,506,9,948,319,150,-922,-357,210,-957,202,318,-159,-935,-16,774,-633,164,824,-543,904,-281,321,-236,604,761,-371,880,297,204,367,-908,-349,876,-333,640,751,165,-100,727,679,-419,741,525,-131,-982,139,582,535,613,894,-145,423,50,935,350,476,796,374,694,-24,-720,-190,893,408,122,921,371,805,305,510,-500,741,447,12,-971,241,-131,432,-892,-352,551,-757,-312,735,603,-116,455,-883,-573,-433,696,89,992,-87,564,439,700,327,657,680,89,983,-159,990,100,-96,-506,688,521,-370,862,-346,115,944,309,759,384,526,-248,883,-399,917,388,97,452,810,372,400,849,345,-410,-447,795,-85,507,858,-179,809,560,-411,902,128,495,-97,-863,817,-371,441,-365,587,-723,777,-11,630,-246,944,221,373,-58,-926,344,54,-938,-341,629,698,-400,832,384,-574,-308,759,793,193,577,970,242,-26,-144,930,339,869,-276,411,245,916,-316,596,622,507,244,-114,-963,825,-238,512,940,323,113,261,-590,-764,815,-470,340,470,41,-882,-369,892,-260,875,-19,484,-255,-56,965,13,348,-937,668,738,93,337,-532,-777,400,-50,-915,-375,800,-469,-79,-991,-105,955,285,76,-119,973,-199,-96,-990,106,250,-928,278,618,784,55,911,24,412,337,-551,-763,763,276,585,90,783,616,-310,217,926,342,-335,-878,178,-977,-114,-165,633,756,-120,437,892,693,312,650,626,-118,-771,217,671,709,-193,232,953,-196,-961,195,789,514,336,704,101,703,228,-648,-727,162,649,744,685,353,638,111,-991,-78,-48,791,-610,-295,827,478,819,-214,532,-319,814,-486,844,523,115,-373,600,-707,157,484,861,2,498,867,-129,704,-698,-386,894,229,-315,582,-750,8,-991,-137,793,602,96,-424,-392,816,788,-178,589,467,-388,-795,755,-97,-649,-23,950,311,-408,-523,748,53,518,854,-612,-437,659,420,-618,-665,861,491,136,-485,-503,715,540,-435,-720,478,502,721,909,380,168,-337,868,364,-131,549,-825,651,-102,-752,-23,951,-307,692,-94,-716,476,593,650,625,409,665,90,-986,140,-37,-995,92,-280,487,-827,-43,-937,346,745,-527,408,204,594,778,931,85,354,-638,-463,615,-12,750,-662,874,179,451,-8,637,-771,936,232,266,425,514,745,-143,-961,-235,920,295,257,-418,893,-167,-248,544,801,240,-936,256,156,-973,173,-678,-343,650,983,-13,185,596,310,740,-225,887,403,981,192,39,493,-388,-779,53,737,-673,966,213,-147,874,213,436,537,804,254,307,882,-358,160,797,582,-128,575,808,976,146,-160,236,631,739,547,711,442,-473,868,-153,273,-102,-957,332,926,179,989,140,49,-43,768,639,-310,474,824,-661,-351,663,746,479,462,624,530,575,918,392,54,156,-934,322,865,501,35,939,-233,253,42,-979,-202,276,768,578,-310,899,-310,-529,-67,846,79,722,688,-503,-381,776,756,-205,622,705,705,82,-382,516,767,448,-133,-884,233,283,930,-88,809,-581,-463,406,788,115,-983,142,-349,908,232,312,646,696,904,427,18,-348,862,-368,-462,-347,816,-65,855,-515,763,-536,360,699,-159,-697,-213,-923,322,-378,755,-536,311,897,-314,885,-295,360,668,731,136,811,130,570,410,-444,-797,725,631,275,962,-124,242,-396,401,826,-242,-923,299,-158,233,959,672,740,-15,-559,-461,689,-736,-63,674,-83,966,246,-655,-612,443,523,-126,-843,20,583,812,-429,29,903,-241,901,-362,420,-371,-828,-390,-541,745,843,-188,504,977,111,181,314,704,637,111,878,-465,-561,801,212,-191,339,-921,522,-7,-853,-604,-318,730,-219,538,814,87,935,344,934,170,315,-147,637,-757,313,872,375,226,552,803,-394,874,-285,914,-337,226,-73,-994,-84,191,930,315,839,-291,459,906,412,94,-392,871,297,95,-941,325,810,-5,587,-96,603,792,-11,-975,-224,-93,846,-526,-24,-1000,7,-458,684,568,259,82,-962,341,751,-566,-796,-91,598,967,-40,251,-523,-475,708,-16,785,620,730,514,451,895,427,-133,-562,-331,758,-114,-993,25,426,107,-898,-337,444,830,323,-257,-911,78,-996,48,788,-390,477,524,-454,-721,718,441,538,-319,768,-556,351,842,410,-706,-493,508,-449,36,893,-64,730,-680,327,788,-522,950,-163,267,885,-253,391,641,637,428,37,-998,-53,-142,-977,162,992,118,45,957,-18,291,547,-316,-775,974,211,79,218,707,-673,-167,381,909,-211,-947,240,-467,883,44,604,-193,-774,-24,-993,119,196,325,925,769,352,533,331,-307,-892,872,482,91,598,638,485,484,826,289,499,865,51,-105,939,326,-95,480,872,329,144,-933,855,-115,505,-125,722,-681,-47,941,334,-131,764,632,740,-195,-643,753,-380,537,-102,-980,173,821,-385,422,828,-24,560,679,-221,-700,162,960,227,502,784,364,169,603,-779,-195,946,258,-170,-949,267,-594,608,527,-4,312,-950,369,-476,-799,-519,-37,854,742,136,657,86,-962,-259,238,726,-645,12,866,500,880,4,476,-18,937,-350,202,-806,-556,-429,-65,901,-543,821,178,-81,835,544,-696,-702,147,-380,816,436,-10,959,283,-382,533,-755,163,-761,-628,-395,853,341,206,638,742,-569,-370,734,984,97,151,775,-92,626,-331,756,564,-116,910,398,557,779,288,-573,-285,768,782,291,551,-221,808,546,918,334,-212,9,-1000,-28,-27,843,-537,463,-369,-806,388,555,736,630,-155,-761,551,646,528,377,876,301,361,694,623,442,775,451,564,21,-826,285,-159,-945,-58,751,657,-373,555,744,747,664,-9,205,178,962,305,-950,67,935,296,-193,129,451,-883,-307,940,-148,928,193,319,231,489,841,-422,606,674,-155,956,-249,441,61,-895,931,260,-257,-653,-386,651,111,-951,-287,617,-223,-755,683,-49,-729,-629,-572,526,306,418,855,443,894,70,51,218,-975,-266,356,896,572,-201,-796,942,201,269,-257,-933,250,-246,831,-499,976,195,100,703,481,524,949,291,123,8,-996,-88,-197,726,-659,958,91,274,766,-503,401,399,911,-107,-14,932,363,965,262,16,-759,-252,600,-779,-486,396,794,343,502,-762,-366,534,687,606,401,650,342,679,-254,924,-284,103,409,907,952,-66,297,-548,-387,742,-436,-479,762,372,-278,-886,930,285,232,-529,-328,783,-40,528,-848,184,981,-67,352,922,162,-808,-103,580,233,781,580,-205,-973,108,794,-14,608,-274,852,447,-375,-573,729,813,580,52,889,427,168,20,936,350,722,-299,-624,391,-106,-914,8,-947,320,-415,420,807,-134,947,-293,388,587,710,932,359,48,449,125,-885,298,885,357,171,-744,-646,825,-449,344,-56,-989,-133,523,-40,-851,813,-186,552,985,167,53,-193,-967,166,687,-313,-656,479,-323,-816,827,-282,485,-321,911,258,694,402,597,959,185,-213,582,805,118,-213,791,573,634,618,465,886,-127,446,872,314,375,189,947,261,458,884,89,-433,878,205,189,206,960,646,-317,-694,-106,306,946,-266,948,173,866,-191,461,658,-153,-738,270,483,833,939,98,329,-413,625,-663,991,136,18,-130,539,832,-199,877,437,733,231,640,-434,522,734,890,418,-181,692,266,671,-43,-986,162,-132,806,-577,826,553,-106,901,-19,433,240,-963,121,790,-162,-592,-32,579,-815,-421,78,904,456,-15,-890,-222,935,275,-122,898,-424,181,-983,3,284,96,-954,238,799,553,-566,-525,636,350,930,111,507,-535,-676,779,-208,592,242,593,768,823,352,446,125,493,-861,-122,921,-370,959,271,-78,743,-241,625,213,818,534,495,-417,-762,982,41,187,20,746,666,-450,481,753,-481,-386,787,929,-107,354,-286,608,-740,-74,767,-638,595,-51,-802,839,370,399,-17,-999,-34,-382,828,410,474,177,-863,969,222,-105,701,-66,-710,-108,-937,333,-22,729,684,254,326,911,-704,-338,625,854,114,508,-144,776,614,849,305,431,701,-322,-637,942,-157,295,60,-960,-273,647,368,668,-487,770,412,-100,666,-739,-154,544,-825,24,431,902,294,30,-955,860,510,7,298,-552,-779,-66,-923,378,37,357,-933,-137,896,422,848,158,506,914,-38,403,539,49,-841,334,-174,-926,824,518,228,183,691,-700,507,717,478,-43,550,-834,870,-72,489,316,763,564,208,758,618,795,-484,365,601,795,-83,132,-991,-19,142,868,476,698,-243,-673,-468,873,136,-110,820,-562,63,587,-807,924,133,357,-388,-48,921,776,326,540,-323,674,-665,-547,546,635,322,-9,-947,-30,640,-768,9,-982,188,963,159,-219,-464,12,886,273,822,499,939,-53,339,-485,261,835,355,136,-925,-517,763,388,186,813,-552,852,-361,379,379,835,399,610,525,594,703,178,689,-491,599,633,-308,-923,230,115,786,607,294,-955,-23,-17,-963,269,551,-15,-834,-334,596,-730,989,143,-39,-152,182,972,-60,674,-736,75,733,-676,598,-286,-749,91,973,-212,639,-205,-741,-106,846,523,102,901,421,-695,-58,716,819,-507,268,-393,47,918,138,771,-621,-204,384,901,204,869,452,92,925,-368,245,-218,-945,797,132,590,-155,741,-653,-62,638,768,381,-213,-899,971,123,-204,-534,-20,845,510,856,82,-42,688,724,132,841,-525,938,280,205,-746,-422,515,913,-287,290,443,442,780,785,-555,275,284,337,-898,837,516,180,-286,940,-187,378,900,219,799,-397,452,786,-310,535,-319,936,148,450,871,198,-717,-520,464,257,913,318,153,-979,133,270,0,-963,785,-456,420,-187,512,839,-172,798,-577,811,40,584,-749,-313,584,-207,258,944,-792,-376,482,627,-310,714,123,867,-483,699,702,134,603,788,125,-326,493,-807,467,457,758,-356,911,206,858,447,253,214,975,65,74,-959,272,-233,418,-878,529,496,689,549,811,199,-89,794,601,215,-188,-958,671,463,579,493,-484,-723,-133,476,-869,812,234,535,366,771,522,-294,234,927,523,420,742,838,284,467,792,92,604,978,-26,206,-63,893,-446,693,508,513,-44,607,-794,-165,544,823,840,82,536,189,261,947,-469,167,868,945,207,-253,922,256,290,942,259,212,43,983,-177,-153,858,490,-85,873,480,-88,-995,46,955,155,255,-182,884,-431,823,567,17,443,-480,-757,961,-159,227,-334,650,-683,934,358,0,87,199,-976,-304,513,803,692,629,355,-105,771,-628,334,-417,-846,-790,-272,549,937,310,163,-154,594,790,797,-231,557,305,852,427,-52,967,249,344,-657,-671,-186,710,679,-264,403,-876,199,-980,-26,654,755,43,-52,-998,24,832,59,552,291,-935,205,109,-992,60,-183,122,976,-365,-464,807,-237,785,573,44,-972,-232,-462,881,104,-130,-969,210,676,-193,-711,867,251,430,63,656,752,853,476,213,-188,429,-884,188,-929,319,879,453,-149,141,560,-816,753,-75,-653,2,566,-824,985,-34,169,-348,709,-614,-298,675,674,744,-260,-615,187,974,-129,-77,915,-396,639,392,662,-48,-959,280,-62,735,675,347,489,800,-139,829,542,-41,-958,-282,-134,-919,371,-222,648,729,-2,711,703,341,748,569,205,-718,-665,731,-174,-659,274,402,874,-105,931,-350,-309,933,183,-510,-344,788,57,454,889,428,184,-885,387,-134,-913,976,164,145,-514,-523,680,284,-957,63,250,-252,-935,-170,934,-314,-95,302,-949,-133,598,-790,-734,-444,514,471,874,124,-137,755,-642,939,-95,331,298,803,-517,-173,764,-621,881,292,373,-40,921,388,980,145,134,375,129,-918,614,476,629,-401,913,80,318,902,293,-39,876,-480,74,-950,304,741,667,-80,-82,927,367,-374,908,187,23,-992,126,524,84,-847,-20,968,251,220,675,-704,-91,957,-276,514,-225,-827,836,235,497,650,427,629,142,698,-701,575,290,765,940,126,317,-155,337,-929,-468,-518,716,542,-167,-824,931,361,-46,229,348,-909,-228,944,240,-40,-966,-256,-639,-431,637,193,815,546,44,-989,143,975,172,-143,213,-930,299,-674,-721,160,-145,737,660,435,-247,-866,404,463,789,-64,-994,93,-415,-473,777,855,65,515,848,442,292,0,879,477,662,-212,-719,753,324,573,370,812,452,826,553,113,166,343,925,-579,153,801,-110,866,488,595,-242,-766,699,671,246,69,487,871,666,309,679,660,-315,682,299,591,749,-96,-977,-190,-410,882,-230,-15,-997,-71,-377,926,-10,296,-942,160,857,-389,338,337,682,649,384,792,474,-517,834,-191,-348,874,340,668,257,699,-103,-985,140,-332,530,-780,186,-978,97,-257,637,727,-238,2,971,837,544,56,96,-963,251,222,731,645,-34,664,-747,807,-452,380,298,-229,-927,283,621,731,177,-955,238,866,495,71,439,-346,-829,299,-634,-713,-950,-309,36,443,463,767,878,458,140,-527,122,841,-355,886,-299,-670,-239,703,670,549,499,143,-954,-262,-238,637,-733,-397,-140,907,-340,769,541,-253,615,747,-385,690,613,-2,252,-968,128,919,-373,-641,-545,541,-161,-982,94,-719,-684,123,974,224,40,890,117,440,117,174,-978,-387,426,818,231,930,-287,862,-222,456,17,992,-124,-415,-44,909,956,275,104,881,472,-24,461,-566,-683,890,-391,236,281,-46,-959,911,389,-138,219,-782,-584,773,-188,-606,887,457,73,867,487,-106,291,718,632,644,-360,675,34,-997,73,-198,852,485,16,565,825,-370,5,929,761,186,621,657,-356,-665,969,246,31,964,257,61,-67,476,877,351,173,-920,-348,580,737,253,844,473,-781,-123,612,979,-63,194,-251,506,-825,-99,756,-647,424,899,110,400,-80,-913,846,326,421,955,36,296,-377,774,-509,419,534,734,567,611,553,260,-689,-676,250,862,440,-703,-561,437,898,-56,437,895,388,221,-195,845,-498,67,-998,-4,-208,694,690,645,407,647,-638,-655,404,-85,280,956,-408,782,471,18,713,-701,448,610,654,63,701,-710,-600,640,479,135,591,795,276,-953,125,-638,-361,680,-65,750,-658,474,855,213,-336,484,808,-274,169,947,-508,6,861,494,480,725,-217,889,-403,-701,-225,677,303,911,279,784,368,500,-409,673,616,-230,720,-655,441,728,525,-615,-505,606,-276,690,669,-119,507,854,-109,886,452,198,-168,-966,-597,-60,800,292,-951,104,149,985,-85,977,214,-7,522,-161,-838,822,564,-74,-749,-493,443,542,-455,-706,822,78,565,671,76,738,322,586,744,-306,864,400,223,-970,100,900,395,185,217,411,885,-273,776,-569,-219,403,-889,-490,858,156,217,-941,258,-234,916,-327,-73,593,-802,791,239,563,-154,919,362,505,366,782,946,289,-150,-353,496,793,-191,928,-321,-53,713,699,859,-86,505,806,282,520,639,478,603,731,681,33,-240,525,816,208,964,-166,-278,-954,110,112,309,945,420,-336,-843,433,-282,-856,567,61,-822,-260,760,-596,-369,-537,758,730,684,-14,527,762,377,-503,-173,847,137,712,688,-361,921,144,520,516,680,-245,911,331,927,-156,342,-463,-545,699,846,521,-112,-330,936,-122,-730,-498,467,-284,916,-283,241,469,849,-141,294,-945,135,-948,-287,-761,-286,582,249,-731,-635,634,186,751,208,276,939,7,-998,68,276,755,-595,312,935,171,-520,204,829,-23,-989,-143,96,919,383,-9,436,900,-3,922,-386,561,748,354,666,-178,-725,604,665,439,531,540,652,97,-995,-10,402,631,664,887,-183,423,185,-784,-593,730,-279,-624,718,673,177,79,640,-765,537,-247,-807,-212,526,-824,65,898,435,759,-462,459,261,-32,-965,16,612,791,-248,476,844,-215,496,-841,-319,686,654,825,326,461,890,139,433,973,-60,222,-187,-927,325,772,-120,624,-151,710,-688,232,-670,-705,-86,616,-783,-760,-467,453,57,259,-964,256,-142,-956,141,150,-979,758,-179,-627,257,-946,198,894,-36,448,530,793,301,347,-92,-933,371,828,420,-415,804,426,-231,52,972,-160,654,739,-132,521,-843,246,678,693,293,-75,-953,993,115,-14,-96,526,845,275,314,909,-444,767,463,-35,298,-954,912,406,-57,117,-964,-239,478,-202,-855,805,-67,589,16,701,713,891,365,-271,148,677,721,30,591,-806,-30,592,805,969,190,-158,324,-946,14,-106,604,-790,-405,640,653,948,312,68,301,-945,128,653,730,202,-398,911,-105,672,429,604,237,755,612,104,-980,169,581,-462,-670,-137,-948,288,179,362,915,161,897,-412,259,-659,-706,776,-85,-625,921,369,128,638,-212,741,481,748,458,554,383,739,972,196,-133,-232,-936,264,452,-49,-890,192,958,-211,364,37,-930,326,885,-331,54,-998,-35,901,330,282,812,322,487,-401,2,916,-61,926,373,478,875,78,-231,-946,228,329,120,-937,180,970,-166,-120,604,788,-369,838,-403,444,-557,-702,-553,-420,720,816,197,544,9,-925,380,174,894,414,188,900,392,194,592,-782,-62,-989,134,591,-123,-797,-586,-340,736,-749,-456,481,-147,475,867,-98,683,-724,-377,609,698,-299,675,-675,961,170,216,-312,788,531,-360,438,823,399,877,269,-783,-409,468,394,37,-918,345,863,370,-860,-104,499,958,213,189,-353,780,517,-418,891,176,-349,464,814,356,-557,-751,806,-94,-584,-832,-137,537,-34,731,-681,-371,751,545,-422,607,-674,771,-393,502,-771,-234,592,-155,-969,-191,-116,281,-953,968,238,75,592,-307,-745,-413,872,263,-316,803,-506,603,88,-793,-341,575,-744,528,772,354,145,464,-874,-399,-369,840,991,121,-61,905,358,-231,826,529,195,853,-408,325,-925,-168,342,840,524,-141,-238,823,515,-87,-953,291,559,600,572,846,528,71,168,749,-641,897,431,-101,278,800,-531,-210,12,978,974,155,168,-77,719,691,-765,-510,392,904,-120,409,252,-164,-954,270,891,365,393,527,753,30,954,-299,-727,-345,593,-749,-660,57,267,571,776,855,404,325,-197,784,588,829,364,424,-155,-980,121,606,-317,-730,-563,552,615,-551,-520,653,-112,332,-937,-758,-100,644,825,-310,472,617,573,539,961,-42,275,-213,926,-311,956,-82,281,-659,-294,692,881,-60,470,187,676,712,-64,658,750,-27,985,172,-243,810,534,160,-986,48,-610,-354,709,-70,620,782,311,-398,-863,-60,314,-947,596,54,-801,303,-177,-936,404,909,102,-779,-190,597,816,412,406,-612,-548,571,796,-364,483,-5,-990,138,428,-59,-902,-376,803,462,-54,-998,-42,914,368,-173,-396,-558,729,22,817,577,155,529,834,664,-330,-671,195,484,853,117,631,767,-455,-466,759,798,63,599,-256,773,580,127,852,507,400,-199,-895,373,-193,-907,-173,451,876,943,311,-118,-578,-248,777,755,-408,514,216,972,-92,773,12,634,961,249,-116,354,925,138,-190,806,-560,54,429,902,464,832,305,965,198,171,274,-643,-715,-503,-95,859,929,49,367,429,-463,-775,-374,389,842,528,573,627,772,-270,576,613,-380,-693,-386,863,-325,-300,809,506,128,-990,-59,616,505,604,731,679,-62,49,699,713,698,715,43,-473,791,389,-224,549,-806,-220,226,949,-443,-21,896,642,703,307,503,14,-864,850,-464,250,-590,-359,723,-272,709,-651,946,278,166,557,406,724,-370,737,-565,-95,-995,-17,-426,454,782,714,159,681,237,-971,21,-301,394,868,-374,786,492,810,586,1,-191,676,712,-283,629,724,48,724,688,-157,914,-375,-62,420,906,428,-90,-899,-408,911,-60,837,-486,251,662,611,434,-768,-48,639,168,794,-584,-680,-609,408,-350,622,-701,94,541,836,84,987,-135,-785,-618,39,233,-922,310,-492,-475,730,-403,-415,816,-855,336,-394,327,-649,-687,580,-294,-760,-260,-963,67,771,465,435,320,-946,44,69,630,773,-5,940,342,-70,950,305,-319,868,381,183,852,491,-450,-532,717,-687,-480,546,921,13,390,205,851,483,-457,-374,807,-250,657,-711,261,-933,247,857,364,366,234,-32,-972,-420,-371,828,796,603,-48,315,917,-246,-398,563,724,112,910,399,208,-41,-977,-65,804,-590,533,-505,-679,179,-40,-983,-6,810,586,92,605,-791,-487,282,826,409,-593,-694,789,440,429,387,653,651,19,411,911,-113,946,305,588,779,216,101,384,-918,-7,755,655,-521,-286,804,517,-402,-756,889,-377,260,52,672,739,163,862,-481,230,-970,-73,-327,852,409,203,392,897,124,678,-725,345,-493,-799,845,472,251,-74,703,707,-5,545,838,-298,727,-619,-253,415,874,-62,867,494,972,38,230,-166,466,-869,-769,-425,477,631,697,340,276,-567,-776,451,170,-876,294,534,793,637,446,629,719,-61,-692,-375,721,583,-501,-402,766,62,538,841,25,775,-631,913,363,187,239,247,939,-478,-147,866,261,617,742,921,303,-246,-115,535,-837,844,384,373,509,-250,-824,298,775,557,253,-966,-56,403,109,-909,310,941,134,881,474,-2,793,482,374,432,688,583,-397,-394,829,294,913,-283,-287,890,-354,-342,399,851,-475,695,540,907,213,364,121,697,-707,334,-630,-701,-323,828,459,574,813,95,-157,-959,237,-451,636,626,352,-54,-934,-162,695,701,-402,759,512,968,13,251,302,4,-953,224,513,828,297,820,-489,707,515,485,875,147,461,-138,636,759,668,-302,-680,638,-404,-655,227,-900,-372,48,959,-279,-375,771,514,333,-385,-861,950,233,-210,195,660,726,189,541,819,-514,843,161,-274,516,-812,619,613,491,387,-462,-798,-81,686,723,-210,817,-537,-18,812,-583,-442,-421,792,-103,-989,-103,327,512,794,897,-242,370,580,793,188,-584,599,547,311,819,482,117,691,713,586,610,534,914,353,-199,37,631,-775,751,-485,448,331,85,-940,286,-664,-691,327,186,-927,-276,826,-492,-701,-442,560,967,148,207,420,-264,-868,121,515,849,954,237,-186,812,485,325,0,896,445,424,-513,-747,305,693,-653,-365,916,168,-623,-596,507,21,791,-611,827,-331,454,374,-163,-913,-193,-974,-122,-407,818,406,16,-986,167,911,169,377,-300,613,731,143,422,895,757,121,642,638,545,545,-89,699,-710,-283,-956,73,884,462,-72,933,-184,308,775,623,-103,869,495,-13,679,650,342,531,312,788,-401,591,-700,109,494,863,-19,-998,57,859,198,471,491,759,427,-266,586,-765,538,367,759,44,-982,184,346,429,835,-203,70,977,944,329,-27,-59,642,-765,-315,878,359,-266,-920,288,-363,930,54,652,737,181,786,-478,392,-234,762,-604,215,815,-539,-87,458,885,182,635,-751,952,230,204,925,354,-136,322,924,204,113,761,638,190,795,-576,770,153,620,705,365,608,-271,-946,178,424,-183,-887,959,280,33,445,549,708,778,422,465,213,-976,52,-900,-103,424,296,938,-182,93,993,-65,-565,183,805,-170,526,-834,219,-696,-684,-147,316,-938,852,390,349,0,-1000,-5,834,547,77,-133,-989,60,991,114,71,962,187,201,506,655,561,677,-359,-643,119,459,880,61,876,478,292,457,840,-346,829,440,-199,658,-727,901,402,-163,-683,-287,672,-226,778,-586,-286,631,-721,51,583,811,616,-100,-782,565,-449,-692,143,981,-135,956,251,150,92,325,941,817,576,-26,351,-152,-924,783,-509,359,440,646,624,309,-683,-662,246,965,-91,715,-174,-677,874,-215,435,-66,-932,357,-284,932,224,-678,-723,130,-442,-496,748,350,730,587,401,-325,-857,924,-249,290,501,768,400,792,-326,516,604,-73,-794,266,907,-328,-327,923,204,896,355,266,-100,-920,379,-25,788,-615,573,749,333,320,-464,-826,790,388,474,-83,-988,128,459,18,-888,913,-233,334,-295,847,-443,206,959,-194,532,-93,-842,-4,834,-551,-291,548,784,690,244,682,-17,529,-848,488,96,-868,-685,-374,625,141,635,-760,511,-288,-810,928,-129,350,-778,-369,509,-286,719,633,-160,52,986,-496,-326,805,605,-159,-780,951,251,181,812,-491,317,160,986,-55,443,835,326,-510,298,807,-476,801,363,-251,336,908,74,507,-859,948,89,306,18,972,-233,-634,-54,771,823,544,166,193,759,-622,875,-170,454,-723,-386,573,136,380,-915,683,573,452,485,-3,-874,29,-999,19,-613,35,789,963,269,-11,-363,922,-135,904,-248,348,911,-8,412,-190,312,-931,-105,-992,68,557,736,384,375,-335,-864,423,-13,-906,-320,930,-183,627,-247,-739,448,483,752,552,311,774,-85,520,-850,951,-124,282,862,480,161,385,903,189,102,888,449,599,797,81,239,698,-675,392,-566,-725,464,741,486,-845,-177,504,-323,863,-389,-292,713,-637,-163,432,-887,365,713,599,973,104,205,869,475,-142,-602,619,505,-178,778,-603,16,606,-795,61,809,584,761,340,553,590,375,715,973,1,229,269,509,818,187,-982,32,-28,563,826,335,875,-350,577,-44,-816,983,16,181,48,-977,208,565,528,634,-79,-994,75,94,389,916,940,314,134,922,332,201,-67,961,268,-407,665,-627,113,569,814,-373,-405,835,-180,-966,-185,283,-958,39,115,735,-668,-160,723,672,586,-144,-798,59,770,635,-4,-995,104,789,608,-94,-147,447,883,504,-141,-852,-172,392,-904,-310,773,553,650,287,703,279,877,391,782,502,369,488,-463,-740,763,-486,427,110,636,-764,894,301,331,322,-495,-807,803,-297,517,-680,-592,433,732,191,654,975,61,212,-314,402,-860,825,138,549,-167,902,-397,-346,797,495,743,578,339,469,-72,-880,231,967,-109,677,702,220,457,731,507,203,-971,127,63,850,523,337,458,822,-41,-997,-68,622,-284,729,378,173,-909,-340,898,279,199,-768,-608,54,739,672,671,152,726,184,-980,-78,824,-105,557,130,-989,68,18,966,-258,365,-606,-707,437,809,394,-296,871,-392,-373,35,927,-142,-982,-126,-182,773,608,-306,466,-830,117,765,-633,-179,885,429,854,486,184,701,651,291,-78,830,-553,991,135,-5,-108,823,557,953,14,303,428,-597,-679,8,910,415,-270,844,-464,-402,915,-21,282,832,478,476,839,262,166,137,977,-225,828,-513,-183,927,327,-199,286,937,-197,969,149,-408,913,6,206,28,-978,535,740,406,542,771,335,87,802,591,331,709,623,374,-396,-838,34,849,527,-167,415,894,232,856,463,582,89,-809,-737,-395,548,180,705,686,-150,355,923,120,-993,16,688,139,712,360,787,501,552,548,628,-219,744,-631,838,538,-94,-339,931,135,717,480,506,305,190,-933,-629,-313,712,281,177,-943,-137,934,-330,387,910,-150,222,916,333,399,-350,-848,-26,885,-464,-602,-279,748,627,165,761,-147,618,772,157,445,882,-48,969,-243,553,-412,-724,-159,409,-899,-44,478,877,-124,954,274,-124,796,593,-482,872,87,648,322,690,527,700,481,937,231,-261,295,635,714,492,-345,-800,-154,-922,356,88,-991,106,-352,533,770,358,567,742,-79,935,346,224,-149,-963,-95,970,-222,924,273,267,173,926,337,220,880,420,189,-936,297,-177,-982,-61,918,395,-15,758,-254,600,550,483,682,-28,672,740,240,767,-595,-273,758,592,-460,868,-187,963,204,-178,759,-446,475,-210,747,631,482,402,779,-787,-327,524,385,-587,-712,806,460,371,900,238,365,862,501,-71,-42,509,-860,779,223,586,-392,907,152,326,-516,-792,431,38,-902,-503,-511,697,-183,656,732,-264,467,-844,-443,864,-239,-373,842,390,25,780,626,-498,-70,864,-298,875,381,-99,-967,236,102,953,286,-236,-969,71,277,951,-140,-21,882,471,56,889,-455,769,-117,-628,186,753,632,585,795,160,-362,795,-487,452,792,410,709,705,-14,661,-397,637,739,-108,-665,401,-162,-902,500,549,670,-247,-25,969,595,765,247,306,155,-939,112,986,121,-329,917,-223,964,107,242,-524,243,816,994,103,-41,787,41,616,-83,500,-862,-180,833,-523,-12,-944,329,571,782,251,-162,901,402,-223,-62,973,-40,849,526,-136,350,-927,-188,-951,244,-139,619,-773,-367,458,-809,-244,-85,966,-79,757,649,-560,-492,667,337,-214,-917,-313,927,-205,-168,9,986,62,918,391,197,-969,151,-427,477,768,764,492,417,25,-941,337,902,-321,290,156,769,620,79,614,785,937,260,233,-252,659,708,479,378,793,649,-250,718,-249,933,-260,-361,926,114,891,259,373,800,587,125,-253,736,628,829,479,289,-84,942,-326,-303,930,209,-692,-425,583,130,-991,39,627,660,413,898,-94,429,222,151,963,891,-323,320,815,-41,579,225,-974,-8,16,-959,-284,63,-991,-117,-138,333,933,275,314,-909,-153,570,-807,866,-150,477,863,-365,350,138,-944,301,933,345,98,-367,649,666,201,-973,-111,307,571,761,326,627,708,459,647,609,-183,921,-345,683,711,169,908,401,118,317,-787,-529,929,361,82,176,-983,-41,985,107,-138,149,907,394,348,18,-937,734,653,185,691,-124,-712,247,-50,-968,-70,-944,324,-877,-90,472,305,-951,-57,-56,502,863,207,343,-916,-179,582,-793,981,165,101,410,139,-901,-393,919,43,-344,731,589,-298,-947,122,37,802,-596,726,655,211,558,345,755,-509,579,637,-66,698,-713,269,689,673,-480,848,-224,372,921,113,99,777,-622,618,324,716,-224,713,665,921,381,-77,-346,933,-101,-553,12,833,221,372,902,593,-440,-674,856,507,-95,514,111,-851,301,398,867,-672,-470,573,162,507,847,-187,585,789,223,61,-973,186,509,841,95,978,-186,555,815,168,977,113,-179,-98,-929,358,953,288,-93,288,-691,-663,-281,749,-600,211,850,-483,322,368,872,-446,750,489,664,694,278,264,744,613,897,-168,410,561,-143,-815,580,419,699,167,151,-974,388,-429,-816,605,382,698,-777,-280,564,-295,-123,947,197,346,917,-114,625,-773,-38,796,604,-132,810,571,-331,744,-581,200,-81,-976,-255,618,-744,-96,873,-479,374,311,-874,-389,882,266,233,14,-972,-56,925,-375,311,-443,-840,-111,550,828,-368,858,360,906,349,239,653,-54,-755,-119,-981,-153,499,735,460,447,887,117,-506,-447,738,-20,820,572\";\n                      const arr = POINTS_RAW.split(\",\");\n                      const N = arr.length / 3;\n                      const POINTS = new Float32Array(arr.length);\n                      for (let i = 0; i < arr.length; i++) POINTS[i] = +arr[i] / 1000;\n\n                      const canvas = document.getElementById(\"dot-globe\");\n                      const wrap = canvas.parentElement;\n                      const ctx = canvas.getContext(\"2d\");\n\n                      let size = 470;\n                      function resize() {\n                        size = Math.max(1, wrap.clientWidth);\n                        const dpr = Math.min(window.devicePixelRatio || 1, 2);\n                        canvas.width = size * dpr;\n                        canvas.height = size * dpr;\n                        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\n                      }\n                      new ResizeObserver(resize).observe(wrap);\n                      resize();\n\n                      const ROTATION_SECONDS = 24;\n                      const DRAG_SPEED = 0.008;\n                      const MAX_VEL = 8;\n                      const autoSpeed = (Math.PI * 2) / ROTATION_SECONDS;\n\n                      let yaw = 0,\n                        yawVel = 0,\n                        tilt = 0,\n                        dragVel = 0,\n                        dragging = false;\n                      let lastX = 0,\n                        lastY = 0,\n                        lastT = 0;\n\n                      let visible = true;\n                      new IntersectionObserver(\n                        (es) => {\n                          visible = es[0].isIntersecting;\n                        },\n                        { threshold: 0.01 },\n                      ).observe(wrap);\n\n                      let last = performance.now();\n                      function render(now) {\n                        const dt = (now - last) / 1000;\n                        last = now;\n                        if (!dragging) {\n                          yawVel += (autoSpeed - yawVel) * Math.min(1, dt * 1.2);\n                          yaw += yawVel * dt;\n                          tilt += (0 - tilt) * Math.min(1, dt * 4);\n                        }\n                        if (visible) {\n                          const cosA = Math.cos(yaw),\n                            sinA = Math.sin(yaw);\n                          const cosT = Math.cos(tilt),\n                            sinT = Math.sin(tilt);\n                          const cx = size / 2,\n                            cy = size / 2,\n                            r = size / 2 - Math.max(3, size * 0.013);\n                          const dr = Math.max(1, size * 0.0038);\n                          ctx.clearRect(0, 0, size, size);\n                          ctx.fillStyle = \"rgba(127,200,255,0.95)\";\n                          for (let i = 0; i < N; i++) {\n                            const px3 = POINTS[i * 3],\n                              py3 = POINTS[i * 3 + 1],\n                              pz3 = POINTS[i * 3 + 2];\n                            const x = px3 * cosA - pz3 * sinA;\n                            const zy = px3 * sinA + pz3 * cosA;\n                            const y = py3 * cosT - zy * sinT;\n                            const z = py3 * sinT + zy * cosT;\n                            if (z < 0) continue;\n                            ctx.beginPath();\n                            ctx.arc(cx - x * r, cy - y * r, dr, 0, Math.PI * 2);\n                            ctx.fill();\n                          }\n                        }\n                        requestAnimationFrame(render);\n                      }\n\n                      canvas.addEventListener(\"pointerdown\", (e) => {\n                        dragging = true;\n                        lastX = e.clientX;\n                        lastY = e.clientY;\n                        lastT = performance.now();\n                        dragVel = 0;\n                        canvas.style.cursor = \"grabbing\";\n                      });\n                      canvas.addEventListener(\"pointermove\", (e) => {\n                        if (!dragging) return;\n                        const now = performance.now();\n                        const dt = Math.max((now - lastT) / 1000, 1 / 240);\n                        const dx = e.clientX - lastX,\n                          dy = e.clientY - lastY;\n                        lastX = e.clientX;\n                        lastY = e.clientY;\n                        lastT = now;\n                        const dYaw = dx * DRAG_SPEED;\n                        yaw += dYaw;\n                        dragVel = dYaw / dt;\n                        tilt = Math.max(-1.2, Math.min(1.2, tilt + dy * DRAG_SPEED));\n                      });\n                      const release = () => {\n                        if (!dragging) return;\n                        dragging = false;\n                        yawVel = Math.max(-MAX_VEL, Math.min(MAX_VEL, dragVel));\n                        canvas.style.cursor = \"grab\";\n                      };\n                      canvas.addEventListener(\"pointerup\", release);\n                      canvas.addEventListener(\"pointercancel\", release);\n                      canvas.addEventListener(\"pointerleave\", release);\n\n                      requestAnimationFrame(render);\n                    })();" }} />
                </div>
                <div className="careers_about-hiring-right-col">
                  <div className="t-label-1-rg blue-light-900">
                    {"Engineering culture"}
                  </div>
                  <div className="spacer-8" />
                  <h2 className="t-heading-3-rg text-c-blue-light-900">
                    {"Small senior pods that own the whole system"}
                  </h2>
                  <div className="spacer-40 _24-landscape" />
                  <p className="t-paragraph-2-rg">
                    {"\n                    We build around small, senior, cross-functional pods that own a product end to end \u2014\n                    architecture, delivery, and the on-call rotation that keeps it running. Automated testing,\n                    infrastructure-as-code, and continuous delivery are defaults, and every incident becomes a\n                    blameless retrospective that feeds back into tooling and standards.\n                  "}
                  </p>
                  <div className="spacer-32" />
                  <div className="button-group">
                    <a className="button-v2-full-width w-variant-90b6dd41-09af-80c6-647c-dd9797e6ff46 w-inline-block" data-wf--button--variant="primary---big" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%229be1f9e2-08b9-8077-aba2-92459923f6a8%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="9be1f9e2-08b9-8077-aba2-92459923f6a8:cc338c70-b506-f985-732b-95e9d08eb22b" href="/careers">
                      <div className="no-wrap-arrow">
                        {"Join the team"}
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
        </section>
        <div className="v2-navbar-divider" />
        <section className="cta_parrot-section" dark-bg="">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="parrot_cta-wrapper">
                <div className="parrot_cta-left-content">
                  <h3 className="t-heading-3-rg text-c-blue-light-900" text-letters-animation="">
                    {"\n                    Ready to build your next product with confidence?\n                  "}
                  </h3>
                  <div className="spacer-40" />
                  <div className="max-width-80">
                    <p className="t-paragraph-1-rg-twk text-c-blue-light-500">
                      {"\n                      Tell us what you're building and we'll map the fastest reliable path to production.\n                    "}
                    </p>
                  </div>
                  <div className="spacer-32" />
                  <div className="button-group v2">
                    <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%229be1f9e2-08b9-8077-aba2-92459923f6e3%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="9be1f9e2-08b9-8077-aba2-92459923f6e3:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Start a project"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%229be1f9e2-08b9-8077-aba2-92459923f6e5%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="9be1f9e2-08b9-8077-aba2-92459923f6e5:cc338c70-b506-f985-732b-95e9d08eb22b" href="/pricing">
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
                <div className="parrot_wrapper">
                  <div className="w-embed w-script">
                    <div className="parrot-wings" data-flap="" />
                    <style dangerouslySetInnerHTML={{ __html: "\n                      .parrot-wings {\n                        position: relative;\n                        width: 100%;\n                        max-height: 600px;\n                        margin: 0 auto;\n                        aspect-ratio: 1072/960;\n                        overflow: hidden;\n                      }\n                      .parrot-wings canvas {\n                        position: absolute;\n                        inset: 0;\n                        width: 100%;\n                        height: 100%;\n                        display: block;\n                      }\n                    " }} />
                    <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const DOTS = [\n                        1189.8, 102.2, 181.2, 106.6, 189.0, 110.7, 211.5, 116.0, 1177.9, 116.3, 190.4, 120.5, 194.8,\n                        119.8, 172.6, 124.1, 194.7, 124.4, 1194.2, 128.3, 1208.0, 132.9, 163.8, 142.8, 216.4, 142.7,\n                        1159.8, 142.4, 1164.8, 141.5, 1185.8, 142.9, 246.5, 146.6, 1181.2, 146.1, 1194.4, 146.0, 1199.0,\n                        145.8, 185.5, 150.9, 1169.0, 150.7, 1194.0, 150.4, 1203.2, 151.1, 219.8, 156.1, 255.1, 154.7,\n                        1204.1, 155.4, 1208.9, 154.4, 243.0, 159.2, 1155.6, 160.1, 1190.7, 160.4, 1199.5, 160.1, 282.4,\n                        164.6, 1159.5, 164.2, 1177.4, 163.3, 1181.9, 164.2, 1198.8, 164.8, 212.6, 167.9, 269.6, 168.5,\n                        1177.6, 169.2, 1195.3, 169.2, 1207.2, 168.2, 1185.9, 172.5, 230.1, 177.6, 277.4, 177.5, 303.7,\n                        177.3, 1186.3, 177.8, 1199.6, 176.9, 180.6, 181.1, 185.0, 182.0, 1181.5, 181.4, 1189.7, 181.5,\n                        260.0, 186.3, 304.4, 186.5, 339.6, 185.6, 1164.7, 185.4, 1190.7, 186.8, 180.8, 191.0, 276.9,\n                        190.3, 304.1, 190.8, 309.0, 190.2, 1191.2, 190.4, 1195.3, 190.8, 1203.7, 189.8, 211.6, 194.2,\n                        264.6, 195.0, 307.6, 195.0, 312.5, 194.5, 321.6, 195.0, 339.4, 194.1, 1158.9, 194.2, 1172.8,\n                        194.4, 1195.2, 194.8, 1204.0, 194.5, 1208.5, 194.0, 195.0, 199.6, 274.0, 198.6, 290.4, 198.9,\n                        339.4, 199.6, 356.7, 198.7, 1137.2, 200.1, 1164.6, 199.3, 1178.0, 198.8, 1182.3, 199.2, 1185.9,\n                        199.3, 1203.6, 200.1, 1207.8, 199.7, 198.5, 203.0, 215.9, 203.8, 348.4, 203.0, 361.7, 204.4,\n                        1177.4, 203.7, 1198.4, 203.7, 1208.4, 204.2, 225.7, 207.6, 233.4, 207.4, 295.1, 207.2, 333.9,\n                        207.2, 344.0, 207.4, 347.8, 208.6, 1120.5, 208.4, 1142.5, 207.6, 1151.7, 208.0, 1173.2, 208.3,\n                        1186.1, 207.5, 180.6, 213.2, 221.1, 211.6, 238.8, 212.2, 365.1, 212.3, 1150.9, 213.2, 1164.5,\n                        212.0, 1208.4, 211.9, 251.8, 216.1, 361.1, 216.3, 1132.6, 216.8, 1141.8, 217.0, 1164.1, 217.4,\n                        1168.1, 217.5, 1190.0, 216.9, 1194.8, 217.4, 190.3, 220.5, 278.0, 222.0, 1137.4, 221.9, 1150.4,\n                        221.1, 1163.7, 222.0, 1185.9, 220.8, 413.9, 225.1, 1128.8, 224.9, 1155.2, 225.0, 1164.5, 225.3,\n                        1173.7, 226.3, 1190.5, 225.7, 1194.9, 226.0, 163.0, 230.7, 168.0, 230.8, 207.0, 229.4, 260.8,\n                        230.3, 291.3, 230.1, 387.4, 230.3, 434.9, 229.2, 1133.7, 229.3, 1151.2, 230.5, 1155.7, 230.3,\n                        1160.2, 230.3, 1177.0, 230.0, 1181.2, 229.5, 1185.5, 229.3, 1190.8, 230.8, 1195.6, 229.7, 260.9,\n                        235.2, 295.5, 235.0, 299.5, 234.4, 303.9, 234.8, 344.2, 234.6, 349.0, 233.8, 356.7, 234.1,\n                        401.1, 234.2, 427.6, 234.5, 444.8, 234.7, 1129.3, 235.1, 1141.8, 234.7, 1146.3, 233.7, 1158.8,\n                        235.1, 1168.2, 234.6, 1115.6, 239.0, 1133.1, 238.5, 1138.1, 239.1, 1142.2, 239.4, 1146.6, 238.9,\n                        1185.6, 238.9, 1195.4, 239.3, 212.4, 243.9, 331.0, 242.5, 335.0, 243.6, 390.9, 242.4, 417.5,\n                        243.5, 421.8, 243.7, 448.3, 243.6, 1121.0, 243.7, 1125.3, 243.5, 1141.9, 243.9, 1150.3, 242.8,\n                        1182.1, 243.3, 1186.0, 243.5, 330.0, 247.3, 444.4, 247.0, 452.9, 248.0, 1093.4, 247.4, 1137.1,\n                        247.9, 1186.0, 247.6, 1203.7, 247.3, 221.0, 251.6, 343.3, 252.0, 347.9, 251.0, 483.0, 251.9,\n                        487.6, 252.1, 1111.0, 252.3, 1116.5, 252.3, 1159.5, 251.4, 1168.0, 252.7, 1177.5, 252.5, 1199.5,\n                        251.4, 164.2, 256.2, 198.0, 256.5, 373.8, 257.0, 417.7, 257.1, 475.2, 256.6, 1124.2, 255.9,\n                        1129.1, 255.7, 1142.4, 256.1, 177.0, 260.9, 181.4, 261.4, 198.6, 260.5, 220.5, 260.4, 225.5,\n                        260.2, 392.2, 261.0, 426.4, 260.6, 457.5, 261.1, 487.7, 260.6, 1110.7, 260.9, 1115.2, 261.1,\n                        1128.4, 260.0, 1137.2, 260.9, 1141.8, 260.7, 1163.8, 261.0, 176.7, 265.5, 225.1, 265.4, 246.4,\n                        265.8, 401.3, 265.7, 518.6, 265.3, 1085.5, 265.6, 1107.8, 265.2, 1120.4, 264.7, 1133.8, 264.6,\n                        1137.3, 264.9, 1151.5, 265.5, 1168.3, 264.4, 1177.3, 264.3, 246.4, 269.0, 291.2, 269.3, 422.2,\n                        270.2, 466.3, 270.1, 488.1, 269.4, 1085.1, 269.8, 1097.6, 270.1, 1115.5, 270.1, 1128.5, 269.7,\n                        1138.0, 268.8, 1142.1, 269.8, 1147.0, 269.6, 1159.0, 269.5, 1173.4, 270.1, 193.4, 273.4, 216.5,\n                        274.1, 238.7, 273.8, 251.5, 273.4, 264.5, 273.4, 269.2, 274.2, 273.9, 274.7, 452.6, 274.6,\n                        545.1, 274.4, 1084.8, 274.2, 1102.3, 273.5, 1111.0, 274.2, 1119.6, 273.2, 1124.5, 273.4, 1138.0,\n                        274.0, 1145.9, 274.5, 1159.7, 274.1, 1177.3, 273.6, 1185.8, 274.3, 1189.9, 274.1, 202.5, 279.0,\n                        220.5, 277.8, 233.8, 278.4, 465.7, 278.7, 1120.3, 278.1, 1125.3, 278.1, 1136.8, 278.3, 1150.6,\n                        278.9, 1163.9, 277.9, 228.9, 282.7, 234.1, 283.4, 281.2, 282.7, 320.6, 283.1, 360.3, 282.8,\n                        409.7, 282.7, 471.0, 282.9, 487.6, 282.0, 1097.8, 282.5, 1107.1, 283.2, 1124.9, 282.6, 1128.7,\n                        282.5, 1168.3, 283.2, 1172.5, 282.1, 298.9, 287.8, 330.1, 287.6, 479.7, 287.4, 519.3, 287.7,\n                        576.0, 286.8, 1067.2, 287.6, 1088.8, 286.9, 1110.8, 286.5, 1125.4, 287.0, 1129.0, 286.6, 1132.6,\n                        287.1, 1137.3, 287.7, 1155.3, 286.4, 1195.2, 287.4, 255.5, 291.0, 334.3, 290.7, 351.9, 290.6,\n                        356.7, 291.3, 387.3, 291.9, 483.7, 292.3, 549.5, 290.9, 580.2, 292.0, 1076.1, 291.2, 1081.0,\n                        290.9, 1085.3, 290.5, 1089.6, 291.9, 1119.5, 291.6, 1125.2, 290.8, 250.8, 295.8, 281.4, 295.1,\n                        286.4, 295.6, 291.3, 296.3, 334.4, 296.4, 347.9, 296.6, 378.4, 296.3, 401.1, 296.5, 514.6,\n                        296.2, 576.1, 295.8, 597.6, 296.3, 1071.3, 295.9, 1099.0, 295.9, 1133.9, 295.9, 1138.5, 296.3,\n                        1159.3, 296.4, 1177.6, 296.3, 304.6, 301.0, 364.7, 299.6, 382.3, 300.4, 391.1, 299.9, 584.3,\n                        300.7, 590.0, 300.8, 616.0, 300.5, 1054.6, 300.4, 1059.0, 299.6, 1063.4, 299.6, 1067.8, 300.4,\n                        1075.9, 300.6, 1115.4, 300.4, 1146.6, 299.6, 1185.7, 300.5, 320.8, 305.0, 369.5, 303.9, 386.6,\n                        304.5, 444.3, 304.5, 544.7, 304.2, 571.2, 305.4, 624.7, 304.0, 1059.1, 304.5, 1063.2, 304.5,\n                        1068.3, 305.2, 1080.1, 304.3, 1085.7, 304.1, 1097.7, 304.2, 1107.0, 305.0, 1120.3, 303.9,\n                        1125.3, 304.8, 1145.8, 304.3, 1177.4, 305.3, 405.2, 309.2, 409.9, 308.6, 417.6, 308.3, 435.7,\n                        309.2, 461.1, 308.9, 466.5, 309.8, 532.3, 309.3, 567.7, 309.0, 585.1, 309.4, 592.8, 308.7,\n                        601.8, 308.5, 620.5, 309.5, 624.7, 309.5, 1050.1, 308.5, 1055.0, 309.2, 1066.8, 309.7, 1075.5,\n                        309.6, 1089.4, 309.1, 1093.8, 309.7, 1106.6, 309.9, 1111.8, 309.0, 1124.3, 309.8, 300.1, 313.1,\n                        352.8, 313.6, 453.8, 314.0, 483.3, 313.4, 496.3, 313.6, 500.7, 313.7, 579.8, 312.7, 589.7,\n                        314.0, 611.0, 313.5, 619.4, 313.7, 628.5, 312.7, 633.6, 313.9, 638.0, 314.0, 663.2, 314.3,\n                        1041.0, 314.2, 1045.2, 313.5, 1067.4, 314.1, 1111.2, 313.5, 1116.2, 314.3, 1129.5, 313.0,\n                        1155.6, 314.3, 1173.5, 313.9, 193.7, 317.2, 202.2, 318.6, 357.2, 317.9, 374.0, 316.6, 405.3,\n                        318.6, 474.7, 317.5, 501.2, 318.2, 506.3, 318.2, 519.6, 318.0, 558.7, 317.8, 649.9, 318.2,\n                        667.8, 318.6, 681.7, 317.2, 1032.7, 317.3, 1037.3, 318.1, 1049.3, 317.8, 1055.2, 317.2, 1059.2,\n                        318.0, 1076.5, 317.2, 1084.0, 317.2, 1089.0, 318.0, 1098.5, 318.3, 1102.5, 317.6, 1112.2, 317.5,\n                        1138.2, 317.9, 1142.5, 317.4, 1167.9, 317.2, 1181.4, 317.3, 172.2, 322.8, 219.9, 322.3, 373.4,\n                        321.6, 493.5, 322.4, 540.4, 322.4, 620.6, 321.5, 628.7, 322.8, 655.8, 323.1, 663.9, 321.8,\n                        1019.2, 322.2, 1023.4, 322.3, 1027.6, 321.7, 1036.2, 322.3, 1040.6, 322.1, 1050.0, 321.9,\n                        1059.5, 322.1, 1072.2, 322.6, 1081.3, 322.9, 1089.0, 322.2, 1093.7, 321.5, 1111.0, 321.8,\n                        1133.3, 322.7, 1168.0, 322.5, 391.3, 327.1, 404.8, 327.4, 465.9, 326.7, 528.2, 326.1, 532.8,\n                        327.3, 580.8, 326.0, 593.0, 326.4, 606.2, 326.6, 654.5, 327.2, 672.6, 327.0, 690.2, 326.3,\n                        694.7, 327.1, 699.7, 326.4, 1010.5, 326.8, 1023.9, 327.4, 1028.2, 326.6, 1032.2, 327.3, 1041.1,\n                        326.0, 1046.1, 327.0, 1054.5, 327.5, 1063.5, 327.5, 1084.5, 326.6, 1097.3, 325.4, 1101.9, 326.7,\n                        1128.4, 326.5, 1134.3, 327.6, 1159.1, 325.9, 1164.0, 327.0, 242.7, 330.3, 255.9, 331.7, 365.4,\n                        330.8, 413.0, 330.8, 431.8, 331.6, 545.0, 331.8, 567.7, 330.8, 575.8, 330.2, 588.4, 330.7,\n                        593.4, 331.7, 602.9, 330.6, 624.2, 330.8, 726.0, 330.3, 747.3, 331.9, 1010.0, 331.9, 1014.7,\n                        331.2, 1032.3, 332.0, 1050.2, 331.3, 1063.5, 332.3, 1085.4, 331.0, 1103.2, 330.8, 1119.4, 331.2,\n                        430.2, 336.4, 584.4, 336.3, 597.9, 335.7, 620.3, 336.1, 625.0, 335.8, 733.6, 334.7, 738.4,\n                        335.3, 755.5, 335.3, 1006.7, 335.9, 1015.3, 335.5, 1022.8, 335.9, 1041.1, 334.7, 1055.0, 334.7,\n                        1067.3, 335.6, 1075.9, 335.1, 1098.7, 335.4, 1106.2, 336.0, 1111.7, 334.9, 1185.8, 334.6, 172.4,\n                        339.5, 225.4, 339.9, 291.3, 339.6, 294.9, 339.9, 479.7, 339.2, 527.5, 339.2, 562.7, 340.2,\n                        576.3, 340.3, 650.2, 339.9, 663.4, 339.2, 668.2, 339.4, 755.2, 340.5, 760.1, 339.7, 782.7,\n                        339.7, 1002.4, 339.6, 1006.5, 340.6, 1011.5, 340.1, 1027.9, 339.6, 1033.1, 339.2, 1040.5, 339.9,\n                        1045.7, 340.0, 1049.8, 340.3, 1058.7, 339.6, 1063.1, 339.0, 1067.4, 339.6, 1081.4, 340.6,\n                        1085.1, 339.2, 1088.9, 340.5, 1137.6, 339.2, 1159.4, 340.3, 238.2, 344.8, 430.9, 344.4, 505.5,\n                        344.3, 513.9, 344.9, 554.8, 344.2, 580.8, 344.9, 672.1, 344.8, 690.3, 343.6, 725.7, 344.2,\n                        737.7, 344.8, 772.7, 343.6, 778.2, 344.7, 786.6, 344.7, 791.3, 344.9, 800.0, 345.0, 804.5,\n                        344.9, 996.7, 344.5, 1002.4, 344.5, 1005.5, 344.3, 1010.9, 344.6, 1019.1, 343.4, 1028.8, 343.9,\n                        1041.1, 344.0, 1045.6, 344.1, 1062.6, 344.0, 1090.5, 344.1, 1120.6, 344.7, 1124.4, 343.9,\n                        1138.1, 344.0, 1146.0, 344.8, 1177.1, 344.7, 347.3, 349.3, 522.8, 347.8, 531.4, 348.5, 593.3,\n                        349.1, 760.8, 348.0, 782.8, 348.0, 791.4, 348.3, 795.3, 347.8, 799.5, 349.4, 808.2, 348.0,\n                        813.7, 349.2, 992.3, 348.4, 996.6, 348.7, 1005.9, 349.3, 1010.7, 348.2, 1015.2, 347.9, 1019.6,\n                        349.2, 1023.3, 349.2, 1037.1, 349.2, 1041.1, 348.8, 1044.9, 348.1, 1054.2, 349.0, 1058.9, 348.5,\n                        1106.5, 349.4, 1137.7, 348.3, 211.5, 352.4, 361.5, 353.2, 369.0, 353.5, 479.1, 352.8, 594.0,\n                        353.7, 680.5, 352.4, 685.1, 353.5, 690.0, 353.1, 764.1, 352.6, 787.0, 352.2, 795.1, 353.3,\n                        804.4, 353.1, 812.2, 352.8, 817.4, 353.1, 821.0, 352.9, 993.3, 352.7, 997.6, 353.1, 1015.2,\n                        353.0, 1019.2, 353.6, 1023.8, 353.1, 1037.2, 353.3, 1041.0, 354.0, 1044.8, 353.5, 1059.3, 353.0,\n                        1067.0, 353.0, 1076.2, 352.7, 1081.2, 352.5, 207.3, 357.7, 299.6, 357.6, 378.9, 356.8, 386.6,\n                        356.7, 502.1, 357.2, 628.3, 357.6, 646.7, 358.2, 659.4, 357.0, 667.7, 357.8, 698.9, 357.4,\n                        702.9, 357.0, 716.6, 358.1, 755.8, 358.0, 778.7, 358.2, 805.0, 357.6, 816.6, 357.6, 822.0,\n                        357.2, 825.9, 357.8, 829.8, 357.7, 988.8, 357.9, 993.3, 357.3, 1005.6, 357.0, 1010.2, 357.5,\n                        1023.7, 357.1, 1027.9, 357.9, 1032.8, 356.9, 1053.7, 358.1, 1058.8, 357.1, 1063.0, 358.0,\n                        1071.2, 358.0, 1080.2, 357.6, 1085.4, 356.6, 1128.7, 356.7, 238.8, 361.2, 418.7, 361.8, 426.2,\n                        362.0, 536.0, 362.0, 544.6, 361.4, 628.0, 362.5, 677.7, 361.6, 721.4, 361.9, 751.3, 362.6,\n                        804.3, 362.5, 817.6, 362.0, 822.0, 362.5, 829.8, 361.0, 838.6, 362.4, 984.3, 362.1, 989.4,\n                        361.7, 997.4, 362.0, 1001.7, 361.7, 1006.0, 361.7, 1032.7, 362.3, 1058.3, 362.5, 1072.5, 361.3,\n                        1119.9, 361.4, 1134.0, 361.0, 1142.1, 362.6, 356.1, 367.0, 458.2, 366.3, 576.5, 365.7, 584.1,\n                        366.4, 673.1, 365.4, 677.4, 367.3, 729.0, 365.9, 786.1, 365.8, 794.9, 366.1, 835.3, 365.8,\n                        839.5, 366.7, 856.8, 366.6, 983.4, 366.0, 992.6, 366.8, 997.2, 367.0, 1010.6, 366.2, 1015.4,\n                        365.4, 1033.0, 365.4, 1067.7, 365.7, 1071.4, 365.5, 225.6, 371.1, 277.2, 371.1, 374.4, 369.8,\n                        382.7, 369.9, 493.2, 370.1, 641.7, 370.8, 717.3, 371.2, 742.6, 370.6, 750.9, 370.1, 755.6,\n                        369.9, 786.5, 371.1, 790.9, 371.0, 808.7, 371.3, 825.9, 370.5, 838.5, 371.4, 843.3, 371.3,\n                        848.5, 370.3, 865.0, 370.9, 979.6, 370.5, 983.8, 370.1, 988.8, 370.9, 997.1, 371.0, 1001.6,\n                        371.1, 1006.1, 371.0, 1010.2, 370.1, 1014.7, 370.0, 1023.5, 370.5, 1028.4, 370.7, 1037.2, 370.4,\n                        1041.3, 370.6, 1045.7, 371.5, 1049.8, 370.1, 1054.6, 369.8, 1059.4, 369.8, 1068.4, 370.3,\n                        1085.5, 369.8, 1088.8, 369.9, 1093.5, 370.3, 1111.3, 370.0, 1119.8, 371.2, 1124.2, 371.3,\n                        1150.7, 370.3, 233.8, 375.0, 404.5, 375.5, 417.8, 375.8, 474.5, 375.5, 549.0, 374.6, 689.6,\n                        374.3, 768.6, 374.9, 822.0, 374.4, 835.2, 375.2, 848.6, 375.1, 852.6, 375.2, 970.7, 375.5,\n                        975.7, 374.9, 979.9, 375.8, 984.2, 375.8, 988.9, 375.3, 993.7, 374.9, 997.8, 375.6, 1002.0,\n                        375.7, 1010.5, 375.3, 1036.2, 375.6, 1040.6, 374.4, 1089.8, 374.2, 1142.1, 375.1, 1151.0, 375.4,\n                        246.8, 379.0, 436.3, 379.4, 445.1, 380.1, 448.3, 380.0, 615.7, 380.1, 623.6, 380.1, 646.3,\n                        380.1, 720.8, 379.2, 739.1, 380.0, 799.8, 378.8, 826.9, 378.8, 839.9, 379.7, 847.9, 379.5,\n                        852.5, 379.7, 856.9, 378.5, 861.5, 378.9, 966.8, 378.6, 970.5, 380.0, 984.4, 379.6, 988.8,\n                        379.4, 1002.5, 379.8, 1019.9, 379.6, 1032.2, 379.1, 1046.0, 378.9, 1125.3, 379.6, 1159.4, 379.8,\n                        255.5, 383.4, 360.5, 384.1, 479.2, 383.6, 519.0, 383.3, 522.7, 384.5, 619.9, 383.0, 641.1,\n                        383.9, 778.3, 383.5, 807.8, 384.0, 816.6, 383.5, 843.3, 383.7, 847.6, 384.0, 856.0, 383.8,\n                        861.6, 383.9, 865.7, 383.0, 883.1, 384.1, 957.1, 383.9, 970.9, 383.9, 974.8, 383.9, 979.6,\n                        383.7, 983.6, 383.1, 1002.4, 384.3, 1010.2, 383.8, 1019.3, 384.0, 1023.7, 383.9, 1037.2, 382.9,\n                        1045.3, 383.6, 1089.8, 384.3, 1123.8, 383.7, 273.8, 387.7, 392.3, 387.7, 558.9, 388.0, 571.8,\n                        388.5, 593.9, 388.7, 615.6, 388.4, 637.7, 389.0, 651.1, 388.1, 659.5, 387.6, 800.4, 388.3,\n                        813.3, 388.6, 843.2, 389.1, 847.9, 388.8, 852.6, 388.5, 857.1, 388.1, 861.5, 389.0, 866.0,\n                        388.5, 869.6, 387.9, 874.9, 387.5, 878.8, 387.9, 883.9, 388.2, 896.7, 387.6, 927.6, 388.1,\n                        952.8, 387.4, 962.4, 387.8, 966.6, 387.9, 970.9, 388.2, 975.4, 388.9, 979.8, 388.1, 984.4,\n                        387.8, 988.9, 388.9, 996.7, 387.9, 1002.3, 388.8, 1024.5, 388.2, 1036.3, 387.9, 1119.7, 387.2,\n                        1160.1, 388.1, 417.2, 392.4, 435.2, 392.6, 554.1, 392.2, 720.7, 392.6, 795.8, 392.5, 817.4,\n                        391.9, 826.6, 391.8, 839.4, 392.5, 847.3, 392.9, 851.9, 393.0, 856.4, 392.8, 861.0, 392.8,\n                        870.3, 393.2, 879.6, 392.8, 886.8, 392.6, 891.8, 393.0, 896.0, 392.2, 900.2, 393.4, 914.1,\n                        392.8, 935.6, 392.8, 941.0, 393.2, 948.6, 392.7, 953.5, 392.7, 957.3, 392.9, 961.8, 392.6,\n                        966.6, 392.8, 984.1, 392.7, 992.9, 393.0, 1023.4, 393.2, 1049.4, 392.3, 1054.8, 392.3, 1059.0,\n                        392.1, 1094.3, 393.3, 1120.6, 391.8, 1146.8, 393.1, 1163.6, 391.9, 703.6, 397.3, 711.6, 397.7,\n                        725.1, 396.4, 768.5, 396.8, 803.9, 396.5, 826.9, 397.2, 848.9, 397.7, 858.2, 396.6, 874.2,\n                        396.1, 878.9, 397.3, 883.8, 397.8, 888.1, 397.7, 892.0, 397.3, 895.8, 396.3, 901.3, 397.0,\n                        909.1, 397.6, 919.1, 397.1, 923.3, 397.7, 927.0, 396.5, 931.5, 396.8, 935.5, 396.7, 940.7,\n                        397.2, 953.6, 396.4, 961.9, 397.3, 971.8, 397.6, 992.1, 397.6, 1005.5, 395.7, 1010.0, 397.5,\n                        1019.4, 397.5, 1053.6, 397.5, 1058.1, 396.2, 1062.7, 396.4, 1067.2, 397.4, 1138.2, 397.7,\n                        1155.7, 396.4, 281.6, 401.9, 546.0, 400.9, 606.4, 401.6, 619.7, 401.0, 667.4, 401.7, 751.8,\n                        400.9, 756.1, 401.7, 759.9, 401.2, 765.1, 401.2, 772.9, 400.6, 808.1, 400.9, 812.2, 401.4,\n                        830.8, 401.2, 835.3, 400.9, 843.0, 401.7, 856.5, 400.9, 861.7, 401.8, 869.4, 400.8, 873.9,\n                        400.7, 878.7, 401.8, 883.3, 402.3, 892.4, 401.6, 896.8, 401.6, 909.8, 402.0, 922.7, 400.7,\n                        926.5, 400.5, 931.7, 401.3, 936.4, 401.3, 948.8, 402.0, 957.5, 401.1, 979.0, 401.0, 984.7,\n                        400.6, 1005.3, 401.4, 1028.3, 400.8, 1058.2, 401.9, 1063.1, 401.6, 1085.7, 401.9, 365.1, 406.1,\n                        694.6, 406.6, 715.7, 405.3, 725.7, 406.3, 742.9, 405.7, 756.1, 405.6, 760.0, 406.1, 769.0,\n                        405.8, 781.5, 405.0, 799.8, 406.1, 812.7, 405.5, 816.9, 405.4, 848.5, 406.5, 852.6, 406.0,\n                        856.3, 405.2, 866.4, 406.5, 874.0, 406.4, 896.1, 406.5, 900.3, 405.1, 908.9, 405.1, 914.4,\n                        405.0, 917.7, 405.9, 926.7, 405.3, 931.3, 406.0, 935.9, 405.6, 939.5, 405.9, 953.3, 406.4,\n                        962.6, 405.6, 966.9, 405.9, 971.0, 406.0, 975.1, 405.4, 992.4, 405.2, 997.0, 405.2, 1002.3,\n                        406.4, 1010.8, 405.5, 1023.6, 405.5, 1036.7, 405.6, 1054.7, 406.3, 1076.2, 406.4, 1106.5, 406.2,\n                        1120.9, 405.0, 1133.1, 405.5, 1138.1, 405.7, 387.9, 409.4, 401.0, 410.3, 466.1, 410.1, 470.9,\n                        409.9, 649.8, 409.7, 663.6, 410.7, 681.0, 409.8, 686.1, 410.0, 693.9, 409.8, 756.4, 410.7,\n                        777.3, 411.1, 782.0, 409.9, 803.4, 409.6, 825.7, 409.8, 834.5, 410.0, 843.1, 409.3, 851.7,\n                        409.8, 856.7, 410.4, 878.6, 409.9, 887.7, 410.6, 901.0, 410.6, 905.8, 409.6, 913.2, 410.5,\n                        919.1, 409.9, 923.3, 410.8, 927.1, 409.4, 940.7, 409.8, 944.7, 409.5, 953.6, 410.6, 958.2,\n                        410.6, 963.0, 410.2, 975.9, 409.6, 979.1, 410.3, 988.1, 410.1, 996.5, 409.8, 1014.7, 409.8,\n                        1019.1, 410.6, 1054.5, 410.3, 1071.6, 410.1, 1081.1, 410.0, 1120.3, 409.5, 453.5, 413.7, 491.9,\n                        414.7, 497.3, 414.6, 514.2, 414.8, 550.4, 414.5, 558.8, 415.3, 588.5, 414.9, 611.8, 415.0,\n                        614.9, 414.0, 620.4, 414.6, 794.7, 415.0, 803.9, 414.6, 813.0, 414.7, 822.2, 414.6, 826.8,\n                        414.9, 834.1, 414.5, 853.3, 413.8, 861.8, 414.5, 865.7, 413.6, 870.7, 414.5, 882.7, 414.2,\n                        905.9, 414.6, 910.0, 414.9, 914.4, 415.0, 922.2, 414.4, 926.7, 415.0, 930.8, 414.5, 936.3,\n                        414.2, 944.5, 414.1, 953.0, 415.2, 966.5, 414.2, 971.4, 414.5, 980.6, 415.1, 992.7, 414.2,\n                        1024.4, 414.8, 1050.4, 414.4, 1067.4, 415.3, 1102.5, 414.3, 1137.9, 414.8, 322.1, 418.8, 593.4,\n                        418.9, 597.5, 418.2, 760.0, 419.2, 765.1, 418.6, 772.7, 418.9, 778.6, 418.4, 795.8, 418.9,\n                        816.9, 418.4, 853.0, 418.1, 856.6, 418.8, 861.4, 418.7, 865.7, 419.5, 892.3, 419.2, 896.5,\n                        418.9, 904.8, 418.6, 917.7, 418.6, 923.2, 418.7, 939.4, 419.1, 944.0, 418.4, 948.6, 418.9,\n                        953.7, 419.9, 962.7, 418.4, 993.7, 419.5, 1006.4, 419.4, 1027.5, 418.6, 1036.0, 419.7, 1044.8,\n                        418.6, 1080.6, 418.7, 1107.7, 418.3, 1120.9, 419.0, 672.5, 423.4, 676.4, 423.0, 686.5, 422.8,\n                        695.0, 424.0, 774.0, 423.5, 786.5, 422.5, 799.7, 423.3, 808.3, 423.2, 813.6, 423.5, 817.2,\n                        422.8, 835.5, 423.5, 861.4, 422.7, 883.5, 423.3, 888.4, 422.5, 901.2, 423.4, 914.4, 423.8,\n                        918.9, 423.4, 922.9, 423.0, 927.0, 423.4, 943.9, 423.1, 958.7, 423.8, 965.9, 423.2, 984.3,\n                        422.8, 1011.1, 423.3, 1019.9, 423.7, 1054.5, 423.7, 584.3, 427.1, 624.7, 427.3, 663.4, 427.2,\n                        673.4, 427.5, 760.3, 427.1, 764.8, 427.3, 791.0, 428.0, 808.4, 428.1, 813.3, 427.2, 817.6,\n                        427.4, 825.2, 427.1, 829.8, 428.0, 870.9, 426.9, 883.6, 428.2, 892.0, 427.1, 908.8, 427.8,\n                        913.2, 428.0, 918.2, 428.1, 923.4, 427.6, 935.3, 426.9, 939.6, 427.7, 944.5, 427.5, 971.7,\n                        428.3, 975.9, 426.9, 997.5, 427.3, 1001.7, 427.5, 1066.8, 427.0, 255.2, 432.1, 287.0, 431.6,\n                        400.5, 431.3, 409.8, 432.6, 440.0, 432.9, 637.9, 432.5, 650.8, 432.2, 655.6, 431.9, 673.2,\n                        432.6, 680.7, 431.5, 694.2, 431.7, 712.1, 431.3, 759.8, 431.3, 777.2, 432.4, 786.9, 432.1,\n                        795.1, 431.3, 800.6, 432.9, 817.3, 432.5, 843.1, 431.7, 869.5, 431.4, 878.8, 431.9, 887.8,\n                        432.5, 891.5, 431.4, 897.0, 432.4, 900.9, 431.4, 905.4, 431.4, 910.2, 432.7, 915.0, 432.1,\n                        923.3, 431.6, 926.9, 431.7, 957.1, 431.5, 962.4, 431.3, 971.9, 432.2, 976.0, 431.7, 979.7,\n                        433.1, 989.4, 432.6, 1001.3, 432.5, 1015.6, 431.9, 1019.6, 432.9, 1068.2, 432.8, 255.2, 437.0,\n                        483.5, 436.2, 488.8, 436.9, 527.3, 436.9, 537.3, 436.8, 545.0, 436.6, 571.7, 437.0, 575.8,\n                        436.9, 584.1, 436.9, 589.5, 435.8, 603.1, 436.7, 694.9, 436.2, 703.1, 436.4, 764.9, 435.9,\n                        782.7, 436.4, 787.4, 437.0, 813.2, 437.3, 821.1, 436.9, 834.2, 436.3, 860.1, 436.5, 864.9,\n                        436.6, 888.0, 436.3, 892.7, 436.3, 901.0, 437.1, 913.7, 436.6, 932.2, 436.7, 939.7, 436.9,\n                        952.7, 436.3, 970.2, 436.1, 983.8, 435.9, 992.7, 437.0, 1006.7, 436.2, 1023.9, 436.1, 1036.1,\n                        435.8, 1076.5, 437.0, 1081.2, 436.7, 1110.7, 435.9, 1137.7, 437.2, 479.3, 440.3, 496.3, 440.2,\n                        620.4, 440.1, 641.4, 440.3, 650.5, 440.1, 654.8, 440.2, 663.3, 440.8, 712.1, 440.8, 717.0,\n                        440.1, 747.1, 440.2, 790.5, 440.5, 860.7, 441.6, 865.5, 440.1, 879.2, 440.4, 887.7, 441.1,\n                        905.2, 441.1, 913.5, 441.3, 931.7, 441.4, 953.0, 441.3, 957.3, 440.4, 974.7, 440.6, 983.7,\n                        440.9, 992.8, 441.5, 997.7, 440.7, 1023.3, 440.5, 1041.4, 441.4, 1067.5, 440.1, 1089.0, 440.6,\n                        356.6, 444.9, 382.7, 444.5, 396.8, 444.8, 423.1, 445.0, 439.7, 445.2, 452.5, 445.6, 708.2,\n                        445.8, 738.1, 445.3, 751.6, 444.8, 778.6, 445.2, 790.4, 446.1, 844.2, 445.2, 869.6, 444.8,\n                        875.2, 446.0, 905.0, 445.1, 923.5, 445.9, 936.5, 444.7, 953.8, 445.8, 967.2, 444.4, 984.2,\n                        445.7, 1023.2, 445.9, 1027.9, 446.1, 1049.9, 445.7, 1076.0, 444.7, 1098.3, 444.5, 1133.2, 446.0,\n                        396.1, 449.0, 535.8, 449.5, 642.5, 450.2, 703.7, 450.0, 716.3, 449.3, 720.8, 449.5, 729.7,\n                        448.9, 764.0, 449.3, 773.6, 449.1, 778.2, 450.1, 782.6, 449.3, 787.0, 450.4, 804.9, 450.2,\n                        821.3, 449.7, 826.6, 450.1, 852.5, 449.0, 861.6, 448.9, 878.2, 450.1, 883.3, 449.6, 917.6,\n                        449.0, 953.9, 450.3, 971.1, 449.1, 979.4, 448.9, 983.4, 450.3, 988.1, 449.9, 1001.6, 449.4,\n                        1036.0, 449.2, 1050.6, 449.5, 1067.7, 449.1, 1093.7, 450.1, 225.7, 454.2, 229.3, 453.3, 312.8,\n                        453.8, 484.0, 454.8, 606.6, 454.4, 611.7, 454.7, 615.9, 454.8, 619.9, 453.3, 685.9, 454.4,\n                        698.2, 454.9, 746.7, 454.3, 756.5, 454.8, 764.6, 453.6, 768.4, 454.4, 790.5, 454.4, 826.2,\n                        455.1, 848.2, 454.1, 873.8, 453.3, 883.9, 454.6, 888.2, 453.4, 908.7, 453.8, 927.1, 454.3,\n                        944.5, 454.6, 949.8, 453.3, 953.6, 455.6, 957.7, 453.9, 1011.1, 453.8, 1037.5, 454.0, 1041.9,\n                        453.8, 1050.2, 454.4, 1072.6, 453.4, 1107.3, 453.8, 356.3, 457.8, 360.7, 459.2, 365.2, 459.2,\n                        369.6, 458.4, 461.8, 459.1, 471.0, 458.1, 676.3, 459.1, 680.5, 458.0, 725.3, 459.1, 729.9,\n                        458.2, 756.7, 459.4, 800.3, 457.8, 809.3, 458.0, 818.2, 458.7, 834.4, 459.1, 843.7, 457.9,\n                        856.2, 457.8, 870.0, 458.0, 874.9, 458.1, 879.2, 458.4, 900.2, 458.5, 945.5, 459.2, 970.3,\n                        458.5, 987.8, 458.2, 1022.8, 459.0, 1027.7, 458.7, 1036.8, 458.3, 1041.6, 458.6, 1062.7, 458.7,\n                        1090.1, 458.7, 412.9, 462.3, 527.5, 463.6, 567.5, 462.1, 778.1, 463.5, 803.8, 462.9, 817.4,\n                        463.5, 826.6, 463.4, 835.5, 463.6, 847.3, 463.0, 851.9, 462.6, 857.2, 462.8, 869.7, 463.0,\n                        874.1, 463.6, 878.9, 463.0, 883.8, 462.3, 896.8, 462.9, 913.2, 462.7, 949.5, 463.3, 954.0,\n                        463.1, 966.0, 462.4, 970.6, 462.9, 993.5, 463.3, 996.7, 462.8, 1005.7, 463.1, 1015.0, 463.0,\n                        1027.4, 463.5, 1050.8, 462.4, 483.5, 467.9, 519.3, 467.0, 523.8, 466.6, 528.1, 467.6, 532.5,\n                        466.5, 628.5, 467.3, 637.8, 466.4, 645.8, 467.3, 698.1, 468.1, 704.1, 466.6, 715.9, 466.8,\n                        720.2, 467.0, 725.6, 467.3, 733.2, 467.6, 742.0, 467.5, 755.5, 467.8, 834.7, 467.5, 838.8,\n                        467.9, 851.9, 466.7, 873.8, 467.0, 883.2, 468.0, 949.1, 467.4, 953.9, 467.1, 971.4, 467.3,\n                        1020.0, 466.6, 1036.2, 466.4, 1041.9, 466.5, 1053.6, 467.5, 1058.5, 467.9, 1063.3, 467.2,\n                        1072.1, 467.8, 1077.1, 467.4, 1103.0, 467.1, 378.4, 472.1, 611.1, 471.2, 627.9, 471.7, 703.9,\n                        472.2, 725.1, 471.9, 756.6, 471.6, 817.3, 470.9, 870.5, 472.3, 873.8, 471.3, 887.2, 472.3,\n                        917.9, 471.0, 967.1, 471.9, 980.4, 471.1, 984.7, 471.7, 988.3, 472.2, 1002.0, 472.4, 1023.0,\n                        472.1, 1049.3, 472.3, 1067.0, 472.1, 303.7, 475.9, 316.8, 476.8, 409.7, 476.7, 427.6, 475.6,\n                        462.3, 476.7, 588.4, 476.0, 667.9, 476.6, 695.0, 476.2, 711.6, 476.2, 791.9, 475.7, 796.6,\n                        476.0, 808.2, 476.6, 848.5, 475.7, 853.3, 476.0, 861.4, 475.6, 875.2, 476.2, 944.2, 476.4,\n                        948.3, 475.8, 962.9, 476.2, 979.2, 476.4, 1041.1, 476.8, 1068.2, 476.4, 321.6, 480.3, 531.7,\n                        480.3, 554.2, 479.9, 558.9, 480.6, 598.1, 480.1, 654.6, 479.7, 664.0, 481.2, 685.5, 479.8,\n                        699.1, 480.4, 704.1, 479.9, 787.2, 480.2, 835.6, 480.8, 839.9, 480.6, 843.8, 481.1, 848.1,\n                        481.3, 861.0, 479.8, 874.9, 480.7, 883.4, 479.7, 948.3, 481.2, 974.8, 481.1, 997.9, 480.7,\n                        1024.3, 480.8, 1031.6, 481.2, 1037.2, 481.1, 1049.7, 479.8, 1066.9, 481.1, 382.6, 484.9, 404.6,\n                        484.0, 408.4, 485.6, 452.4, 485.2, 514.7, 484.7, 566.9, 485.5, 611.0, 485.8, 614.9, 484.1,\n                        655.8, 484.3, 681.2, 485.3, 699.2, 485.2, 716.0, 485.3, 720.7, 484.4, 729.3, 485.1, 813.2,\n                        485.6, 839.1, 485.5, 856.5, 485.4, 869.3, 484.4, 874.3, 485.2, 926.7, 484.5, 944.1, 484.2,\n                        948.6, 485.6, 966.3, 484.9, 970.7, 484.9, 1005.7, 485.0, 1023.2, 484.6, 1045.4, 484.8, 352.6,\n                        489.5, 396.3, 489.2, 457.3, 489.7, 537.2, 488.1, 553.6, 489.2, 594.0, 489.2, 623.7, 489.5,\n                        690.4, 488.7, 699.5, 489.4, 769.6, 489.8, 790.9, 488.7, 843.5, 490.0, 861.4, 488.4, 875.0,\n                        488.4, 953.1, 489.4, 965.6, 489.6, 993.8, 489.2, 247.0, 493.7, 382.5, 493.9, 426.5, 494.1,\n                        430.5, 493.3, 523.3, 493.5, 531.6, 493.3, 536.2, 492.8, 593.8, 494.0, 597.7, 492.4, 638.1,\n                        494.4, 650.5, 492.9, 681.5, 493.0, 716.8, 494.2, 733.6, 494.2, 764.2, 493.9, 777.1, 492.8,\n                        799.5, 493.0, 804.2, 493.3, 822.6, 494.2, 839.0, 493.2, 852.3, 494.4, 869.4, 493.8, 949.1,\n                        492.9, 958.0, 493.8, 965.7, 493.5, 980.6, 492.9, 1009.8, 494.4, 1019.8, 493.8, 193.8, 498.3,\n                        400.7, 498.4, 444.6, 497.4, 479.2, 497.6, 588.8, 498.7, 593.5, 498.8, 597.6, 497.3, 601.6,\n                        498.5, 659.0, 498.4, 677.3, 497.9, 689.3, 497.9, 742.4, 498.4, 791.7, 498.2, 795.8, 498.8,\n                        830.3, 498.1, 857.4, 498.4, 861.3, 498.4, 865.2, 497.4, 879.6, 498.8, 940.7, 497.9, 953.0,\n                        498.0, 966.6, 497.9, 975.5, 498.6, 987.6, 497.7, 992.6, 498.1, 997.1, 497.5, 1033.0, 497.4,\n                        1041.2, 498.1, 475.7, 502.5, 480.0, 502.5, 624.8, 503.1, 765.6, 502.1, 777.4, 502.5, 800.4,\n                        502.1, 834.7, 502.0, 839.8, 502.9, 966.2, 502.1, 979.7, 502.4, 997.2, 502.2, 1036.8, 502.4,\n                        439.3, 506.5, 571.7, 506.1, 575.8, 506.2, 625.0, 507.5, 638.1, 506.5, 756.6, 506.5, 763.8,\n                        506.9, 781.8, 507.5, 796.0, 507.2, 804.1, 506.7, 848.4, 507.4, 865.8, 507.5, 874.0, 506.4,\n                        936.2, 507.5, 949.2, 506.6, 952.9, 507.1, 975.5, 506.6, 979.8, 507.2, 984.1, 506.7, 992.6,\n                        506.9, 1020.0, 506.3, 1093.4, 506.1, 401.1, 511.4, 404.8, 510.8, 440.3, 511.4, 523.0, 511.1,\n                        619.4, 511.3, 702.6, 510.5, 708.4, 510.8, 720.2, 511.2, 725.8, 510.5, 760.9, 511.6, 777.2,\n                        511.1, 799.5, 511.3, 821.2, 510.4, 825.4, 511.6, 843.3, 511.2, 861.9, 510.7, 953.8, 511.4,\n                        958.4, 510.3, 970.2, 510.6, 1010.5, 511.8, 260.5, 515.7, 387.8, 514.9, 400.0, 515.2, 677.1,\n                        516.3, 768.9, 516.1, 786.0, 516.4, 826.4, 514.9, 830.1, 515.2, 835.2, 515.6, 865.5, 516.1,\n                        953.5, 515.9, 957.2, 515.0, 971.7, 515.9, 976.2, 515.8, 984.5, 514.8, 1019.8, 515.9, 199.1,\n                        519.8, 259.9, 519.5, 299.7, 519.8, 313.0, 520.8, 347.4, 519.5, 607.1, 519.6, 655.2, 519.7,\n                        672.7, 520.4, 725.5, 520.4, 782.6, 519.3, 786.1, 520.1, 790.6, 520.7, 800.1, 520.5, 821.2,\n                        519.9, 869.7, 520.3, 939.8, 519.3, 957.5, 520.5, 975.5, 520.3, 979.4, 520.3, 983.8, 519.3,\n                        1010.5, 520.0, 1014.5, 520.3, 1028.0, 519.7, 1050.6, 519.8, 488.5, 524.9, 492.5, 524.3, 557.7,\n                        524.2, 638.1, 525.2, 685.4, 525.1, 698.0, 523.9, 721.2, 524.0, 734.2, 523.8, 787.5, 524.2,\n                        804.3, 524.6, 821.0, 524.9, 826.5, 525.2, 857.2, 524.7, 861.7, 524.0, 948.4, 523.5, 966.4,\n                        524.5, 983.7, 523.9, 1005.8, 524.0, 1019.0, 523.6, 1041.5, 524.1, 1045.8, 524.0, 1050.3, 524.2,\n                        488.9, 528.3, 493.2, 528.8, 629.4, 528.6, 672.5, 529.4, 699.2, 528.9, 747.6, 528.5, 760.5,\n                        529.2, 839.4, 529.4, 856.1, 529.2, 949.1, 528.0, 958.5, 528.1, 980.5, 528.2, 989.4, 528.9,\n                        1010.8, 528.3, 1019.5, 528.4, 549.4, 533.1, 650.6, 532.8, 742.1, 533.8, 768.5, 532.5, 791.4,\n                        532.4, 852.7, 532.5, 949.1, 532.7, 966.2, 533.1, 1015.5, 533.0, 1063.5, 533.0, 413.5, 536.8,\n                        532.5, 536.9, 651.0, 537.0, 672.4, 537.1, 685.3, 538.1, 693.7, 538.0, 729.1, 536.8, 747.2,\n                        537.0, 777.2, 538.1, 800.3, 538.2, 830.3, 537.0, 843.8, 537.1, 857.5, 538.0, 865.3, 536.7,\n                        935.6, 536.9, 953.6, 537.7, 962.1, 537.3, 979.6, 537.0, 365.8, 541.3, 404.5, 542.4, 510.5,\n                        541.4, 646.3, 541.9, 650.8, 541.1, 681.3, 541.6, 734.4, 541.9, 759.9, 542.1, 808.7, 542.1,\n                        813.8, 541.7, 838.8, 542.6, 843.2, 541.3, 847.5, 542.1, 851.8, 541.8, 957.0, 542.3, 961.8,\n                        541.3, 980.4, 542.1, 1001.0, 541.7, 343.8, 545.6, 410.1, 546.2, 422.4, 546.4, 440.5, 546.4,\n                        584.6, 547.0, 650.0, 545.8, 725.3, 546.6, 737.7, 545.5, 803.5, 547.1, 830.0, 546.7, 848.3,\n                        546.0, 855.8, 546.1, 971.7, 545.6, 975.6, 546.2, 980.5, 545.9, 1045.0, 546.7, 404.8, 550.5,\n                        629.4, 551.5, 751.5, 550.9, 799.0, 550.0, 803.6, 551.5, 808.9, 550.0, 813.0, 551.2, 830.3,\n                        551.6, 840.1, 550.3, 844.5, 551.4, 857.5, 550.8, 962.6, 550.0, 971.4, 550.2, 979.6, 551.1,\n                        256.0, 555.5, 457.8, 554.8, 659.7, 555.1, 708.4, 555.3, 716.0, 554.9, 720.5, 555.3, 786.5,\n                        555.6, 791.2, 555.9, 940.0, 555.4, 944.5, 554.8, 957.9, 555.8, 962.3, 554.3, 1001.6, 555.4,\n                        677.4, 559.8, 729.7, 559.7, 739.0, 558.8, 782.5, 558.9, 796.2, 559.3, 809.0, 559.2, 813.4,\n                        558.8, 835.0, 559.3, 965.8, 559.9, 970.5, 559.2, 984.1, 559.6, 1067.8, 559.7, 575.3, 564.5,\n                        606.0, 564.4, 611.0, 564.3, 637.7, 563.2, 646.6, 563.1, 672.7, 563.4, 703.8, 563.2, 725.3,\n                        563.5, 746.9, 563.7, 795.6, 564.7, 800.5, 564.7, 843.6, 563.4, 958.5, 564.2, 1040.8, 563.7,\n                        417.8, 567.5, 492.4, 567.6, 502.2, 567.5, 585.4, 567.9, 690.8, 567.5, 734.0, 569.1, 803.5,\n                        567.6, 822.0, 567.7, 830.6, 568.8, 857.7, 568.4, 870.8, 568.9, 971.6, 568.4, 975.8, 568.4,\n                        576.1, 573.0, 791.0, 573.1, 308.7, 577.9, 566.7, 576.5, 624.2, 577.3, 637.1, 577.1, 645.6,\n                        576.4, 681.4, 576.3, 777.2, 577.8, 783.0, 576.5, 808.1, 577.5, 269.0, 581.0, 536.2, 581.4,\n                        585.5, 581.4, 629.0, 580.8, 664.0, 580.8, 680.7, 581.3, 746.3, 580.7, 528.6, 585.6, 544.7,\n                        586.2, 712.2, 586.5, 730.3, 586.0, 975.4, 585.8, 1005.5, 586.2, 326.4, 590.7, 505.0, 590.6,\n                        532.8, 590.6, 566.5, 589.7, 658.6, 590.4, 668.5, 590.3, 686.1, 590.5, 782.7, 590.1, 787.4,\n                        590.1, 484.5, 594.7, 497.7, 594.3, 527.0, 594.1, 610.9, 595.4, 637.7, 594.9, 703.6, 595.5,\n                        769.5, 594.8, 790.4, 594.7, 799.9, 594.3, 598.0, 599.6, 664.0, 598.7, 699.0, 598.9, 782.5,\n                        599.0, 808.7, 598.4, 540.1, 603.1, 655.2, 604.0, 690.4, 603.1, 699.0, 603.6, 783.0, 603.9,\n                        979.4, 602.7, 484.3, 607.9, 752.3, 608.0, 774.3, 608.2, 444.0, 612.9, 510.8, 611.9, 567.8,\n                        612.4, 620.0, 611.5, 685.3, 611.4, 690.6, 612.3, 698.3, 611.6, 703.4, 613.0, 773.2, 613.1,\n                        843.6, 612.5, 414.3, 616.0, 431.4, 616.7, 457.2, 615.9, 637.1, 616.1, 677.5, 617.3, 685.7,\n                        616.7, 739.0, 616.5, 743.0, 616.6, 751.1, 616.0, 756.1, 617.2, 431.6, 620.9, 502.1, 620.6,\n                        598.0, 621.7, 663.7, 620.5, 680.6, 620.7, 699.6, 620.3, 734.0, 621.4, 737.8, 621.8, 755.7,\n                        621.9, 597.7, 624.8, 655.7, 626.2, 676.8, 624.9, 690.1, 626.1, 738.7, 625.9, 746.8, 626.0,\n                        760.6, 625.4, 799.2, 625.0, 475.7, 629.7, 659.9, 629.9, 671.9, 630.1, 730.0, 629.7, 734.7,\n                        629.7, 756.7, 630.3, 997.0, 629.7, 645.6, 634.5, 681.7, 634.9, 708.0, 634.4, 768.6, 635.0,\n                        772.9, 634.4, 663.6, 638.6, 681.9, 638.3, 725.1, 642.6, 746.7, 642.4, 452.5, 647.2, 625.0,\n                        648.1, 716.9, 648.2, 628.8, 652.4, 549.2, 655.8, 593.0, 660.4, 627.9, 661.4, 636.6, 660.2,\n                        698.6, 660.7, 704.0, 660.3, 558.7, 665.3, 611.0, 665.3, 616.3, 664.2, 711.5, 664.5, 606.9,\n                        668.8, 496.9, 678.3, 537.0, 678.3, 611.7, 678.1, 641.9, 677.4, 664.4, 677.3, 480.3, 682.0,\n                        606.4, 682.1, 330.0, 686.5, 598.3, 686.7, 737.7, 686.9, 805.0, 686.6, 351.9, 692.1, 418.2,\n                        691.5, 579.8, 691.4, 593.9, 695.3, 681.6, 696.3, 764.3, 700.2, 567.2, 704.3, 636.8, 708.5,\n                        645.7, 717.1, 694.5, 717.1, 545.1, 722.3, 528.4, 727.1, 558.0, 731.6, 549.2, 739.9, 522.7,\n                        744.0, 474.9, 752.5, 535.9, 752.2, 440.7, 762.1, 518.9, 762.2, 487.8, 778.5, 483.9, 784.3,\n                        471.3, 793.1, 505.8, 809.3, 453.3, 814.2, 440.5, 818.1, 483.7, 819.1, 430.8, 823.7, 435.5,\n                        823.2, 465.5, 827.3, 391.5, 850.0, 378.9, 857.7,\n                      ];\n\n                      (function () {\n                        const W = 1372,\n                          H = 960;\n                        const X_OFFSET = 150;\n                        const W_VISIBLE = 1072;\n                        const R = 2.2;\n                        const PERIOD = 4.0;\n                        const DOT_COLOR = \"#7FC8FF\";\n                        const OMEGA = (2 * Math.PI) / PERIOD;\n\n                        const N = DOTS.length / 2;\n                        const CX = 878;\n                        let maxL = 0,\n                          maxR = 0;\n                        for (let i = 0; i < N; i++) {\n                          const x = DOTS[i * 2];\n                          if (x < CX) maxL = Math.max(maxL, CX - x);\n                          else maxR = Math.max(maxR, x - CX);\n                        }\n                        const ease = new Float32Array(N);\n                        const lag = new Float32Array(N);\n                        const sgn = new Float32Array(N);\n                        const amp = new Float32Array(N);\n                        const bw = new Float32Array(N);\n                        const jp = new Float32Array(N);\n                        const ja = new Float32Array(N);\n                        function rand(seed) {\n                          const v = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;\n                          return v - Math.floor(v);\n                        }\n                        for (let i = 0; i < N; i++) {\n                          const x = DOTS[i * 2],\n                            y = DOTS[i * 2 + 1];\n                          const left = x < CX;\n                          const md = left ? maxL : maxR;\n                          const ui = Math.min(1, Math.abs(x - CX) / md);\n                          ease[i] = Math.pow(ui, 1.5);\n                          lag[i] = 1.15 * ui;\n                          sgn[i] = left ? -1 : 1;\n                          const topClear = y - R - 4;\n                          const botClear = H - 4 - y - R;\n                          amp[i] = Math.max(0, Math.min(92 * ease[i], topClear, botClear));\n                          const w = Math.max(0, 1 - ui / 0.28);\n                          bw[i] = w * w;\n                          jp[i] = rand(i + 101) * Math.PI * 2;\n                          ja[i] = 0.4 + rand(i + 211) * 0.9;\n                        }\n\n                        document.querySelectorAll(\"[data-flap]\").forEach(setup);\n\n                        function setup(host) {\n                          const canvas = document.createElement(\"canvas\");\n                          host.appendChild(canvas);\n                          const ctx = canvas.getContext(\"2d\");\n                          let dpr = 1,\n                            sx = 1,\n                            sy = 1,\n                            rpx = 2;\n                          function resize() {\n                            dpr = Math.min(window.devicePixelRatio || 1, 2);\n                            const rect = host.getBoundingClientRect();\n                            canvas.width = Math.round(rect.width * dpr);\n                            canvas.height = Math.round(rect.height * dpr);\n                            sx = canvas.width / W_VISIBLE;\n                            sy = canvas.height / H;\n                            rpx = R * sx;\n                          }\n                          resize();\n                          new ResizeObserver(resize).observe(host);\n\n                          const reduce = matchMedia(\"(prefers-reduced-motion: reduce)\").matches;\n                          const TAU = Math.PI * 2;\n                          let start = null;\n                          let visible = false;\n                          let rafId = null;\n\n                          function ensureRunning() {\n                            if (rafId === null) rafId = requestAnimationFrame(tick);\n                          }\n\n                          new IntersectionObserver(\n                            (es) => {\n                              visible = es[0].isIntersecting;\n                              if (visible || reduce) ensureRunning();\n                            },\n                            { threshold: 0.01 },\n                          ).observe(host);\n\n                          function tick(ts) {\n                            if (!visible && !reduce) {\n                              rafId = null;\n                              return;\n                            } // pauza poza ekranem\n                            if (start === null) start = ts;\n                            const t = reduce ? 0.25 * PERIOD : ((ts - start) / 1000) % PERIOD;\n                            ctx.clearRect(0, 0, canvas.width, canvas.height);\n                            ctx.fillStyle = DOT_COLOR;\n                            ctx.beginPath();\n                            for (let i = 0; i < N; i++) {\n                              const ph = OMEGA * t - lag[i];\n                              const s1 = Math.sin(ph);\n                              const s2 = Math.sin(2 * OMEGA * t - 2 * lag[i]);\n                              let dy = -amp[i] * (0.85 * s1 + 0.15 * s2);\n                              dy += bw[i] * 7 * Math.sin(OMEGA * t + Math.PI);\n                              dy += ja[i] * Math.sin(2 * OMEGA * t + jp[i]) * 0.6;\n                              let dx = -sgn[i] * 9 * ease[i] * Math.sin(OMEGA * t - lag[i] - 0.6);\n                              dx += ja[i] * Math.cos(OMEGA * t + jp[i]) * 0.5;\n                              const x = DOTS[i * 2] + dx;\n                              let y = DOTS[i * 2 + 1] + dy;\n                              if (y < R + 2) y = R + 2;\n                              else if (y > H - R - 2) y = H - R - 2;\n                              const px = (x - X_OFFSET) * sx,\n                                py = y * sy;\n                              ctx.moveTo(px + rpx, py);\n                              ctx.arc(px, py, rpx, 0, TAU);\n                            }\n                            ctx.fill();\n                            rafId = requestAnimationFrame(tick);\n                          }\n\n                          if (reduce) ensureRunning();\n                        }\n                      })();" }} />
                  </div>
                  <div className="parrot_linear-gradient is-bottom" />
                  <div className="parrot_linear-gradient" />
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
      <TemplateScripts wfPage="660189f45f9033dd87f82a87" scripts={["/assets/vendor/finsweet-scrolldisable.js", "/assets/vendor/flowbase-tooltip.min.js"]} />
    </>
  );
}
