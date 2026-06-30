import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES, SERVICE_SLUGS, HOOKS } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES[slug];
  if (!s) return {};
  const vp = HOOKS[slug]?.[1] ?? s.intro;
  return { title: s.title, description: vp.slice(0, 155) };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!SERVICES[slug]) notFound();
  return <ServiceDetail slug={slug} />;
}
