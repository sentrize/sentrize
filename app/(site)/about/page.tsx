import type { Metadata } from "next";
import Link from "next/link";
import Metrics from "@/components/Metrics";
import Cta from "@/components/Cta";
import { METRICS, VALUES, MILESTONES, CERTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded 2014, Sentrize is a global engineering firm of 50+ specialists with 500+ delivered projects, 98% retention, and 24/7 support across 23+ countries.",
};

function Badges({ eyebrow, title, items, mode }: { eyebrow: string; title: string; items: [string, string][]; mode: "award" | "cert" }) {
  return (
    <section className="section">
      <div className="container">
        <div className="center" style={{ maxWidth: 640, margin: "0 auto" }}>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="badges" style={{ marginTop: 36 }}>
          {items.map(([a, b]) => (
            <div className="badge" key={a}>
              <div className="badge__mark">
                {mode === "cert" ? a.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase() : "★"}
              </div>
              <div>
                <strong>{a}</strong>
                <small>{b}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="hero hero--centered glow">
        <div className="container">
          <span className="eyebrow">About Sentrize</span>
          <h1>A global engineering firm built on rigor, ownership, and uptime.</h1>
          <p className="lead">
            Since 2014 we have helped startups, SMEs, and enterprises build, scale, and operate the
            software and cloud infrastructure their businesses run on.
          </p>
          <div className="btn-row">
            <Link className="btn btn--primary btn--lg" href="/contact">Work with us</Link>
            <Link className="btn btn--ghost btn--lg" href="/careers">Join the team</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div style={{ borderLeft: "3px solid", borderImage: "var(--grad) 1", paddingLeft: 26 }}>
            <span className="eyebrow">Our story</span>
            <p className="lead">
              Sentrize started with a simple conviction: most software problems are really
              engineering-discipline problems.
            </p>
            <p>
              Early clients came to us with products that worked in a demo but buckled under real
              traffic. We rebuilt them properly — automated testing, version-controlled
              infrastructure, and deployment pipelines that did not depend on one person remembering
              the right command. That approach earned repeat work, and repeat work let us grow
              deliberately into a distributed firm of 50+ engineers across 23+ countries.
            </p>
            <p>
              The tools have changed since 2014. The standard has not. We build software that holds
              up in production, then stay to help it scale.
            </p>
          </div>
        </div>
      </section>

      <Metrics items={METRICS} dark />

      <section className="section section--soft">
        <div className="container split">
          <div className="card">
            <span className="eyebrow">Mission</span>
            <h3 style={{ fontSize: "1.5rem" }}>Reliable by design, not by luck.</h3>
            <p>
              We make modern engineering practices the default, so the software businesses depend on
              is dependable from the first release — shipped with automated testing, infrastructure
              as code, observability, and zero-downtime deploys.
            </p>
          </div>
          <div className="card">
            <span className="eyebrow">Vision</span>
            <h3 style={{ fontSize: "1.5rem" }}>The partner trusted to run what matters.</h3>
            <p>
              To be the long-term engineering partner businesses trust to build and operate their
              most important systems — measured not by what we launch, but by what keeps running
              years later.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ maxWidth: 680, margin: "0 auto" }}>
            <span className="eyebrow">What we value</span>
            <h2>Principles we engineer by</h2>
          </div>
          <div className="grid grid-3" style={{ marginTop: 40 }}>
            {VALUES.map(([n, d], i) => (
              <div className="card" key={n}>
                <div className="card__icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{n}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2>Our journey</h2>
            <div className="steps" style={{ marginTop: 38 }}>
              {MILESTONES.map(([y, t]) => (
                <div className="step" key={y}>
                  <h3>{y}</h3>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Badges eyebrow="Compliance" title="Certifications" items={CERTS} mode="cert" />

      <section className="section">
        <div className="container container--narrow center">
          <span className="eyebrow">Engineering culture</span>
          <h2>Small senior pods that own the whole system</h2>
          <p className="lead" style={{ margin: "18px auto 0" }}>
            We build around small, senior, cross-functional pods that own a product end to end —
            architecture, delivery, and the on-call rotation that keeps it running. Automated
            testing, infrastructure-as-code, and continuous delivery are defaults, and every incident
            becomes a blameless retrospective that feeds back into tooling and standards.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ maxWidth: 600, margin: "0 auto" }}>
            <span className="eyebrow">Leadership</span>
            <h2>Meet the people behind the work</h2>
            <p className="lead">
              Senior engineers and leaders who have spent their careers building and operating
              software at scale.
            </p>
            <div className="btn-row" style={{ justifyContent: "center", marginTop: 8 }}>
              <Link className="btn btn--ghost btn--lg" href="/team">View the team</Link>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
