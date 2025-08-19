"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type CartItem } from "@/types/product";

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  subtotalCents: number;
  addItem: (item: Omit<CartItem, "id"> & { id?: string }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

function computeId(item: Omit<CartItem, "id"> & { id?: string }): string {
  if (item.id) return item.id;
  const optionsKey = item.selectedOptions
    ? Object.entries(item.selectedOptions)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `${k}:${v}`)
        .join("|")
    : "";
  return `${item.productId}|${optionsKey}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalQuantity: 0,
      subtotalCents: 0,
      addItem: (incoming) => {
        const id = computeId(incoming);
        const existing = get().items.find((i) => i.id === id);
        let nextItems: CartItem[];
        if (existing) {
          nextItems = get().items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + (incoming.quantity || 1) } : i
          );
        } else {
          const item: CartItem = {
            ...incoming,
            id,
            quantity: incoming.quantity || 1,
          };
          nextItems = [...get().items, item];
        }
        const totalQuantity = nextItems.reduce((acc, i) => acc + i.quantity, 0);
        const subtotalCents = nextItems.reduce(
          (acc, i) => acc + i.quantity * i.priceCents,
          0
        );
        set({ items: nextItems, totalQuantity, subtotalCents });
      },
      removeItem: (id) => {
        const nextItems = get().items.filter((i) => i.id !== id);
        const totalQuantity = nextItems.reduce((acc, i) => acc + i.quantity, 0);
        const subtotalCents = nextItems.reduce(
          (acc, i) => acc + i.quantity * i.priceCents,
          0
        );
        set({ items: nextItems, totalQuantity, subtotalCents });
      },
      updateQuantity: (id, quantity) => {
        const nextItems = get().items
          .map((i) => (i.id === id ? { ...i, quantity } : i))
          .filter((i) => i.quantity > 0);
        const totalQuantity = nextItems.reduce((acc, i) => acc + i.quantity, 0);
        const subtotalCents = nextItems.reduce(
          (acc, i) => acc + i.quantity * i.priceCents,
          0
        );
        set({ items: nextItems, totalQuantity, subtotalCents });
      },
      clearCart: () => set({ items: [], totalQuantity: 0, subtotalCents: 0 }),
    }),
    {
      name: "apple-store-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const items = state.items || [];
        const totalQuantity = items.reduce((acc, i) => acc + i.quantity, 0);
        const subtotalCents = items.reduce(
          (acc, i) => acc + i.quantity * i.priceCents,
          0
        );
        state.totalQuantity = totalQuantity;
        state.subtotalCents = subtotalCents;
      },
    }
  )
);

