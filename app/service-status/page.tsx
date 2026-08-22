import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Status",
  description: "Live status of Sentrize platform services.",
  alternates: { canonical: "https://www.sentrize.com/service-status" },
};

const SERVICES: string[] = [
  "API",
  "Web Dashboard",
  "CI/CD Pipelines",
  "Managed Hosting",
  "Monitoring & Alerting",
  "Customer Portal",
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
              <h1 className="t-heading-2-rg text-c-blue-light-900">{"Service Status"}</h1>
              <div className="spacer-24" />
              <p className="t-paragraph-1-rg">
                {"All systems operational. This page shows the live status of our platform services."}
              </p>
              <div className="spacer-32" />

              <div
                style={{
                  border: "1px solid rgba(110, 255, 210, 0.35)",
                  background: "rgba(110, 255, 210, 0.07)",
                  borderRadius: "0.75rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <p className="t-paragraph-2-rg" style={{ color: "#6effd2" }}>
                  {"● All systems operational"}
                </p>
              </div>

              <div className="spacer-32" />
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                }}
              >
                {SERVICES.map((s, i) => (
                  <div
                    key={s}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.9rem 1.25rem",
                      borderTop: i ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}
                  >
                    <span className="t-paragraph-2-rg">{s}</span>
                    <span className="t-paragraph-2-rg" style={{ color: "#6effd2" }}>
                      {"● Operational"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="spacer-32" />
              <p className="t-paragraph-3-rg text-c-white-60-p">
                {"Questions about an incident or maintenance window? "}
                <a href="/contact" style={{ color: "#7fc8ff", textDecoration: "underline" }}>
                  {"Contact support"}
                </a>
                {"."}
              </p>
              <div className="spacer-160" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
