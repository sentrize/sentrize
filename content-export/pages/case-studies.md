# Page: Case Studies
- **Route:** /case-studies
- **Source:** app/(site)/case-studies/page.tsx
- **SEO Title:** Case Studies
- **SEO Description:** Sentrize case studies: measurable outcomes in performance, scale, and cost across software, cloud, and DevOps engagements worldwide.

## Section 1 — Featured Case Study (hero banner with background image)
- Image: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&h=560&q=80 (alt: "Continuous Delivery Overhaul for a High-Volume Logistics Platform")
- Pill: Featured case study

# Continuous Delivery Overhaul for a High-Volume Logistics Platform

Releases were manual, batched fortnightly, and routinely rolled back — a single failed deploy could freeze the engineering org for a day.

Metrics:
- **3 wks→2 hrs** — Release lead time
- **40+/day** — Deploy frequency
- **22%→3.1%** — Change-failure rate

CTA:
- [Start your project](/contact) (primary)

## Section 2 — More Results (5 case study cards)
- Eyebrow: More results

## Engineering outcomes that moved the business

### Re-Architecting a Payments Core for Linear Scale
- Client pill: A Series C fintech offering embedded payments and reconciliation.
- Metrics:
  - **900→12k TPS** — Sustained throughput
  - **840ms→64ms** — p99 latency
  - **0** — Reconciliation drift

We decomposed the ledger into an event-sourced core on an append-only PostgreSQL event store partitioned by merchant, with idempotent command APIs and Redis projections, replacing pessimistic locks with optimistic concurrency.

> "For the first time we can sign an enterprise merchant without a capacity caveat in the contract." — Priya Venkatesan, CTO

### Lift, Re-Platform, and Optimize for a Healthcare Data Provider
- Client pill: A mid-market healthcare analytics company under HIPAA and SOC 2.
- Metrics:
  - **9 months** — Zero-downtime migration
  - **−38%** — Infrastructure cost
  - **0 findings** — SOC 2 Type II

We ran a phased strangler-pattern migration to AWS, shifting traffic per service behind a routing layer with per-service rollback. All infra was Terraform-defined with encryption by default and audit logging mapped to SOC 2…

> "They moved our entire platform under us and our customers never felt a thing." — Marcus Lindqvist, VP of Infrastructure

### Multi-Tenant Re-Platform for a B2B Collaboration Product
- Client pill: An early-growth B2B SaaS whose single-tenant pilot landed three enterprise accounts.
- Metrics:
  - **2 wks→10 min** — Tenant provisioning
  - **6→40k** — Paid seats in 14 mo
  - **3/3** — Security reviews passed

We re-architected to multi-tenant with row-level isolation, per-tenant encryption keys, and a self-service provisioning service, rebuilding the frontend in Next.js and adding tenant-scoped metering for billing.

> "The platform stopped being the bottleneck to enterprise deals — it became the reason we won them." — Sophie Aldridge, Co-Founder & CEO

### FinOps and Reliability Engineering for a Consumer Streaming App
- Client pill: A venture-backed streaming startup with spiky viewership.
- Metrics:
  - **−44%** — Monthly cloud spend
  - **5/wk→<1/mo** — Surge incidents
  - **99.99%** — Peak-event uptime

We instrumented cost and performance telemetry, moved stateless workloads to Kubernetes with demand-driven autoscaling and Spot pools, added multi-tier caching, and codified capacity policies in Terraform.

> "We halved the bill and stopped getting paged at 2am — I didn't think we could have both." — Reuben Castellanos, Head of Platform

### Retrieval-Grounded AI Automation for an Enterprise Support Operation
- Client pill: An enterprise B2B software company fielding 30,000+ monthly tickets.
- Metrics:
  - **61%** — Tickets auto-resolved
  - **14h→<2min** — First response
  - **−52%** — Cost per ticket

We built a retrieval-grounded agent over the client's docs with strict citations and confidence-gated escalation, integrated through a typed tool layer for scoped account actions, validated in shadow mode against 20,000…

> "It handles the volume we could never hire for, and it does it without making things up." — Hannah Brückner, Director of Customer Operations

## Section 3 — Stats Strip (dark, inlined on this page — not the shared Metrics component)

- **500+** — Projects delivered
- **99.99%** — SLA-backed uptime
- **98%** — Client retention
- **50+** — Engineers & specialists

## Section 4 — CTA
(Shared CTA block — see site-config.md)
