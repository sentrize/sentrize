import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Sentrize's portfolio: 500+ delivered projects across software, SaaS, cloud, and DevOps for startups, SMEs, and enterprises worldwide.",
};

const LOGOS = [
  "Northwind Logistics",
  "Meridian Health",
  "Vantage Payments",
  "Cobalt Retail Group",
  "Lumen Analytics",
  "Atlas Manufacturing",
  "Harbor Financial",
  "Brightway Insurance",
  "Verdant Energy",
  "Solstice Media",
  "Quanta Robotics",
  "Irongate Security",
  "Pinnacle EdTech",
  "Cascade Telecom",
  "Aurora Biotech",
  "Keystone Retail",
];

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero hero--tight">
        <div className="container center">
          <span className="eyebrow">Portfolio</span>
          <h1 style={{ marginLeft: "auto", marginRight: "auto" }}>Selected work across 500+ delivered projects</h1>
          <p className="lead">Platforms we have engineered across fintech, healthtech, e-commerce, logistics, AI, and the public sector.</p>
          <div className="tags" data-portfolio-filters style={{ justifyContent: "center", marginTop: "18px" }}>
            <button className="tag" data-filter="all" style={{ cursor: "pointer" }}>All work</button>
            <button className="tag" data-filter="AI" style={{ cursor: "pointer" }}>AI</button>
            <button className="tag" data-filter="Cloud" style={{ cursor: "pointer" }}>Cloud</button>
            <button className="tag" data-filter="Data" style={{ cursor: "pointer" }}>Data</button>
            <button className="tag" data-filter="DevOps" style={{ cursor: "pointer" }}>DevOps</button>
            <button className="tag" data-filter="Mobile" style={{ cursor: "pointer" }}>Mobile</button>
            <button className="tag" data-filter="SaaS" style={{ cursor: "pointer" }}>SaaS</button>
            <button className="tag" data-filter="Security" style={{ cursor: "pointer" }}>Security</button>
            <button className="tag" data-filter="Web" style={{ cursor: "pointer" }}>Web</button>
          </div>
        </div>
      </section>

      <section className="section glow">
        <div className="container">
          <div className="grid grid-3" data-portfolio-grid>
            <Link className="work reveal" data-cat="SaaS" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">SaaS</span>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&h=400&q=80" alt="ClaimFlow — Insurance / Fintech (SaaS)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Insurance / Fintech</div>
                <h3>ClaimFlow</h3>
                <p className="muted">A multi-tenant claims platform with a configurable rules engine, idempotent event pipeline, and replayable audit logs for regulatory traceability.</p>
                <span className="work__metric">Claim cycle time −71%</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="Web" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">Web</span>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&h=400&q=80" alt="Loyalo — E-commerce / Retail (Web)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">E-commerce / Retail</div>
                <h3>Loyalo</h3>
                <p className="muted">A headless storefront and loyalty engine serving 14 regional brands from one core, with edge-rendered pages and real-time inventory sync.</p>
                <span className="work__metric">p95 load −64% · conversion +18%</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="Mobile" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">Mobile</span>
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=640&h=400&q=80" alt="VitalLink — Healthtech (Mobile)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Healthtech</div>
                <h3>VitalLink</h3>
                <p className="muted">A HIPAA-aligned remote monitoring app streaming Bluetooth device data to clinicians, with offline-first sync and end-to-end encryption.</p>
                <span className="work__metric">99.97% reading reliability</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="Data" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">Data</span>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&h=400&q=80" alt="FleetSignal — Logistics (Data)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Logistics</div>
                <h3>FleetSignal</h3>
                <p className="muted">A real-time telemetry platform ingesting data from 9,000+ vehicles and computing dynamic route optimization against live traffic.</p>
                <span className="work__metric">Fuel cost per route −23%</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="SaaS" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">SaaS</span>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&h=400&q=80" alt="LedgerCore — Payments / Fintech (SaaS)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Payments / Fintech</div>
                <h3>LedgerCore</h3>
                <p className="muted">A reconciliation platform matching transactions across acquirers and ledgers within seconds, with double-entry invariants at the database level.</p>
                <span className="work__metric">Manual reconciliation −89%</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="AI" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">AI</span>
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=640&h=400&q=80" alt="Triage AI — Healthtech (AI)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Healthtech</div>
                <h3>Triage AI</h3>
                <p className="muted">A document-intelligence service extracting structured fields from referrals and lab reports, with confidence-gated human-in-the-loop validation.</p>
                <span className="work__metric">Triage throughput +4.2x</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="Cloud" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">Cloud</span>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&h=400&q=80" alt="GridWatch — Public Sector (Cloud)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Public Sector</div>
                <h3>GridWatch</h3>
                <p className="muted">A centralized monitoring platform aggregating health and capacity metrics across public-sector data centres with role-scoped dashboards.</p>
                <span className="work__metric">Mean-time-to-detect −76%</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="DevOps" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">DevOps</span>
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&h=400&q=80" alt="StreamForge — Media & Entertainment (DevOps)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Media & Entertainment</div>
                <h3>StreamForge</h3>
                <p className="muted">An elastic video encoding and delivery pipeline that autoscales transcoding workers on queue depth and serves adaptive-bitrate streams globally.</p>
                <span className="work__metric">Encoding cost/hour −52%</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="Security" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">Security</span>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&h=400&q=80" alt="SentryShield — B2B SaaS (Security)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">B2B SaaS</div>
                <h3>SentryShield</h3>
                <p className="muted">A zero-trust access layer enforcing per-request authorization and device posture checks, with policy-as-code and full audit logging.</p>
                <span className="work__metric">Audit prep time −83%</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="AI" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">AI</span>
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=640&h=400&q=80" alt="CartPulse — E-commerce / DTC (AI)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">E-commerce / DTC</div>
                <h3>CartPulse</h3>
                <p className="muted">A real-time personalization engine ranking recommendations from behavioural signals behind a low-latency feature store and caching layer.</p>
                <span className="work__metric">AOV +14% · p95 41ms</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="Web" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">Web</span>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&h=400&q=80" alt="PermitDesk — Public Sector (Web)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Public Sector</div>
                <h3>PermitDesk</h3>
                <p className="muted">A citizen-facing permits and licensing portal digitizing multi-step workflows with document upload, payment, and accessibility-first UI.</p>
                <span className="work__metric">Processing time −67%</span>
              </div>
            </Link>
            <Link className="work reveal" data-cat="Cloud" href="/contact">
              <div className="work__media">
                <span className="work__tag pill">Cloud</span>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&h=400&q=80" alt="ShipState — Supply Chain / Logistics (Cloud)" loading="lazy" />
              </div>
              <div className="work__body">
                <div className="work__industry">Supply Chain / Logistics</div>
                <h3>ShipState</h3>
                <p className="muted">A multi-carrier control-tower platform unifying tracking, exception alerting, and ETA prediction through an event-sourced integration layer.</p>
                <span className="work__metric">Exception resolution −58%</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="stats">
            <div className="stat"><div className="stat__num">500+</div><div className="stat__label">Projects delivered</div></div>
            <div className="stat"><div className="stat__num">99.99%</div><div className="stat__label">SLA-backed uptime</div></div>
            <div className="stat"><div className="stat__num">98%</div><div className="stat__label">Client retention</div></div>
            <div className="stat"><div className="stat__num">120+</div><div className="stat__label">Engineers & specialists</div></div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container center">
          <span className="eyebrow">Trusted by</span>
          <h2 style={{ fontSize: "1.6rem" }}>The teams we build for</h2>
        </div>
        <div className="marquee" style={{ marginTop: "30px" }}>
          <ul className="logos marquee__track">
            {LOGOS.concat(LOGOS).map((name, i) => (
              <li className="logo-chip" key={i}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Have a project in mind?</h2>
            <p className="lead">Tell us what you are building and we will map the fastest reliable path to production.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn--light btn--lg" href="/contact">Start a project</Link>
              <Link className="btn btn--ghost btn--lg" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }} href="/pricing">View pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
