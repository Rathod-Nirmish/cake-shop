import React from "react";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 py-12 lg:px-20 lg:py-24 overflow-hidden">
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
              <button className="rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-widest text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                VIEW GALLERY
              </button>
              <button className="rounded-full border border-primary/30 px-8 py-4 text-sm font-bold tracking-widest hover:bg-primary/5 dark:hover:bg-primary/10 text-foreground transition-colors">
                BOOK CONSULTATION
              </button>
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
