# Case Study: FinOps and Reliability Engineering for a Consumer Streaming App
- **Route:** /case-studies/finops-and-reliability-engineering-for-a-consumer-streaming-app
- **Status:** NEW CONTENT — the old site had no case-study detail pages; written for the new template.
- **SEO Title:** FinOps and Reliability Engineering for a Consumer Streaming App
- **SEO Description:** FinOps and reliability engineering for a consumer streaming startup: 44% lower monthly cloud spend and 99.99% uptime through peak live events.

## At a glance
- **Client:** A venture-backed streaming startup with spiky viewership
- **Industry:** Media / Consumer streaming
- **Services:** [Cloud Infrastructure](/cloud-infrastructure), [Kubernetes](/kubernetes), [Infrastructure Monitoring](/infrastructure-monitoring), [DevOps Services](/devops)
- **Engagement length / team size:** 6 months · 4 Sentrize engineers (1 lead SRE, 2 platform engineers, 1 cloud cost specialist)
- **Stack:** Kubernetes on AWS, Terraform, Docker, Node.js, Redis, PostgreSQL, Prometheus, Grafana

## The challenge

Streaming audiences do not arrive smoothly. The client's viewership was defined by spikes — evening peaks, weekend surges, and event-driven moments when concurrent viewers multiplied within minutes. Their infrastructure answered that shape in the most expensive way possible: static fleets provisioned for the largest spike anyone could remember, plus a margin.

Even with that margin, reliability was poor exactly when it mattered. Surges were producing roughly five incidents a week — saturated services, cascading timeouts, and manual scale-ups performed by whoever was on call at 2am. The team was simultaneously overpaying for idle capacity on quiet days and getting paged on busy ones, and the two problems fed each other: every incident ended with someone provisioning more standing headroom "to be safe," which raised the bill without fixing the failure mode.

Finance saw cloud spend growing faster than the audience. Engineering saw an on-call rotation burning people out. The board saw both. The brief to Sentrize was blunt: cut the bill and stop the incidents — and do not trade one for the other.

## The solution

We instrumented cost and performance telemetry, moved stateless workloads to Kubernetes with demand-driven autoscaling and Spot pools, added multi-tier caching, and codified capacity policies in Terraform.

**Measure before moving.** The first month was pure instrumentation: Prometheus and Grafana for performance, plus cost-allocation tagging that attributed spend to services and features. For the first time, the client could see cost per stream and which services actually drove the peaks. Several assumptions did not survive contact with the data — the most expensive fleet was not the one causing incidents.

**Autoscale to demand, not to fear.** Stateless workloads moved onto Kubernetes with autoscaling driven by real demand signals — request rates and queue depth, not just CPU. Interruption-tolerant workloads run on Spot instance pools with graceful drain handling, cutting the compute price of elastic capacity while on-demand capacity floors protect the critical path. Scaling policies were load-tested against replayed traffic from the client's largest historical events, then beyond them.

**Serve most requests before they reach origin.** A multi-tier caching layer — CDN at the edge, Redis for hot metadata and session state, and application-level caching on rendered responses — collapsed origin load during spikes. The catalogue and playback-start paths, previously the first to fall over, became overwhelmingly cache-served.

**Capacity as code.** Autoscaling bounds, Spot/on-demand ratios, cache sizing, and pre-scaling for scheduled events are codified in Terraform. Capacity decisions became reviewable pull requests instead of 2am judgement calls, and every incident's remediation landed as a permanent policy change rather than a one-off adjustment.

Alongside the platform work, we defined SLOs with the client's team and rebuilt alerting around them, so pages fire on user-facing symptoms rather than machine-level noise.

## The results

- **−44%** — Monthly cloud spend
- **5/wk→<1/mo** — Surge incidents
- **99.99%** — Peak-event uptime

Monthly cloud spend fell 44%, with the savings coming from elasticity rather than austerity: idle standing capacity was eliminated, Spot pools cut the price of surge compute, and caching reduced how much origin capacity a spike requires at all. Surge incidents dropped from five per week to fewer than one per month, and the platform has held 99.99% uptime through its peak events since the new architecture went live — including an event that exceeded the previous all-time concurrency record.

Secondary outcomes followed the same curve: out-of-hours pages fell to a fraction of their previous rate, and scheduled events are now pre-scaled automatically from Terraform-defined policies instead of manual capacity meetings.

## Client quote

> "We halved the bill and stopped getting paged at 2am — I didn't think we could have both."
> — **Reuben Castellanos**, Head of Platform

---

**Related:** [Cloud Infrastructure](/cloud-infrastructure) · [Kubernetes](/kubernetes) · [Infrastructure Monitoring](/infrastructure-monitoring) · [All case studies](/case-studies)
