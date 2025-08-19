import Image from "next/image";
import { formatPrice } from "@/lib/format";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="relative aspect-square">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-neutral-600 dark:text-neutral-400">{product.description}</p>
        <div className="text-xl font-medium">{formatPrice(product.priceCents)}</div>
        <AddToCartButton
          data={{
            productId: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            priceCents: product.priceCents,
            quantity: 1,
          }}
        />
      </div>
    </div>
  );
}
