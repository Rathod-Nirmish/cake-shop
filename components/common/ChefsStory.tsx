import React from "react";
import { BadgeCheck } from "lucide-react";

export function ChefsStory() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white dark:bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="h-full w-full bg-cover bg-center transition-transform hover:scale-105 duration-700"
                title="Professional chef finishing a cake with delicate icing"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwbGbjQCDD0BQYUCicOhVTe5E9XGb0l7Z3fSFbfVQ9ye7UBv2MdxsEbhAkpNEcj21LyEUqNRW2sL4VbmM4CxgbcYrmlK6U6y_1C9o8U7uVl9Uatnao2BVV__dP9MLo5B6Hxkpt_jRaYCnW-JO_3GgRysj4TvsyPt5NZ5D7lfYhXiWIs7oGFOcYfALN1YMJrhDN7sXejfZLZyJmgEltw8YSkitYxdnmR61Bgr5N1QXaYx8-_XWkHCqEr0jI0zJoTkn9-VYX5txh7jt7")',
                }}
              />
            </div>
            {/* Decorative Offset Box */}
            <div className="absolute -right-12 -bottom-12 z-0 aspect-square w-64 md:w-80 rounded-3xl bg-[#E8DAC1] dark:bg-amber-900/40 backdrop-blur-sm shadow-sm" />
          </div>

          {/* Text Section */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative z-10 mt-12 lg:mt-0">
            <span className="text-amber-500 font-bold tracking-widest text-sm uppercase">
              The Artisan Behind The Magic
            </span>

            <h2 className="font-serif text-5xl font-light text-[#1b0d10] dark:text-white leading-tight">
              Meet Chef Isabella
            </h2>

            {/* Custom Divider */}
            <div className="h-1 w-20 bg-rose-500 rounded-full" />

            <p className="text-xl leading-relaxed text-[#1b0d10]/90 dark:text-[#fcf8f9]/90 italic font-serif">
              "A cake should be as memorable for the palate as it is for the
              eyes. We don't just bake; we weave emotions into every layer of
              sponge and every swipe of ganache."
            </p>

            <p className="leading-relaxed text-[#1b0d10]/70 dark:text-[#fcf8f9]/70 text-lg">
              With over 15 years of experience in Parisian patisseries and a
              passion for organic, local sourcing, Isabella founded her studio
              to bring a more personal, artistic touch to the world of bespoke
              baking. Every cake is a unique commission, crafted by hand in our
              small-batch kitchen.
            </p>

            {/* Verification Badge Details */}
            <div className="flex items-center gap-5 mt-6 border border-amber-500/20 p-4 rounded-2xl bg-amber-50/30 dark:bg-amber-950/20 fit-content md:max-w-max">
              <div className="h-14 w-14 shrink-0 rounded-full border border-amber-500 p-1">
                <div className="h-full w-full rounded-full bg-amber-500/10 flex items-center justify-center">
                  <BadgeCheck className="h-7 w-7 text-amber-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-[#1b0d10] dark:text-white text-lg">
                  Certified Organic Bakery
                </p>
                <p className="text-sm text-rose-500 font-medium">
                  Quality you can taste, ethics you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
