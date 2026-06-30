import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "SLA Policy",
  description: "Our service-level commitments for uptime, response times, and support.",
};

export default function SlaPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / SLA Policy
              </div>
              <span className="eyebrow">Support</span>
              <h1>SLA Policy</h1>
              <p className="lead">
                The service-level commitments behind our managed services. Exact terms are defined
                in your agreement.
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
                  alt="SLA Policy"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="table-wrap">
            <table className="tbl">
              <tbody>
                <tr>
                  <td><strong>Uptime</strong></td>
                  <td>99.99% monthly availability for managed production services</td>
                </tr>
                <tr>
                  <td><strong>Urgent response</strong></td>
                  <td>Production-down incidents acknowledged within 15 minutes, 24/7</td>
                </tr>
                <tr>
                  <td><strong>High response</strong></td>
                  <td>Degraded-service issues acknowledged within 1 hour</td>
                </tr>
                <tr>
                  <td><strong>Normal response</strong></td>
                  <td>Standard issues addressed within the same business day</td>
                </tr>
                <tr>
                  <td><strong>Backups</strong></td>
                  <td>Automated daily backups with tested recovery procedures</td>
                </tr>
                <tr>
                  <td><strong>Monitoring</strong></td>
                  <td>Continuous monitoring and on-call coverage across time zones</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted" style={{ marginTop: 16 }}>
            Service credits apply where commitments are not met, as defined in your contract.
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}
