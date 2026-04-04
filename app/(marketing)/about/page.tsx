import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { OurStory } from "@/components/sections/about/OurStory";
import { TeamSection } from "@/components/sections/about/TeamSection";

export const metadata: Metadata = {
  title: "Our Story | Isabella",
  description:
    "Meet the team and learn about the passion behind Isabella Artisanal Patisserie.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title="The Story of Isabella"
        subtitle="Fifteen years of crafting edible memories — one bespoke cake at a time."
      />
      <OurStory />
      <TeamSection />
    </main>
  );
}
