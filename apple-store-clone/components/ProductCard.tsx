"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/format";
import { useCartStore } from "@/store/cart-store";
import { type Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-black">
      <Link href={`/p/${product.slug}`} className="block">
        <div className="aspect-square relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="mt-3 space-y-1">
          <div className="flex items-center gap-2">
            {product.newBadge && (
              <span className="text-[10px] uppercase tracking-wide text-blue-600">Nouveau</span>
            )}
            <h3 className="font-medium">{product.name}</h3>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
            {product.description}
          </p>
          <div className="text-sm font-medium">{formatPrice(product.priceCents)}</div>
        </div>
      </Link>
      <div className="mt-3">
        <Button
          onClick={() =>
            addItem({
              productId: product.id,
              name: product.name,
              imageUrl: product.imageUrl,
              priceCents: product.priceCents,
              quantity: 1,
            })
          }
          className="w-full"
        >
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
}

