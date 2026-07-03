import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end software, cloud, and DevOps services from Sentrize: custom development, SaaS, AWS, Kubernetes, security, and digital transformation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero glow">
        <div className="container">
          <div className="svc-hero">
            <div>
              <span className="eyebrow">Services</span>
              <h1>Software, cloud, and DevOps — engineered end to end.</h1>
              <p className="lead">
                From first commit to production observability, our senior teams own the full
                lifecycle across every discipline.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Start a project</Link>
                <Link className="btn btn--ghost btn--lg" href="/pricing">View pricing</Link>
              </div>
            </div>
            <div className="svc-hero__visual">
              <div className="mockup">
                <div className="mockup__bar"><i></i><i></i><i></i></div>
                <div className="mockup__body">
                  <div className="code-line c" style={{ width: "66%" }}></div>
                  <div className="code-line" style={{ width: "90%" }}></div>
                  <div className="code-line b" style={{ width: "52%" }}></div>
                  <div className="code-line" style={{ width: "78%" }}></div>
                  <div className="code-line c" style={{ width: "44%" }}></div>
                  <div className="code-line" style={{ width: "72%" }}></div>
                  <div className="code-line b" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="float-card float-card--tr">
                <div className="fc__num">500+</div>
                <div className="fc__label">Projects delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="stat__num">500+</div>
              <div className="stat__label">Projects delivered</div>
            </div>
            <div className="stat">
              <div className="stat__num">12+</div>
              <div className="stat__label">Years experience</div>
            </div>
            <div className="stat">
              <div className="stat__num">98%</div>
              <div className="stat__label">Client satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat__num">50+</div>
              <div className="stat__label">Senior engineers</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section glow">
        <div className="container">
          <div className="center" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <span className="eyebrow">Disciplines</span>
            <h2>What we build</h2>
          </div>
          <div className="grid grid-3" style={{ marginTop: "40px" }}>
            <Link className="card card--link" href="/software-development">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=640&h=400&q=80" alt="Software Development" loading="lazy" />
              </div>
              <span className="overline">01</span>
              <h3>Software Development</h3>
              <p className="muted">Production-grade systems on Laravel, Node.js, and TypeScript that scale with your business instead…</p>
            </Link>
            <Link className="card card--link card--accent" href="/saas-development">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&h=400&q=80" alt="SaaS Development" loading="lazy" />
              </div>
              <span className="overline">02</span>
              <h3>SaaS Development</h3>
              <p className="muted">Tenant isolation, billing, usage metering, and self-serve onboarding — the platform mechanics that…</p>
            </Link>
            <Link className="card card--link" href="/web-applications">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&h=400&q=80" alt="Web Applications" loading="lazy" />
              </div>
              <span className="overline">03</span>
              <h3>Web Applications</h3>
              <p className="muted">React and Next.js applications tuned for sub-second loads, real-time data, and the conversion…</p>
            </Link>
            <Link className="card card--link" href="/mobile-applications">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=640&h=400&q=80" alt="Mobile Applications" loading="lazy" />
              </div>
              <span className="overline">04</span>
              <h3>Mobile Applications</h3>
              <p className="muted">React Native and Flutter apps that share one codebase across iOS and Android without sacrificing…</p>
            </Link>
            <Link className="card card--link" href="/api-development">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=640&h=400&q=80" alt="API Development" loading="lazy" />
              </div>
              <span className="overline">05</span>
              <h3>API Development</h3>
              <p className="muted">Versioned, documented REST and GraphQL APIs with the rate limiting, auth, and contracts that make…</p>
            </Link>
            <Link className="card card--link" href="/ai-automation">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=640&h=400&q=80" alt="AI & Automation" loading="lazy" />
              </div>
              <span className="overline">06</span>
              <h3>AI & Automation</h3>
              <p className="muted">We embed AI and workflow automation into real operations and tie every deployment to a cost or…</p>
            </Link>
            <Link className="card card--link" href="/ui-ux-design">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=640&h=400&q=80" alt="UI/UX Design" loading="lazy" />
              </div>
              <span className="overline">07</span>
              <h3>UI/UX Design</h3>
              <p className="muted">Research-led UI/UX that reduces drop-off, shortens onboarding, and makes complex enterprise…</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <h2>How we work</h2>
            <div className="steps" style={{ marginTop: "38px" }}>
              <div className="step">
                <h3>Discovery & Strategy</h3>
                <p>We map requirements, surface risk, and agree on scope and success metrics.</p>
              </div>
              <div className="step">
                <h3>Architecture & Design</h3>
                <p>Senior engineers design the system, data model, and cloud topology before code.</p>
              </div>
              <div className="step">
                <h3>Build & QA</h3>
                <p>Reviewable increments with automated tests on every commit.</p>
              </div>
              <div className="step">
                <h3>Deploy & Operate</h3>
                <p>Zero-downtime releases through CI/CD, then observability and 24/7 support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Technology we work with</h2>
          <ul className="tags" style={{ justifyContent: "center", maxWidth: "780px", margin: "28px auto 0" }}>
            <li className="tag">Laravel</li>
            <li className="tag">Node.js</li>
            <li className="tag">TypeScript</li>
            <li className="tag">React</li>
            <li className="tag">Next.js</li>
            <li className="tag">React Native</li>
            <li className="tag">AWS</li>
            <li className="tag">Docker</li>
            <li className="tag">Kubernetes</li>
            <li className="tag">Terraform</li>
            <li className="tag">PostgreSQL</li>
            <li className="tag">Redis</li>
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container center">
          <span className="eyebrow">Trusted by</span>
          <h2 style={{ fontSize: "1.6rem" }}>Trusted by teams building serious software</h2>
        </div>
        <div className="marquee" style={{ marginTop: "30px" }}>
          <ul className="logos marquee__track">
            <li className="logo-chip">Northwind Logistics</li>
            <li className="logo-chip">Meridian Health</li>
            <li className="logo-chip">Vantage Payments</li>
            <li className="logo-chip">Cobalt Retail Group</li>
            <li className="logo-chip">Lumen Analytics</li>
            <li className="logo-chip">Atlas Manufacturing</li>
            <li className="logo-chip">Harbor Financial</li>
            <li className="logo-chip">Brightway Insurance</li>
            <li className="logo-chip">Verdant Energy</li>
            <li className="logo-chip">Solstice Media</li>
            <li className="logo-chip">Quanta Robotics</li>
            <li className="logo-chip">Irongate Security</li>
            <li className="logo-chip">Pinnacle EdTech</li>
            <li className="logo-chip">Cascade Telecom</li>
            <li className="logo-chip">Aurora Biotech</li>
            <li className="logo-chip">Keystone Retail</li>
            <li className="logo-chip">Northwind Logistics</li>
            <li className="logo-chip">Meridian Health</li>
            <li className="logo-chip">Vantage Payments</li>
            <li className="logo-chip">Cobalt Retail Group</li>
            <li className="logo-chip">Lumen Analytics</li>
            <li className="logo-chip">Atlas Manufacturing</li>
            <li className="logo-chip">Harbor Financial</li>
            <li className="logo-chip">Brightway Insurance</li>
            <li className="logo-chip">Verdant Energy</li>
            <li className="logo-chip">Solstice Media</li>
            <li className="logo-chip">Quanta Robotics</li>
            <li className="logo-chip">Irongate Security</li>
            <li className="logo-chip">Pinnacle EdTech</li>
            <li className="logo-chip">Cascade Telecom</li>
            <li className="logo-chip">Aurora Biotech</li>
            <li className="logo-chip">Keystone Retail</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Ready to build your next product with confidence?</h2>
            <p className="lead">Tell us what you&apos;re building and we&apos;ll map the fastest reliable path to production.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn--light btn--lg" href="/contact">Start a project</Link>
              <Link className="btn btn--ghost btn--lg" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }} href="/pricing">View pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
