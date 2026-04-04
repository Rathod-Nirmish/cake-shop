import React from "react";

export function OurStory() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-brand font-bold tracking-widest text-xs uppercase">
              Est. 2009
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-tight">
              Born from a love of<br />
              <em className="text-primary">edible artistry</em>
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Isabella started as a small home kitchen in Brooklyn, where every
              weekend brought a new experiment in flavor and form. Fifteen years
              later, our studio has grown into an award-winning patisserie
              trusted by brides, celebrities, and families across the country.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We source only certified organic ingredients — fresh from local
              farms when in season — because we believe the finest cakes begin
              long before the mixing bowl.
            </p>
          </div>

          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="h-full w-full bg-cover bg-center transition-transform hover:scale-105 duration-700"
              title="Isabella's bakery studio interior"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwbGbjQCDD0BQYUCicOhVTe5E9XGb0l7Z3fSFbfVQ9ye7UBv2MdxsEbhAkpNEcj21LyEUqNRW2sL4VbmM4CxgbcYrmlK6U6y_1C9o8U7uVl9Uatnao2BVV__dP9MLo5B6Hxkpt_jRaYCnW-JO_3GgRysj4TvsyPt5NZ5D7lfYhXiWIs7oGFOcYfALN1YMJrhDN7sXejfZLZyJmgEltw8YSkitYxdnmR61Bgr5N1QXaYx8-_XWkHCqEr0jI0zJoTkn9-VYX5txh7jt7")',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
