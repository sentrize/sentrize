import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import LandingClient from "@/components/LandingClient";

export const metadata: Metadata = {
  title: { absolute: "Build & Scale Your Software With Confidence | Sentrize" },
  description:
    "Sentrize builds, scales, and operates digital products and cloud infrastructure. 120+ engineers, 500+ projects, and 99.99% SLA-backed uptime across 40+ countries.",
  alternates: { canonical: "/" },
};

export default function Home() {
  // The landing keeps the bespoke (Verifone-based) design verbatim for 100%
  // fidelity — its header/footer chrome is already in the markup, links are
  // rewritten to clean routes, and trackers/2Checkout refs are stripped.
  // Read at render time (not module scope) so `next dev` reflects edits to
  // _landing.html; the page is still statically prerendered in production.
  const landingHtml = fs.readFileSync(
    path.join(process.cwd(), "app", "_landing.html"),
    "utf8"
  );
  return (
    <>
      <link rel="stylesheet" href="/assets/css/en0000000000000812.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/theme-teal.css" />
      <LandingClient html={landingHtml} />
    </>
  );
}
