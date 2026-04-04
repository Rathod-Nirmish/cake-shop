import Hero from "@/components/layout/Hero";
import { SignatureCollections } from "@/components/sections/home/SignatureCollections";
import { CustomOrderCTA } from "@/components/sections/home/CustomOrderCTA";
import { ChefsStory } from "@/components/sections/home/ChefsStory";
import { GalleryPreview } from "@/components/sections/home/GalleryPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Hero />
      <SignatureCollections />
      <CustomOrderCTA />
      <ChefsStory />
      <GalleryPreview />
    </main>
  );
}
