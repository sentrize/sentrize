import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Sentrize pricing built around your scope: flexible engagement models for software, cloud, and DevOps. Transparent and outcome-driven.",
};

export default function PricingPage() {
  return (
    <>
      <section className="hero hero--centered glow">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1>Engagement models that scale with you</h1>
          <p className="lead">
            Transparent, role-based pricing. Every plan includes source-code ownership, CI/CD, and
            documented infrastructure.
          </p>
          <div style={{ marginTop: 22 }}>
            <div className="toggle" role="group" aria-label="Billing period">
              <button className="active" data-bill="monthly">Project / Monthly</button>
              <button data-bill="annual">Annual (save 15%)</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing">
            <div className="price-card reveal">
              <h3>Launch</h3>
              <p className="muted">For getting a validated product to market — fast and well-engineered.</p>
              <div className="price" data-price>From $18k</div>
              <p className="muted" style={{ marginTop: -6 }}>Startups &amp; founders building an MVP</p>
              <ul className="checks" style={{ margin: "20px 0" }}>
                <li>Discovery workshop &amp; technical scoping</li>
                <li>Single web or mobile application build</li>
                <li>Modern stack: React/Next.js or React Native/Flutter</li>
                <li>Core API and PostgreSQL design</li>
                <li>AWS deployment with CI/CD pipeline</li>
                <li>SSL, baseline hardening, and monitoring</li>
                <li>Source code + IaC handover</li>
                <li>30 days post-launch support</li>
              </ul>
              <Link className="btn btn--primary" href="/contact" style={{ width: "100%" }}>Start your build</Link>
            </div>
            <div className="price-card price-card--featured reveal">
              <h3>Scale</h3>
              <p className="muted">For growing products that need to ship faster and handle more load.</p>
              <div className="price" data-price>From $14k/mo</div>
              <p className="muted" style={{ marginTop: -6 }}>Funded startups &amp; scaling SaaS</p>
              <ul className="checks" style={{ margin: "20px 0" }}>
                <li>Everything in Launch, plus:</li>
                <li>Cross-platform web and mobile delivery</li>
                <li>Dedicated multi-disciplinary squad</li>
                <li>Auto-scaling AWS + Kubernetes infrastructure</li>
                <li>CI/CD with automated testing and staged releases</li>
                <li>AI &amp; automation features and integrations</li>
                <li>Observability (Prometheus/Grafana) + 24/7 monitoring</li>
                <li>99.99% SLA-backed uptime</li>
              </ul>
              <Link className="btn btn--primary" href="/contact" style={{ width: "100%" }}>Scale with us</Link>
            </div>
            <div className="price-card reveal">
              <h3>Enterprise</h3>
              <p className="muted">For mission-critical systems requiring compliance, scale, and rigor.</p>
              <div className="price" data-price>Custom</div>
              <p className="muted" style={{ marginTop: -6 }}>Enterprises &amp; regulated SMEs</p>
              <ul className="checks" style={{ margin: "20px 0" }}>
                <li>Everything in Scale, plus:</li>
                <li>Enterprise software, digital transformation, CRM/ERP</li>
                <li>Multi-region architecture + data residency controls</li>
                <li>Security &amp; compliance program (SOC 2, ISO 27001, HIPAA, PCI-DSS)</li>
                <li>Cloud migration and IaC modernization</li>
                <li>Managed DevOps with on-call incident response</li>
                <li>Dedicated solutions architect &amp; delivery lead</li>
                <li>Custom SLA, audit support, quarterly reviews</li>
              </ul>
              <Link className="btn btn--primary" href="/contact" style={{ width: "100%" }}>Talk to sales</Link>
            </div>
          </div>
          <p className="center muted" style={{ marginTop: 24 }}>
            Transparent estimates before any work begins. Month-to-month, full code ownership, no
            lock-in.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="card--accent card center" style={{ maxWidth: 760, margin: "0 auto" }}>
            <span className="eyebrow">Custom / Dedicated Team</span>
            <h2 style={{ fontSize: "1.7rem" }}>A ring-fenced squad built around your roadmap</h2>
            <p className="lead" style={{ margin: "12px auto 18px" }}>
              Engineers, DevOps specialists, and designers embedded into your workflow, scaling up or
              down at a transparent monthly rate per role.
            </p>
            <Link className="btn btn--primary btn--lg" href="/contact">Build my team</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="center" style={{ maxWidth: 560, margin: "0 auto" }}>
            <span className="eyebrow">Pricing FAQ</span>
            <h2>Common questions</h2>
          </div>
          <div className="accordion" style={{ marginTop: 28 }}>
            <details>
              <summary>What engagement models do you offer?</summary>
              <div className="acc__body">
                Three core models: fixed-scope projects with defined deliverables and budget; time
                &amp; materials for evolving scope; and dedicated teams embedded into your workflow
                under your roadmap. Most clients start with a fixed-scope discovery, then transition
                to T&amp;M or a dedicated team.
              </div>
            </details>
            <details>
              <summary>How do you price projects and produce estimates?</summary>
              <div className="acc__body">
                After a scoping call we issue a written estimate in 3-5 business days. Fixed-scope is
                quoted as a total with milestone payments; T&amp;M and dedicated teams are priced per
                role per month. We provide a low/expected/high range with the assumptions behind each
                number. Estimates are free.
              </div>
            </details>
            <details>
              <summary>What are typical project timelines?</summary>
              <div className="acc__body">
                A focused MVP or web/mobile launch runs 8-14 weeks. Mid-size SaaS and CRM/ERP builds
                run 4-8 months. Enterprise modernization and large migrations are phased over 6-18
                months with production-ready increments every 2-3 weeks.
              </div>
            </details>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
