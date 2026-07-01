# Sentrize Website Review — Why it reads as "AI-generated / non-enterprise," and what to change

**Site reviewed:** http://sentrize.com/
**Date:** 1 July 2026
**Method:** Full-page desktop + mobile screenshots, raw HTML of the homepage and 9 sub-pages, a computed design-token dump (colors, fonts, sizes, radii), and a 9-agent specialist review (color, typography, layout, copy/IA, trust, technical/SEO, accessibility, "AI-tells," and a benchmark against real consultancies). 79 findings in total; the evidence files are in `/assets` and `findings-raw.json`.

---

## The blunt verdict

**Your critics are right — and the reason is not your taste in colors.** The site reads as fake/AI-generated within a couple of seconds for two hard reasons that no amount of visual polish will fix:

1. **The entire front-end is a lifted Verifone.com template** (Verifone is a payments-terminal company). The brand font is literally `Verifone-Sans`, the stylesheets are Verifone's (`chrome.css`, `enterprise.css`, `en0000000000000812.css`, `theme-teal.css`), the header uses Verifone's `sh__nav` class system, the card icons are Verifone's payment-terminal glyphs (`data-iconname="TERMINAL_ENCRYPTION"`, `HARDWARE_HEALTH`, `ESTATE_MANAGEMENT`…), and there's still a `beyond-payments-image.png` and a leftover audio "volume-booster" widget in the code. **A firm that sells custom software is shipping a cloned payments-company website.** Any technical buyer who opens DevTools sees this in 10 seconds — and it destroys the whole pitch.

2. **The "proof" is fabricated, and provably so.** The team page uses **Unsplash stock photos as headshots**; the same person ("Sofia Marchetti") is listed as both your **CEO** and, separately, as a **customer giving a testimonial** ("VP Engineering, Payments"); testimonial authors change surname between pages (Priya **Venkataraman** vs **Venkatesan**; Marcus **Hale** vs **Lindqvist**); the client logo wall shows **Cisco, Bitdefender, ViewSonic, EaseUS, Mondly, 123FormBuilder** but no case study names any of them; the contact phone **+1 (628) 555-0137** is in the **555-01xx range reserved for movies**; and certifications (SOC 2, ISO 27001, HIPAA) are hand-typed monograms with no verification.

Everything else — the three different taglines, the round-number stats, the green-vs-cyan-vs-blue color clash, the hairline-thin headings — reinforces the impression, but **#1 and #2 are the ones that make it read as "not a real company."** Fix those first.

The good news: almost all of this is cheap to fix, because the problems are **honesty and originality**, not the underlying service offering.

---

## Top 6 root causes (in priority order)

| # | Root cause | Severity | Why it kills credibility |
|---|-----------|----------|--------------------------|
| 1 | **Stolen Verifone template** — font, CSS, icons, leftover payments widgets | 🔴 Critical | Proves the site was cloned, not built. Fatal for a firm selling engineering + UI/UX. Also a trademark/font-licensing exposure. |
| 2 | **Fabricated proof** — stock-photo "team," contradictory testimonials, borrowed logos, fake phone, unverifiable certs | 🔴 Critical | 90 seconds of cross-checking exposes it. Enterprise procurement fails instantly. Real legal risk (false advertising, trademark, misrepresenting SOC 2/HIPAA). |
| 3 | **No single positioning** — 3–4 different taglines | 🔴 Critical | A real brand repeats ONE line everywhere. Multiple taglines = "generated in separate passes, nobody owns the brand." |
| 4 | **Unverifiable round-number stats** — 500+ / 120+ / 40+ / 99.99% | 🟠 High | Suspiciously clean numbers with zero named proof read as invented — worse than claiming nothing. |
| 5 | **Palette chaos** — green hero vs cyan/teal blocks vs 3 different blues | 🟠 High | Four competing accent hues = "nobody owns the color." Signature of a half-recolored template. |
| 6 | **Thin, inconsistent design system** — every heading weight-300, 11 border radii, fractional font sizes | 🟠 High | "Thin = premium" is a template default; 11 radii + 13.12px sizes = no design tokens = stitched-together. |

---

## What gives it away, in detail

### 🔴 1. It's a lifted Verifone template (the #1 tell)

Concrete evidence in the code:

- **Font:** `Verifone-Sans-Regular` is used **550 times** (plus `-Medium`, `-SemiBold`, `-Bold`). This is Verifone's proprietary corporate typeface — not licensed for you, so for many visitors it silently fails to load and falls back to plain sans-serif (your "brand font" isn't even rendering reliably).
- **Stylesheets:** `/assets/css/chrome.css`, `enterprise.css`, `en0000000000000812.css` (a serialized Verifone build hash), `theme-teal.css`, `style.css` — pasted on top of a modern Next.js/turbopack app shell. A React 18 streaming site wrapping a jQuery-era CMS theme it doesn't own.
- **Icons:** the service/benefit card icons are base64-embedded SVGs from Verifone's "Blink" terminal UI kit — `data-iconname="TERMINAL_ENCRYPTION"`, `HARDWARE_HEALTH`, `ESTATE_MANAGEMENT`, `FIELD_SERVICES`, `NETWORK_MANAGEMENT_SYSTEM`. These are icons for managing **physical card-payment terminals**. One even has a baked-in typo: `OTHER_POLCICIES`.
- **Leftover junk in the DOM:** a jQuery ColorBox lightbox scaffold, a `#volume-booster-visusalizer` audio widget (misspelled), an empty Google Tag Manager comment block, and a hero asset named `beyond-payments-image.png` ("Beyond Payments" is Verifone's slogan).
- **Class taxonomy:** `sh__nav`, `sh__mega`, `sh__brand`, `sf__grid`, `introMobileRetail`, `modernCommerce` — retail/commerce IDs irrelevant to a dev agency.

**Why it reads amateur/AI:** the misspelled `OTHER_POLCICIES` and `bitdefenderr-white.png` (double-r) prove nobody read what they copied. For a company whose own copy says it builds *"custom software… not a generic template forced into shape,"* running on a visibly borrowed template is a self-refuting contradiction.

### 🔴 2. The proof is fabricated

- **"Our Team":** 6 named execs, all with **Unsplash stock headshots** (including `photo-1494790108377`, one of the most-reused stock portraits on the web). No LinkedIn, no verifiable identities. A "founded 2014, 120+ engineers" firm with reverse-image-searchable faces.
- **Testimonials contradict each other across pages:** `Priya Venkataraman` (testimonials) vs `Priya Venkatesan` (case-studies); `Marcus Hale` (testimonials) vs `Marcus Lindqvist` (case-studies). And **`Sofia Marchetti` is your CEO on the team page but also appears as an external customer testimonial** ("VP Engineering, Payments"). No real company quotes its own founder as a third-party client.
- **12 testimonials, zero verifiable:** every attribution is a generic role + generic industry ("CTO · E-commerce platform", "CISO · Healthtech"), no company names, no photos, and a suspiciously even one-name-per-continent diversity spread — the hallmark of an AI-generated persona list.
- **Borrowed logo wall:** Cisco, Bitdefender, ViewSonic, EaseUS, Mondly, 123FormBuilder — all linking to `/success-stories`, a page that **never mentions any of them**. Cisco and Bitdefender are themselves security vendors; that's an implausible, incoherent client roster grabbed for visual credibility.
- **Fake phone number:** `+1 (628) 555-0137`. The `555-01xx` block is reserved for fiction (films/TV) — it's a placeholder that was never replaced. It's also a US number on a claimed Sydney/London/Singapore HQ.
- **Unverifiable trust badges:** SOC 2 Type II, ISO 27001, HIPAA, AWS Advanced Tier rendered as hand-typed two-letter monograms ("S2", "AA") with no issuer badge or verification link. Awards from unrecognizable bodies ("Asia-Pacific Cloud Excellence Awards", "Global IT Services Council").
- **No legal entity:** no ABN/ACN/company number anywhere, despite claiming a Sydney HQ (Australian businesses are expected to display an ABN).

> ⚖️ **This is not just a design problem — it's legal exposure.** Displaying Cisco/Bitdefender marks to imply a client relationship you can't prove is trademark infringement and false/deceptive advertising (and, given the Sydney HQ claim, exposure under Australian Consumer Law). Claiming SOC 2 / ISO 27001 / HIPAA without holding them is a compliance misrepresentation. **Remove all of it until you can substantiate it.**

### 🔴 3. No single positioning — 3–4 taglines at once

In the homepage `<head>` alone:
- `<title>`: **"Build & Scale Your Software With Confidence"**
- `og:title` / `twitter:title`: **"Engineering That Scales Your Business"**
- `og:image:alt`: **"Intelligent Software. Limitless Impact."**
- and the on-page `<h1>` is a fourth: **"We build the software and cloud platforms your business runs on."**

Your browser tab, your Google result, and your LinkedIn share preview would each show a *different* promise. A real brand repeats one line everywhere.

### 🟠 4. Round-number stats with no proof

`500+ projects`, `120+ engineers`, `40+ countries`, `99.99% uptime`, `98% retention`, `4.9/5 rating` — every figure is a suspiciously clean round number, repeated verbatim on six pages, with no named client, no date, and no source. `99.99% uptime` is stated with no live status page (despite a `/service-status` nav link). This is the exact distribution an LLM emits when asked to "make it sound impressive."

### 🟠 5. Color: four accents fighting

There is no palette — there are three unrelated theme colors bolted together:
- **Emerald green** hero gradient (`#03c37e`→`#04c783`)
- **Cyan/teal** blocks (`#22d3ee`, `#0891b2`)
- **Three different blues** (`#0a84ff` skip-link/CTA, `#004aef` logo, `#3474ff` links)

The identical **"Start a project"** button is **blue in the header but cyan in the hero** — same words, two colors, one screen. On top of that the background flips through ~9 regimes (black → green → white → black → cyan → dark → light → cyan → navy), and white text on the `#22d3ee` cyan bands fails WCAG contrast (1.81:1).

### 🟠 6. Typography & system inconsistency

- **Every heading is font-weight 300 (Light)** — including the 52px H1. The biggest words on the page are the thinnest. There's no weight contrast, so nothing feels load-bearing. (The H1's CSS class is even named `fontBold` but renders at 300 — a broken token mapping.)
- **Fractional font sizes** — `13.12px` (used 53×), `15.36px`, `15.2px`, `14.4px` — are rem-to-px conversions inherited wholesale from the template. No designer picks 13.12px.
- **11 different border-radius values** (11, 32, 16, 10, 18, 30, 23, 999px, 50%…) with no scale. A disciplined system uses 2–3.
- **Hard-coded `<br>` line breaks in headings** that strand orphan words ("model", "team") on mobile.

### 🟠 7. Copy: interchangeable AI-cadence filler

"Engineering partner, not a vendor," "we don't just ship code and walk away," "built to scale," "long-term partnership," "Orchestration done right," "We run it, you build it." Every phrase could sit on any of ten thousand agency sites. The closing CTA **"Ready to build your next product with confidence?"** is duplicated verbatim on the homepage, pricing, about, and software-development pages. Heavy mid-sentence em-dashes and the six-noun values grid ("Engineering Rigor, Radical Ownership, Transparent Partnership…") are recognizable LLM tells.

### 🟠 8. Information architecture is over-scaffolded

7 mega-menus, **49 destinations**. "Products" and "Solutions" both just list services (an agency calling services "products" is a category error). The **entire "Pricing" mega-menu — five items — all point to the same `/pricing` URL**. "Partners" appears twice. It's the surface area of a large SaaS platform faked over a thin site.

### 🟠 9. Accessibility & mobile are broken

- **Skip-link points to `#main`, which doesn't exist** — it silently does nothing (no `<main>` landmark at all).
- **The mobile hamburger opens nothing** — `aria-expanded` never toggles and there's no mobile-menu markup. On a phone you cannot navigate the site beyond the homepage.
- **Primary body text `#5b5b6b` fails contrast** on the dark cards (~2.5:1), and `#9a9aad` fails on white (2.76:1).
- **One lone `<h3>`** on the whole page; every stat/card title is a non-semantic `<div>`. Screen-reader users get no page outline.
- **24 identical "Learn more" links** (mostly to the same `/services` URL) — a WCAG link-purpose failure.
- The 6,215px desktop page becomes a **~9,800px endless mobile scroll** of near-identical dark cards.

### 🟠 10. Technical / SEO defects (the product demo *is* your code)

- **Served over plain HTTP** while the canonical says `https://www.sentrize.com` — a scheme + host + trailing-slash mismatch that suppresses indexing. A firm selling "Cloud Migration" and "Security & Compliance" with no HTTPS is self-refuting.
- Pricing page has **no canonical** and its `og:url` points at the homepage.
- **No JSON-LD structured data** anywhere.
- **Empty GTM shell**, malformed cache-bust query strings (`?favicon.2elyky-un3itm.ico`), no image lazy-loading (31 eager images), ~15 images with no `alt`.
- **Broken heading order** (pricing page goes H1 → H3, skipping H2).

---

## What credible firms do (benchmark: Thoughtworks, Netguru, STX Next)

| Convention | Credible firms | Sentrize today |
|-----------|----------------|----------------|
| Positioning | ONE line, repeated everywhere (STX Next: "AI-First… Built on Python Excellence") | 3–4 conflicting taglines |
| Proof | **Named** clients + metrics (Netguru: "IKEA / OLX / Żabka — 21% higher conversion") | Anonymous studies, borrowed logos, no names |
| Team | Real photos, real LinkedIn links | Unsplash stock faces |
| Design system | Bespoke, self-hosted licensed font, disciplined palette | Cloned Verifone theme + font, 4 accents |
| Stats | Tied to a founding date + named client | Unsourced round numbers |

---

## Prioritized action plan

### P0 — Legal / trust (do this week; some of it is exposure, not just optics)
1. **Remove every third-party client logo** (Cisco, Bitdefender, ViewSonic, EaseUS, Mondly, 123FormBuilder) unless you have written permission + a matching named case study.
2. **Remove all fabricated testimonials and the stock-photo team page.** Ship *zero* testimonials rather than fake ones. Show your 2–3 real founders with real photos + LinkedIn, or an honest "small senior team" statement.
3. **Remove unverifiable certifications and awards** (SOC 2 / ISO 27001 / HIPAA / AWS Advanced Tier) until you hold them and can link to the verification record.
4. **Replace the fake phone number** with a real, answerable line whose country matches your actual HQ. Add your registered legal entity + **ABN/ACN** to the footer.
5. **Cut the round-number stats** to only what you can defend, and source each one.

### P1 — De-Verifone the build (removes the #1 "cloned" tell)
6. **Strip every Verifone artifact.** Grep the codebase for `verifone`, `sh__`, `chrome.css`, `enterprise.css`, `en0000000000000812`, `theme-teal`, `beyond-payments`, `blink-icon`, `TERMINAL_ENCRYPTION`, `volume-booster`, `colorbox` — target **zero hits** before relaunch.
7. **Self-host a properly licensed font** (Inter or IBM Plex Sans are free and read as engineering-credible; Söhne/Aeonik if you want paid). Delete all `Verifone-Sans` references.
8. **Replace the payment-terminal icons** with a single consistent software/cloud icon set (server, container, pipeline, shield, `</>`).

### P2 — Brand & design system (the "looks generated" polish)
9. **Pick ONE positioning line** and use it verbatim in `<title>`, `og:title`, `twitter:title`, and the `<h1>`. (Recommended: *"We build the software and cloud platforms your business runs on"* — concrete and hard to copy. Kill "Intelligent Software. Limitless Impact.")
10. **Pick ONE accent color.** Commit to teal `#0891b2` (with `#22d3ee` only as a hover tint); delete `#0a84ff`, `#004aef`, `#3474ff` and the green hero gradient. Define it as `--accent` / `--accent-hover` CSS variables so nothing drifts.
11. **Collapse the surface palette** to white + one neutral + one dark; stop the 9-band whiplash; never use `#22d3ee` as a full-bleed background with white text.
12. **Set heading weights to 600–700**, body to 400. Darken muted text to pass WCAG AA. Rebuild the type scale on whole pixels (14/16/20/24/32/44/56). Remove `<br>` from headings; use `max-width` + `text-wrap: balance`.
13. **Collapse to a 3-value radius scale** (10px controls / 16px cards / 999px pills).
14. **Replace stock imagery** with screenshots of real work, architecture diagrams, or bespoke brand graphics. Remove the fake play button.

### P3 — Copy, IA, technical
15. **Rewrite copy with specifics** — numbers, mechanisms, real outcomes. Kill "with confidence," "partner not a vendor," and the duplicated CTA. Make each closing CTA page-specific.
16. **Cut the nav to ~5 items** (Services, Cloud & DevOps, Work, Pricing, Company). Every link must resolve to a real, unique page. Fix the five-identical-links Pricing menu.
17. **Serve over HTTPS**, 301-redirect apex/http to one canonical host, self-reference canonicals per page, add HSTS.
18. **Fix accessibility:** add a real `<main id="main">`, build a working mobile menu with `aria-controls`, promote card titles to headings, give "Learn more" links unique accessible names, add a visible `:focus-visible` ring, lazy-load images, fix alt text.
19. Add **Organization + Service/Offer JSON-LD**; remove empty GTM; fix favicon query strings.

---

## Bottom line

The site doesn't look "non-professional" because of bad taste — it looks fake because it **is** assembled from someone else's template and populated with invented proof. No enterprise buyer will sign with a vendor whose own website is a cloned payments site staffed by stock photos. **Rebuild on an original, honest foundation** (P0 + P1), then the palette/typography polish (P2) will actually land. A smaller, truthful site — one real positioning line, 2–3 real people, one or two genuinely named case studies, one accent color — will out-convert this every time.

*Evidence files: `/assets` (screenshots, saved HTML, `design-tokens.json`) · full 79-finding data: `findings-raw.json`.*
