import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/sections/gallery/GalleryGrid";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Gallery | Isabella",
  description:
    "A visual feast of our finest cakes — weddings, birthdays, and bespoke commissions.",
};

export default function GalleryPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }
  return (
    <main>
      <PageHeader
        eyebrow="Gallery"
        title="The Gallery of Textures"
        subtitle="Every image tells the story of a celebration we were honoured to be part of."
      />
      <GalleryGrid />
    </main>
  );
}
