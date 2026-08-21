import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing Sentrize's website and services — engagements, fees, intellectual property, confidentiality, warranties, and liability.",
  alternates: { canonical: "https://www.sentrize.com/terms-of-service" },
};

export default function Page() {
  return (
    <main className="main-wrapper">
      <section>
        <div className="v2-padding-global">
          <div className="w-layout-blockcontainer v2-container w-container">
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <div className="spacer-160" />
              <h1 className="t-heading-2-rg text-c-blue-light-900">
                {"Terms of Service"}
              </h1>
              <div className="spacer-24" />
              <p className="t-paragraph-1-rg">
                {"The terms governing use of Sentrize services and website."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-3-rg text-c-white-60-p">
                {"Last updated: August 2026"}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"1. Acceptance and definitions"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"These Terms of Service (\"Terms\") govern your use of the Sentrize website at www.sentrize.com and, together with any engagement-specific agreement, the professional services we provide. By using the site or engaging us, you accept these Terms on behalf of yourself and, where applicable, the organization you represent — and you confirm you have authority to do so."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"In these Terms: "}
                <strong>{"\"Sentrize\""}</strong>
                {", "}
                <strong>{"\"we\""}</strong>
                {", or "}
                <strong>{"\"us\""}</strong>
                {" means Sentrize, operating from offices in Sydney, London, and Singapore; "}
                <strong>{"\"Client\""}</strong>
                {" or "}
                <strong>{"\"you\""}</strong>
                {" means the person or organization using our site or services; "}
                <strong>{"\"Services\""}</strong>
                {" means the software engineering, cloud, DevOps, and related services we provide; "}
                <strong>{"\"SOW\""}</strong>
                {" means a statement of work, proposal, or order form signed by both parties; "}
                <strong>{"\"Deliverables\""}</strong>
                {" means the work product we create specifically for you under a SOW."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"2. Our services"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Sentrize provides custom software development, SaaS and application engineering, cloud infrastructure and migration, DevOps automation, managed hosting and operations, security and compliance engineering, and AI and automation services. Managed and supported services carry defined uptime and response-time commitments — including 99.99% monthly availability for managed production services and 24/7 incident response — as set out in our "}
                <a href="/sla-policy" className="text-c-blue-light-900" style={{ textDecoration: "underline" }}>
                  {"SLA Policy"}
                </a>
                {" and refined in your agreement. Service credits for missed commitments are defined there and in your contract."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"3. Proposals and statements of work govern engagements"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Every engagement is defined by a written SOW covering scope, deliverables, timelines, assumptions, and fees. If a SOW conflicts with these Terms, "}
                <strong>{"the SOW prevails"}</strong>
                {" for that engagement. Changes to scope are handled through a written change process agreed by both parties; neither side is bound by scope changes discussed informally until they are documented. These Terms fill the gaps the SOW doesn't address."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"4. Client responsibilities"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Good engineering outcomes depend on both sides. You agree to: provide timely access to the people, systems, credentials, environments, and information reasonably needed for the work; ensure you have the rights to any materials, data, and third-party services you ask us to use; review and respond to deliverables, questions, and approvals within agreed timeframes; and maintain any licenses and third-party accounts (for example, your cloud provider accounts) that the engagement depends on, unless the SOW says otherwise. Delays or costs caused by missing inputs or access are not Sentrize's responsibility, and timelines adjust accordingly."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"You also agree not to misuse our website — including attempting to breach its security, scraping it at scale, or using it for unlawful purposes."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"5. Fees and payment"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Fees, currency, invoicing schedule, and payment terms are stated in each SOW. Unless the SOW says otherwise, invoices are due within 14 days, fees are exclusive of taxes (which you are responsible for, other than taxes on our income), and expenses pre-approved by you are billed at cost. We may suspend work or, for managed services, suspend service on accounts with invoices materially overdue, after written notice and a reasonable chance to pay. Fees for work properly performed are non-refundable except as the SOW or the law provides."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"6. Intellectual property"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                <strong>{"You own what you pay for."}</strong>
                {" Upon full payment of the applicable fees, Sentrize assigns to you all intellectual property rights in the Deliverables created specifically for you under the SOW."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                <strong>{"We keep our toolbox."}</strong>
                {" Sentrize retains ownership of everything that existed before the engagement or that we develop for general use — including our methodologies, frameworks, internal tools, code libraries, infrastructure templates, and accumulated know-how (\"Background IP\"). Where Background IP is embedded in a Deliverable, you receive a perpetual, worldwide, non-exclusive, royalty-free license to use it as part of that Deliverable."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"Open-source components remain governed by their own licenses, which we identify where the SOW requires. Nothing in these Terms transfers rights in either party's trademarks. We may identify you as a client and describe the engagement in general terms unless your SOW or NDA says otherwise."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"7. Confidentiality"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Each party will protect the other's confidential information — business plans, technical designs, credentials, pricing, and anything a reasonable person would treat as confidential — using at least the care it applies to its own, and will use it only for the engagement. This obligation doesn't apply to information that is public through no fault of the recipient, already lawfully known, independently developed, or required to be disclosed by law (with notice where lawful). If the parties have signed an NDA, its terms control where they are stricter. Confidentiality obligations survive the end of the engagement."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"8. Data protection"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Where our work involves personal data, our "}
                <a href="/privacy-policy" className="text-c-blue-light-900" style={{ textDecoration: "underline" }}>
                  {"Privacy Policy"}
                </a>
                {" explains how we handle it and the roles we play. When Sentrize processes personal data on your behalf — for example under managed hosting or operations — we do so as your processor under a "}
                <strong>{"data processing agreement (DPA)"}</strong>
                {" incorporating Standard Contractual Clauses where required; a DPA is available to all enterprise clients on request via legal@sentrize.com. Our security controls are certified to ISO 27001 and audited under SOC 2 Type II."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"9. Warranties and disclaimers"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"We warrant that Services will be performed with the professional skill and care reasonably expected of an experienced software and cloud engineering firm, and that Deliverables will materially conform to the SOW's specifications for the warranty period stated there (or 30 days from delivery if none is stated). Your exclusive remedy for breach of this warranty is re-performance or correction of the non-conforming work."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"Except as expressly stated in these Terms or a SOW, the Services, Deliverables, and website are provided "}
                <strong>{"\"as is\""}</strong>
                {", and we disclaim all other warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that software will be error-free or that operation will be uninterrupted — commitments on availability live in the "}
                <a href="/sla-policy" className="text-c-blue-light-900" style={{ textDecoration: "underline" }}>
                  {"SLA Policy"}
                </a>
                {" and your agreement. Nothing in these Terms excludes warranties or guarantees that cannot be excluded under applicable law, including non-excludable consumer guarantees."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"10. Limitation of liability"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"To the maximum extent permitted by law: neither party is liable for indirect, incidental, special, or consequential loss, loss of profits, revenue, or data, even if advised of the possibility; and each party's total aggregate liability arising out of or relating to an engagement is capped at "}
                <strong>{"the fees paid or payable under the applicable SOW in the twelve (12) months preceding the event giving rise to the claim"}</strong>
                {". These limits do not apply to a party's breach of confidentiality, infringement of the other party's intellectual property, amounts owed under Section 5, or liability that cannot be limited by law (such as fraud or wilful misconduct)."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"11. Termination"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Either party may terminate a SOW for material breach if the breach is not cured within 30 days of written notice, or immediately if the other party becomes insolvent. Termination for convenience, notice periods, and wind-down terms for managed services are set in each SOW. On termination you pay for work performed and non-cancellable commitments up to the effective date; we hand over Deliverables paid for and, for managed services, provide reasonable transition assistance at our standard rates. Sections on IP, confidentiality, payment, liability, and governing law survive."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"12. Governing law"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"These Terms are governed by the laws of "}
                <strong>{"[Jurisdiction — confirm with counsel]"}</strong>
                {", and the courts (or agreed arbitration forum) of that jurisdiction have exclusive jurisdiction over disputes, subject to any different choice made in a SOW. Before starting proceedings, the parties will first attempt in good faith to resolve any dispute at a senior level for at least 30 days."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"13. Changes to these terms"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"We may update these Terms from time to time. The current version is always at this page with its \"Last updated\" date; material changes will be highlighted, and changes do not apply retroactively to a signed SOW. Continued use of the website or commencement of a new SOW after changes take effect constitutes acceptance."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"14. Contact"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Questions about these Terms, DPA requests, or legal notices: "}
                <strong>{"legal@sentrize.com"}</strong>
                {", or write to any of our offices — Sydney, London, or Singapore — listed on our "}
                <a href="/contact" className="text-c-blue-light-900" style={{ textDecoration: "underline" }}>
                  {"contact page"}
                </a>
                {"."}
              </p>
              <div className="spacer-64" />

              <div
                className="t-paragraph-3-rg text-c-white-60-p"
                style={{
                  borderLeft: "2px solid rgba(255, 255, 255, 0.2)",
                  paddingLeft: "1rem",
                }}
              >
                <strong>{"Note for migration:"}</strong>
                {" upgraded from the old site's placeholder template. Have legal counsel review before publishing — especially governing law, jurisdiction-specific rights, and the liability cap."}
              </div>
              <div className="spacer-160" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
