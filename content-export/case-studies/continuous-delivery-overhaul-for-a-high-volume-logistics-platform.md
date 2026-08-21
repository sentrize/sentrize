# Case Study: Continuous Delivery Overhaul for a High-Volume Logistics Platform
- **Route:** /case-studies/continuous-delivery-overhaul-for-a-high-volume-logistics-platform
- **Status:** NEW CONTENT — the old site had no case-study detail pages; written for the new template.
- **SEO Title:** Continuous Delivery Overhaul for a High-Volume Logistics Platform
- **SEO Description:** How Sentrize took a high-volume logistics platform from fortnightly manual releases to 40+ deploys a day and a 3.1% change-failure rate.

## At a glance
- **Client:** A high-volume logistics SaaS platform handling routing, tracking, and billing for shippers and carriers
- **Industry:** Logistics (SaaS)
- **Services:** [DevOps Services](/devops), [CI/CD Automation](/cicd-automation), [Kubernetes](/kubernetes), [Infrastructure as Code](/infrastructure-as-code)
- **Engagement length / team size:** 7 months · 4 Sentrize engineers (1 lead, 2 platform engineers, 1 SRE) embedded with the client's teams
- **Stack:** Node.js, TypeScript, Docker, Kubernetes on AWS, Terraform, GitHub Actions, Prometheus, Grafana, PostgreSQL

## The challenge

Releases were manual, batched fortnightly, and routinely rolled back — a single failed deploy could freeze the engineering org for a day.

The mechanics behind that sentence were familiar to anyone who has run a release train. Every two weeks a release branch was cut from weeks of accumulated work, stabilized by hand, and deployed on a Thursday evening from a runbook that only a few senior engineers could execute. Because each release carried dozens of unrelated changes, failures were hard to attribute and expensive to unwind: the change-failure rate sat at 22%, and a bad deploy meant a war room, a code freeze, and a day of lost engineering time across the organization.

The second-order effects were worse. Features waited an average of three weeks from merge to production. Urgent fixes bypassed the process entirely, creating drift between environments. And because deploying was risky, teams batched more into each release — making every release riskier still. With enterprise customers asking for faster fixes and predictable maintenance behaviour, leadership wanted the release process rebuilt, not patched.

## The solution

Sentrize ran the engagement as four overlapping workstreams, with the constraint that product delivery could not pause while the ground moved underneath it.

**A single paved-road pipeline.** We standardized CI on GitHub Actions: every commit to trunk produced a tested, security-scanned, versioned Docker image. Build times were cut from 40+ minutes to under 10 by caching layers and parallelizing test suites, so the pipeline was fast enough that engineers actually used it as their feedback loop.

**A platform worth deploying to.** Services moved onto Kubernetes (EKS) on AWS, with every environment — including production — defined in Terraform. Reproducible environments eliminated the configuration drift that had made the old runbook so fragile, and demand-driven autoscaling replaced statically provisioned fleets sized for peak.

**Progressive delivery instead of big-bang releases.** Deploys became canary rollouts gated by automated analysis of Prometheus metrics — error rate, latency, and SLO burn. A regressing canary rolls back automatically in minutes, without a human in the loop. Feature flags decoupled deploy from release, so shipping code and exposing functionality became separate, low-stakes decisions.

**Ways of working.** We moved teams to trunk-based development with small batches, gave every team ownership of its own deploys, and put shared Grafana dashboards in front of engineering and leadership so release health stopped being tribal knowledge. Sentrize engineers paired with client teams throughout, and the final month was spent handing over ownership entirely.

## The results

- **3 wks→2 hrs** — Release lead time
- **40+/day** — Deploy frequency
- **22%→3.1%** — Change-failure rate

A change merged to trunk now reaches production in about two hours, and the platform sustains 40+ deploys a day across teams — up from one batched release a fortnight. Because each deploy is small and canary-gated, the change-failure rate fell from 22% to 3.1%, and the failures that do occur are contained: automated rollback restores the previous version in under five minutes, and there has not been an org-wide release freeze since cutover.

Two secondary outcomes are worth noting. Right-sizing and demand-driven autoscaling on Kubernetes cut monthly AWS spend materially as a by-product of the platform work, and the fortnightly release war room was retired — on-call now handles deploys as routine events rather than ceremonies.

## Client quote

> "Our cloud bill was growing faster than revenue. Sentrize re-architected autoscaling and cut monthly AWS spend by 38% — with better performance."
> — **Amara Diallo**, Director of Operations · Logistics SaaS

---

**Related:** [DevOps Services](/devops) · [CI/CD Automation](/cicd-automation) · [Kubernetes](/kubernetes) · [All case studies](/case-studies)
