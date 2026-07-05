"use client";
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

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/site.css" precedence="default" />
      <link rel="stylesheet" href="/assets/css/enterprise.css" precedence="default" />
      <AwsNav />
      <main id="main">
        <section className="error">
          <div className="container">
            <div className="error__num">500</div>
            <h1 style={{ marginTop: 8 }}>Something went wrong</h1>
            <p className="lead" style={{ margin: "0 auto 26px" }}>
              An unexpected error occurred on our end. Our team has been notified.
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <button className="btn btn--primary btn--lg" type="button" onClick={() => reset()}>
                Try again
              </button>
              <Link className="btn btn--ghost btn--lg" href="/">Back to home</Link>
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
