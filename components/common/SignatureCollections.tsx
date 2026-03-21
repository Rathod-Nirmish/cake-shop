"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const collections = [
  {
    id: 1,
    title: "Modern Minimalist",
    price: "Starting from $120",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqyI4mmLkNjsFWUtKRzHOBFmUvL51pUTssAXFNVzKNrWMvrmxTIqoCTX_6wZWhUqX5B68MnExu15ODAaZ8I8nMi3A1BeEJo_qHApp7c9KhCYJZq6g67U6S6pQplwvlSAaKLJvDRrM1pb74YMLFtW2oo9mOA5P1mqEOn6iMD4alqjJAkqlzppfQQTVkTT596s9P8l_Y-0DR0hG5asChjZzEMPOWmtGNum0aKNk_Wao5l8_9LW-6zVM92JKAoPjUYab-Ro-k8k9T8vr",
    alt: "Minimalist white cake with architectural frosting details",
  },
  {
    id: 2,
    title: "Floral Elegance",
    price: "Starting from $150",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyLzG_JunTjBCgXir2PLG9VYlN2bTGhvlVVuWmoB7kX6iUGs-JJg8XLarSkOPlaye041Fr6nmjXOaGRx56a4v3lQxCoj5XH2VA2BfvXvmwToERF3fLYRiZEL1Lm0iB1LrIvfhs1jZ8AsAFDOFebxfFTjGmwNQ7r_ULYzJUpWSzFTBJOezk6K8H21aSd6VYbA9vLjqSNg83S849Jb3hCYbIYUmOglXeRWmirosM5dUOZbSJdyGFAPBBHmjsKKfW0b95TCYAtJLrFUgT",
    alt: "Elegant cake topped with fresh garden flowers",
  },
  {
    id: 3,
    title: "Whimsical Wonders",
    price: "Starting from $180",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBkoviQiu9qLUFqWuoB61A3Q2KbCef-5G2IVw2OJkTrXt1DjOFx5X32vPCVkKZ40n7hif1BmLJkF71HRadjLVzIEnMIdfzsLKsrm3VUpNllPpKpJRe_m1sMp56vYB0fLEl57YNyZwD2r95mZY55cpACOtjw7qVUH7eTPc36W5zJ1XqhbGrQ7FcFWskYSWXCmZnmtSx0HU5W_9cifyJaLw4q74X9f-En-n25d5bQ_4tuQJNh4X6kZ7cwKVIjBhqSKmROuuJ9yLluFrZ",
    alt: "Playful colorful cake with artistic sprinkles and gold leaf",
  },
  {
    id: 4,
    title: "Classic Grandeur",
    price: "Starting from $250",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaxp1nWw024uXba5BT4MHSQIRb8MIH2kUR5J088I4zEhlMHLxDi2jdUA_RPlJmyhQ_GKBk8XDrGyU_bIwS5xJyMAywbMEt_CgDIfcG1juJffv2iiHe2ADM-e4PBWXg2X5vVMymBR766MRkLtuf2xqtVFlhPJPonM97D5tsbIJlOkFuNMUkaZnQsrBomAmZjqWLsNMTx7BnwmJ9N-85ZAGY3KqTSJde3ITMtf7A72Xxpcl9AKn4aT6MRxw1vfGq9qHIUA10TPHrN6vt",
    alt: "Traditional luxury tiered cake with lace icing patterns",
  },
];

export function SignatureCollections() {
  return (
    <section className="bg-surface/50 dark:bg-surface/80 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header & Controls */}
          <div className="mb-12 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="font-serif text-4xl font-light text-foreground">
                Signature Collections
              </h2>
              <p className="font-medium text-primary">
                Curated designs for every aesthetic
              </p>
            </div>

            <div className="flex gap-2">
              <CarouselPrevious
                variant="outline"
                className="static translate-y-0 translate-x-0 h-12 w-12 rounded-full border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              />
              <CarouselNext
                variant="outline"
                className="static translate-y-0 translate-x-0 h-12 w-12 rounded-full border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              />
            </div>
          </div>

          {/* Carousel Slider */}
          <CarouselContent className="-ml-8">
            {collections.map((item) => (
              <CarouselItem key={item.id} className="pl-8 basis-auto">
                <div className="group min-w-[320px] max-w-[320px] cursor-pointer">
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
                  <h3 className="font-serif text-xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {item.price}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
