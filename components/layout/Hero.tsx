import React from "react";
import { Star } from "lucide-react";
import { Icon } from "@iconify/react";
import Link from "next/link";

// driftX: how far to drift horizontally (px), driftY: vertical drift (px)
// spinDur: full 360° spin duration, driftDur: diagonal drift cycle duration
const FLOATING_ITEMS = [
  {
    icon: "fluent-emoji:birthday-cake",
    size: 40,
    top: "6%",
    left: "2%",
    delay: "0s",
    driftDur: "18s",
    spinDur: "20s",
    driftX: 14,
    driftY: -22,
  },
  {
    icon: "fluent-emoji:cupcake",
    size: 36,
    top: "20%",
    left: "90%",
    delay: "2.5s",
    driftDur: "22s",
    spinDur: "17s",
    driftX: -10,
    driftY: -18,
  },
  {
    icon: "fluent-emoji:shortcake",
    size: 38,
    top: "42%",
    left: "4%",
    delay: "1s",
    driftDur: "20s",
    spinDur: "24s",
    driftX: 12,
    driftY: -20,
  },
  {
    icon: "fluent-emoji:doughnut",
    size: 42,
    top: "68%",
    left: "88%",
    delay: "3.2s",
    driftDur: "16s",
    spinDur: "19s",
    driftX: -14,
    driftY: -16,
  },
  {
    icon: "fluent-emoji:lollipop",
    size: 34,
    top: "78%",
    left: "6%",
    delay: "0.8s",
    driftDur: "24s",
    spinDur: "22s",
    driftX: 10,
    driftY: -24,
  },
  {
    icon: "fluent-emoji:cookie",
    size: 32,
    top: "88%",
    left: "75%",
    delay: "4s",
    driftDur: "19s",
    spinDur: "16s",
    driftX: -8,
    driftY: -20,
  },
  {
    icon: "fluent-emoji:strawberry",
    size: 30,
    top: "10%",
    left: "62%",
    delay: "1.8s",
    driftDur: "21s",
    spinDur: "26s",
    driftX: 16,
    driftY: -14,
  },
  {
    icon: "fluent-emoji:candy",
    size: 32,
    top: "55%",
    left: "94%",
    delay: "3s",
    driftDur: "17s",
    spinDur: "21s",
    driftX: -12,
    driftY: -18,
  },
  {
    icon: "fluent-emoji:chocolate-bar",
    size: 34,
    top: "32%",
    left: "78%",
    delay: "5s",
    driftDur: "23s",
    spinDur: "18s",
    driftX: -10,
    driftY: -22,
  },
  {
    icon: "fluent-emoji:cherry",
    size: 30,
    top: "92%",
    left: "32%",
    delay: "2s",
    driftDur: "20s",
    spinDur: "23s",
    driftX: 8,
    driftY: -16,
  },
];

export default function Hero() {
  return (
    <section className="relative px-6 py-12 lg:px-20 lg:py-24 overflow-hidden">
      {/* Floating background icons */}
      {/* <style>{`
        @keyframes drift {
          0%   { transform: translate(0px, 0px)                    scale(1);    opacity: 0.82; }
          25%  { transform: translate(calc(var(--dx) * 0.6px), calc(var(--dy) * 0.5px)) scale(1.06); opacity: 0.95; }
          50%  { transform: translate(calc(var(--dx) * 1px),   calc(var(--dy) * 1px))   scale(1);    opacity: 0.82; }
          75%  { transform: translate(calc(var(--dx) * 0.4px), calc(var(--dy) * 0.6px)) scale(0.96); opacity: 0.90; }
          100% { transform: translate(0px, 0px)                    scale(1);    opacity: 0.82; }
        }
        @keyframes spin-slow {
          from { rotate: 0deg; }
          to   { rotate: 360deg; }
        }
        .icon-drift {
          animation: drift var(--drift-dur) ease-in-out var(--delay) infinite;
        }
        .icon-spin {
          animation: spin-slow var(--spin-dur) linear var(--delay) infinite;
          display: inline-flex;
        }
      `}</style> */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* {FLOATING_ITEMS.map(
          (
            { icon, size, top, left, delay, driftDur, spinDur, driftX, driftY },
            i,
          ) => (
            <div
              key={i}
              className="icon-drift absolute select-none drop-shadow-sm"
              style={
                {
                  top,
                  left,
                  "--dx": driftX,
                  "--dy": driftY,
                  "--drift-dur": driftDur,
                  "--delay": delay,
                } as React.CSSProperties
              }
            >
              <span
                className="icon-spin"
                style={
                  {
                    "--spin-dur": spinDur,
                    "--delay": delay,
                  } as React.CSSProperties
                }
              >
                <Icon icon={icon} width={size} height={size} />
              </span>
            </div>
          ),
        )} */}
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 text-brand font-medium uppercase tracking-[0.2em] text-xs">
              <span className="h-px w-8 bg-brand"></span>
              Award Winning Patisserie
            </div>

            <h1 className="text-5xl font-light leading-[1.1] text-foreground md:text-7xl font-serif">
              Edible <span className="italic text-primary">Art </span> for
              Life&apos;s Sweetest Moments
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
              Bespoke artisanal cakes handcrafted with organic ingredients,
              seasonal botanicals, and timeless elegance for your most precious
              celebrations.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link href="/creations" className="w-full">
                <button className="w-full rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-widest text-primary-foreground shadow-lg shadow-primary/20 hover:scale-102 transition-transform">
                  VIEW GALLERY
                </button>
              </Link>
              {/* <button className="rounded-full border border-primary/30 px-8 py-4 text-sm font-bold tracking-widest hover:bg-primary/5 dark:hover:bg-primary/10 text-foreground transition-colors">
                BOOK CONSULTATION
              </button> */}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-primary/10 shadow-2xl transition-transform hover:scale-[1.02] duration-700">
              <div
                className="h-full w-full bg-cover bg-center"
                title="Exquisite three-tier floral wedding cake with soft pink cream"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7NLbp8amxL4IElVpsmwQvYU90t1yczW3GuYrIx9jT0-jfe4ChR2HiyHDY8iFN37l2keTL_baSRPhgAQC-o-pn8p8mZlYmJaByfDsU-pIT2my5Cjzh2Fd3cYdjHkbBqdZ1czqpWoyzhCp5hEMTEklhUrHQ4w2D2Vbh0SPdt8fQxkCD1KHFC3IUpSL65Xx9CDw6wDIOd7ni5s2SSK_GTeNXbyX7yiYQAtO8mFnykIsIuwlPez3R86I4jTlOvwfaJmN45KqiBkgMM9e_")',
                }}
              />
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card text-card-foreground p-6 shadow-xl lg:block border border-primary/10 z-20">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div
                    className="h-10 w-10 rounded-full border-2 border-card bg-muted bg-cover"
                    title="Customer portrait"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB76jV3_xiIjLOYByRmPbM8qUEAotQKxfRGyjKLHjSwziJE-WnKQk-3AsStcgcP7MrHuVN3n5_AuxfQywUmV2UHnOX37JKLv2-l7WNLKsdOfAgth7a_6Or5QbnCIrLPNXD9JDSksHgblWjNK2XbqfVg3o2Wdav3D4znlzbb1t6jzDAF7sXdN1AT8P54sBM8ctNWKn2IzGFRe8KkLpwtanBHswqsygyS3eVs-TDc10O1V8XV7GVXyFEFLJjBsamrvAFoS9l1mATzgAgw')",
                    }}
                  />
                  <div
                    className="h-10 w-10 rounded-full border-2 border-card bg-muted bg-cover"
                    title="Customer portrait"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByup1t0B3Iwoi9DVquAw4I1DtyRa1jE3L9zBZ5b_tERGw_sqF8x7EXxpGy9QnBmunA42g8MtsNuHUw8WqkBy04fwxnZYHuCQGp_X1EtE6H-ZKo6mIj5F_p2W9pkG4h32W4H-MRcmVK3GwcGHTz3bKr9MHoZcLqPZAgcxfgd8TaTgPVr7RFvbwW3cFcqveyUVohsJShsNJFClD1UxeNiJQ7QxBZpg98FYAkhb4Dygc4zyG9WfRR1zGrgrcnK-4h095pbrxTPd4QfHhd')",
                    }}
                  />
                  <div
                    className="h-10 w-10 rounded-full border-2 border-card bg-muted bg-cover"
                    title="Customer portrait"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKNHFUGaVYhQ2xXn5-mzZug9mh04m_K80PlBJ4xbMQ3fzaaqbz4g8ASlUYVUirRvM5OJf9Ek4eLyU2BSSjJC33kPCneTkQ1pjRSMYFKEhNXym29BqWHUqWV1Hwfb6vPpzhZ0uo1IrWXvaBVvc18HgOuG4XSGgNYtFd5vdmKtFbr0qk-FdWSLhtqozZun5vx3KQAGvE_ouMci8FbHO85jeNrRxzg5N72yx468GLD_eyUmAPhI_bD9duJ8aeYhQHpkvKHdBmIFTxh8Si')",
                    }}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    500+ Happy Brides
                  </p>
                  <div className="flex text-brand mt-1">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
