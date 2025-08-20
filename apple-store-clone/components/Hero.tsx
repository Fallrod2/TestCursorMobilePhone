import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

interface HeroProps {
  theme?: Theme;
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  buyHref?: string;
  learnHref?: string;
}

export function Hero({
  theme = "light",
  title,
  subtitle,
  imageUrl,
  imageAlt,
  buyHref,
  learnHref,
}: HeroProps) {
  const isDark = theme === "dark";
  return (
    <section
      className={cn(
        "w-full overflow-hidden rounded-none md:rounded-2xl",
        isDark
          ? "bg-black text-white"
          : "bg-[#f5f5f7] text-[#1d1d1f]"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className={cn("mt-2 text-lg sm:text-xl", isDark ? "text-neutral-300" : "text-neutral-700")}>{subtitle}</p>
        )}
        <div className="mt-4 flex items-center justify-center gap-6 text-blue-600">
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
        <div className="relative mt-8 aspect-[2/1] sm:aspect-[2.5/1]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

