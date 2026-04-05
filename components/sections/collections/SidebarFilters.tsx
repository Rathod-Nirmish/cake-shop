"use client";

import { ChevronUp, ChevronDown, RefreshCw, Check, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
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
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const activeCount =
    selectedOccasions.length + selectedDietary.length + selectedFlavors.length;

  const filterContent = (
    <div className="space-y-8">
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
                  toggleArrayItem(selectedOccasions, setSelectedOccasions, occasion)
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
                  <span className={`text-sm ${isSelected ? "text-primary font-bold" : ""}`}>
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
    </div>
  );

  return (
    <>
      {/* Mobile trigger button — hidden on lg+ */}
      <div className="lg:hidden">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-bold hover:border-[#D4AF37]/50 transition-all"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeCount > 0 && (
            <span className="ml-1 w-5 h-5 rounded-full bg-[#D4AF37] text-white text-[10px] font-bold flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </button>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Slide-in Drawer — mobile only */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-background border-r border-border z-50 lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-bold uppercase tracking-widest text-sm">Filters</span>
            {activeCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-white text-[10px] font-bold flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {filterContent}
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-4 border-t border-border shrink-0">
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-full py-3 bg-[#D4AF37] text-white font-bold rounded-xl hover:bg-[#b8962e] transition-colors text-sm tracking-wide"
          >
            Show Results
          </button>
        </div>
      </div>

      {/* Desktop Sidebar — hidden below lg */}
      <aside className="hidden lg:block w-55 xl:w-64 shrink-0">
        {filterContent}
      </aside>
    </>
  );
}
