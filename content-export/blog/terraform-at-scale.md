# Article: Terraform at Scale: Module Design, State Hygiene, and Drift You Can Trust
- **Route:** /blog/terraform-at-scale
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** Cloud
- **Date / Author / Read time:** Dec 2025 · Tomas Berg · 8 min read
- **SEO Title:** Terraform at Scale: Module Design, State Hygiene, and Drift You Can Trust
- **SEO Description:** An opinionated guide to composable Terraform modules, small state files, environment promotion, and drift detection that stays trustworthy.

IaC falls apart when state balloons and modules become copy-paste sprawl. Our opinionated guide to composable modules and environment promotion comes from operating Terraform across hundreds of client environments — the same repos our engineers plan and apply daily, twelve years into running infrastructure for other people. The failure modes are remarkably consistent, and so are the fixes.

## Modules: small, composable, versioned

The most common anti-pattern we inherit is the god-module: one `terraform-aws-platform` module with 90 input variables that provisions VPC, EKS, RDS, and IAM in a single apply. It couples unrelated lifecycles (a subnet change now plans against your database), makes review impossible, and turns every upgrade into a big bang.

The rules we hold modules to:

- **One responsibility per module.** A module provisions a VPC, or an EKS cluster, or a Postgres instance with its parameter group, alarms, and backups — not all three. If describing a module needs the word "and" twice, split it.
- **Composition happens in root modules, not inside child modules.** Child modules take IDs and ARNs as inputs; they don't look up or create their dependencies.
- **Version everything.** Modules live in their own repos (or a well-bounded monorepo) with semver git tags, and consumers pin exact versions. `ref=main` is how one team's refactor becomes another team's outage.
- **Fewer knobs, stronger opinions.** Every variable is a promise you maintain forever. Our internal modules encode the decisions we want made once — encryption on, logging on, tags mandatory — and expose only what genuinely varies per consumer.

A useful smell test: if adding a service requires copy-pasting 400 lines from the last service's directory, you don't have modules, you have templates with extra steps.

## State: small blast radius, boring storage

State design is risk design. Every resource in a state file is exposed to every apply against that file, so the size of your state is the size of your blast radius.

- **Split state by environment first, then by lifecycle/domain.** Networking, cluster, data stores, and per-service infrastructure each get their own state. A bad apply to an app's queue should have no physical path to the VPC.
- **Connect layers with `terraform_remote_state` or data sources**, reading outputs — never by importing another layer's resources into your own state.
- **Storage is S3 with versioning and native lockfile locking** (or the DynamoDB lock table on older Terraform), encrypted, access-logged, and IAM-restricted to the CI role plus a break-glass group. State files contain secrets whether you like it or not; treat access to them as the privileged operation it is — ours falls under the same access-review controls as production databases in our ISO 27001 scope.
- **Watch plan times.** When a plan takes ten minutes, engineers batch changes, reviews get shallow, and the feedback loop that makes IaC safe erodes. Plan time is the practical ceiling on state size.

## Environment promotion: directories, not workspaces

For environment separation we use a directory per environment (`envs/dev`, `envs/staging`, `envs/prod`), each a thin root module that composes the same versioned modules with different variables — not Terraform workspaces, which hide the environment in runtime context, and not copy-pasted stacks, which drift apart within a quarter.

Promotion is then a version bump you can read in a diff: staging runs `vpc v3.2.0`, and promoting to prod is a one-line PR changing prod's pin from `v3.1.4` to `v3.2.0`, with the plan output attached. The change that reaches production is byte-for-byte the change that soaked in staging. That property — reviewable, ordered, evidenced promotion — is also precisely what a change-management auditor asks for, and with this layout the Git history *is* the audit trail.

## Drift you can trust

Drift — the live estate diverging from code — comes from console hotfixes, scripts, and other tools sharing the account. Undetected, it makes every future plan a surprise. Our approach:

1. **Scheduled `terraform plan` on every state, nightly**, with non-empty plans posted to the owning team's channel. Plan output is the drift report; no extra tooling required to start.
2. **Classify before correcting.** Drift is either an emergency fix that needs back-porting to code, an unauthorized change that needs a conversation, or a resource Terraform shouldn't own. Each has a different fix; auto-reverting all three alike is how you re-break an incident mitigation at 2 a.m.
3. **Shrink write access.** Humans get read-only in production accounts by default; changes flow through CI. Drift detection matters in inverse proportion to how many hands can create drift.
4. **Policy as code in the pipeline.** OPA/Conftest (or Sentinel) checks on the plan JSON block public S3 buckets, unencrypted volumes, and missing tags before apply — turning standards from a wiki page into a merge gate.

The CI shape is deliberately boring: PR triggers fmt, validate, lint, policy checks, and a plan posted to the PR; merge applies that reviewed plan; applies are serialized per state. No local applies against shared environments, ever.

## Where to go from here

If your Terraform hurts, start with state surgery — split the monolith state along lifecycle lines using `terraform state mv`, carefully and one layer at a time — then version your modules, then turn on nightly drift plans. Each step pays for itself independently. Our [infrastructure as code](/infrastructure-as-code) practice does this migration on live estates without downtime windows; [talk to engineering](/contact) if yours has reached the point where applies feel like gambling.
