// Shared site data ported from the static build (build_site.py / build_v2.py),
// with clean Next.js routes instead of ".html" paths.

export const BRAND = "Sentrize";

export type NavLink = { label: string; href: string; sub?: string };
export type NavGroup = { label: string; top: string; links: NavLink[] };

export const NAV: NavGroup[] = [
  {
    label: "Products",
    top: "/services",
    links: [
      { label: "Software Development", href: "/software-development", sub: "Custom systems built to last" },
      { label: "SaaS Development", href: "/saas-development", sub: "Multi-tenant products, MVP to scale" },
      { label: "Web Applications", href: "/web-applications", sub: "React & Next.js front ends" },
      { label: "Mobile Applications", href: "/mobile-applications", sub: "iOS & Android, one codebase" },
      { label: "API Development", href: "/api-development", sub: "REST & GraphQL, built to integrate" },
      { label: "AI & Automation", href: "/ai-automation", sub: "Practical AI in your product" },
      { label: "UI/UX Design", href: "/ui-ux-design", sub: "Build-ready interface design" },
    ],
  },
  {
    label: "Solutions",
    top: "/solutions",
    links: [
      { label: "DevOps Services", href: "/devops", sub: "Automate build, deploy, monitor" },
      { label: "Cloud Infrastructure", href: "/cloud-infrastructure", sub: "Resilient, cost-aware cloud" },
      { label: "AWS Consulting", href: "/aws-consulting", sub: "Well-Architected on AWS" },
      { label: "Kubernetes", href: "/kubernetes", sub: "Orchestration done right" },
      { label: "CI/CD Automation", href: "/cicd-automation", sub: "Ship safely, many times a day" },
      { label: "Managed Hosting", href: "/managed-hosting", sub: "We run it, you build it" },
      { label: "Infrastructure Monitoring", href: "/infrastructure-monitoring", sub: "Observability by default" },
      { label: "Security & Compliance", href: "/security-compliance", sub: "Secure from the first commit" },
      { label: "Cloud Migration", href: "/cloud-migration", sub: "Move without the downtime" },
      { label: "Docker Containerization", href: "/docker-containerization", sub: "Portable, reproducible workloads" },
      { label: "Infrastructure as Code", href: "/infrastructure-as-code", sub: "Terraform-managed environments" },
      { label: "Managed DevOps", href: "/managed-devops", sub: "Your DevOps team, on tap" },
    ],
  },
  {
    label: "Company",
    top: "/about",
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
    links: [
      { label: "AWS Partner", href: "/aws-partner", sub: "Certified AWS delivery" },
      { label: "Technology Partners", href: "/technology-partners", sub: "Our integration network" },
      { label: "Referral Program", href: "/referral-program", sub: "Earn for referrals" },
      { label: "Agency Partnership", href: "/agency-partnership", sub: "White-label engineering" },
      { label: "Reseller Program", href: "/reseller-program", sub: "Resell our services" },
    ],
  },
];

export const FOOTER_COLS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Products",
    links: [
      { label: "Software Development", href: "/software-development" },
      { label: "SaaS Development", href: "/saas-development" },
      { label: "Web Applications", href: "/web-applications" },
      { label: "Mobile Applications", href: "/mobile-applications" },
      { label: "API Development", href: "/api-development" },
      { label: "AI & Automation", href: "/ai-automation" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "DevOps", href: "/devops" },
      { label: "Cloud Infrastructure", href: "/cloud-infrastructure" },
      { label: "AWS Consulting", href: "/aws-consulting" },
      { label: "Kubernetes", href: "/kubernetes" },
      { label: "CI/CD Automation", href: "/cicd-automation" },
      { label: "Security & Compliance", href: "/security-compliance" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/documentation" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Knowledge Base", href: "/knowledge-base" },
      { label: "Service Status", href: "/service-status" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
