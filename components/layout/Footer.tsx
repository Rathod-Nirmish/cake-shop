"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1b0d10] text-[#fcf8f9] py-20 px-6 lg:px-20 mt-auto">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="md:col-span-1 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 transition-transform hover:scale-105"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-rose-500"
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
              <h2 className="font-serif text-2xl font-bold tracking-tight text-white mt-1">
                Isabella
              </h2>
            </Link>
            <p className="text-[#fcf8f9]/60 text-sm leading-relaxed max-w-xs">
              Handcrafting edible memories in the heart of the city. We ship
              nationwide for select collections.
            </p>
          </div>

          {/* Column 2: Explore Links */}
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase text-white">
              Explore
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#fcf8f9]/60">
              <li>
                <Link
                  href="#"
                  className="hover:text-rose-500 transition-colors"
                >
                  Our Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-rose-500 transition-colors"
                >
                  Wedding Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-rose-500 transition-colors"
                >
                  Bespoke Process
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-rose-500 transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase text-white">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#fcf8f9]/60">
              <li className="flex items-center gap-3 hover:text-rose-500 transition-colors cursor-pointer">
                <Mail className="h-4 w-4" />
                <span>hello@isabellacakes.com</span>
              </li>
              <li className="flex items-center gap-3 hover:text-rose-500 transition-colors cursor-pointer">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 000-8888</span>
              </li>
              <li className="flex items-center gap-3 hover:text-rose-500 transition-colors cursor-pointer">
                <MapPin className="h-4 w-4" />
                <span>123 Pastry Lane, New York</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase text-white">
              Sweet News
            </h4>
            <p className="text-xs text-[#fcf8f9]/60 mb-4">
              Subscribe for seasonal flavors & cake tips.
            </p>
            <form
              className="flex gap-2 w-full max-w-xs"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rose-500 placeholder:text-white/40 transition-colors"
                placeholder="Email address"
                type="email"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-10 w-10 flex-none rounded-full bg-rose-500 flex items-center justify-center text-white hover:bg-rose-600 transition-colors"
                title="Subscribe"
              >
                <Send className="h-4 w-4 -ml-0.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#fcf8f9]/40">
          <p>
            © {new Date().getFullYear()} Isabella Artisanal Cakes. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-rose-500 transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-rose-500 transition-colors">
              Pinterest
            </Link>
            <Link href="#" className="hover:text-rose-500 transition-colors">
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
