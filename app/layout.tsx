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
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230A84FF'/%3E%3Ctext x='16' y='22' font-size='17' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold'%3ES%3C/text%3E%3C/svg%3E",
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
