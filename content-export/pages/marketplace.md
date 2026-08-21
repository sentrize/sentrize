# Page: Marketplace
- **Route:** /marketplace
- **Source:** app/(site)/marketplace/page.tsx (uses components/marketplace/AgentSearch.tsx and components/marketplace/ProductTabs.tsx)
- **SEO Title:** Marketplace
- **SEO Description:** Find, compare, and deploy cloud solutions — AI agents, SaaS, containers, data products, and professional services — in the Sentrize Marketplace.

## Section 1 — Hero (Agent-mode search)

- Pill/badge: **✦ Agent mode**

# Find your perfect match from over 300 cloud solutions

Agent search panel (from components/marketplace/AgentSearch.tsx):
- Textarea placeholder: "Let's guide you to the right solution. What's your business need?"
- Textarea aria-label: "Describe your business need"
- Max length: 4000 characters
- Send button aria-label: "Search" — icon: arrow
- Character counter text: "{count} / 4000 characters"
- Disclaimer text: "By using agent mode, you agree to the [disclaimer](/terms-of-service). On shared computers, your uploaded information might be visible to other users. Do not share confidential data."

Try these tasks (label: "Try these tasks"):

- **Compare products** — icon: table
  Get a bespoke comparison of products.
  Pill: "Deep research"
- **Create proposal** — icon: book
  Generate a comprehensive business proposal.
  Pill: "Deep research"

## Section 2 — The most subscribed products last month (tabbed product grid)

## The most subscribed products last month

Rendered via components/marketplace/ProductTabs.tsx — tab list aria-label: "Product categories". Each product card shows: rank badge ("Top 1" … "Top 4"), vendor mark (first 2 letters of vendor, uppercase), "Sold by: {vendor}", product name, star rating with "{rating} ({reviews})" (products with no rating show empty stars and "({reviews})"), chips, description, and CTA [Get Started](/contact).

### Tab: AI Agents & Tools

1. **Brave Search API** — Sold by: Brave
   - Rating: (none) · Reviews: 0
   - Chips: Deployed on Sentrize
   - The largest commercially-available developer tool for programmable web search — connect apps and AI agents to the open internet.
   - CTA: [Get Started](/contact)
2. **Document Intelligence — AI Agent** — Sold by: Uptage
   - Rating: (none) · Reviews: 0
   - Chips: Free tier
   - Extract structured information or convert messy documents into clean HTML — all with a single API. No fine-tuning, no re-training, just results.
   - CTA: [Get Started](/contact)
3. **Asana MCP Server** — Sold by: Asana
   - Rating: 4.4 · Reviews: 1001
   - Chips: Free tier
   - A Model Context Protocol server, accessible via app integration, which allows AI assistants and other applications to access work graph data.
   - CTA: [Get Started](/contact)
4. **Pokee AI Agent** — Sold by: Pokee AI
   - Rating: 5.0 · Reviews: 1
   - Chips: Deployed on Sentrize
   - A research lab building the next generation of autonomous agents — a platform designed to solve enterprises' most difficult problems.
   - CTA: [Get Started](/contact)

### Tab: SaaS

1. **Lumo CRM Suite** — Sold by: Lumo
   - Rating: 4.5 · Reviews: 623
   - Chips: Free trial, Deployed on Sentrize
   - Pipeline, support, and billing in one multi-tenant workspace — built API-first so it slots into your existing stack.
   - CTA: [Get Started](/contact)
2. **Formaflow Workflows** — Sold by: Formaflow
   - Rating: 4.7 · Reviews: 288
   - Chips: Free tier
   - Drag-and-drop workflow automation with approvals, SLAs, and audit trails for regulated teams.
   - CTA: [Get Started](/contact)
3. **Pingwell Uptime** — Sold by: Pingwell
   - Rating: 4.8 · Reviews: 154
   - Chips: Free tier
   - Synthetic checks, status pages, and on-call escalation for every service you run.
   - CTA: [Get Started](/contact)
4. **Ledgerly Billing** — Sold by: Ledgerly
   - Rating: 4.4 · Reviews: 97
   - Chips: Free trial
   - Usage-based billing and revenue recognition for SaaS — metering, invoicing, dunning, and tax.
   - CTA: [Get Started](/contact)

### Tab: AMI

1. **Hardened Ubuntu 24.04 LTS** — Sold by: Sentrize Labs
   - Rating: 4.9 · Reviews: 1204
   - Chips: Free tier
   - CIS-benchmarked Ubuntu image with automatic security patching, SSM agent, and monitoring pre-wired.
   - CTA: [Get Started](/contact)
2. **NGINX Plus Gateway** — Sold by: Sentrize Labs
   - Rating: 4.6 · Reviews: 342
   - Chips: Free trial
   - Production-tuned reverse proxy and API gateway image with mTLS, rate limiting, and blue-green support.
   - CTA: [Get Started](/contact)
3. **PostgreSQL 17 HA** — Sold by: DataVine
   - Rating: 4.7 · Reviews: 501
   - Chips: Deployed on Sentrize
   - Streaming-replication PostgreSQL pair with automated failover, PITR backups, and pgBouncer.
   - CTA: [Get Started](/contact)
4. **Observability Stack AMI** — Sold by: Grafcore
   - Rating: 4.5 · Reviews: 233
   - Chips: Free tier
   - Grafana, Prometheus, and Loki pre-integrated on one image — dashboards for your whole fleet in minutes.
   - CTA: [Get Started](/contact)

### Tab: Containers

1. **K8s Baseline Add-ons** — Sold by: Sentrize Labs
   - Rating: 4.8 · Reviews: 415
   - Chips: Quick launch
   - Ingress, cert-manager, external-dns, and autoscaling installed and configured to our production baseline.
   - CTA: [Get Started](/contact)
2. **Private Registry** — Sold by: Harborline
   - Rating: 4.6 · Reviews: 187
   - Chips: Free tier
   - Vulnerability-scanned container registry with signed images, retention policies, and replication.
   - CTA: [Get Started](/contact)
3. **Service Mesh Bundle** — Sold by: Meshwork
   - Rating: 4.4 · Reviews: 96
   - Chips: Free trial
   - Zero-trust mTLS between services with traffic shifting, retries, and golden-signal dashboards out of the box.
   - CTA: [Get Started](/contact)
4. **Kafka on Kubernetes** — Sold by: Queuecraft
   - Rating: 4.5 · Reviews: 269
   - Chips: Deployed on Sentrize
   - Operator-managed Kafka with rack awareness, tiered storage, and one-command cluster upgrades.
   - CTA: [Get Started](/contact)

### Tab: Machine Learning

1. **Model Serving Platform** — Sold by: Sentrize Labs
   - Rating: 4.7 · Reviews: 178
   - Chips: Quick launch
   - GPU-aware inference serving with autoscaling, canary rollouts, and per-model observability.
   - CTA: [Get Started](/contact)
2. **Vector Database Cloud** — Sold by: Vecturon
   - Rating: 4.6 · Reviews: 322
   - Chips: Free tier
   - Millisecond similarity search over billions of embeddings with hybrid keyword + vector ranking.
   - CTA: [Get Started](/contact)
3. **Data Labeling Studio** — Sold by: Labelbee
   - Rating: 4.3 · Reviews: 141
   - Chips: Free trial
   - Human-in-the-loop labeling pipelines with quality scoring and programmatic QA for training data.
   - CTA: [Get Started](/contact)
4. **Forecasting Engine** — Sold by: Foresight
   - Rating: 4.5 · Reviews: 87
   - Chips: Deployed on Sentrize
   - Demand and capacity forecasting API trained on your historical data — no ML team required.
   - CTA: [Get Started](/contact)

### Tab: Professional Services

1. **Cloud Migration Assessment** — Sold by: Sentrize
   - Rating: 5.0 · Reviews: 64
   - Chips: Fixed scope
   - Two-week discovery producing a migration wave plan, TCO model, and landing-zone design.
   - CTA: [Get Started](/contact)
2. **DevOps Acceleration** — Sold by: Sentrize
   - Rating: 4.9 · Reviews: 112
   - Chips: Fixed scope
   - CI/CD, IaC, and observability implemented on your stack by a senior platform squad.
   - CTA: [Get Started](/contact)
3. **Well-Architected Review** — Sold by: Sentrize
   - Rating: 4.9 · Reviews: 98
   - Chips: Free tier
   - A certified review across the six pillars with a prioritized remediation backlog.
   - CTA: [Get Started](/contact)
4. **24/7 Managed Operations** — Sold by: Sentrize
   - Rating: 4.8 · Reviews: 205
   - Chips: SLA-backed
   - Round-the-clock monitoring, incident response, and cost optimization for production workloads.
   - CTA: [Get Started](/contact)

### Tab: Data

1. **Streaming ETL** — Sold by: DataVine
   - Rating: 4.6 · Reviews: 154
   - Chips: Free trial
   - Change-data-capture pipelines from your OLTP databases into the warehouse with exactly-once delivery.
   - CTA: [Get Started](/contact)
2. **Geospatial Data Feeds** — Sold by: Atlaset
   - Rating: 4.4 · Reviews: 76
   - Chips: Subscription
   - Curated, cleaned, and versioned location datasets delivered straight to your lake.
   - CTA: [Get Started](/contact)
3. **Market Data API** — Sold by: Finchart
   - Rating: 4.7 · Reviews: 289
   - Chips: Free tier
   - Real-time and historical financial market data with per-symbol entitlements.
   - CTA: [Get Started](/contact)
4. **Consent & Privacy Vault** — Sold by: Clearsig
   - Rating: 4.5 · Reviews: 63
   - Chips: Deployed on Sentrize
   - Tokenized PII storage with purpose-based access control and full audit lineage.
   - CTA: [Get Started](/contact)

### Tab: Free

1. **Cost Explorer Lite** — Sold by: Sentrize Labs
   - Rating: 4.8 · Reviews: 342
   - Chips: Free
   - Daily spend digests, anomaly alerts, and rightsizing hints for one cloud account.
   - CTA: [Get Started](/contact)
2. **IaC Starter Kits** — Sold by: Sentrize Labs
   - Rating: 4.9 · Reviews: 517
   - Chips: Free
   - Terraform modules for VPCs, clusters, and CI runners — the same baseline we deploy for clients.
   - CTA: [Get Started](/contact)
3. **Doc Parser Playground** — Sold by: Uptage
   - Rating: 4.6 · Reviews: 204
   - Chips: Free
   - Try structured extraction on your own documents with generous free-tier limits.
   - CTA: [Get Started](/contact)
4. **Status Badge** — Sold by: Pingwell
   - Rating: 4.7 · Reviews: 158
   - Chips: Free
   - A public uptime badge and status page for one service, free forever.
   - CTA: [Get Started](/contact)

## Section 3 — Express private offers (soft section)

- Eyebrow: **⚡ Express private offers**

## Custom pricing in minutes, right in your Sentrize console

Most express private offers generated

Each offer card shows: rank badge ("Top 1" … "Top 4"), vendor mark, "Sold by: {vendor}", name, star rating "{rating} ({reviews})", chips, the label "Sentrize Specializations", description, and CTA [Get express private offer](/contact).

1. **Tailscale — Secure Remote Access** — Sold by: Tailscale
   - Rating: 4.5 · Reviews: 57
   - Chips: Deployed on Sentrize, Free trial
   - Sentrize Specializations
   - A secure connectivity platform that replaces your legacy VPN, SASE, and PAM and connects remote teams, multi-cloud environments, CI/CD pipelines, edge and IoT devices.
   - CTA: [Get express private offer](/contact)
2. **1Password Business** — Sold by: 1Password
   - Rating: 4.6 · Reviews: 781
   - Chips: Deployed on Sentrize
   - Sentrize Specializations
   - Takes the guesswork out of logins, shadow IT, and infrastructure secrets so you can keep your people and your business moving.
   - CTA: [Get express private offer](/contact)
3. **TrendAI Vision One** — Sold by: Trend Micro
   - Rating: 4.6 · Reviews: 458
   - Chips: Free trial, Vendor insights
   - Sentrize Specializations
   - Stop threats before they strike — the AI-powered enterprise cybersecurity platform built to predict, prevent, and respond across hybrid and multi-cloud.
   - CTA: [Get express private offer](/contact)
4. **Orca Cloud Security Platform** — Sold by: Orca Security
   - Rating: 4.7 · Reviews: 304
   - Chips: Free trial, Quick launch
   - Sentrize Specializations
   - Agentless cloud security in a single, complete platform with full coverage across VMs, containers, and serverless.
   - CTA: [Get express private offer](/contact)

(Decorative pagination dots below the grid.)

CTA: [View all products](/services)

## Section 4 — Popular Categories

## Popular Categories

- [Operating Systems](/managed-hosting) — icon: server
- [Security](/security-compliance) — icon: shield
- [Networking](/cloud-infrastructure) — icon: network
- [Storage](/managed-hosting) — icon: storage
- [Data & Analytics](/solutions) — icon: chart
- [DevOps](/devops) — icon: rocket
- [Machine Learning](/ai-automation) — icon: ai
- [Data Products](/solutions) — icon: database
- [Developer Tools](/api-development) — icon: code
- [View All Categories](/services) — icon: arrow

## Section 5 — Explore by topic area (soft section)

## Explore solutions by topic area and use case

Each card links to its href and ends with the label "Learn more →".

- **Business Applications** — icon: layers — [/software-development](/software-development)
  Find, buy, and deploy SaaS solutions to drive your business forward.
- **Data & Analytics** — icon: chart — [/solutions](/solutions)
  Gain the decision-making power and insights to act in real time.
- **DevOps** — icon: rocket — [/devops](/devops)
  Design and deploy reliable, secure, modern applications and infrastructure.
- **Infrastructure Software** — icon: server — [/cloud-infrastructure](/cloud-infrastructure)
  Move, modernize, and manage your IT infrastructure.
- **Internet of Things (IoT)** — icon: network — [/solutions](/solutions)
  Quickly connect, collect, and act on data from your connected devices.
- **Machine Learning** — icon: ai — [/ai-automation](/ai-automation)
  Predict outcomes and optimize solutions to meet real-world challenges.
- **Migration** — icon: arrow — [/cloud-migration](/cloud-migration)
  Move workloads and infrastructure to the cloud with confidence.
- **Security** — icon: shield — [/security-compliance](/security-compliance)
  Strengthen application and infrastructure security.

## Section 6 — Explore by industry

## Explore solutions by industry and use case

Each card links to its href and ends with the label "Learn more →".

- **Financial Services** — icon: chart — [/solutions](/solutions)
  Deliver enriched customer services, lower your industry risk, and manage oversight.
- **Healthcare** — icon: users — [/solutions](/solutions)
  Enable new methods of care delivery and operational efficiency.
- **Media & Entertainment** — icon: play — [/solutions](/solutions)
  Create and deliver personalized consumer experiences anywhere, on any device.
- **Public Sector** — icon: globe — [/solutions](/solutions)
  Innovate citizen services, deliver efficiencies, and optimize operations.
- **Telecommunications** — icon: network — [/solutions](/solutions)
  Modernize infrastructure and processes, and optimize security operations.

CTA: [View all solutions »](/solutions)

## Section 7 — Customer Success Stories (dark section)

## Customer Success Stories

> “Teams at Bitdefender needed observability into all service data to easily detect problems and resolve them quickly. With the Sentrize Marketplace they gained insight into all of their microservice workloads, went to market faster, and reduced troubleshooting time.”

— Bitdefender, Senior Technical Manager

CTA: [Learn more →](/success-stories)

(Logo panel text: Bitdefender)

### More Stories

Logo links:
- [EaseUS](/success-stories)
- [Mondly](/success-stories)
- [123 Form Builder](/success-stories)
- [Cisco](/success-stories)

To see more examples of how we have helped businesses with their software needs, please visit the [customer success stories page](/success-stories).

## Section 8 — Sell band (CTA)

## Sell in the Sentrize Marketplace

The Sentrize Marketplace provides a new sales channel for ISVs and consulting partners to sell their solutions to our customers. We make it easy to list, deploy, and manage software solutions — including SaaS — in a matter of minutes.

CTA: [Register Now](/reseller-program)
