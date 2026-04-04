import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { MapEmbed } from "@/components/sections/contact/MapEmbed";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact | Isabella",
  description: "Get in touch with Isabella Artisanal Patisserie.",
};

export default function ContactPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }
  return (
    <main>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Create Together"
        subtitle="We would love to hear about your celebration. Reach out and let's talk cake."
      />
      <section className="py-20 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <MapEmbed />
        </div>
      </section>
    </main>
  );
}
