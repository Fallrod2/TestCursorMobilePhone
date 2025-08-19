"use client";

import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cart-store";

type AddToCartData = {
  productId: string;
  name: string;
  imageUrl: string;
  priceCents: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
};

export function AddToCartButton({ data }: { data: AddToCartData }) {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <Button onClick={() => addItem(data)} className="w-full sm:w-auto">
      Ajouter au panier
    </Button>
  );
}

