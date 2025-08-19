import { type Category, type Product } from "@/types/product";

export const categories: { slug: Category; label: string }[] = [
  { slug: "iphone", label: "iPhone" },
  { slug: "mac", label: "Mac" },
  { slug: "ipad", label: "iPad" },
  { slug: "watch", label: "Watch" },
  { slug: "airpods", label: "AirPods" },
  { slug: "tv", label: "TV & Maison" },
  { slug: "accessories", label: "Accessoires" },
];

// Images distantes: Apple CDN
const CDN = "https://store.storeimages.cdn-apple.com";

export const products: Product[] = [
  {
    id: "iphone-15-pro",
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "iphone",
    description: "Titane. Puissance A17 Pro. USB‑C.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692894151261`,
    priceCents: 121990,
    colors: ["Titane naturel", "Titane bleu", "Titane blanc", "Titane noir"],
    capacities: ["128 Go", "256 Go", "512 Go", "1 To"],
    newBadge: true,
  },
  {
    id: "iphone-15",
    slug: "iphone-15",
    name: "iPhone 15",
    category: "iphone",
    description: "Dynamic Island. Double appareil photo avancé.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692925189361`,
    priceCents: 96900,
    colors: ["Bleu", "Rose", "Jaune", "Vert", "Noir"],
    capacities: ["128 Go", "256 Go", "512 Go"],
  },
  {
    id: "macbook-air-m3-13",
    slug: "macbook-air-m3-13",
    name: "MacBook Air 13" M3",
    category: "mac",
    description: "Ultra fin, super puissant. Puce M3.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/mba13-m3-midnight-select-202403?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1708555425305`,
    priceCents: 129900,
    colors: ["Minuit", "Lumière stellaire", "Argent", "Gris sidéral"],
  },
  {
    id: "macbook-pro-m3-pro-14",
    slug: "macbook-pro-m3-pro-14",
    name: "MacBook Pro 14"",
    category: "mac",
    description: "Pro à tous les niveaux. Puces M3, M3 Pro.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/mbp14-silver-select-202310?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1697239227878`,
    priceCents: 229900,
    colors: ["Argent", "Gris sidéral"],
    newBadge: true,
  },
  {
    id: "ipad-pro-m4-11",
    slug: "ipad-pro-m4-11",
    name: "iPad Pro 11" M4",
    category: "ipad",
    description: "Ultra fin. Ultra puissant. Puce M4.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/ipad-pro-11-wifi-select-spaceblack-202405?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1713385578858`,
    priceCents: 121900,
    colors: ["Noir sidéral", "Argent"],
  },
  {
    id: "apple-watch-series-9",
    slug: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    category: "watch",
    description: "Puce S9. Interactions gestuelles. Santé avancée.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/MX2X3ref_VW_PF+watch-45-alum-starlight-nc-9s_VW_PF_WF_CO_GEO_EMEA?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1693263142771`,
    priceCents: 44900,
    colors: ["Starlight", "Minuit", "Rouge"],
  },
  {
    id: "airpods-pro-2-usbc",
    slug: "airpods-pro-2-usbc",
    name: "AirPods Pro (2ᵉ gén.) USB‑C",
    category: "airpods",
    description: "Réduction du bruit active et Transparence adaptative.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/airpods-pro-2nd-gen-usb-c-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1693248080138`,
    priceCents: 29900,
    newBadge: true,
  },
  {
    id: "apple-tv-4k",
    slug: "apple-tv-4k",
    name: "Apple TV 4K",
    category: "tv",
    description: "Dolby Vision, HDR10+, Dolby Atmos. tvOS.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/MXGY3?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1664896365470`,
    priceCents: 16900,
  },
  {
    id: "magic-mouse",
    slug: "magic-mouse",
    name: "Magic Mouse",
    category: "accessories",
    description: "Surface Multi‑Touch. Sans fil.",
    imageUrl: `${CDN}/8756/as-images.apple.com/is/MK2E3?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1626464066000`,
    priceCents: 8590,
  },
];

export function listCategories(): { slug: Category; label: string }[] {
  return categories;
}

export function listAllProducts(): Product[] {
  return products;
}

export function listProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

