/* Navigation data for the aws-site header, ported 1:1 from the rebuilt
   Sentrize site at E:\aws (src/config/brand.ts). Service links carry their
   icon inline instead of resolving through the full services catalogue. */

export type IconName =
  | "server" | "storage" | "database" | "function" | "cdn" | "shield"
  | "ai" | "table" | "network" | "chart" | "globe" | "rocket" | "check"
  | "chevron" | "arrow" | "menu" | "search" | "close" | "play" | "bolt"
  | "lock" | "layers" | "gauge" | "code" | "support" | "book" | "users"
  | "cloud" | "sparkles" | "sun" | "moon" | "user" | "mobile";

export const brand = {
  name: "Sentrize",
  fullName: "Sentrize",
};

export type NavLink = { label: string; href: string; sub?: string; icon?: IconName };
export type NavGroup = { label: string; top: string; topLabel: string; blurb: string; links: NavLink[] };

export const navGroups: NavGroup[] = [
  {
    label: "Products",
    top: "/services",
    topLabel: "View all services",
    blurb: "Custom software, SaaS, web, mobile, APIs, and AI — engineered end to end by senior teams.",
    links: [
      { label: "Software Development", href: "/software-development", sub: "Custom systems built to last", icon: "code" },
      { label: "SaaS Development", href: "/saas-development", sub: "Multi-tenant products, MVP to scale", icon: "layers" },
      { label: "Web Applications", href: "/web-applications", sub: "React & Next.js front ends", icon: "globe" },
      { label: "Mobile Applications", href: "/mobile-applications", sub: "iOS & Android, one codebase", icon: "mobile" },
      { label: "API Development", href: "/api-development", sub: "REST & GraphQL, built to integrate", icon: "function" },
      { label: "AI & Automation", href: "/ai-automation", sub: "Practical AI in your product", icon: "ai" },
      { label: "UI/UX Design", href: "/ui-ux-design", sub: "Build-ready interface design", icon: "sparkles" },
    ],
  },
  {
    label: "Solutions",
    top: "/solutions",
    topLabel: "View all solutions",
    blurb: "Cloud-native infrastructure, designed, automated, and operated with discipline.",
    links: [
      { label: "DevOps Services", href: "/devops", sub: "Automate build, deploy, monitor", icon: "rocket" },
      { label: "Cloud Infrastructure", href: "/cloud-infrastructure", sub: "Resilient, cost-aware cloud", icon: "cloud" },
      { label: "AWS Consulting", href: "/aws-consulting", sub: "Well-Architected on AWS", icon: "server" },
      { label: "Kubernetes", href: "/kubernetes", sub: "Orchestration done right", icon: "table" },
      { label: "CI/CD Automation", href: "/cicd-automation", sub: "Ship safely, many times a day", icon: "bolt" },
      { label: "Managed Hosting", href: "/managed-hosting", sub: "We run it, you build it", icon: "storage" },
      { label: "Infrastructure Monitoring", href: "/infrastructure-monitoring", sub: "Observability by default", icon: "gauge" },
      { label: "Security & Compliance", href: "/security-compliance", sub: "Secure from the first commit", icon: "shield" },
      { label: "Cloud Migration", href: "/cloud-migration", sub: "Move without the downtime", icon: "arrow" },
      { label: "Docker Containerization", href: "/docker-containerization", sub: "Portable, reproducible workloads", icon: "layers" },
      { label: "Infrastructure as Code", href: "/infrastructure-as-code", sub: "Terraform-managed environments", icon: "code" },
      { label: "Managed DevOps", href: "/managed-devops", sub: "Your DevOps team, on tap", icon: "support" },
    ],
  },
  {
    label: "Company",
    top: "/about",
    topLabel: "About Sentrize",
    blurb: "A global engineering firm built on rigor, ownership, and uptime — since 2014.",
    links: [
      { label: "About Us", href: "/about", sub: "Who we are" },
      { label: "Our Team", href: "/team", sub: "The people behind the work" },
      { label: "Careers", href: "/careers", sub: "Build with us" },
      { label: "Partners", href: "/partners", sub: "Our partner ecosystem" },
      { label: "Portfolio", href: "/portfolio", sub: "Selected work" },
      { label: "Success Stories", href: "/success-stories", sub: "Outcomes we've delivered" },
      { label: "Testimonials", href: "/testimonials", sub: "What clients say" },
      { label: "Contact Us", href: "/contact", sub: "Talk to engineering" },
    ],
  },
  {
    label: "Pricing",
    top: "/pricing",
    topLabel: "View pricing",
    blurb: "Transparent, role-based pricing with source-code ownership on every plan.",
    links: [
      { label: "Development Plans", href: "/pricing", sub: "Product & app engineering" },
      { label: "DevOps Plans", href: "/pricing", sub: "Automation & pipelines" },
      { label: "Managed Cloud", href: "/pricing", sub: "Fully operated infrastructure" },
      { label: "Dedicated Team", href: "/pricing", sub: "An embedded squad" },
      { label: "Enterprise", href: "/pricing", sub: "Custom, governed, at scale" },
    ],
  },
  {
    label: "Resources",
    top: "/blog",
    topLabel: "Read the blog",
    blurb: "Practical engineering notes on software, cloud, DevOps, and AI from our specialists.",
    links: [
      { label: "Blog", href: "/blog", sub: "Engineering notes" },
      { label: "Documentation", href: "/documentation", sub: "Guides & references" },
      { label: "Case Studies", href: "/case-studies", sub: "Detailed engagements" },
      { label: "White Papers", href: "/white-papers", sub: "In-depth technical reports" },
      { label: "Knowledge Base", href: "/knowledge-base", sub: "How-to articles" },
      { label: "API Docs", href: "/api-docs", sub: "Build on our APIs" },
    ],
  },
  {
    label: "Support",
    top: "/help-center",
    topLabel: "Visit the Help Center",
    blurb: "Find answers fast, or reach our team when you need a human. 24/7 for SLA clients.",
    links: [
      { label: "Help Center", href: "/help-center", sub: "Find answers fast" },
      { label: "Open a Ticket", href: "/open-ticket", sub: "Get hands-on help" },
      { label: "Service Status", href: "/service-status", sub: "Live system status" },
      { label: "SLA Policy", href: "/sla-policy", sub: "Our service commitments" },
      { label: "Customer Portal", href: "/customer-portal", sub: "Manage your account" },
      { label: "Contact Support", href: "/contact-support", sub: "Reach our team" },
    ],
  },
  {
    label: "Partners",
    top: "/partners",
    topLabel: "Explore partnerships",
    blurb: "Grow with a certified engineering partner — refer, white-label, or build on our stack.",
    links: [
      { label: "AWS Partner", href: "/aws-partner", sub: "Certified AWS delivery" },
      { label: "Technology Partners", href: "/technology-partners", sub: "Our integration network" },
      { label: "Referral Program", href: "/referral-program", sub: "Earn for referrals" },
      { label: "Agency Partnership", href: "/agency-partnership", sub: "White-label engineering" },
      { label: "Reseller Program", href: "/reseller-program", sub: "Resell our services" },
    ],
  },
];

export const utilityNav: { label: string; href: string; icon?: IconName; chevron?: boolean }[] = [
  { label: "Contact us", href: "/contact" },
  { label: "Help Center", href: "/help-center" },
  { label: "Service Status", href: "/service-status" },
  { label: "Marketplace", href: "/marketplace", chevron: true },
];

/** Tiny classNames joiner — no external deps. Filters falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
