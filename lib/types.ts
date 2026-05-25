export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  priceLabel: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
  tags?: string[];
}

export interface MenuCategory {
  label: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  date: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  author: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectClass?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
