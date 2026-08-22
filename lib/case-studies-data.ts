// Generated from content-export by the migration generator. Do not edit by hand.
export interface CaseStudy {
  slug: string; title: string; seoTitle: string; seoDescription: string;
  atGlance: { k: string; v: string }[]; challenge: string; solution: string;
  metrics: { value: string; label: string }[]; results: string; quote: string;
  related: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    "slug": "continuous-delivery-overhaul-for-a-high-volume-logistics-platform",
    "title": "Continuous Delivery Overhaul for a High-Volume Logistics Platform",
    "seoTitle": "Continuous Delivery Overhaul for a High-Volume Logistics Platform",
    "seoDescription": "How Sentrize took a high-volume logistics platform from fortnightly manual releases to 40+ deploys a day and a 3.1% change-failure rate.",
    "atGlance": [
      {
        "k": "Client",
        "v": "A high-volume logistics SaaS platform handling routing, tracking, and billing for shippers and carriers"
      },
      {
        "k": "Industry",
        "v": "Logistics (SaaS)"
      },
      {
        "k": "Services",
        "v": "<a href=\"/devops\">DevOps Services</a>, <a href=\"/cicd-automation\">CI/CD Automation</a>, <a href=\"/kubernetes\">Kubernetes</a>, <a href=\"/infrastructure-as-code\">Infrastructure as Code</a>"
      },
      {
        "k": "Engagement length / team size",
        "v": "7 months · 4 Sentrize engineers (1 lead, 2 platform engineers, 1 SRE) embedded with the client's teams"
      },
      {
        "k": "Stack",
        "v": "Node.js, TypeScript, Docker, Kubernetes on AWS, Terraform, GitHub Actions, Prometheus, Grafana, PostgreSQL"
      }
    ],
    "challenge": "<p>Releases were manual, batched fortnightly, and routinely rolled back — a single failed deploy could freeze the engineering org for a day.</p><p>The mechanics behind that sentence were familiar to anyone who has run a release train. Every two weeks a release branch was cut from weeks of accumulated work, stabilized by hand, and deployed on a Thursday evening from a runbook that only a few senior engineers could execute. Because each release carried dozens of unrelated changes, failures were hard to attribute and expensive to unwind: the change-failure rate sat at 22%, and a bad deploy meant a war room, a code freeze, and a day of lost engineering time across the organization.</p><p>The second-order effects were worse. Features waited an average of three weeks from merge to production. Urgent fixes bypassed the process entirely, creating drift between environments. And because deploying was risky, teams batched more into each release — making every release riskier still. With enterprise customers asking for faster fixes and predictable maintenance behaviour, leadership wanted the release process rebuilt, not patched.</p>",
    "solution": "<p>Sentrize ran the engagement as four overlapping workstreams, with the constraint that product delivery could not pause while the ground moved underneath it.</p><p><strong>A single paved-road pipeline.</strong> We standardized CI on GitHub Actions: every commit to trunk produced a tested, security-scanned, versioned Docker image. Build times were cut from 40+ minutes to under 10 by caching layers and parallelizing test suites, so the pipeline was fast enough that engineers actually used it as their feedback loop.</p><p><strong>A platform worth deploying to.</strong> Services moved onto Kubernetes (EKS) on AWS, with every environment — including production — defined in Terraform. Reproducible environments eliminated the configuration drift that had made the old runbook so fragile, and demand-driven autoscaling replaced statically provisioned fleets sized for peak.</p><p><strong>Progressive delivery instead of big-bang releases.</strong> Deploys became canary rollouts gated by automated analysis of Prometheus metrics — error rate, latency, and SLO burn. A regressing canary rolls back automatically in minutes, without a human in the loop. Feature flags decoupled deploy from release, so shipping code and exposing functionality became separate, low-stakes decisions.</p><p><strong>Ways of working.</strong> We moved teams to trunk-based development with small batches, gave every team ownership of its own deploys, and put shared Grafana dashboards in front of engineering and leadership so release health stopped being tribal knowledge. Sentrize engineers paired with client teams throughout, and the final month was spent handing over ownership entirely.</p>",
    "metrics": [
      {
        "value": "3 wks→2 hrs",
        "label": "Release lead time"
      },
      {
        "value": "40+/day",
        "label": "Deploy frequency"
      },
      {
        "value": "22%→3.1%",
        "label": "Change-failure rate"
      }
    ],
    "results": "<p>A change merged to trunk now reaches production in about two hours, and the platform sustains 40+ deploys a day across teams — up from one batched release a fortnight. Because each deploy is small and canary-gated, the change-failure rate fell from 22% to 3.1%, and the failures that do occur are contained: automated rollback restores the previous version in under five minutes, and there has not been an org-wide release freeze since cutover.</p><p>Two secondary outcomes are worth noting. Right-sizing and demand-driven autoscaling on Kubernetes cut monthly AWS spend materially as a by-product of the platform work, and the fortnightly release war room was retired — on-call now handles deploys as routine events rather than ceremonies.</p>",
    "quote": "<blockquote><p>\"Our cloud bill was growing faster than revenue. Sentrize re-architected autoscaling and cut monthly AWS spend by 38% — with better performance.\"</p></blockquote><blockquote><p>— <strong>Amara Diallo</strong>, Director of Operations · Logistics SaaS</p></blockquote><p>---</p><p><strong>Related:</strong> <a href=\"/devops\">DevOps Services</a> · <a href=\"/cicd-automation\">CI/CD Automation</a> · <a href=\"/kubernetes\">Kubernetes</a> · <a href=\"/case-studies\">All case studies</a></p>",
    "related": "<a href=\"/devops\">DevOps Services</a> · <a href=\"/cicd-automation\">CI/CD Automation</a> · <a href=\"/kubernetes\">Kubernetes</a> · <a href=\"/case-studies\">All case studies</a>"
  },
  {
    "slug": "finops-and-reliability-engineering-for-a-consumer-streaming-app",
    "title": "FinOps and Reliability Engineering for a Consumer Streaming App",
    "seoTitle": "FinOps and Reliability Engineering for a Consumer Streaming App",
    "seoDescription": "FinOps and reliability engineering for a consumer streaming startup: 44% lower monthly cloud spend and 99.99% uptime through peak live events.",
    "atGlance": [
      {
        "k": "Client",
        "v": "A venture-backed streaming startup with spiky viewership"
      },
      {
        "k": "Industry",
        "v": "Media / Consumer streaming"
      },
      {
        "k": "Services",
        "v": "<a href=\"/cloud-infrastructure\">Cloud Infrastructure</a>, <a href=\"/kubernetes\">Kubernetes</a>, <a href=\"/infrastructure-monitoring\">Infrastructure Monitoring</a>, <a href=\"/devops\">DevOps Services</a>"
      },
      {
        "k": "Engagement length / team size",
        "v": "6 months · 4 Sentrize engineers (1 lead SRE, 2 platform engineers, 1 cloud cost specialist)"
      },
      {
        "k": "Stack",
        "v": "Kubernetes on AWS, Terraform, Docker, Node.js, Redis, PostgreSQL, Prometheus, Grafana"
      }
    ],
    "challenge": "<p>Streaming audiences do not arrive smoothly. The client's viewership was defined by spikes — evening peaks, weekend surges, and event-driven moments when concurrent viewers multiplied within minutes. Their infrastructure answered that shape in the most expensive way possible: static fleets provisioned for the largest spike anyone could remember, plus a margin.</p><p>Even with that margin, reliability was poor exactly when it mattered. Surges were producing roughly five incidents a week — saturated services, cascading timeouts, and manual scale-ups performed by whoever was on call at 2am. The team was simultaneously overpaying for idle capacity on quiet days and getting paged on busy ones, and the two problems fed each other: every incident ended with someone provisioning more standing headroom \"to be safe,\" which raised the bill without fixing the failure mode.</p><p>Finance saw cloud spend growing faster than the audience. Engineering saw an on-call rotation burning people out. The board saw both. The brief to Sentrize was blunt: cut the bill and stop the incidents — and do not trade one for the other.</p>",
    "solution": "<p>We instrumented cost and performance telemetry, moved stateless workloads to Kubernetes with demand-driven autoscaling and Spot pools, added multi-tier caching, and codified capacity policies in Terraform.</p><p><strong>Measure before moving.</strong> The first month was pure instrumentation: Prometheus and Grafana for performance, plus cost-allocation tagging that attributed spend to services and features. For the first time, the client could see cost per stream and which services actually drove the peaks. Several assumptions did not survive contact with the data — the most expensive fleet was not the one causing incidents.</p><p><strong>Autoscale to demand, not to fear.</strong> Stateless workloads moved onto Kubernetes with autoscaling driven by real demand signals — request rates and queue depth, not just CPU. Interruption-tolerant workloads run on Spot instance pools with graceful drain handling, cutting the compute price of elastic capacity while on-demand capacity floors protect the critical path. Scaling policies were load-tested against replayed traffic from the client's largest historical events, then beyond them.</p><p><strong>Serve most requests before they reach origin.</strong> A multi-tier caching layer — CDN at the edge, Redis for hot metadata and session state, and application-level caching on rendered responses — collapsed origin load during spikes. The catalogue and playback-start paths, previously the first to fall over, became overwhelmingly cache-served.</p><p><strong>Capacity as code.</strong> Autoscaling bounds, Spot/on-demand ratios, cache sizing, and pre-scaling for scheduled events are codified in Terraform. Capacity decisions became reviewable pull requests instead of 2am judgement calls, and every incident's remediation landed as a permanent policy change rather than a one-off adjustment.</p><p>Alongside the platform work, we defined SLOs with the client's team and rebuilt alerting around them, so pages fire on user-facing symptoms rather than machine-level noise.</p>",
    "metrics": [
      {
        "value": "−44%",
        "label": "Monthly cloud spend"
      },
      {
        "value": "5/wk→<1/mo",
        "label": "Surge incidents"
      },
      {
        "value": "99.99%",
        "label": "Peak-event uptime"
      }
    ],
    "results": "<p>Monthly cloud spend fell 44%, with the savings coming from elasticity rather than austerity: idle standing capacity was eliminated, Spot pools cut the price of surge compute, and caching reduced how much origin capacity a spike requires at all. Surge incidents dropped from five per week to fewer than one per month, and the platform has held 99.99% uptime through its peak events since the new architecture went live — including an event that exceeded the previous all-time concurrency record.</p><p>Secondary outcomes followed the same curve: out-of-hours pages fell to a fraction of their previous rate, and scheduled events are now pre-scaled automatically from Terraform-defined policies instead of manual capacity meetings.</p>",
    "quote": "<blockquote><p>\"We halved the bill and stopped getting paged at 2am — I didn't think we could have both.\"</p></blockquote><blockquote><p>— <strong>Reuben Castellanos</strong>, Head of Platform</p></blockquote><p>---</p><p><strong>Related:</strong> <a href=\"/cloud-infrastructure\">Cloud Infrastructure</a> · <a href=\"/kubernetes\">Kubernetes</a> · <a href=\"/infrastructure-monitoring\">Infrastructure Monitoring</a> · <a href=\"/case-studies\">All case studies</a></p>",
    "related": "<a href=\"/cloud-infrastructure\">Cloud Infrastructure</a> · <a href=\"/kubernetes\">Kubernetes</a> · <a href=\"/infrastructure-monitoring\">Infrastructure Monitoring</a> · <a href=\"/case-studies\">All case studies</a>"
  },
  {
    "slug": "lift-re-platform-and-optimize-for-a-healthcare-data-provider",
    "title": "Lift, Re-Platform, and Optimize for a Healthcare Data Provider",
    "seoTitle": "Lift, Re-Platform, and Optimize for a Healthcare Data Provider",
    "seoDescription": "A phased, zero-downtime AWS migration for a HIPAA-regulated healthcare analytics provider — 38% lower infrastructure cost and a clean SOC 2 Type II.",
    "atGlance": [
      {
        "k": "Client",
        "v": "A mid-market healthcare analytics company under HIPAA and SOC 2"
      },
      {
        "k": "Industry",
        "v": "Healthcare / Health data analytics"
      },
      {
        "k": "Services",
        "v": "<a href=\"/cloud-migration\">Cloud Migration</a>, <a href=\"/aws-consulting\">AWS Consulting</a>, <a href=\"/security-compliance\">Security &amp; Compliance</a>, <a href=\"/infrastructure-as-code\">Infrastructure as Code</a>"
      },
      {
        "k": "Engagement length / team size",
        "v": "11 months · 5 Sentrize engineers (1 lead, 2 cloud engineers, 1 security engineer, 1 SRE)"
      },
      {
        "k": "Stack",
        "v": "AWS, Terraform, Docker, Kubernetes, PostgreSQL, Redis, Prometheus, Grafana"
      }
    ],
    "challenge": "<p>The client's analytics platform processed protected health information for hospital systems and payers from a managed data centre whose contract, hardware, and operating assumptions were all reaching end of life. Renewal meant re-investing in an environment the team no longer wanted; migration meant moving a HIPAA-regulated workload that customers query around the clock.</p><p>Three constraints framed the engagement. First, downtime was effectively off the table — clinical and payer customers rely on the platform continuously, and contractual SLAs left no room for a \"migration weekend.\" Second, compliance posture had to improve, not merely survive the move: a SOC 2 Type II audit was scheduled, and the existing environment's controls were maintained by hand and evidenced by screenshots. Third, cost needed to come down. The data-centre footprint was sized for a peak that occurred a few days per month, and finance was carrying that peak every day.</p><p>Previous internal attempts had stalled at the planning stage because every big-bang cutover design concentrated too much risk in a single event. The client engaged Sentrize to find a path that spread that risk instead.</p>",
    "solution": "<p>We ran a phased strangler-pattern migration to AWS, shifting traffic per service behind a routing layer with per-service rollback. All infrastructure was Terraform-defined with encryption by default and audit logging mapped to SOC 2 controls.</p><p>The engagement began with a four-week discovery: a full inventory of services, data flows, and PHI touchpoints, producing a dependency graph that dictated migration order. Stateless services moved first, then read paths, then systems of record — each behind a routing layer that could shift traffic to AWS in percentages and shift it back in seconds if error rates or latency regressed. Every service had its own rollback plan; no cutover depended on another succeeding on the same day.</p><p>Rather than lift the old environment's habits along with its workloads, we rebuilt the foundations as code. Every environment — network topology, IAM, compute, data stores — is defined in Terraform, with encryption at rest and in transit as the default and no path to provision an unencrypted resource. Containerized services run on Kubernetes; PostgreSQL and Redis moved to managed equivalents with automated backup and tested restore procedures.</p><p>Compliance was engineered in parallel, not appended afterwards. Audit logging, access review, and change management were mapped to SOC 2 criteria from the start, so control evidence is generated by the platform itself rather than assembled manually before an audit. Sentrize's own ISO 27001 and SOC 2 Type II certified practices, and HIPAA-ready engineering controls, set the baseline for how PHI was handled throughout the engagement.</p><p>The final phase was optimization: right-sizing instances against observed load, autoscaling the analytics tier to its actual demand curve, and moving predictable baseline capacity onto committed pricing.</p>",
    "metrics": [
      {
        "value": "9 months",
        "label": "Zero-downtime migration"
      },
      {
        "value": "−38%",
        "label": "Infrastructure cost"
      },
      {
        "value": "0 findings",
        "label": "SOC 2 Type II"
      }
    ],
    "results": "<p>The migration completed in 9 months with zero downtime — traffic shifted service by service, and no customer-facing outage or maintenance window was ever required. Several cutovers happened during business hours, deliberately, because the routing layer made them non-events.</p><p>Infrastructure cost fell 38% against the data-centre baseline, driven by autoscaling to real demand instead of provisioned peak, right-sizing, and committed-use pricing on the steady-state floor. The scheduled SOC 2 Type II audit completed with 0 findings, with the auditors working largely from evidence the platform generates automatically. As secondary outcomes, disaster-recovery restore was reduced from an untested runbook to a rehearsed procedure measured in hours, and new environments — previously a hardware ticket — are now provisioned from Terraform in under a day.</p>",
    "quote": "<blockquote><p>\"They moved our entire platform under us and our customers never felt a thing.\"</p></blockquote><blockquote><p>— <strong>Marcus Lindqvist</strong>, VP of Infrastructure</p></blockquote><p>---</p><p><strong>Related:</strong> <a href=\"/cloud-migration\">Cloud Migration</a> · <a href=\"/aws-consulting\">AWS Consulting</a> · <a href=\"/security-compliance\">Security &amp; Compliance</a> · <a href=\"/case-studies\">All case studies</a></p>",
    "related": "<a href=\"/cloud-migration\">Cloud Migration</a> · <a href=\"/aws-consulting\">AWS Consulting</a> · <a href=\"/security-compliance\">Security &amp; Compliance</a> · <a href=\"/case-studies\">All case studies</a>"
  },
  {
    "slug": "multi-tenant-re-platform-for-a-b2b-collaboration-product",
    "title": "Multi-Tenant Re-Platform for a B2B Collaboration Product",
    "seoTitle": "Multi-Tenant Re-Platform for a B2B Collaboration Product",
    "seoDescription": "How Sentrize re-platformed a single-tenant B2B collaboration pilot into multi-tenant SaaS: 10-minute provisioning, 40k paid seats, 3/3 security reviews.",
    "atGlance": [
      {
        "k": "Client",
        "v": "An early-growth B2B SaaS whose single-tenant pilot landed three enterprise accounts"
      },
      {
        "k": "Industry",
        "v": "B2B SaaS / Collaboration"
      },
      {
        "k": "Services",
        "v": "<a href=\"/saas-development\">SaaS Development</a>, <a href=\"/web-applications\">Web Applications</a>, <a href=\"/security-compliance\">Security &amp; Compliance</a>"
      },
      {
        "k": "Engagement length / team size",
        "v": "10 months · 6 Sentrize engineers (1 architect, 2 backend, 2 frontend, 1 platform engineer)"
      },
      {
        "k": "Stack",
        "v": "TypeScript, Node.js, React, Next.js, PostgreSQL, Redis, AWS, Docker, Terraform, GitHub Actions"
      }
    ],
    "challenge": "<p>The client had a good problem wrapped around a hard one. Their collaboration product had been piloted as a single-tenant deployment — one stack per customer — which was exactly right for validating the product and exactly wrong for scaling it. Then the pilot landed three enterprise accounts, and the wrapping came off.</p><p>Provisioning a new customer took two weeks of engineer time: standing up infrastructure, seeding configuration, wiring integrations, and smoke-testing by hand. Every tenant was a slightly different snowflake, so upgrades had to be applied N times and verified N times. Costs scaled linearly with customer count regardless of usage. And the three enterprise accounts each came with a vendor security review that asked pointed questions about tenant isolation, encryption, and access controls that a hand-built pilot could not answer well.</p><p>The founders were clear-eyed about the risk: the platform, not the product, was becoming the reason deals slowed down. They engaged Sentrize to re-platform for multi-tenancy without pausing sales or breaking the pilot customers already in production.</p>",
    "solution": "<p>We re-architected the product as a true multi-tenant platform with row-level isolation, per-tenant encryption keys, and a self-service provisioning service, rebuilding the frontend in Next.js and adding tenant-scoped metering for billing.</p><p><strong>Isolation as a database guarantee, not a code convention.</strong> Tenancy moved into PostgreSQL row-level security policies, so every query is scoped to a tenant by the database itself — an application bug cannot widen a query across tenants. Each tenant's data is encrypted with its own key, giving enterprise customers a concrete answer to the isolation question and making single-tenant offboarding (key destruction) verifiable.</p><p><strong>Provisioning as a product feature.</strong> The two-week manual runbook became a provisioning service: creating a tenant configures isolation policies, encryption keys, default roles, and integration scaffolding automatically, on shared infrastructure defined in Terraform. What had required an engineer became a ten-minute automated workflow that sales could trigger from a form.</p><p><strong>A frontend rebuilt for the platform it now runs on.</strong> The UI was rebuilt in Next.js and React with tenant-aware theming and role-based navigation, replacing the pilot's per-customer forks with one codebase deployed continuously through GitHub Actions.</p><p><strong>Metering built for enterprise billing.</strong> Tenant-scoped metering records seat and usage data at the platform layer, so finance invoices from measured data and enterprise contracts with committed seat tiers could be priced with confidence.</p><p>Existing pilot customers were migrated tenant by tenant onto the shared platform, with a comparison window verifying parity before each snowflake stack was decommissioned.</p>",
    "metrics": [
      {
        "value": "2 wks→10 min",
        "label": "Tenant provisioning"
      },
      {
        "value": "6→40k",
        "label": "Paid seats in 14 mo"
      },
      {
        "value": "3/3",
        "label": "Security reviews passed"
      }
    ],
    "results": "<p>Tenant provisioning went from two weeks of engineering effort to a ten-minute self-service workflow, which changed what the sales team could promise: proof-of-concept tenants are now spun up during the sales cycle rather than after contract signature.</p><p>The platform scaled from 6 to 40k paid seats in 14 months — growth the single-tenant architecture could not have carried — while infrastructure cost per seat fell steadily as tenants consolidated onto shared, autoscaled capacity. All three enterprise security reviews were passed, 3/3, with row-level isolation, per-tenant keys, and audit logging providing direct answers to the questions that had previously stalled deals. As a secondary outcome, upgrades now ship once to all tenants through a single pipeline, ending the era of N-times deployment and version drift across customers.</p>",
    "quote": "<blockquote><p>\"The platform stopped being the bottleneck to enterprise deals — it became the reason we won them.\"</p></blockquote><blockquote><p>— <strong>Sophie Aldridge</strong>, Co-Founder &amp; CEO</p></blockquote><p>---</p><p><strong>Related:</strong> <a href=\"/saas-development\">SaaS Development</a> · <a href=\"/web-applications\">Web Applications</a> · <a href=\"/security-compliance\">Security &amp; Compliance</a> · <a href=\"/case-studies\">All case studies</a></p>",
    "related": "<a href=\"/saas-development\">SaaS Development</a> · <a href=\"/web-applications\">Web Applications</a> · <a href=\"/security-compliance\">Security &amp; Compliance</a> · <a href=\"/case-studies\">All case studies</a>"
  },
  {
    "slug": "re-architecting-a-payments-core-for-linear-scale",
    "title": "Re-Architecting a Payments Core for Linear Scale",
    "seoTitle": "Re-Architecting a Payments Core for Linear Scale",
    "seoDescription": "How Sentrize re-architected a Series C fintech's ledger into an event-sourced core: 900→12k TPS, p99 latency down to 64ms, zero reconciliation drift.",
    "atGlance": [
      {
        "k": "Client",
        "v": "A Series C fintech offering embedded payments and reconciliation"
      },
      {
        "k": "Industry",
        "v": "Fintech / Payments"
      },
      {
        "k": "Services",
        "v": "<a href=\"/software-development\">Software Development</a>, <a href=\"/api-development\">API Development</a>, <a href=\"/cloud-infrastructure\">Cloud Infrastructure</a>"
      },
      {
        "k": "Engagement length / team size",
        "v": "9 months · 5 Sentrize engineers (1 architect, 3 backend engineers, 1 SRE)"
      },
      {
        "k": "Stack",
        "v": "Node.js, TypeScript, PostgreSQL, Redis, Kubernetes on AWS, Docker, Terraform, GitHub Actions, Prometheus, Grafana"
      }
    ],
    "challenge": "<p>The client's ledger had been built quickly and correctly enough for their first hundred merchants: a relational schema guarded by pessimistic row locks, so that no two operations could touch a merchant's balance at the same time. It was safe, and it was slow. Under load, lock contention capped sustained throughput at roughly 900 transactions per second, and p99 latency stretched to 840ms as requests queued behind each other.</p><p>The commercial consequence was concrete: enterprise merchants sign contracts with volume commitments, and every deal had to carry a capacity caveat. Worse, the nightly reconciliation job — comparing internal ledger state against acquirer settlement files — regularly surfaced small discrepancies that took analyst time to chase down. Each drift incident was individually minor; collectively they were a standing question mark over the ledger in every enterprise due-diligence conversation.</p><p>Scaling the existing design vertically had been tried twice. The client asked Sentrize for an architecture whose throughput would scale linearly with hardware, without weakening the correctness guarantees a ledger exists to provide.</p>",
    "solution": "<p>We decomposed the ledger into an event-sourced core on an append-only PostgreSQL event store partitioned by merchant, with idempotent command APIs and Redis projections, replacing pessimistic locks with optimistic concurrency.</p><p>In practice that meant four architectural moves:</p><p><strong>An append-only event store as the source of truth.</strong> Every state change became an immutable event written to PostgreSQL, partitioned by merchant so that hot merchants scale independently and no single partition becomes a global bottleneck. Balances and statements are derived views, always reproducible by replaying the log — which is also what makes audit a query rather than an investigation.</p><p><strong>Optimistic concurrency instead of locks.</strong> Commands carry the version of the stream they expect to append to; a conflict is detected at commit and retried, rather than prevented by holding locks. Contention became the rare case that costs a retry, not the normal case that serializes all writes.</p><p><strong>Idempotent command APIs.</strong> Every command carries a client-supplied idempotency key, so retries — from merchants, from internal services, from network failures — can never double-apply a transaction. This removed an entire class of reconciliation discrepancies at the source.</p><p><strong>Redis projections for reads.</strong> Balance lookups and dashboard queries moved to Redis-backed projections updated from the event stream, taking read traffic off the write path entirely.</p><p>Migration was as important as architecture. We ran the new core in shadow mode for six weeks, replaying production traffic against it and diffing results against the legacy ledger before any merchant was cut over. Merchants then migrated in cohorts, with per-cohort rollback available at every stage. The platform runs on Kubernetes on AWS, fully Terraform-defined, with Prometheus and Grafana dashboards tracking throughput, latency, and projection lag as first-class SLOs.</p>",
    "metrics": [
      {
        "value": "900→12k TPS",
        "label": "Sustained throughput"
      },
      {
        "value": "840ms→64ms",
        "label": "p99 latency"
      },
      {
        "value": "0",
        "label": "Reconciliation drift"
      }
    ],
    "results": "<p>Sustained throughput rose from 900 to 12k TPS on the same order of hardware spend, and load tests validated near-linear scaling well beyond current peak by adding partitions and workers. p99 latency fell from 840ms to 64ms, with the write path no longer serialized behind lock acquisition.</p><p>Most importantly for the business: reconciliation drift went to zero. Since cutover, the ledger and acquirer settlement files have matched exactly, with idempotent commands and deterministic replay eliminating the discrepancy classes that used to consume analyst time. As secondary effects, month-end close no longer requires a manual reconciliation review, and the event log has shortened enterprise due-diligence security and audit reviews because every balance is provably derivable from its history.</p>",
    "quote": "<blockquote><p>\"For the first time we can sign an enterprise merchant without a capacity caveat in the contract.\"</p></blockquote><blockquote><p>— <strong>Priya Venkatesan</strong>, CTO</p></blockquote><p>---</p><p><strong>Related:</strong> <a href=\"/software-development\">Software Development</a> · <a href=\"/api-development\">API Development</a> · <a href=\"/cloud-infrastructure\">Cloud Infrastructure</a> · <a href=\"/case-studies\">All case studies</a></p>",
    "related": "<a href=\"/software-development\">Software Development</a> · <a href=\"/api-development\">API Development</a> · <a href=\"/cloud-infrastructure\">Cloud Infrastructure</a> · <a href=\"/case-studies\">All case studies</a>"
  },
  {
    "slug": "retrieval-grounded-ai-automation-for-an-enterprise-support-operation",
    "title": "Retrieval-Grounded AI Automation for an Enterprise Support Operation",
    "seoTitle": "Retrieval-Grounded AI Automation for an Enterprise Support Operation",
    "seoDescription": "A retrieval-grounded support agent for an enterprise software company: 61% of 30,000+ monthly tickets auto-resolved, first response in under 2 minutes.",
    "atGlance": [
      {
        "k": "Client",
        "v": "An enterprise B2B software company fielding 30,000+ monthly tickets"
      },
      {
        "k": "Industry",
        "v": "Enterprise software / Customer support operations"
      },
      {
        "k": "Services",
        "v": "<a href=\"/ai-automation\">AI &amp; Automation</a>, <a href=\"/api-development\">API Development</a>, <a href=\"/software-development\">Software Development</a>"
      },
      {
        "k": "Engagement length / team size",
        "v": "7 months · 5 Sentrize engineers (1 lead, 2 AI/retrieval engineers, 1 backend engineer, 1 platform engineer)"
      },
      {
        "k": "Stack",
        "v": "TypeScript, Node.js, React, PostgreSQL, Redis, AWS, Docker, GitHub Actions, Grafana"
      }
    ],
    "challenge": "<p>The client's support operation was losing a volume race. More than 30,000 tickets arrived every month across a large enterprise product surface, and the queue's arithmetic was unforgiving: first response averaged 14 hours, hiring could not keep pace with ticket growth, and the most experienced agents spent their days on the most repetitive questions — password policies, configuration steps, licence entitlements — rather than the genuinely hard cases.</p><p>Leadership had evaluated off-the-shelf AI deflection tools and rejected them for a reason that matters in enterprise support: they could not tolerate a system that invents answers. A wrong-but-confident response about a security setting or a billing entitlement is worse than a slow human one. Any automation would have to be verifiably grounded in the client's actual documentation, know when it did not know, and hand off cleanly to humans — with evidence, not vibes, that it met that bar before customers ever saw it.</p>",
    "solution": "<p>We built a retrieval-grounded agent over the client's documentation with strict citations and confidence-gated escalation, integrated through a typed tool layer for scoped account actions, and validated it in shadow mode against 20,000 historical tickets before it answered a single live customer.</p><p><strong>Grounded answers or no answer.</strong> Every response is composed from passages retrieved from the client's documentation, release notes, and internal knowledge base, and every claim carries a citation back to its source. If retrieval cannot support an answer with sufficient confidence, the agent does not improvise — it escalates. Hallucination is treated as a defect class with a budget of zero, enforced by evaluation rather than hoped for.</p><p><strong>Confidence-gated escalation.</strong> Escalation thresholds are tuned per ticket category: the agent resolves routine configuration and how-to tickets autonomously, while anything touching security, billing disputes, or ambiguous intent routes to a human — accompanied by the agent's retrieval results and a structured summary, so the human starts warm instead of cold.</p><p><strong>A typed tool layer for actions.</strong> Where resolving a ticket requires doing something — checking an entitlement, resending an invitation, resetting an integration — the agent acts through a typed API layer with strictly scoped, least-privilege permissions and full audit logging. The agent cannot perform any action outside its declared tool contracts, which made the security review a review of a finite list rather than an open question.</p><p><strong>Shadow mode before production.</strong> For eight weeks the system ran in shadow, answering 20,000 historical and live-mirrored tickets invisibly while its responses were scored against what human agents actually did. Category-level accuracy from shadow mode determined the rollout order; nothing was automated on trust. Dashboards in Grafana track resolution quality, escalation rates, and citation coverage continuously in production.</p>",
    "metrics": [
      {
        "value": "61%",
        "label": "Tickets auto-resolved"
      },
      {
        "value": "14h→<2min",
        "label": "First response"
      },
      {
        "value": "−52%",
        "label": "Cost per ticket"
      }
    ],
    "results": "<p>The agent now auto-resolves 61% of ticket volume end to end — the routine majority that previously consumed most of the team's capacity. First response fell from 14 hours to under 2 minutes for every ticket, because even escalated cases receive an immediate grounded acknowledgement and reach a human with context attached. Cost per ticket dropped 52%, letting the support organization absorb continued ticket growth without headcount growth.</p><p>Two secondary outcomes stand out. Blind quality reviews score auto-resolved tickets at parity with the human baseline — the escalation gate means the agent simply declines the cases it would get wrong. And the human team's work has shifted up-stack: senior agents now spend their time on complex product issues and on curating the documentation the agent retrieves from, which improves both channels at once.</p>",
    "quote": "<blockquote><p>\"It handles the volume we could never hire for, and it does it without making things up.\"</p></blockquote><blockquote><p>— <strong>Hannah Brückner</strong>, Director of Customer Operations</p></blockquote><p>---</p><p><strong>Related:</strong> <a href=\"/ai-automation\">AI &amp; Automation</a> · <a href=\"/api-development\">API Development</a> · <a href=\"/software-development\">Software Development</a> · <a href=\"/case-studies\">All case studies</a></p>",
    "related": "<a href=\"/ai-automation\">AI &amp; Automation</a> · <a href=\"/api-development\">API Development</a> · <a href=\"/software-development\">Software Development</a> · <a href=\"/case-studies\">All case studies</a>"
  }
];
