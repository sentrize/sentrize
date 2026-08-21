import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome — Mobile Simulator",
  description: "Sentrize Mobile Simulator is installed. Here's how to get started.",
  robots: { index: false },
  alternates: { canonical: "https://www.sentrize.com/mobile-simulator/install" },
};

const steps = [
  {
    title: "Pin the icon",
    detail:
      "Click the puzzle-piece icon in the Chrome toolbar and pin Sentrize Mobile Simulator so it's always one click away.",
  },
  {
    title: "Open any website",
    detail:
      "Navigate to the site you want to preview — any normal https:// page works.",
  },
  {
    title: "Click the Sentrize icon",
    detail:
      "The first time on a site, choose “Allow” when Chrome asks for access. The simulator opens right over the page.",
  },
  {
    title: "Pick a device — or five",
    detail:
      "Choose an iPhone, Android or tablet in Classic mode, or switch to Workspace mode to line up several devices side by side.",
  },
  {
    title: "Capture it",
    detail:
      "Take device-masked screenshots or record the preview as video, straight from the toolbar.",
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
              <div className="t-label-1-rg blue-light-900">
                {"Mobile Simulator"}
              </div>
              <div className="spacer-16" />
              <h1 className="t-heading-2-rg text-c-blue-light-900">
                {"You're all set"}
              </h1>
              <div className="spacer-24" />
              <p className="t-paragraph-1-rg">
                {"Sentrize Mobile Simulator is installed. Five quick steps and you'll be previewing any site on real device frames."}
              </p>
              <div className="spacer-64" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {steps.map((step, i) => (
                  <div key={step.title} style={{ display: "flex", gap: "1rem" }}>
                    <div
                      className="t-label-1-rg blue-light-900"
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.24)",
                        borderRadius: "50%",
                        width: "2rem",
                        height: "2rem",
                        flex: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {String(i + 1)}
                    </div>
                    <div>
                      <div className="t-label-1-rg blue-light-900">
                        {step.title}
                      </div>
                      <div className="spacer-16" />
                      <p className="t-paragraph-2-rg">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="spacer-64" />
              <p className="t-paragraph-2-rg">
                {"Questions? "}
                <a className="text-link" href="/contact">
                  {"Contact support"}
                </a>
                {", or read more about "}
                <a className="text-link" href="/mobile-simulator">
                  {"Mobile Simulator"}
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
