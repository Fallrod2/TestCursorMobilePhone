export type Category =
  | "iphone"
  | "mac"
  | "ipad"
  | "watch"
  | "airpods"
  | "tv"
  | "accessories";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  description: string;
  imageUrl: string;
  priceCents: number;
  colors?: string[];
  capacities?: string[];
  newBadge?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  imageUrl: string;
  priceCents: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
}

