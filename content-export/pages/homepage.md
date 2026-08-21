# Page: Homepage
- **Route:** /
- **Source:** app/page.tsx + components/landing/*
- **SEO Title:** Sentrize — the software and cloud platforms your business runs on *(set as `title.absolute`)*
- **SEO Description:** Sentrize designs, builds, and operates custom software and cloud platforms — from first commit to production and round-the-clock operations.
- **Canonical:** / (`alternates.canonical`)
- **OpenGraph:** not exported from app/page.tsx (no `openGraph` field in metadata)

Section order below follows the composition in `app/page.tsx`: Hero → Capabilities → EngagementModels → PartnershipBanner → IndustryTabs → WhyUsStats → RoadmapCapabilities → VideoModal → FinalCta.

---

## Section 1 — Hero (headline, CTAs, video trigger, client logo marquee)

**H1 (animated, rendered as 3 lines):**

# We build the software and cloud platforms your business runs on.

**Intro paragraph:**

Sentrize designs, builds, and operates digital products and cloud infrastructure — pairing modern engineering practices with senior teams who stay for the long haul.

**CTAs:**
- [Start a project](/pricing) — primary button
- [Talk to engineering](/contact) — ghost/secondary button

**Hero video trigger:**
- Play button (visual only, no text label) that opens the video modal (Section 8).
- Video: YouTube ID `2tJz42k1CA4` — embed URL: `https://www.youtube.com/embed/2tJz42k1CA4?autoplay=1&rel=0` (iframe title: "Sentrize")
- Poster image (shown before play / after close): `/assets/images/homepage-img-video.png` — alt: "Sentrize"

**Client logo marquee** (infinite scroll; the 6 logos are duplicated in markup for a seamless loop; each logo links to [/success-stories](/success-stories)):

| Alt text | Image URL |
| --- | --- |
| Cisco | /assets/images/cisco-white.png |
| Bitdefender | /assets/images/bitdefenderr-white.png |
| 123 FormBuilder | /assets/images/123formbuilder-white.png |
| EaseUS | /assets/images/easeus-white.png |
| Mondly | /assets/images/mondly-languages-white.png |
| Viewsonic | /assets/images/viewsonic-white.png |

---

## Section 2 — Capabilities (services accordion)

**H2:**

## An engineering partner built to scale your digital products

**Intro paragraph:**

Whether you're launching a new SaaS product, modernizing legacy systems, or running mission-critical workloads, Sentrize designs, builds, and operates the software and cloud infrastructure behind it.

**Accordion items** (single-open accordion; first item open by default; every item's CTA label is "Learn more"):

1. **Custom software**
   Tailored applications built around your workflows in Laravel, Node.js, and TypeScript — engineered for maintainability and growth.
   [Learn more](/services)
2. **Web & mobile apps**
   Fast, accessible web and cross-platform mobile apps built with React, Next.js, and React Native, backed by reliable APIs.
   [Learn more](/services)
3. **SaaS development**
   End-to-end SaaS builds with multi-tenancy, subscription billing, and scalable architecture, from MVP to mature platform.
   [Learn more](/services)
4. **Cloud & DevOps**
   Cloud architecture on AWS with Docker, Kubernetes, and Terraform, plus CI/CD pipelines that ship reliable releases.
   [Learn more](/services)
5. **Security & compliance**
   Threat modeling, dependency scanning, secrets management, and least-privilege access built into every engagement.
   [Learn more](/services)
6. **Technical consulting**
   Architecture reviews, technology decisions, and delivery guidance from engineers who have built and run systems at scale.
   [Learn more](/partners)

**Side image:** `/assets/images/platform-designed-to-scale-mockup.png` — alt: "Platform designed to scale"

---

## Section 3 — Engagement Models (3 cards)

**Eyebrow (all caps in source):**

FLEXIBLE WAYS TO WORK WITH US

**H2 (with line break after "model"):**

## Choose the engagement model that fits your team

**Cards** (each card contains a "Most popular" badge in markup, but it carries the `hidden` class on all three cards — not visible in the current build; card 2 "Dedicated teams" additionally has the `activeMostPopular` marker class). No prices, feature lists, or links on these cards.

1. **Fixed-scope projects** — `icon: TERMINAL_ENCRYPTION` (inline SVG data URI, empty alt)
   Best when requirements are well defined. We scope the work, agree on milestones and success metrics, and deliver tested, production-ready software for a fixed price.
   Badge (hidden): Most popular
2. **Dedicated teams** — `icon: ESTATE_MANAGEMENT` (inline SVG data URI, empty alt)
   We embed senior engineers into your roadmap as an extension of your team — owning architecture and delivery while you set the priorities sprint to sprint.
   Badge (hidden): Most popular
3. **Managed services** — `icon: DEEP_PERSONALIZATION` (inline SVG data URI, empty alt)
   We run your production infrastructure with 24/7 monitoring, automated backups, security patching, and zero-downtime releases, so your team can focus on the product.
   Badge (hidden): Most popular

---

## Section 4 — Partnership Banner (image + copy)

**Image:** `/assets/images/beyond-payments-image.png` — alt: "" (empty)

**Eyebrow (all caps in source):**

AN ENGINEERING PARTNER, NOT A VENDOR

**H3:**

### Beyond delivery - engineering as a long-term partnership

**Body:**

We don't just ship code and walk away. Backed by a senior team and over a decade of delivery experience, we help you architect, scale, and optimize systems that keep performing as you grow.

**CTA:**
- [Explore our work](/blog)

---

## Section 5 — Industry Tabs

**Section title:**

Built for ambitious technology teams

**Tabs** (5 tabs; tab 1 active by default; each panel = icon + title + description, no links):

### Tab 1 — SaaS & Software
`icon: SOFTWARE_HEALTH` (inline SVG data URI, empty alt)

**Ship and scale your SaaS product**

Build multi-tenant SaaS with subscription billing, role-based access, and an architecture that scales — using React, Node.js, Laravel, and AWS.

### Tab 2 — Startups
`icon: FIELD_SERVICES` (inline SVG data URI, empty alt)

**Launch faster as a startup**

Get from idea to a tested MVP in weeks, with senior engineers who choose the simplest architecture that fits your stage and budget.

### Tab 3 — E-commerce
`icon: OTHER_POLCICIES` (sic — icon name misspelled in source; inline SVG data URI, empty alt)

**Engineer high-traffic e-commerce**

Headless storefronts on Next.js with edge caching, performance tuning, and integrations that hold up through peak seasonal traffic.

### Tab 4 — Enterprises
`icon: DESKTOP_PC` (inline SVG data URI, empty alt)

**Modernize enterprise systems**

Migrate legacy platforms to cloud-native architecture with infrastructure as code, observability, and zero-downtime releases.

### Tab 5 — AI products
`icon: HARDWARE_HEALTH` (inline SVG data URI, empty alt)

**Turn AI ideas into products**

Integrate LLMs, automation, and intelligent workflows into your product through clean APIs, deployed on AWS with monitoring in place.

---

## Section 6 — Why Us / Stats (4 cards)

**H2:**

## Why teams keep building with us

**Cards:**

1. **Stat:** 500+ — **Stat label (all caps in source):** PROJECTS DELIVERED
   **Title:** Proven delivery
   **Description:** Production systems shipped across 23+ countries.
   [Learn more](/services)
2. **Title (two stacked lines):** 99.99% / Enterprise reliability
   **Description:** SLA-backed uptime with 24/7 monitoring and alerting.
   [Learn more](/about)
3. **Stat:** Real-time — **Stat label (all caps in source):** OBSERVABILITY
   **Title:** Full visibility
   **Description:** Metrics, logging, and tracing on every service we run.
   [Learn more](/services)
4. **Title (two stacked lines):** 100% / code ownership
   **Description:** You own all source code, infrastructure, and IP — no lock-in.
   [Learn more](/services)

---

## Section 7 — Roadmap Capabilities (6 cards)

**H2 (with line break after "the"):**

## Power your roadmap with the Sentrize engineering team

**Cards** (each: icon + title + description + "Learn more" CTA):

1. **Scale with confidence** — `icon: SINGLE_SOURCE_PROVIDER` (inline SVG data URI, empty alt)
   Grow into new markets and traffic peaks on cloud-native infrastructure that scales automatically while we handle the operational complexity.
   [Learn more](/services)
2. **Maximize product reliability** (line break after "product" in source) — `icon: LIFE_EXPECTANCY_02` (inline SVG data URI, empty alt)
   Focus on building great products while we keep them fast, observable, and available with SLA-backed uptime.
   [Learn more](/services)
3. **Accelerate time to market** (line break after "time" in source) — `icon: CALENDAR` (inline SVG data URI, empty alt)
   To win against competitors you need to ship fast. Senior engineers and automated pipelines get you to production sooner.
   [Learn more](/services)
4. **Reduce technical debt** — `icon: ESTATE_MANAGEMENT` (inline SVG data URI, empty alt)
   Pay down legacy complexity with refactoring, automated testing, and architecture your team can maintain and extend.
   [Learn more](/services)
5. **Strengthen security & compliance** — `icon: NETWORK_MANAGEMENT_SYSTEM` (inline SVG data URI, empty alt)
   Harden your applications and infrastructure with security built into the build, and support for SOC 2, GDPR, and HIPAA requirements.
   [Learn more](https://www.avangatenetwork.com/) — external link, opens in new tab (`target="_blank" rel="noopener"`). NOTE: this external URL looks like a leftover from the legacy template — see "Unresolved / flags" below.
6. **Partner with a trusted engineering team** — `icon: TWO_WAY_CONVERSATION` (inline SVG data URI, empty alt)
   Since 2014, we've helped startups, SaaS companies, and enterprises build and run software that holds up in production.
   [Learn more](/partners)

---

## Section 8 — Video Modal (lightbox shell)

Static lightbox markup opened/closed by the Hero play button.

- **Close control label:** Close
- **Default/poster content:** image `/assets/images/homepage-img-video.png` — alt: "Sentrize"
- **On play (injected by Hero):** YouTube iframe `https://www.youtube.com/embed/2tJz42k1CA4?autoplay=1&rel=0`, iframe title: "Sentrize"

---

## Section 9 — Final CTA

**H2:**

## Ready to build your next product with confidence?

**Subheading:**

Tell us what you're building and we'll show you the fastest reliable path to production.

**CTAs:**
- [Talk to engineering](/contact) — ghost/secondary button
- [Start a project](/pricing) — primary button

---

## Appendix — Shared content referenced in the extraction scope but NOT rendered on the homepage

`components/Metrics.tsx` is a generic stat-grid renderer (props: `items: [number, label][]`, `dark`) with **no content of its own**, and it is **not imported or rendered by app/page.tsx**. The shared metrics data lives in `lib/content.ts` (`METRICS`) and is used on other pages. Captured here in full for the migration inventory:

**METRICS (8 items — stat / label):**

| Stat | Label |
| --- | --- |
| 500+ | Projects delivered |
| 99.99% | SLA-backed uptime |
| 98% | Client retention |
| 50+ | Engineers & specialists |
| 23+ | Countries served |
| 4.9/5 | Average client rating |
| 12+ | Years in operation |
| 24/7 | Support coverage |

`lib/content.ts` also exports `VALUES` (6 company values), `MILESTONES` (8 timeline entries, 2014–2026), `CERTS` (6 certifications), and `PHOTOS`/`img()` (Unsplash photo ids for `https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=<w>&h=<h>&q=80`). None of these are rendered on the homepage; they belong to other pages' inventories.

---

## Unresolved / flags

- **External "Learn more" href on the "Strengthen security & compliance" card:** points to `https://www.avangatenetwork.com/` (Avangate/2Checkout affiliate network) — almost certainly a leftover from the legacy Verifone-based template rather than intentional Sentrize content. Flagged for review during migration.
- **"Most popular" badge:** present in markup on all three engagement-model cards but hidden via CSS class in the current build; card 2 ("Dedicated teams") carries an `activeMostPopular` marker class suggesting it was the intended highlighted card.
- **Icon name typo in source:** the E-commerce tab icon's embedded identifier is `OTHER_POLCICIES` (sic).
- **No testimonial quotes** exist anywhere on the homepage; none omitted.
- **No openGraph metadata** is exported from app/page.tsx (only title, description, canonical).
