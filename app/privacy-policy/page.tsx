import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sentrize collects, uses, protects, and shares personal data — including GDPR rights, subprocessors, international transfers, and retention.",
  alternates: { canonical: "https://www.sentrize.com/privacy-policy" },
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
                {"Privacy Policy"}
              </h1>
              <div className="spacer-24" />
              <p className="t-paragraph-1-rg">
                {"How Sentrize collects, uses, and protects your information."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-3-rg text-c-white-60-p">
                {"Last updated: August 2026"}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"1. Who we are and what this policy covers"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Sentrize designs, builds, and operates custom software and cloud platforms for startups, SaaS companies, and enterprises, with offices in Sydney, London, and Singapore. This policy explains how we handle personal data when you visit www.sentrize.com, contact us about a project, or work with us as a client."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"It covers three situations, and our role differs in each:"}
              </p>
              <div className="spacer-16" />
              <ul style={{ margin: 0, paddingLeft: "1.375rem" }}>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Website visitors and prospects."}</strong>
                  {" When you browse our site, submit the contact form, or exchange emails with our team, Sentrize decides how and why that data is used — we act as the "}
                  <strong>{"data controller"}</strong>
                  {"."}
                </li>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Client business contacts."}</strong>
                  {" When we work with your organization, we hold contact details of your team members (names, work emails, roles) to deliver and administer the engagement. Here too we are the controller."}
                </li>
                <li className="t-paragraph-2-rg">
                  <strong>{"Client project data."}</strong>
                  {" When we build, migrate, or operate systems that contain your end users' or employees' personal data, we handle that data only on your documented instructions. For that data, "}
                  <strong>{"you are the controller and Sentrize is a data processor"}</strong>
                  {", and the terms of our data processing agreement (DPA) with you apply, not this policy."}
                </li>
              </ul>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"2. Information we collect"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                <strong>{"You provide it directly:"}</strong>
                {" name, work email, company, the service you're interested in, budget range, and anything you include in a message to us; contact details exchanged during an engagement; billing details needed to invoice your organization."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                <strong>{"We collect it automatically:"}</strong>
                {" IP address, browser and device type, pages visited, referring page, and similar technical logs generated when you use our website. We use this to keep the site running, secure, and improving."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                <strong>{"Client project data:"}</strong>
                {" whatever data your systems contain when we host, operate, or work on them. We do not use this data for our own purposes, and we access it only to the extent your instructions and the engagement require."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"We do not intentionally collect special-category (sensitive) data through this website, and we ask that you not include it in contact-form messages."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"3. How we use personal data, and our legal bases"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Where GDPR or similar laws apply, we rely on the following legal bases:"}
              </p>
              <div className="spacer-16" />
              <ul style={{ margin: 0, paddingLeft: "1.375rem" }}>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Responding to inquiries and scoping projects"}</strong>
                  {" — our legitimate interest in running our business, and steps taken at your request before entering a contract."}
                </li>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Delivering services and managing engagements"}</strong>
                  {" — performance of a contract with you or your organization."}
                </li>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Invoicing, accounting, tax, and legal compliance"}</strong>
                  {" — compliance with legal obligations."}
                </li>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Securing our systems and preventing abuse"}</strong>
                  {" — our legitimate interest in protecting our infrastructure and our clients'."}
                </li>
                <li className="t-paragraph-2-rg">
                  <strong>{"Occasional updates about our services"}</strong>
                  {" — legitimate interest for existing business contacts, or consent where the law requires it. You can opt out at any time."}
                </li>
              </ul>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"We do not sell personal data, and we do not use it for automated decision-making that produces legal or similarly significant effects."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"4. Cookies and analytics"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Our website uses a small number of cookies and similar technologies: strictly necessary cookies that make the site work, and analytics that help us understand how the site is used so we can improve it. Analytics data is aggregated wherever practical. You can control cookies through your browser settings; where the law requires consent for non-essential cookies, we ask for it before setting them."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"5. Sharing and subprocessors"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"We share personal data only where needed to run our business:"}
              </p>
              <div className="spacer-16" />
              <ul style={{ margin: 0, paddingLeft: "1.375rem" }}>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Cloud infrastructure providers"}</strong>
                  {" — primarily Amazon Web Services (AWS), which hosts our website and much of the infrastructure we manage."}
                </li>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Business software providers"}</strong>
                  {" — email, CRM, ticketing, accounting, and communication tools we use to operate."}
                </li>
                <li className="t-paragraph-2-rg" style={{ marginBottom: "0.75rem" }}>
                  <strong>{"Professional advisers"}</strong>
                  {" — auditors, insurers, accountants, and lawyers, under confidentiality obligations."}
                </li>
                <li className="t-paragraph-2-rg">
                  <strong>{"Authorities"}</strong>
                  {" — where the law requires it, or to protect our rights or the safety of others."}
                </li>
              </ul>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"Every processor acting on our behalf is bound by a written agreement requiring confidentiality and appropriate security. For client project data processed under a DPA, we maintain a list of approved subprocessors and notify clients of changes as the DPA provides. Enterprise clients can request the current subprocessor list at privacy@sentrize.com."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"6. International transfers"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"We are a globally distributed team with offices in Australia, the United Kingdom, and Singapore, so personal data may be transferred between these regions and to our subprocessors' locations. Where data protected by GDPR or UK GDPR leaves the EEA or UK, we rely on adequacy decisions where available and otherwise on the European Commission's Standard Contractual Clauses (and the UK Addendum or IDTA), together with supplementary technical measures such as encryption. For client project data, data-residency requirements can be fixed contractually — many of our clients pin workloads to specific AWS regions."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"7. How we protect your data"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Security is our discipline, not an afterthought. Sentrize is certified to "}
                <strong>{"ISO 27001"}</strong>
                {" and audited annually against "}
                <strong>{"SOC 2 Type II"}</strong>
                {" for security, availability, and confidentiality. In practice that means: least-privilege, role-based access with MFA; encryption in transit and at rest; infrastructure defined as code and changes going through review; continuous monitoring and logging; documented incident response; and background-checked personnel bound by confidentiality. Access to client data is restricted to the engineers assigned to your engagement. If a breach affects your personal data, we will notify you and any relevant regulator as the law requires."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"8. How long we keep data"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"We keep personal data only as long as needed for the purpose it was collected: inquiry data for as long as the conversation is live and a reasonable period after; client contact and contract data for the engagement plus the period required for legal, tax, and audit obligations; website logs for a short rolling window. Client project data is retained and deleted according to your instructions and the DPA — typically returned or deleted when the engagement ends, subject to any legally required backups, which expire on their own schedule."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"9. Your rights"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Depending on where you live, you may have the right to access the personal data we hold about you, correct it, delete it, restrict or object to its processing, receive it in a portable format, and withdraw consent where processing is based on consent. These rights exist under GDPR and UK GDPR, and similar rights apply under the Australian Privacy Act, Singapore's PDPA, and various other laws."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-2-rg">
                {"To exercise any of them, email "}
                <strong>{"privacy@sentrize.com"}</strong>
                {". We will respond within one month (or the shorter period your local law requires) and may ask you to verify your identity first. If we hold your data as a processor for one of our clients, we will refer your request to them and support their response. You also have the right to complain to your data protection authority, though we'd appreciate the chance to resolve your concern first."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"10. Children"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Our website and services are aimed at businesses and are not directed at children. We do not knowingly collect personal data from anyone under 16; if you believe we have, contact privacy@sentrize.com and we will delete it."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"11. Changes to this policy"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"We may update this policy as our services, subprocessors, or the law change. We will post the revised version here with an updated \"Last updated\" date, and for material changes we will make the update prominent or notify active clients directly."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"12. Contact"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Questions, requests, or concerns about privacy: "}
                <strong>{"privacy@sentrize.com"}</strong>
                {". You can also write to any of our offices — Sydney, London, or Singapore — listed on our "}
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
