# Page: Open a Ticket
- **Route:** /open-ticket
- **Source:** app/(site)/open-ticket/page.tsx
- **SEO Title:** Open a Ticket
- **SEO Description:** Submit a support ticket and get tracked, prioritized help from our team.

## Section 1 — Hero
- Breadcrumb: [Home](/) / Open a Ticket
- Eyebrow: Support

# Open a Ticket

Submit a ticket and get prioritized help. Urgent production issues are acknowledged within minutes.

- Button: **Start a project** → /contact
- Button: **View pricing** → /pricing
- Image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&h=680&q=80 — alt: "Open a Ticket"

## Section 2 — Ticket form + "Response targets" sidebar

### Ticket form
- Field: **Your name** — text input
- Field: **Account email** — input type `email`
- Field: **Priority** — select, options:
  - Low — question
  - Normal — issue
  - High — degraded service
  - Urgent — production down
- Field: **Affected service** — text input
- Field: **Subject** — text input
- Field: **Describe the issue** — textarea — placeholder: "What happened, what you expected, and any error messages"
- Submit button: **Submit ticket**

### Sidebar — Response targets

#### Response targets
- Urgent (production down): minutes
- High (degraded service): < 1 hour
- Normal (issue): same business day
- Low (question): 1–2 business days

See the full [SLA policy](/sla-policy) for details.
