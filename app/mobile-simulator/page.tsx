import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Simulator",
  description:
    "Preview any website on iPhone, Android and tablets — right in your browser tab. Realistic device frames, synced browsing, screenshots and screen recording.",
  alternates: { canonical: "https://www.sentrize.com/mobile-simulator" },
};

const DOWNLOAD_URL = "/downloads/sentrize-mobile-simulator-3.0.0.zip";

const features = [
  {
    title: "Classic mode",
    detail:
      "A single device over the live page — realistic frame, rotate, focus mode, and fully custom sizes.",
  },
  {
    title: "Workspace mode",
    detail:
      "A multi-device canvas: several phones and tablets side by side, each with its own preset, rotation and zoom.",
  },
  {
    title: "181 device presets",
    detail:
      "iPhones, Android phones, tablets, foldables and monitors — real metrics, real pixel ratios, real status bars.",
  },
  {
    title: "True mobile rendering",
    detail:
      "The mobile User-Agent is applied at the network layer and mirrored to JavaScript, so sites respond like they would on a real phone.",
  },
  {
    title: "Synced browsing",
    detail:
      "Mirror scroll, clicks and typing between the desktop page and every device on screen.",
  },
  {
    title: "Screenshots",
    detail:
      "Export a device-masked PNG, the full view, or the entire scrollable board in one image.",
  },
  {
    title: "Screen recording",
    detail:
      "Record the preview and export WebM or MP4, with trim and playback-speed controls built in.",
  },
  {
    title: "Private by design",
    detail:
      "No analytics, no telemetry, no external APIs. Settings never leave your machine. 52 languages, light and dark theme.",
  },
];

const installSteps = [
  "Download the extension and unzip it — you'll get a sentrize-mobile-simulator folder.",
  "Open chrome://extensions in Chrome (or any Chromium browser such as Edge or Brave).",
  "Turn on Developer mode using the toggle in the top-right corner.",
  "Click “Load unpacked” and select the unzipped sentrize-mobile-simulator folder.",
  "Pin Sentrize Mobile Simulator to your toolbar, open any website and click the icon.",
];

export default function Page() {
  return (
    <main className="main-wrapper">
      <section>
        <div className="v2-padding-global">
          <div className="w-layout-blockcontainer v2-container w-container">
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <div className="spacer-160" />
              <div className="t-label-1-rg blue-light-900">{"Products"}</div>
              <div className="spacer-16" />
              <h1 className="t-heading-2-rg text-c-blue-light-900">
                {"Sentrize Mobile Simulator"}
              </h1>
              <div className="spacer-24" />
              <p className="t-paragraph-1-rg">
                {"Preview any website on iPhone, Android and tablets — up to five devices at once, right in your browser tab. A Chrome extension with realistic device frames, synced browsing, screenshots and screen recording."}
              </p>
              <div className="spacer-32" />
              <div className="button-group">
                <a
                  className="button-v2-full-width w-inline-block"
                  href={DOWNLOAD_URL}
                  download
                >
                  <div className="no-wrap-arrow">
                    {"Download for Chrome — v3.0.0 (.zip)"}
                  </div>
                </a>
                <a
                  className="button-v2-full-width w-inline-block w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9"
                  href="/contact"
                >
                  <div className="no-wrap-arrow">{"Talk to engineering"}</div>
                </a>
              </div>
              <div className="spacer-16" />
              <p className="t-paragraph-3-rg text-c-white-60-p">
                {"Free download · 2.7 MB · Chrome Web Store listing coming soon"}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"What it does"}
              </h2>
              <div className="spacer-24" />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {features.map((f) => (
                  <div
                    key={f.title}
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "0.5rem",
                      padding: "1.25rem",
                    }}
                  >
                    <div className="t-label-1-rg blue-light-900">{f.title}</div>
                    <div className="spacer-16" />
                    <p className="t-paragraph-2-rg">{f.detail}</p>
                  </div>
                ))}
              </div>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"How to install"}
              </h2>
              <div className="spacer-24" />
              <ol
                style={{
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {installSteps.map((step) => (
                  <li key={step} className="t-paragraph-2-rg">
                    {step}
                  </li>
                ))}
              </ol>
              <div className="spacer-24" />
              <p className="t-paragraph-3-rg text-c-white-60-p">
                {"Works on Chrome and Chromium-based browsers with Manifest V3 support. The extension asks for access to a site only when you first open the simulator on it."}
              </p>
              <div className="spacer-64" />

              <h2 className="t-heading-5-rg text-c-blue-light-900">
                {"Need a hand?"}
              </h2>
              <div className="spacer-24" />
              <p className="t-paragraph-2-rg">
                {"Questions or a feature request? "}
                <a className="text-link" href="/contact">
                  {"Contact support"}
                </a>
                {" — we answer fast."}
              </p>
              <div className="spacer-160" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
