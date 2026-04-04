import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex text-brand">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
        <div
          className="h-10 w-10 rounded-full bg-muted bg-cover flex-none"
          title={testimonial.author}
          style={{ backgroundImage: `url('${testimonial.avatar}')` }}
        />
        <div>
          <p className="text-sm font-bold text-foreground">{testimonial.author}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
