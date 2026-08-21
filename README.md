# Sentrize — www.sentrize.com

The Sentrize marketing site: a Next.js (App Router) port of the company's premium
dark template, populated with the full Sentrize content inventory.

## Stack

- **Next.js 16 / React 19** — App Router, fully static output (all routes prerendered)
- **Template assets** — the original theme's CSS, fonts (Manrope self-hosted,
  JetBrains Mono via Google Fonts), images, and animation runtime
  (GSAP + ScrollTrigger + SplitText, Swiper, Webflow interactions) served from `public/assets/`
- **TypeScript** throughout

## Routes (14)

`/` · `/services` · `/solutions` · `/enterprise` · `/pricing` · `/about` · `/careers`
· `/partners` · `/case-studies` · `/blog` · `/contact` · `/privacy-policy`
· `/terms-of-service` · `/sla-policy`

## How it fits together

- `app/<route>/page.tsx` — one server component per page, converted 1:1 from the
  finished template pages (markup, classes, and animations preserved), each with
  its own `metadata` export (title, description, canonical).
- `components/SiteHeader.tsx` / `SiteFooter.tsx` — shared chrome (announcement
  banner, mega-menu navbar, footer with the giant wordmark + scroll spotlight).
- `components/TemplateScripts.tsx` — boots the template's animation runtime
  **after** React hydration: inline scripts ship as inert `<script type="text/template">`
  and are re-executed in document order, then the vendor files load strictly
  sequentially (jQuery → Webflow chunks → GSAP + plugins). Internal navigation
  uses plain `<a>` full-page loads so the runtime re-initializes per page,
  exactly like the original template.
- `app/sitemap.ts` / `app/robots.ts` — generated sitemap + robots.
- `content-export/` — the complete Markdown content inventory of the site
  (every page, 24 service detail pages, 10 blog articles, 6 case studies).
  Source of truth for adding the remaining detail pages.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static production build
```

## Known follow-ups

- Blog article / case-study detail routes: cards are stubbed with
  `data-todo="article"` / `data-todo="case-study-detail"` + slugs; full content
  is ready in `content-export/blog/` and `content-export/case-studies/`.
- Forms (contact, newsletter) render with client-side validation but post to `#` —
  wire a backend or form service before launch.
- Legal pages need counsel review (open decisions are listed at the bottom of
  each page's source content in `content-export/`).
- The old pre-template site is preserved on the `old-sentrize-aug-26` branch.
