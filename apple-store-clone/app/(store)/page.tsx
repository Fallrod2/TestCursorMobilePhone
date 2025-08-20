import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PromoTile } from "@/components/PromoTile";
import { listCategories, listAllProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const products = listAllProducts();
  const categories = listCategories();

  return (
    <div className="space-y-10">
      <Hero
        theme="dark"
        title="iPhone 15 Pro"
        subtitle="Titane. Puissance A17 Pro."
        imageUrl="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=1680&hei=944&fmt=jpeg&qlt=90&.v=1692892020194"
        imageAlt="iPhone 15 Pro"
        buyHref="/p/iphone-15-pro"
        learnHref="/p/iphone-15-pro"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PromoTile
          theme="light"
          title="MacBook Pro 14″"
          subtitle="Pro à tous les niveaux."
          imageUrl="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-silver-select-202310?wid=1200&hei=630&fmt=jpeg&qlt=90&.v=1697239227878"
          imageAlt="MacBook Pro 14"
          buyHref="/p/macbook-pro-m3-pro-14"
          learnHref="/p/macbook-pro-m3-pro-14"
        />
        <PromoTile
          theme="blue"
          title="iPad Pro"
          subtitle="Puce M4. Ultra fin. Ultra puissant."
          imageUrl="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-wifi-select-spaceblack-202405?wid=1200&hei=630&fmt=jpeg&qlt=90&.v=1713385578858"
          imageAlt="iPad Pro"
          buyHref="/p/ipad-pro-m4-11"
          learnHref="/p/ipad-pro-m4-11"
        />
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Les essentiels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/c/${c.slug}`}
            className="rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            {c.label}
          </Link>
        ))}
      </section>
    </div>
  );
}

