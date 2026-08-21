# Article: Observability That Earns Its Keep: Metrics, Traces, and Logs Without the Noise
- **Route:** /blog/observability-that-earns-its-keep
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** DevOps
- **Date / Author / Read time:** Feb 2026 · Elena Vasquez · 9 min read
- **SEO Title:** Observability That Earns Its Keep: Metrics, Traces, and Logs Without the Noise
- **SEO Description:** How to wire a signal-first observability stack around SLOs and error budgets — fewer dashboards, fewer alerts, faster answers during incidents.

Dashboards nobody reads and alerts everyone mutes are worse than nothing — they cost money, they train on-call engineers to ignore pages, and they create the illusion of coverage right up until an incident proves otherwise. The fix isn't more telemetry. It's wiring the stack around one question: **is the service doing its job for users right now, and if not, where is it failing?** Here's how we build a signal-first setup around SLOs and error budgets on the platforms we operate.

## Start with SLOs, not with tools

Before choosing between Datadog, Grafana Cloud, or a self-hosted LGTM stack, write down what the service promises. An SLO is a user-facing commitment stated as a target over a window: *99.9% of checkout requests complete successfully in under 400ms, measured over 30 days.*

Two or three SLOs per service is enough — availability and latency cover most, with a freshness or correctness SLO for pipelines. Everything else in the stack exists to answer whether those numbers hold and why they don't. This is also what makes observability legible to the business: our own 99.99% uptime SLA is, internally, a set of SLOs with error budgets and burn-rate alerting behind it, and the same evidence trail satisfies availability commitments in a SOC 2 audit.

The error budget is the operational payoff. A 99.9% SLO grants ~43 minutes of failure per month. Spent budget is a signal both directions: burning fast means slow down and stabilize; barely touched means you can afford bolder releases. That converts the reliability-versus-velocity argument from opinion into arithmetic.

## Alert on symptoms, page on burn rate

The single highest-leverage change for most teams: delete threshold alerts on causes (CPU > 80%, disk > 70%, pod restarted) and page only on symptoms — the SLO burning.

We implement multi-window, multi-burn-rate alerting, the pattern documented in Google's SRE workbook:

- **Page** when the burn rate is high over both a short and a long window (e.g., 14x budget burn over 5 minutes *and* over 1 hour) — fast, real, needs a human now.
- **Ticket** on slow burn (e.g., 2x over 6 hours) — real but not a 3 a.m. problem.
- Everything that used to be an alert becomes a dashboard panel or a recording rule that provides context *during* an incident instead of noise before one.

On one platform we took over, this collapsed ~220 alert rules to under 30. Pages dropped by roughly 90%; time-to-acknowledge improved because a page once again meant something.

## Metrics, traces, logs — each with one job

The three signals earn their keep differently, and cost discipline lives in respecting that.

- **Metrics** answer *whether* and *how much*. RED (rate, errors, duration) per service, USE (utilization, saturation, errors) per resource, all as SLI recording rules in Prometheus/Mimir. The cost killer is label cardinality — a `user_id` label on a request counter can 100x your bill. We lint for unbounded labels in CI.
- **Traces** answer *where*. Instrument once with OpenTelemetry — vendor-neutral, so the backend stays swappable — and propagate context at every boundary, including queues. Head-sample aggressively (1–10%) but use tail-based sampling to keep 100% of errors and slow requests, which are the only traces anyone reads.
- **Logs** answer *why*. Structured JSON only, with `trace_id` stamped into every line so a trace pivots to its exact logs in one click. Tier retention: hot search for 14–30 days, then object storage for the year-plus horizon that audit trails and forensics require — at S3 prices, not index prices.

The connective tissue matters more than any single signal: dashboard panel → exemplar trace → correlated logs, without changing tools or re-typing a request ID. That pivot is the difference between a five-minute diagnosis and an hour of grep.

## Dashboards: fewer, and opinionated

Every service gets exactly one primary dashboard, generated from a template: SLO status and remaining budget on top, RED metrics below, saturation and dependencies at the bottom. Deep-dive dashboards exist, but they're linked from the primary, not sprawled across a folder of 80 orphans. If a dashboard hasn't been opened in 90 days, we delete it — the query history settles the argument.

## Make cost a first-class signal

Observability bills fail silently. We track telemetry spend per service alongside the SLOs it supports, and review both in the same monthly ops meeting. Typical findings: debug logs shipped to production indexes, metrics nobody queries, and 100% trace sampling on a service that needed 5%. It's routine to cut the telemetry bill 30–50% while *improving* incident response, because the signal that remains is the signal people use.

## Where to go from here

Pick your most critical user journey, write its two SLOs, and build burn-rate paging for just that service. The pattern proves itself in the first incident, and then it scales by template rather than heroics. If you'd rather start from a working reference implementation, this stack — OpenTelemetry, Prometheus, SLO tooling, tiered storage — is what our [infrastructure monitoring](/infrastructure-monitoring) practice deploys and operates. [Talk to engineering](/contact) about what signal-first would look like on your platform.
