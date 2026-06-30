import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Inner-page design system (scoped to this route group) */}
      <link rel="stylesheet" href="/assets/css/site.css" />
      <link rel="stylesheet" href="/assets/css/enterprise.css" />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
