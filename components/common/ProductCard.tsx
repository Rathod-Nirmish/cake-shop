import React from "react";
import { MenuItem } from "@/lib/types";

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 aspect-3/4 overflow-hidden rounded-2xl shadow-md">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          title={item.alt}
          style={{ backgroundImage: `url("${item.image}")` }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="rounded-full bg-background/95 px-6 py-2 text-xs font-bold tracking-widest text-foreground transition-transform duration-300 hover:scale-105 hover:bg-background">
            QUICK VIEW
          </button>
        </div>
      </div>
      <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
        {item.description}
      </p>
      <p className="mt-2 text-sm font-medium text-primary">{item.priceLabel}</p>
    </div>
  );
}
