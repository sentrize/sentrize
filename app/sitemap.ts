import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";
import { POSTS } from "@/lib/blog-data";
import { CASE_STUDIES } from "@/lib/case-studies-data";

const BASE_URL = "https://www.sentrize.com";

const PAGES: [path: string, priority: number][] = [
  ["", 1],
  ["/services", 0.9],
  ["/solutions", 0.9],
  ["/enterprise", 0.9],
  ["/pricing", 0.9],
  ["/mobile-simulator", 0.8],
  ["/about", 0.7],
  ["/careers", 0.7],
  ["/partners", 0.7],
  ["/contact", 0.7],
  ["/case-studies", 0.6],
  ["/blog", 0.6],
  ["/service-status", 0.4],
  ["/privacy-policy", 0.3],
  ["/terms-of-service", 0.3],
  ["/sla-policy", 0.3],
];

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
    ...PAGES.map(([path, priority]) =>
      entry(path, priority, priority >= 0.9 ? "weekly" : priority >= 0.6 ? "monthly" : "yearly")
    ),
    ...SERVICES.map((s) => entry(`/${s.slug}`, 0.8, "monthly")),
    ...POSTS.map((p) => entry(`/blog/${p.slug}`, 0.5, "monthly")),
    ...CASE_STUDIES.map((c) => entry(`/case-studies/${c.slug}`, 0.5, "monthly")),
  ];
}
