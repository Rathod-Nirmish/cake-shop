import React from "react";
import Link from "next/link";

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUaz36IGGbTmlHuuzSArkLaD21L54qiYFe44BVa0B2GwhnTRct3KbqI_M7Ez3Nr0ZFevi9VTsBxJhxuIc7rq-S3bLbhi7xf6o_aDY1Q4qfo9DoGEre6Ydl1CC0jFINOJ91KlDb04Ig5SLT01TOeRzQ4HQyoKukffwbZ6O3v-iH_4MVwfOu9iMQDYC_ICPwsecT8LvOCs2Jqvwu0Z3D5IMOw6bEVjxkkrSfxQ8HY3DC1Eahk-_fJqJkPsDNFRMsKkgPGry7IhrNCSbh",
    alt: "Cake Decoration - Macro photo of delicate white cream piping on a cake",
    aspectClass: "aspect-3/4",
    offsetClass: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApZ1INub30mY9HowoPmnq3oNpttQfHdCBPxMkv5LFzvtWBLqdVehJKFuLA3eCB6A-pzGbTP87vTexk1jJxcQDMc9NFKkzzwi52L26PFp_SZeJG8_IN12t1EE3zIZq5yEKBuFdUMqo_8t9aZ8pW3dsqLNnF06tW4KHtH5vt5vDvQTNfrYyImyAZLBefISlf7FIv8ARCbaBLSRrG3ih6z_bP_djGOYHxdEgHa5uJsPfdqTdb-JdPGF5FY5oujtjJg5dIl4B7WZRPNg35",
    alt: "Pastry - Golden flaky croissants stacked on a wire cooling rack",
    aspectClass: "aspect-3/5",
    offsetClass: "md:mt-12",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxAqWSonSiN-LRh3ssFWh_pYWXcbENCKrDy7dt3h8-4AIlDjPGhK5MVmH8rUp8EP6QC1idCcuc-ezjdyPNqCdMDhH6TFYhKIPTcAmkr1hoFuR1P7BcNQ5NJE4JkvpriAyN3o9trPOfXfLiNB96-ZwvS6r9Cqw1UNBz_9nav8gqjkFuNxRcmpZlqG-kK6vzjMjiXDia9g6yqY_J6hIID-s8-V32qKlutwVPfw84lmh34r8nfCYAjNbajazIVwXYV9gbTLXzi83pKpbz",
    alt: "Details - Artistic sprinkle of edible gold leaf on dark ganache",
    aspectClass: "aspect-3/4",
    offsetClass: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnoZ_l3LO3H35yGiidIi62B2Y3Gujqe8sL_oyBPRlBU78omZflD3f8t6aWNv9_3BvVlqUmeqS8EUBlCFMrjK80hUeH-LevaMGBHgYdFyh69hbv9sy0IX6azOyhqH0gQj1hGh4q6XvOu8nuBan-koGyLtIL0WJayNMfsg00hhBTmuWUz511WVmATDcWJbPuSPtkeP4uS3zhbCSmDPBKPCU9NuVi_HIot-m184yrpF9VauIscT79ggSqT-hYCXvgOEfzm3kCPfDzEwdD",
    alt: "Baking Process - Wooden rolling pin on a rustic surface with scattered flour",
    aspectClass: "aspect-3/5",
    offsetClass: "md:mt-12",
  },
];

export function GalleryPreview() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Chapter III
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-light text-foreground">
              The Gallery of Textures
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 text-foreground hover:text-primary transition-colors"
          >
            View All Work
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden group shadow-md ${image.aspectClass} ${image.offsetClass}`}
            >
              <img
                alt={image.alt}
                title={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={image.src}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
