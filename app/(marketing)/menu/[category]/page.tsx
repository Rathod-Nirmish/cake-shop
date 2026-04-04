import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { MenuGrid } from "@/components/sections/menu/MenuGrid";
import { MENU_CATEGORIES } from "@/lib/constants";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return MENU_CATEGORIES.filter((c) => c.slug !== "all").map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = MENU_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.label} | Isabella`,
    description: `Browse our ${cat.label.toLowerCase()} collection.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = MENU_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <main>
      <PageHeader eyebrow="Menu" title={cat.label} />
      <MenuGrid />
    </main>
  );
}
