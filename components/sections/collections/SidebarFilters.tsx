"use client";

import { ChevronUp, ChevronDown, RefreshCw, Check } from "lucide-react";
import { OCCASIONS, DIETARY, FLAVORS } from "./data";

interface SidebarFiltersProps {
  selectedOccasions: string[];
  setSelectedOccasions: (o: string[]) => void;
  selectedDietary: string[];
  setSelectedDietary: (d: string[]) => void;
  selectedFlavors: string[];
  setSelectedFlavors: (f: string[]) => void;
  flavorCounts: Record<string, number>;
  clearAll: () => void;
}

export function SidebarFilters({
  selectedOccasions,
  setSelectedOccasions,
  selectedDietary,
  setSelectedDietary,
  selectedFlavors,
  setSelectedFlavors,
  flavorCounts,
  clearAll,
}: SidebarFiltersProps) {
  const toggleArrayItem = (
    array: string[],
    setArray: (val: string[]) => void,
    item: string,
  ) => {
    if (array.includes(item)) {
      setArray(array.filter((i) => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  return (
    <aside className="w-full lg:w-55 xl:w-64 shrink-0 space-y-8">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
          Occasions
          <ChevronUp className="w-4 h-4 cursor-pointer" />
        </h3>
        <div className="space-y-3">
          {OCCASIONS.map((occasion) => (
            <label
              key={occasion}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedOccasions.includes(occasion)}
                onChange={() =>
                  toggleArrayItem(
                    selectedOccasions,
                    setSelectedOccasions,
                    occasion,
                  )
                }
                className="rounded border-border text-primary focus:ring-primary"
              />
              <span
                className={`text-sm font-medium transition-colors ${
                  selectedOccasions.includes(occasion)
                    ? "text-primary"
                    : "group-hover:text-primary"
                }`}
              >
                {occasion}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
          Dietary Preferences
          <ChevronDown className="w-4 h-4 cursor-pointer" />
        </h3>
        <div className="flex flex-wrap gap-2">
          {DIETARY.map((tag) => {
            const isSelected = selectedDietary.includes(tag);
            return (
              <button
                key={tag}
                onClick={() =>
                  toggleArrayItem(selectedDietary, setSelectedDietary, tag)
                }
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  isSelected
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-muted text-foreground border border-transparent hover:bg-[#D4AF37]/10"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
          Flavor Palette
        </h3>
        <div className="space-y-3">
          {FLAVORS.map((flavor) => {
            const isSelected = selectedFlavors.includes(flavor);
            return (
              <div
                key={flavor}
                className="flex items-center justify-between cursor-pointer group"
                onClick={() =>
                  toggleArrayItem(selectedFlavors, setSelectedFlavors, flavor)
                }
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? "bg-primary border-primary" : "border-border group-hover:border-primary"}`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span
                    className={`text-sm ${isSelected ? "text-primary font-bold" : ""}`}
                  >
                    {flavor}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {flavorCounts[flavor] || 0}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={clearAll}
        className="w-full flex items-center justify-center gap-2 py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all"
      >
        <RefreshCw className="w-4 h-4" />
        Clear All Filters
      </button>
    </aside>
  );
}
