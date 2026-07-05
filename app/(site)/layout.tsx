import Footer from "@/components/Footer";
import { AwsNav } from "@/components/awsnav/AwsNav";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Inner-page design system (scoped to this route group). precedence
          hoists these into <head> and blocks paint until loaded (no FOUC). */}
      <link rel="stylesheet" href="/assets/css/site.css" precedence="default" />
      <link rel="stylesheet" href="/assets/css/enterprise.css" precedence="default" />
      <AwsNav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
