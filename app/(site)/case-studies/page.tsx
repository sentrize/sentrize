import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Sentrize case studies: measurable outcomes in performance, scale, and cost across software, cloud, and DevOps engagements worldwide.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="banner reveal">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&h=560&q=80" alt="Continuous Delivery Overhaul for a High-Volume Logistics Platform" loading="lazy" />
            <div style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "6%" }}>
              <span className="pill" style={{ alignSelf: "flex-start", marginBottom: "14px" }}>Featured case study</span>
              <h1 style={{ maxWidth: "18ch", color: "#fff", textShadow: "0 2px 24px rgba(0,0,0,.6)" }}>Continuous Delivery Overhaul for a High-Volume Logistics Platform</h1>
              <p className="lead" style={{ color: "#eef2f8", maxWidth: "54ch", textShadow: "0 1px 12px rgba(0,0,0,.6)" }}>Releases were manual, batched fortnightly, and routinely rolled back — a single failed deploy could freeze the engineering org for a day.</p>
              <div className="metric-row">
                <div><b>3 wks→2 hrs</b><small>Release lead time</small></div>
                <div><b>40+/day</b><small>Deploy frequency</small></div>
                <div><b>22%→3.1%</b><small>Change-failure rate</small></div>
              </div>
              <Link className="btn btn--primary" style={{ alignSelf: "flex-start" }} href="/contact">Start your project</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <span className="eyebrow">More results</span>
            <h2>Engineering outcomes that moved the business</h2>
          </div>
          <div className="grid grid-2" style={{ marginTop: "40px" }}>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>A Series C fintech offering embedded payments and reconciliation.</span>
              <h3>Re-Architecting a Payments Core for Linear Scale</h3>
              <div className="metric-row">
                <div><b>900→12k TPS</b><small>Sustained throughput</small></div>
                <div><b>840ms→64ms</b><small>p99 latency</small></div>
                <div><b>0</b><small>Reconciliation drift</small></div>
              </div>
              <p>We decomposed the ledger into an event-sourced core on an append-only PostgreSQL event store partitioned by merchant, with idempotent command APIs and Redis projections, replacing pessimistic locks with optimistic concurrency.</p>
              <p className="muted" style={{ borderTop: "1px solid var(--line)", paddingTop: "14px", marginTop: "4px" }}>“For the first time we can sign an enterprise merchant without a capacity caveat in the contract.” — Priya Venkatesan, CTO</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>A mid-market healthcare analytics company under HIPAA and SOC 2.</span>
              <h3>Lift, Re-Platform, and Optimize for a Healthcare Data Provider</h3>
              <div className="metric-row">
                <div><b>9 months</b><small>Zero-downtime migration</small></div>
                <div><b>−38%</b><small>Infrastructure cost</small></div>
                <div><b>0 findings</b><small>SOC 2 Type II</small></div>
              </div>
              <p>We ran a phased strangler-pattern migration to AWS, shifting traffic per service behind a routing layer with per-service rollback. All infra was Terraform-defined with encryption by default and audit logging mapped to SOC 2…</p>
              <p className="muted" style={{ borderTop: "1px solid var(--line)", paddingTop: "14px", marginTop: "4px" }}>“They moved our entire platform under us and our customers never felt a thing.” — Marcus Lindqvist, VP of Infrastructure</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>An early-growth B2B SaaS whose single-tenant pilot landed three enterprise accounts.</span>
              <h3>Multi-Tenant Re-Platform for a B2B Collaboration Product</h3>
              <div className="metric-row">
                <div><b>2 wks→10 min</b><small>Tenant provisioning</small></div>
                <div><b>6→40k</b><small>Paid seats in 14 mo</small></div>
                <div><b>3/3</b><small>Security reviews passed</small></div>
              </div>
              <p>We re-architected to multi-tenant with row-level isolation, per-tenant encryption keys, and a self-service provisioning service, rebuilding the frontend in Next.js and adding tenant-scoped metering for billing.</p>
              <p className="muted" style={{ borderTop: "1px solid var(--line)", paddingTop: "14px", marginTop: "4px" }}>“The platform stopped being the bottleneck to enterprise deals — it became the reason we won them.” — Sophie Aldridge, Co-Founder & CEO</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>A venture-backed streaming startup with spiky viewership.</span>
              <h3>FinOps and Reliability Engineering for a Consumer Streaming App</h3>
              <div className="metric-row">
                <div><b>−44%</b><small>Monthly cloud spend</small></div>
                <div><b>5/wk→&lt;1/mo</b><small>Surge incidents</small></div>
                <div><b>99.99%</b><small>Peak-event uptime</small></div>
              </div>
              <p>We instrumented cost and performance telemetry, moved stateless workloads to Kubernetes with demand-driven autoscaling and Spot pools, added multi-tier caching, and codified capacity policies in Terraform.</p>
              <p className="muted" style={{ borderTop: "1px solid var(--line)", paddingTop: "14px", marginTop: "4px" }}>“We halved the bill and stopped getting paged at 2am — I didn't think we could have both.” — Reuben Castellanos, Head of Platform</p>
            </div>
            <div className="card reveal">
              <span className="pill" style={{ marginBottom: "14px" }}>An enterprise B2B software company fielding 30,000+ monthly tickets.</span>
              <h3>Retrieval-Grounded AI Automation for an Enterprise Support Operation</h3>
              <div className="metric-row">
                <div><b>61%</b><small>Tickets auto-resolved</small></div>
                <div><b>14h→&lt;2min</b><small>First response</small></div>
                <div><b>−52%</b><small>Cost per ticket</small></div>
              </div>
              <p>We built a retrieval-grounded agent over the client's docs with strict citations and confidence-gated escalation, integrated through a typed tool layer for scoped account actions, validated in shadow mode against 20,000…</p>
              <p className="muted" style={{ borderTop: "1px solid var(--line)", paddingTop: "14px", marginTop: "4px" }}>“It handles the volume we could never hire for, and it does it without making things up.” — Hannah Brückner, Director of Customer Operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="stats">
            <div className="stat"><div className="stat__num">500+</div><div className="stat__label">Projects delivered</div></div>
            <div className="stat"><div className="stat__num">99.99%</div><div className="stat__label">SLA-backed uptime</div></div>
            <div className="stat"><div className="stat__num">98%</div><div className="stat__label">Client retention</div></div>
            <div className="stat"><div className="stat__num">50+</div><div className="stat__label">Engineers & specialists</div></div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
