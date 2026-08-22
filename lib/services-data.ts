// Generated from content-export by the migration generator. Do not edit by hand.
export interface Service {
  slug: string; title: string; category: string; seoTitle: string;
  seoDescription: string; headline: string; lead: string; proof: string;
  heroImage: string; overview: string; overviewImage: string; checks: string[];
  process: { title: string; detail: string }[]; tags: string[];
  quote: { text: string; name: string; role: string };
  related: { title: string; slug: string }[];
}

export const SERVICES: Service[] = [
  {
    "slug": "ai-automation",
    "title": "AI & Automation Solutions",
    "category": "Products",
    "seoTitle": "AI & Automation Solutions",
    "seoDescription": "We embed AI and workflow automation into real operations and tie every deployment to a cost or throughput metric.",
    "headline": "Automation that turns manual hours into measurable savings.",
    "lead": "We embed AI and workflow automation into real operations and tie every deployment to a cost or throughput metric.",
    "proof": "50+ engineers & specialists",
    "heroImage": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We build AI and automation that solve concrete problems, from document processing and intelligent search to workflows that move data between systems without human copy-paste. Every feature is scoped against a measurable outcome.",
    "overviewImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Workflow automation and process integration",
      "LLM and AI feature integration",
      "Document processing and intelligent search",
      "Clean API delivery and system connectivity",
      "Monitoring and outcome measurement"
    ],
    "process": [
      {
        "title": "Find the use case",
        "detail": "We scope automation against a real, measurable outcome."
      },
      {
        "title": "Integrate",
        "detail": "LLMs and custom logic exposed via clean APIs."
      },
      {
        "title": "Operate",
        "detail": "Deployed on AWS with monitoring on quality and cost."
      }
    ],
    "tags": [
      "Node.js",
      "TypeScript",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "quote": {
      "text": "The AI automation work paid for itself in five months — it eliminated roughly 30 hours of manual data entry per week across the ops team.",
      "name": "Route:",
      "role": "/ai-automation"
    },
    "related": [
      {
        "title": "API Development & Integrations",
        "slug": "api-development"
      },
      {
        "title": "Custom Software Development",
        "slug": "software-development"
      },
      {
        "title": "SaaS Product Development",
        "slug": "saas-development"
      }
    ]
  },
  {
    "slug": "api-development",
    "title": "API Development & Integrations",
    "category": "Products",
    "seoTitle": "API Development & Integrations",
    "seoDescription": "Versioned, documented REST and GraphQL APIs with the rate limiting, auth, and contracts that make integrations dependable at scale.",
    "headline": "APIs your partners can build a business on.",
    "lead": "Versioned, documented REST and GraphQL APIs with the rate limiting, auth, and contracts that make integrations dependable at scale.",
    "proof": "99.99% uptime, SLA-backed",
    "heroImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We design APIs that are clear to consume and stable to depend on — with versioning, authentication, and documentation built in — and connect your stack to payments, CRMs, messaging, and internal systems.",
    "overviewImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "REST and GraphQL API design",
      "Authentication, versioning, and rate limiting",
      "Third-party and payment integrations",
      "Webhook handling and retry logic",
      "API documentation and developer tooling"
    ],
    "process": [
      {
        "title": "Contract first",
        "detail": "We define clear, versioned API contracts."
      },
      {
        "title": "Build & secure",
        "detail": "Auth, rate limiting, and resilient integrations."
      },
      {
        "title": "Document",
        "detail": "Reference docs and tooling your developers will use."
      }
    ],
    "tags": [
      "Node.js",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "Redis"
    ],
    "quote": {
      "text": "Their engineers pushed back on our architecture in week one and were right. Our p95 latency dropped from 1.8s to under 300ms.",
      "name": "Route:",
      "role": "/api-development"
    },
    "related": [
      {
        "title": "Custom Software Development",
        "slug": "software-development"
      },
      {
        "title": "SaaS Product Development",
        "slug": "saas-development"
      },
      {
        "title": "AI & Automation Solutions",
        "slug": "ai-automation"
      }
    ]
  },
  {
    "slug": "aws-consulting",
    "title": "AWS Consulting",
    "category": "Solutions",
    "seoTitle": "AWS Consulting",
    "seoDescription": "Certified AWS architects who right-size your stack, cut waste, and engineer for Well-Architected resilience.",
    "headline": "AWS done right, the first time.",
    "lead": "Certified AWS architects who right-size your stack, cut waste, and engineer for Well-Architected resilience.",
    "proof": "30-45% lower monthly AWS spend",
    "heroImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We design and operate production workloads on AWS to Well-Architected principles, with attention to security, reliability, and spend.",
    "overviewImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "VPC, networking, and IAM configuration",
      "Compute selection (EC2, ECS, serverless)",
      "Managed databases with RDS",
      "Terraform provisioning and cost reviews",
      "Well-Architected assessment"
    ],
    "process": [
      {
        "title": "Review",
        "detail": "Well-Architected assessment of your account."
      },
      {
        "title": "Build",
        "detail": "Secure, codified, right-sized infrastructure."
      },
      {
        "title": "Optimize",
        "detail": "Ongoing cost and reliability tuning."
      }
    ],
    "tags": [
      "AWS",
      "Terraform",
      "Docker",
      "PostgreSQL",
      "Prometheus"
    ],
    "quote": {
      "text": "Our cloud bill was growing faster than revenue. Sentrize re-architected autoscaling and cut monthly AWS spend by 38% — with better performance.",
      "name": "Route:",
      "role": "/aws-consulting"
    },
    "related": [
      {
        "title": "Cloud Infrastructure",
        "slug": "cloud-infrastructure"
      },
      {
        "title": "Kubernetes Solutions",
        "slug": "kubernetes"
      },
      {
        "title": "Cloud Migration",
        "slug": "cloud-migration"
      }
    ]
  },
  {
    "slug": "cicd-automation",
    "title": "CI/CD Automation",
    "category": "Solutions",
    "seoTitle": "CI/CD Automation",
    "seoDescription": "Automated CI/CD pipelines with built-in testing, security gates, and zero-downtime deploys.",
    "headline": "From commit to production in minutes.",
    "lead": "Automated CI/CD pipelines with built-in testing, security gates, and zero-downtime deploys.",
    "proof": "Weekly releases to dozens of safe deploys per day",
    "heroImage": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "Using GitHub Actions or GitLab CI, we automate linting, testing, container builds, and environment promotion, with deployment gates and rollback paths.",
    "overviewImage": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Automated test and lint stages",
      "Container image build and registry push",
      "Staged environment promotion and approvals",
      "Blue-green and canary deploy strategies",
      "Build caching and pipeline observability"
    ],
    "process": [
      {
        "title": "Map the flow",
        "detail": "From commit to production, with safeguards at each stage."
      },
      {
        "title": "Automate",
        "detail": "Tests, builds, and promotion on every merge."
      },
      {
        "title": "Harden",
        "detail": "Rollbacks, gates, and fast feedback."
      }
    ],
    "tags": [
      "GitHub Actions",
      "GitLab CI",
      "Docker",
      "Kubernetes",
      "Terraform"
    ],
    "quote": {
      "text": "We came to Sentrize with a monolith that took 40 minutes to deploy and broke under any real traffic. Eighteen months later we ship multiple times a day on Kubernetes with zero downtime.",
      "name": "Route:",
      "role": "/cicd-automation"
    },
    "related": [
      {
        "title": "DevOps Services",
        "slug": "devops"
      },
      {
        "title": "Kubernetes Solutions",
        "slug": "kubernetes"
      },
      {
        "title": "Infrastructure as Code",
        "slug": "infrastructure-as-code"
      }
    ]
  },
  {
    "slug": "cloud-infrastructure",
    "title": "Cloud Infrastructure",
    "category": "Solutions",
    "seoTitle": "Cloud Infrastructure",
    "seoDescription": "Cloud foundations that handle 10x traffic spikes without redesign, downtime, or runaway bills.",
    "headline": "Infrastructure that scales before you do.",
    "lead": "Cloud foundations that handle 10x traffic spikes without redesign, downtime, or runaway bills.",
    "proof": "99.99% SLA-backed uptime in 23+ countries",
    "heroImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We design cloud environments that match your workload instead of over-provisioning by default, with horizontal scaling, sensible failover, and clear cost visibility.",
    "overviewImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Cloud architecture and capacity planning",
      "Infrastructure as code with Terraform",
      "Auto-scaling and high-availability setup",
      "Cost monitoring and optimization",
      "Backup and disaster recovery design"
    ],
    "process": [
      {
        "title": "Design",
        "detail": "Architecture matched to your workload and budget."
      },
      {
        "title": "Provision",
        "detail": "Everything codified and reproducible."
      },
      {
        "title": "Optimize",
        "detail": "Right-sized, observable, cost-aware."
      }
    ],
    "tags": [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "PostgreSQL"
    ],
    "quote": {
      "text": "Our cloud bill was growing faster than revenue. Sentrize re-architected autoscaling and cut monthly AWS spend by 38% — with better performance.",
      "name": "Route:",
      "role": "/cloud-infrastructure"
    },
    "related": [
      {
        "title": "AWS Consulting",
        "slug": "aws-consulting"
      },
      {
        "title": "Cloud Migration",
        "slug": "cloud-migration"
      },
      {
        "title": "Infrastructure as Code",
        "slug": "infrastructure-as-code"
      }
    ]
  },
  {
    "slug": "cloud-migration",
    "title": "Cloud Migration",
    "category": "Solutions",
    "seoTitle": "Cloud Migration",
    "seoDescription": "Zero-disruption migrations with rollback safety, validated cutovers, and no surprise bills.",
    "headline": "Migrate to the cloud without the downtime.",
    "lead": "Zero-disruption migrations with rollback safety, validated cutovers, and no surprise bills.",
    "proof": "500+ projects with zero-downtime cutovers",
    "heroImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We migrate legacy and on-premises workloads to cloud-native architecture with infrastructure as code, observability, and zero-downtime cutover.",
    "overviewImage": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Migration assessment and dependency mapping",
      "Re-architecture and containerization where it pays off",
      "Infrastructure as code for the target estate",
      "Data migration with validation and rollback",
      "Zero-downtime cutover and post-migration tuning"
    ],
    "process": [
      {
        "title": "Assess",
        "detail": "Map workloads, dependencies, and risks."
      },
      {
        "title": "Migrate",
        "detail": "Codified, validated, reversible steps."
      },
      {
        "title": "Optimize",
        "detail": "Right-size and tune on the new estate."
      }
    ],
    "tags": [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "PostgreSQL"
    ],
    "quote": {
      "text": "Migrating 200+ microservices to AWS without a single customer-facing outage seemed impossible. Our support team didn't even know the date had passed.",
      "name": "Route:",
      "role": "/cloud-migration"
    },
    "related": [
      {
        "title": "Cloud Infrastructure",
        "slug": "cloud-infrastructure"
      },
      {
        "title": "AWS Consulting",
        "slug": "aws-consulting"
      },
      {
        "title": "Docker Containerization",
        "slug": "docker-containerization"
      }
    ]
  },
  {
    "slug": "crm-development",
    "title": "Custom CRM Development",
    "category": "Enterprise",
    "seoTitle": "Custom CRM Development",
    "seoDescription": "Custom CRM platforms built around your pipeline, your data, and your team's actual workflow.",
    "headline": "A CRM that fits how you sell.",
    "lead": "Custom CRM platforms built around your pipeline, your data, and your team's actual workflow.",
    "proof": "Tailored CRM among 500+ delivered projects",
    "heroImage": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "When packaged CRMs can't model how you really work, we build one that does — integrated with your stack and owned entirely by you.",
    "overviewImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Pipeline, contact, and activity modeling",
      "Automation and workflow rules",
      "Reporting and forecasting dashboards",
      "Email, calendar, and telephony integration",
      "Role-based access and data governance"
    ],
    "process": [
      {
        "title": "Model",
        "detail": "Capture your real sales and service flows."
      },
      {
        "title": "Build",
        "detail": "Automation, reporting, and integrations."
      },
      {
        "title": "Adopt",
        "detail": "Migration, training, and rollout support."
      }
    ],
    "tags": [
      "Laravel",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS"
    ],
    "quote": {
      "text": "They rebuilt the CRM/ERP integration three previous teams gave up on. Data flows in real time instead of overnight batches.",
      "name": "Route:",
      "role": "/crm-development"
    },
    "related": [
      {
        "title": "Enterprise Software Development",
        "slug": "enterprise-software"
      },
      {
        "title": "ERP Development",
        "slug": "erp-development"
      },
      {
        "title": "API Development & Integrations",
        "slug": "api-development"
      }
    ]
  },
  {
    "slug": "cybersecurity",
    "title": "Cybersecurity Services",
    "category": "Enterprise",
    "seoTitle": "Cybersecurity Services",
    "seoDescription": "Continuous threat monitoring, hardening, and incident response from engineers who understand your stack end to end.",
    "headline": "Security built by engineers, not just scanners.",
    "lead": "Continuous threat monitoring, hardening, and incident response from engineers who understand your stack end to end.",
    "proof": "24/7 coverage at 99.99% uptime",
    "heroImage": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We assess your security posture, fix what matters by impact, and put monitoring in place so anomalies are caught early — with support for the audits you need to pass.",
    "overviewImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Application and infrastructure security review",
      "Penetration-style testing and threat modeling",
      "Identity, access, and secrets hardening",
      "Continuous monitoring and incident readiness",
      "Compliance support (SOC 2, ISO 27001, GDPR)"
    ],
    "process": [
      {
        "title": "Assess",
        "detail": "Prioritized findings, not checklist theatre."
      },
      {
        "title": "Harden",
        "detail": "Close the gaps that carry real risk."
      },
      {
        "title": "Monitor",
        "detail": "Detect, respond, and stay audit-ready."
      }
    ],
    "tags": [
      "AWS",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana"
    ],
    "quote": {
      "text": "We needed SOC 2 readiness in a quarter with no internal security function. Sentrize built our posture and walked us through the audit. We passed first time.",
      "name": "Route:",
      "role": "/cybersecurity"
    },
    "related": [
      {
        "title": "Security & Compliance",
        "slug": "security-compliance"
      },
      {
        "title": "Enterprise Software Development",
        "slug": "enterprise-software"
      },
      {
        "title": "Managed DevOps",
        "slug": "managed-devops"
      }
    ]
  },
  {
    "slug": "devops",
    "title": "DevOps Services",
    "category": "Solutions",
    "seoTitle": "DevOps Services",
    "seoDescription": "We rebuild your delivery pipeline so engineering moves at startup speed with enterprise discipline.",
    "headline": "Ship faster. Break nothing. Sleep better.",
    "lead": "We rebuild your delivery pipeline so engineering moves at startup speed with enterprise discipline.",
    "proof": "Lead time to production cut 60%+ in the first quarter",
    "heroImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We turn manual processes into pipelines your team can trust — infrastructure defined in code, deployments through CI/CD, and metrics flowing into dashboards so problems surface before users notice.",
    "overviewImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Infrastructure as code and configuration management",
      "CI/CD pipeline design and automation",
      "Monitoring, alerting, and dashboards",
      "Log aggregation and incident runbooks",
      "Secrets management and access control"
    ],
    "process": [
      {
        "title": "Assess",
        "detail": "We audit your current delivery and reliability gaps."
      },
      {
        "title": "Automate",
        "detail": "Pipelines, IaC, and observability wired in."
      },
      {
        "title": "Operate",
        "detail": "Fewer incidents, faster, calmer releases."
      }
    ],
    "tags": [
      "Terraform",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "GitHub Actions"
    ],
    "quote": {
      "text": "We came to Sentrize with a monolith that took 40 minutes to deploy and broke under any real traffic. Eighteen months later we ship multiple times a day on Kubernetes with zero downtime.",
      "name": "Route:",
      "role": "/devops"
    },
    "related": [
      {
        "title": "CI/CD Automation",
        "slug": "cicd-automation"
      },
      {
        "title": "Infrastructure as Code",
        "slug": "infrastructure-as-code"
      },
      {
        "title": "Infrastructure Monitoring",
        "slug": "infrastructure-monitoring"
      }
    ]
  },
  {
    "slug": "digital-transformation",
    "title": "Digital Transformation",
    "category": "Enterprise",
    "seoTitle": "Digital Transformation",
    "seoDescription": "We modernize legacy systems and processes into measurable engineering and business outcomes.",
    "headline": "Transformation that ships, not slideware.",
    "lead": "We modernize legacy systems and processes into measurable engineering and business outcomes.",
    "proof": "500+ projects modernizing businesses in 23+ countries",
    "heroImage": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We help established organizations move from slow, manual, legacy-bound delivery to modern engineering practices, without a risky big-bang rewrite.",
    "overviewImage": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Modernization roadmap and prioritization",
      "Incremental legacy migration",
      "Cloud-native re-platforming",
      "Delivery automation and team enablement",
      "Measurable reliability and velocity gains"
    ],
    "process": [
      {
        "title": "Assess",
        "detail": "Map systems, constraints, and opportunities."
      },
      {
        "title": "Modernize",
        "detail": "Migrate incrementally, prove value early."
      },
      {
        "title": "Enable",
        "detail": "Leave your team faster and self-sufficient."
      }
    ],
    "tags": [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Node.js",
      "React",
      "PostgreSQL"
    ],
    "quote": {
      "text": "With Sentrize I talk to the people writing the code. The quality rivals the big consultancies and the responsiveness is in a different league.",
      "name": "Route:",
      "role": "/digital-transformation"
    },
    "related": [
      {
        "title": "Enterprise Software Development",
        "slug": "enterprise-software"
      },
      {
        "title": "Cloud Migration",
        "slug": "cloud-migration"
      },
      {
        "title": "Managed DevOps",
        "slug": "managed-devops"
      }
    ]
  },
  {
    "slug": "docker-containerization",
    "title": "Docker Containerization",
    "category": "Solutions",
    "seoTitle": "Docker Containerization",
    "seoDescription": "We containerize your apps for identical behavior across dev, staging, and production.",
    "headline": "Runs the same everywhere. Finally.",
    "lead": "We containerize your apps for identical behavior across dev, staging, and production.",
    "proof": "Dozens of reproducible deploys per day",
    "heroImage": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "Containerization removes “works on my machine” for good. We package your apps with Docker so they run identically in dev, staging, and production.",
    "overviewImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Application containerization and image optimization",
      "Multi-stage builds and small, secure images",
      "Local development parity with production",
      "Registry setup and image scanning",
      "A clean path to Kubernetes orchestration"
    ],
    "process": [
      {
        "title": "Package",
        "detail": "Multi-stage, minimal, secure images."
      },
      {
        "title": "Standardize",
        "detail": "Dev/prod parity and image scanning."
      },
      {
        "title": "Scale",
        "detail": "A clean path to orchestration."
      }
    ],
    "tags": [
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions"
    ],
    "quote": {
      "text": "Infrastructure-as-code changed how we operate. Every environment is reproducible from Terraform and onboarding takes a day instead of a week.",
      "name": "Route:",
      "role": "/docker-containerization"
    },
    "related": [
      {
        "title": "Kubernetes Solutions",
        "slug": "kubernetes"
      },
      {
        "title": "CI/CD Automation",
        "slug": "cicd-automation"
      },
      {
        "title": "Cloud Infrastructure",
        "slug": "cloud-infrastructure"
      }
    ]
  },
  {
    "slug": "enterprise-software",
    "title": "Enterprise Software Development",
    "category": "Enterprise",
    "seoTitle": "Enterprise Software Development",
    "seoDescription": "Custom platforms that scale with your organization and integrate with the systems you already run.",
    "headline": "Enterprise software built to outlast trends.",
    "lead": "Custom platforms that scale with your organization and integrate with the systems you already run.",
    "proof": "98% retention · 4.9/5 rating",
    "heroImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We build and modernize the systems large organizations depend on, with the audit trails, access controls, and reliability that enterprise environments demand.",
    "overviewImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Scalable, service-oriented architecture",
      "SSO/SAML, audit logging, and RBAC",
      "Integration with existing enterprise systems",
      "High-availability, multi-region deployment",
      "Documented controls and compliance support"
    ],
    "process": [
      {
        "title": "Architect",
        "detail": "Service boundaries, security, and integration."
      },
      {
        "title": "Build",
        "detail": "Tested increments with governance baked in."
      },
      {
        "title": "Operate",
        "detail": "HA deployment with SLAs and monitoring."
      }
    ],
    "tags": [
      "Laravel",
      "Node.js",
      "React",
      "AWS",
      "Kubernetes",
      "PostgreSQL"
    ],
    "quote": {
      "text": "They rebuilt the CRM/ERP integration three previous teams gave up on. Data flows in real time instead of overnight batches.",
      "name": "Route:",
      "role": "/enterprise-software"
    },
    "related": [
      {
        "title": "Digital Transformation",
        "slug": "digital-transformation"
      },
      {
        "title": "Custom CRM Development",
        "slug": "crm-development"
      },
      {
        "title": "ERP Development",
        "slug": "erp-development"
      }
    ]
  },
  {
    "slug": "erp-development",
    "title": "ERP Development",
    "category": "Enterprise",
    "seoTitle": "ERP Development",
    "seoDescription": "Custom ERP platforms that unify finance, operations, and inventory into a single source of truth.",
    "headline": "One system to run the whole business.",
    "lead": "Custom ERP platforms that unify finance, operations, and inventory into a single source of truth.",
    "proof": "Backed by 12+ years and 50+ specialists",
    "heroImage": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We build and integrate ERP capabilities that fit your processes, replacing spreadsheets and disconnected tools with reliable, auditable workflows.",
    "overviewImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Finance, inventory, and operations modules",
      "Workflow automation and approvals",
      "Integration with existing systems and APIs",
      "Reporting, audit trails, and access control",
      "Phased rollout with data migration"
    ],
    "process": [
      {
        "title": "Map processes",
        "detail": "Understand operations end to end."
      },
      {
        "title": "Build modules",
        "detail": "Automated, auditable, integrated."
      },
      {
        "title": "Roll out",
        "detail": "Migrate data and onboard teams in phases."
      }
    ],
    "tags": [
      "Laravel",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker"
    ],
    "quote": {
      "text": "They rebuilt the CRM/ERP integration three previous teams gave up on. Data flows in real time instead of overnight batches.",
      "name": "Route:",
      "role": "/erp-development"
    },
    "related": [
      {
        "title": "Enterprise Software Development",
        "slug": "enterprise-software"
      },
      {
        "title": "Custom CRM Development",
        "slug": "crm-development"
      },
      {
        "title": "Digital Transformation",
        "slug": "digital-transformation"
      }
    ]
  },
  {
    "slug": "infrastructure-as-code",
    "title": "Infrastructure as Code",
    "category": "Solutions",
    "seoTitle": "Infrastructure as Code",
    "seoDescription": "Terraform-defined environments that are version-controlled, peer-reviewed, and reproducible on demand.",
    "headline": "Infrastructure you can rebuild in minutes.",
    "lead": "Terraform-defined environments that are version-controlled, peer-reviewed, and reproducible on demand.",
    "proof": "Whole environments rebuilt from code in minutes",
    "heroImage": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "Your entire environment is defined in version-controlled Terraform, so deployments are repeatable and disaster recovery is a tested procedure rather than a hope.",
    "overviewImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Terraform modules for your whole estate",
      "Version-controlled, reviewable changes",
      "Repeatable multi-environment provisioning",
      "Drift detection and policy guardrails",
      "Tested disaster recovery procedures"
    ],
    "process": [
      {
        "title": "Codify",
        "detail": "Capture your estate as Terraform modules."
      },
      {
        "title": "Review",
        "detail": "Every change via pull request."
      },
      {
        "title": "Recover",
        "detail": "Rebuild environments on demand."
      }
    ],
    "tags": [
      "Terraform",
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions"
    ],
    "quote": {
      "text": "Infrastructure-as-code changed how we operate. Every environment is reproducible from Terraform and onboarding takes a day instead of a week.",
      "name": "Route:",
      "role": "/infrastructure-as-code"
    },
    "related": [
      {
        "title": "Cloud Infrastructure",
        "slug": "cloud-infrastructure"
      },
      {
        "title": "DevOps Services",
        "slug": "devops"
      },
      {
        "title": "CI/CD Automation",
        "slug": "cicd-automation"
      }
    ]
  },
  {
    "slug": "infrastructure-monitoring",
    "title": "Infrastructure Monitoring",
    "category": "Solutions",
    "seoTitle": "Infrastructure Monitoring",
    "seoDescription": "Full-stack observability with Prometheus and Grafana that catches incidents before they become outages.",
    "headline": "Know before your users do.",
    "lead": "Full-stack observability with Prometheus and Grafana that catches incidents before they become outages.",
    "proof": "Real-time monitoring behind our 99.99% SLA",
    "heroImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We instrument your systems so failures show up in dashboards and alerts before your users notice them, and so you can act on real usage data.",
    "overviewImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Metrics, logging, and distributed tracing",
      "Dashboards for services and infrastructure",
      "Actionable alerting and on-call routing",
      "SLO and error-budget tracking",
      "Capacity and performance analysis"
    ],
    "process": [
      {
        "title": "Instrument",
        "detail": "Metrics, logs, and traces on every service."
      },
      {
        "title": "Visualize",
        "detail": "Dashboards built around your SLOs."
      },
      {
        "title": "Alert",
        "detail": "Signal over noise, routed to the right people."
      }
    ],
    "tags": [
      "Prometheus",
      "Grafana",
      "AWS",
      "Kubernetes",
      "Docker"
    ],
    "quote": {
      "text": "Sentrize delivered observability that catches issues before our customers do. We've held our uptime commitments every quarter since.",
      "name": "Route:",
      "role": "/infrastructure-monitoring"
    },
    "related": [
      {
        "title": "DevOps Services",
        "slug": "devops"
      },
      {
        "title": "Managed Hosting",
        "slug": "managed-hosting"
      },
      {
        "title": "Kubernetes Solutions",
        "slug": "kubernetes"
      }
    ]
  },
  {
    "slug": "kubernetes",
    "title": "Kubernetes Solutions",
    "category": "Solutions",
    "seoTitle": "Kubernetes Solutions",
    "seoDescription": "Production-grade clusters with autoscaling, self-healing, and observability built in from day one.",
    "headline": "Kubernetes that runs itself.",
    "lead": "Production-grade clusters with autoscaling, self-healing, and observability built in from day one.",
    "proof": "99.99% uptime across multi-region fleets",
    "heroImage": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We run applications on clusters built for real production demands — cluster setup, resource limits, autoscaling, ingress, and rolling deployments that don't drop traffic.",
    "overviewImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Application containerization with Docker",
      "Cluster setup and resource management",
      "Autoscaling, ingress, and service networking",
      "Rolling and zero-downtime deployments",
      "Cluster monitoring and observability"
    ],
    "process": [
      {
        "title": "Containerize",
        "detail": "Reproducible images and sane defaults."
      },
      {
        "title": "Orchestrate",
        "detail": "Clusters, autoscaling, and ingress."
      },
      {
        "title": "Observe",
        "detail": "Metrics and zero-downtime rollouts."
      }
    ],
    "tags": [
      "Kubernetes",
      "Docker",
      "AWS",
      "Terraform",
      "Prometheus",
      "Grafana"
    ],
    "quote": {
      "text": "We came to Sentrize with a monolith that took 40 minutes to deploy and broke under any real traffic. Eighteen months later we ship multiple times a day on Kubernetes with zero downtime.",
      "name": "Route:",
      "role": "/kubernetes"
    },
    "related": [
      {
        "title": "Docker Containerization",
        "slug": "docker-containerization"
      },
      {
        "title": "DevOps Services",
        "slug": "devops"
      },
      {
        "title": "Cloud Infrastructure",
        "slug": "cloud-infrastructure"
      }
    ]
  },
  {
    "slug": "managed-devops",
    "title": "Managed DevOps",
    "category": "Solutions",
    "seoTitle": "Managed DevOps",
    "seoDescription": "An embedded team of senior engineers running your pipelines, infrastructure, and on-call so you don't have to hire it.",
    "headline": "Your DevOps team, fully managed.",
    "lead": "An embedded team of senior engineers running your pipelines, infrastructure, and on-call so you don't have to hire it.",
    "proof": "50+ specialists · 24/7 coverage",
    "heroImage": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "An ongoing engagement where we run the operational side of your platform end to end, with defined SLAs and 24/7 coverage.",
    "overviewImage": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Pipeline and infrastructure ownership",
      "24/7 monitoring and on-call response",
      "Cost and performance optimization",
      "Security patching and compliance upkeep",
      "Regular reliability and capacity reviews"
    ],
    "process": [
      {
        "title": "Onboard",
        "detail": "We learn your stack and set SLAs."
      },
      {
        "title": "Run",
        "detail": "Pipelines, infra, and on-call handled."
      },
      {
        "title": "Improve",
        "detail": "Continuous reliability and cost work."
      }
    ],
    "tags": [
      "Terraform",
      "Kubernetes",
      "AWS",
      "Prometheus",
      "Grafana",
      "GitHub Actions"
    ],
    "quote": {
      "text": "They documented everything, trained my team, and made themselves replaceable. That's rare and it earned my trust.",
      "name": "Route:",
      "role": "/managed-devops"
    },
    "related": [
      {
        "title": "DevOps Services",
        "slug": "devops"
      },
      {
        "title": "Managed Hosting",
        "slug": "managed-hosting"
      },
      {
        "title": "Infrastructure Monitoring",
        "slug": "infrastructure-monitoring"
      }
    ]
  },
  {
    "slug": "managed-hosting",
    "title": "Managed Hosting",
    "category": "Solutions",
    "seoTitle": "Managed Hosting",
    "seoDescription": "Fully managed, monitored, and patched infrastructure backed by a 24/7 engineering team.",
    "headline": "Hosting that never wakes you up.",
    "lead": "Fully managed, monitored, and patched infrastructure backed by a 24/7 engineering team.",
    "proof": "99.99% uptime · 98% client retention",
    "heroImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We host and operate your applications so your team can focus on the product, with provisioning, security patching, automated backups, and round-the-clock monitoring.",
    "overviewImage": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Provisioning and environment management",
      "Security patching and dependency updates",
      "Automated backups and recovery testing",
      "24/7 monitoring and alerting",
      "Database tuning and performance checks"
    ],
    "process": [
      {
        "title": "Onboard",
        "detail": "We take stock of your stack and SLAs."
      },
      {
        "title": "Operate",
        "detail": "Patching, backups, and monitoring handled."
      },
      {
        "title": "Respond",
        "detail": "On-call coverage with rehearsed runbooks."
      }
    ],
    "tags": [
      "AWS",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Prometheus",
      "Grafana"
    ],
    "quote": {
      "text": "They documented everything, trained my team, and made themselves replaceable. That's rare and it earned my trust.",
      "name": "Route:",
      "role": "/managed-hosting"
    },
    "related": [
      {
        "title": "Managed DevOps",
        "slug": "managed-devops"
      },
      {
        "title": "Cloud Infrastructure",
        "slug": "cloud-infrastructure"
      },
      {
        "title": "Infrastructure Monitoring",
        "slug": "infrastructure-monitoring"
      }
    ]
  },
  {
    "slug": "mobile-applications",
    "title": "Mobile App Development",
    "category": "Products",
    "seoTitle": "Mobile App Development",
    "seoDescription": "React Native and Flutter apps that share one codebase across iOS and Android without sacrificing native polish.",
    "headline": "Native-quality mobile apps, shipped on every platform.",
    "lead": "React Native and Flutter apps that share one codebase across iOS and Android without sacrificing native polish.",
    "proof": "4.9/5 average client rating",
    "heroImage": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "Using React Native and Flutter, we deliver smooth interactions, offline support, and clean integration with your backend services, shipped through automated build pipelines.",
    "overviewImage": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Cross-platform iOS and Android development",
      "Offline-first data handling and sync",
      "Backend API integration and authentication",
      "Push notifications and secure local storage",
      "App store submission and release management"
    ],
    "process": [
      {
        "title": "Plan",
        "detail": "Define platforms, flows, and release strategy."
      },
      {
        "title": "Build",
        "detail": "One codebase, native feel, automated builds."
      },
      {
        "title": "Release",
        "detail": "TestFlight, Play Console, and OTA updates."
      }
    ],
    "tags": [
      "React Native",
      "Flutter",
      "TypeScript",
      "Node.js",
      "Redis"
    ],
    "quote": {
      "text": "Their React Native app shipped on iOS and Android from one codebase, on schedule, with a 99.7% crash-free rate. Our previous vendor never got us to launch.",
      "name": "Route:",
      "role": "/mobile-applications"
    },
    "related": [
      {
        "title": "Web Application Development",
        "slug": "web-applications"
      },
      {
        "title": "API Development & Integrations",
        "slug": "api-development"
      },
      {
        "title": "UI/UX Design",
        "slug": "ui-ux-design"
      }
    ]
  },
  {
    "slug": "saas-development",
    "title": "SaaS Product Development",
    "category": "Products",
    "seoTitle": "SaaS Product Development",
    "seoDescription": "Tenant isolation, billing, usage metering, and self-serve onboarding — the platform mechanics that turn a product into a recurring-revenue business.",
    "headline": "Multi-tenant SaaS built to grow margins, not just users.",
    "lead": "Tenant isolation, billing, usage metering, and self-serve onboarding — the platform mechanics that turn a product into a recurring-revenue business.",
    "proof": "98% client retention",
    "heroImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We build SaaS products that handle multiple customers, plans, and growth without re-architecting later — covering the foundations that separate a real platform from a demo.",
    "overviewImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Multi-tenant architecture and data isolation",
      "Subscription billing and plan management",
      "Role-based access and user management",
      "Usage metering and product analytics",
      "Scalable deployment on AWS via CI/CD"
    ],
    "process": [
      {
        "title": "Shape the MVP",
        "detail": "We define the smallest version that proves value, then plan the path beyond it."
      },
      {
        "title": "Build to scale",
        "detail": "Multi-tenant foundations, billing, and observability from day one."
      },
      {
        "title": "Grow deliberately",
        "detail": "We instrument adoption and iterate on real usage data."
      }
    ],
    "tags": [
      "React",
      "Next.js",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "AWS"
    ],
    "quote": {
      "text": "Infrastructure-as-code changed how we operate. Every environment is reproducible from Terraform and onboarding takes a day instead of a week.",
      "name": "Route:",
      "role": "/saas-development"
    },
    "related": [
      {
        "title": "Custom Software Development",
        "slug": "software-development"
      },
      {
        "title": "Web Application Development",
        "slug": "web-applications"
      },
      {
        "title": "API Development & Integrations",
        "slug": "api-development"
      }
    ]
  },
  {
    "slug": "security-compliance",
    "title": "Security & Compliance",
    "category": "Solutions",
    "seoTitle": "Security & Compliance",
    "seoDescription": "We bake security controls and audit-ready compliance into your infrastructure and code from day one.",
    "headline": "Compliant by design, secure by default.",
    "lead": "We bake security controls and audit-ready compliance into your infrastructure and code from day one.",
    "proof": "Trusted across 500+ delivered projects",
    "heroImage": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We assess and harden your applications and infrastructure against realistic threats, and support SOC 2, GDPR, and HIPAA requirements with documented controls.",
    "overviewImage": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Application and dependency security review",
      "Authentication and access hardening",
      "Secrets management and secure configuration",
      "Security checks integrated into CI/CD",
      "Compliance support (SOC 2, GDPR, HIPAA)"
    ],
    "process": [
      {
        "title": "Assess",
        "detail": "Find the gaps that actually matter."
      },
      {
        "title": "Harden",
        "detail": "Fix by impact, with controls in code."
      },
      {
        "title": "Sustain",
        "detail": "Monitoring and audit-ready documentation."
      }
    ],
    "tags": [
      "AWS",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "Prometheus"
    ],
    "quote": {
      "text": "We needed SOC 2 readiness in a quarter with no internal security function. Sentrize built our posture and walked us through the audit. We passed first time.",
      "name": "Route:",
      "role": "/security-compliance"
    },
    "related": [
      {
        "title": "Cybersecurity Services",
        "slug": "cybersecurity"
      },
      {
        "title": "DevOps Services",
        "slug": "devops"
      },
      {
        "title": "Infrastructure as Code",
        "slug": "infrastructure-as-code"
      }
    ]
  },
  {
    "slug": "software-development",
    "title": "Custom Software Development",
    "category": "Products",
    "seoTitle": "Custom Software Development",
    "seoDescription": "Production-grade systems on Laravel, Node.js, and TypeScript that scale with your business instead of being rewritten in two years.",
    "headline": "Custom software engineered to outlast its first release.",
    "lead": "Production-grade systems on Laravel, Node.js, and TypeScript that scale with your business instead of being rewritten in two years.",
    "proof": "500+ projects delivered across 23+ countries",
    "heroImage": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We design and build software that fits your workflows, not a generic template forced into shape. We model your domain carefully, write tested code, and document as we go, so the system you commission stays an asset rather than becoming technical debt.",
    "overviewImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Domain modeling and technical architecture",
      "Backend and frontend implementation",
      "Automated test coverage and code review",
      "Third-party system integration",
      "Documentation and full team handover"
    ],
    "process": [
      {
        "title": "Discovery & Strategy",
        "detail": "We map requirements, surface risks, and agree on scope and success metrics."
      },
      {
        "title": "Engineering & QA",
        "detail": "Senior engineers build in reviewable increments with automated tests on every commit."
      },
      {
        "title": "Deploy & Support",
        "detail": "We ship through CI/CD and stay on to monitor, tune, and extend."
      }
    ],
    "tags": [
      "Laravel",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "quote": {
      "text": "We came to Sentrize with a monolith that took 40 minutes to deploy and broke under any real traffic. Eighteen months later we ship multiple times a day on Kubernetes with zero downtime.",
      "name": "Route:",
      "role": "/software-development"
    },
    "related": [
      {
        "title": "Web Application Development",
        "slug": "web-applications"
      },
      {
        "title": "API Development & Integrations",
        "slug": "api-development"
      },
      {
        "title": "SaaS Product Development",
        "slug": "saas-development"
      }
    ]
  },
  {
    "slug": "ui-ux-design",
    "title": "UI/UX Design",
    "category": "Products",
    "seoTitle": "UI/UX Design",
    "seoDescription": "Research-led UI/UX that reduces drop-off, shortens onboarding, and makes complex enterprise products feel obvious.",
    "headline": "Design decisions backed by how users actually behave.",
    "lead": "Research-led UI/UX that reduces drop-off, shortens onboarding, and makes complex enterprise products feel obvious.",
    "proof": "Contributing to a 4.9/5 client rating",
    "heroImage": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "Our designers and engineers work together, so what gets handed off is buildable — not an idealized mockup that falls apart in implementation.",
    "overviewImage": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "User flow mapping and wireframing",
      "Interactive prototypes and design systems",
      "Accessibility-conscious component design",
      "Engineer-ready handoff and specs",
      "Usability validation and iteration"
    ],
    "process": [
      {
        "title": "Research",
        "detail": "We map real user flows and requirements."
      },
      {
        "title": "Design",
        "detail": "Prototypes and a consistent design system."
      },
      {
        "title": "Handoff",
        "detail": "Build-ready components and specs."
      }
    ],
    "tags": [
      "Figma",
      "React",
      "Next.js",
      "TypeScript"
    ],
    "quote": {
      "text": "With Sentrize I talk to the people writing the code. The quality rivals the big consultancies and the responsiveness is in a different league.",
      "name": "Route:",
      "role": "/ui-ux-design"
    },
    "related": [
      {
        "title": "Web Application Development",
        "slug": "web-applications"
      },
      {
        "title": "Mobile App Development",
        "slug": "mobile-applications"
      },
      {
        "title": "Custom Software Development",
        "slug": "software-development"
      }
    ]
  },
  {
    "slug": "web-applications",
    "title": "Web Application Development",
    "category": "Products",
    "seoTitle": "Web Application Development",
    "seoDescription": "React and Next.js applications tuned for sub-second loads, real-time data, and the conversion metrics your business is measured on.",
    "headline": "Web applications fast enough to keep your users.",
    "lead": "React and Next.js applications tuned for sub-second loads, real-time data, and the conversion metrics your business is measured on.",
    "proof": "99.99% SLA-backed uptime",
    "heroImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&h=680&q=80",
    "overview": "We build web apps that load quickly, handle traffic spikes, and stay responsive as features accumulate — with server-side rendering where it improves performance and SEO.",
    "overviewImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80",
    "checks": [
      "Component-driven frontend architecture",
      "Server-side rendering and performance tuning",
      "API and database design",
      "Accessibility and Core Web Vitals compliance",
      "Automated deployment pipelines"
    ],
    "process": [
      {
        "title": "Design & prototype",
        "detail": "Build-ready UI mapped to real user flows."
      },
      {
        "title": "Engineer",
        "detail": "Typed components, tested APIs, measured performance."
      },
      {
        "title": "Ship & optimize",
        "detail": "Automated releases and Core Web Vitals tracking."
      }
    ],
    "tags": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL"
    ],
    "quote": {
      "text": "Their engineers pushed back on our architecture in week one and were right. Our p95 latency dropped from 1.8s to under 300ms.",
      "name": "Route:",
      "role": "/web-applications"
    },
    "related": [
      {
        "title": "UI/UX Design",
        "slug": "ui-ux-design"
      },
      {
        "title": "API Development & Integrations",
        "slug": "api-development"
      },
      {
        "title": "Custom Software Development",
        "slug": "software-development"
      }
    ]
  }
];
