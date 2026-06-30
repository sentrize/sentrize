import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Papers",
  description:
    "In-depth technical reports on architecture, reliability, security, and cloud.",
};

export default function WhitePapersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / White Papers
              </div>
              <span className="eyebrow">Resources</span>
              <h1>White Papers</h1>
              <p className="lead">
                In-depth technical reports for engineering and technology leaders.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="White Papers"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Building reliable SaaS on AWS"
                  loading="lazy"
                />
              </div>
              <h3>Building reliable SaaS on AWS</h3>
              <p>A reference architecture for multi-tenant SaaS, from networking to billing.</p>
              <Link className="btn btn--ghost" href="/contact" style={{ marginTop: 8 }}>Request paper</Link>
            </div>
            <div className="card">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="The cost of downtime"
                  loading="lazy"
                />
              </div>
              <h3>The cost of downtime</h3>
              <p>Quantifying reliability and the engineering practices that protect it.</p>
              <Link className="btn btn--ghost" href="/contact" style={{ marginTop: 8 }}>Request paper</Link>
            </div>
            <div className="card">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Migrating monoliths safely"
                  loading="lazy"
                />
              </div>
              <h3>Migrating monoliths safely</h3>
              <p>A phased, reversible approach to decomposition and cloud migration.</p>
              <Link className="btn btn--ghost" href="/contact" style={{ marginTop: 8 }}>Request paper</Link>
            </div>
            <div className="card">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Security by default"
                  loading="lazy"
                />
              </div>
              <h3>Security by default</h3>
              <p>Embedding security into the delivery pipeline instead of bolting it on.</p>
              <Link className="btn btn--ghost" href="/contact" style={{ marginTop: 8 }}>Request paper</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Ready to build your next product with confidence?</h2>
            <p className="lead">Tell us what you&apos;re building and we&apos;ll map the fastest reliable path to production.</p>
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
