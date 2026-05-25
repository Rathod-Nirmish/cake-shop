import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Blog | Isabella",
  description:
    "Baking tips, seasonal inspirations, and behind-the-scenes stories from our studio.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        eyebrow="The Blog"
        title="Sweet Stories"
        subtitle="Tips, recipes, and inspiration from our studio kitchen."
      />
      <section className="py-20 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl">
          <p className="text-muted-foreground text-center py-20">
            Blog posts coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
