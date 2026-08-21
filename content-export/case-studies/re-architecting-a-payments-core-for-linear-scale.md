# Case Study: Re-Architecting a Payments Core for Linear Scale
- **Route:** /case-studies/re-architecting-a-payments-core-for-linear-scale
- **Status:** NEW CONTENT — the old site had no case-study detail pages; written for the new template.
- **SEO Title:** Re-Architecting a Payments Core for Linear Scale
- **SEO Description:** How Sentrize re-architected a Series C fintech's ledger into an event-sourced core: 900→12k TPS, p99 latency down to 64ms, zero reconciliation drift.

## At a glance
- **Client:** A Series C fintech offering embedded payments and reconciliation
- **Industry:** Fintech / Payments
- **Services:** [Software Development](/software-development), [API Development](/api-development), [Cloud Infrastructure](/cloud-infrastructure)
- **Engagement length / team size:** 9 months · 5 Sentrize engineers (1 architect, 3 backend engineers, 1 SRE)
- **Stack:** Node.js, TypeScript, PostgreSQL, Redis, Kubernetes on AWS, Docker, Terraform, GitHub Actions, Prometheus, Grafana

## The challenge

The client's ledger had been built quickly and correctly enough for their first hundred merchants: a relational schema guarded by pessimistic row locks, so that no two operations could touch a merchant's balance at the same time. It was safe, and it was slow. Under load, lock contention capped sustained throughput at roughly 900 transactions per second, and p99 latency stretched to 840ms as requests queued behind each other.

The commercial consequence was concrete: enterprise merchants sign contracts with volume commitments, and every deal had to carry a capacity caveat. Worse, the nightly reconciliation job — comparing internal ledger state against acquirer settlement files — regularly surfaced small discrepancies that took analyst time to chase down. Each drift incident was individually minor; collectively they were a standing question mark over the ledger in every enterprise due-diligence conversation.

Scaling the existing design vertically had been tried twice. The client asked Sentrize for an architecture whose throughput would scale linearly with hardware, without weakening the correctness guarantees a ledger exists to provide.

## The solution

We decomposed the ledger into an event-sourced core on an append-only PostgreSQL event store partitioned by merchant, with idempotent command APIs and Redis projections, replacing pessimistic locks with optimistic concurrency.

In practice that meant four architectural moves:

**An append-only event store as the source of truth.** Every state change became an immutable event written to PostgreSQL, partitioned by merchant so that hot merchants scale independently and no single partition becomes a global bottleneck. Balances and statements are derived views, always reproducible by replaying the log — which is also what makes audit a query rather than an investigation.

**Optimistic concurrency instead of locks.** Commands carry the version of the stream they expect to append to; a conflict is detected at commit and retried, rather than prevented by holding locks. Contention became the rare case that costs a retry, not the normal case that serializes all writes.

**Idempotent command APIs.** Every command carries a client-supplied idempotency key, so retries — from merchants, from internal services, from network failures — can never double-apply a transaction. This removed an entire class of reconciliation discrepancies at the source.

**Redis projections for reads.** Balance lookups and dashboard queries moved to Redis-backed projections updated from the event stream, taking read traffic off the write path entirely.

Migration was as important as architecture. We ran the new core in shadow mode for six weeks, replaying production traffic against it and diffing results against the legacy ledger before any merchant was cut over. Merchants then migrated in cohorts, with per-cohort rollback available at every stage. The platform runs on Kubernetes on AWS, fully Terraform-defined, with Prometheus and Grafana dashboards tracking throughput, latency, and projection lag as first-class SLOs.

## The results

- **900→12k TPS** — Sustained throughput
- **840ms→64ms** — p99 latency
- **0** — Reconciliation drift

Sustained throughput rose from 900 to 12k TPS on the same order of hardware spend, and load tests validated near-linear scaling well beyond current peak by adding partitions and workers. p99 latency fell from 840ms to 64ms, with the write path no longer serialized behind lock acquisition.

Most importantly for the business: reconciliation drift went to zero. Since cutover, the ledger and acquirer settlement files have matched exactly, with idempotent commands and deterministic replay eliminating the discrepancy classes that used to consume analyst time. As secondary effects, month-end close no longer requires a manual reconciliation review, and the event log has shortened enterprise due-diligence security and audit reviews because every balance is provably derivable from its history.

## Client quote

> "For the first time we can sign an enterprise merchant without a capacity caveat in the contract."
> — **Priya Venkatesan**, CTO

---

**Related:** [Software Development](/software-development) · [API Development](/api-development) · [Cloud Infrastructure](/cloud-infrastructure) · [All case studies](/case-studies)
