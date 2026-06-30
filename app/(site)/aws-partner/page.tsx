import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS Partner",
  description:
    "Certified AWS delivery and co-selling. We design and operate Well-Architected workloads and bring AWS expertise to joint engagements.",
};

export default function AwsPartnerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/partners">Partners</Link> / AWS Partner
              </div>
              <span className="eyebrow">Partners</span>
              <h1>AWS Partner</h1>
              <p className="lead">
                Certified AWS delivery and co-selling. We design and operate Well-Architected
                workloads and bring AWS expertise to joint engagements.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="AWS Partner"
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
            <li>AWS-certified solutions architects and engineers</li>
            <li>Well-Architected reviews and remediation</li>
            <li>Migration and modernization delivery</li>
            <li>Co-selling and joint go-to-market</li>
            <li>Funding-program guidance where eligible</li>
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
