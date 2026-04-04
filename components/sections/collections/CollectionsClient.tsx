"use client";

import { useState, useMemo, useEffect } from "react";
import { SidebarFilters } from "./SidebarFilters";
import { ProductGallery } from "./ProductGallery";
import { GALLERY_ITEMS, FLAVORS } from "./data";

export function CollectionsClient() {
  const [isFiltering, setIsFiltering] = useState(false);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  // We can select multiple flavors, or a single. Let's just do an array for consistency
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"Newest" | "Price: Low to High" | "Price: High to Low">("Newest");

  const filteredItems = useMemo(() => {
    let items = GALLERY_ITEMS.filter((item) => {
      const matchOccasion =
        selectedOccasions.length === 0 ||
        item.occasions.some((occ) => selectedOccasions.includes(occ));

      const matchDietary =
        selectedDietary.length === 0 ||
        item.dietary.some((d) => selectedDietary.includes(d));

      const matchFlavor =
        selectedFlavors.length === 0 || selectedFlavors.includes(item.flavor);

      return matchOccasion && matchDietary && matchFlavor;
    });

    // Handle Sorting
    items = items.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
      
      if (sortOrder === "Price: Low to High") return priceA - priceB;
      if (sortOrder === "Price: High to Low") return priceB - priceA;
      // Default to "Newest" -> arbitrary for mock data, using id reverse
      return b.id - a.id; 
    });

    return items;
  }, [selectedOccasions, selectedDietary, selectedFlavors, sortOrder]);

  // Simulate network delay for that premium filtering UX
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [selectedOccasions, selectedDietary, selectedFlavors, sortOrder]);

  // Calculate dynamic counts based on the other active filters, so users know
  // how many items they'll get if they click a specific flavor. Wait, commonly 
  // we just calculate counts based on ALL items so count doesn't jump. I'll pass total counts.
  const flavorCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    FLAVORS.forEach(f => {
      counts[f] = GALLERY_ITEMS.filter(i => i.flavor === f).length;
    });
    return counts;
  }, []);

  const clearAll = () => {
    setSelectedOccasions([]);
    setSelectedDietary([]);
    setSelectedFlavors([]);
    setSortOrder("Newest");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <SidebarFilters
        selectedOccasions={selectedOccasions}
        setSelectedOccasions={setSelectedOccasions}
        selectedDietary={selectedDietary}
        setSelectedDietary={setSelectedDietary}
        selectedFlavors={selectedFlavors}
        setSelectedFlavors={setSelectedFlavors}
        flavorCounts={flavorCounts}
        clearAll={clearAll}
      />
      <ProductGallery 
        items={filteredItems} 
        totalItems={GALLERY_ITEMS.length}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        isFiltering={isFiltering}
      />
    </div>
  );
}
