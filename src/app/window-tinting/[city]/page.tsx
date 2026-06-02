import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES } from "@/lib/constants";
import CityServiceTemplate from "@/components/sections/CityServiceTemplate";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = CITIES.find((x) => x.slug === city);
  if (!c) return {};
  const title = `Window Tinting in ${c.name}, MI | Midwest Tint & Detail`;
  const description = `Premium ceramic window tinting in ${c.name}, MI by Moe and team. Up to 99% UV protection, infrared heat rejection, and a lifetime warranty. Serving ${c.name} and Metro Detroit. Free quote: (313) 729-0005.`;
  return {
    title,
    description,
    alternates: { canonical: `/window-tinting/${c.slug}` },
    openGraph: { title, description, url: `/window-tinting/${c.slug}` },
    twitter: { title, description },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = CITIES.find((x) => x.slug === city);
  if (!c) notFound();
  return <CityServiceTemplate city={c} />;
}
