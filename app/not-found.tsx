import Link from "next/link";
import Footer from "@/components/Footer";
import { AwsNav } from "@/components/awsnav/AwsNav";

const POPULAR: [string, string][] = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

export default function NotFound() {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/site.css" precedence="default" />
      <link rel="stylesheet" href="/assets/css/enterprise.css" precedence="default" />
      <AwsNav />
      <main id="main">
        <section className="error">
          <div className="container">
            <div className="error__num">404</div>
            <h1 style={{ marginTop: 8 }}>Page not found</h1>
            <p className="lead" style={{ margin: "0 auto 26px" }}>
              The page you are looking for moved, or it never existed.
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn--primary btn--lg" href="/">Back to home</Link>
              <Link className="btn btn--ghost btn--lg" href="/contact">Contact us</Link>
            </div>
            <div className="tags" style={{ justifyContent: "center", marginTop: 30 }}>
              {POPULAR.map(([t, h]) => (
                <Link className="tag" href={h} key={h}>{t}</Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
