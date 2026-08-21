# Sentrize — Full Content Export

A complete inventory of every page on www.sentrize.com, extracted from the Next.js codebase so the site's content can be rebuilt on a new template (by hand or with an AI assistant) — plus newly written content to fill the gaps the old site had, in support of Sentrize's enterprise growth plans.

## What's in here

| Path | Contents |
|---|---|
| `site-config.md` | Brand, default SEO/OG metadata, full header navigation (all 7 mega-menu groups **plus a recommended new Enterprise group**), footer columns + social links, shared CTA block, shared metrics strip, company values/milestones/certifications, full page inventory with SEO priorities |
| `pages/` | 36 files — one per page: homepage, about, team, careers, services, solutions, pricing, marketplace, faq, contact, all support/legal/partner pages, the standalone `/aws` landing page, the 404 page, and the **new `/enterprise` hub page** |
| `services/` | 24 files — one per service/solution detail page (route = file name, e.g. `devops.md` → `/devops`), including the five enterprise services |
| `blog/` | 10 files — **full blog articles** (route `/blog/<slug>`), newly written; the old site's blog cards had no article pages |
| `case-studies/` | 6 files — **full case-study detail pages** (route `/case-studies/<slug>`), newly written; the old cards had no detail pages |

**Total: 76 content files covering every existing route plus the new pages.**

## Extracted vs. newly written

- **Extracted (verbatim):** everything in `services/`, `site-config.md`, and `pages/` except the items below. Copy is word-for-word from the old site — nothing paraphrased or invented.
- **Newly written for the migration** (each marked with a `Status: NEW CONTENT` / `NEW PAGE` line at the top):
  - `pages/enterprise.md` — new Enterprise hub page anchoring the enterprise positioning
  - `blog/*` — 10 full articles expanded from the old site's real titles/excerpts/dates/authors
  - `case-studies/*` — 6 full case studies; every metric and client quote from the old cards preserved verbatim, narrative written around them
  - `pages/privacy-policy.md` and `pages/terms-of-service.md` — rewritten from the old placeholder templates into complete enterprise-grade documents (privacy@sentrize.com / legal@sentrize.com); each ends with a list of decisions for legal counsel

## File format

Every page file follows the same structure so an AI can map it onto a new template mechanically:

```
# Page: <Name>
- **Route:** /<path>
- **SEO Title:** ...
- **SEO Description:** ...

## Section 1 — <purpose: Hero / Features / Pricing / FAQ / CTA ...>
(verbatim headings, body copy, bullet lists, CTAs as [label](href),
 form fields, image URLs + alt text, icon: <name> markers)
```

- Sections appear in the **exact order** they render on the live site.
- "(Shared CTA block — see site-config.md)" / "(Shared metrics strip — see site-config.md)" markers mean the page renders the site-wide block defined in `site-config.md` (page-specific overrides are noted where they exist).
- `icon: <name>` markers name the original icon; map them to the new template's icon set.

## Suggested restore prompt for your AI

> "Rebuild the page described in `<file>.md` using the new template's components. Start from `site-config.md` for the header, footer, and default SEO. Keep every heading, paragraph, list item, CTA label, and link target exactly as written — adapt only layout/styling to the new template. Preserve section order and per-page SEO title/description."

Work through `site-config.md` first (header/footer/SEO — include the new Enterprise nav group), then `pages/homepage.md`, then the rest. Wire the blog listing cards to `/blog/<slug>` and the case-study cards to `/case-studies/<slug>` now that detail pages exist.

## Image assets

Two kinds of images are referenced:

1. **Local files** (paths starting `/branding/...`, `/assets/images/...`, `/assets/aws/...`, `/og.png`) — copy these folders from this repo's `public/` directory into the new template's public/static folder, or replace them with the new template's own imagery.
2. **Unsplash URLs** (`https://images.unsplash.com/photo-...`) — hotlinked stock photos; they work as-is anywhere, or swap for template imagery. New blog articles and case studies have no images assigned yet — pick from the new template's style.

## ✅ Old-site gaps now fixed in this export

1. **Legal placeholder pages → rewritten.** Complete privacy policy and terms of service; remaining counsel decisions (governing law, liability cap, legal entity name, DPA template) are itemized at the bottom of each file.
2. **Missing blog/case-study detail pages → written.** 10 articles + 6 case studies, consistent with the old cards' titles, metrics, dates, and quotes.
3. **Five orphan enterprise services → promoted.** `/enterprise-software`, `/digital-transformation`, `/crm-development`, `/erp-development`, `/cybersecurity` get a recommended Enterprise nav group + footer column (see site-config.md) and a new `/enterprise` hub page.

## ⚠️ Still to decide during migration

1. **Referral/reseller numbers.** The copy says "competitive referral commission" and "reseller margin" but no actual % exists anywhere. Decide real figures (or keep the vague wording).
2. **Homepage leftover link.** The "Strengthen security & compliance" roadmap card's "Learn more" points to `https://www.avangatenetwork.com/` — a leftover from a previous template. Point it somewhere real (e.g. `/security-compliance`).
3. **AWS page nav placeholders.** The `/aws` page's inline mega-menu links are all `#` in the source. The intended nav structure is captured in `pages/aws.md` under "Navigation (AWS page)".
4. **Portfolio items** still link to `/contact` (no detail pages, by design). Optionally point matching items at the new case-study pages.
5. **Engagement models "Most popular" badge** exists on all three homepage cards but is hidden by CSS; "Dedicated teams" carries the intended-highlight class. Pick one to highlight in the new template.
6. **SEO continuity:** keep the same routes in the new template (or set up 301 redirects) — the full route list is in `site-config.md`. Add the new routes (`/enterprise`, `/blog/<slug>`, `/case-studies/<slug>`) to the new sitemap.
7. **Legal counsel review** of the rewritten privacy policy and terms before publishing (decision list at the bottom of each file).
