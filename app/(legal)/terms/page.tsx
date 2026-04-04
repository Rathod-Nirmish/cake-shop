import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service | Isabella",
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <section className="py-16 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-3xl prose prose-sm text-muted-foreground">
          <p>Last updated: April 2026</p>
          <p>
            By placing an order with Isabella Artisanal Cakes you agree to our
            booking terms, cancellation policy, and payment conditions. Custom
            cakes require a 50% deposit upon confirmation. Cancellations within
            72 hours of the delivery date are non-refundable.
          </p>
          <p>
            Questions? Email us at{" "}
            <a href="mailto:hello@isabellacakes.com">hello@isabellacakes.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
