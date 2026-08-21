import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uninstalled — Mobile Simulator",
  description: "Sentrize Mobile Simulator has been removed.",
  robots: { index: false },
  alternates: {
    canonical: "https://www.sentrize.com/mobile-simulator/uninstall",
  },
};

export default function Page() {
  return (
    <main className="main-wrapper">
      <section>
        <div className="v2-padding-global">
          <div className="w-layout-blockcontainer v2-container w-container">
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <div className="spacer-160" />
              <div className="t-label-1-rg blue-light-900">
                {"Mobile Simulator"}
              </div>
              <div className="spacer-16" />
              <h1 className="t-heading-2-rg text-c-blue-light-900">
                {"Sorry to see you go"}
              </h1>
              <div className="spacer-24" />
              <p className="t-paragraph-1-rg">
                {"Sentrize Mobile Simulator has been removed from your browser. Nothing was left behind — all settings lived on your machine and are gone with it."}
              </p>
              <div className="spacer-32" />
              <p className="t-paragraph-2-rg">
                {"If something didn't work, or a device or feature you needed was missing, we'd genuinely like to know — it's how the next version gets better."}
              </p>
              <div className="spacer-32" />
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  className="button-v2-full-width w-inline-block"
                  href="/contact"
                >
                  <div className="no-wrap-arrow">{"Tell us what happened"}</div>
                </a>
                <a
                  className="button-v2-full-width w-inline-block w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9"
                  href="/mobile-simulator"
                >
                  <div className="no-wrap-arrow">{"Reinstall Mobile Simulator"}</div>
                </a>
              </div>
              <div className="spacer-160" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
