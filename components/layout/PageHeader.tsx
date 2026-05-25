import React from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-section py-20 px-6 lg:px-20 text-center">
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-4">
        {eyebrow && (
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-16 bg-primary rounded-full mt-2" />
      </div>
    </section>
  );
}
