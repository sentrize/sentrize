import type { Metadata } from "next";
import Link from "next/link";
import AgentSearch from "@/components/marketplace/AgentSearch";
import ProductTabs, { type Product, type ProductTab } from "@/components/marketplace/ProductTabs";
import { Icon } from "@/components/awsnav/Icon";
import type { IconName } from "@/components/awsnav/nav-config";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Find, compare, and deploy cloud solutions — AI agents, SaaS, containers, data products, and professional services — in the Sentrize Marketplace.",
};

/* ---- Most subscribed products, per category tab ---- */
const TABS: ProductTab[] = [
  {
    label: "AI Agents & Tools",
    products: [
      { vendor: "Brave", name: "Brave Search API", rating: null, reviews: 0, chips: ["Deployed on Sentrize"], desc: "The largest commercially-available developer tool for programmable web search — connect apps and AI agents to the open internet." },
      { vendor: "Uptage", name: "Document Intelligence — AI Agent", rating: null, reviews: 0, chips: ["Free tier"], desc: "Extract structured information or convert messy documents into clean HTML — all with a single API. No fine-tuning, no re-training, just results." },
      { vendor: "Asana", name: "Asana MCP Server", rating: 4.4, reviews: 1001, chips: ["Free tier"], desc: "A Model Context Protocol server, accessible via app integration, which allows AI assistants and other applications to access work graph data." },
      { vendor: "Pokee AI", name: "Pokee AI Agent", rating: 5.0, reviews: 1, chips: ["Deployed on Sentrize"], desc: "A research lab building the next generation of autonomous agents — a platform designed to solve enterprises' most difficult problems." },
    ],
  },
  {
    label: "SaaS",
    products: [
      { vendor: "Lumo", name: "Lumo CRM Suite", rating: 4.5, reviews: 623, chips: ["Free trial", "Deployed on Sentrize"], desc: "Pipeline, support, and billing in one multi-tenant workspace — built API-first so it slots into your existing stack." },
      { vendor: "Formaflow", name: "Formaflow Workflows", rating: 4.7, reviews: 288, chips: ["Free tier"], desc: "Drag-and-drop workflow automation with approvals, SLAs, and audit trails for regulated teams." },
      { vendor: "Pingwell", name: "Pingwell Uptime", rating: 4.8, reviews: 154, chips: ["Free tier"], desc: "Synthetic checks, status pages, and on-call escalation for every service you run." },
      { vendor: "Ledgerly", name: "Ledgerly Billing", rating: 4.4, reviews: 97, chips: ["Free trial"], desc: "Usage-based billing and revenue recognition for SaaS — metering, invoicing, dunning, and tax." },
    ],
  },
  {
    label: "AMI",
    products: [
      { vendor: "Sentrize Labs", name: "Hardened Ubuntu 24.04 LTS", rating: 4.9, reviews: 1204, chips: ["Free tier"], desc: "CIS-benchmarked Ubuntu image with automatic security patching, SSM agent, and monitoring pre-wired." },
      { vendor: "Sentrize Labs", name: "NGINX Plus Gateway", rating: 4.6, reviews: 342, chips: ["Free trial"], desc: "Production-tuned reverse proxy and API gateway image with mTLS, rate limiting, and blue-green support." },
      { vendor: "DataVine", name: "PostgreSQL 17 HA", rating: 4.7, reviews: 501, chips: ["Deployed on Sentrize"], desc: "Streaming-replication PostgreSQL pair with automated failover, PITR backups, and pgBouncer." },
      { vendor: "Grafcore", name: "Observability Stack AMI", rating: 4.5, reviews: 233, chips: ["Free tier"], desc: "Grafana, Prometheus, and Loki pre-integrated on one image — dashboards for your whole fleet in minutes." },
    ],
  },
  {
    label: "Containers",
    products: [
      { vendor: "Sentrize Labs", name: "K8s Baseline Add-ons", rating: 4.8, reviews: 415, chips: ["Quick launch"], desc: "Ingress, cert-manager, external-dns, and autoscaling installed and configured to our production baseline." },
      { vendor: "Harborline", name: "Private Registry", rating: 4.6, reviews: 187, chips: ["Free tier"], desc: "Vulnerability-scanned container registry with signed images, retention policies, and replication." },
      { vendor: "Meshwork", name: "Service Mesh Bundle", rating: 4.4, reviews: 96, chips: ["Free trial"], desc: "Zero-trust mTLS between services with traffic shifting, retries, and golden-signal dashboards out of the box." },
      { vendor: "Queuecraft", name: "Kafka on Kubernetes", rating: 4.5, reviews: 269, chips: ["Deployed on Sentrize"], desc: "Operator-managed Kafka with rack awareness, tiered storage, and one-command cluster upgrades." },
    ],
  },
  {
    label: "Machine Learning",
    products: [
      { vendor: "Sentrize Labs", name: "Model Serving Platform", rating: 4.7, reviews: 178, chips: ["Quick launch"], desc: "GPU-aware inference serving with autoscaling, canary rollouts, and per-model observability." },
      { vendor: "Vecturon", name: "Vector Database Cloud", rating: 4.6, reviews: 322, chips: ["Free tier"], desc: "Millisecond similarity search over billions of embeddings with hybrid keyword + vector ranking." },
      { vendor: "Labelbee", name: "Data Labeling Studio", rating: 4.3, reviews: 141, chips: ["Free trial"], desc: "Human-in-the-loop labeling pipelines with quality scoring and programmatic QA for training data." },
      { vendor: "Foresight", name: "Forecasting Engine", rating: 4.5, reviews: 87, chips: ["Deployed on Sentrize"], desc: "Demand and capacity forecasting API trained on your historical data — no ML team required." },
    ],
  },
  {
    label: "Professional Services",
    products: [
      { vendor: "Sentrize", name: "Cloud Migration Assessment", rating: 5.0, reviews: 64, chips: ["Fixed scope"], desc: "Two-week discovery producing a migration wave plan, TCO model, and landing-zone design." },
      { vendor: "Sentrize", name: "DevOps Acceleration", rating: 4.9, reviews: 112, chips: ["Fixed scope"], desc: "CI/CD, IaC, and observability implemented on your stack by a senior platform squad." },
      { vendor: "Sentrize", name: "Well-Architected Review", rating: 4.9, reviews: 98, chips: ["Free tier"], desc: "A certified review across the six pillars with a prioritized remediation backlog." },
      { vendor: "Sentrize", name: "24/7 Managed Operations", rating: 4.8, reviews: 205, chips: ["SLA-backed"], desc: "Round-the-clock monitoring, incident response, and cost optimization for production workloads." },
    ],
  },
  {
    label: "Data",
    products: [
      { vendor: "DataVine", name: "Streaming ETL", rating: 4.6, reviews: 154, chips: ["Free trial"], desc: "Change-data-capture pipelines from your OLTP databases into the warehouse with exactly-once delivery." },
      { vendor: "Atlaset", name: "Geospatial Data Feeds", rating: 4.4, reviews: 76, chips: ["Subscription"], desc: "Curated, cleaned, and versioned location datasets delivered straight to your lake." },
      { vendor: "Finchart", name: "Market Data API", rating: 4.7, reviews: 289, chips: ["Free tier"], desc: "Real-time and historical financial market data with per-symbol entitlements." },
      { vendor: "Clearsig", name: "Consent & Privacy Vault", rating: 4.5, reviews: 63, chips: ["Deployed on Sentrize"], desc: "Tokenized PII storage with purpose-based access control and full audit lineage." },
    ],
  },
  {
    label: "Free",
    products: [
      { vendor: "Sentrize Labs", name: "Cost Explorer Lite", rating: 4.8, reviews: 342, chips: ["Free"], desc: "Daily spend digests, anomaly alerts, and rightsizing hints for one cloud account." },
      { vendor: "Sentrize Labs", name: "IaC Starter Kits", rating: 4.9, reviews: 517, chips: ["Free"], desc: "Terraform modules for VPCs, clusters, and CI runners — the same baseline we deploy for clients." },
      { vendor: "Uptage", name: "Doc Parser Playground", rating: 4.6, reviews: 204, chips: ["Free"], desc: "Try structured extraction on your own documents with generous free-tier limits." },
      { vendor: "Pingwell", name: "Status Badge", rating: 4.7, reviews: 158, chips: ["Free"], desc: "A public uptime badge and status page for one service, free forever." },
    ],
  },
];

/* ---- Express private offers band ---- */
const OFFERS: Product[] = [
  { vendor: "Tailscale", name: "Tailscale — Secure Remote Access", rating: 4.5, reviews: 57, chips: ["Deployed on Sentrize", "Free trial"], desc: "A secure connectivity platform that replaces your legacy VPN, SASE, and PAM and connects remote teams, multi-cloud environments, CI/CD pipelines, edge and IoT devices." },
  { vendor: "1Password", name: "1Password Business", rating: 4.6, reviews: 781, chips: ["Deployed on Sentrize"], desc: "Takes the guesswork out of logins, shadow IT, and infrastructure secrets so you can keep your people and your business moving." },
  { vendor: "Trend Micro", name: "TrendAI Vision One", rating: 4.6, reviews: 458, chips: ["Free trial", "Vendor insights"], desc: "Stop threats before they strike — the AI-powered enterprise cybersecurity platform built to predict, prevent, and respond across hybrid and multi-cloud." },
  { vendor: "Orca Security", name: "Orca Cloud Security Platform", rating: 4.7, reviews: 304, chips: ["Free trial", "Quick launch"], desc: "Agentless cloud security in a single, complete platform with full coverage across VMs, containers, and serverless." },
];

const CATEGORIES: { label: string; icon: IconName; href: string }[] = [
  { label: "Operating Systems", icon: "server", href: "/managed-hosting" },
  { label: "Security", icon: "shield", href: "/security-compliance" },
  { label: "Networking", icon: "network", href: "/cloud-infrastructure" },
  { label: "Storage", icon: "storage", href: "/managed-hosting" },
  { label: "Data & Analytics", icon: "chart", href: "/solutions" },
  { label: "DevOps", icon: "rocket", href: "/devops" },
  { label: "Machine Learning", icon: "ai", href: "/ai-automation" },
  { label: "Data Products", icon: "database", href: "/solutions" },
  { label: "Developer Tools", icon: "code", href: "/api-development" },
  { label: "View All Categories", icon: "arrow", href: "/services" },
];

const TOPICS: { label: string; icon: IconName; href: string; desc: string }[] = [
  { label: "Business Applications", icon: "layers", href: "/software-development", desc: "Find, buy, and deploy SaaS solutions to drive your business forward." },
  { label: "Data & Analytics", icon: "chart", href: "/solutions", desc: "Gain the decision-making power and insights to act in real time." },
  { label: "DevOps", icon: "rocket", href: "/devops", desc: "Design and deploy reliable, secure, modern applications and infrastructure." },
  { label: "Infrastructure Software", icon: "server", href: "/cloud-infrastructure", desc: "Move, modernize, and manage your IT infrastructure." },
  { label: "Internet of Things (IoT)", icon: "network", href: "/solutions", desc: "Quickly connect, collect, and act on data from your connected devices." },
  { label: "Machine Learning", icon: "ai", href: "/ai-automation", desc: "Predict outcomes and optimize solutions to meet real-world challenges." },
  { label: "Migration", icon: "arrow", href: "/cloud-migration", desc: "Move workloads and infrastructure to the cloud with confidence." },
  { label: "Security", icon: "shield", href: "/security-compliance", desc: "Strengthen application and infrastructure security." },
];

const INDUSTRIES: { label: string; icon: IconName; href: string; desc: string }[] = [
  { label: "Financial Services", icon: "chart", href: "/solutions", desc: "Deliver enriched customer services, lower your industry risk, and manage oversight." },
  { label: "Healthcare", icon: "users", href: "/solutions", desc: "Enable new methods of care delivery and operational efficiency." },
  { label: "Media & Entertainment", icon: "play", href: "/solutions", desc: "Create and deliver personalized consumer experiences anywhere, on any device." },
  { label: "Public Sector", icon: "globe", href: "/solutions", desc: "Innovate citizen services, deliver efficiencies, and optimize operations." },
  { label: "Telecommunications", icon: "network", href: "/solutions", desc: "Modernize infrastructure and processes, and optimize security operations." },
];

export default function MarketplacePage() {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/marketplace.css" precedence="default" />

      {/* Agent-mode search hero */}
      <section className="page-hero mkt-hero">
        <div className="container">
          <span className="pill">✦ Agent mode</span>
          <h1>Find your perfect match from over 300 cloud solutions</h1>
          <AgentSearch />
          <div className="mkt-tasks">
            <p className="mkt-tasks__label">Try these tasks</p>
            <div className="grid grid-2">
              <div className="card mkt-task">
                <span className="mkt-task__icon"><Icon name="table" size={20} /></span>
                <div>
                  <h3>Compare products</h3>
                  <p>Get a bespoke comparison of products.</p>
                  <span className="pill">Deep research</span>
                </div>
              </div>
              <div className="card mkt-task">
                <span className="mkt-task__icon"><Icon name="book" size={20} /></span>
                <div>
                  <h3>Create proposal</h3>
                  <p>Generate a comprehensive business proposal.</p>
                  <span className="pill">Deep research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most subscribed products */}
      <section className="section">
        <div className="container">
          <h2 className="center">The most subscribed products last month</h2>
          <ProductTabs tabs={TABS} />
        </div>
      </section>

      {/* Express private offers */}
      <section className="section section--soft">
        <div className="container">
          <div className="mkt-band-head">
            <span className="eyebrow">⚡ Express private offers</span>
            <h2>Custom pricing in minutes, right in your Sentrize console</h2>
            <p className="muted">Most express private offers generated</p>
          </div>
          <div className="grid grid-4">
            {OFFERS.map((p, i) => (
              <article className="card mkt-prod" key={p.name}>
                <span className="mkt-prod__rank">Top {i + 1}</span>
                <div className="mkt-prod__vendor">
                  <span className="mkt-prod__mark">{p.vendor.slice(0, 2).toUpperCase()}</span>
                  Sold by: {p.vendor}
                </div>
                <h3>{p.name}</h3>
                <div className="mkt-prod__rating">
                  <span className="mkt-prod__stars">
                    {"★".repeat(Math.round(p.rating ?? 0))}
                    <span className="mkt-prod__stars--empty">{"★".repeat(5 - Math.round(p.rating ?? 0))}</span>
                  </span>
                  {p.rating?.toFixed(1)} ({p.reviews})
                </div>
                <div className="mkt-chips">
                  {p.chips.map((c) => (
                    <span className="mkt-chip" key={c}>{c}</span>
                  ))}
                </div>
                <p className="mkt-spec">Sentrize Specializations</p>
                <p className="mkt-prod__desc">{p.desc}</p>
                <div className="mkt-prod__cta">
                  <Link className="btn btn--ghost" href="/contact">Get express private offer</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mkt-dots" aria-hidden="true"><i className="on" /><i /><i /></div>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 30 }}>
            <Link className="btn btn--primary" href="/services">View all products</Link>
          </div>
        </div>
      </section>

      {/* Popular categories */}
      <section className="section">
        <div className="container">
          <h2 className="center">Popular Categories</h2>
          <div className="mkt-cats">
            {CATEGORIES.map((c) => (
              <Link className="mkt-cat" href={c.href} key={c.label}>
                <span className="mkt-cat__icon"><Icon name={c.icon} size={26} /></span>
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by topic area */}
      <section className="section section--soft">
        <div className="container">
          <h2>Explore solutions by topic area and use case</h2>
          <div className="grid grid-4" style={{ marginTop: 30 }}>
            {TOPICS.map((t) => (
              <Link className="card card--link mkt-explore" href={t.href} key={t.label}>
                <span className="card__icon"><Icon name={t.icon} size={24} /></span>
                <h3>{t.label}</h3>
                <p>{t.desc}</p>
                <span className="mkt-explore__more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by industry */}
      <section className="section">
        <div className="container">
          <h2>Explore solutions by industry and use case</h2>
          <div className="grid grid-4" style={{ marginTop: 30 }}>
            {INDUSTRIES.map((t) => (
              <Link className="card card--link mkt-explore" href={t.href} key={t.label}>
                <span className="card__icon"><Icon name={t.icon} size={24} /></span>
                <h3>{t.label}</h3>
                <p>{t.desc}</p>
                <span className="mkt-explore__more">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 34 }}>
            <Link className="btn btn--ghost" href="/solutions">View all solutions »</Link>
          </div>
        </div>
      </section>

      {/* Customer success stories */}
      <section className="section section--dark">
        <div className="container">
          <h2>Customer Success Stories</h2>
          <div className="card mkt-story">
            <div>
              <blockquote>
                “Teams at Bitdefender needed observability into all service data to easily detect
                problems and resolve them quickly. With the Sentrize Marketplace they gained insight
                into all of their microservice workloads, went to market faster, and reduced
                troubleshooting time.”
              </blockquote>
              <cite>
                Bitdefender
                <span>Senior Technical Manager</span>
              </cite>
              <div className="btn-row" style={{ marginTop: 22 }}>
                <Link className="btn btn--ghost" href="/success-stories">Learn more →</Link>
              </div>
            </div>
            <div className="mkt-story__logo">Bitdefender</div>
          </div>
          <h3 style={{ marginTop: 40 }}>More Stories</h3>
          <div className="mkt-logos">
            <Link className="mkt-logo" href="/success-stories">EaseUS</Link>
            <Link className="mkt-logo" href="/success-stories">Mondly</Link>
            <Link className="mkt-logo" href="/success-stories">123 Form Builder</Link>
            <Link className="mkt-logo" href="/success-stories">Cisco</Link>
          </div>
          <p className="muted" style={{ marginTop: 24, marginBottom: 0 }}>
            To see more examples of how we have helped businesses with their software needs, please
            visit the <Link href="/success-stories">customer success stories page</Link>.
          </p>
        </div>
      </section>

      {/* Sell band */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Sell in the Sentrize Marketplace</h2>
            <p className="lead">
              The Sentrize Marketplace provides a new sales channel for ISVs and consulting partners
              to sell their solutions to our customers. We make it easy to list, deploy, and manage
              software solutions — including SaaS — in a matter of minutes.
            </p>
            <Link className="btn btn--light btn--lg" href="/reseller-program">Register Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
