import type { Metadata } from "next";
import Metrics from "@/components/Metrics";
import Cta from "@/components/Cta";
import { METRICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real, measurable results Sentrize has delivered: faster releases, lower cloud spend, and uptime that holds under load.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="hero hero--centered glow">
        <div className="container">
          <span className="eyebrow">Success stories</span>
          <h1>Results we have engineered</h1>
          <p className="lead">Faster releases, lower cloud spend, and uptime that holds under load — outcomes from real engagements.</p>
        </div>
      </section>

      <Metrics items={METRICS} dark />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>Insurance / Fintech</span>
              <div className="work__metric" style={{ fontSize: "1.7rem", fontWeight: 800 }}>Claim cycle time −71%</div>
              <h3 style={{ marginTop: "10px" }}>ClaimFlow</h3>
              <p className="muted">A multi-tenant claims platform with a configurable rules engine, idempotent event pipeline, and replayable audit logs for regulatory traceability.</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>E-commerce / Retail</span>
              <div className="work__metric" style={{ fontSize: "1.7rem", fontWeight: 800 }}>p95 load −64% · conversion +18%</div>
              <h3 style={{ marginTop: "10px" }}>Loyalo</h3>
              <p className="muted">A headless storefront and loyalty engine serving 14 regional brands from one core, with edge-rendered pages and real-time inventory sync.</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>Healthtech</span>
              <div className="work__metric" style={{ fontSize: "1.7rem", fontWeight: 800 }}>99.97% reading reliability</div>
              <h3 style={{ marginTop: "10px" }}>VitalLink</h3>
              <p className="muted">A HIPAA-aligned remote monitoring app streaming Bluetooth device data to clinicians, with offline-first sync and end-to-end encryption.</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>Logistics</span>
              <div className="work__metric" style={{ fontSize: "1.7rem", fontWeight: 800 }}>Fuel cost per route −23%</div>
              <h3 style={{ marginTop: "10px" }}>FleetSignal</h3>
              <p className="muted">A real-time telemetry platform ingesting data from 9,000+ vehicles and computing dynamic route optimization against live traffic.</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>Payments / Fintech</span>
              <div className="work__metric" style={{ fontSize: "1.7rem", fontWeight: 800 }}>Manual reconciliation −89%</div>
              <h3 style={{ marginTop: "10px" }}>LedgerCore</h3>
              <p className="muted">A reconciliation platform matching transactions across acquirers and ledgers within seconds, with double-entry invariants at the database level.</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>Healthtech</span>
              <div className="work__metric" style={{ fontSize: "1.7rem", fontWeight: 800 }}>Triage throughput +4.2x</div>
              <h3 style={{ marginTop: "10px" }}>Triage AI</h3>
              <p className="muted">A document-intelligence service extracting structured fields from referrals and lab reports, with confidence-gated human-in-the-loop validation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <span className="eyebrow">Testimonials</span>
            <h2>What clients say</h2>
          </div>
          <div className="grid grid-2" style={{ marginTop: "40px" }}>
            <div className="quote">
              <p>“We came to Sentrize with a monolith that took 40 minutes to deploy and broke under any real traffic. Eighteen months later we ship multiple times a day on Kubernetes with zero downtime.”</p>
              <cite>Daniel Okafor<span>Founder & CEO · B2B SaaS</span></cite>
            </div>
            <div className="quote">
              <p>“Their engineers pushed back on our architecture in week one and were right. Our p95 latency dropped from 1.8s to under 300ms.”</p>
              <cite>Priya Venkataraman<span>CTO · E-commerce platform</span></cite>
            </div>
            <div className="quote">
              <p>“Migrating 200+ microservices to AWS without a single customer-facing outage seemed impossible. Our support team didn't even know the date had passed.”</p>
              <cite>Marcus Hale<span>VP Engineering · Enterprise fintech</span></cite>
            </div>
            <div className="quote">
              <p>“We needed SOC 2 readiness in a quarter with no internal security function. Sentrize built our posture and walked us through the audit. We passed first time.”</p>
              <cite>Elena Sørensen<span>CISO · Healthtech</span></cite>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
