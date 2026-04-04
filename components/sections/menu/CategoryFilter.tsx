"use client";

import React from "react";
import { MENU_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  active: string;
  onChange: (slug: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {MENU_CATEGORIES.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className={cn(
            "rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all",
            active === cat.slug
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary",
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
