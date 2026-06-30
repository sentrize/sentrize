import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agency Partnership",
  description:
    "White-label engineering capacity for agencies. Deliver software and cloud projects under your brand, backed by our senior team.",
};

export default function AgencyPartnershipPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/partners">Partners</Link> / Agency Partnership
              </div>
              <span className="eyebrow">Partners</span>
              <h1>Agency Partnership</h1>
              <p className="lead">
                White-label engineering capacity for agencies. Deliver software and cloud projects
                under your brand, backed by our senior team.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Agency Partnership"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <div>
            <h2>What you get</h2>
            <p className="lead">A partnership built on clear terms and real engineering support.</p>
          </div>
          <ul className="checks">
            <li>White-label delivery under your brand</li>
            <li>Senior engineers on demand</li>
            <li>Flexible, project-based capacity</li>
            <li>Clear SLAs and communication</li>
            <li>Confidentiality and IP assignment to you</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Ready to partner?</h2>
            <p className="lead">Tell us about your business and we'll set up the right program.</p>
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
            <p className="muted" style={{ color: "#dfe1fb", marginTop: 14, fontSize: ".92rem" }}>
              We'll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
