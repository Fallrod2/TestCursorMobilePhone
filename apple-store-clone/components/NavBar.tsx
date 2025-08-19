"use client";

import Link from "next/link";
import { ShoppingBag, Search } from "lucide-react";
import { listCategories } from "@/lib/products";
import { useCartStore } from "@/store/cart-store";
import { cn } from "@/lib/utils";

export function NavBar() {
  const cartQty = useCartStore((s) => s.totalQuantity);
  const cats = listCategories();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-12 items-center gap-4">
          <Link href="/" className="font-semibold">
             Store
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm text-neutral-700 dark:text-neutral-200">
            {cats.map((c) => (
              <Link key={c.slug} href={`/c/${c.slug}`} className="hover:opacity-80">
                {c.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <button className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900">
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/cart"
              className={cn(
                "relative p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900",
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartQty > 0 && (
                <span className="absolute -right-1 -top-1 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] leading-none px-1.5 py-1">
                  {cartQty}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

