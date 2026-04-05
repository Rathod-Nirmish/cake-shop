"use client";

import Image from "next/image";
import { ChevronDown, ChevronRight, XCircle, CakeSlice } from "lucide-react";
import { useState } from "react";

// The types of the items we expect
type GalleryItem = {
  id: number;
  tag: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tagBg: string;
};

interface ProductGalleryProps {
  items: GalleryItem[];
  totalItems: number;
  sortOrder: "Newest" | "Price: Low to High" | "Price: High to Low";
  setSortOrder: (order: "Newest" | "Price: Low to High" | "Price: High to Low") => void;
  isFiltering?: boolean;
}

export function ProductGallery({ items, totalItems, sortOrder, setSortOrder, isFiltering }: ProductGalleryProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const displayItems = items.slice(0, visibleCount);

  return (
    <div className="flex-1 w-full">
      {/* Sorting & View */}
      <div className="flex justify-between items-center mb-8 bg-muted/50 p-4 rounded-xl relative">
        <p className="text-sm font-medium">
          <span className="text-primary font-bold">{items.length}</span> Designs match your criteria
        </p>
        <div className="flex items-center gap-4 relative">
          <button 
            className="flex items-center gap-1 text-sm font-bold"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Sort by: {sortOrder}
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-10 overflow-hidden">
               {["Newest", "Price: Low to High", "Price: High to Low"].map((order) => (
                  <button
                    key={order}
                    onClick={() => {
                        setSortOrder(order as any);
                        setDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-muted text-sm ${sortOrder === order ? 'text-primary font-bold bg-primary/5' : ''}`}
                  >
                    {order}
                  </button>
               ))}
            </div>
          )}
        </div>
      </div>

      {isFiltering ? (
        <div className="py-32 w-full flex flex-col items-center justify-center text-center space-y-6">
          <div className="relative">
            {/* Outer pulsing ring */}
            <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full animate-ping"></div>
            
            {/* Bouncing Cake */}
            <div className="w-20 h-20 bg-card border border-border shadow-2xl rounded-full flex items-center justify-center relative z-10 animate-bounce">
              <CakeSlice className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-widest text-[#D4AF37]">WHIPPING UP</h3>
            <p className="text-muted-foreground animate-pulse">Finding the perfect matches...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Empty State */}
          {items.length === 0 && (
             <div className="py-20 flex flex-col items-center justify-center text-center">
                <XCircle className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
                <h3 className="text-xl font-bold mb-2">No matching designs found</h3>
                <p className="text-muted-foreground max-w-sm">Try tweaking or clearing your filters to discover more of our exquisite creations.</p>
             </div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer rounded-2xl border border-border hover:border-[#D4AF37]/40 bg-card hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={800}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={`${item.tagBg} absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <h3 className="text-base font-bold leading-snug mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed italic line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Starting from</p>
                      <span className="text-[#D4AF37] font-bold text-sm">{item.price}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-foreground/60 group-hover:text-[#D4AF37] transition-colors duration-300">
                      Order Now
                      <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          {items.length > 0 && (
            <div className="mt-16 flex flex-col items-center gap-4 break-inside-avoid">
              <p className="text-sm font-medium text-muted-foreground">
                You&apos;ve seen {displayItems.length} of {items.length} masterpieces
              </p>
              <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className="bg-[#D4AF37] h-full transition-all duration-500" 
                  style={{ width: `${(displayItems.length / items.length) * 100}%` }}
                ></div>
              </div>
              
              {visibleCount < items.length && (
                 <button 
                   onClick={() => setVisibleCount(c => c + 6)}
                   className="mt-4 px-10 py-4 bg-card border border-[#D4AF37]/30 text-foreground font-bold rounded-xl hover:shadow-xl hover:border-[#D4AF37] transition-all tracking-widest text-sm uppercase">
                   Discover More Designs
                 </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
