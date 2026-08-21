# Case Study: Multi-Tenant Re-Platform for a B2B Collaboration Product
- **Route:** /case-studies/multi-tenant-re-platform-for-a-b2b-collaboration-product
- **Status:** NEW CONTENT — the old site had no case-study detail pages; written for the new template.
- **SEO Title:** Multi-Tenant Re-Platform for a B2B Collaboration Product
- **SEO Description:** How Sentrize re-platformed a single-tenant B2B collaboration pilot into multi-tenant SaaS: 10-minute provisioning, 40k paid seats, 3/3 security reviews.

## At a glance
- **Client:** An early-growth B2B SaaS whose single-tenant pilot landed three enterprise accounts
- **Industry:** B2B SaaS / Collaboration
- **Services:** [SaaS Development](/saas-development), [Web Applications](/web-applications), [Security & Compliance](/security-compliance)
- **Engagement length / team size:** 10 months · 6 Sentrize engineers (1 architect, 2 backend, 2 frontend, 1 platform engineer)
- **Stack:** TypeScript, Node.js, React, Next.js, PostgreSQL, Redis, AWS, Docker, Terraform, GitHub Actions

## The challenge

The client had a good problem wrapped around a hard one. Their collaboration product had been piloted as a single-tenant deployment — one stack per customer — which was exactly right for validating the product and exactly wrong for scaling it. Then the pilot landed three enterprise accounts, and the wrapping came off.

Provisioning a new customer took two weeks of engineer time: standing up infrastructure, seeding configuration, wiring integrations, and smoke-testing by hand. Every tenant was a slightly different snowflake, so upgrades had to be applied N times and verified N times. Costs scaled linearly with customer count regardless of usage. And the three enterprise accounts each came with a vendor security review that asked pointed questions about tenant isolation, encryption, and access controls that a hand-built pilot could not answer well.

The founders were clear-eyed about the risk: the platform, not the product, was becoming the reason deals slowed down. They engaged Sentrize to re-platform for multi-tenancy without pausing sales or breaking the pilot customers already in production.

## The solution

We re-architected the product as a true multi-tenant platform with row-level isolation, per-tenant encryption keys, and a self-service provisioning service, rebuilding the frontend in Next.js and adding tenant-scoped metering for billing.

**Isolation as a database guarantee, not a code convention.** Tenancy moved into PostgreSQL row-level security policies, so every query is scoped to a tenant by the database itself — an application bug cannot widen a query across tenants. Each tenant's data is encrypted with its own key, giving enterprise customers a concrete answer to the isolation question and making single-tenant offboarding (key destruction) verifiable.

**Provisioning as a product feature.** The two-week manual runbook became a provisioning service: creating a tenant configures isolation policies, encryption keys, default roles, and integration scaffolding automatically, on shared infrastructure defined in Terraform. What had required an engineer became a ten-minute automated workflow that sales could trigger from a form.

**A frontend rebuilt for the platform it now runs on.** The UI was rebuilt in Next.js and React with tenant-aware theming and role-based navigation, replacing the pilot's per-customer forks with one codebase deployed continuously through GitHub Actions.

**Metering built for enterprise billing.** Tenant-scoped metering records seat and usage data at the platform layer, so finance invoices from measured data and enterprise contracts with committed seat tiers could be priced with confidence.

Existing pilot customers were migrated tenant by tenant onto the shared platform, with a comparison window verifying parity before each snowflake stack was decommissioned.

## The results

- **2 wks→10 min** — Tenant provisioning
- **6→40k** — Paid seats in 14 mo
- **3/3** — Security reviews passed

Tenant provisioning went from two weeks of engineering effort to a ten-minute self-service workflow, which changed what the sales team could promise: proof-of-concept tenants are now spun up during the sales cycle rather than after contract signature.

The platform scaled from 6 to 40k paid seats in 14 months — growth the single-tenant architecture could not have carried — while infrastructure cost per seat fell steadily as tenants consolidated onto shared, autoscaled capacity. All three enterprise security reviews were passed, 3/3, with row-level isolation, per-tenant keys, and audit logging providing direct answers to the questions that had previously stalled deals. As a secondary outcome, upgrades now ship once to all tenants through a single pipeline, ending the era of N-times deployment and version drift across customers.

## Client quote

> "The platform stopped being the bottleneck to enterprise deals — it became the reason we won them."
> — **Sophie Aldridge**, Co-Founder & CEO

---

**Related:** [SaaS Development](/saas-development) · [Web Applications](/web-applications) · [Security & Compliance](/security-compliance) · [All case studies](/case-studies)
