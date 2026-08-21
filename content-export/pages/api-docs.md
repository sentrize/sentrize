# Page: API Docs
- **Route:** /api-docs
- **Source:** app/(site)/api-docs/page.tsx
- **SEO Title:** API Docs
- **SEO Description:** REST API reference for building on the Sentrize platform.

## Section 1 — Hero (split)

Breadcrumb: [Home](/) / API Docs

- Eyebrow: **Resources**

# API Docs

Build on our platform with a clean, versioned REST API. Authenticate with a bearer token over HTTPS.

CTAs:
- [Start a project](/contact)
- [View pricing](/pricing)

Hero image:
- URL: https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&h=680&q=80
- Alt: API Docs

## Section 2 — Endpoints (table)

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/projects` | List your projects |
| POST | `/v1/deployments` | Trigger a deployment |
| GET | `/v1/deployments/{id}` | Get deployment status |
| GET | `/v1/metrics` | Query service metrics |
| POST | `/v1/webhooks` | Register a webhook |

Note below table:

All requests require `Authorization: Bearer <token>`. Responses are JSON. Rate limits apply per token.

## Section 3 — CTA

## Need API access?

Tell us what you're building and we'll get you a key.

CTAs:
- [Start a project](/contact)
- [View pricing](/pricing)
