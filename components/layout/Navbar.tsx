"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const Logo = () => (
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
        <path
          d="M12 2C11.2 2 10.5 2.8 10.5 3.5C10.5 4.5 12 6 12 6C12 6 13.5 4.5 13.5 3.5C13.5 2.8 12.8 2 12 2Z"
          fill="currentColor"
        />
        <rect x="11.25" y="6.5" width="1.5" height="4" rx="0.5" fill="currentColor" />
        <path
          d="M7.5 11.5C7.5 10.6716 8.17157 10 9 10H15C15.8284 10 16.5 10.6716 16.5 11.5V15H7.5V11.5Z"
          fill="currentColor"
        />
        <path
          d="M4.5 17C4.5 16.1716 5.17157 15.5 6 15.5H18C18.8284 15.5 19.5 16.1716 19.5 17V20.5C19.5 21.3284 18.8284 22 18 22H6C5.17157 22 4.5 21.3284 4.5 20.5V17Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-serif text-2xl font-bold tracking-tight text-[#1b0d10] dark:text-white mt-1">
        {SITE_NAME}
      </span>
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-rose-500/10 bg-white/80 dark:bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex h-20 items-center justify-between">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-[#1b0d10]/80 dark:text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#1b0d10] dark:text-white hover:bg-rose-50 dark:hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-background shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-rose-500/10">
          <Logo />
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#1b0d10] dark:text-white hover:bg-rose-50 dark:hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-8 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 px-4 rounded-xl text-base font-medium transition-colors hover:bg-rose-50 dark:hover:bg-white/10 hover:text-primary ${
                pathname === link.href
                  ? "text-primary bg-rose-50 dark:bg-white/10"
                  : "text-[#1b0d10]/80 dark:text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
