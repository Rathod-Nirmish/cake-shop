"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/common/ProductCard";
import { CategoryFilter } from "./CategoryFilter";
import menuItems from "@/content/menu.json";
import { MenuItem } from "@/lib/types";

export function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? (menuItems as MenuItem[])
      : (menuItems as MenuItem[]).filter(
          (item) => item.category === activeCategory,
        );

  return (
    <section className="py-16 px-6 lg:px-20 bg-background">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">
            No items in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
