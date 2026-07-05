import type { Metadata } from "next";
import { AwsNav } from "@/components/awsnav/AwsNav";
import Hero from "@/components/landing/Hero";
import Capabilities from "@/components/landing/Capabilities";
import EngagementModels from "@/components/landing/EngagementModels";
import PartnershipBanner from "@/components/landing/PartnershipBanner";
import IndustryTabs from "@/components/landing/IndustryTabs";
import WhyUsStats from "@/components/landing/WhyUsStats";
import RoadmapCapabilities from "@/components/landing/RoadmapCapabilities";
import VideoModal from "@/components/landing/VideoModal";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Sentrize — the software and cloud platforms your business runs on" },
  description:
    "Sentrize designs, builds, and operates custom software and cloud platforms — from first commit to production and round-the-clock operations.",
  alternates: { canonical: "/" },
};

// The landing was ported section-by-section from the bespoke (Verifone-based)
// static build into real components (components/landing/*) for 100% visual
// fidelity — every legacy className/id is preserved verbatim. Its header/
// footer chrome uses the same shared AwsNav/Footer as the rest of the site.
export default function Home() {
  return (
    <>
      {/* precedence hoists these into <head> and blocks paint until loaded,
          preventing a flash of unstyled content (React 19 stylesheet API) */}
      <link rel="stylesheet" href="/assets/css/en0000000000000812.css" precedence="default" />
      <link rel="stylesheet" href="/assets/css/style.css" precedence="default" />
      <link rel="stylesheet" href="/assets/css/theme-teal.css" precedence="default" />
      <AwsNav />
      <div className="content">
        <div className="clearfix" />
        <div className="wrap_all homePage cookie-buffer">
          <Hero />
          <Capabilities />
          <EngagementModels />
          <PartnershipBanner />
          <IndustryTabs />
          <WhyUsStats />
          <RoadmapCapabilities />
          <VideoModal />
          <FinalCta />
        </div>
        <Footer />
      </div>
    </>
  );
}
