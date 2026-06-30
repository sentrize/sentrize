import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import { unsplash, photoForService, PHOTOS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Sentrize — AWS, technology, referral, agency, and reseller programs.",
};

const PROGRAMS: [string, string, string][] = [
  ["AWS Partner", "/aws-partner", "Certified AWS delivery & co-selling"],
  ["Technology Partners", "/technology-partners", "Integrate with our platform"],
  ["Referral Program", "/referral-program", "Earn for every referral that converts"],
  ["Agency Partnership", "/agency-partnership", "White-label engineering capacity"],
  ["Reseller Program", "/reseller-program", "Resell our managed services"],
];

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="split">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / Partners
              </div>
              <span className="eyebrow">Company</span>
              <h1>Partners</h1>
              <p className="lead">
                Grow with a certified engineering partner. Refer clients, white-label our teams,
                or build on our stack.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div>
              <div className="media">
                <img src={unsplash(PHOTOS["team2"], 900, 680)} alt="Partners" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Partner programs</h2>
          <p className="lead">Choose the relationship that fits your business.</p>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {PROGRAMS.map(([t, href, sub]) => (
              <Link className="card card--link" href={href} key={href}>
                <div className="card__media">
                  <img src={unsplash(photoForService(href.slice(1)), 640, 400)} alt={t} loading="lazy" />
                </div>
                <h3>{t}</h3>
                <p className="muted">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta
        heading="Interested in partnering?"
        text="Tell us about your business and we'll find the right program."
      />
    </>
  );
}
