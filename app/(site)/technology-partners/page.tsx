import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology Partners",
  description:
    "Integrate your product with our platform and reach our client base. We build and maintain reliable integrations together.",
};

export default function TechnologyPartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/partners">Partners</Link> / Technology Partners
              </div>
              <span className="eyebrow">Partners</span>
              <h1>Technology Partners</h1>
              <p className="lead">
                Integrate your product with our platform and reach our client base. We build and
                maintain reliable integrations together.
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
                  alt="Technology Partners"
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
            <li>Documented, supported integrations</li>
            <li>Joint reference architectures</li>
            <li>Co-marketing opportunities</li>
            <li>Technical enablement for both teams</li>
            <li>A named partner contact</li>
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
