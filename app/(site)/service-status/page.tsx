import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Status",
  description: "Live status of Sentrize platform services.",
};

export default function ServiceStatusPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Service Status
              </div>
              <span className="eyebrow">Support</span>
              <h1>Service Status</h1>
              <p className="lead">
                All systems operational. This page shows the live status of our platform services.
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
                  alt="Service Status"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ marginBottom: 24 }}>
            <h3 style={{ margin: 0 }}>● All systems operational</h3>
          </div>
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>API</td>
                  <td><span className="pill pill--ok">● Operational</span></td>
                </tr>
                <tr>
                  <td>Web Dashboard</td>
                  <td><span className="pill pill--ok">● Operational</span></td>
                </tr>
                <tr>
                  <td>CI/CD Pipelines</td>
                  <td><span className="pill pill--ok">● Operational</span></td>
                </tr>
                <tr>
                  <td>Managed Hosting</td>
                  <td><span className="pill pill--ok">● Operational</span></td>
                </tr>
                <tr>
                  <td>Monitoring &amp; Alerting</td>
                  <td><span className="pill pill--ok">● Operational</span></td>
                </tr>
                <tr>
                  <td>Customer Portal</td>
                  <td><span className="pill pill--ok">● Operational</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted" style={{ marginTop: 16 }}>
            Subscribe to status updates or review past incidents from the{" "}
            <Link href="/customer-portal">customer portal</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
