import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center gap-6">
      <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">
        404
      </span>
      <h1 className="font-serif text-5xl font-light text-foreground">
        Page Not Found
      </h1>
      <p className="text-muted-foreground max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist — but we have plenty
        of beautiful cakes waiting for you.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-8 py-3 text-sm font-bold tracking-widest text-primary-foreground hover:bg-primary/90 transition-all"
      >
        BACK TO HOME
      </Link>
    </main>
  );
}
