"use client";

import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center gap-6">
      <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">
        Error
      </span>
      <h2 className="font-serif text-4xl font-light text-foreground">
        Something went wrong
      </h2>
      <p className="text-muted-foreground max-w-sm">
        We&apos;re sorry — an unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-primary px-8 py-3 text-sm font-bold tracking-widest text-primary-foreground hover:bg-primary/90 transition-all"
      >
        TRY AGAIN
      </button>
    </main>
  );
}
