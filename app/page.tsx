import Hero from "@/components/layout/Hero";
import { SignatureCollections } from "@/components/common/SignatureCollections";
import { CustomOrderCTA } from "@/components/common/CustomOrderCTA";
import { ChefsStory } from "@/components/common/ChefsStory";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Hero />
      <SignatureCollections />
      <CustomOrderCTA />
      <ChefsStory />
    </main>
  );
}
