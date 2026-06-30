import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Docs",
  description: "REST API reference for building on the Sentrize platform.",
};

export default function ApiDocsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / API Docs
              </div>
              <span className="eyebrow">Resources</span>
              <h1>API Docs</h1>
              <p className="lead">
                Build on our platform with a clean, versioned REST API. Authenticate with a bearer token over HTTPS.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&h=680&q=80"
                  alt="API Docs"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Endpoints</h2>
          <div className="table-wrap" style={{ marginTop: 18 }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Path</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="pill">GET</span></td>
                  <td><code>/v1/projects</code></td>
                  <td className="muted">List your projects</td>
                </tr>
                <tr>
                  <td><span className="pill">POST</span></td>
                  <td><code>/v1/deployments</code></td>
                  <td className="muted">Trigger a deployment</td>
                </tr>
                <tr>
                  <td><span className="pill">GET</span></td>
                  <td><code>/v1/deployments/{"{id}"}</code></td>
                  <td className="muted">Get deployment status</td>
                </tr>
                <tr>
                  <td><span className="pill">GET</span></td>
                  <td><code>/v1/metrics</code></td>
                  <td className="muted">Query service metrics</td>
                </tr>
                <tr>
                  <td><span className="pill">POST</span></td>
                  <td><code>/v1/webhooks</code></td>
                  <td className="muted">Register a webhook</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted" style={{ marginTop: 16 }}>
            All requests require <code>Authorization: Bearer &lt;token&gt;</code>. Responses are JSON. Rate limits apply per token.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Need API access?</h2>
            <p className="lead">Tell us what you&apos;re building and we&apos;ll get you a key.</p>
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
