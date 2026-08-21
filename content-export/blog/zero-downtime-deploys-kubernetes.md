# Article: Zero-Downtime Deploys on Kubernetes: Rolling, Blue-Green, and Canary in Practice
- **Route:** /blog/zero-downtime-deploys-kubernetes
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** DevOps
- **Date / Author / Read time:** Mar 2026 · Daniel Okafor · 8 min read
- **SEO Title:** Zero-Downtime Deploys on Kubernetes: Rolling, Blue-Green, and Canary in Practice
- **SEO Description:** How rolling updates, blue-green, and canary releases actually behave on Kubernetes, and how to pick the right strategy per workload.

Shipping during business hours should be a non-event. If your team schedules releases for Friday night, freezes deploys before demos, or holds its breath while pods cycle, the deployment mechanism — not the code — is the risk. The strategies below are the ones behind the 99.99% uptime SLA we commit to on the platforms we operate, and none of them is exotic. What matters is matching each one to the workload it actually fits.

## The prerequisites nobody skips twice

Every zero-downtime strategy fails without the same three foundations, so we fix these before arguing about rollout styles:

- **Graceful shutdown.** The app must handle SIGTERM: stop accepting new work, drain in-flight requests, then exit. We pair this with a `preStop` sleep of 5–10 seconds so the endpoint controller removes the pod from Service endpoints before the process stops.
- **Honest readiness probes.** A readiness probe that returns 200 before the connection pool is warm will route traffic into cold pods. Probe the things the request path depends on — not just "the process is up."
- **Backward-compatible releases.** Two versions run simultaneously during any rollout. Schema changes follow expand/contract: add the column in release N, migrate and switch reads in N+1, drop in N+2. This single discipline eliminates most "we can't roll back" incidents.

With those in place, the strategy choice is mostly about blast radius versus cost.

## Rolling updates: the default, and usually enough

Kubernetes' native `RollingUpdate` replaces pods incrementally. The two knobs that matter are `maxSurge` (extra pods allowed during rollout) and `maxUnavailable` (pods you tolerate losing). For latency-sensitive services we run `maxSurge: 25%, maxUnavailable: 0` — capacity never dips, at the cost of temporarily scheduling extra pods.

Add a `PodDisruptionBudget` so node drains and cluster upgrades respect the same availability floor as deploys. Without one, a routine node rotation can take out more replicas than your rollout ever would.

Rolling updates are the right answer for stateless services where a bad version is caught quickly by probes and the cost of a brief mixed-version window is low. Their weakness: rollback is another rolling update. If the new version is subtly broken — wrong config, degraded latency — you serve some percentage of bad traffic until you notice.

## Blue-green: instant cutover, instant rollback

Blue-green runs the new version (green) at full capacity alongside the old (blue), then flips traffic atomically — in the simplest form, by patching a Service selector; with an ALB or ingress controller, by swapping target groups.

What you buy:

- **One-command rollback.** Flip the selector back. Seconds, not minutes.
- **Full pre-production validation against production infrastructure.** Smoke tests hit green over the real database, real caches, real IAM, before a single user does.
- **A clean audit story.** For SOC 2-audited platforms, "traffic switched at 14:02 UTC after automated smoke suite passed" is a control you can evidence, not a narrative.

What it costs: double capacity during the window, and it does nothing for you if the failure mode only appears under real traffic. It also sharpens the schema question — both stacks share one database, so expand/contract is mandatory, not advisable.

We reserve blue-green for payment paths, auth services, and anything where the acceptable bad-traffic budget is effectively zero.

## Canary: let production data make the call

Canary releases send a small slice of real traffic — we typically start at 5% — to the new version and promote only if metrics hold. On our stacks this is Argo Rollouts driving traffic shifts through the ingress or service mesh, with analysis templates that query Prometheus between steps: error rate, p99 latency, and one or two business-level signals (checkout completion, job success rate).

The step that teams skip, and shouldn't, is automated analysis. A canary you promote by eyeballing Grafana is a rolling update with extra steps. Codify the thresholds: if p99 regresses more than 10% against the stable baseline over a 10-minute window, the rollout aborts and rolls back without a human in the loop.

Canary's trade-offs are real: you need enough traffic for 5% to be statistically meaningful, session affinity questions for stateful flows, and version-aware observability (every metric labeled by rollout revision). For a low-traffic internal admin service, that machinery is overhead. For the request path that earns the revenue, it's the cheapest insurance available.

## Picking per workload

The pattern we apply across client platforms:

- **Stateless internal services, workers, cron jobs** → rolling update with `maxUnavailable: 0` and a PDB. Done.
- **Revenue-critical, high-traffic APIs** → canary with automated metric analysis.
- **Auth, payments, anything with a zero-bad-traffic requirement** → blue-green with a smoke suite gating the flip.
- **Databases and stateful sets** → none of the above; these get their own maintenance procedures, and the app layer absorbs failover.

One SaaS platform we operate runs all three simultaneously across ~40 services. The strategy lives next to the service definition in Git, so it's reviewed, versioned, and consistent — not tribal knowledge in a deploy channel.

## Where to go from here

Start by making one service boring to deploy: graceful shutdown, honest probes, `maxUnavailable: 0`, a PDB, and expand/contract migrations. Then add canary analysis to the service whose failures cost the most. Zero-downtime is not a tool you install; it's a set of defaults you stop deviating from.

If you'd rather compress that timeline, this is the day job of our [DevOps practice](/devops) — or [talk to engineering](/contact) about how your current pipeline would need to change.
