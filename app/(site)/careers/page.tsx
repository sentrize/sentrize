import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Sentrize: 50+ engineers across 23+ countries building production software and cloud systems. Remote-friendly roles for specialists.",
};

const WHY: [string, string][] = [
  ["Senior engineering, not staffing", "Experienced engineers and architects lead every project — production decisions, not billable headcount."],
  ["Outcome ownership", "We measure success by uptime, performance, and shipped features, and stay accountable to those metrics."],
  ["Cloud-native by default", "We design on AWS, Kubernetes, and Terraform from day one, so systems scale without rebuilds."],
  ["Security & compliance built in", "Encryption, access control, and audit readiness are part of the architecture, not a later phase."],
  ["Transparent delivery", "Clear roadmaps, visible progress, and direct access to the people building your systems."],
  ["Global delivery, single standard", "Teams across 23+ countries operate to one engineering bar for consistent quality."],
];

const BENEFITS: string[] = [
  "Fully remote across 23+ countries",
  "Market-leading global compensation",
  "Equity & ownership",
  "Annual learning budget",
  "Home-office setup allowance",
  "Flexible, trust-based PTO",
  "Health & wellness stipend",
  "Clear cross-discipline growth tracks",
];

const ROLES: { title: string; meta: string; pill: string }[] = [
  { title: "Senior Backend Engineer", meta: "Software Engineering  ·  Node.js / TypeScript", pill: "Remote · Full-time" },
  { title: "Cloud Infrastructure Engineer", meta: "DevOps & Infrastructure  ·  AWS / Terraform", pill: "Remote · Full-time" },
  { title: "Site Reliability Engineer", meta: "DevOps & Infrastructure  ·  Kubernetes", pill: "Remote / Hybrid · Full-time" },
  { title: "Full-Stack Engineer", meta: "Software Engineering  ·  React / Next.js / Laravel", pill: "Remote · Full-time" },
  { title: "Senior Mobile Engineer", meta: "Software Engineering  ·  React Native / Flutter", pill: "Remote · Full-time" },
  { title: "AI & Automation Engineer", meta: "AI & Automation  ·  Python / LLMs", pill: "Remote · Full-time" },
  { title: "Senior Product Designer", meta: "Design  ·  Figma / Design systems", pill: "Remote / Hybrid · Full-time" },
  { title: "Security & Compliance Engineer", meta: "Security  ·  SOC 2 / ISO 27001", pill: "Remote · Full-time" },
];

const PROCESS: [string, string][] = [
  ["Application review", "We read every application and respond within five business days."],
  ["Intro conversation", "A 30-minute call to align on the role, your goals, and how we work."],
  ["Technical interview", "A practical, real-world problem in your domain — no whiteboard trivia."],
  ["Team & systems round", "Meet your future teammates and dig into architecture and trade-offs."],
  ["Offer & onboarding", "A clear offer, fast turnaround, and a structured first-30-days plan."],
];

export default function CareersPage() {
  return (
    <>
      <section className="hero hero--centered glow">
        <div className="container">
          <span className="eyebrow">Careers</span>
          <h1>Build infrastructure and software that 23+ countries depend on.</h1>
          <p className="lead">
            Ship production systems for startups and enterprises alike, with the autonomy to own
            outcomes and the engineering rigor to do it right.
          </p>
          <div className="stats" style={{ gridTemplateColumns: "repeat(3,1fr)", maxWidth: 680, margin: "28px auto 0" }}>
            <div className="stat">
              <div className="stat__num">50+</div>
              <div className="stat__label">Engineers</div>
            </div>
            <div className="stat">
              <div className="stat__num">23+</div>
              <div className="stat__label">Countries</div>
            </div>
            <div className="stat">
              <div className="stat__num">Remote</div>
              <div className="stat__label">First</div>
            </div>
          </div>
          <div className="btn-row" style={{ marginTop: 24 }}>
            <a className="btn btn--primary btn--lg" href="#roles">See open roles</a>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ maxWidth: 620, margin: "0 auto" }}>
            <span className="eyebrow">Why join</span>
            <h2>What you get building here</h2>
          </div>
          <div className="grid grid-3" style={{ marginTop: 40 }}>
            {WHY.map(([t, d]) => (
              <div className="card" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Benefits</span>
            <h2>Built for sustainable, senior engineering</h2>
            <p className="lead">
              Remote-first, well-compensated, and designed so good engineering is sustainable over
              the long term.
            </p>
          </div>
          <ul className="checks">
            {BENEFITS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft" id="roles">
        <div className="container">
          <div className="center" style={{ maxWidth: 560, margin: "0 auto" }}>
            <span className="eyebrow">Open roles</span>
            <h2>Where we are hiring</h2>
          </div>
          <div className="grid" style={{ gap: 14, marginTop: 36 }}>
            {ROLES.map((r) => (
              <Link className="role-row reveal" href="/contact" key={r.title}>
                <div>
                  <h3>{r.title}</h3>
                  <div className="meta">{r.meta}</div>
                </div>
                <div className="role-row__right">
                  <span className="pill pill--ok">{r.pill}</span>
                  <span className="role-row__arrow">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2>Our hiring process</h2>
            <div className="steps" style={{ marginTop: 38 }}>
              {PROCESS.map(([t, d]) => (
                <div className="step" key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta
        heading="Don't see your role?"
        text="Send us your work anyway — we're always interested in great engineers."
        note="We review every application personally."
      />
    </>
  );
}
