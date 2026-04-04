import React from "react";

const images = [
  {
    id: "1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUaz36IGGbTmlHuuzSArkLaD21L54qiYFe44BVa0B2GwhnTRct3KbqI_M7Ez3Nr0ZFevi9VTsBxJhxuIc7rq-S3bLbhi7xf6o_aDY1Q4qfo9DoGEre6Ydl1CC0jFINOJ91KlDb04Ig5SLT01TOeRzQ4HQyoKukffwbZ6O3v-iH_4MVwfOu9iMQDYC_ICPwsecT8LvOCs2Jqvwu0Z3D5IMOw6bEVjxkkrSfxQ8HY3DC1Eahk-_fJqJkPsDNFRMsKkgPGry7IhrNCSbh",
    alt: "Delicate white cream piping on a cake",
    category: "wedding-cakes",
  },
  {
    id: "2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApZ1INub30mY9HowoPmnq3oNpttQfHdCBPxMkv5LFzvtWBLqdVehJKFuLA3eCB6A-pzGbTP87vTexk1jJxcQDMc9NFKkzzwi52L26PFp_SZeJG8_IN12t1EE3zIZq5yEKBuFdUMqo_8t9aZ8pW3dsqLNnF06tW4KHtH5vt5vDvQTNfrYyImyAZLBefISlf7FIv8ARCbaBLSRrG3ih6z_bP_djGOYHxdEgHa5uJsPfdqTdb-JdPGF5FY5oujtjJg5dIl4B7WZRPNg35",
    alt: "Golden flaky croissants on a wire cooling rack",
    category: "pastries",
  },
  {
    id: "3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxAqWSonSiN-LRh3ssFWh_pYWXcbENCKrDy7dt3h8-4AIlDjPGhK5MVmH8rUp8EP6QC1idCcuc-ezjdyPNqCdMDhH6TFYhKIPTcAmkr1hoFuR1P7BcNQ5NJE4JkvpriAyN3o9trPOfXfLiNB96-ZwvS6r9Cqw1UNBz_9nav8gqjkFuNxRcmpZlqG-kK6vzjMjiXDia9g6yqY_J6hIID-s8-V32qKlutwVPfw84lmh34r8nfCYAjNbajazIVwXYV9gbTLXzi83pKpbz",
    alt: "Edible gold leaf on dark ganache",
    category: "custom-creations",
  },
  {
    id: "4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnoZ_l3LO3H35yGiidIi62B2Y3Gujqe8sL_oyBPRlBU78omZflD3f8t6aWNv9_3BvVlqUmeqS8EUBlCFMrjK80hUeH-LevaMGBHgYdFyh69hbv9sy0IX6azOyhqH0gQj1hGh4q6XvOu8nuBan-koGyLtIL0WJayNMfsg00hhBTmuWUz511WVmATDcWJbPuSPtkeP4uS3zhbCSmDPBKPCU9NuVi_HIot-m184yrpF9VauIscT79ggSqT-hYCXvgOEfzm3kCPfDzEwdD",
    alt: "Wooden rolling pin on rustic surface with flour",
    category: "behind-the-scenes",
  },
  {
    id: "5",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqyI4mmLkNjsFWUtKRzHOBFmUvL51pUTssAXFNVzKNrWMvrmxTIqoCTX_6wZWhUqX5B68MnExu15ODAaZ8I8nMi3A1BeEJo_qHApp7c9KhCYJZq6g67U6S6pQplwvlSAaKLJvDRrM1pb74YMLFtW2oo9mOA5P1mqEOn6iMD4alqjJAkqlzppfQQTVkTT596s9P8l_Y-0DR0hG5asChjZzEMPOWmtGNum0aKNk_Wao5l8_9LW-6zVM92JKAoPjUYab-Ro-k8k9T8vr",
    alt: "Minimalist white cake with architectural frosting",
    category: "wedding-cakes",
  },
  {
    id: "6",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyLzG_JunTjBCgXir2PLG9VYlN2bTGhvlVVuWmoB7kX6iUGs-JJg8XLarSkOPlaye041Fr6nmjXOaGRx56a4v3lQxCoj5XH2VA2BfvXvmwToERF3fLYRiZEL1Lm0iB1LrIvfhs1jZ8AsAFDOFebxfFTjGmwNQ7r_ULYzJUpWSzFTBJOezk6K8H21aSd6VYbA9vLjqSNg83S849Jb3hCYbIYUmOglXeRWmirosM5dUOZbSJdyGFAPBBHmjsKKfW0b95TCYAtJLrFUgT",
    alt: "Elegant cake topped with fresh garden flowers",
    category: "wedding-cakes",
  },
];

export function GalleryGrid() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group break-inside-avoid overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
