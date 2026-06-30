import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Find answers, open tickets, and check service status.",
};

export default function HelpCenterPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Help Center
              </div>
              <span className="eyebrow">Support</span>
              <h1>Help Center</h1>
              <p className="lead">Find answers fast, or reach our team when you need a human.</p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Help Center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How can we help?</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            <Link className="card card--link" href="/knowledge-base">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Knowledge Base"
                  loading="lazy"
                />
              </div>
              <h3>Knowledge Base</h3>
              <p className="muted">How-to articles and guides</p>
            </Link>
            <Link className="card card--link" href="/open-ticket">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Open a Ticket"
                  loading="lazy"
                />
              </div>
              <h3>Open a Ticket</h3>
              <p className="muted">Get tracked, prioritized help</p>
            </Link>
            <Link className="card card--link" href="/service-status">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Service Status"
                  loading="lazy"
                />
              </div>
              <h3>Service Status</h3>
              <p className="muted">Live system status</p>
            </Link>
            <Link className="card card--link" href="/sla-policy">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="SLA Policy"
                  loading="lazy"
                />
              </div>
              <h3>SLA Policy</h3>
              <p className="muted">Our service commitments</p>
            </Link>
            <Link className="card card--link" href="/customer-portal">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Customer Portal"
                  loading="lazy"
                />
              </div>
              <h3>Customer Portal</h3>
              <p className="muted">Manage your account</p>
            </Link>
            <Link className="card card--link" href="/contact-support">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Contact Support"
                  loading="lazy"
                />
              </div>
              <h3>Contact Support</h3>
              <p className="muted">Reach our team directly</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container container--narrow">
          <h2 className="center">Common questions</h2>
          <div style={{ marginTop: 24 }}>
            <div className="accordion">
              <details>
                <summary>What engagement models do you offer?</summary>
                <div className="acc__body">
                  Fixed-scope projects when requirements are well defined, dedicated teams or staff
                  augmentation when you need engineers embedded in your roadmap, and ongoing managed
                  services for production infrastructure. Many clients move between models as their
                  needs change.
                </div>
              </details>
              <details>
                <summary>How do you price work and produce estimates?</summary>
                <div className="acc__body">
                  Fixed-scope projects are quoted after a short discovery phase. Dedicated teams bill
                  at a transparent monthly rate per engineer, and managed services run on a retainer
                  sized to your infrastructure. Every estimate states its assumptions up front.
                </div>
              </details>
              <details>
                <summary>What are typical project timelines?</summary>
                <div className="acc__body">
                  A focused MVP or well-scoped feature build usually runs 6 to 12 weeks. Larger
                  platform builds and migrations span 3 to 6 months, structured into milestones with
                  working software at each one.
                </div>
              </details>
              <details>
                <summary>Who owns the intellectual property and source code?</summary>
                <div className="acc__body">
                  You do. On completion and payment, all source code, designs, documentation, and IP
                  are assigned to you in writing, with full repository and infrastructure access
                  throughout.
                </div>
              </details>
              <details>
                <summary>How do you handle data security and compliance?</summary>
                <div className="acc__body">
                  We build to recognized standards and have supported clients through SOC 2, GDPR,
                  and HIPAA. Practices include least-privilege AWS IAM, encryption in transit and at
                  rest, IaC for auditability, and secrets kept out of source control.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
