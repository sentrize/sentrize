import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Sentrize solutions for startups, SaaS, and enterprises: software, cloud, and automation engineered to scale and cut operational cost.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="hero glow">
        <div className="container">
          <div className="svc-hero split--reverse">
            <div className="svc-hero__visual">
              <div className="diagram">
                <div className="node node--hub">Sentrize Cloud Platform</div>
                <div className="node">CI/CD</div>
                <div className="node">Kubernetes</div>
                <div className="node">Terraform</div>
                <div className="node">Monitoring</div>
                <div className="node">Security</div>
                <div className="node">AWS</div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Solutions</span>
              <h1>Cloud-native infrastructure, operated with discipline.</h1>
              <p className="lead">
                We design, automate, and run the platforms your business depends on — built to scale
                before you do.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary btn--lg" href="/contact">Talk to engineering</Link>
                <Link className="btn btn--ghost btn--lg" href="/services">View services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Integrations & tooling</h2>
          <ul className="tags" style={{ justifyContent: "center", maxWidth: "780px", margin: "28px auto 0" }}>
            <li className="tag">AWS</li>
            <li className="tag">Kubernetes</li>
            <li className="tag">Terraform</li>
            <li className="tag">Docker</li>
            <li className="tag">GitHub Actions</li>
            <li className="tag">Prometheus</li>
            <li className="tag">Grafana</li>
            <li className="tag">PostgreSQL</li>
            <li className="tag">Redis</li>
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <span className="eyebrow">Cloud</span>
          <h2 style={{ marginBottom: ".2em" }}>Cloud solutions</h2>
          <div className="grid grid-3" style={{ marginTop: "32px" }}>
            <Link className="card card--link" href="/cloud-infrastructure">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&h=400&q=80" alt="Cloud Infrastructure" loading="lazy" />
              </div>
              <h3>Cloud Infrastructure</h3>
              <p className="muted">Cloud foundations that handle 10x traffic spikes without redesign, downtime, or runaway bills.</p>
            </Link>
            <Link className="card card--link" href="/aws-consulting">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=640&h=400&q=80" alt="AWS Consulting" loading="lazy" />
              </div>
              <h3>AWS Consulting</h3>
              <p className="muted">Certified AWS architects who right-size your stack, cut waste, and engineer for Well-Architected…</p>
            </Link>
            <Link className="card card--link" href="/cloud-migration">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&h=400&q=80" alt="Cloud Migration" loading="lazy" />
              </div>
              <h3>Cloud Migration</h3>
              <p className="muted">Zero-disruption migrations with rollback safety, validated cutovers, and no surprise bills.</p>
            </Link>
            <Link className="card card--link" href="/managed-hosting">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&h=400&q=80" alt="Managed Hosting" loading="lazy" />
              </div>
              <h3>Managed Hosting</h3>
              <p className="muted">Fully managed, monitored, and patched infrastructure backed by a 24/7 engineering team.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section">
        <div className="container">
          <span className="eyebrow">DevOps & Platform</span>
          <h2 style={{ marginBottom: ".2em" }}>DevOps & Platform solutions</h2>
          <div className="grid grid-3" style={{ marginTop: "32px" }}>
            <Link className="card card--link" href="/devops">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&h=400&q=80" alt="DevOps Services" loading="lazy" />
              </div>
              <h3>DevOps Services</h3>
              <p className="muted">We rebuild your delivery pipeline so engineering moves at startup speed with enterprise discipline.</p>
            </Link>
            <Link className="card card--link" href="/cicd-automation">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&h=400&q=80" alt="CI/CD Automation" loading="lazy" />
              </div>
              <h3>CI/CD Automation</h3>
              <p className="muted">Automated CI/CD pipelines with built-in testing, security gates, and zero-downtime deploys.</p>
            </Link>
            <Link className="card card--link" href="/kubernetes">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=640&h=400&q=80" alt="Kubernetes Solutions" loading="lazy" />
              </div>
              <h3>Kubernetes Solutions</h3>
              <p className="muted">Production-grade clusters with autoscaling, self-healing, and observability built in from day one.</p>
            </Link>
            <Link className="card card--link" href="/docker-containerization">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=640&h=400&q=80" alt="Docker Containerization" loading="lazy" />
              </div>
              <h3>Docker Containerization</h3>
              <p className="muted">We containerize your apps for identical behavior across dev, staging, and production.</p>
            </Link>
            <Link className="card card--link" href="/infrastructure-as-code">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=640&h=400&q=80" alt="Infrastructure as Code" loading="lazy" />
              </div>
              <h3>Infrastructure as Code</h3>
              <p className="muted">Terraform-defined environments that are version-controlled, peer-reviewed, and reproducible on…</p>
            </Link>
            <Link className="card card--link" href="/managed-devops">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&h=400&q=80" alt="Managed DevOps" loading="lazy" />
              </div>
              <h3>Managed DevOps</h3>
              <p className="muted">An embedded team of senior engineers running your pipelines, infrastructure, and on-call so you…</p>
            </Link>
            <Link className="card card--link" href="/infrastructure-monitoring">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&h=400&q=80" alt="Infrastructure Monitoring" loading="lazy" />
              </div>
              <h3>Infrastructure Monitoring</h3>
              <p className="muted">Full-stack observability with Prometheus and Grafana that catches incidents before they become…</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <span className="eyebrow">Enterprise & Security</span>
          <h2 style={{ marginBottom: ".2em" }}>Enterprise & Security solutions</h2>
          <div className="grid grid-3" style={{ marginTop: "32px" }}>
            <Link className="card card--link" href="/enterprise-software">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=640&h=400&q=80" alt="Enterprise Software Development" loading="lazy" />
              </div>
              <h3>Enterprise Software Development</h3>
              <p className="muted">Custom platforms that scale with your organization and integrate with the systems you already run.</p>
            </Link>
            <Link className="card card--link" href="/digital-transformation">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=640&h=400&q=80" alt="Digital Transformation" loading="lazy" />
              </div>
              <h3>Digital Transformation</h3>
              <p className="muted">We modernize legacy systems and processes into measurable engineering and business outcomes.</p>
            </Link>
            <Link className="card card--link" href="/crm-development">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&h=400&q=80" alt="Custom CRM Development" loading="lazy" />
              </div>
              <h3>Custom CRM Development</h3>
              <p className="muted">Custom CRM platforms built around your pipeline, your data, and your team&apos;s actual workflow.</p>
            </Link>
            <Link className="card card--link" href="/erp-development">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&h=400&q=80" alt="ERP Development" loading="lazy" />
              </div>
              <h3>ERP Development</h3>
              <p className="muted">Custom ERP platforms that unify finance, operations, and inventory into a single source of truth.</p>
            </Link>
            <Link className="card card--link" href="/security-compliance">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&h=400&q=80" alt="Security & Compliance" loading="lazy" />
              </div>
              <h3>Security & Compliance</h3>
              <p className="muted">We bake security controls and audit-ready compliance into your infrastructure and code from day one.</p>
            </Link>
            <Link className="card card--link" href="/cybersecurity">
              <div className="card__media">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=640&h=400&q=80" alt="Cybersecurity Services" loading="lazy" />
              </div>
              <h3>Cybersecurity Services</h3>
              <p className="muted">Continuous threat monitoring, hardening, and incident response from engineers who understand your…</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="stat__num">500+</div>
              <div className="stat__label">Projects delivered</div>
            </div>
            <div className="stat">
              <div className="stat__num">99.99%</div>
              <div className="stat__label">SLA-backed uptime</div>
            </div>
            <div className="stat">
              <div className="stat__num">98%</div>
              <div className="stat__label">Client retention</div>
            </div>
            <div className="stat">
              <div className="stat__num">120+</div>
              <div className="stat__label">Engineers & specialists</div>
            </div>
          </div>
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
