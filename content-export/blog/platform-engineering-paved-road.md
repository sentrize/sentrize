# Article: Platform Engineering: Building the Internal Paved Road Your Teams Will Use
- **Route:** /blog/platform-engineering-paved-road
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** Product
- **Date / Author / Read time:** Sep 2025 · Hannah Brooks · 10 min read
- **SEO Title:** Platform Engineering: Building the Internal Paved Road Your Teams Will Use
- **SEO Description:** Golden paths, developer portals, and templated CI/CD that teams adopt voluntarily — how to build an internal platform that wins on merit.

A platform team only succeeds when self-service is easier than going around it. Golden paths, developer portals, and templated CI/CD that teams adopt because they're genuinely the fastest route to production — that's the entire game. The moment a platform survives on mandate instead of merit, you've built a ticketing bottleneck with better branding, and product teams will spend real creativity routing around it.

We've built internal platforms for clients and run one ourselves across hundreds of services. The pattern of what works is consistent enough to write down.

## The platform is a product, and developers are customers who can leave

The founding decision isn't technical. Treat the platform as an internal product with users who have alternatives — because they do: the workaround, the shadow AWS account, the copy-pasted pipeline. That framing forces the practices that make platforms stick:

- **A roadmap driven by user research**, meaning you interview product teams about their slowest moments, not about your backlog.
- **Adoption as the success metric**, not feature count. A platform capability nobody uses is inventory, not value.
- **Support as a first-class function.** If asking the platform team a question takes two days, teams stop asking and start diverging.

The corollary is scope discipline. The strongest platforms we've built started with the *thinnest viable platform*: one golden path, for the most common service shape, done excellently. Breadth came later, pulled by demand rather than pushed by ambition.

## Golden paths: opinions with an escape hatch

A golden path is the supported, pre-paved route from "new service" to "running in production with observability, security, and deploys handled." Ours typically bundle: a service template (for a client's dominant stack — say TypeScript/Node.js or Laravel — with structure, health endpoints, and instrumentation in place), a CI/CD pipeline that comes wired for build, test, scan, and progressive deploy, Terraform modules for the standard infrastructure shapes, and dashboards, alerts, and on-call routing generated from service metadata.

The test we hold every golden path to: **a new service reaches production in under a day, with security scanning, SLO dashboards, and deploy automation included, and the team wrote only business logic.** When that's true, adoption doesn't need a mandate — the path wins because the alternative is two weeks of yak-shaving.

Two design rules keep the path golden rather than gilded-cage:

1. **Opinionated defaults, documented exits.** Teams can leave the path, but leaving is explicit: you take on the ops burden you're declining, and the platform team knows where the exceptions are. Most teams, offered a genuinely good default, don't leave.
2. **The path absorbs toil *and* policy.** Baked-in secret scanning, least-privilege IAM, resource limits, and audit logging mean compliance stops being a per-team negotiation. When we take a client through SOC 2 or ISO 27001, the paved road is the control set — evidence comes from the template, once, instead of from forty teams, repeatedly.

## Templated CI/CD: the highest-leverage piece

Of everything in the platform, pipeline templating pays back fastest, because pipeline sprawl is where organizations quietly hemorrhage effort — fifty services, fifty subtly different YAML files, every improvement re-implemented fifty times.

We build pipelines as versioned, centrally-maintained templates (reusable workflows in GitHub Actions, includes in GitLab CI) that services consume with a few parameters. The service's own config shrinks to ~20 lines declaring what it is; the template supplies build, test, SAST, image signing, deploy strategy, and rollback behavior. When the platform team improves the template — faster caching, a new scanner, a safer canary step — every consuming service inherits it on the next version bump.

That last property is the strategic one: **templated CI/CD turns platform improvements from campaigns into releases.** It's also a governance instrument — provenance, approvals, and deployment audit trails are enforced in one reviewed place, which is exactly the shape enterprise change-management wants.

## Developer portals: catalog first, glamour later

Backstage (or a lighter equivalent — sometimes a well-kept catalog and a scaffolding CLI is genuinely enough) earns its place in a specific order:

1. **Software catalog** — every service, its owner, its tier, its docs, its dashboards. The "who owns this and is it healthy" question answered in one place is the portal's core value.
2. **Scaffolding** — "create new service" as a form that stamps out the golden-path template with ownership metadata attached from birth.
3. **Scorecards** — production-readiness visible per service (SLOs defined? runbook current? dependencies patched?), which creates gentle, public pressure toward the paved road without a single mandate.

The failure mode is inverting the order: six months of portal theming while the catalog is stale. A portal is only as trusted as its data.

## Measure it like you'd measure any product

The metrics that tell you whether the paved road is working: time from repo creation to first production deploy (the single best platform KPI), percentage of services on current template versions, DORA metrics for path users versus off-path teams, and platform NPS taken seriously enough to act on. On one engagement, first-deploy time fell from around three weeks to under a day within two quarters of the golden path landing — and adoption followed the result, not the announcement.

## Where to go from here

Don't start with a portal, a hiring plan, or a platform manifesto. Start with your most-repeated service shape, build one excellent golden path for it, and measure time-to-first-deploy before and after. Everything else — portal, scorecards, broader paths — earns investment from that first win. Our [DevOps](/devops) and [managed DevOps](/managed-devops) teams build these paved roads inside client organizations, template by template; [talk to engineering](/contact) if your teams are still spending their first two weeks on YAML instead of product.
