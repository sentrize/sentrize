# Site Configuration — Sentrize

Global, site-wide content shared across every page. Apply this to the new template's header, footer, SEO defaults, and shared blocks.

- **Brand name:** Sentrize
- **Production URL:** https://www.sentrize.com
- **Logo:** `/branding/logo.png` (147×40)
- **Copyright line:** © 2026 Sentrize. All rights reserved.
- **Accessibility:** "Skip to content" link targeting `#main`; all animations respect OS reduced-motion preference.

---

## Default SEO / Metadata (root layout)

- **Default title:** Sentrize — the software and cloud platforms your business runs on
- **Title template (subpages):** `%s | Sentrize`
- **Meta description:** Sentrize designs, builds, and operates custom software and cloud platforms — from first commit to production and round-the-clock operations.
- **Open Graph:** type `website`, siteName `Sentrize`, same title/description, image `/og.png` (1200×630, alt = default title)
- **Twitter card:** `summary_large_image`, title = default title, description: "Sentrize designs, builds, and operates custom software and cloud platforms.", image `/og.png`
- **Icons:** `favicon.ico`, `icon.png`, `apple-icon.png` (in `app/`)

---

## Header (main site)

- **Logo** links to `/`
- **Header CTAs (right side):**
  - [Talk to engineering](/contact) — ghost button
  - [Start a project](/contact) — primary button

### Primary navigation (mega-menu; each group label also links to a top-level page)

**Products** → `/services`
| Label | Href | Subtext |
|---|---|---|
| Software Development | /software-development | Custom systems built to last |
| SaaS Development | /saas-development | Multi-tenant products, MVP to scale |
| Web Applications | /web-applications | React & Next.js front ends |
| Mobile Applications | /mobile-applications | iOS & Android, one codebase |
| API Development | /api-development | REST & GraphQL, built to integrate |
| AI & Automation | /ai-automation | Practical AI in your product |
| UI/UX Design | /ui-ux-design | Build-ready interface design |

**Solutions** → `/solutions`
| Label | Href | Subtext |
|---|---|---|
| DevOps Services | /devops | Automate build, deploy, monitor |
| Cloud Infrastructure | /cloud-infrastructure | Resilient, cost-aware cloud |
| AWS Consulting | /aws-consulting | Well-Architected on AWS |
| Kubernetes | /kubernetes | Orchestration done right |
| CI/CD Automation | /cicd-automation | Ship safely, many times a day |
| Managed Hosting | /managed-hosting | We run it, you build it |
| Infrastructure Monitoring | /infrastructure-monitoring | Observability by default |
| Security & Compliance | /security-compliance | Secure from the first commit |
| Cloud Migration | /cloud-migration | Move without the downtime |
| Docker Containerization | /docker-containerization | Portable, reproducible workloads |
| Infrastructure as Code | /infrastructure-as-code | Terraform-managed environments |
| Managed DevOps | /managed-devops | Your DevOps team, on tap |

**Company** → `/about`
| Label | Href | Subtext |
|---|---|---|
| About Us | /about | Who we are |
| Our Team | /team | The people behind the work |
| Careers | /careers | Build with us |
| Partners | /partners | Our partner ecosystem |
| Portfolio | /portfolio | Selected work |
| Success Stories | /success-stories | Outcomes we've delivered |
| Testimonials | /testimonials | What clients say |
| Contact Us | /contact | Talk to engineering |

**Pricing** → `/pricing`
| Label | Href | Subtext |
|---|---|---|
| Development Plans | /pricing | Product & app engineering |
| DevOps Plans | /pricing | Automation & pipelines |
| Managed Cloud | /pricing | Fully operated infrastructure |
| Dedicated Team | /pricing | An embedded squad |
| Enterprise | /pricing | Custom, governed, at scale |

**Resources** → `/blog`
| Label | Href | Subtext |
|---|---|---|
| Blog | /blog | Engineering notes |
| Documentation | /documentation | Guides & references |
| Case Studies | /case-studies | Detailed engagements |
| White Papers | /white-papers | In-depth technical reports |
| Knowledge Base | /knowledge-base | How-to articles |
| API Docs | /api-docs | Build on our APIs |

**Support** → `/help-center`
| Label | Href | Subtext |
|---|---|---|
| Help Center | /help-center | Find answers fast |
| Open a Ticket | /open-ticket | Get hands-on help |
| Service Status | /service-status | Live system status |
| SLA Policy | /sla-policy | Our service commitments |
| Customer Portal | /customer-portal | Manage your account |
| Contact Support | /contact-support | Reach our team |

**Partners** → `/partners`
| Label | Href | Subtext |
|---|---|---|
| AWS Partner | /aws-partner | Certified AWS delivery |
| Technology Partners | /technology-partners | Our integration network |
| Referral Program | /referral-program | Earn for referrals |
| Agency Partnership | /agency-partnership | White-label engineering |
| Reseller Program | /reseller-program | Resell our services |

---

## ⭐ Recommended navigation additions (NEW — not on the old site)

Sentrize is targeting enterprise growth. When building the new template, add an **Enterprise** mega-menu group (suggested position: after "Solutions") and an **Enterprise** footer column. The five service pages below already exist with full content (see `services/` folder); the hub page is new (see `pages/enterprise.md`).

**Enterprise** → `/enterprise` (new hub page)
| Label | Href | Subtext |
|---|---|---|
| Enterprise Software | /enterprise-software | Mission-critical systems, governed |
| Digital Transformation | /digital-transformation | Legacy to cloud-native, safely |
| Custom CRM Development | /crm-development | A CRM shaped to your process |
| ERP Development | /erp-development | One source of truth for operations |
| Cybersecurity Services | /cybersecurity | Assess, harden, monitor |

**Enterprise footer column:** [Enterprise Software](/enterprise-software) · [Digital Transformation](/digital-transformation) · [CRM Development](/crm-development) · [ERP Development](/erp-development) · [Cybersecurity](/cybersecurity)

---

## Footer

**Brand blurb:** Engineering, scaling, and operating digital products and cloud infrastructure for startups, SaaS companies, and enterprises.

**Social links:**
- LinkedIn — https://www.linkedin.com/company/sentrize
- GitHub — https://github.com/sentrize
- X — https://x.com/sentrize

**Footer columns:**

*Products:* [Software Development](/software-development) · [SaaS Development](/saas-development) · [Web Applications](/web-applications) · [Mobile Applications](/mobile-applications) · [API Development](/api-development) · [AI & Automation](/ai-automation)

*Solutions:* [DevOps](/devops) · [Cloud Infrastructure](/cloud-infrastructure) · [AWS Consulting](/aws-consulting) · [Kubernetes](/kubernetes) · [CI/CD Automation](/cicd-automation) · [Security & Compliance](/security-compliance)

*Company:* [About](/about) · [Team](/team) · [Careers](/careers) · [Partners](/partners) · [Portfolio](/portfolio) · [Success Stories](/success-stories) · [Contact](/contact)

*Resources:* [Blog](/blog) · [Documentation](/documentation) · [Case Studies](/case-studies) · [Knowledge Base](/knowledge-base) · [Service Status](/service-status) · [FAQ](/faq)

**Footer bottom bar:** © 2026 Sentrize. All rights reserved. · [Privacy](/privacy-policy) · [Terms](/terms-of-service) · [SLA](/sla-policy)

---

## Shared content blocks (reused on many pages)

### Shared CTA block (`components/Cta.tsx`)
Pages may override heading/text; these are the defaults. Referenced in page files as "(Shared CTA block — see site-config.md)".

- **Heading:** Ready to build your next product with confidence?
- **Text:** Tell us what you're building and we'll map the fastest reliable path to production.
- **Buttons:** [Start a project](/contact) · [View pricing](/pricing)
- Optional small note line under buttons (page-specific when present).

### Shared metrics strip (`components/Metrics.tsx` + `lib/content.ts` METRICS)
| Number | Label |
|---|---|
| 500+ | Projects delivered |
| 99.99% | SLA-backed uptime |
| 98% | Client retention |
| 50+ | Engineers & specialists |
| 23+ | Countries served |
| 4.9/5 | Average client rating |
| 12+ | Years in operation |
| 24/7 | Support coverage |

### Company values (`lib/content.ts` VALUES)
| Value | Description |
|---|---|
| Engineering Rigor | Production-grade discipline — architecture, testing, and code review — on every system we ship. |
| Radical Ownership | Engineers own outcomes end to end, from first commit to the on-call page at 3 a.m. |
| Transparent Partnership | Clients see roadmaps, metrics, and trade-offs in real time, not polished status theatre. |
| Security by Default | Least privilege, encryption, and auditability designed in from the first line of code. |
| Pragmatic Innovation | We adopt new technology when it measurably improves reliability, speed, or cost. |
| Continuous Improvement | Every incident and release is data that makes the next one better. |

### Company milestones (`lib/content.ts` MILESTONES)
| Year | Milestone |
|---|---|
| 2014 | Sentrize is founded, delivering its first custom platform builds for early SME clients. |
| 2016 | Crossed 50 delivered projects and established a dedicated DevOps practice. |
| 2017 | Became an AWS Partner and opened a second delivery region across new time zones. |
| 2019 | Achieved ISO 27001 and SOC 2 Type II, formalizing our enterprise security posture. |
| 2020 | Scaled to a fully distributed delivery model spanning multiple regions without missing SLAs. |
| 2022 | Reached AWS Advanced Tier Partner status and surpassed 300 projects at 99.99% uptime. |
| 2024 | Launched a dedicated AI & Automation practice across client products and pipelines. |
| 2026 | Surpassed 500 projects across 23+ countries with 50+ specialists and 98% retention. |

### Certifications (`lib/content.ts` CERTS)
| Certification | Description |
|---|---|
| ISO 27001 | Certified information security management governing how we handle and protect client data. |
| SOC 2 Type II | Independently audited controls for security, availability, and confidentiality. |
| ISO 9001 | Certified quality management for consistent, repeatable engineering and delivery. |
| AWS Advanced Tier | Validated AWS expertise across architecture, migration, and managed operations. |
| GDPR Compliant | Data handling, processing, and retention aligned with EU data protection law. |
| HIPAA-Ready | Engineering controls and infrastructure prepared for protected health workloads. |

### Stock photography (`lib/content.ts` PHOTOS)
Unsplash images used across pages, URL pattern:
`https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=<w>&h=<h>&q=80`

| Key | Photo id |
|---|---|
| network | 1451187580459-43490279c0fa |
| team | 1522071820081-009f0129c71c |
| officeteam | 1600880292203-757bb62b4baf |
| collab | 1531482615713-2afd69097998 |

---

## Full page inventory (from sitemap.ts, with SEO priority)

| Priority | Pages |
|---|---|
| 1.0 | `/` (homepage) |
| 0.9 | /services, /solutions, /pricing, /marketplace, /aws |
| 0.8 | All 24 service/solution detail pages (see `services/` folder): /software-development, /saas-development, /web-applications, /mobile-applications, /api-development, /ai-automation, /ui-ux-design, /devops, /cloud-infrastructure, /aws-consulting, /kubernetes, /cicd-automation, /managed-hosting, /infrastructure-monitoring, /security-compliance, /cloud-migration, /docker-containerization, /infrastructure-as-code, /managed-devops, /digital-transformation, /enterprise-software, /crm-development, /erp-development, /cybersecurity (note: the last five are in the sitemap but not linked from the main navigation) |
| 0.7 | /about, /team, /careers, /partners, /portfolio, /success-stories, /testimonials, /contact |
| 0.6 | /blog, /case-studies, /white-papers, /documentation, /knowledge-base, /api-docs, /faq, /help-center |
| 0.5 | /aws-partner, /technology-partners, /referral-program, /agency-partnership, /reseller-program, /contact-support, /open-ticket, /service-status, /customer-portal |
| 0.3 | /privacy-policy, /terms-of-service, /sla-policy |

### NEW pages added for the new template (not on the old site)

| Route | Content file | Purpose |
|---|---|---|
| /enterprise | `pages/enterprise.md` | Enterprise hub page anchoring the new Enterprise nav group |
| /blog/&lt;slug&gt; | `blog/` folder (10 articles) | Full article detail pages — the old site's blog cards had nowhere to link |
| /case-studies/&lt;slug&gt; | `case-studies/` folder | Full case-study detail pages — the old cards had nowhere to link |
