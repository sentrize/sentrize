// Generated from the static Sentrize template by the migration converter.
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: { absolute: "Contact | Sentrize" },
  description: "Contact Sentrize to scope your software, cloud, or DevOps project. 24/7 support and fast response from our engineering team.",
  alternates: { canonical: "https://www.sentrize.com/contact" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "\n      html.w-mod-js:not(.w-mod-ix3) :is([text-paragraph-animation-start], [text-paragraph-animation]) {\n        visibility: hidden !important;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -o-font-smoothing: antialiased;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      /* Make Flowbase / Tippy tooltip text respect \\n */\n      .tippy-box .tippy-content {\n        white-space: pre-line;\n      }\n    " }} />
      <style dangerouslySetInnerHTML={{ __html: "\n      [text-letters-animation-start] {\n        opacity: 0.3;\n        color: #7fc8ff;\n      }\n    " }} />
      <script dangerouslySetInnerHTML={{ __html: "window.onload = function () {\n        var anchors = document.getElementsByTagName(\"*\");\n        for (var i = 0; i < anchors.length; i++) {\n          var anchor = anchors[i];\n          anchor.onclick = function () {\n            code = this.getAttribute(\"whenClicked\");\n            eval(code);\n          };\n        }\n      };" }} />
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
        <section className="section_contact-main">
          <div className="v2-padding-global">
            <div className="w-layout-blockcontainer v2-container w-container">
              <div className="contact-main-wrapper">
                <div className="contact-main-left">
                  <h1 className="t-heading-3-rg text-c-blue-light-900">
                    {"Let us scope what you are building"}
                  </h1>
                  <div className="spacer-40 _32-landscape" />
                  <p className="t-paragraph-2-rg text-c-white-60-p">
                    {"\n                    Tell us about your project. A senior engineer \u2014 not a sales rep \u2014 reviews every inquiry and replies\n                    within one business day."}
                    <br />
                    {"\u200d"}
                    <br />
                    <span className="text-c-blue-light-900">
                      {"Talk to us"}
                    </span>
                  </p>
                  <div className="w-richtext">
                    <ul className="list-2" role="list">
                      <li>
                        {"Sales: "}
                        <a className="text-c-blue-light-900 custom-hover" href="mailto:sales@sentrize.com">
                          {"sales@sentrize.com"}
                        </a>
                      </li>
                      <li>
                        {"Support: "}
                        <a className="text-c-blue-light-900 custom-hover" href="mailto:support@sentrize.com">
                          {"support@sentrize.com"}
                        </a>
                      </li>
                      <li>
                        {"Mon\u2013Fri, 9:00\u201318:00 local \u00b7 24/7 production support for SLA clients"}
                      </li>
                    </ul>
                  </div>
                  <div className="spacer-24 _16-landscape" />
                  <p className="t-paragraph-2-rg text-c-white-60-p">
                    <span className="text-c-blue-light-900">
                      {"What happens next"}
                    </span>
                    <br />
                    {"\n                    1. "}
                    <strong>
                      {"We review your brief"}
                    </strong>
                    {" \u2014 A solutions lead confirms fit, usually within one\n                    business day."}
                    <br />
                    {"\n                    2. "}
                    <strong>
                      {"Discovery call"}
                    </strong>
                    {" \u2014 A 30-45 minute call to align on goals, scope, and timeline."}
                    <br />
                    {"\n                    3. "}
                    <strong>
                      {"Written proposal"}
                    </strong>
                    {" \u2014 Clear scope, estimate range, and delivery plan within a few\n                    business days."}
                    <br />
                    {"\n                    4. "}
                    <strong>
                      {"Kickoff"}
                    </strong>
                    {" \u2014 On sign-off, onboarding begins within one week.\n                  "}
                  </p>
                  <div className="spacer-48 _24-landscape" />
                  <p className="t-label-1-rg blue-light-900" id="w-node-e26d5f55-b9a0-7422-6d2a-dc0edfb9f937-87f82ad9">
                    {"\n                    Offices \u2014 global delivery, local presence\n                  "}
                  </p>
                  <div className="spacer-24" />
                  <div className="contact-main-left_trusted">
                    <div className="t-paragraph-2-rg text-c-white-60-p">
                      <span className="text-c-blue-light-900">
                        {"Sydney, Australia"}
                      </span>
                      <br />
                      {"Level 12, 580 George Street,\n                      Sydney NSW 2000\n                    "}
                    </div>
                    <div className="t-paragraph-2-rg text-c-white-60-p">
                      <span className="text-c-blue-light-900">
                        {"London, United Kingdom"}
                      </span>
                      <br />
                      {"20 Farringdon Road,\n                      Clerkenwell, London EC1M 3HE\n                    "}
                    </div>
                    <div className="t-paragraph-2-rg text-c-white-60-p">
                      <span className="text-c-blue-light-900">
                        {"Singapore"}
                      </span>
                      <br />
                      {"9 Battery Road, #15-01, Singapore\n                      049910\n                    "}
                    </div>
                  </div>
                </div>
                <div className="contact-main-right" id="w-node-e26d5f55-b9a0-7422-6d2a-dc0edfb9f949-87f82ad9">
                  <div className="contact-main-right_inner">
                    <div className="w-embed w-script">
                      <div id="lc-contact-form">
                        <form action="#" autoComplete="on" id="lc-step1" method="post">
                          <div className="field">
                            <label htmlFor="name">
                              {"Name "}
                              <span className="req">
                                {"*"}
                              </span>
                            </label>
                            <input autoComplete="name" id="name" name="name" placeholder="Jane Smith" required title="Please enter your name." type="text" />
                          </div>
                          <div className="field">
                            <label htmlFor="email">
                              {"Work email "}
                              <span className="req">
                                {"*"}
                              </span>
                            </label>
                            <input autoComplete="email" id="email" name="email" placeholder="jane@company.com" required title="Enter a valid email." type="email" />
                          </div>
                          <div className="field">
                            <label htmlFor="company">
                              {"Company"}
                            </label>
                            <input autoComplete="organization" id="company" name="company" placeholder="Acme Inc." type="text" />
                          </div>
                          <div className="field-row">
                            <div className="field">
                              <label htmlFor="service">
                                {"Service"}
                              </label>
                              <select id="service" name="service">
                                <option value="">
                                  {"Select..."}
                                </option>
                                <option value="Software Development">
                                  {"Software Development"}
                                </option>
                                <option value="SaaS Development">
                                  {"SaaS Development"}
                                </option>
                                <option value="Web / Mobile">
                                  {"Web / Mobile"}
                                </option>
                                <option value="Cloud & DevOps">
                                  {"Cloud & DevOps"}
                                </option>
                                <option value="AWS / Kubernetes">
                                  {"AWS / Kubernetes"}
                                </option>
                                <option value="Security & Compliance">
                                  {"Security & Compliance"}
                                </option>
                                <option value="AI & Automation">
                                  {"AI & Automation"}
                                </option>
                                <option value="Other">
                                  {"Other"}
                                </option>
                              </select>
                            </div>
                            <div className="field">
                              <label htmlFor="budget">
                                {"Budget range"}
                              </label>
                              <select id="budget" name="budget">
                                <option value="">
                                  {"Select..."}
                                </option>
                                <option value="Under $25k">
                                  {"Under $25k"}
                                </option>
                                <option value="$25k\u2013$75k">
                                  {"$25k\u2013$75k"}
                                </option>
                                <option value="$75k\u2013$200k">
                                  {"$75k\u2013$200k"}
                                </option>
                                <option value="$200k+">
                                  {"$200k+"}
                                </option>
                                <option value="Not sure yet">
                                  {"Not sure yet"}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="field">
                            <label htmlFor="message">
                              {"Message "}
                              <span className="req">
                                {"*"}
                              </span>
                            </label>
                            <textarea id="message" name="message" placeholder="Tell us about your project, current stack, and goals" required title="Please add a short message." />
                          </div>
                          <button className="btn-primary" type="submit">
                            {"Send message "}
                            <span className="arrow">
                              {"\u2192"}
                            </span>
                          </button>
                          <p className="form-subtitle" style={{ marginTop: "1rem", marginBottom: "0" }}>
                            {"\n                            By submitting you agree to our privacy policy. We never share your details.\n                          "}
                          </p>
                        </form>
                        <div id="lc-confirmation" style={{ display: "none" }}>
                          <div className="confirmation-icon">
                            {"\u2713"}
                          </div>
                          <h2 className="form-title">
                            {"Thanks \u2014 your message is on its way."}
                          </h2>
                          <p className="form-subtitle">
                            {"We reply within one business day."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hide w-embed">
                      <style dangerouslySetInnerHTML={{ __html: "\n                        #lc-contact-form {\n                          background: transparent;\n                          border: 0px solid;\n                          border-radius: 0px;\n                          padding: 0px;\n                        }\n\n                        input[type=\"text\"],\n                        input[type=\"email\"],\n                        select,\n                        textarea {\n                          width: 100%;\n                          background-color: var(--_v-2-colors---c-blue-dark--900);\n                          min-height: 2.75rem;\n                          color: var(--_v-2-colors---c-blue-light--500);\n                          border: 1px solid #e0effe29;\n                          border-radius: 0.375rem;\n                          margin-bottom: 0;\n                          padding: 0.5rem 1.125rem;\n                          font-family: Aeonik, Tahoma, sans-serif;\n                          font-size: 1rem;\n                          font-weight: 400;\n                          line-height: 1;\n                          transition: all 0.3s;\n                          outline-offset: 0px;\n                          box-shadow: none;\n                        }\n\n                        input[type=\"text\"]:hover,\n                        input[type=\"email\"]:hover,\n                        select:hover,\n                        textarea:hover {\n                          border-color: var(--_v-2-colors---c-blue-dark--600);\n                        }\n\n                        input[type=\"text\"]:focus,\n                        input[type=\"email\"]:focus,\n                        select:focus,\n                        textarea:focus {\n                          border-color: var(--_v-2-colors---c-blue-dark--600);\n                          outline: none;\n                          box-shadow: rgba(127, 200, 255, 0.1) 0px 0px 0px 3px;\n                        }\n\n                        input[type=\"text\"]::placeholder,\n                        input[type=\"email\"]::placeholder,\n                        select::placeholder,\n                        textarea::placeholder {\n                          color: rgba(204, 233, 255, 0.5);\n                          opacity: 1;\n                        }\n\n                        textarea {\n                          resize: vertical;\n                          min-height: 100px;\n                        }\n\n                        label {\n                          font-family: Twklausanne, Tahoma, sans-serif;\n                          font-size: 1rem;\n                          font-weight: 300;\n                          line-height: 140%;\n                          letter-spacing: normal;\n                          color: var(--_v-2-colors---c-blue-light--300);\n                        }\n\n                        .req {\n                          color: var(--_v-2-colors---c-blue-light--900);\n                        }\n\n                        .btn-primary {\n                          background-color: var(--_v-2-colors---c-blue-light--400);\n                          min-height: 3rem;\n                          color: var(--_v-2-colors---c-blue-dark--900);\n                          white-space: nowrap;\n                          border-radius: 0.375rem;\n                          flex: none;\n                          justify-content: center;\n                          align-items: center;\n                          padding: 0.75rem 1.125rem;\n                          font-family: Aeonik, Tahoma, sans-serif;\n                          font-size: 0.875rem;\n                          font-weight: 400;\n                          line-height: 1;\n                          text-decoration: none;\n                          display: flex;\n                          position: relative;\n                          overflow: hidden;\n                          transition: all 0.3s;\n                          width: 100%;\n                          gap: 0.5rem;\n                        }\n\n                        .btn-primary:hover {\n                          box-shadow: 0 0 20px 4px #7fc8ff66;\n                          background-color: var(--_v-2-colors---c-blue-light--400);\n                        }\n\n                        .form-title {\n                          color: var(--_v-2-colors---c-blue-light--900);\n                          font-family: Aeonik, Tahoma, sans-serif;\n                          font-size: 1.25rem;\n                          font-weight: 400;\n                          line-height: 140%;\n                        }\n\n                        textarea {\n                          padding: 1.125rem;\n                        }\n\n                        .field-row {\n                          grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);\n                          gap: 1rem;\n                          display: grid;\n                        }\n\n                        @media only screen and (max-width: 479px) {\n                          .field-row {\n                            grid-template-columns: minmax(0px, 1fr);\n                            gap: 0rem;\n                          }\n                        }\n\n                        .field {\n                          flex-direction: column;\n                          gap: 0.375rem;\n                          margin-bottom: 1.25rem;\n                          display: flex;\n                        }\n\n                        .form-subtitle {\n                          font-family: Twklausanne, Tahoma, sans-serif;\n                          font-size: 1rem;\n                          font-weight: 300;\n                          line-height: 140%;\n                          color: var(--_v-2-colors---c-white--60-p);\n                          margin-bottom: 1.5rem;\n                          max-width: 30.625rem;\n                        }\n\n                        .form-title {\n                          margin-bottom: 1rem;\n                        }\n\n                        #lc-confirmation {\n                          text-align: center;\n                        }\n\n                        .confirmation-icon {\n                          width: 3rem;\n                          height: 3rem;\n                          color: var(--lc-blue);\n                          background: #7fc8ff1a;\n                          border: 1px solid #7fc8ff4d;\n                          border-radius: 50%;\n                          justify-content: center;\n                          align-items: center;\n                          margin: 0 auto 1.125rem;\n                          font-size: 1.375rem;\n                          display: flex;\n                        }\n\n                        select {\n                          background-image: url(assets/images/chevron-down.svg);\n                          background-position: right 14px center;\n                          background-repeat: no-repeat;\n                          padding-right: 2.25rem;\n                        }\n                      " }} />
                    </div>
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
      <TemplateScripts wfPage="660189f45f9033dd87f82ad9" scripts={["/assets/vendor/finsweet-scrolldisable.js", "/assets/vendor/flowbase-tooltip.min.js"]} />
    </>
  );
}
