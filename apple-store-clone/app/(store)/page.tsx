import { listCategories, listAllProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

export default function HomePage() {
  const products = listAllProducts();
  const categories = listCategories();

  return (
    <div className="space-y-10">
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

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  );
}

