import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Guides and references for working with Sentrize platforms and services.",
};

export default function DocumentationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Documentation
              </div>
              <span className="eyebrow">Resources</span>
              <h1>Documentation</h1>
              <p className="lead">
                Guides, references, and runbooks for the platforms and services we build and operate.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Documentation"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <h3>Getting Started</h3>
              <ul className="checks" style={{ marginTop: 12 }}>
                <li>Platform overview</li>
                <li>Account &amp; access</li>
                <li>Environments</li>
                <li>Your first deployment</li>
              </ul>
            </div>
            <div className="card">
              <h3>Guides</h3>
              <ul className="checks" style={{ marginTop: 12 }}>
                <li>CI/CD pipelines</li>
                <li>Infrastructure as code</li>
                <li>Monitoring &amp; alerts</li>
                <li>Security &amp; secrets</li>
              </ul>
            </div>
            <div className="card">
              <h3>Reference</h3>
              <ul className="checks" style={{ marginTop: 12 }}>
                <li>Architecture patterns</li>
                <li>Naming conventions</li>
                <li>Runbooks</li>
                <li>Glossary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Looking for something specific?</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            <Link className="card card--link" href="/api-docs">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="API Docs"
                  loading="lazy"
                />
              </div>
              <h3>API Docs</h3>
              <p className="muted">Build on our APIs</p>
            </Link>
            <Link className="card card--link" href="/knowledge-base">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Knowledge Base"
                  loading="lazy"
                />
              </div>
              <h3>Knowledge Base</h3>
              <p className="muted">How-to articles</p>
            </Link>
            <Link className="card card--link" href="/help-center">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Help Center"
                  loading="lazy"
                />
              </div>
              <h3>Help Center</h3>
              <p className="muted">Find answers fast</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
