import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TemplateScripts from "@/components/TemplateScripts";
import ClientNav from "@/components/ClientNav";
import NavProgress from "@/components/NavProgress";

const WF_SHIM = `(function (e) {
  var s = { r: [] };
  e.wf = { r: s.r, ready: (t) => { s.r.push(t); } };
})(window);`;

// The template's global reset lives in a per-page style block on converted
// pages; hand-built pages (service details, articles, legal) need it too,
// or the stylesheet's default underlined-link rule shows through in the nav.
const GLOBAL_RESET = `
a, .w-select, .w-tab-link, .w-nav-link, .w-nav-brand, .w-dropdown-btn,
.w-slider-arrow-left, .w-slider-arrow-right, .w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
*[tabindex]:focus-visible, input[type="file"]:focus-visible {
  outline: 0.125rem solid #4d65ff;
  outline-offset: 0.125rem;
}
.page-wrapper { overflow: clip; }
`;

// Pre-paint hero-set guarantee: pages with alternating heroes rely on
// html[data-hero-set]; without it every variant renders stacked. The page's
// own picker may re-pick, but this ensures the attribute always exists.
const HERO_SET_GUARD = `(function () {
  var d = document.documentElement;
  if (d.hasAttribute("data-hero-set")) return;
  var sets = ["newton", "einstein", "franklin"];
  var pick = sets[Math.floor(Math.random() * sets.length)];
  try { pick = sessionStorage.getItem("heroSet:last") || pick; } catch (e) {}
  d.setAttribute("data-hero-set", pick);
})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sentrize.com"),
  title: {
    default: "Sentrize — the software and cloud platforms your business runs on",
    template: "%s | Sentrize",
  },
  description:
    "Sentrize designs, builds, and operates custom software and cloud platforms — from first commit to production and round-the-clock operations.",
  openGraph: {
    type: "website",
    siteName: "Sentrize",
    images: ["/assets/images/sentrize-og.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="w-mod-js"
      data-wf-site="65b8cd72835ceeacd4449a53"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=JetBrains+Mono:300,400,500,600,700"
        />
        <link rel="stylesheet" href="/assets/css/sentrize.css" />
        <style dangerouslySetInnerHTML={{ __html: GLOBAL_RESET }} />
        <script dangerouslySetInnerHTML={{ __html: WF_SHIM }} />
        <script dangerouslySetInnerHTML={{ __html: HERO_SET_GUARD }} />
      </head>
      <body className="body-v2" suppressHydrationWarning>
        <div className="page-wrapper">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <ClientNav />
        <NavProgress />
        <TemplateScripts driver />
      </body>
    </html>
  );
}
