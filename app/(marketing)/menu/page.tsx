import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { MenuGrid } from "@/components/sections/menu/MenuGrid";

export const metadata: Metadata = {
  title: "Menu | Isabella",
  description:
    "Browse our full collection of bespoke cakes — wedding, birthday, and custom creations.",
};

export default function MenuPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Menu"
        title="Every Cake, a Masterpiece"
        subtitle="Filter by occasion or style to find your perfect creation."
      />
      <MenuGrid />
    </main>
  );
}
