import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Portal",
  description: "Sign in to manage your Sentrize account, projects, and billing.",
};

export default function CustomerPortalPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Customer Portal
              </div>
              <span className="eyebrow">Support</span>
              <h1>Customer Portal</h1>
              <p className="lead">
                Manage your projects, environments, billing, and support in one place.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="Customer Portal"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="card">
            <h3>Sign in</h3>
            <form>
              <div className="field">
                <label>Email</label>
                <input className="input" type="email" />
              </div>
              <div className="field">
                <label>Password</label>
                <input className="input" type="password" />
              </div>
              <button className="btn btn--primary btn--lg" type="submit">Sign in</button>
            </form>
            <p className="muted" style={{ marginTop: 14 }}>
              Need an account? <Link href="/contact">Talk to us</Link> to get set up.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>From the portal you can</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            <Link className="card card--link" href="/customer-portal">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Track projects"
                  loading="lazy"
                />
              </div>
              <h3>Track projects</h3>
              <p className="muted">See progress and milestones</p>
            </Link>
            <Link className="card card--link" href="/customer-portal">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Manage billing"
                  loading="lazy"
                />
              </div>
              <h3>Manage billing</h3>
              <p className="muted">Invoices and payment details</p>
            </Link>
            <Link className="card card--link" href="/open-ticket">
              <div className="card__media">
                <img
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=640&h=400&q=80"
                  alt="Open tickets"
                  loading="lazy"
                />
              </div>
              <h3>Open tickets</h3>
              <p className="muted">Tracked support requests</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
