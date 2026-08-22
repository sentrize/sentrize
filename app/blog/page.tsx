// Generated from the static Sentrize template by the migration converter.
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: { absolute: "Blog | Sentrize" },
  description: "Sentrize engineering blog: practical insights on software, cloud, DevOps, AWS, Kubernetes, and AI from our specialists.",
  alternates: { canonical: "https://www.sentrize.com/blog" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "\n      html.w-mod-js:not(.w-mod-ix3) :is([text-paragraph-animation-start], [text-paragraph-animation]) {\n        visibility: hidden !important;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -o-font-smoothing: antialiased;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* Make Flowbase / Tippy tooltip text respect \\n */\n      .tippy-box .tippy-content {\n        white-space: pre-line;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      [text-letters-animation-start] {\n        opacity: 0.3;\n        color: #7fc8ff;\n      }\n    " }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\n        \"@context\": \"https://schema.org\",\n        \"@type\": \"WebSite\",\n        \"mainEntityOfPage\": \"blog.html\",\n        \"name\": \"Sentrize Blog\",\n        \"url\": \"blog.html\",\n        \"publisher\": {\n          \"@type\": \"Organization\",\n          \"name\": \"Sentrize\",\n          \"url\": \"blog.html\",\n          \"logo\": {\n            \"@type\": \"ImageObject\",\n            \"url\": \"/assets/images/logo-mark.png\"\n      }" }} />
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
        <section className="blog-hero-section is-featured">
          <div className="blog-deco1">
            <div className="blog-deco-circle" />
            <div className="blog-deco-circle is-2" />
          </div>
          <div className="blog-deco1 is-right">
            <div className="blog-deco-circle is-left" />
            <div className="blog-deco-circle is-2 is-right" />
          </div>
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="blog-hero-wrapper">
                <h3 className="t-heading-5-rg text-c-blue-light-400">
                  {"Engineering blog"}
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-section">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="blog-wrapper no-padding-bottom">
                <div className="blog-form-block w-form">
                  <form className="blog-form" data-name="Email Form" data-wf-element-id="af037d9f-5972-a92e-0704-ca1506b35797" data-wf-page-id="69cbbe270c8a2cc7773455e7" fs-list-element="filters" fs-list-showquery="" id="email-form" method="get" name="email-form">
                    <div className="spacer-100 is-featured" />
                    <div className="blog-filetrs-col is-top no-scrollbar">
                      <div className="v2-checkbox-field-blog-stroke">
                        <label className="w-checkbox v2-checkbox-field-blog" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="552d2662-42dd-571c-13b5-6db943c1aaa1" data-wf-native-id-path="552d2662-42dd-571c-13b5-6db943c1aaa1">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom v2-checkbox-blog" />
                          <input data-name="Checkbox" id="checkbox" name="checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                          <span className="v2-checkbox-label-blog t-label-1-rg w-form-label" {...({ "htmlFor": "checkbox" } as Record<string, string>)}>
                            {"View All"}
                          </span>
                        </label>
                      </div>
                      <div className="blog-filters-list-wrapper w-dyn-list">
                        <div className="blog-filters-list w-dyn-items" role="list">
                          <div className="w-dyn-item" role="listitem">
                            <div className="v2-checkbox-field-blog-stroke">
                              <label className="w-checkbox v2-checkbox-field-blog" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%226a1f03d66410686aff4c4e7d%22%7D%5D" data-wf-element-id="8046c84a-2f48-09a7-b892-812f01126576" data-wf-native-id-path="8046c84a-2f48-09a7-b892-812f01126576_instance-0">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom v2-checkbox-blog" />
                                <input data-name="Checkbox" id="checkbox" name="checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                <span className="v2-checkbox-label-blog t-label-1-rg w-form-label" {...({ "htmlFor": "checkbox" } as Record<string, string>)}>
                                  {"DevOps"}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="w-dyn-item" role="listitem">
                            <div className="v2-checkbox-field-blog-stroke">
                              <label className="w-checkbox v2-checkbox-field-blog" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269cba09be9c0570d371a9d20%22%7D%5D" data-wf-element-id="8046c84a-2f48-09a7-b892-812f01126576" data-wf-native-id-path="8046c84a-2f48-09a7-b892-812f01126576_instance-1">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom v2-checkbox-blog" />
                                <input data-name="Checkbox" id="checkbox" name="checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                <span className="v2-checkbox-label-blog t-label-1-rg w-form-label" {...({ "htmlFor": "checkbox" } as Record<string, string>)}>
                                  {"Cloud"}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="w-dyn-item" role="listitem">
                            <div className="v2-checkbox-field-blog-stroke">
                              <label className="w-checkbox v2-checkbox-field-blog" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269cbc0e0b569c17f270e2605%22%7D%5D" data-wf-element-id="8046c84a-2f48-09a7-b892-812f01126576" data-wf-native-id-path="8046c84a-2f48-09a7-b892-812f01126576_instance-2">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom v2-checkbox-blog" />
                                <input data-name="Checkbox" id="checkbox" name="checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                <span className="v2-checkbox-label-blog t-label-1-rg w-form-label" {...({ "htmlFor": "checkbox" } as Record<string, string>)}>
                                  {"Engineering"}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="w-dyn-item" role="listitem">
                            <div className="v2-checkbox-field-blog-stroke">
                              <label className="w-checkbox v2-checkbox-field-blog" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269cba09ee9c0570d371a9ed2%22%7D%5D" data-wf-element-id="8046c84a-2f48-09a7-b892-812f01126576" data-wf-native-id-path="8046c84a-2f48-09a7-b892-812f01126576_instance-3">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom v2-checkbox-blog" />
                                <input data-name="Checkbox" id="checkbox" name="checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                <span className="v2-checkbox-label-blog t-label-1-rg w-form-label" {...({ "htmlFor": "checkbox" } as Record<string, string>)}>
                                  {"AI"}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="w-dyn-item" role="listitem">
                            <div className="v2-checkbox-field-blog-stroke">
                              <label className="w-checkbox v2-checkbox-field-blog" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%226a1f03d66410686aff4c4e7d%22%7D%5D" data-wf-element-id="8046c84a-2f48-09a7-b892-812f01126576" data-wf-native-id-path="8046c84a-2f48-09a7-b892-812f01126576_instance-4">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom v2-checkbox-blog" />
                                <input data-name="Checkbox" id="checkbox" name="checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                <span className="v2-checkbox-label-blog t-label-1-rg w-form-label" {...({ "htmlFor": "checkbox" } as Record<string, string>)}>
                                  {"Security"}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="w-dyn-item" role="listitem">
                            <div className="v2-checkbox-field-blog-stroke">
                              <label className="w-checkbox v2-checkbox-field-blog" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%226a1f03d66410686aff4c4e7d%22%7D%5D" data-wf-element-id="8046c84a-2f48-09a7-b892-812f01126576" data-wf-native-id-path="8046c84a-2f48-09a7-b892-812f01126576_instance-5">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom v2-checkbox-blog" />
                                <input data-name="Checkbox" id="checkbox" name="checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                <span className="v2-checkbox-label-blog t-label-1-rg w-form-label" {...({ "htmlFor": "checkbox" } as Record<string, string>)}>
                                  {"Product"}
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hide w-embed">
                        <style dangerouslySetInnerHTML={{ __html: "\n                          /* === CHECKED STATE === */\n\n                          /* Span text color */\n                          .v2-checkbox-field-blog:has(.w--redirected-checked) .v2-checkbox-label-blog {\n                            color: var(--_v-2-colors---c-blue-light--900);\n                          }\n\n                          /* Outer wrapper - gradient border */\n                          .v2-checkbox-field-blog-stroke:has(.w--redirected-checked) {\n                            background-image: linear-gradient(#7fc8ff, #4c789940);\n                          }\n                        " }} />
                      </div>
                    </div>
                    <div className="blog-filetrs-col is-down">
                      <input className="form_field v2-is-resources is-blog-search w-input" data-name="Field" fs-list-field="title" id="field" maxLength={256} name="field" placeholder="Search articles" required type="text" />
                      <div className="blog-dropdown w-dropdown" data-delay="0" data-hover="false">
                        <div className="blog-dropdown-toggle w-dropdown-toggle" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="45105476-d16e-abd4-81c5-39f3f93af713" data-wf-native-id-path="45105476-d16e-abd4-81c5-39f3f93af713">
                          <div className="embed-icon _20-20 w-embed">
                            <svg aria-hidden="true" fill="none" height="100%" preserveAspectRatio="xMidYMid meet" role="img" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 5H17" stroke="currentColor" strokeLinecap="round" />
                              <path d="M6 10H14" stroke="currentColor" strokeLinecap="round" />
                              <path d="M8 15H12" stroke="currentColor" strokeLinecap="round" />
                            </svg>
                          </div>
                          <div className="t-label-1-rg">
                            {"Filter by"}
                          </div>
                          <div className="t-label-1-rg is-number">
                            {"2"}
                          </div>
                        </div>
                        <nav className="blog-dropdown-navigation w-dropdown-list">
                          <label className="w-checkbox blog-filter-checkbox-field" data-wf-ao-click-engagement-tracking="true" data-wf-element-id="a793013f-0a1b-0d72-d654-61fe4f019ffd" data-wf-native-id-path="a793013f-0a1b-0d72-d654-61fe4f019ffd">
                            <div className="w-checkbox-input w-checkbox-input--inputType-custom blog-filter-checkbox" />
                            <input data-name="Checkbox" id="Checkbox" name="Checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                            <span className="blog-filter-label t-label-1-rg w-form-label" {...({ "htmlFor": "Checkbox" } as Record<string, string>)}>
                              {"All posts"}
                            </span>
                          </label>
                          <div className="filter-divider" />
                          <div className="w-dyn-list">
                            <div className="blog-filetrs-list w-dyn-items" role="list">
                              <div className="w-dyn-item" role="listitem">
                                <label className="w-checkbox blog-filter-checkbox-field" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269cba09be9c0570d371a9d20%22%7D%5D" data-wf-element-id="cb3b3277-d30a-a2b3-d230-c77986276b57" data-wf-native-id-path="cb3b3277-d30a-a2b3-d230-c77986276b57_instance-0">
                                  <div className="w-checkbox-input w-checkbox-input--inputType-custom blog-filter-checkbox" />
                                  <input data-name="Checkbox" fs-list-field="category" fs-list-value="DevOps" id="Checkbox" name="Checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                  <span className="blog-filter-label t-label-1-rg w-form-label" {...({ "htmlFor": "Checkbox" } as Record<string, string>)}>
                                    {"DevOps"}
                                  </span>
                                </label>
                              </div>
                              <div className="w-dyn-item" role="listitem">
                                <label className="w-checkbox blog-filter-checkbox-field" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269cba09ee9c0570d371a9ed2%22%7D%5D" data-wf-element-id="cb3b3277-d30a-a2b3-d230-c77986276b57" data-wf-native-id-path="cb3b3277-d30a-a2b3-d230-c77986276b57_instance-1">
                                  <div className="w-checkbox-input w-checkbox-input--inputType-custom blog-filter-checkbox" />
                                  <input data-name="Checkbox" fs-list-field="category" fs-list-value="Cloud" id="Checkbox" name="Checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                  <span className="blog-filter-label t-label-1-rg w-form-label" {...({ "htmlFor": "Checkbox" } as Record<string, string>)}>
                                    {"Cloud"}
                                  </span>
                                </label>
                              </div>
                              <div className="w-dyn-item" role="listitem">
                                <label className="w-checkbox blog-filter-checkbox-field" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269cba09dbf847dfe35eccf56%22%7D%5D" data-wf-element-id="cb3b3277-d30a-a2b3-d230-c77986276b57" data-wf-native-id-path="cb3b3277-d30a-a2b3-d230-c77986276b57_instance-2">
                                  <div className="w-checkbox-input w-checkbox-input--inputType-custom blog-filter-checkbox" />
                                  <input data-name="Checkbox" fs-list-field="category" fs-list-value="Engineering" id="Checkbox" name="Checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                  <span className="blog-filter-label t-label-1-rg w-form-label" {...({ "htmlFor": "Checkbox" } as Record<string, string>)}>
                                    {"Engineering"}
                                  </span>
                                </label>
                              </div>
                              <div className="w-dyn-item" role="listitem">
                                <label className="w-checkbox blog-filter-checkbox-field" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269e9c8b0d1a470a43a77ba42%22%7D%5D" data-wf-element-id="cb3b3277-d30a-a2b3-d230-c77986276b57" data-wf-native-id-path="cb3b3277-d30a-a2b3-d230-c77986276b57_instance-3">
                                  <div className="w-checkbox-input w-checkbox-input--inputType-custom blog-filter-checkbox" />
                                  <input data-name="Checkbox" fs-list-field="category" fs-list-value="AI" id="Checkbox" name="Checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                  <span className="blog-filter-label t-label-1-rg w-form-label" {...({ "htmlFor": "Checkbox" } as Record<string, string>)}>
                                    {"AI"}
                                  </span>
                                </label>
                              </div>
                              <div className="w-dyn-item" role="listitem">
                                <label className="w-checkbox blog-filter-checkbox-field" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269cba09f0728009988cf40be%22%7D%5D" data-wf-element-id="cb3b3277-d30a-a2b3-d230-c77986276b57" data-wf-native-id-path="cb3b3277-d30a-a2b3-d230-c77986276b57_instance-4">
                                  <div className="w-checkbox-input w-checkbox-input--inputType-custom blog-filter-checkbox" />
                                  <input data-name="Checkbox" fs-list-field="category" fs-list-value="Security" id="Checkbox" name="Checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                  <span className="blog-filter-label t-label-1-rg w-form-label" {...({ "htmlFor": "Checkbox" } as Record<string, string>)}>
                                    {"Security"}
                                  </span>
                                </label>
                              </div>
                              <div className="w-dyn-item" role="listitem">
                                <label className="w-checkbox blog-filter-checkbox-field" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cba07629c6654c434605e0%22%2C%22itemId%22%3A%2269d4957bab9543da2eb0c9c0%22%7D%5D" data-wf-element-id="cb3b3277-d30a-a2b3-d230-c77986276b57" data-wf-native-id-path="cb3b3277-d30a-a2b3-d230-c77986276b57_instance-5">
                                  <div className="w-checkbox-input w-checkbox-input--inputType-custom blog-filter-checkbox" />
                                  <input data-name="Checkbox" fs-list-field="category" fs-list-value="Product" id="Checkbox" name="Checkbox" style={{ opacity: "0", position: "absolute", zIndex: "-1" }} type="checkbox" />
                                  <span className="blog-filter-label t-label-1-rg w-form-label" {...({ "htmlFor": "Checkbox" } as Record<string, string>)}>
                                    {"Product"}
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      {"Thank you! Your submission has been received!"}
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      {"Oops! Something went wrong while submitting the form."}
                    </div>
                  </div>
                </div>
                <div className="hide w-embed w-script">
                  <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "document.getElementById(\"email-form\").addEventListener(\"keydown\", function (e) {\n                      if (e.key === \"Enter\") {\n                        e.preventDefault(); // stop native GET submit\n                      }\n                    });" }} />
                </div>
                <div className="blog-list-wrapper is-featured w-dyn-list">
                  <div className="blog-list is-featured is-first w-dyn-items" role="list">
                    <div className="blog-item w-dyn-item" fs-readtime-instance="zero-downtime-deploys-kubernetes" role="listitem">
                      <div className="blog-link">
                        <img alt="Zero-Downtime Deploys on Kubernetes: Rolling, Blue-Green, and Canary in Practice" className="blog-thumbnail" loading="lazy" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&h=560&q=80" />
                        <div className="blog-card-wrapper-stroke">
                          <div className="blog-card-wrapper">
                            <div className="blog-card-inner">
                              <div className="w-dyn-list">
                                <div className="categories-list w-dyn-items" role="list">
                                  <div className="w-dyn-item" role="listitem">
                                    <div className="blog-categories-label t-label-2-rg">
                                      {"DevOps"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="spacer-12" />
                              <h2 className="t-heading-6-rg text-c-blue-light-900">
                                {"\n                                Zero-Downtime Deploys on Kubernetes: Rolling, Blue-Green, and Canary in Practice\n                              "}
                              </h2>
                            </div>
                            <div className="blog-card-inner is-bottom">
                              <div className="blog-author-wrapper">
                                <div className="w-dyn-list">
                                  <div className="blog-authors-list w-dyn-items" role="list">
                                  </div>
                                </div>
                                <div className="blog-author-inner-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-author-name-list w-dyn-items" role="list">
                                      <div className="blog-author-name-item w-dyn-item" role="listitem">
                                        <div className="t-paragraph-3-rg text-c-blue-light-500">
                                          {"Daniel Okafor"}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="t-label-2-rg date-color">
                                    {"Mar 2026"}
                                  </div>
                                </div>
                              </div>
                              <div className="blog-read-time">
                                <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                <div className="read-time-wrapper">
                                  <div className="t-label-2-rg read-time-color">
                                    {"8"}
                                  </div>
                                  <div className="t-label-2-rg read-time-color">
                                    {"min"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a7aa9af6aa0deee0adb5329%22%7D%5D" data-wf-element-id="86a71681-3882-de9b-b8a7-71792d51f11c" data-wf-native-id-path="86a71681-3882-de9b-b8a7-71792d51f11c_instance-0" href="/blog/zero-downtime-deploys-kubernetes" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section blog-element="recent" className="blog-hero-section">
          <div className="blog-deco1 is-recent">
            <div className="blog-deco-circle" />
            <div className="blog-deco-circle is-2" />
          </div>
          <div className="blog-deco1 is-right is-recent">
            <div className="blog-deco-circle is-left" />
            <div className="blog-deco-circle is-2 is-right" />
          </div>
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="blog-hero-wrapper">
                <h3 className="t-heading-5-rg text-c-blue-light-400">
                  {"Latest articles"}
                </h3>
              </div>
            </div>
          </div>
          <div className="blog-trigger" id="blog" />
        </section>
        <section blog-element="stories" className="blog-section">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="blog-wrapper">
                <div className="is-relative">
                  <div className="blog-list-wrapper is-normal w-dyn-list">
                    <div className="blog-list is-normal w-dyn-items" fs-list-element="list" fs-list-load="pagination" fs-list-resetix="true" fs-list-showquery="true" role="list">
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Cutting Cloud Spend by 40% Without Touching Performance" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        Cloud\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Cutting Cloud Spend by 40% Without Touching Performance\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Priya Nair"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"Jan 2026"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"7"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a7aa9af6aa0deee0adb5329%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-0" href="/blog/cutting-cloud-spend-by-40-percent" />
                      </div>
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Designing Multi-Tenant SaaS: Where to Draw the Isolation Boundary" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        Engineering\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Designing Multi-Tenant SaaS: Where to Draw the Isolation Boundary\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Marcus Feldt"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"Nov 2025"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"10"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a767a3a660d00c6bca23c41%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-2" href="/blog/multi-tenant-saas-isolation-boundary" />
                      </div>
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Observability That Earns Its Keep: Metrics, Traces, and Logs Without the Noise" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        DevOps\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Observability That Earns Its Keep: Metrics, Traces, and Logs Without the Noise\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Elena Vasquez"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"Feb 2026"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"9"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a72327cc41b5d7dff06d81f%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-4" href="/blog/observability-that-earns-its-keep" />
                      </div>
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Terraform at Scale: Module Design, State Hygiene, and Drift You Can Trust" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        Cloud\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Terraform at Scale: Module Design, State Hygiene, and Drift You Can Trust\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Tomas Berg"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"Dec 2025"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"8"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a74c75339c2edf841248199%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-5" href="/blog/terraform-at-scale" />
                      </div>
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Running AI in Production: From Prototype to a System You Can Operate" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        AI\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Running AI in Production: From Prototype to a System You Can Operate\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Aisha Rahman"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"Apr 2026"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"11"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a70b06422b59bf71cd14c18%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-8" href="/blog/running-ai-in-production" />
                      </div>
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Shifting Security Left Without Slowing Engineering Down" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        Security\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Shifting Security Left Without Slowing Engineering Down\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Jonas Weber"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"Oct 2025"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"7"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a6fed2c9df8573afc9f39f3%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-9" href="/blog/shifting-security-left" />
                      </div>
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Kubernetes Resource Tuning: Requests, Limits, and the Cost of Getting Them Wrong" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        DevOps\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Kubernetes Resource Tuning: Requests, Limits, and the Cost of Getting Them Wrong\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Sofia Lindqvist"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"May 2026"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"9"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%2269cbafa52c7f205b929b4d40%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-10" href="/blog/kubernetes-resource-tuning" />
                      </div>
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Incident Response That Builds Trust: Runbooks, Roles, and Blameless Postmortems" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        DevOps\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Incident Response That Builds Trust: Runbooks, Roles, and Blameless Postmortems\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Ryan Mitchell"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"Jun 2026"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"8"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a6b9d857fab7827fdb29279%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-11" href="/blog/incident-response-that-builds-trust" />
                      </div>
                      <div className="blog-item w-dyn-item" role="listitem">
                        <div className="blog-link">
                          <img alt="Platform Engineering: Building the Internal Paved Road Your Teams Will Use" className="blog-thumbnail" loading="eager" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&h=400&q=80" />
                          <div className="blog-card-wrapper-stroke">
                            <div className="blog-card-wrapper">
                              <div className="blog-card-inner">
                                <div className="w-dyn-list">
                                  <div className="categories-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                      <div className="blog-categories-label t-label-2-rg" fs-list-field="category">
                                        {"\n                                        Product\n                                      "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="spacer-12" />
                                <h2 className="t-heading-6-rg text-c-blue-light-900" fs-list-field="title">
                                  {"\n                                  Platform Engineering: Building the Internal Paved Road Your Teams Will Use\n                                "}
                                </h2>
                              </div>
                              <div className="blog-card-inner is-bottom">
                                <div className="blog-author-wrapper">
                                  <div className="w-dyn-list">
                                    <div className="blog-authors-list w-dyn-items" role="list">
                                    </div>
                                  </div>
                                  <div className="blog-author-inner-wrapper">
                                    <div className="w-dyn-list">
                                      <div className="blog-author-name-list w-dyn-items" role="list">
                                        <div className="blog-author-name-item w-dyn-item" role="listitem">
                                          <div className="t-paragraph-3-rg text-c-blue-light-500">
                                            {"Hannah Brooks"}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="t-label-2-rg date-color">
                                      {"Sep 2025"}
                                    </div>
                                  </div>
                                </div>
                                <div className="blog-read-time">
                                  <img alt="" className="icon-14-14" loading="lazy" src="/assets/images/Icon-6.svg" />
                                  <div className="read-time-wrapper">
                                    <div className="t-label-2-rg read-time-color">
                                      {"10"}
                                    </div>
                                    <div className="t-label-2-rg read-time-color">
                                      {"min"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="blog-link-absolute w-inline-block" data-wf-ao-click-engagement-tracking="true" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2269cb927ee5c865d9ed45f7f6%22%2C%22itemId%22%3A%226a683e1f0fab36199e4e098e%22%7D%5D" data-wf-element-id="21376467-7a60-d75e-06d3-4c22208bc22a" data-wf-native-id-path="21376467-7a60-d75e-06d3-4c22208bc22a_instance-15" href="/blog/platform-engineering-paved-road" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section blog-element="empty" className="blog-section-empty">
          <div className="v2-padding-global">
            <div blog-element="empty-container" className="w-layout-blockcontainer v2-container w-container">
              <div className="blog-empty">
                <div className="blog-empty-wrapper">
                  <div className="icon-embed-custom_54 w-embed">
                    <svg aria-hidden="true" fill="none" height="100%" preserveAspectRatio="xMidYMid meet" role="img" viewBox="0 0 54 54" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24.1443" cy="25.5041" r="15.5193" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M36 35.9998L47.1345 47.1343" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="spacer-16" />
                  <div className="blog-empty-content">
                    <h4 className="t-heading-4-rg">
                      {"We couldn't find anything matching that."}
                    </h4>
                    <div className="spacer-32" />
                    <p className="t-paragraph-1-rg text-c-white">
                      {"Try a broader term, or explore all posts."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div blog-element="newsletter" className="blog-newsletter" fs-list-element="item" fs-list-position="7" fs-list-repeat="16">
          <div className="v2-footer-form-block is-blog w-form">
            <form action="#" className="v2-footer-form is-blog" data-name="footer_form" data-wf-element-id="8e50223c-964e-980c-4363-d22e47e3edfa" data-wf-page-id="69cbbe270c8a2cc7773455e7" id="wf-form-footer_form" method="post" name="wf-form-footer_form">
              <div className="t-paragraph-1-rg text-c-blue-light-800 text-style-nowrap">
                {"\n                Engineering insights, a few times a month\n              "}
              </div>
              <div className="blog-form-wrapper">
                <input className="v2-input is-blog w-input" data-name="EMAIL" data-wfhsfieldname="FormTextInput-2" id="EMAIL" maxLength={256} name="EMAIL" aria-label="Email address" placeholder="you@company.com" required type="email" />
                <input aria-label="Subscribe" className="button-v2-full-width is-blog w-button" data-wait="Please wait..." data-wf-ao-click-engagement-tracking="true" data-wf-element-id="8e50223c-964e-980c-4363-d22e47e3edfd" data-wf-native-id-path="8e50223c-964e-980c-4363-d22e47e3edfd" type="submit" value="Subscribe" />
              </div>
              <input name="hutk" type="hidden" value="" />
              <input name="ipAddress" type="hidden" value="" />
              <input name="pageUri" type="hidden" value="" />
              <input name="pageId" type="hidden" value="" />
              <input name="pageName" type="hidden" value="" />
            </form>
            <div className="v2-footer-success-message is-blog w-form-done">
              <div className="v2-footer-success-wrapper is-blog">
                <div className="embed-icon _50-50 text-c-blue-light-900 w-embed">
                  <svg aria-hidden="true" fill="none" height="100%" preserveAspectRatio="xMidYMid meet" role="img" viewBox="0 0 50 50" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 12.5C18.1 12.5 12.5 18.1 12.5 25C12.5 31.9 18.1 37.5 25 37.5C31.9 37.5 37.5 31.9 37.5 25C37.5 18.1 31.9 12.5 25 12.5ZM25 35C19.4875 35 15 30.5125 15 25C15 19.4875 19.4875 15 25 15C30.5125 15 35 19.4875 35 25C35 30.5125 30.5125 35 25 35ZM30.7375 19.475L22.5 27.7125L19.2625 24.4875L17.5 26.25L22.5 31.25L32.5 21.25L30.7375 19.475Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="t-paragraph-1-rg text-c-blue-light-400">
                  <span className="text-c-white">
                    {"Thanks"}
                  </span>
                  {" \u2014 you're subscribed.\n                "}
                </div>
              </div>
            </div>
            <div className="form_error is-blog w-form-fail">
              <div className="t-paragraph-2-rg">
                {"Oops! Something went wrong while submitting the form."}
              </div>
            </div>
          </div>
        </div>
        <section className="cta-section w-variant-da110dd5-88f9-30ea-7aef-7c93e2b5d1af" dark-bg="" data-wf--cta--variant="lines">
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
                      {"\n                      Tell us what you're building and we'll show you the fastest reliable path to production.\n                    "}
                    </p>
                  </div>
                  <div className="spacer-32" />
                  <div className="button-group v2">
                    <a className="button-v2-full-width w-inline-block" data-wf--button--variant="primary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88e0%22%2C%22instanceId%22%3A%22b1093161-8fea-ff06-ac9c-c8680d39bfc1%22%7D%2C%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88f0%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="b1093161-8fea-ff06-ac9c-c8680d39bfc1:da845d9e-acbd-d096-1641-bb8fe34e88f0:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
                      <div className="no-wrap-arrow">
                        {"Start a project"}
                      </div>
                      <div className="embed-icon is-btn-arrow w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9852 4L12 10.7704H10.9314V6.60741L10.9462 5.80741L4.74211 12L4 11.2444L10.2041 5.03704L9.47681 5.05185L5.21707 5.05185V4L11.9852 4Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <a className="button-v2-full-width w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9 w-inline-block" data-wf--button--variant="secondary" data-wf-ao-click-engagement-tracking="true" data-wf-component-context="%5B%7B%22componentId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88e0%22%2C%22instanceId%22%3A%22b1093161-8fea-ff06-ac9c-c8680d39bfc1%22%7D%2C%7B%22componentId%22%3A%22cc338c70-b506-f985-732b-95e9d08eb22b%22%2C%22instanceId%22%3A%22da845d9e-acbd-d096-1641-bb8fe34e88f2%22%7D%5D" data-wf-element-id="cc338c70-b506-f985-732b-95e9d08eb22b" data-wf-event-ids="157078768-157078769" data-wf-native-id-path="b1093161-8fea-ff06-ac9c-c8680d39bfc1:da845d9e-acbd-d096-1641-bb8fe34e88f2:cc338c70-b506-f985-732b-95e9d08eb22b" href="/contact">
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
        <div className="hide w-embed">
          <style dangerouslySetInnerHTML={{ __html: "\n              .blog-author-item:not(:first-child) {\n                margin-left: -10px;\n              }\n              /* === CHECKED STATE === */\n\n              /* Label - background and text color */\n              .v2-checkbox-field-blog:has(.w--redirected-checked) {\n                background-color: var(--_v-2-colors---c-blue-dark--800);\n                color: var(--_v-2-colors---c-blue-light--500);\n                border-radius: 0.375rem;\n                margin-bottom: 0;\n                padding: 0.625rem 1rem;\n                position: relative;\n              }\n\n              /* Span text color */\n              .v2-checkbox-field-blog:has(.w--redirected-checked) .v2-checkbox-label-blog {\n                color: var(--_v-2-colors---c-blue-light--900);\n              }\n\n              /* Outer wrapper - gradient border */\n              .v2-checkbox-field-blog-stroke:has(.w--redirected-checked) {\n                opacity: 1;\n                background-image: linear-gradient(#7fc8ff, #4c789940);\n                border-radius: 0.375rem;\n                padding: 0.0625rem;\n              }\n\n              /* === FEATURED LIST - FIRST ITEM FULL WIDTH ===\n              @media (min-width: 992px) {\n                .blog-list-wrapper.is-featured .blog-list.is-featured .blog-item:first-child {\n                  grid-column: 1 / -1;\n                }\n              }\n\n              /* === NORMAL LIST - FIRST TWO ITEMS HALF WIDTH (3 of 6 cols) ===\n              @media (min-width: 992px) {\n                .blog-list-wrapper.is-normal .blog-list .blog-item:nth-child(1),\n                .blog-list-wrapper.is-normal .blog-list .blog-item:nth-child(2) {\n                  grid-column: span 3;\n                }\n\n               */\n\n                .blog-list-wrapper.is-normal .blog-list .blog-item {\n                  grid-column: span 2;\n                }\n              }\n\n\n\n              /* === IS-FIRST STYLES === */\n              .blog-link.is-first {\n                flex-flow: row-reverse;\n                border-style: solid;\n                border-width: 1px;\n                border-color: var(--_v-2-colors---c-blue-dark--600);\n                border-radius: 0.75rem;\n              }\n\n              .blog-thumbnail.is-first {\n                width: 60%;\n                border-radius: 0px;\n              }\n\n              .blog-card-wrapper-stroke.is-first {\n                border-radius: 0px;\n                background-image: none;\n              }\n\n              .blog-categories-label.t-label-2-rg.is-first {\n                padding: 0.75rem 1rem;\n                border-radius: 0.375rem;\n                color: var(--_v-2-colors---c-blue-light--500);\n                font-size: 0.875rem;\n              }\n\n              .t-heading-6-rg.text-c-blue-light-900.is-first {\n                font-size: 3rem;\n              }\n\n              .blog-card-wrapper.is-first {\n                padding: 2rem;\n                border-right-style: solid;\n                border-right-width: 1px;\n                border-right-color: var(--_v-2-colors---c-blue-dark--600);\n                border-radius: 0px;\n              }\n\n              .blog-author-img.is-first {\n                width: 2.75rem;\n                height: 2.75rem;\n              }\n\n              .t-label-2-rg.date-color.is-first {\n                font-size: 0.875rem;\n              }\n\n            @media screen and (min-width: 992px) and (max-width: 1340px) {\n              .blog-link.is-first {\n                flex-direction: column;\n              }\n              .blog-thumbnail.is-first {\n                width: 100%;\n              }\n            }\n\n\n              .blog-item:hover .blog-card-wrapper {\n                background-color: var(--_v-2-colors---c-blue-dark--700);\n              }\n\n              .blog-item:hover .blog-categories-label.t-label-2-rg {\n                background-color: var(--_v-2-colors---c-blue-dark--800);\n              }\n\n                .blog-item:hover .blog-read-time {\n                background-color: var(--_v-2-colors---c-blue-dark--800);\n              }\n\n              .blog-newsletter {\n              grid-column: 1 / -1;\n            }\n          " }} />
        </div>
        <div className="hide w-embed w-script">
          <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "// Names in this list are never shortened\n            const AUTHOR_NAME_EXCEPTIONS = [\"Sentrize\"];\n\n            function formatAuthorNames() {\n              document.querySelectorAll(\".blog-author-name-list:not([data-formatted])\").forEach((list) => {\n                const items = list.querySelectorAll(\".blog-author-name-item\");\n                list.setAttribute(\"data-formatted\", \"true\");\n                if (items.length <= 1) return;\n                items.forEach((item, index) => {\n                  const el = item.querySelector('[class*=\"t-paragraph\"]');\n                  if (!el) return;\n                  const fullName = el.textContent.trim();\n                  const words = fullName.split(\" \");\n                  if (words.length >= 2 && !AUTHOR_NAME_EXCEPTIONS.includes(fullName)) {\n                    words[0] = words[0][0] + \".\";\n                    el.textContent = words.join(\" \");\n                  } else {\n                    el.textContent = fullName;\n                  }\n                  if (index < items.length - 1) {\n                    el.textContent += \",\";\n                  }\n                });\n              });\n            }\n            // Initial run\n            formatAuthorNames();\n            // Catch any DOM swap (Finsweet pagination, Webflow re-render, etc.)\n            let debounce;\n            new MutationObserver(() => {\n              clearTimeout(debounce);\n              debounce = setTimeout(formatAuthorNames, 50);\n            }).observe(document.body, { childList: true, subtree: true });\n            // Belt-and-suspenders: also re-run on pagination clicks with staggered retries\n            // in case the mutation observer misses the swap timing\n            document.addEventListener(\"click\", (e) => {\n              if (e.target.closest('.w-pagination-wrapper, [fs-list-element=\"page-button\"]')) {\n                [100, 300, 600, 1000].forEach((ms) => setTimeout(formatAuthorNames, ms));\n              }\n            });" }} />
          <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "function applyFeaturedFirst() {\n              // Target only the list inside the featured wrapper\n              const featuredList = document.querySelector(\".blog-list-wrapper.is-featured .blog-list.is-featured\");\n              if (!featuredList) return;\n              const firstItem = featuredList.querySelector(\".blog-item:first-child\");\n              if (!firstItem) return;\n              const selectors = [\n                \".blog-link\",\n                \".blog-thumbnail\",\n                \".blog-card-wrapper-stroke\",\n                \".blog-card-wrapper\",\n                \".blog-author-img\",\n                \".t-label-2-rg.date-color\",\n                \".t-heading-6-rg.text-c-blue-light-900\",\n                \".blog-categories-label.t-label-2-rg\",\n              ];\n              const isDesktop = window.innerWidth >= 992;\n              selectors.forEach((selector) => {\n                firstItem.querySelectorAll(selector).forEach((el) => {\n                  el.classList.toggle(\"is-first\", isDesktop);\n                });\n              });\n            }\n\n            function applyBlogStyles() {\n              applyFeaturedFirst();\n            }\n\n            applyBlogStyles();\n            window.addEventListener(\"resize\", applyBlogStyles);" }} />
        </div>
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
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "document.addEventListener(\"DOMContentLoaded\", function () {\n        console.log(\"[DEBUG] DOMContentLoaded fired\");\n\n        // --- Element references ---\n        const viewAllLabel = document.querySelector(\n          \".blog-filetrs-col .v2-checkbox-field-blog-stroke:first-child .v2-checkbox-field-blog\",\n        );\n        const leftFilterLabels = document.querySelectorAll(\".w-dyn-item .v2-checkbox-field-blog\");\n        const dropdownLabels = document.querySelectorAll(\".blog-filter-checkbox-field\");\n        const counterEl = document.querySelector(\".is-number\");\n\n        const featuredWrappers = document.querySelectorAll(\".blog-list-wrapper.is-featured\");\n        const heroSections = document.querySelectorAll(\".blog-hero-section\");\n        const spacerSections = document.querySelectorAll(\".spacer-100.is-featured\");\n\n        const searchInput = document.querySelector('input[fs-list-field=\"title\"]');\n        const emptyEl = document.querySelector('[blog-element=\"empty\"]');\n\n        let isSyncing = false;\n\n        // --- Helpers ---\n        function getText(label) {\n          return label.querySelector(\"span\").textContent.trim();\n        }\n\n        function isChecked(label) {\n          return label\n            .querySelector('[class*=\"w-checkbox-input--inputType-custom\"]')\n            .classList.contains(\"w--redirected-checked\");\n        }\n\n        function setChecked(label, state) {\n          const box = label.querySelector('[class*=\"w-checkbox-input--inputType-custom\"]');\n          const input = label.querySelector('input[type=\"checkbox\"]');\n          box.classList.toggle(\"w--redirected-checked\", state);\n          input.checked = state;\n        }\n\n        function triggerFinsweetClick(label) {\n          const input = label.querySelector('input[type=\"checkbox\"]');\n          if (input) input.click();\n        }\n\n        function getDropdownByText(text) {\n          return Array.from(dropdownLabels).find((l) => getText(l) === text);\n        }\n\n        function getLeftByText(text) {\n          return Array.from(leftFilterLabels).find((l) => getText(l) === text);\n        }\n\n        // --- Count filters ---\n        function getActiveCount() {\n          const leftTexts = new Set(Array.from(leftFilterLabels).map(getText));\n          const activeLeft = Array.from(leftFilterLabels).filter(isChecked).length;\n\n          const activeDropdownOnly = Array.from(dropdownLabels).filter((l) => {\n            const text = getText(l);\n            return text !== \"All posts\" && !leftTexts.has(text) && isChecked(l);\n          }).length;\n\n          return activeLeft + activeDropdownOnly;\n        }\n\n        function updateCounter() {\n          const count = getActiveCount();\n          counterEl.textContent = count;\n          counterEl.style.display = count > 0 ? \"block\" : \"none\";\n        }\n\n        // --- Featured + hero hide/show logic ---\n        function updateFeatured() {\n          if (!featuredWrappers.length && !heroSections.length && !spacerSections.length) return;\n\n          const hasActiveFilters = getActiveCount() > 0;\n          const hasSearchQuery = searchInput && searchInput.value.trim() !== \"\";\n          const shouldHide = hasActiveFilters || hasSearchQuery;\n\n          console.log(\"[DEBUG] updateFeatured \u2192\", shouldHide);\n\n          if (shouldHide) {\n            featuredWrappers.forEach((el) => {\n              el.style.display = \"none\";\n            });\n            heroSections.forEach((el) => {\n              el.style.display = \"none\";\n            });\n            spacerSections.forEach((el) => {\n              el.style.display = \"block\";\n            });\n          } else {\n            featuredWrappers.forEach((el) => {\n              el.style.display = \"\";\n            });\n            heroSections.forEach((el) => {\n              el.style.display = \"\";\n            });\n            spacerSections.forEach((el) => {\n              el.style.display = \"none\";\n            });\n          }\n        }\n\n        window.updateFeatured = updateFeatured;\n\n        // --- Empty state ---\n        window.updateEmptyState = function updateEmptyState() {\n          if (!emptyEl) return;\n\n          const blogList = document.querySelector(\".blog-list.is-normal\");\n          if (!blogList) return;\n\n          const allItems = blogList.querySelectorAll(\".w-dyn-item\");\n          const visibleItems = Array.from(allItems).filter((el) => getComputedStyle(el).display !== \"none\");\n\n          const isEmpty = visibleItems.length === 0;\n          emptyEl.style.display = isEmpty ? \"block\" : \"none\";\n\n          const storiesEl = document.querySelector('[blog-element=\"stories\"]');\n          const recentEl = document.querySelector('[blog-element=\"recent\"]');\n          if (storiesEl) storiesEl.style.display = isEmpty ? \"none\" : \"\";\n          if (recentEl) recentEl.style.display = isEmpty ? \"none\" : \"\";\n\n          const newsletterEl = document.querySelector('[blog-element=\"newsletter\"]');\n          const emptyContainer = document.querySelector('[blog-element=\"empty-container\"]');\n\n          if (newsletterEl && emptyContainer) {\n            if (isEmpty) {\n              if (!newsletterEl._originalParent) {\n                newsletterEl._originalParent = newsletterEl.parentElement;\n                newsletterEl._originalNext = newsletterEl.nextElementSibling;\n              }\n              newsletterEl.style.marginTop = \"4rem\";\n              emptyContainer.appendChild(newsletterEl);\n            } else if (newsletterEl._originalParent) {\n              newsletterEl.style.marginTop = \"\";\n              if (newsletterEl._originalNext) {\n                newsletterEl._originalParent.insertBefore(newsletterEl, newsletterEl._originalNext);\n              } else {\n                newsletterEl._originalParent.appendChild(newsletterEl);\n              }\n            }\n          }\n\n          if (typeof window.updateFeatured === \"function\") {\n            window.updateFeatured();\n          }\n        };\n\n        function updateViewAll() {\n          const anyActive = getActiveCount() > 0;\n          setChecked(viewAllLabel, !anyActive);\n\n          const allPostsLabel = getDropdownByText(\"All posts\");\n          if (allPostsLabel) setChecked(allPostsLabel, !anyActive);\n        }\n\n        function clearAllCategories() {\n          leftFilterLabels.forEach((l) => setChecked(l, false));\n\n          dropdownLabels.forEach((l) => {\n            if (getText(l) === \"All posts\") return;\n\n            const input = l.querySelector(\"input[fs-list-value]\");\n            if (input && input.checked) {\n              isSyncing = true;\n              input.click();\n              isSyncing = false;\n            }\n\n            setChecked(l, false);\n          });\n        }\n\n        // --- NEW: clear everything except one category (single-select core) ---\n        function clearOtherCategories(exceptText) {\n          // Visually uncheck every left filter except the one we just selected\n          leftFilterLabels.forEach((l) => {\n            if (getText(l) !== exceptText) setChecked(l, false);\n          });\n\n          // Tell Finsweet to drop the previously-active dropdown filter(s)\n          dropdownLabels.forEach((l) => {\n            const text = getText(l);\n            if (text === \"All posts\" || text === exceptText) return;\n\n            if (isChecked(l)) {\n              const input = l.querySelector(\"input[fs-list-value]\");\n              if (input) {\n                isSyncing = true;\n                input.click();\n                isSyncing = false;\n              }\n              setChecked(l, false);\n            }\n          });\n        }\n\n        function afterFilterChange(source) {\n          console.log(\"[DEBUG] afterFilterChange:\", source);\n          updateViewAll();\n          updateCounter();\n          updateFeatured();\n\n          setTimeout(() => {\n            window.updateEmptyState();\n          }, 400);\n        }\n\n        // --- Left filters (single-select) ---\n        leftFilterLabels.forEach((label) => {\n          label.addEventListener(\"click\", () => {\n            if (isSyncing) return;\n\n            setTimeout(() => {\n              const text = getText(label);\n              const checked = isChecked(label);\n\n              // If the user just turned this one ON, kill all others first\n              if (checked) {\n                clearOtherCategories(text);\n              }\n\n              const mirror = getDropdownByText(text);\n              if (mirror) {\n                setChecked(mirror, !checked);\n                isSyncing = true;\n                triggerFinsweetClick(mirror);\n                isSyncing = false;\n              }\n\n              afterFilterChange(\"left: \" + text);\n            }, 0);\n          });\n        });\n\n        // --- View all ---\n        viewAllLabel.addEventListener(\"click\", () => {\n          if (isSyncing) return;\n\n          setTimeout(() => {\n            if (isChecked(viewAllLabel)) {\n              clearAllCategories();\n              afterFilterChange(\"view-all\");\n            }\n          }, 0);\n        });\n\n        // --- Dropdown (single-select) ---\n        dropdownLabels.forEach((label) => {\n          label.addEventListener(\"click\", () => {\n            if (isSyncing) return;\n\n            setTimeout(() => {\n              const text = getText(label);\n\n              if (text === \"All posts\") {\n                clearAllCategories();\n                afterFilterChange(\"dropdown-all\");\n                return;\n              }\n\n              const checked = isChecked(label);\n\n              // If the user just turned this one ON, kill all others first\n              if (checked) {\n                clearOtherCategories(text);\n              }\n\n              const mirror = getLeftByText(text);\n              if (mirror) setChecked(mirror, checked);\n\n              afterFilterChange(\"dropdown: \" + text);\n            }, 0);\n          });\n        });\n\n        // --- Search ---\n        if (searchInput) {\n          searchInput.addEventListener(\"input\", () => {\n            updateFeatured();\n            setTimeout(() => {\n              window.updateEmptyState();\n            }, 400);\n          });\n        }\n\n        // --- Init ---\n        updateViewAll();\n        updateCounter();\n        updateFeatured();\n        window.updateEmptyState();\n\n        console.log(\"[DEBUG] Init complete\");\n      });\n\n      // --- Pagination scroll ---\n      const paginationWrapper = document.querySelector(\".w-pagination-wrapper\");\n\n      if (paginationWrapper) {\n        paginationWrapper.addEventListener(\"click\", (e) => {\n          const clicked = e.target.closest(\".blog-pagination-el, .fs-page-button\");\n          if (!clicked) return;\n\n          const blogSection = document.getElementById(\"blog\");\n          if (blogSection) {\n            blogSection.scrollIntoView({ behavior: \"smooth\" });\n          }\n        });\n      }" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "const blogList = document.querySelector(\".blog-list.is-normal\");\n\n      if (blogList) {\n        const observer = new MutationObserver(() => {\n          console.log(\"[DEBUG] MutationObserver fired on .blog-list.is-normal\");\n          setTimeout(() => {\n            ScrollTrigger.refresh();\n            if (typeof window.updateEmptyState === \"function\") {\n              window.updateEmptyState();\n            } else {\n              console.warn(\"[DEBUG] window.updateEmptyState not available yet\");\n            }\n          }, 600);\n        });\n\n        observer.observe(blogList, {\n          childList: true,\n          subtree: true,\n        });\n      } else {\n        console.warn(\"[DEBUG] .blog-list.is-normal not found for MutationObserver\");\n      }" }} />
      <script type="text/template" data-tpl="1" dangerouslySetInnerHTML={{ __html: "(function () {\n        // Detect if a URL change is a Finsweet pagination change (key ends with _page)\n        function isPaginationChange(newUrl) {\n          try {\n            const next = new URL(newUrl, window.location.href);\n            const curr = new URL(window.location.href);\n            const keys = new Set([...next.searchParams.keys(), ...curr.searchParams.keys()]);\n            for (const key of keys) {\n              if (key.endsWith(\"_page\") && next.searchParams.get(key) !== curr.searchParams.get(key)) {\n                return true;\n              }\n            }\n            return false;\n          } catch (e) {\n            return false;\n          }\n        }\n\n        // Turn pagination replaceState calls into pushState so they go into browser history\n        const originalReplaceState = history.replaceState.bind(history);\n        history.replaceState = function (state, title, url) {\n          if (url && isPaginationChange(url)) {\n            return history.pushState(state, title, url);\n          }\n          return originalReplaceState(state, title, url);\n        };\n\n        // When the user hits Back/Forward, reload so Webflow serves the correct page\n        window.addEventListener(\"popstate\", function () {\n          window.location.reload();\n        });\n      })();" }} />
      <TemplateScripts wfPage="69cbbe270c8a2cc7773455e7" scripts={["/assets/vendor/finsweet-scrolldisable.js", "/assets/vendor/flowbase-tooltip.min.js", "/assets/vendor/finsweet-attributes.js"]} />
    </>
  );
}
