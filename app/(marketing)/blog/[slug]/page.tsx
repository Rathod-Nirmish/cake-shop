import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} | Isabella Blog`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // TODO: fetch post from content/blog/{slug}.mdx
  if (!slug) notFound();

  return (
    <main className="py-20 px-6 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-muted-foreground">Post content for &ldquo;{slug}&rdquo; coming soon.</p>
      </div>
    </main>
  );
}
