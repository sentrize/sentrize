# Article: Designing Multi-Tenant SaaS: Where to Draw the Isolation Boundary
- **Route:** /blog/multi-tenant-saas-isolation-boundary
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** Engineering
- **Date / Author / Read time:** Nov 2025 · Marcus Feldt · 10 min read
- **SEO Title:** Designing Multi-Tenant SaaS: Where to Draw the Isolation Boundary
- **SEO Description:** Pooled, siloed, or bridge — how to choose a tenancy model, with a practical comparison of the Postgres isolation options and their trade-offs.

Pooled, siloed, or bridge — the tenancy model you choose shapes cost, compliance, and blast radius for years. We compare the Postgres isolation options we actually deploy — shared tables with row-level security, schema-per-tenant, and database-per-tenant — and the decision framework we use to place each customer tier on that spectrum. This is one of the few architecture decisions that's genuinely expensive to reverse, so it deserves more than a default.

## The three models, honestly stated

- **Pooled:** all tenants share tables, every row carries a `tenant_id`, and application or database policy enforces the boundary. Cheapest to run, easiest to operate, one migration per release. The boundary is logical, so a single missing predicate is a cross-tenant data exposure.
- **Siloed:** each tenant gets its own database (or cluster). The boundary is physical. Blast radius, noisy neighbors, and "where is my data" questions all collapse — and so does your margin if you do it for thousands of small tenants.
- **Bridge:** pooled for the long tail, siloed for the tenants who need it. This is where nearly every successful B2B SaaS ends up, so it's worth designing for on day one even if you launch pooled-only.

## The Postgres options, compared

### Shared tables + row-level security

Every tenant-owned table carries `tenant_id`, and Postgres RLS policies enforce the filter at the database layer:

- The application sets `SET LOCAL app.tenant_id = '...'` per request/transaction; policies compare against `current_setting('app.tenant_id')`.
- The application role must not be the table owner and must not have `BYPASSRLS` — otherwise the policies are decoration.
- Every table gets a composite index led by `tenant_id`, or the policies quietly turn index scans into sequential scans.

RLS moves tenant filtering from "every developer remembers the WHERE clause" to "the database refuses to return foreign rows." That's a control you can point at in a SOC 2 audit, and it converts an entire bug class from data breach to blank page. The costs: policies complicate query plans (measure, don't assume — we've seen anywhere from negligible to 15% overhead on complex joins), and cross-tenant analytics needs an explicit, separately-audited role.

### Schema-per-tenant

One database, one schema per tenant, identical tables in each. It sounds like a tidy middle ground; at scale it mostly isn't. Migrations multiply by tenant count — 2,000 tenants means 2,000 `ALTER TABLE`s per release, with partial-failure states to reconcile. `pg_dump` and connection pooling both degrade as schema count grows, and PgBouncer's `search_path` handling adds sharp edges. We use it narrowly: tens of tenants, heavyweight per-tenant customization, no ambition to reach hundreds.

### Database-per-tenant

Full physical isolation: per-tenant backups and PITR, per-tenant encryption keys, per-tenant restore without touching neighbors, trivially clean data deletion when a contract ends. On AWS this maps to separate RDS/Aurora databases or clusters, and Aurora Serverless v2 has made small siloed tenants materially cheaper than they were. The cost is operational multiplication — fleets of databases need fleet tooling: migrations orchestrated with per-tenant status tracking, monitoring per database, connection routing in a control plane. Terraform makes tenant provisioning repeatable, but you are now operating a fleet, and you should staff and automate accordingly.

## What actually decides it

Four questions settle the boundary faster than any architecture debate:

1. **What will enterprise procurement demand?** If your target market includes regulated industries, RFPs will ask for dedicated infrastructure, data residency, and customer-managed keys. That's a siloed tier, priced accordingly — isolation is a sellable feature, not just a cost.
2. **What's the blast radius you can tolerate?** In a pooled model, one tenant's runaway query or a bad migration touches everyone. Statement timeouts, per-tenant rate limits, and workload isolation help, but physics is physics.
3. **What compliance boundary are you attesting to?** Pooled-with-RLS is defensible under SOC 2 and ISO 27001 when the policies, roles, and testing are evidenced. Some frameworks and some customers will still require physical separation — find out before you commit, not during the deal.
4. **What can your team operate?** A database fleet without fleet automation fails worse than a pooled model with disciplined RLS.

## The pattern we deploy

For most B2B SaaS we build: **pooled with RLS as the foundation, a siloed tier from day one on paper, and the seams in place to make it real.** Concretely:

- `tenant_id` on every tenant-owned row and in every JWT, resolved once in middleware — never trusted from request bodies.
- RLS policies plus application-level scoping (defense in depth, and the app layer gives better error messages).
- Automated tests that attempt cross-tenant reads and writes on every table, run in CI on every PR.
- A control plane that maps tenant → connection string, so "move this tenant to dedicated infrastructure" is a data migration, not a re-architecture.

One SaaS platform we operate runs ~3,000 tenants pooled and a single-digit number of enterprise tenants on dedicated Aurora clusters — same codebase, same release train, different `DATABASE_URL`. That flexibility exists because the seam was designed in before it was needed.

## Where to go from here

If you're pre-launch, start pooled with RLS and build the control-plane seam. If you're live and enterprise deals are stalling on isolation questions, the bridge migration is well-trodden and doesn't require a rewrite. Our [SaaS development](/saas-development) team has drawn this boundary across a wide range of tenancy scales — [talk to engineering](/contact) and we'll walk through where it belongs for yours.
