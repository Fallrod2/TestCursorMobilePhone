import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "blue";

interface PromoTileProps {
  theme?: Theme;
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  buyHref?: string;
  learnHref?: string;
}

export function PromoTile({
  theme = "light",
  title,
  subtitle,
  imageUrl,
  imageAlt,
  buyHref,
  learnHref,
}: PromoTileProps) {
  const themeClass =
    theme === "dark"
      ? "bg-black text-white"
      : theme === "blue"
      ? "bg-[#f0f6ff] text-[#1d1d1f]"
      : "bg-[#f5f5f7] text-[#1d1d1f]";

  return (
    <div className={cn("rounded-2xl overflow-hidden", themeClass)}>
      <div className="px-6 py-10 text-center">
        <h3 className="text-3xl font-semibold">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-neutral-600 dark:text-neutral-300">{subtitle}</p>
        )}
        <div className="mt-3 flex items-center justify-center gap-6 text-blue-600">
          {buyHref && (
            <Link href={buyHref} className="font-medium hover:underline">
              Acheter
            </Link>
          )}
          {learnHref && (
            <Link href={learnHref} className="font-medium hover:underline">
              En savoir plus
            </Link>
          )}
        </div>
      </div>
      <div className="relative aspect-[5/4]">
        <Image src={imageUrl} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
      </div>
    </div>
  );
}

