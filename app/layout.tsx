import type { Metadata } from "next";
import SiteScripts from "@/components/SiteScripts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sentrize.com"),
  title: {
    default: "Sentrize | Engineering That Scales Your Business",
    template: "%s | Sentrize",
  },
  description:
    "Sentrize builds, scales, and operates digital products and cloud infrastructure. 120+ engineers, 500+ projects, and 99.99% SLA-backed uptime across 40+ countries.",
  // Favicon / app icons come from the app/ file conventions:
  // app/favicon.ico, app/icon.png, app/apple-icon.png
  openGraph: {
    type: "website",
    siteName: "Sentrize",
    title: "Sentrize | Engineering That Scales Your Business",
    description:
      "Sentrize builds, scales, and operates digital products and cloud infrastructure. 120+ engineers, 500+ projects, and 99.99% SLA-backed uptime across 40+ countries.",
    url: "/",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Sentrize — Intelligent Software. Limitless Impact." },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentrize | Engineering That Scales Your Business",
    description:
      "Sentrize builds, scales, and operates digital products and cloud infrastructure.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Shared chrome (header + footer) styles — used by every route */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="stylesheet" href="/assets/css/chrome.css" />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        {/* Reused interactions (nav toggle, scroll reveal, forms, filters) */}
        <SiteScripts />
      </body>
    </html>
  );
}
