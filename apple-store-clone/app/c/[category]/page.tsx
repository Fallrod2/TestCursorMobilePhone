import { listCategories, listProductsByCategory } from "@/lib/products";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cats = listCategories();
  const found = cats.find((c) => c.slug === category);
  if (!found) return notFound();
  const products = listProductsByCategory(found.slug);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{found.label}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

