import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/services";

const BASE_URL = "https://www.sentrize.com";

// Marketing pages under app/(site)/ plus the root landing and /aws.
// Keep this list in sync when adding/removing a page directory; the
// service-detail routes below are derived from SERVICE_SLUGS so they
// never drift from generateStaticParams.
const CORE_PAGES = ["", "/services", "/solutions", "/pricing", "/marketplace", "/aws"];

const COMPANY_PAGES = [
  "/about",
  "/team",
  "/careers",
  "/partners",
  "/portfolio",
  "/success-stories",
  "/testimonials",
  "/contact",
];

const CONTENT_PAGES = [
  "/blog",
  "/case-studies",
  "/white-papers",
  "/documentation",
  "/knowledge-base",
  "/api-docs",
  "/faq",
  "/help-center",
];

const PARTNER_PAGES = [
  "/aws-partner",
  "/technology-partners",
  "/referral-program",
  "/agency-partnership",
  "/reseller-program",
];

const SUPPORT_PAGES = [
  "/contact-support",
  "/open-ticket",
  "/service-status",
  "/customer-portal",
];

const LEGAL_PAGES = ["/privacy-policy", "/terms-of-service", "/sla-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ): MetadataRoute.Sitemap[number] => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("", 1, "weekly"),
    ...CORE_PAGES.filter((p) => p !== "").map((p) => entry(p, 0.9, "weekly")),
    ...SERVICE_SLUGS.map((slug) => entry(`/${slug}`, 0.8, "monthly")),
    ...COMPANY_PAGES.map((p) => entry(p, 0.7, "monthly")),
    ...CONTENT_PAGES.map((p) => entry(p, 0.6, "weekly")),
    ...PARTNER_PAGES.map((p) => entry(p, 0.5, "monthly")),
    ...SUPPORT_PAGES.map((p) => entry(p, 0.5, "monthly")),
    ...LEGAL_PAGES.map((p) => entry(p, 0.3, "yearly")),
  ];
}
