import React from "react";
import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-500/10 bg-white/80 dark:bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform hover:scale-105"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              {/* Flame */}
              <path
                d="M12 2C11.2 2 10.5 2.8 10.5 3.5C10.5 4.5 12 6 12 6C12 6 13.5 4.5 13.5 3.5C13.5 2.8 12.8 2 12 2Z"
                fill="currentColor"
              />
              {/* Candle */}
              <rect
                x="11.25"
                y="6.5"
                width="1.5"
                height="4"
                rx="0.5"
                fill="currentColor"
              />
              {/* Top Tier */}
              <path
                d="M7.5 11.5C7.5 10.6716 8.17157 10 9 10H15C15.8284 10 16.5 10.6716 16.5 11.5V15H7.5V11.5Z"
                fill="currentColor"
              />
              {/* Bottom Tier */}
              <path
                d="M4.5 17C4.5 16.1716 5.17157 15.5 6 15.5H18C18.8284 15.5 19.5 16.1716 19.5 17V20.5C19.5 21.3284 18.8284 22 18 22H6C5.17157 22 4.5 21.3284 4.5 20.5V17Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1b0d10] dark:text-white mt-1">
              Isabella
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {["Shop", "Collections", "Custom Order", "Our Story"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-medium text-[#1b0d10]/80 dark:text-white/80 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-6">
            <button
              aria-label="Search"
              className="text-[#1b0d10] dark:text-white hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button
              aria-label="Cart"
              className="relative text-[#1b0d10] dark:text-white hover:text-primary transition-colors"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={2.5} />
              {/* Notification Badge */}
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-sm shadow-rose-500/30">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
