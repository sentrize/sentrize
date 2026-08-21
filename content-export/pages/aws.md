# Page: AWS (standalone Sentrize Web Services landing page)
- **Route:** /aws
- **Source:** app\aws\page.tsx, app\aws\layout.tsx, app\aws\AwsInteractions.tsx, app\aws\StoryCarousel.tsx, components\awsnav\nav-config.ts, components\awsnav\UtilityBar.tsx
- **SEO Title:** Cloud Computing Services — Sentrize Web Services (absolute title from app\aws\layout.tsx — bypasses the root "%s | Sentrize" template)
- **SEO Description:** Sentrize Web Services offers reliable, scalable, and affordable cloud computing services. Get started for free.

Design note (from source comments): recreation of the aws.amazon.com homepage layout in AWS's own design language — squid-ink global nav, orange call-to-action, get-started card deck, customer-story carousel, industry grid, global-infrastructure band and mega-link footer — rendered for Sentrize's cloud offering. All imagery lives in /public/assets/aws. Brand wordmark is a Sentrize lockup styled like the AWS logo ("sentrize" in white over an orange smile-arrow; recreated, not the Amazon trademark; SVG aria-label: "Sentrize Web Services").

AwsInteractions.tsx is behavior-only (hamburger toggles the mobile nav) — no visible content.

## Navigation (AWS page)

### A. awsnav components (components\awsnav\nav-config.ts + UtilityBar.tsx)

Note: these are the dedicated awsnav header components (nav data ported 1:1 from the rebuilt Sentrize site at E:\aws, src/config/brand.ts). app\aws\page.tsx itself renders its own inline nav (captured in B below) and does not import these — flagged for the migration.

Brand: name "Sentrize", fullName "Sentrize".

**Utility bar links (UtilityBar.tsx / utilityNav):**
- Contact us → /contact
- Help Center → /help-center
- Service Status → /service-status
- Marketplace → /marketplace (with chevron)
- My account (icon-only link, `icon: user`, aria-label "My account") → /customer-portal

**Menu groups (navGroups) — each group has a label, a top link with label, a blurb, and links (label / href / description / icon):**

1. **Products** — top link: [View all services](/services)
   - Blurb: Custom software, SaaS, web, mobile, APIs, and AI — engineered end to end by senior teams.
   - Software Development → /software-development — Custom systems built to last — `icon: code`
   - SaaS Development → /saas-development — Multi-tenant products, MVP to scale — `icon: layers`
   - Web Applications → /web-applications — React & Next.js front ends — `icon: globe`
   - Mobile Applications → /mobile-applications — iOS & Android, one codebase — `icon: mobile`
   - API Development → /api-development — REST & GraphQL, built to integrate — `icon: function`
   - AI & Automation → /ai-automation — Practical AI in your product — `icon: ai`
   - UI/UX Design → /ui-ux-design — Build-ready interface design — `icon: sparkles`

2. **Solutions** — top link: [View all solutions](/solutions)
   - Blurb: Cloud-native infrastructure, designed, automated, and operated with discipline.
   - DevOps Services → /devops — Automate build, deploy, monitor — `icon: rocket`
   - Cloud Infrastructure → /cloud-infrastructure — Resilient, cost-aware cloud — `icon: cloud`
   - AWS Consulting → /aws-consulting — Well-Architected on AWS — `icon: server`
   - Kubernetes → /kubernetes — Orchestration done right — `icon: table`
   - CI/CD Automation → /cicd-automation — Ship safely, many times a day — `icon: bolt`
   - Managed Hosting → /managed-hosting — We run it, you build it — `icon: storage`
   - Infrastructure Monitoring → /infrastructure-monitoring — Observability by default — `icon: gauge`
   - Security & Compliance → /security-compliance — Secure from the first commit — `icon: shield`
   - Cloud Migration → /cloud-migration — Move without the downtime — `icon: arrow`
   - Docker Containerization → /docker-containerization — Portable, reproducible workloads — `icon: layers`
   - Infrastructure as Code → /infrastructure-as-code — Terraform-managed environments — `icon: code`
   - Managed DevOps → /managed-devops — Your DevOps team, on tap — `icon: support`

3. **Company** — top link: [About Sentrize](/about)
   - Blurb: A global engineering firm built on rigor, ownership, and uptime — since 2014.
   - About Us → /about — Who we are
   - Our Team → /team — The people behind the work
   - Careers → /careers — Build with us
   - Partners → /partners — Our partner ecosystem
   - Portfolio → /portfolio — Selected work
   - Success Stories → /success-stories — Outcomes we've delivered
   - Testimonials → /testimonials — What clients say
   - Contact Us → /contact — Talk to engineering

4. **Pricing** — top link: [View pricing](/pricing)
   - Blurb: Transparent, role-based pricing with source-code ownership on every plan.
   - Development Plans → /pricing — Product & app engineering
   - DevOps Plans → /pricing — Automation & pipelines
   - Managed Cloud → /pricing — Fully operated infrastructure
   - Dedicated Team → /pricing — An embedded squad
   - Enterprise → /pricing — Custom, governed, at scale

5. **Resources** — top link: [Read the blog](/blog)
   - Blurb: Practical engineering notes on software, cloud, DevOps, and AI from our specialists.
   - Blog → /blog — Engineering notes
   - Documentation → /documentation — Guides & references
   - Case Studies → /case-studies — Detailed engagements
   - White Papers → /white-papers — In-depth technical reports
   - Knowledge Base → /knowledge-base — How-to articles
   - API Docs → /api-docs — Build on our APIs

6. **Support** — top link: [Visit the Help Center](/help-center)
   - Blurb: Find answers fast, or reach our team when you need a human. 24/7 for SLA clients.
   - Help Center → /help-center — Find answers fast
   - Open a Ticket → /open-ticket — Get hands-on help
   - Service Status → /service-status — Live system status
   - SLA Policy → /sla-policy — Our service commitments
   - Customer Portal → /customer-portal — Manage your account
   - Contact Support → /contact-support — Reach our team

7. **Partners** — top link: [Explore partnerships](/partners)
   - Blurb: Grow with a certified engineering partner — refer, white-label, or build on our stack.
   - AWS Partner → /aws-partner — Certified AWS delivery
   - Technology Partners → /technology-partners — Our integration network
   - Referral Program → /referral-program — Earn for referrals
   - Agency Partnership → /agency-partnership — White-label engineering
   - Reseller Program → /reseller-program — Resell our services

### B. Inline navigation rendered by app\aws\page.tsx

Skip link: "Skip to main content" → #aws-main

**Top utility bar (inline on the page):**
- Contact Us → #
- Support → #
- My Account → #
- English (region selector) → #

**Global navigation header:**
- Brand: Sentrize wordmark (SVG "sentrize" + orange smile-arrow) → /aws (aria-label: "Sentrize Web Services home")
- Mobile menu toggle button: ☰ (aria-label: "Open menu")
- Search input: placeholder "Search" (aria-label: "Search")
- Sign In → #
- Create an Account → # (primary button)

**Primary menu (mega-menu items — all links go to #):**

1. **Products**
   - Compute: Virtual Servers, Serverless Functions, Containers, Auto Scaling
   - Storage: Object Storage, Block Storage, File Systems, Backup
   - Databases: Relational, NoSQL, In-Memory, Data Warehouse
   - Networking: Virtual Cloud, Load Balancing, CDN, DNS
2. **Solutions**
   - By use case: Web Applications, Machine Learning, Data Lakes, High Performance Computing
   - By industry: Financial Services, Healthcare, Retail, Media & Entertainment
   - By organization: Startups, Enterprise, Public Sector, SMB
   - Migration: Cloud Migration, Hybrid Cloud, Modernization, Cost Optimization
3. **Pricing**
   - Understand pricing: How pricing works, Free Tier, Pricing calculator, Savings plans
   - Optimize costs: Cost management, Reserved capacity, Spot instances, Billing console
4. **Documentation**
   - Get building: Developer guides, API reference, SDKs & Tools, CLI reference
   - Learn: Tutorials, Architecture Center, Best practices, Whitepapers
5. **Learn**
   - Skill up: Training & Certification, Getting Started resources, Hands-on labs, Builder Center
   - Community: Developer community, Events & webinars, User groups, Blog
6. **Partner Network**
   - Find a partner: Partner solutions, Consulting partners, Technology partners, Marketplace
   - Become a partner: Join the network, Partner programs, Partner Central, Success stories

## Section 1 — Hero

- Eyebrow: re:Build 2026

# Build what's next in the cloud

The most complete cloud platform to build, run, and scale whatever you imagine — with the security, reliability, and global reach the world's most demanding workloads depend on.

Buttons:
- Get started for free → # (primary, large)
- Register for re:Build → # (ghost-light, large)

Hero image:
- URL: /assets/aws/hero-reinvent.png
- Alt: re:Build 2026 conference

## Section 2 — Get started (card deck)

## Get started with Sentrize Web Services

Whether you're building your first app or migrating a global platform, start here.

Cards (icons are unnamed inline SVGs; visual description noted):

1. **Create a free account** — `icon: (inline SVG — pencil/edit)`
   - Explore more than 100 services with the Free Tier and receive credits to build, test, and deploy your first workloads.
   - Link: Sign up for free → #
2. **Getting started** — `icon: (inline SVG — open book)`
   - Follow step-by-step tutorials and reference architectures to launch common workloads in minutes, not weeks.
   - Link: Explore tutorials → #
3. **Architecture Center** — `icon: (inline SVG — line chart)`
   - Adopt well-architected patterns for reliability, security, performance, and cost across every kind of workload.
   - Link: View patterns → #
4. **Talk to an expert** — `icon: (inline SVG — headset/support)`
   - Get architecture guidance, migration planning, and 24/7 operational support from our cloud specialists.
   - Link: Contact sales → #

## Section 3 — Customer stories (StoryCarousel)

## Powering what's next in every industry

Carousel (auto-advances every 6 seconds, pauses on hover; crossfading slides). Each slide has an image (alt=""), an industry tag, a title, body copy, and a "Read the story" button (→ #). Controls: Previous story (‹), Next story (›), dot tabs (aria-label "Choose story"; dots labeled "Story 1"–"Story 4").

Slide 1:
- Image: /assets/aws/story-adidas.png
- Tag: Retail & Consumer
- Title: Driving enterprise-wide transformation at global scale
- Body: A leading sportswear brand consolidated its platforms in the cloud, cutting release times and scaling seamlessly through peak demand.
- Button: Read the story → #

Slide 2:
- Image: /assets/aws/story-tapestry.png
- Tag: Retail & Consumer
- Title: Amplifying store-associate voices worldwide
- Body: A global fashion house unified customer and store data to personalize experiences across every channel and region.
- Button: Read the story → #

Slide 3:
- Image: /assets/aws/story-pinterest.png
- Tag: Digital & Media
- Title: Turning data into customer-winning campaigns
- Body: A high-traffic discovery platform runs machine learning at scale to serve billions of relevant recommendations every day.
- Button: Read the story → #

Slide 4:
- Image: /assets/aws/story-intuit.jpeg
- Tag: Financial Services
- Title: Building trusted financial products faster
- Body: A fintech leader modernized core systems to ship features quickly while meeting the highest bar for security and compliance.
- Button: Read the story → #

## Section 4 — Feature announcements

Feature 1:
- Image: /assets/aws/feature-graviton.jpg (alt: "")
- Tag: New — Compute
- Title: M9g instances are now generally available
- Body: Get the best price-performance for cloud workloads with our latest generation of custom-designed processors.
- Button: Learn more → #

Feature 2:
- Image: /assets/aws/feature-bundesliga.jpg (alt: "")
- Tag: Customer Story
- Title: How fans get closer to the world's game
- Body: Real-time match analytics powered by the cloud bring millions of supporters deeper into every moment of play.
- Button: Watch the story → #

## Section 5 — Industries grid

## Explore Sentrize for your industry

Purpose-built solutions and expertise for the way your industry works.

Industry tiles (each is a link → #, image alt=""):

1. Advertising & Marketing — /assets/aws/ind-advertising.png
2. Financial Services — /assets/aws/ind-financial.png
3. Games — /assets/aws/ind-games.png
4. Government — /assets/aws/ind-government.png
5. Healthcare & Life Sciences — /assets/aws/ind-healthcare.png
6. Manufacturing — /assets/aws/ind-manufacturing.png
7. Media & Entertainment — /assets/aws/ind-media.png
8. Telecommunications — /assets/aws/ind-telecom.png

## Section 6 — Global infrastructure

## Scale with the largest, most extensive global infrastructure

Deploy close to your users across a worldwide network of Regions and Availability Zones, engineered for the highest levels of security, availability, and performance.

Stats (numbers animate/count up in view):
- **38** — Launched Regions worldwide
- **120+** — Availability Zones
- **700+** — Points of presence
- **245** — Countries and territories served

Image:
- URL: /assets/aws/infra-scale.png
- Alt: Global infrastructure map

## Section 7 — Account CTA

## Start building with Sentrize Web Services

- Access 100+ products
- Free Tier for 12 months
- No upfront commitment

Button: Create a free account → # (primary, large)

## Section 8 — Footer

**Footer CTA band:**
- Sentrize wordmark (SVG, aria-label: "Sentrize Web Services")
- Button: Sign up for a free account → # (primary)

**Footer link columns (all links → #):**

1. **Products:** Compute, Storage, Databases, Networking, Analytics, Machine Learning, Security, Serverless
2. **Solutions:** By Use Case, By Industry, By Organization Type, Migration, Modernization, Cost Optimization
3. **Resources:** Getting Started, Architecture Center, Documentation, Whitepapers, Analyst Reports, Blog
4. **Learn:** Training & Certification, Builder Center, Developer Community, Events, Knowledge Center, FAQs
5. **Company:** About, Careers, Newsroom, Trust Center, Accessibility, Contact Us

**Social row:**
- Label: Connect with us
- Links (all → #): X (𝕏), LinkedIn (in), YouTube (▶), Instagram (◎)

**Bottom bar:**
- © 2026 Sentrize Web Services, Inc. or its affiliates. All rights reserved.
- Legal links (all → #): Privacy · Terms · Cookie Preferences
