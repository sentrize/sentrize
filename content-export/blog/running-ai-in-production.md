# Article: Running AI in Production: From Prototype to a System You Can Operate
- **Route:** /blog/running-ai-in-production
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** AI
- **Date / Author / Read time:** Apr 2026 · Aisha Rahman · 11 min read
- **SEO Title:** Running AI in Production: From Prototype to a System You Can Operate
- **SEO Description:** Serving architecture, latency budgets, evaluation gates, and monitoring — what it takes to turn an AI prototype into an operable production system.

A model in a notebook is 20% of the job; the rest is latency budgets, evaluation, and graceful failure. Serving architecture and monitoring — not model choice — are what separate the AI features that quietly work for years from the demos that never survive contact with real traffic. Since standing up our AI & Automation practice in 2024, we've shipped both classic ML and LLM-backed features into production systems, and the operational playbook is more consistent than the hype cycle suggests.

## Put a gateway between your product and every model

The first architectural decision: no application code calls a model provider directly. Everything goes through an internal AI gateway service — ours are typically Node.js/TypeScript — that owns:

- **Provider abstraction and fallback.** Primary model, fallback model, and a degraded non-AI path, so a provider incident is a quality reduction rather than an outage.
- **Timeouts, retries, and circuit breakers**, tuned per use case instead of inherited from an SDK default of 600 seconds.
- **Cost and rate controls.** Per-feature token budgets, per-tenant rate limits, and hard monthly caps. LLM spend is a denial-of-wallet surface; treat it like one.
- **The audit trail.** Every request logs prompt version, model version, token counts, latency, and a request ID joined to your tracing. When a customer asks "why did the system say this?" — and in regulated environments, they will, and your SOC 2 or internal governance review will too — this log is the answer.

This single service is also where PII redaction, prompt-injection filtering, and data-residency routing live, which keeps those controls in one audited place instead of scattered across feature teams.

## Latency budgets decide the architecture

Write the budget down before building: *suggestion appears within 800ms p95* is an engineering requirement; "it should feel fast" is not. The budget then forces the real decisions:

- **Stream anything user-facing.** Time-to-first-token of 300–500ms with streaming feels responsive; five seconds of spinner for the same total latency feels broken.
- **Move whatever can be async out of the request path.** Document enrichment, summarization, and classification usually belong on a queue with a webhook or poll, where a 20-second p99 is invisible.
- **Cache aggressively.** Exact-match caching for repeated prompts, semantic caching where tolerance allows, and provider-side prompt caching for long static system prompts — routinely a 40–70% cost reduction on read-heavy features.
- **Use the smallest model that passes evals.** A well-prompted small model at 4x lower latency and 10x lower cost beats a frontier model on most classification, extraction, and routing tasks. The eval suite, not intuition, makes that call.

## Evaluation is your regression suite

The defining operational difference from conventional software: outputs are non-deterministic and quality regresses silently. A provider updates a model, a teammate "improves" a prompt, and a workflow that passed review in March degrades in June without an error in sight.

The fix is treating evaluation like CI:

- **A golden dataset per use case** — a few hundred real (redacted) inputs with expected outputs or scoring rubrics, grown from production failures the way a test suite grows from bug reports.
- **Scoring appropriate to the task:** exact/schema match for extraction, assertion checks for structured outputs, LLM-as-judge with spot-checked calibration for open-ended generation.
- **Gates in the pipeline.** Prompts and model configs are versioned artifacts in Git; changing either runs the eval suite, and a score drop blocks the merge exactly like a failing test. No prompt edits in a dashboard on Friday afternoon.

Teams that skip this don't avoid evaluation — they outsource it to their users, one support ticket at a time.

## Monitor quality, not just uptime

Standard observability (latency, error rate, saturation) is necessary and radically insufficient, because an AI feature can be 200-OK-healthy while confidently wrong. The production dashboard needs four layers:

1. **System:** p50/p95/p99 latency split into time-to-first-token and total, error and timeout rates per provider, fallback activation rate.
2. **Cost:** tokens and spend per feature per day, with anomaly alerts — a prompt bug that doubles context length is a cost incident you want to catch in hours.
3. **Quality:** sampled production outputs scored continuously against the same rubrics as offline evals, watching for drift as real inputs diverge from the golden set.
4. **Product outcome:** acceptance rate of suggestions, edit distance before use, thumbs-down rate, task completion. This is the layer that tells you whether the feature deserves to exist.

## Design the failure modes on purpose

Every AI feature we ship has an answer to "what happens when the model is down, slow, or wrong" written before launch: which fallback model, what the non-AI degraded path is, what gets validated before an output touches a downstream system (schema validation on structured outputs is non-negotiable), and which decisions require a human in the loop. Graceful failure is a product decision; retrofitting it during a provider outage is neither graceful nor a decision.

## Where to go from here

If you have a promising prototype, resist wiring it straight into the product. Stand up the gateway, write the latency budget, build a hundred-case eval set — a few weeks of work that determines whether you're operating a system or babysitting a demo. Our [AI & Automation](/ai-automation) team builds this production scaffolding as a standard engagement; [talk to engineering](/contact) about what your prototype needs before it meets real users.
