import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description:
    "How-to articles for managing your Sentrize services and infrastructure.",
};

export default function KnowledgeBasePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Knowledge Base
              </div>
              <span className="eyebrow">Resources</span>
              <h1>Knowledge Base</h1>
              <p className="lead">
                Step-by-step articles for managing your services, deployments, and account.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Knowledge Base"
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
              <h3>Account &amp; Billing</h3>
              <ul className="checks" style={{ marginTop: 12 }}>
                <li>Manage your account</li>
                <li>Update billing details</li>
                <li>Invoices and receipts</li>
              </ul>
            </div>
            <div className="card">
              <h3>Deployments</h3>
              <ul className="checks" style={{ marginTop: 12 }}>
                <li>Trigger a deployment</li>
                <li>Roll back a release</li>
                <li>Manage environments</li>
              </ul>
            </div>
            <div className="card">
              <h3>Monitoring</h3>
              <ul className="checks" style={{ marginTop: 12 }}>
                <li>Read your dashboards</li>
                <li>Configure alerts</li>
                <li>Understand SLOs</li>
              </ul>
            </div>
            <div className="card">
              <h3>Security</h3>
              <ul className="checks" style={{ marginTop: 12 }}>
                <li>Manage access &amp; roles</li>
                <li>Rotate secrets</li>
                <li>Report a security issue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Can&apos;t find an answer?</h2>
            <p className="lead">Open a ticket and our team will help.</p>
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
