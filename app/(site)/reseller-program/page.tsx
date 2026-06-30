import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reseller Program",
  description:
    "Resell our managed services and development capacity with margin, support, and enablement.",
};

export default function ResellerProgramPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/partners">Partners</Link> / Reseller Program
              </div>
              <span className="eyebrow">Partners</span>
              <h1>Reseller Program</h1>
              <p className="lead">
                Resell our managed services and development capacity with margin, support, and
                enablement.
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
                  alt="Reseller Program"
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
            <li>Reseller margin on managed services</li>
            <li>Sales and technical enablement</li>
            <li>Co-branded proposals</li>
            <li>Dedicated partner support</li>
            <li>Predictable, recurring revenue</li>
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
