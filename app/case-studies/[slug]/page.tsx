import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/case-studies-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.seoTitle,
    description: c.seoDescription,
    alternates: { canonical: `https://www.sentrize.com/case-studies/${c.slug}` },
  };
}

const PROSE_CSS = `
.cs-prose p { margin: 0.95rem 0; line-height: 1.75; color: rgba(223, 233, 245, 0.82); }
.cs-prose ul { margin: 0.95rem 0; padding-left: 1.4rem; }
.cs-prose li { margin: 0.5rem 0; line-height: 1.7; color: rgba(223, 233, 245, 0.82); }
.cs-prose strong { color: #fff; }
.cs-prose a { color: #7fc8ff; text-decoration: underline; }
.cs-prose blockquote { border-left: 3px solid rgba(127, 200, 255, 0.5); margin: 1.2rem 0; padding-left: 1rem; font-size: 1.1rem; }
.cs-glance a { color: #7fc8ff; text-decoration: underline; }
`;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <main className="main-wrapper">
      <style dangerouslySetInnerHTML={{ __html: PROSE_CSS }} />
      <section>
        <div className="v2-padding-global">
          <div className="w-layout-blockcontainer v2-container w-container">
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div className="spacer-160" />
              <p className="t-paragraph-3-rg text-c-white-60-p">
                <a href="/case-studies" style={{ color: "inherit" }}>{"← All case studies"}</a>
              </p>
              <div className="spacer-24" />
              <div className="t-label-1-rg blue-light-900">{"Case study"}</div>
              <div className="spacer-16" />
              <h1 className="t-heading-2-rg text-c-blue-light-900">{c.title}</h1>
              <div className="spacer-32" />

              <div
                className="cs-glance"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1rem 2rem",
                }}
              >
                {c.atGlance.map((row) => (
                  <div key={row.k}>
                    <div className="t-label-1-rg blue-light-900">{row.k}</div>
                    <p
                      className="t-paragraph-3-rg"
                      style={{ marginTop: "0.35rem" }}
                      dangerouslySetInnerHTML={{ __html: row.v }}
                    />
                  </div>
                ))}
              </div>

              {c.metrics.length ? (
                <>
                  <div className="spacer-32" />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${Math.min(c.metrics.length, 3)}, minmax(0, 1fr))`,
                      gap: "1.5rem",
                    }}
                  >
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "0.75rem",
                          padding: "1.25rem",
                        }}
                      >
                        <div className="t-heading-5-rg text-c-blue-light-900">{m.value}</div>
                        <p className="t-paragraph-3-rg text-c-white-60-p">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              <div className="spacer-64" />
              <h2 className="t-heading-5-rg text-c-blue-light-900">{"The challenge"}</h2>
              <div className="cs-prose" dangerouslySetInnerHTML={{ __html: c.challenge }} />

              <div className="spacer-64" />
              <h2 className="t-heading-5-rg text-c-blue-light-900">{"The solution"}</h2>
              <div className="cs-prose" dangerouslySetInnerHTML={{ __html: c.solution }} />

              <div className="spacer-64" />
              <h2 className="t-heading-5-rg text-c-blue-light-900">{"The results"}</h2>
              <div className="cs-prose" dangerouslySetInnerHTML={{ __html: c.results }} />

              {c.quote ? (
                <>
                  <div className="spacer-32" />
                  <div className="cs-prose" dangerouslySetInnerHTML={{ __html: c.quote }} />
                </>
              ) : null}

              {c.related ? (
                <>
                  <div className="spacer-32" />
                  <p
                    className="t-paragraph-3-rg text-c-white-60-p cs-glance"
                    dangerouslySetInnerHTML={{ __html: c.related }}
                  />
                </>
              ) : null}

              <div className="spacer-64" />
              <div className="button-group">
                <a className="button-v2-full-width w-inline-block" href="/contact">
                  <div className="no-wrap-arrow">{"Start a project"}</div>
                </a>
                <a
                  className="button-v2-full-width w-inline-block w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9"
                  href="/case-studies"
                >
                  <div className="no-wrap-arrow">{"More case studies"}</div>
                </a>
              </div>
              <div className="spacer-160" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
