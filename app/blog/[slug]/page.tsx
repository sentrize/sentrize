import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS } from "@/lib/blog-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: `https://www.sentrize.com/blog/${p.slug}` },
  };
}

const PROSE_CSS = `
.post-prose { max-width: 60rem; }
.post-prose h2 { font-size: 1.55rem; line-height: 1.3; margin: 2.4rem 0 0.9rem; color: var(--_v-2-colors---c-blue-light--900, #cfe4ff); }
.post-prose h3 { font-size: 1.2rem; margin: 1.9rem 0 0.7rem; color: var(--_v-2-colors---c-blue-light--900, #cfe4ff); }
.post-prose p { margin: 0.95rem 0; line-height: 1.75; color: rgba(223, 233, 245, 0.82); }
.post-prose ul, .post-prose ol { margin: 0.95rem 0; padding-left: 1.4rem; }
.post-prose li { margin: 0.5rem 0; line-height: 1.7; color: rgba(223, 233, 245, 0.82); }
.post-prose strong { color: #fff; }
.post-prose code { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 0.9em; background: rgba(127, 200, 255, 0.10); border-radius: 4px; padding: 0.1em 0.35em; }
.post-prose a { color: #7fc8ff; text-decoration: underline; }
.post-prose blockquote { border-left: 3px solid rgba(127, 200, 255, 0.5); margin: 1.2rem 0; padding-left: 1rem; }
`;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="main-wrapper">
      <style dangerouslySetInnerHTML={{ __html: PROSE_CSS }} />
      <section>
        <div className="v2-padding-global">
          <div className="w-layout-blockcontainer v2-container w-container">
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div className="spacer-160" />
              <p className="t-paragraph-3-rg text-c-white-60-p">
                <a href="/blog" style={{ color: "inherit" }}>{"← Back to blog"}</a>
              </p>
              <div className="spacer-24" />
              <div className="t-label-1-rg blue-light-900">
                {`${p.category} · ${p.date} · ${p.readTime}`}
              </div>
              <div className="spacer-16" />
              <h1 className="t-heading-2-rg text-c-blue-light-900">{p.title}</h1>
              <div className="spacer-16" />
              <p className="t-paragraph-3-rg text-c-white-60-p">{`By ${p.author}`}</p>
              <div className="spacer-32" />
              <div className="post-prose" dangerouslySetInnerHTML={{ __html: p.html }} />
              <div className="spacer-64" />
              <div className="button-group">
                <a className="button-v2-full-width w-inline-block" href="/contact">
                  <div className="no-wrap-arrow">{"Talk to engineering"}</div>
                </a>
                <a
                  className="button-v2-full-width w-inline-block w-variant-cc2081e2-2f66-fa48-5d36-c70458cedec9"
                  href="/blog"
                >
                  <div className="no-wrap-arrow">{"More articles"}</div>
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
