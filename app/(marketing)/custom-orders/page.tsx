import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CustomOrderCTA } from "@/components/sections/home/CustomOrderCTA";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Custom Orders | Isabella",
  description:
    "Commission a bespoke cake tailored entirely to your vision — flavors, tiers, and hand-crafted details.",
};

export default function CustomOrdersPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Bespoke Service"
        title="Your Dream, Our Flour"
        subtitle="Tell us your vision and we will craft a cake that exceeds every expectation."
      />
      <CustomOrderCTA />
      <section className="py-20 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl flex flex-col gap-8">
          <h2 className="font-serif text-3xl font-light text-foreground">
            Start Your Order
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
