"use client";

import React from "react";
import { FileEdit, Utensils, PencilRuler, Leaf, Truck } from "lucide-react";

export function CustomOrderCTA() {
  return (
    <section className="relative bg-section py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 text-center">
        {/* Top Floating Icon */}
        <div className="mb-12 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-xl text-primary transition-transform hover:scale-105 duration-300">
            <FileEdit className="h-8 w-8 text-primary" strokeWidth={2} />
          </div>
        </div>

        {/* Text Details */}
        <h2 className="font-serif text-5xl font-light mb-6 text-foreground">
          Your Dream, Our Flour
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10">
          Let&apos;s collaborate to create a masterpiece that tells your story.
          Our bespoke service ensures every detail—from flavor profiles to
          hand-painted accents—is perfectly baked to your vision.
        </p>

        {/* CTA Button */}
        <button className="rounded-full bg-primary px-10 py-4 text-sm font-bold tracking-widest text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-1 active:scale-95">
          START YOUR CREATION
        </button>

        {/* Illustrative Elements Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col items-center gap-4 group cursor-pointer hover:text-primary dark:hover:text-primary transition-colors">
            <Utensils
              className="h-8 w-8 text-foreground group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary transition-colors"
              strokeWidth={1.5}
            />
            <span className="text-xs font-bold tracking-widest uppercase text-foreground group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary">
              Tasting
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 group cursor-pointer hover:text-primary dark:hover:text-primary transition-colors">
            <PencilRuler
              className="h-8 w-8 text-foreground group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary transition-colors"
              strokeWidth={1.5}
            />
            <span className="text-xs font-bold tracking-widest uppercase text-foreground group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary">
              Sketching
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 group cursor-pointer hover:text-primary dark:hover:text-primary transition-colors">
            <Leaf
              className="h-8 w-8 text-foreground group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary transition-colors"
              strokeWidth={1.5}
            />
            <span className="text-xs font-bold tracking-widest uppercase text-foreground group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary">
              Organic
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 group cursor-pointer hover:text-primary dark:hover:text-primary transition-colors">
            <Truck
              className="h-8 w-8 text-foreground group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary transition-colors"
              strokeWidth={1.5}
            />
            <span className="text-xs font-bold tracking-widest uppercase text-foreground group-hover:text-primary dark:text-foreground/80 dark:group-hover:text-primary">
              Hand-Delivered
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
