import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const WF_SHIM = `(function (e) {
  var s = { r: [] };
  e.wf = { r: s.r, ready: (t) => { s.r.push(t); } };
})(window);`;

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
        <script dangerouslySetInnerHTML={{ __html: WF_SHIM }} />
      </head>
      <body className="body-v2" suppressHydrationWarning>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
