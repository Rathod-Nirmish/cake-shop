import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Isabella",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-3xl prose prose-sm text-muted-foreground">
          <p>Last updated: April 2026</p>
          <p>
            Isabella Artisanal Cakes respects your privacy. We collect only the
            information needed to process your order and deliver outstanding
            service. We never sell your data to third parties.
          </p>
          <p>
            For full details or data removal requests, email{" "}
            <a href="mailto:hello@isabellacakes.com">hello@isabellacakes.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
