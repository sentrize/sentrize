# Article: Kubernetes Resource Tuning: Requests, Limits, and the Cost of Getting Them Wrong
- **Route:** /blog/kubernetes-resource-tuning
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** DevOps
- **Date / Author / Read time:** May 2026 · Sofia Lindqvist · 9 min read
- **SEO Title:** Kubernetes Resource Tuning: Requests, Limits, and the Cost of Getting Them Wrong
- **SEO Description:** What requests and limits actually control, how to set them from real usage data, and the policies that prevent OOMKills and wasted nodes.

Over-provision and you burn money; under-provision and you trigger OOMKills at the worst moment. Setting requests and limits from real usage data — instead of copy-pasted YAML and superstition — is one of the highest-leverage tuning exercises on any cluster we take over. It's also widely misunderstood, because requests and limits do different jobs than most engineers assume, and CPU and memory behave nothing alike when you get them wrong.

## What requests and limits actually do

**Requests** are a scheduling promise. The scheduler places a pod on a node with that much unallocated capacity and reserves it on paper. Requests also set your cost floor: a cluster's size is driven by the *sum of requests*, not by actual usage. If your pods request 4x what they use, you're paying for a cluster 4x bigger than your workload — the utilization graphs can show 15% while the autoscaler insists you need more nodes.

**Limits** are a runtime ceiling, enforced differently per resource:

- **CPU is compressible.** Exceed the limit and the kernel throttles you via CFS quota. The pod doesn't die; it gets slower — often invisibly, as latency spikes that nobody connects to a limit set two years ago.
- **Memory is not.** Exceed the limit and the kernel OOM-kills the container. There is no "slower"; there is only restart.

That asymmetry drives our default policy, which matches what much of the community (and Kubernetes' own contributors) converged on:

- **Memory: limit = request.** Predictable, no overcommit surprises, and the pod lands in a well-defined QoS position. A memory limit above the request is a promise the node may not be able to keep, and the bill for that arrives as an OOMKill during your traffic peak.
- **CPU: set requests honestly, and usually set no limit.** Unused node CPU goes to waste otherwise; throttling a latency-sensitive service to protect idle capacity is self-harm. The exceptions we respect: multi-tenant clusters with untrusted or spiky neighbors, and workloads that must exhibit consistent performance for benchmarking or compliance reasons.

QoS classes fall out of these choices: requests = limits gives you `Guaranteed`, the last evicted under node pressure. For critical system components and stateful workloads we pay for `Guaranteed` deliberately.

## Setting values from real data

The method is unglamorous: measure, set to a percentile, re-measure.

1. **Collect 2–4 weeks of per-container usage** from Prometheus (`container_memory_working_set_bytes`, CPU usage rates), covering at least one traffic peak and, ideally, one deploy day.
2. **Set memory request (and limit) at the observed p99 working set plus 15–20% headroom.** Working set, not RSS, is what the OOM decision uses.
3. **Set CPU request at roughly p95 of usage** for latency-sensitive services — enough that the scheduler co-locates honestly — and lower, nearer p80, for batch workloads that can tolerate contention.
4. **Let tooling do the arithmetic.** VPA in recommendation mode (not auto mode on latency-critical services), or Goldilocks as a friendlier front-end, turns the metrics into per-workload suggestions. KRR does the same as a CLI against Prometheus. We treat these as draft PRs, not autopilot: an engineer reviews each change against the service's failure modes.
5. **Recheck quarterly and after major releases.** Resource profiles drift with features; the JVM service that needed 2Gi last year may need 3Gi after the new cache landed — or 1Gi after it moved to a queue.

Two special cases deserve their own paragraph. **JVM and Node.js runtimes size themselves off the container's view of memory** — set heap flags (`-XX:MaxRAMPercentage`, `--max-old-space-size`) coherently with the container limit or you'll OOM with a "healthy" heap. And **Java/CPU: a JVM that sees one throttled CPU makes bad GC-thread decisions**; give JIT-heavy services genuine CPU at startup or accept minutes of degraded warmup.

## The cost of getting it wrong, quantified

Both failure directions carry a bill:

- **Over-provisioning is a silent 30–60% cluster tax.** On one platform we audited, the cluster ran ~200 pods requesting a combined 340 CPU cores while using 60. Correcting requests and letting Karpenter consolidate cut node spend by 45% — with zero application changes. This is routinely the largest line item in the cloud-spend audits we run.
- **Under-provisioning bills you in incidents.** OOMKills cluster at the worst moments by construction: memory pressure peaks when traffic peaks. A restart storm during your busiest hour, retries amplifying load onto surviving pods, and a `CrashLoopBackOff` graph that looks exactly like an outage — because it is one. If you operate against an uptime SLA, as we do at 99.99%, a mis-sized memory limit is not a tuning detail; it's an availability risk with a blast radius.

## Guardrails so it stays fixed

Point-in-time tuning decays. What keeps it honest on the clusters we operate: `LimitRange` defaults per namespace so nothing ships without requests; `ResourceQuota` per team so requests stay negotiated rather than inflated defensively; an OPA/Kyverno policy rejecting workloads with no requests, memory limit ≠ request (exceptions documented), or ratios that scream copy-paste; and OOMKill events plus sustained CPU throttling (`container_cpu_cfs_throttled_periods_total`) alerting to the owning team — not to a central ops inbox where they go to die.

## Where to go from here

Run KRR or Goldilocks against your cluster this week and just *look* at the gap between requested and used — most teams find their answer to "why is the cluster so expensive" in that one report. Then fix the ten worst offenders and add the namespace guardrails so the sprawl doesn't return. Our [Kubernetes practice](/kubernetes) does this as part of every cluster takeover, usually alongside a broader [cloud cost review](/cloud-infrastructure) — [talk to engineering](/contact) if you'd like the measured version of this exercise on your workloads.
