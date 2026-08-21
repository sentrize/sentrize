import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sentrize.com";

const PAGES: [path: string, priority: number][] = [
  ["", 1],
  ["/services", 0.9],
  ["/solutions", 0.9],
  ["/enterprise", 0.9],
  ["/pricing", 0.9],
  ["/about", 0.7],
  ["/careers", 0.7],
  ["/partners", 0.7],
  ["/contact", 0.7],
  ["/case-studies", 0.6],
  ["/blog", 0.6],
  ["/privacy-policy", 0.3],
  ["/terms-of-service", 0.3],
  ["/sla-policy", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(([path, priority]) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: priority >= 0.9 ? "weekly" : priority >= 0.6 ? "monthly" : "yearly",
    priority,
  }));
}
