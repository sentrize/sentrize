import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Sentrize FAQ: answers on services, engagement models, timelines, support, and security for your software and cloud projects.",
};

export default function FaqPage() {
  return (
    <>
      <section className="page-hero hero--tight">
        <div className="container center">
          <span className="eyebrow">FAQ</span>
          <h1 style={{ margin: "0 auto" }}>Answers to the questions buyers ask most</h1>
          <div className="faq-search">
            <input
              className="input"
              type="search"
              placeholder="Search questions..."
              aria-label="Search FAQ"
              data-faq-search
            />
          </div>
          <div className="faq-cats">
            <Link className="tag" href="#faq-0">Engagement &amp; pricing</Link>
            <Link className="tag" href="#faq-1">Security &amp; compliance</Link>
            <Link className="tag" href="#faq-2">Delivery &amp; support</Link>
          </div>
        </div>
      </section>

      <section className="section" id="faq-0">
        <div className="container container--narrow">
          <span className="eyebrow">Engagement &amp; pricing</span>
          <h2 style={{ marginBottom: 24 }}>Engagement &amp; pricing</h2>
          <div className="accordion">
            <details data-faq-item>
              <summary>What engagement models do you offer?</summary>
              <div className="acc__body">
                Three core models: fixed-scope projects with defined deliverables and budget; time
                &amp; materials for evolving scope; and dedicated teams embedded into your workflow
                under your roadmap. Most clients start with a fixed-scope discovery, then transition
                to T&amp;M or a dedicated team.
              </div>
            </details>
            <details data-faq-item>
              <summary>How do you price projects and produce estimates?</summary>
              <div className="acc__body">
                After a scoping call we issue a written estimate in 3-5 business days. Fixed-scope is
                quoted as a total with milestone payments; T&amp;M and dedicated teams are priced per
                role per month. We provide a low/expected/high range with the assumptions behind each
                number. Estimates are free.
              </div>
            </details>
            <details data-faq-item>
              <summary>What are typical project timelines?</summary>
              <div className="acc__body">
                A focused MVP or web/mobile launch runs 8-14 weeks. Mid-size SaaS and CRM/ERP builds
                run 4-8 months. Enterprise modernization and large migrations are phased over 6-18
                months with production-ready increments every 2-3 weeks.
              </div>
            </details>
            <details data-faq-item>
              <summary>Fixed-price or time &amp; materials — which should we choose?</summary>
              <div className="acc__body">
                Fixed-price suits well-defined, stable scope (budget certainty). T&amp;M suits
                evolving requirements and iterative products (flexibility). A common pattern is
                fixed-price discovery and MVP, then T&amp;M or a dedicated team for ongoing
                development.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="faq-1">
        <div className="container container--narrow">
          <span className="eyebrow">Security &amp; compliance</span>
          <h2 style={{ marginBottom: 24 }}>Security &amp; compliance</h2>
          <div className="accordion">
            <details data-faq-item>
              <summary>How do you handle security and compliance?</summary>
              <div className="acc__body">
                Security is built into the delivery lifecycle: least-privilege IAM, encrypted
                secrets, dependency and container scanning in CI/CD, and infrastructure hardening by
                default. We support SOC 2, ISO 27001, GDPR, HIPAA, and PCI-DSS aligned engagements.
              </div>
            </details>
            <details data-faq-item>
              <summary>Who owns the intellectual property?</summary>
              <div className="acc__body">
                You do. On full payment per milestone, all source code, designs, documentation, and
                infrastructure definitions are assigned to you in writing — Git repos, CI/CD,
                Terraform, and architecture docs included. You are never locked in to operate what we
                build.
              </div>
            </details>
            <details data-faq-item>
              <summary>Will you sign an NDA?</summary>
              <div className="acc__body">
                Yes — we sign your NDA before any sensitive details are shared, or provide our mutual
                NDA. Confidentiality, data handling, and IP terms are reinforced in the master
                services agreement.
              </div>
            </details>
            <details data-faq-item>
              <summary>Where is our data hosted, and can we control residency?</summary>
              <div className="acc__body">
                Yes. We deploy to the AWS regions you specify, so residency can be pinned to your
                jurisdiction (EU, US, UK, Australia, APAC). Residency and processing terms are
                captured in a data processing agreement.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section" id="faq-2">
        <div className="container container--narrow">
          <span className="eyebrow">Delivery &amp; support</span>
          <h2 style={{ marginBottom: 24 }}>Delivery &amp; support</h2>
          <div className="accordion">
            <details data-faq-item>
              <summary>What SLA and support do you provide after launch?</summary>
              <div className="acc__body">
                We back production workloads with a 99.99% uptime SLA and 24/7 support: incident
                response with defined targets, proactive Prometheus/Grafana monitoring, on-call
                escalation, and scheduled maintenance. SLA terms and credits are defined per
                contract.
              </div>
            </details>
            <details data-faq-item>
              <summary>What is your technology stack?</summary>
              <div className="acc__body">
                Backend: Laravel, Node.js, TypeScript. Frontend: React, Next.js. Mobile: React
                Native, Flutter. Data: PostgreSQL, Redis. Infrastructure: AWS, Docker, Kubernetes,
                Terraform, CI/CD, Prometheus/Grafana. We fit the stack to your problem and document
                every decision.
              </div>
            </details>
            <details data-faq-item>
              <summary>Can you augment our existing engineering team?</summary>
              <div className="acc__body">
                Yes. We provide vetted engineers, DevOps specialists, and designers who integrate
                into your stand-ups, sprints, and tooling under your technical leadership. Scale
                capacity up or down with 30 days&#x27; notice.
              </div>
            </details>
            <details data-faq-item>
              <summary>What does onboarding look like?</summary>
              <div className="acc__body">
                Onboarding runs in the first 1-2 weeks: kickoff on goals and success metrics, access
                and environment setup, technical discovery of existing systems, and agreement on
                cadence and reporting. You leave with a confirmed roadmap and a named delivery lead.
              </div>
            </details>
            <details data-faq-item>
              <summary>What happens after launch?</summary>
              <div className="acc__body">
                Launch is a milestone, not the finish line. We offer post-launch support for bug
                fixes, performance tuning, monitoring, and feature work under a retainer or dedicated
                team, plus knowledge transfer so your team can operate independently.
              </div>
            </details>
            <details data-faq-item>
              <summary>How do we get started?</summary>
              <div className="acc__body">
                Send a short brief or book a scoping call. We run a discovery conversation, sign an
                NDA if needed, and return a written proposal with scope, estimate, and delivery plan
                within a few business days. Onboarding begins within one week of sign-off.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Still need help?</h2>
            <p className="lead">Our team replies to every inquiry within one business day.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn--light btn--lg" href="/contact">Start a project</Link>
              <Link
                className="btn btn--ghost btn--lg"
                style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
                href="/pricing"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
