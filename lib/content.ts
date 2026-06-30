// Real Sentrize content ported from build_v2.py — shared across pages.

export const METRICS: [string, string][] = [
  ["500+", "Projects delivered"],
  ["99.99%", "SLA-backed uptime"],
  ["98%", "Client retention"],
  ["120+", "Engineers & specialists"],
  ["40+", "Countries served"],
  ["4.9/5", "Average client rating"],
  ["12+", "Years in operation"],
  ["24/7", "Support coverage"],
];

export const VALUES: [string, string][] = [
  ["Engineering Rigor", "Production-grade discipline — architecture, testing, and code review — on every system we ship."],
  ["Radical Ownership", "Engineers own outcomes end to end, from first commit to the on-call page at 3 a.m."],
  ["Transparent Partnership", "Clients see roadmaps, metrics, and trade-offs in real time, not polished status theatre."],
  ["Security by Default", "Least privilege, encryption, and auditability designed in from the first line of code."],
  ["Pragmatic Innovation", "We adopt new technology when it measurably improves reliability, speed, or cost."],
  ["Continuous Improvement", "Every incident and release is data that makes the next one better."],
];

export const MILESTONES: [string, string][] = [
  ["2014", "Sentrize is founded, delivering its first custom platform builds for early SME clients."],
  ["2016", "Crossed 50 delivered projects and established a dedicated DevOps practice."],
  ["2017", "Became an AWS Partner and opened a second delivery region across new time zones."],
  ["2019", "Achieved ISO 27001 and SOC 2 Type II, formalizing our enterprise security posture."],
  ["2020", "Scaled to a fully distributed model across 25+ countries without missing SLAs."],
  ["2022", "Reached AWS Advanced Tier Partner status and surpassed 300 projects at 99.99% uptime."],
  ["2024", "Launched a dedicated AI & Automation practice across client products and pipelines."],
  ["2026", "Surpassed 500 projects across 40+ countries with 120+ specialists and 98% retention."],
];

export const AWARDS: [string, string][] = [
  ["Cloud Engineering Partner of the Year", "2019 · Asia-Pacific Cloud Excellence Awards"],
  ["Top B2B Software Developers", "2021 · Clutch Global Recognition"],
  ["Best DevOps Transformation Provider", "2022 · Enterprise Technology Awards"],
  ["Excellence in Managed Cloud Services", "2023 · Global IT Services Council"],
  ["Employer of Choice in Technology", "2025 · International Workplace Excellence Awards"],
];

export const CERTS: [string, string][] = [
  ["ISO 27001", "Certified information security management governing how we handle and protect client data."],
  ["SOC 2 Type II", "Independently audited controls for security, availability, and confidentiality."],
  ["ISO 9001", "Certified quality management for consistent, repeatable engineering and delivery."],
  ["AWS Advanced Tier", "Validated AWS expertise across architecture, migration, and managed operations."],
  ["GDPR Compliant", "Data handling, processing, and retention aligned with EU data protection law."],
  ["HIPAA-Ready", "Engineering controls and infrastructure prepared for protected health workloads."],
];

// Curated, verified Unsplash photo ids (same set used by the static build)
export const PHOTOS: Record<string, string> = {
  network: "1451187580459-43490279c0fa",
  team: "1522071820081-009f0129c71c",
  officeteam: "1600880292203-757bb62b4baf",
  collab: "1531482615713-2afd69097998",
};
export function img(pid: string, w = 1200, h = 800) {
  return `https://images.unsplash.com/photo-${pid}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}
