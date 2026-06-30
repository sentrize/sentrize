import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Sentrize engineering blog: practical insights on software, cloud, DevOps, AWS, Kubernetes, and AI from our specialists.",
};

const ARTICLES: {
  img: string;
  alt: string;
  pill: string;
  title: string;
  desc: string;
  date: string;
  read: string;
  author: string;
}[] = [
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Cutting Cloud Spend by 40% Without Touching Performance",
    pill: "Cloud",
    title: "Cutting Cloud Spend by 40% Without Touching Performance",
    desc: "Most cloud bills are inflated by idle capacity and mis-sized instances, not traffic. Here's the FinOps audit framework we run for clients.",
    date: "Jan 2026",
    read: "7 min read",
    author: "Priya Nair",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Designing Multi-Tenant SaaS: Where to Draw the Isolation Boundary",
    pill: "Engineering",
    title: "Designing Multi-Tenant SaaS: Where to Draw the Isolation Boundary",
    desc: "Pooled, siloed, or bridge — the tenancy model you choose shapes cost, compliance, and blast radius for years. We compare the Postgres…",
    date: "Nov 2025",
    read: "10 min read",
    author: "Marcus Feldt",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Observability That Earns Its Keep: Metrics, Traces, and Logs Without the Noise",
    pill: "DevOps",
    title: "Observability That Earns Its Keep: Metrics, Traces, and Logs Without the Noise",
    desc: "Dashboards nobody reads and alerts everyone mutes are worse than nothing. How we wire a signal-first setup around SLOs and error budgets.",
    date: "Feb 2026",
    read: "9 min read",
    author: "Elena Vasquez",
  },
  {
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Terraform at Scale: Module Design, State Hygiene, and Drift You Can Trust",
    pill: "Cloud",
    title: "Terraform at Scale: Module Design, State Hygiene, and Drift You Can Trust",
    desc: "IaC falls apart when state balloons and modules become copy-paste sprawl. Our opinionated guide to composable modules and environment…",
    date: "Dec 2025",
    read: "8 min read",
    author: "Tomas Berg",
  },
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Running AI in Production: From Prototype to a System You Can Operate",
    pill: "AI",
    title: "Running AI in Production: From Prototype to a System You Can Operate",
    desc: "A model in a notebook is 20% of the job; the rest is latency budgets, evaluation, and graceful failure. Serving architecture and monitoring…",
    date: "Apr 2026",
    read: "11 min read",
    author: "Aisha Rahman",
  },
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Shifting Security Left Without Slowing Engineering Down",
    pill: "Security",
    title: "Shifting Security Left Without Slowing Engineering Down",
    desc: "Security gates bolted on at release time get bypassed under deadline pressure. How we embed SAST, scanning, and policy-as-code at the pull…",
    date: "Oct 2025",
    read: "7 min read",
    author: "Jonas Weber",
  },
  {
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Kubernetes Resource Tuning: Requests, Limits, and the Cost of Getting Them Wrong",
    pill: "DevOps",
    title: "Kubernetes Resource Tuning: Requests, Limits, and the Cost of Getting Them Wrong",
    desc: "Over-provision and you burn money; under-provision and you trigger OOMKills at the worst moment. Setting requests and limits from real…",
    date: "May 2026",
    read: "9 min read",
    author: "Sofia Lindqvist",
  },
  {
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Incident Response That Builds Trust: Runbooks, Roles, and Blameless Postmortems",
    pill: "DevOps",
    title: "Incident Response That Builds Trust: Runbooks, Roles, and Blameless Postmortems",
    desc: "The difference between a five-minute blip and a reputation hit is the process you rehearse. The on-call structure behind our 24/7 support.",
    date: "Jun 2026",
    read: "8 min read",
    author: "Ryan Mitchell",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&h=400&q=80",
    alt: "Platform Engineering: Building the Internal Paved Road Your Teams Will Use",
    pill: "Product",
    title: "Platform Engineering: Building the Internal Paved Road Your Teams Will Use",
    desc: "A platform team only succeeds when self-service is easier than going around it. Golden paths, developer portals, and templated CI/CD that…",
    date: "Sep 2025",
    read: "10 min read",
    author: "Hannah Brooks",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Engineering blog</span>
          <div className="split" style={{ marginTop: 14 }}>
            <div className="card__media" style={{ margin: 0 }}>
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&h=560&q=80"
                alt="Zero-Downtime Deploys on Kubernetes: Rolling, Blue-Green, and Canary in Practice"
                loading="lazy"
              />
            </div>
            <div>
              <span className="pill" style={{ marginBottom: 14 }}>DevOps</span>
              <h1 style={{ fontSize: "clamp(1.8rem,3.4vw,2.6rem)" }}>
                Zero-Downtime Deploys on Kubernetes: Rolling, Blue-Green, and Canary in Practice
              </h1>
              <p className="lead">
                Shipping during business hours should be a non-event. We break down the deployment
                strategies behind our 99.99% uptime and how to pick the right one per workload.
              </p>
              <div className="article__meta">
                <span>Mar 2026</span>
                <span>8 min read</span>
                <span>Daniel Okafor</span>
              </div>
              <div className="btn-row" style={{ marginTop: 18 }}>
                <Link className="btn btn--primary" href="/blog">Read article</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Latest articles</h2>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            {ARTICLES.map((a) => (
              <Link className="card card--link reveal" href="/blog" key={a.title}>
                <div className="card__media">
                  <img src={a.img} alt={a.alt} loading="lazy" />
                </div>
                <span className="pill" style={{ marginBottom: 12 }}>{a.pill}</span>
                <h3>{a.title}</h3>
                <p className="muted">{a.desc}</p>
                <div className="article__meta">
                  <span>{a.date}</span>
                  <span>{a.read}</span>
                  <span>{a.author}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="newsletter reveal">
            <span className="eyebrow">Stay in the loop</span>
            <h2>Engineering insights, a few times a month</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Practical notes on cloud, DevOps, and building software that holds up — no noise.
            </p>
            <form data-newsletter noValidate>
              <input
                className="input"
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
                required
              />
              <button className="btn btn--primary" type="submit">Subscribe</button>
            </form>
            <p className="form-success" data-success aria-live="polite">
              Thanks — you're subscribed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
