"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const { items, subtotalCents, updateQuantity, removeItem, clearCart } =
    useCartStore();

  const hasItems = items.length > 0;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Panier</h1>
      {!hasItems ? (
        <div className="text-neutral-600 dark:text-neutral-400">
          Votre panier est vide. <Link href="/" className="underline">Découvrir les produits</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{formatPrice(item.priceCents)}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-sm">Qté</label>
                    <select
                      className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-2 py-1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    >
                      {Array.from({ length: 10 }).map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      className="text-sm text-red-600 hover:underline"
                      onClick={() => removeItem(item.id)}
                    >
                      Retirer
                    </button>
                  </div>
                </div>
                <div className="font-medium">{formatPrice(item.priceCents * item.quantity)}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span className="font-medium">{formatPrice(subtotalCents)}</span>
              </div>
            </div>
            <form action="/api/checkout" method="post">
              <Button className="w-full" type="submit">
                Passer au paiement
              </Button>
            </form>
            <Button variant="outline" className="w-full" onClick={() => clearCart()}>
              Vider le panier
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

