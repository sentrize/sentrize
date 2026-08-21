import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLA Policy",
  description:
    "Our service-level commitments for uptime, response times, and support.",
  alternates: { canonical: "https://www.sentrize.com/sla-policy" },
};

const commitments = [
  {
    commitment: "Uptime",
    detail: "99.99% monthly availability for managed production services",
  },
  {
    commitment: "Urgent response",
    detail: "Production-down incidents acknowledged within 15 minutes, 24/7",
  },
  {
    commitment: "High response",
    detail: "Degraded-service issues acknowledged within 1 hour",
  },
  {
    commitment: "Normal response",
    detail: "Standard issues addressed within the same business day",
  },
  {
    commitment: "Backups",
    detail: "Automated daily backups with tested recovery procedures",
  },
  {
    commitment: "Monitoring",
    detail: "Continuous monitoring and on-call coverage across time zones",
  },
];

export default function Page() {
  return (
    <main className="main-wrapper">
      <section>
        <div className="v2-padding-global">
          <div className="w-layout-blockcontainer v2-container w-container">
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <div className="spacer-160" />
              <div className="t-label-1-rg blue-light-900">{"Support"}</div>
              <div className="spacer-16" />
              <h1 className="t-heading-2-rg text-c-blue-light-900">
                {"SLA Policy"}
              </h1>
              <div className="spacer-24" />
              <p className="t-paragraph-1-rg">
                {"The service-level commitments behind our managed services. Exact terms are defined in your agreement."}
              </p>
              <div className="spacer-16" />
              <p className="t-paragraph-3-rg text-c-white-60-p">
                {"Last updated: August 2026"}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"SLA commitments"}
              </h2>
              <div className="spacer-24" />
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th
                        className="t-label-1-rg blue-light-900"
                        style={{
                          textAlign: "left",
                          padding: "0.875rem 1rem 0.875rem 0",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.24)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {"Commitment"}
                      </th>
                      <th
                        className="t-label-1-rg blue-light-900"
                        style={{
                          textAlign: "left",
                          padding: "0.875rem 0",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.24)",
                        }}
                      >
                        {"Detail"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {commitments.map((row) => (
                      <tr key={row.commitment}>
                        <td
                          className="t-paragraph-2-rg"
                          style={{
                            verticalAlign: "top",
                            padding: "0.875rem 1rem 0.875rem 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <strong>{row.commitment}</strong>
                        </td>
                        <td
                          className="t-paragraph-2-rg"
                          style={{
                            verticalAlign: "top",
                            padding: "0.875rem 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                          }}
                        >
                          {row.detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Service credits apply where commitments are not met, as defined in your contract."}
              </p>
              <div className="spacer-160" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
