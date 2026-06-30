// AUTO-GENERATED from raw/build_site.py + build_v2.py — exact content parity.

export type Service = { title: string; eyebrow: string; intro: string; overview: string; checks: string[]; tags: string[]; process: [string, string][]; related: string[] };

export const SERVICES: Record<string, Service> = {
 "software-development": {
  "title": "Custom Software Development",
  "eyebrow": "Products",
  "intro": "Tailored applications built around how your business actually works — engineered for maintainability and growth.",
  "overview": "We design and build software that fits your workflows, not a generic template forced into shape. We model your domain carefully, write tested code, and document as we go, so the system you commission stays an asset rather than becoming technical debt.",
  "checks": [
   "Domain modeling and technical architecture",
   "Backend and frontend implementation",
   "Automated test coverage and code review",
   "Third-party system integration",
   "Documentation and full team handover"
  ],
  "tags": [
   "Laravel",
   "Node.js",
   "TypeScript",
   "PostgreSQL",
   "Redis",
   "Docker"
  ],
  "process": [
   [
    "Discovery & Strategy",
    "We map requirements, surface risks, and agree on scope and success metrics."
   ],
   [
    "Engineering & QA",
    "Senior engineers build in reviewable increments with automated tests on every commit."
   ],
   [
    "Deploy & Support",
    "We ship through CI/CD and stay on to monitor, tune, and extend."
   ]
  ],
  "related": [
   "web-applications",
   "api-development",
   "saas-development"
  ]
 },
 "saas-development": {
  "title": "SaaS Product Development",
  "eyebrow": "Products",
  "intro": "End-to-end SaaS builds with multi-tenancy, subscription billing, and architecture that scales from MVP to mature platform.",
  "overview": "We build SaaS products that handle multiple customers, plans, and growth without re-architecting later — covering the foundations that separate a real platform from a demo.",
  "checks": [
   "Multi-tenant architecture and data isolation",
   "Subscription billing and plan management",
   "Role-based access and user management",
   "Usage metering and product analytics",
   "Scalable deployment on AWS via CI/CD"
  ],
  "tags": [
   "React",
   "Next.js",
   "Node.js",
   "Laravel",
   "PostgreSQL",
   "AWS"
  ],
  "process": [
   [
    "Shape the MVP",
    "We define the smallest version that proves value, then plan the path beyond it."
   ],
   [
    "Build to scale",
    "Multi-tenant foundations, billing, and observability from day one."
   ],
   [
    "Grow deliberately",
    "We instrument adoption and iterate on real usage data."
   ]
  ],
  "related": [
   "software-development",
   "web-applications",
   "api-development"
  ]
 },
 "web-applications": {
  "title": "Web Application Development",
  "eyebrow": "Products",
  "intro": "Fast, accessible web applications built with React and Next.js, backed by APIs designed for reliability and scale.",
  "overview": "We build web apps that load quickly, handle traffic spikes, and stay responsive as features accumulate — with server-side rendering where it improves performance and SEO.",
  "checks": [
   "Component-driven frontend architecture",
   "Server-side rendering and performance tuning",
   "API and database design",
   "Accessibility and Core Web Vitals compliance",
   "Automated deployment pipelines"
  ],
  "tags": [
   "React",
   "Next.js",
   "TypeScript",
   "Node.js",
   "PostgreSQL"
  ],
  "process": [
   [
    "Design & prototype",
    "Build-ready UI mapped to real user flows."
   ],
   [
    "Engineer",
    "Typed components, tested APIs, measured performance."
   ],
   [
    "Ship & optimize",
    "Automated releases and Core Web Vitals tracking."
   ]
  ],
  "related": [
   "ui-ux-design",
   "api-development",
   "software-development"
  ]
 },
 "mobile-applications": {
  "title": "Mobile App Development",
  "eyebrow": "Products",
  "intro": "Cross-platform mobile apps that feel native on iOS and Android while sharing a single, maintainable codebase.",
  "overview": "Using React Native and Flutter, we deliver smooth interactions, offline support, and clean integration with your backend services, shipped through automated build pipelines.",
  "checks": [
   "Cross-platform iOS and Android development",
   "Offline-first data handling and sync",
   "Backend API integration and authentication",
   "Push notifications and secure local storage",
   "App store submission and release management"
  ],
  "tags": [
   "React Native",
   "Flutter",
   "TypeScript",
   "Node.js",
   "Redis"
  ],
  "process": [
   [
    "Plan",
    "Define platforms, flows, and release strategy."
   ],
   [
    "Build",
    "One codebase, native feel, automated builds."
   ],
   [
    "Release",
    "TestFlight, Play Console, and OTA updates."
   ]
  ],
  "related": [
   "web-applications",
   "api-development",
   "ui-ux-design"
  ]
 },
 "api-development": {
  "title": "API Development & Integrations",
  "eyebrow": "Products",
  "intro": "Well-documented REST and GraphQL APIs, plus integrations that connect your systems to the services they rely on.",
  "overview": "We design APIs that are clear to consume and stable to depend on — with versioning, authentication, and documentation built in — and connect your stack to payments, CRMs, messaging, and internal systems.",
  "checks": [
   "REST and GraphQL API design",
   "Authentication, versioning, and rate limiting",
   "Third-party and payment integrations",
   "Webhook handling and retry logic",
   "API documentation and developer tooling"
  ],
  "tags": [
   "Node.js",
   "TypeScript",
   "Laravel",
   "PostgreSQL",
   "Redis"
  ],
  "process": [
   [
    "Contract first",
    "We define clear, versioned API contracts."
   ],
   [
    "Build & secure",
    "Auth, rate limiting, and resilient integrations."
   ],
   [
    "Document",
    "Reference docs and tooling your developers will use."
   ]
  ],
  "related": [
   "software-development",
   "saas-development",
   "ai-automation"
  ]
 },
 "ai-automation": {
  "title": "AI & Automation Solutions",
  "eyebrow": "Products",
  "intro": "Practical AI features and workflow automation that remove manual effort and surface insight — integrated into your existing systems.",
  "overview": "We build AI and automation that solve concrete problems, from document processing and intelligent search to workflows that move data between systems without human copy-paste. Every feature is scoped against a measurable outcome.",
  "checks": [
   "Workflow automation and process integration",
   "LLM and AI feature integration",
   "Document processing and intelligent search",
   "Clean API delivery and system connectivity",
   "Monitoring and outcome measurement"
  ],
  "tags": [
   "Node.js",
   "TypeScript",
   "AWS",
   "PostgreSQL",
   "Redis",
   "Docker"
  ],
  "process": [
   [
    "Find the use case",
    "We scope automation against a real, measurable outcome."
   ],
   [
    "Integrate",
    "LLMs and custom logic exposed via clean APIs."
   ],
   [
    "Operate",
    "Deployed on AWS with monitoring on quality and cost."
   ]
  ],
  "related": [
   "api-development",
   "software-development",
   "saas-development"
  ]
 },
 "ui-ux-design": {
  "title": "UI/UX Design",
  "eyebrow": "Products",
  "intro": "Interface and experience design grounded in real user flows, delivered as build-ready components your engineers can ship.",
  "overview": "Our designers and engineers work together, so what gets handed off is buildable — not an idealized mockup that falls apart in implementation.",
  "checks": [
   "User flow mapping and wireframing",
   "Interactive prototypes and design systems",
   "Accessibility-conscious component design",
   "Engineer-ready handoff and specs",
   "Usability validation and iteration"
  ],
  "tags": [
   "Figma",
   "React",
   "Next.js",
   "TypeScript"
  ],
  "process": [
   [
    "Research",
    "We map real user flows and requirements."
   ],
   [
    "Design",
    "Prototypes and a consistent design system."
   ],
   [
    "Handoff",
    "Build-ready components and specs."
   ]
  ],
  "related": [
   "web-applications",
   "mobile-applications",
   "software-development"
  ]
 },
 "devops": {
  "title": "DevOps Services",
  "eyebrow": "Solutions",
  "intro": "Automated build, deploy, and monitoring pipelines that replace fragile manual operations with repeatable, observable infrastructure.",
  "overview": "We turn manual processes into pipelines your team can trust — infrastructure defined in code, deployments through CI/CD, and metrics flowing into dashboards so problems surface before users notice.",
  "checks": [
   "Infrastructure as code and configuration management",
   "CI/CD pipeline design and automation",
   "Monitoring, alerting, and dashboards",
   "Log aggregation and incident runbooks",
   "Secrets management and access control"
  ],
  "tags": [
   "Terraform",
   "Docker",
   "Kubernetes",
   "Prometheus",
   "Grafana",
   "GitHub Actions"
  ],
  "process": [
   [
    "Assess",
    "We audit your current delivery and reliability gaps."
   ],
   [
    "Automate",
    "Pipelines, IaC, and observability wired in."
   ],
   [
    "Operate",
    "Fewer incidents, faster, calmer releases."
   ]
  ],
  "related": [
   "cicd-automation",
   "infrastructure-as-code",
   "infrastructure-monitoring"
  ]
 },
 "cloud-infrastructure": {
  "title": "Cloud Infrastructure",
  "eyebrow": "Solutions",
  "intro": "Cloud architecture designed for resilience and cost control — from migration planning to fully managed, auto-scaling production.",
  "overview": "We design cloud environments that match your workload instead of over-provisioning by default, with horizontal scaling, sensible failover, and clear cost visibility.",
  "checks": [
   "Cloud architecture and capacity planning",
   "Infrastructure as code with Terraform",
   "Auto-scaling and high-availability setup",
   "Cost monitoring and optimization",
   "Backup and disaster recovery design"
  ],
  "tags": [
   "AWS",
   "Terraform",
   "Docker",
   "Kubernetes",
   "PostgreSQL"
  ],
  "process": [
   [
    "Design",
    "Architecture matched to your workload and budget."
   ],
   [
    "Provision",
    "Everything codified and reproducible."
   ],
   [
    "Optimize",
    "Right-sized, observable, cost-aware."
   ]
  ],
  "related": [
   "aws-consulting",
   "cloud-migration",
   "infrastructure-as-code"
  ]
 },
 "aws-consulting": {
  "title": "AWS Consulting",
  "eyebrow": "Solutions",
  "intro": "Architecture, deployment, and optimization on AWS — from networking and IAM to managed databases and serverless workloads.",
  "overview": "We design and operate production workloads on AWS to Well-Architected principles, with attention to security, reliability, and spend.",
  "checks": [
   "VPC, networking, and IAM configuration",
   "Compute selection (EC2, ECS, serverless)",
   "Managed databases with RDS",
   "Terraform provisioning and cost reviews",
   "Well-Architected assessment"
  ],
  "tags": [
   "AWS",
   "Terraform",
   "Docker",
   "PostgreSQL",
   "Prometheus"
  ],
  "process": [
   [
    "Review",
    "Well-Architected assessment of your account."
   ],
   [
    "Build",
    "Secure, codified, right-sized infrastructure."
   ],
   [
    "Optimize",
    "Ongoing cost and reliability tuning."
   ]
  ],
  "related": [
   "cloud-infrastructure",
   "kubernetes",
   "cloud-migration"
  ]
 },
 "kubernetes": {
  "title": "Kubernetes Solutions",
  "eyebrow": "Solutions",
  "intro": "Containerized workloads orchestrated on Kubernetes, with sane scaling, networking, and deployment strategies for production.",
  "overview": "We run applications on clusters built for real production demands — cluster setup, resource limits, autoscaling, ingress, and rolling deployments that don't drop traffic.",
  "checks": [
   "Application containerization with Docker",
   "Cluster setup and resource management",
   "Autoscaling, ingress, and service networking",
   "Rolling and zero-downtime deployments",
   "Cluster monitoring and observability"
  ],
  "tags": [
   "Kubernetes",
   "Docker",
   "AWS",
   "Terraform",
   "Prometheus",
   "Grafana"
  ],
  "process": [
   [
    "Containerize",
    "Reproducible images and sane defaults."
   ],
   [
    "Orchestrate",
    "Clusters, autoscaling, and ingress."
   ],
   [
    "Observe",
    "Metrics and zero-downtime rollouts."
   ]
  ],
  "related": [
   "docker-containerization",
   "devops",
   "cloud-infrastructure"
  ]
 },
 "cicd-automation": {
  "title": "CI/CD Automation",
  "eyebrow": "Solutions",
  "intro": "Continuous integration and delivery pipelines that test, build, and deploy automatically — so shipping is routine instead of risky.",
  "overview": "Using GitHub Actions or GitLab CI, we automate linting, testing, container builds, and environment promotion, with deployment gates and rollback paths.",
  "checks": [
   "Automated test and lint stages",
   "Container image build and registry push",
   "Staged environment promotion and approvals",
   "Blue-green and canary deploy strategies",
   "Build caching and pipeline observability"
  ],
  "tags": [
   "GitHub Actions",
   "GitLab CI",
   "Docker",
   "Kubernetes",
   "Terraform"
  ],
  "process": [
   [
    "Map the flow",
    "From commit to production, with safeguards at each stage."
   ],
   [
    "Automate",
    "Tests, builds, and promotion on every merge."
   ],
   [
    "Harden",
    "Rollbacks, gates, and fast feedback."
   ]
  ],
  "related": [
   "devops",
   "kubernetes",
   "infrastructure-as-code"
  ]
 },
 "managed-hosting": {
  "title": "Managed Hosting",
  "eyebrow": "Solutions",
  "intro": "Fully managed hosting with monitoring, backups, and updates handled for you — so your applications stay online and current.",
  "overview": "We host and operate your applications so your team can focus on the product, with provisioning, security patching, automated backups, and round-the-clock monitoring.",
  "checks": [
   "Provisioning and environment management",
   "Security patching and dependency updates",
   "Automated backups and recovery testing",
   "24/7 monitoring and alerting",
   "Database tuning and performance checks"
  ],
  "tags": [
   "AWS",
   "Docker",
   "PostgreSQL",
   "Redis",
   "Prometheus",
   "Grafana"
  ],
  "process": [
   [
    "Onboard",
    "We take stock of your stack and SLAs."
   ],
   [
    "Operate",
    "Patching, backups, and monitoring handled."
   ],
   [
    "Respond",
    "On-call coverage with rehearsed runbooks."
   ]
  ],
  "related": [
   "managed-devops",
   "cloud-infrastructure",
   "infrastructure-monitoring"
  ]
 },
 "infrastructure-monitoring": {
  "title": "Infrastructure Monitoring",
  "eyebrow": "Solutions",
  "intro": "Observability by default — metrics, logging, and tracing on every service, with alerting that distinguishes signal from noise.",
  "overview": "We instrument your systems so failures show up in dashboards and alerts before your users notice them, and so you can act on real usage data.",
  "checks": [
   "Metrics, logging, and distributed tracing",
   "Dashboards for services and infrastructure",
   "Actionable alerting and on-call routing",
   "SLO and error-budget tracking",
   "Capacity and performance analysis"
  ],
  "tags": [
   "Prometheus",
   "Grafana",
   "AWS",
   "Kubernetes",
   "Docker"
  ],
  "process": [
   [
    "Instrument",
    "Metrics, logs, and traces on every service."
   ],
   [
    "Visualize",
    "Dashboards built around your SLOs."
   ],
   [
    "Alert",
    "Signal over noise, routed to the right people."
   ]
  ],
  "related": [
   "devops",
   "managed-hosting",
   "kubernetes"
  ]
 },
 "security-compliance": {
  "title": "Security & Compliance",
  "eyebrow": "Solutions",
  "intro": "Security built into the build — threat modeling, hardening, and monitoring that reduce attack surface and keep you defensible.",
  "overview": "We assess and harden your applications and infrastructure against realistic threats, and support SOC 2, GDPR, and HIPAA requirements with documented controls.",
  "checks": [
   "Application and dependency security review",
   "Authentication and access hardening",
   "Secrets management and secure configuration",
   "Security checks integrated into CI/CD",
   "Compliance support (SOC 2, GDPR, HIPAA)"
  ],
  "tags": [
   "AWS",
   "Terraform",
   "Docker",
   "GitHub Actions",
   "Prometheus"
  ],
  "process": [
   [
    "Assess",
    "Find the gaps that actually matter."
   ],
   [
    "Harden",
    "Fix by impact, with controls in code."
   ],
   [
    "Sustain",
    "Monitoring and audit-ready documentation."
   ]
  ],
  "related": [
   "cybersecurity",
   "devops",
   "infrastructure-as-code"
  ]
 },
 "cloud-migration": {
  "title": "Cloud Migration",
  "eyebrow": "Solutions",
  "intro": "Move to the cloud without the downtime — a planned, codified migration with rollback at every step.",
  "overview": "We migrate legacy and on-premises workloads to cloud-native architecture with infrastructure as code, observability, and zero-downtime cutover.",
  "checks": [
   "Migration assessment and dependency mapping",
   "Re-architecture and containerization where it pays off",
   "Infrastructure as code for the target estate",
   "Data migration with validation and rollback",
   "Zero-downtime cutover and post-migration tuning"
  ],
  "tags": [
   "AWS",
   "Terraform",
   "Docker",
   "Kubernetes",
   "PostgreSQL"
  ],
  "process": [
   [
    "Assess",
    "Map workloads, dependencies, and risks."
   ],
   [
    "Migrate",
    "Codified, validated, reversible steps."
   ],
   [
    "Optimize",
    "Right-size and tune on the new estate."
   ]
  ],
  "related": [
   "cloud-infrastructure",
   "aws-consulting",
   "docker-containerization"
  ]
 },
 "docker-containerization": {
  "title": "Docker Containerization",
  "eyebrow": "Solutions",
  "intro": "Portable, reproducible workloads — we containerize your applications for consistent builds across every environment.",
  "overview": "Containerization removes “works on my machine” for good. We package your apps with Docker so they run identically in dev, staging, and production.",
  "checks": [
   "Application containerization and image optimization",
   "Multi-stage builds and small, secure images",
   "Local development parity with production",
   "Registry setup and image scanning",
   "A clean path to Kubernetes orchestration"
  ],
  "tags": [
   "Docker",
   "Kubernetes",
   "AWS",
   "GitHub Actions"
  ],
  "process": [
   [
    "Package",
    "Multi-stage, minimal, secure images."
   ],
   [
    "Standardize",
    "Dev/prod parity and image scanning."
   ],
   [
    "Scale",
    "A clean path to orchestration."
   ]
  ],
  "related": [
   "kubernetes",
   "cicd-automation",
   "cloud-infrastructure"
  ]
 },
 "infrastructure-as-code": {
  "title": "Infrastructure as Code",
  "eyebrow": "Solutions",
  "intro": "Terraform-managed environments that are repeatable, auditable, and recoverable — provisioned by pull request, not by hand.",
  "overview": "Your entire environment is defined in version-controlled Terraform, so deployments are repeatable and disaster recovery is a tested procedure rather than a hope.",
  "checks": [
   "Terraform modules for your whole estate",
   "Version-controlled, reviewable changes",
   "Repeatable multi-environment provisioning",
   "Drift detection and policy guardrails",
   "Tested disaster recovery procedures"
  ],
  "tags": [
   "Terraform",
   "AWS",
   "Docker",
   "Kubernetes",
   "GitHub Actions"
  ],
  "process": [
   [
    "Codify",
    "Capture your estate as Terraform modules."
   ],
   [
    "Review",
    "Every change via pull request."
   ],
   [
    "Recover",
    "Rebuild environments on demand."
   ]
  ],
  "related": [
   "cloud-infrastructure",
   "devops",
   "cicd-automation"
  ]
 },
 "managed-devops": {
  "title": "Managed DevOps",
  "eyebrow": "Solutions",
  "intro": "Your DevOps team, on tap — we own your pipelines, infrastructure, and on-call so your engineers can focus on the product.",
  "overview": "An ongoing engagement where we run the operational side of your platform end to end, with defined SLAs and 24/7 coverage.",
  "checks": [
   "Pipeline and infrastructure ownership",
   "24/7 monitoring and on-call response",
   "Cost and performance optimization",
   "Security patching and compliance upkeep",
   "Regular reliability and capacity reviews"
  ],
  "tags": [
   "Terraform",
   "Kubernetes",
   "AWS",
   "Prometheus",
   "Grafana",
   "GitHub Actions"
  ],
  "process": [
   [
    "Onboard",
    "We learn your stack and set SLAs."
   ],
   [
    "Run",
    "Pipelines, infra, and on-call handled."
   ],
   [
    "Improve",
    "Continuous reliability and cost work."
   ]
  ],
  "related": [
   "devops",
   "managed-hosting",
   "infrastructure-monitoring"
  ]
 },
 "digital-transformation": {
  "title": "Digital Transformation",
  "eyebrow": "Enterprise",
  "intro": "Modernize how your organization builds and runs software — from legacy systems to cloud-native, automated delivery.",
  "overview": "We help established organizations move from slow, manual, legacy-bound delivery to modern engineering practices, without a risky big-bang rewrite.",
  "checks": [
   "Modernization roadmap and prioritization",
   "Incremental legacy migration",
   "Cloud-native re-platforming",
   "Delivery automation and team enablement",
   "Measurable reliability and velocity gains"
  ],
  "tags": [
   "AWS",
   "Terraform",
   "Kubernetes",
   "Node.js",
   "React",
   "PostgreSQL"
  ],
  "process": [
   [
    "Assess",
    "Map systems, constraints, and opportunities."
   ],
   [
    "Modernize",
    "Migrate incrementally, prove value early."
   ],
   [
    "Enable",
    "Leave your team faster and self-sufficient."
   ]
  ],
  "related": [
   "enterprise-software",
   "cloud-migration",
   "managed-devops"
  ]
 },
 "enterprise-software": {
  "title": "Enterprise Software Development",
  "eyebrow": "Enterprise",
  "intro": "Mission-critical systems engineered for scale, security, and governance — built to integrate with the tools you already run.",
  "overview": "We build and modernize the systems large organizations depend on, with the audit trails, access controls, and reliability that enterprise environments demand.",
  "checks": [
   "Scalable, service-oriented architecture",
   "SSO/SAML, audit logging, and RBAC",
   "Integration with existing enterprise systems",
   "High-availability, multi-region deployment",
   "Documented controls and compliance support"
  ],
  "tags": [
   "Laravel",
   "Node.js",
   "React",
   "AWS",
   "Kubernetes",
   "PostgreSQL"
  ],
  "process": [
   [
    "Architect",
    "Service boundaries, security, and integration."
   ],
   [
    "Build",
    "Tested increments with governance baked in."
   ],
   [
    "Operate",
    "HA deployment with SLAs and monitoring."
   ]
  ],
  "related": [
   "digital-transformation",
   "crm-development",
   "erp-development"
  ]
 },
 "crm-development": {
  "title": "Custom CRM Development",
  "eyebrow": "Enterprise",
  "intro": "CRM systems built around your actual sales and service processes — not a rigid off-the-shelf tool you fight against.",
  "overview": "When packaged CRMs can't model how you really work, we build one that does — integrated with your stack and owned entirely by you.",
  "checks": [
   "Pipeline, contact, and activity modeling",
   "Automation and workflow rules",
   "Reporting and forecasting dashboards",
   "Email, calendar, and telephony integration",
   "Role-based access and data governance"
  ],
  "tags": [
   "Laravel",
   "React",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "AWS"
  ],
  "process": [
   [
    "Model",
    "Capture your real sales and service flows."
   ],
   [
    "Build",
    "Automation, reporting, and integrations."
   ],
   [
    "Adopt",
    "Migration, training, and rollout support."
   ]
  ],
  "related": [
   "enterprise-software",
   "erp-development",
   "api-development"
  ]
 },
 "erp-development": {
  "title": "ERP Development",
  "eyebrow": "Enterprise",
  "intro": "Custom ERP modules that connect finance, operations, and inventory into one source of truth tailored to your business.",
  "overview": "We build and integrate ERP capabilities that fit your processes, replacing spreadsheets and disconnected tools with reliable, auditable workflows.",
  "checks": [
   "Finance, inventory, and operations modules",
   "Workflow automation and approvals",
   "Integration with existing systems and APIs",
   "Reporting, audit trails, and access control",
   "Phased rollout with data migration"
  ],
  "tags": [
   "Laravel",
   "Node.js",
   "PostgreSQL",
   "Redis",
   "AWS",
   "Docker"
  ],
  "process": [
   [
    "Map processes",
    "Understand operations end to end."
   ],
   [
    "Build modules",
    "Automated, auditable, integrated."
   ],
   [
    "Roll out",
    "Migrate data and onboard teams in phases."
   ]
  ],
  "related": [
   "enterprise-software",
   "crm-development",
   "digital-transformation"
  ]
 },
 "cybersecurity": {
  "title": "Cybersecurity Services",
  "eyebrow": "Enterprise",
  "intro": "Reduce risk across your applications and infrastructure with reviews, hardening, and monitoring built for real threats.",
  "overview": "We assess your security posture, fix what matters by impact, and put monitoring in place so anomalies are caught early — with support for the audits you need to pass.",
  "checks": [
   "Application and infrastructure security review",
   "Penetration-style testing and threat modeling",
   "Identity, access, and secrets hardening",
   "Continuous monitoring and incident readiness",
   "Compliance support (SOC 2, ISO 27001, GDPR)"
  ],
  "tags": [
   "AWS",
   "Terraform",
   "Docker",
   "GitHub Actions",
   "Prometheus",
   "Grafana"
  ],
  "process": [
   [
    "Assess",
    "Prioritized findings, not checklist theatre."
   ],
   [
    "Harden",
    "Close the gaps that carry real risk."
   ],
   [
    "Monitor",
    "Detect, respond, and stay audit-ready."
   ]
  ],
  "related": [
   "security-compliance",
   "enterprise-software",
   "managed-devops"
  ]
 }
};

export const HOOKS: Record<string, [string, string, string]> = {
 "software-development": [
  "Custom software engineered to outlast its first release.",
  "Production-grade systems on Laravel, Node.js, and TypeScript that scale with your business instead of being rewritten in two years.",
  "500+ projects delivered across 40+ countries"
 ],
 "saas-development": [
  "Multi-tenant SaaS built to grow margins, not just users.",
  "Tenant isolation, billing, usage metering, and self-serve onboarding — the platform mechanics that turn a product into a recurring-revenue business.",
  "98% client retention"
 ],
 "web-applications": [
  "Web applications fast enough to keep your users.",
  "React and Next.js applications tuned for sub-second loads, real-time data, and the conversion metrics your business is measured on.",
  "99.99% SLA-backed uptime"
 ],
 "mobile-applications": [
  "Native-quality mobile apps, shipped on every platform.",
  "React Native and Flutter apps that share one codebase across iOS and Android without sacrificing native polish.",
  "4.9/5 average client rating"
 ],
 "api-development": [
  "APIs your partners can build a business on.",
  "Versioned, documented REST and GraphQL APIs with the rate limiting, auth, and contracts that make integrations dependable at scale.",
  "99.99% uptime, SLA-backed"
 ],
 "ai-automation": [
  "Automation that turns manual hours into measurable savings.",
  "We embed AI and workflow automation into real operations and tie every deployment to a cost or throughput metric.",
  "120+ engineers & specialists"
 ],
 "ui-ux-design": [
  "Design decisions backed by how users actually behave.",
  "Research-led UI/UX that reduces drop-off, shortens onboarding, and makes complex enterprise products feel obvious.",
  "Contributing to a 4.9/5 client rating"
 ],
 "devops": [
  "Ship faster. Break nothing. Sleep better.",
  "We rebuild your delivery pipeline so engineering moves at startup speed with enterprise discipline.",
  "Lead time to production cut 60%+ in the first quarter"
 ],
 "cloud-infrastructure": [
  "Infrastructure that scales before you do.",
  "Cloud foundations that handle 10x traffic spikes without redesign, downtime, or runaway bills.",
  "99.99% SLA-backed uptime in 40+ countries"
 ],
 "aws-consulting": [
  "AWS done right, the first time.",
  "Certified AWS architects who right-size your stack, cut waste, and engineer for Well-Architected resilience.",
  "30-45% lower monthly AWS spend"
 ],
 "kubernetes": [
  "Kubernetes that runs itself.",
  "Production-grade clusters with autoscaling, self-healing, and observability built in from day one.",
  "99.99% uptime across multi-region fleets"
 ],
 "cicd-automation": [
  "From commit to production in minutes.",
  "Automated CI/CD pipelines with built-in testing, security gates, and zero-downtime deploys.",
  "Weekly releases to dozens of safe deploys per day"
 ],
 "managed-hosting": [
  "Hosting that never wakes you up.",
  "Fully managed, monitored, and patched infrastructure backed by a 24/7 engineering team.",
  "99.99% uptime · 98% client retention"
 ],
 "infrastructure-monitoring": [
  "Know before your users do.",
  "Full-stack observability with Prometheus and Grafana that catches incidents before they become outages.",
  "Real-time monitoring behind our 99.99% SLA"
 ],
 "security-compliance": [
  "Compliant by design, secure by default.",
  "We bake security controls and audit-ready compliance into your infrastructure and code from day one.",
  "Trusted across 500+ delivered projects"
 ],
 "cloud-migration": [
  "Migrate to the cloud without the downtime.",
  "Zero-disruption migrations with rollback safety, validated cutovers, and no surprise bills.",
  "500+ projects with zero-downtime cutovers"
 ],
 "docker-containerization": [
  "Runs the same everywhere. Finally.",
  "We containerize your apps for identical behavior across dev, staging, and production.",
  "Dozens of reproducible deploys per day"
 ],
 "infrastructure-as-code": [
  "Infrastructure you can rebuild in minutes.",
  "Terraform-defined environments that are version-controlled, peer-reviewed, and reproducible on demand.",
  "Whole environments rebuilt from code in minutes"
 ],
 "managed-devops": [
  "Your DevOps team, fully managed.",
  "An embedded team of senior engineers running your pipelines, infrastructure, and on-call so you don't have to hire it.",
  "120+ specialists · 24/7 coverage"
 ],
 "digital-transformation": [
  "Transformation that ships, not slideware.",
  "We modernize legacy systems and processes into measurable engineering and business outcomes.",
  "500+ projects modernizing businesses in 40+ countries"
 ],
 "enterprise-software": [
  "Enterprise software built to outlast trends.",
  "Custom platforms that scale with your organization and integrate with the systems you already run.",
  "98% retention · 4.9/5 rating"
 ],
 "crm-development": [
  "A CRM that fits how you sell.",
  "Custom CRM platforms built around your pipeline, your data, and your team's actual workflow.",
  "Tailored CRM among 500+ delivered projects"
 ],
 "erp-development": [
  "One system to run the whole business.",
  "Custom ERP platforms that unify finance, operations, and inventory into a single source of truth.",
  "Backed by 12+ years and 120+ specialists"
 ],
 "cybersecurity": [
  "Security built by engineers, not just scanners.",
  "Continuous threat monitoring, hardening, and incident response from engineers who understand your stack end to end.",
  "24/7 coverage at 99.99% uptime"
 ]
};

export const SVC_QUOTE: Record<string, number> = {"software-development": 0, "saas-development": 11, "web-applications": 1, "mobile-applications": 4, "api-development": 1, "ai-automation": 8, "ui-ux-design": 9, "devops": 0, "cloud-infrastructure": 5, "aws-consulting": 5, "kubernetes": 0, "cicd-automation": 0, "managed-hosting": 6, "infrastructure-monitoring": 7, "security-compliance": 3, "cloud-migration": 2, "docker-containerization": 11, "infrastructure-as-code": 11, "managed-devops": 6, "digital-transformation": 9, "enterprise-software": 10, "crm-development": 10, "erp-development": 10, "cybersecurity": 3};

export const TESTI: [string, string, string][] = [
 [
  "We came to Sentrize with a monolith that took 40 minutes to deploy and broke under any real traffic. Eighteen months later we ship multiple times a day on Kubernetes with zero downtime.",
  "Daniel Okafor",
  "Founder & CEO · B2B SaaS"
 ],
 [
  "Their engineers pushed back on our architecture in week one and were right. Our p95 latency dropped from 1.8s to under 300ms.",
  "Priya Venkataraman",
  "CTO · E-commerce platform"
 ],
 [
  "Migrating 200+ microservices to AWS without a single customer-facing outage seemed impossible. Our support team didn't even know the date had passed.",
  "Marcus Hale",
  "VP Engineering · Enterprise fintech"
 ],
 [
  "We needed SOC 2 readiness in a quarter with no internal security function. Sentrize built our posture and walked us through the audit. We passed first time.",
  "Elena Sørensen",
  "CISO · Healthtech"
 ],
 [
  "Their React Native app shipped on iOS and Android from one codebase, on schedule, with a 99.7% crash-free rate. Our previous vendor never got us to launch.",
  "Tobias Reinhardt",
  "Head of Product · Marketplace"
 ],
 [
  "Our cloud bill was growing faster than revenue. Sentrize re-architected autoscaling and cut monthly AWS spend by 38% — with better performance.",
  "Amara Diallo",
  "Director of Operations · Logistics SaaS"
 ],
 [
  "They documented everything, trained my team, and made themselves replaceable. That's rare and it earned my trust.",
  "Jonathan Wells",
  "CTO · Insurtech scale-up"
 ],
 [
  "Sentrize delivered observability that catches issues before our customers do. We've held our uptime commitments every quarter since.",
  "Sofia Marchetti",
  "VP Engineering · Payments"
 ],
 [
  "The AI automation work paid for itself in five months — it eliminated roughly 30 hours of manual data entry per week across the ops team.",
  "Kwame Boateng",
  "Operations Director · B2B services"
 ],
 [
  "With Sentrize I talk to the people writing the code. The quality rivals the big consultancies and the responsiveness is in a different league.",
  "Rachel Lindqvist",
  "Founder · EdTech"
 ],
 [
  "They rebuilt the CRM/ERP integration three previous teams gave up on. Data flows in real time instead of overnight batches.",
  "David Nakamura",
  "Head of Product · Manufacturing"
 ],
 [
  "Infrastructure-as-code changed how we operate. Every environment is reproducible from Terraform and onboarding takes a day instead of a week.",
  "Isabella Costa",
  "VP Engineering · Cloud-native SaaS"
 ]
];

export const IMG_MAP: Record<string, string> = {"software-development": "code", "saas-development": "analytics", "web-applications": "code2", "mobile-applications": "mobile", "api-development": "code3", "ai-automation": "ai", "ui-ux-design": "design", "devops": "server", "cloud-infrastructure": "network", "aws-consulting": "racks", "kubernetes": "containers", "cicd-automation": "circuit", "managed-hosting": "server", "infrastructure-monitoring": "dashboard", "security-compliance": "security", "cloud-migration": "network", "docker-containerization": "containers", "infrastructure-as-code": "code5", "managed-devops": "team2", "digital-transformation": "officeteam", "enterprise-software": "building", "crm-development": "team2", "erp-development": "meeting", "cybersecurity": "seclock", "about": "team", "team": "collab", "careers": "collab", "partners": "handshake", "success-stories": "analytics", "testimonials": "officeteam", "contact": "meeting", "services": "code4", "solutions": "network", "pricing": "building", "blog": "code5", "documentation": "code2", "case-studies": "analytics", "white-papers": "writing", "knowledge-base": "paper", "api-docs": "code3", "help-center": "support", "open-ticket": "support", "service-status": "server", "sla-policy": "writing", "customer-portal": "dashboard", "faq": "support", "aws-partner": "racks", "technology-partners": "network", "referral-program": "handshake", "agency-partnership": "team2", "reseller-program": "meeting", "privacy-policy": "security", "terms-of-service": "writing"};

export const PHOTOS: Record<string, string> = {"code": "1461749280684-dccba630e2f6", "code2": "1498050108023-c5249f4df085", "code3": "1555066931-4365d14bab8c", "code4": "1542831371-29b0f74f9713", "code5": "1487058792275-0ad4aaf24ca7", "server": "1558494949-ef010cbdcc31", "racks": "1544197150-b99a580bb7a8", "circuit": "1518770660439-4636190af475", "network": "1451187580459-43490279c0fa", "containers": "1494412519320-aa613dfb7738", "team": "1522071820081-009f0129c71c", "officeteam": "1600880292203-757bb62b4baf", "collab": "1531482615713-2afd69097998", "team2": "1521737604893-d14cc237f11d", "security": "1550751827-4bd374c3f58b", "seclock": "1563013544-824ae1b704d3", "mobile": "1512941937669-90a1b58e7e9c", "analytics": "1551288049-bebda4e38f71", "dashboard": "1460925895917-afdab827c52f", "meeting": "1454165804606-c3d57bc86b40", "building": "1486406146926-c627a92ad1ab", "handshake": "1521791136064-7986c2920216", "ai": "1620712943543-bcc4688e7485", "ai2": "1535378917042-10a22c95931a", "design": "1561070791-2526d30994b5", "writing": "1450101499163-c8848c66ca85", "paper": "1517842645767-c639042777db", "support": "1556745757-8d76bdb6984b"};

export const SERVICE_SLUGS = Object.keys(SERVICES);
export function photoForService(slug: string){ return PHOTOS[IMG_MAP[slug] ?? 'code'] ?? PHOTOS['code']; }
export function unsplash(pid: string, w = 1200, h = 800){ return `https://images.unsplash.com/photo-${pid}?auto=format&fit=crop&w=${w}&h=${h}&q=80`; }
