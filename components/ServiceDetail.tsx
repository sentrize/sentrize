import Link from "next/link";
import Cta from "@/components/Cta";
import {
  SERVICES,
  HOOKS,
  SVC_QUOTE,
  TESTI,
  PHOTOS,
  photoForService,
  unsplash,
} from "@/lib/services";

const TRUST: [string, string][] = [
  ["500+", "Projects delivered"],
  ["12+", "Years experience"],
  ["98%", "Client satisfaction"],
  ["120+", "Senior engineers"],
];
const OVERVIEW_POOL = ["officeteam", "collab", "meeting", "racks", "dashboard", "code2"];
function lock(s: string) {
  let n = 0;
  for (const c of s) n += c.charCodeAt(0);
  return n % 997;
}

export default function ServiceDetail({ slug }: { slug: string }) {
  const s = SERVICES[slug];
  const [hl, vp, proof] = HOOKS[slug] ?? [s.title, s.intro, "500+ projects delivered"];
  const top = s.eyebrow === "Products" ? "/services" : "/solutions";
  const q = TESTI[SVC_QUOTE[slug] ?? 0];
  const ovPid = PHOTOS[OVERVIEW_POOL[lock(slug) % OVERVIEW_POOL.length]] ?? PHOTOS.code;

  return (
    <>
      <section className="hero glow">
        <div className="container">
          <div className="svc-hero">
            <div>
              <div className="breadcrumb">
                <Link href="/">Home</Link> / <Link href={top}>{s.eyebrow}</Link> / {s.title}
              </div>
              <span className="pill" style={{ marginBottom: 16 }}>{s.title}</span>
              <h1>{hl}</h1>
              <p className="lead">{vp}</p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
              <p className="muted" style={{ marginTop: 16, fontSize: ".95rem" }}>✓&nbsp; {proof}</p>
            </div>
            <div className="svc-hero__visual">
              <div className="media">
                <img src={unsplash(photoForService(slug), 900, 680)} alt={s.title} loading="lazy" />
              </div>
              <div className="float-card float-card--tr">
                <div className="fc__num">99.99%</div>
                <div className="fc__label">Uptime SLA</div>
              </div>
              <div className="float-card float-card--bl">
                <div className="fc__num">4.9/5</div>
                <div className="fc__label">Client rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="stats">
            {TRUST.map(([n, l]) => (
              <div className="stat" key={l}>
                <div className="stat__num">{n}</div>
                <div className="stat__label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <div className="media">
            <img src={unsplash(ovPid)} alt={`${s.title} overview`} loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Overview</span>
            <h2>What we deliver</h2>
            <p className="lead">{s.overview}</p>
            <Link className="btn btn--primary" href="/contact" style={{ marginTop: 8 }}>Start a project</Link>
          </div>
        </div>
      </section>

      <section className="section glow">
        <div className="container">
          <div className="center" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2>What is included</h2>
            <p className="lead">
              Everything delivered as part of this engagement, owned end to end by a senior team.
            </p>
          </div>
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {s.checks.map((c, i) => (
              <div className="card" key={i}>
                <div className="feature">
                  <span className="feature__tick" />
                  <p style={{ margin: 0, color: "#e7ebf3" }}>{c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2>How we work</h2>
            <div className="steps" style={{ marginTop: 38 }}>
              {s.process.map(([t, d], i) => (
                <div className="step" key={i}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Technology stack</h2>
          <ul className="tags" style={{ justifyContent: "center", maxWidth: 780, margin: "28px auto 0" }}>
            {s.tags.map((t) => (
              <li className="tag" key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container container--narrow">
          <div className="quote card--accent">
            <p style={{ fontSize: "1.2rem" }}>{`“${q[0]}”`}</p>
            <cite>
              {q[1]}
              <span>{q[2]}</span>
            </cite>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Related services</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {s.related.map((rs) => {
              const r = SERVICES[rs];
              if (!r) return null;
              return (
                <Link className="card card--link" href={`/${rs}`} key={rs}>
                  <div className="card__media">
                    <img src={unsplash(photoForService(rs), 640, 400)} alt={r.title} loading="lazy" />
                  </div>
                  <h3>{r.title}</h3>
                  <p className="muted">Learn more →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
