import type { Metadata } from "next";
import { MotionConfig } from "motion/react";
import SiteScripts from "@/components/SiteScripts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sentrize.com"),
  // ONE positioning line, repeated everywhere (title / OG / Twitter / image alt)
  // so the browser tab, Google result, and social preview all say the same thing.
  title: {
    default: "Sentrize — the software and cloud platforms your business runs on",
    template: "%s | Sentrize",
  },
  description:
    "Sentrize designs, builds, and operates custom software and cloud platforms — from first commit to production and round-the-clock operations.",
  // Favicon / app icons come from the app/ file conventions:
  // app/favicon.ico, app/icon.png, app/apple-icon.png
  openGraph: {
    type: "website",
    siteName: "Sentrize",
    title: "Sentrize — the software and cloud platforms your business runs on",
    description:
      "Sentrize designs, builds, and operates custom software and cloud platforms — from first commit to production and round-the-clock operations.",
    url: "/",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Sentrize — the software and cloud platforms your business runs on" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentrize — the software and cloud platforms your business runs on",
    description:
      "Sentrize designs, builds, and operates custom software and cloud platforms.",
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
        {/* Every animate-ui/motion animation site-wide respects the OS
            prefers-reduced-motion setting through this one boundary. */}
        <MotionConfig reducedMotion="user">
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          {children}
          {/* Reused interactions (nav toggle, scroll reveal, forms, filters) */}
          <SiteScripts />
        </MotionConfig>
      </body>
    </html>
  );
}
