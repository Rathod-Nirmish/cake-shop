import type { Metadata } from "next";
import { CollectionsClient } from "@/components/sections/collections/CollectionsClient";

export const metadata: Metadata = {
  title: "Exquisite Cake Collections | Isabella",
  description: "Explore our curated gallery of handcrafted edible art.",
};

export default function CollectionsPage() {
  return (
    <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
      {/* Header Content */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="h-px w-8 bg-[#D4AF37]"></span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            The 2024 Collection
          </span>
        </div>
        <h2 className="text-5xl font-black mb-4 tracking-tight">
          Artisanal Masterpieces
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Explore our curated gallery of handcrafted edible art. Each cake is a
          bespoke creation, balancing complex flavor profiles with breathtaking
          visual design.
        </p>
      </div>

      <CollectionsClient />
    </main>
  );
}
