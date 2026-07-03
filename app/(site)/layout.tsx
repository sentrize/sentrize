import Footer from "@/components/Footer";
import { AwsNav } from "@/components/awsnav/AwsNav";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Inner-page design system (scoped to this route group) */}
      <link rel="stylesheet" href="/assets/css/site.css" />
      <link rel="stylesheet" href="/assets/css/enterprise.css" />
      <AwsNav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
