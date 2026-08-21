# Case Study: Retrieval-Grounded AI Automation for an Enterprise Support Operation
- **Route:** /case-studies/retrieval-grounded-ai-automation-for-an-enterprise-support-operation
- **Status:** NEW CONTENT — the old site had no case-study detail pages; written for the new template.
- **SEO Title:** Retrieval-Grounded AI Automation for an Enterprise Support Operation
- **SEO Description:** A retrieval-grounded support agent for an enterprise software company: 61% of 30,000+ monthly tickets auto-resolved, first response in under 2 minutes.

## At a glance
- **Client:** An enterprise B2B software company fielding 30,000+ monthly tickets
- **Industry:** Enterprise software / Customer support operations
- **Services:** [AI & Automation](/ai-automation), [API Development](/api-development), [Software Development](/software-development)
- **Engagement length / team size:** 7 months · 5 Sentrize engineers (1 lead, 2 AI/retrieval engineers, 1 backend engineer, 1 platform engineer)
- **Stack:** TypeScript, Node.js, React, PostgreSQL, Redis, AWS, Docker, GitHub Actions, Grafana

## The challenge

The client's support operation was losing a volume race. More than 30,000 tickets arrived every month across a large enterprise product surface, and the queue's arithmetic was unforgiving: first response averaged 14 hours, hiring could not keep pace with ticket growth, and the most experienced agents spent their days on the most repetitive questions — password policies, configuration steps, licence entitlements — rather than the genuinely hard cases.

Leadership had evaluated off-the-shelf AI deflection tools and rejected them for a reason that matters in enterprise support: they could not tolerate a system that invents answers. A wrong-but-confident response about a security setting or a billing entitlement is worse than a slow human one. Any automation would have to be verifiably grounded in the client's actual documentation, know when it did not know, and hand off cleanly to humans — with evidence, not vibes, that it met that bar before customers ever saw it.

## The solution

We built a retrieval-grounded agent over the client's documentation with strict citations and confidence-gated escalation, integrated through a typed tool layer for scoped account actions, and validated it in shadow mode against 20,000 historical tickets before it answered a single live customer.

**Grounded answers or no answer.** Every response is composed from passages retrieved from the client's documentation, release notes, and internal knowledge base, and every claim carries a citation back to its source. If retrieval cannot support an answer with sufficient confidence, the agent does not improvise — it escalates. Hallucination is treated as a defect class with a budget of zero, enforced by evaluation rather than hoped for.

**Confidence-gated escalation.** Escalation thresholds are tuned per ticket category: the agent resolves routine configuration and how-to tickets autonomously, while anything touching security, billing disputes, or ambiguous intent routes to a human — accompanied by the agent's retrieval results and a structured summary, so the human starts warm instead of cold.

**A typed tool layer for actions.** Where resolving a ticket requires doing something — checking an entitlement, resending an invitation, resetting an integration — the agent acts through a typed API layer with strictly scoped, least-privilege permissions and full audit logging. The agent cannot perform any action outside its declared tool contracts, which made the security review a review of a finite list rather than an open question.

**Shadow mode before production.** For eight weeks the system ran in shadow, answering 20,000 historical and live-mirrored tickets invisibly while its responses were scored against what human agents actually did. Category-level accuracy from shadow mode determined the rollout order; nothing was automated on trust. Dashboards in Grafana track resolution quality, escalation rates, and citation coverage continuously in production.

## The results

- **61%** — Tickets auto-resolved
- **14h→<2min** — First response
- **−52%** — Cost per ticket

The agent now auto-resolves 61% of ticket volume end to end — the routine majority that previously consumed most of the team's capacity. First response fell from 14 hours to under 2 minutes for every ticket, because even escalated cases receive an immediate grounded acknowledgement and reach a human with context attached. Cost per ticket dropped 52%, letting the support organization absorb continued ticket growth without headcount growth.

Two secondary outcomes stand out. Blind quality reviews score auto-resolved tickets at parity with the human baseline — the escalation gate means the agent simply declines the cases it would get wrong. And the human team's work has shifted up-stack: senior agents now spend their time on complex product issues and on curating the documentation the agent retrieves from, which improves both channels at once.

## Client quote

> "It handles the volume we could never hire for, and it does it without making things up."
> — **Hannah Brückner**, Director of Customer Operations

---

**Related:** [AI & Automation](/ai-automation) · [API Development](/api-development) · [Software Development](/software-development) · [All case studies](/case-studies)
