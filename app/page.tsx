import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import LandingClient from "@/components/LandingClient";
import { AwsNav } from "@/components/awsnav/AwsNav";

export const metadata: Metadata = {
  title: { absolute: "Sentrize — the software and cloud platforms your business runs on" },
  description:
    "Sentrize designs, builds, and operates custom software and cloud platforms — from first commit to production and round-the-clock operations.",
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
      {/* aws-site nav (from the E:\aws rebuild) replaces the landing's
          embedded sh--overlay header on this page only — inner pages keep
          the regular chrome header. */}
      <AwsNav />
      <LandingClient html={landingHtml} />
    </>
  );
}
