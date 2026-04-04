"use client";

import Image from "next/image";
import { ChevronDown, ChevronRight, XCircle } from "lucide-react";
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
}

export function ProductGallery({ items, totalItems, sortOrder, setSortOrder }: ProductGalleryProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const displayItems = items.slice(0, visibleCount);

  return (
    <div className="flex-1">
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
            className="relative group cursor-pointer overflow-hidden rounded-xl border border-transparent hover:border-[#D4AF37]/30 transition-all flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span
                  className={`${item.tagBg} text-[10px] font-bold px-2 py-1 rounded uppercase mb-2 inline-block`}
                >
                  {item.tag}
                </span>
                <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-white/80 text-xs mb-4 italic">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D4AF37] font-bold">Starts from {item.price}</span>
                  <ChevronRight className="text-white w-4 h-4" />
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
    </div>
  );
}
