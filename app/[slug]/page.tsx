import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/services-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `https://www.sentrize.com/${s.slug}` },
  };
}

const TRUST: [string, string][] = [
  ["500+", "Projects delivered"],
  ["12+", "Years experience"],
  ["98%", "Client satisfaction"],
  ["50+", "Senior engineers"],
];

const card: React.CSSProperties = {
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "0.75rem",
  padding: "1.25rem",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <main className="main-wrapper">
      <section>
        <div className="v2-padding-global">
          <div className="w-layout-blockcontainer v2-container w-container">
            <div className="spacer-160" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div>
                <div className="t-label-1-rg blue-light-900">{s.category}</div>
                <div className="spacer-16" />
                <h1 className="t-heading-2-rg text-c-blue-light-900">{s.headline}</h1>
                <div className="spacer-24" />
                <p className="t-paragraph-1-rg">{s.lead}</p>
                <div className="spacer-32" />
                <div className="button-group">
                  <a className="button-v2-full-width w-inline-block" href="/contact">
                    <div className="no-wrap-arrow">{"Start a project"}</div>
                  </a>
                  <a
                    className="button-v2-full-width w-inline-block w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9"
                    href="/pricing"
                  >
                    <div className="no-wrap-arrow">{"View pricing"}</div>
                  </a>
                </div>
                <div className="spacer-16" />
                <p className="t-paragraph-3-rg text-c-white-60-p">{"✓ " + s.proof}</p>
              </div>
              {s.heroImage ? (
                <img
                  src={s.heroImage}
                  alt={s.title}
                  loading="lazy"
                  style={{ width: "100%", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.10)" }}
                />
              ) : null}
            </div>

            <div className="spacer-64" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.10)",
                borderBottom: "1px solid rgba(255,255,255,0.10)",
                padding: "1.75rem 0",
              }}
            >
              {TRUST.map(([n, l]) => (
                <div key={l}>
                  <div className="t-heading-5-rg text-c-blue-light-900">{n}</div>
                  <p className="t-paragraph-3-rg text-c-white-60-p">{l}</p>
                </div>
              ))}
            </div>

            <div className="spacer-64" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {s.overviewImage ? (
                <img
                  src={s.overviewImage}
                  alt={`${s.title} overview`}
                  loading="lazy"
                  style={{ width: "100%", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.10)" }}
                />
              ) : null}
              <div>
                <div className="t-label-1-rg blue-light-900">{"Overview"}</div>
                <div className="spacer-16" />
                <h2 className="t-heading-5-rg text-c-blue-light-900">{"What we deliver"}</h2>
                <div className="spacer-24" />
                <p className="t-paragraph-1-rg">{s.overview}</p>
              </div>
            </div>

            <div className="spacer-64" />
            <h2 className="t-heading-5-rg text-c-blue-light-900">{"What is included"}</h2>
            <div className="spacer-24" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {s.checks.map((c) => (
                <div key={c} style={card}>
                  <p className="t-paragraph-2-rg">{"✓ " + c}</p>
                </div>
              ))}
            </div>

            <div className="spacer-64" />
            <h2 className="t-heading-5-rg text-c-blue-light-900">{"How we work"}</h2>
            <div className="spacer-24" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {s.process.map((p, i) => (
                <div key={p.title} style={card}>
                  <div className="t-label-1-rg blue-light-900">{`0${i + 1}`}</div>
                  <div className="spacer-16" />
                  <div className="t-paragraph-1-rg text-c-blue-light-900">{p.title}</div>
                  <div className="spacer-16" />
                  <p className="t-paragraph-2-rg">{p.detail}</p>
                </div>
              ))}
            </div>

            <div className="spacer-64" />
            <h2 className="t-heading-5-rg text-c-blue-light-900">{"Technology stack"}</h2>
            <div className="spacer-24" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="t-label-1-rg"
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "999px",
                    padding: "0.45rem 0.95rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {s.quote.text ? (
              <>
                <div className="spacer-64" />
                <div style={{ ...card, padding: "2rem", maxWidth: 820 }}>
                  <p className="t-paragraph-1-rg">{`“${s.quote.text}”`}</p>
                  <div className="spacer-16" />
                  <p className="t-paragraph-3-rg text-c-white-60-p">
                    {`— ${s.quote.name}, ${s.quote.role}`}
                  </p>
                </div>
              </>
            ) : null}

            {s.related.length ? (
              <>
                <div className="spacer-64" />
                <h2 className="t-heading-5-rg text-c-blue-light-900">{"Related services"}</h2>
                <div className="spacer-24" />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {s.related.map((r) => (
                    <a key={r.slug} href={`/${r.slug}`} style={{ ...card, display: "block" }}>
                      <div className="t-paragraph-1-rg text-c-blue-light-900">{r.title}</div>
                      <div className="spacer-16" />
                      <p className="t-paragraph-3-rg text-c-white-60-p">{"Learn more →"}</p>
                    </a>
                  ))}
                </div>
              </>
            ) : null}

            <div className="spacer-64" />
            <h2 className="t-heading-5-rg text-c-blue-light-900">
              {"Ready to build your next product with confidence?"}
            </h2>
            <div className="spacer-24" />
            <p className="t-paragraph-1-rg">
              {"Tell us what you're building and we'll map the fastest reliable path to production."}
            </p>
            <div className="spacer-24" />
            <div className="button-group">
              <a className="button-v2-full-width w-inline-block" href="/contact">
                <div className="no-wrap-arrow">{"Start a project"}</div>
              </a>
              <a
                className="button-v2-full-width w-inline-block w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9"
                href="/pricing"
              >
                <div className="no-wrap-arrow">{"View pricing"}</div>
              </a>
            </div>
            <div className="spacer-160" />
          </div>
        </div>
      </section>
    </main>
  );
}
