# Journal de bord

- Init: Next.js 15 (TS, Tailwind v4), App Router
- Ajouts: zustand, stripe, @stripe/stripe-js, lucide-react, clsx, tailwind-merge, zod, class-variance-authority
- Types: `types/product.ts`
- Lib: `lib/format.ts`, `lib/utils.ts`, `lib/products.ts` (données mock)
- Store: `store/cart-store.ts` (panier, persistence localStorage)
- UI: `components/ui/Button.tsx`, `components/NavBar.tsx`, `components/ProductCard.tsx`, `components/AddToCartButton.tsx`
- Pages: Home `app/(store)/page.tsx`, Catégorie `app/c/[category]/page.tsx`, Produit `app/p/[slug]/page.tsx`, Panier `app/cart/page.tsx`, Succès `app/success/page.tsx`
- API: `app/api/checkout/route.ts` (Stripe, placeholder)
- Config: `next.config.ts` (images distantes), `.env.local.example`
- Cleanup: suppression `app/page.tsx`, consolidation du layout racine avec `NavBar`