import Link from "next/link";
import AwsInteractions from "./AwsInteractions";
import StoryCarousel from "./StoryCarousel";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";
import { CountingNumber } from "@/components/animate-ui/primitives/texts/counting-number";

/* Recreation of the aws.amazon.com homepage layout in AWS's own design
   language — squid-ink global nav, orange call-to-action, get-started card
   deck, customer-story carousel, industry grid, global-infrastructure band and
   mega-link footer — rendered for Sentrize's cloud offering. All imagery lives
   in /public/assets/aws. */

/* eslint-disable @next/next/no-img-element */

const IMG = "/assets/aws";

/* ---- data ------------------------------------------------------------- */
const NAV: { label: string; groups: { title: string; links: string[] }[] }[] = [
  {
    label: "Products",
    groups: [
      { title: "Compute", links: ["Virtual Servers", "Serverless Functions", "Containers", "Auto Scaling"] },
      { title: "Storage", links: ["Object Storage", "Block Storage", "File Systems", "Backup"] },
      { title: "Databases", links: ["Relational", "NoSQL", "In-Memory", "Data Warehouse"] },
      { title: "Networking", links: ["Virtual Cloud", "Load Balancing", "CDN", "DNS"] },
    ],
  },
  {
    label: "Solutions",
    groups: [
      { title: "By use case", links: ["Web Applications", "Machine Learning", "Data Lakes", "High Performance Computing"] },
      { title: "By industry", links: ["Financial Services", "Healthcare", "Retail", "Media & Entertainment"] },
      { title: "By organization", links: ["Startups", "Enterprise", "Public Sector", "SMB"] },
      { title: "Migration", links: ["Cloud Migration", "Hybrid Cloud", "Modernization", "Cost Optimization"] },
    ],
  },
  {
    label: "Pricing",
    groups: [
      { title: "Understand pricing", links: ["How pricing works", "Free Tier", "Pricing calculator", "Savings plans"] },
      { title: "Optimize costs", links: ["Cost management", "Reserved capacity", "Spot instances", "Billing console"] },
    ],
  },
  {
    label: "Documentation",
    groups: [
      { title: "Get building", links: ["Developer guides", "API reference", "SDKs & Tools", "CLI reference"] },
      { title: "Learn", links: ["Tutorials", "Architecture Center", "Best practices", "Whitepapers"] },
    ],
  },
  {
    label: "Learn",
    groups: [
      { title: "Skill up", links: ["Training & Certification", "Getting Started resources", "Hands-on labs", "Builder Center"] },
      { title: "Community", links: ["Developer community", "Events & webinars", "User groups", "Blog"] },
    ],
  },
  {
    label: "Partner Network",
    groups: [
      { title: "Find a partner", links: ["Partner solutions", "Consulting partners", "Technology partners", "Marketplace"] },
      { title: "Become a partner", links: ["Join the network", "Partner programs", "Partner Central", "Success stories"] },
    ],
  },
];

const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.5 16.5 3 21l4.5-1.5M14 6l4 4M8.5 15.5l7-7a3.5 3.5 0 0 1 5 0 3.5 3.5 0 0 1 0 5l-7 7-5 1 1-5Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Create a free account",
    body: "Explore more than 100 services with the Free Tier and receive credits to build, test, and deploy your first workloads.",
    cta: "Sign up for free",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5ZM4 20.5A2.5 2.5 0 0 0 6.5 23H20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Getting started",
    body: "Follow step-by-step tutorials and reference architectures to launch common workloads in minutes, not weeks.",
    cta: "Explore tutorials",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V4M4 20h16M8 16l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Architecture Center",
    body: "Adopt well-architected patterns for reliability, security, performance, and cost across every kind of workload.",
    cta: "View patterns",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3a9 9 0 0 0-9 9v4a3 3 0 0 0 3 3h1v-6H5v-1a7 7 0 0 1 14 0v1h-2v6h1a3 3 0 0 0 3-3v-4a9 9 0 0 0-9-9Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Talk to an expert",
    body: "Get architecture guidance, migration planning, and 24/7 operational support from our cloud specialists.",
    cta: "Contact sales",
  },
];

const STORIES = [
  {
    img: `${IMG}/story-adidas.png`,
    tag: "Retail & Consumer",
    title: "Driving enterprise-wide transformation at global scale",
    body: "A leading sportswear brand consolidated its platforms in the cloud, cutting release times and scaling seamlessly through peak demand.",
  },
  {
    img: `${IMG}/story-tapestry.png`,
    tag: "Retail & Consumer",
    title: "Amplifying store-associate voices worldwide",
    body: "A global fashion house unified customer and store data to personalize experiences across every channel and region.",
  },
  {
    img: `${IMG}/story-pinterest.png`,
    tag: "Digital & Media",
    title: "Turning data into customer-winning campaigns",
    body: "A high-traffic discovery platform runs machine learning at scale to serve billions of relevant recommendations every day.",
  },
  {
    img: `${IMG}/story-intuit.jpeg`,
    tag: "Financial Services",
    title: "Building trusted financial products faster",
    body: "A fintech leader modernized core systems to ship features quickly while meeting the highest bar for security and compliance.",
  },
];

const FEATURES = [
  {
    img: `${IMG}/feature-graviton.jpg`,
    tag: "New — Compute",
    title: "M9g instances are now generally available",
    body: "Get the best price-performance for cloud workloads with our latest generation of custom-designed processors.",
    cta: "Learn more",
  },
  {
    img: `${IMG}/feature-bundesliga.jpg`,
    tag: "Customer Story",
    title: "How fans get closer to the world's game",
    body: "Real-time match analytics powered by the cloud bring millions of supporters deeper into every moment of play.",
    cta: "Watch the story",
  },
];

const INDUSTRIES = [
  { img: `${IMG}/ind-advertising.png`, label: "Advertising & Marketing" },
  { img: `${IMG}/ind-financial.png`, label: "Financial Services" },
  { img: `${IMG}/ind-games.png`, label: "Games" },
  { img: `${IMG}/ind-government.png`, label: "Government" },
  { img: `${IMG}/ind-healthcare.png`, label: "Healthcare & Life Sciences" },
  { img: `${IMG}/ind-manufacturing.png`, label: "Manufacturing" },
  { img: `${IMG}/ind-media.png`, label: "Media & Entertainment" },
  { img: `${IMG}/ind-telecom.png`, label: "Telecommunications" },
];

const STATS = [
  { num: 38, suffix: "", label: "Launched Regions worldwide" },
  { num: 120, suffix: "+", label: "Availability Zones" },
  { num: 700, suffix: "+", label: "Points of presence" },
  { num: 245, suffix: "", label: "Countries and territories served" },
];

const FOOTER = [
  {
    title: "Products",
    links: ["Compute", "Storage", "Databases", "Networking", "Analytics", "Machine Learning", "Security", "Serverless"],
  },
  {
    title: "Solutions",
    links: ["By Use Case", "By Industry", "By Organization Type", "Migration", "Modernization", "Cost Optimization"],
  },
  {
    title: "Resources",
    links: ["Getting Started", "Architecture Center", "Documentation", "Whitepapers", "Analyst Reports", "Blog"],
  },
  {
    title: "Learn",
    links: ["Training & Certification", "Builder Center", "Developer Community", "Events", "Knowledge Center", "FAQs"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Newsroom", "Trust Center", "Accessibility", "Contact Us"],
  },
];

/* Sentrize wordmark styled like the AWS lockup — white type over an orange
   smile-arrow. Recreated, not the Amazon trademark. */
function Wordmark() {
  return (
    <svg width="118" height="34" viewBox="0 0 118 34" role="img" aria-label="Sentrize Web Services">
      <text x="0" y="17" fill="#fff" fontFamily="Helvetica Neue, Arial, sans-serif" fontSize="20" fontWeight="700" letterSpacing="0.5">
        sentrize
      </text>
      <path d="M2 27c22 9 92 9 114 0" fill="none" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
      <path d="M110 24l8 3-6 5" fill="#ff9900" />
    </svg>
  );
}

export default function AwsHomepage() {
  return (
    <div className="aws aws-shell">
      <a className="aws-skip" href="#aws-main">Skip to main content</a>

      {/* Top utility bar */}
      <div className="aws-utility">
        <div className="aws-container aws-utility__row">
          <span className="aws-utility__spacer" />
          <a href="#">Contact Us</a>
          <a href="#">Support</a>
          <a href="#">My Account</a>
          <a className="aws-utility__region" href="#">English</a>
        </div>
      </div>

      {/* Global navigation */}
      <header className="aws-gnav" data-aws-gnav>
        <div className="aws-container aws-gnav__row">
          <Link className="aws-gnav__brand" href="/aws" aria-label="Sentrize Web Services home">
            <Wordmark />
          </Link>

          <button className="aws-gnav__toggle" data-aws-toggle aria-label="Open menu" aria-expanded="false">
            ☰
          </button>

          <div className="aws-gnav__search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input type="search" placeholder="Search" aria-label="Search" />
          </div>

          <nav aria-label="Primary">
            <ul className="aws-gnav__menu">
              {NAV.map((item) => (
                <li className="aws-gnav__item" key={item.label}>
                  <span className="aws-gnav__link">{item.label}</span>
                  <div className="aws-mega">
                    <div className="aws-container aws-mega__grid">
                      {item.groups.map((g) => (
                        <div className="aws-mega__col" key={g.title}>
                          <h4>{g.title}</h4>
                          {g.links.map((l) => (
                            <a href="#" key={l}>{l}</a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <span className="aws-gnav__spacer" />
          <div className="aws-gnav__cta">
            <a className="aws-gnav__signin" href="#">Sign In</a>
            <a className="aws-btn aws-btn--primary" href="#">Create an Account</a>
          </div>
        </div>
      </header>

      <main id="aws-main">
        {/* Hero */}
        <section className="aws-hero">
          <span className="aws-hero__glow" aria-hidden="true" />
          <div className="aws-container aws-hero__inner">
            <div className="aws-hero__copy">
              <p className="aws-hero__eyebrow">re:Build 2026</p>
              <h1>Build what&apos;s next in the cloud</h1>
              <p>
                The most complete cloud platform to build, run, and scale
                whatever you imagine — with the security, reliability, and
                global reach the world&apos;s most demanding workloads depend on.
              </p>
              <div className="aws-hero__btns">
                <a className="aws-btn aws-btn--primary aws-btn--lg" href="#">Get started for free</a>
                <a className="aws-btn aws-btn--ghost-light aws-btn--lg" href="#">Register for re:Build</a>
              </div>
            </div>
            <div className="aws-hero__media">
              <img src={`${IMG}/hero-reinvent.png`} alt="re:Build 2026 conference" width={620} height={420} />
            </div>
          </div>
        </section>

        {/* Get started */}
        <section className="aws-section">
          <div className="aws-container">
            <div className="aws-section__head">
              <h2>Get started with Sentrize Web Services</h2>
              <p>Whether you&apos;re building your first app or migrating a global platform, start here.</p>
            </div>
            <div className="aws-cards">
              {CARDS.map((c, i) => (
                <Slide key={c.title} asChild direction="up" offset={24} inView inViewOnce delay={i * 80}>
                  <div className="aws-card">
                    <span className="aws-card__icon">{c.icon}</span>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                    <a className="aws-link-arrow" href="#">{c.cta}</a>
                  </div>
                </Slide>
              ))}
            </div>
          </div>
        </section>

        {/* Customer stories */}
        <section className="aws-stories">
          <div className="aws-container">
            <h2>Powering what&apos;s next in every industry</h2>
            <StoryCarousel stories={STORIES} />
          </div>
        </section>

        {/* Feature announcements */}
        <section className="aws-section aws-section--soft">
          <div className="aws-container">
            <div className="aws-features">
              {FEATURES.map((f, i) => (
                <Slide key={f.title} asChild direction="up" offset={24} inView inViewOnce delay={i * 100}>
                  <article className="aws-feature">
                    <img src={f.img} alt="" width={580} height={320} />
                    <span className="aws-feature__scrim" aria-hidden="true" />
                    <div className="aws-feature__body">
                      <p className="aws-feature__tag">{f.tag}</p>
                      <h3>{f.title}</h3>
                      <p style={{ color: "#d5dbdb", fontSize: 15, marginBottom: 18 }}>{f.body}</p>
                      <a className="aws-btn aws-btn--light" href="#">{f.cta}</a>
                    </div>
                  </article>
                </Slide>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="aws-section">
          <div className="aws-container">
            <div className="aws-section__head">
              <h2>Explore Sentrize for your industry</h2>
              <p>Purpose-built solutions and expertise for the way your industry works.</p>
            </div>
            <div className="aws-industries">
              {INDUSTRIES.map((ind, i) => (
                <Slide key={ind.label} asChild direction="up" offset={16} inView inViewOnce delay={(i % 4) * 60}>
                  <a className="aws-industry" href="#">
                    <img src={ind.img} alt="" width={280} height={210} />
                    <span className="aws-industry__scrim" aria-hidden="true" />
                    <span className="aws-industry__label">{ind.label}</span>
                  </a>
                </Slide>
              ))}
            </div>
          </div>
        </section>

        {/* Global infrastructure */}
        <section className="aws-infra">
          <div className="aws-container aws-infra__inner">
            <div>
              <h2>Scale with the largest, most extensive global infrastructure</h2>
              <p>
                Deploy close to your users across a worldwide network of Regions
                and Availability Zones, engineered for the highest levels of
                security, availability, and performance.
              </p>
              <div className="aws-stats">
                {STATS.map((s) => (
                  <div className="aws-stat" key={s.label}>
                    <div className="aws-stat__num">
                      <CountingNumber number={s.num} inView inViewOnce transition={{ stiffness: 80, damping: 20 }} />
                      {s.suffix}
                    </div>
                    <div className="aws-stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aws-infra__map">
              <img src={`${IMG}/infra-scale.png`} alt="Global infrastructure map" width={560} height={420} />
            </div>
          </div>
        </section>

        {/* Account CTA */}
        <section className="aws-account">
          <div className="aws-container aws-account__inner">
            <div>
              <h2>Start building with Sentrize Web Services</h2>
              <ul>
                <li>Access 100+ products</li>
                <li>Free Tier for 12 months</li>
                <li>No upfront commitment</li>
              </ul>
            </div>
            <a className="aws-btn aws-btn--primary aws-btn--lg" href="#">Create a free account</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="aws-footer">
        <div className="aws-footer__cta">
          <div className="aws-container aws-footer__cta-inner">
            <Wordmark />
            <a className="aws-btn aws-btn--primary" href="#">Sign up for a free account</a>
          </div>
        </div>

        <div className="aws-container aws-footer__links">
          {FOOTER.map((col) => (
            <div className="aws-footer__col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a href="#" key={l}>{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="aws-container aws-footer__social">
          <span style={{ fontSize: 13 }}>Connect with us</span>
          <div className="aws-footer__socials">
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>
        </div>

        <div className="aws-footer__bottom">
          <div className="aws-container aws-footer__bottom-inner">
            <span>© 2026 Sentrize Web Services, Inc. or its affiliates. All rights reserved.</span>
            <span className="aws-footer__legal">
              <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Cookie Preferences</a>
            </span>
          </div>
        </div>
      </footer>

      <AwsInteractions />
    </div>
  );
}
