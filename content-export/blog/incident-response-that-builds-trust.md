# Article: Incident Response That Builds Trust: Runbooks, Roles, and Blameless Postmortems
- **Route:** /blog/incident-response-that-builds-trust
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** DevOps
- **Date / Author / Read time:** Jun 2026 · Ryan Mitchell · 8 min read
- **SEO Title:** Incident Response That Builds Trust: Runbooks, Roles, and Blameless Postmortems
- **SEO Description:** The on-call structure behind our 24/7 support: severity levels, incident roles, tested runbooks, honest comms, and postmortems that change things.

The difference between a five-minute blip and a reputation hit is the process you rehearse. The on-call structure behind our 24/7 support isn't heroics or a wall of dashboards — it's a small set of decisions made *before* anything breaks: who leads, what severity means, which runbook applies, and what we tell customers while we work. Twelve years of operating other people's production systems against a 99.99% SLA has distilled it to the following.

## Severity levels: decided in advance, declared without debate

The worst minutes of an incident are the ones spent arguing about whether it *is* one. We use a small severity matrix, defined by user impact rather than component:

- **SEV1** — critical user-facing functionality down or data at risk. Page immediately, incident commander assigned, customer comms within 15 minutes.
- **SEV2** — degraded service or a failing subset of users. Page the owning team, comms if customer-visible.
- **SEV3** — internal impact or contained fault with redundancy holding. Business-hours handling, tracked.

Two rules make the matrix work. **Anyone can declare an incident** — a support engineer who suspects a SEV2 opens one; a false alarm costs ten minutes, a suppressed real one costs the SLA. And **when unsure, declare high and downgrade** — the reverse ordering is how five-minute blips become two-hour outages.

## Roles: three hats, never on one head at the same time

The classic incident-command structure survives because it fixes the actual failure mode of major incidents — not lack of skill, but everyone debugging and no one deciding.

- **Incident Commander (IC)** owns the incident, not the keyboard. The IC decides between mitigation paths, pulls in people, and — critically — does not debug. The moment the IC starts reading logs, the incident has no commander.
- **Operations lead** does the hands-on diagnosis and executes changes, following the runbook until there's an explicit, stated reason to leave it.
- **Communications lead** owns the status page, customer updates, and the internal stakeholder channel — so that the people fixing the problem aren't also fielding "any update?" every four minutes.

On a small team, one person may hold multiple hats at 3 a.m. — but the hats stay explicit, and escalation adds people to shed them. Every incident channel opens with a pinned message naming who holds which role; it reads bureaucratic and saves its cost within the first ten minutes of any real SEV1.

## Runbooks: written calm, executed under stress, tested like code

A runbook exists so the 3 a.m. responder borrows the judgment of the person who understood the system at 3 p.m. Ours follow a strict shape: symptoms as the operator sees them, immediate mitigation first (restore service, then diagnose), decision points as explicit if/then branches, exact commands with real resource names, and a hard escalation line — "if not mitigated in 20 minutes, page X."

The discipline that separates working runbooks from wiki archaeology is testing. Runbooks live in Git next to the services they cover, get updated in the same PR as the change that invalidates them, and get *executed* — not reviewed, executed — in scheduled game days where we inject failures (kill a database failover, exhaust a connection pool, expire a certificate) in a controlled window. Every game day finds at least one command that no longer works or one permission the on-call role silently lost. Better to find it on a Tuesday afternoon.

Game days double as evidence: rehearsed recovery procedures and tested escalation paths map directly onto the availability and incident-management controls in our SOC 2 Type II and ISO 27001 audits. The rehearsal you run for reliability is the same artifact you show the auditor.

## Communication: the part customers actually remember

Users forgive outages; they don't forgive silence or spin. Our comms rules during customer-visible incidents:

- First status-page update within 15 minutes of declaration, even if it only says what we know and when we'll update next.
- Updates on a stated cadence (every 30 minutes for SEV1) *even when nothing has changed* — "still investigating, next update 14:30" beats a two-hour gap every time.
- Plain language, no minimizing. "Some requests" is a weasel phrase when it's 40% of requests.
- Never promise an ETA you're guessing at. Promise the next update instead.

An SLA relationship survives on exactly this. Enterprise customers don't expect zero incidents from anyone; they expect to never learn about one from their own users first.

## Blameless postmortems: where the trust compounds

Every SEV1 and SEV2 gets a postmortem within five working days. Blameless doesn't mean consequence-free — it means the analysis assumes people acted reasonably on the information they had, and asks why the *system* made the failure possible and the detection slow. The moment a postmortem can cost someone standing, it starts producing fiction, and fictional postmortems repeat their incidents.

The mechanics that keep ours honest: a timeline built from logs and chat records rather than memory; contributing factors instead of a single "root cause" (there's never just one); and action items with named owners and deadlines, tracked in the same backlog as feature work. We review open postmortem actions in the monthly ops meeting — an action item without an owner is a wish, and a repeated incident with an unshipped action item from last time is the one failure we treat as unacceptable.

## Where to go from here

If you do only three things: write the severity matrix, name the IC role, and run one game day this quarter. The rest of the machinery grows naturally from what the rehearsal exposes. If you'd rather inherit a rehearsed on-call practice than build one — this structure, staffed around the clock, is what our [managed DevOps](/managed-devops) and [managed hosting](/managed-hosting) clients run on. [Talk to engineering](/contact) about what 24/7 coverage would look like for your platform.
