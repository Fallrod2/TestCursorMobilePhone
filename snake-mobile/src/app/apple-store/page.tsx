import Link from "next/link";

export const metadata = {
  title: "Apple Store",
  description: "Clone simple d’une page Apple Store",
};

export default function AppleStorePage() {
  const cards = [
    {
      title: "iPhone 15 Pro",
      subtitle: "Titanium. Puissant. Pro.",
      cta: "Acheter",
      color: "from-[#0a0a0a] to-[#1a1a1a]",
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1692894151261",
    },
    {
      title: "MacBook Air",
      subtitle: "Pensez léger. Pensez grand.",
      cta: "Acheter",
      color: "from-[#0f172a] to-[#111827]",
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-m3-midnight-select-202403?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1708555425305",
    },
    {
      title: "iPad Pro",
      subtitle: "Boosté par la puce M2.",
      cta: "Acheter",
      color: "from-[#111827] to-[#1f2937]",
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-wifi-select-spaceblack-202405?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1713385578858",
    },
    {
      title: "Apple Watch",
      subtitle: "L’ultime appareil pour une vie saine.",
      cta: "Acheter",
      color: "from-[#0a0a0a] to-[#0f172a]",
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX2X3ref_VW_PF+watch-45-alum-starlight-nc-9s_VW_PF_WF_CO_GEO_EMEA?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1693263142771",
    },
    {
      title: "AirPods Pro",
      subtitle: "Audio immersif. Réduction de bruit.",
      cta: "Acheter",
      color: "from-[#1f2937] to-[#111827]",
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2nd-gen-usb-c-202309?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1693248080138",
    },
    {
      title: "Apple TV 4K",
      subtitle: "Du grand divertissement à la maison.",
      cta: "Acheter",
      color: "from-[#0f172a] to-[#0a0a0a]",
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXGY3?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1664896365470",
    },
  ];

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto w-full max-w-[1100px] space-y-8">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-sm opacity-80 hover:opacity-100">← Accueil</Link>
          <div className="text-2xl font-semibold">Store</div>
          <div className="w-16" />
        </header>

        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-8 bg-gradient-to-b from-[#111] to-[#000] text-white shadow-sm">
          <div className="text-3xl sm:text-4xl font-semibold">Bienvenue sur l’Apple Store</div>
          <p className="mt-2 opacity-90 max-w-[60ch]">Le meilleur endroit pour acheter les produits que vous aimez, avec des conseils d’experts, des options de financement et des livraisons rapides.</p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#nouveautes" className="rounded-full bg-white text-black px-4 py-2 hover:opacity-90">Nouveautés</a>
            <a href="#tous-les-produits" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">Tous les produits</a>
          </div>
        </section>

        <section id="nouveautes" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-2xl border border-black/[.08] dark:border-white/[.145] overflow-hidden bg-gradient-to-b ${card.color}`}
            >
              <div className="relative aspect-[16/9]">
                <img src={card.image} alt={card.title} className="w-full h-full object-contain" />
              </div>
              <div className="p-6 text-white flex flex-col items-start justify-end">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="opacity-90">{card.subtitle}</p>
                <Link
                  href="/apple-store#tous-les-produits"
                  className="mt-4 rounded-full bg-white text-black px-4 py-2 text-sm hover:opacity-90"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section id="tous-les-produits" className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6">
          <h2 className="text-lg font-medium">Acheter par catégorie</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["Mac", "iPhone", "iPad", "Watch", "AirPods", "TV & Maison"].map((name) => (
              <Link
                key={name}
                href="/apple-store#tous-les-produits"
                className="rounded-xl border border-black/[.08] dark:border-white/[.145] px-3 py-6 text-center hover:bg-black/[.02] dark:hover:bg-white/[.02]"
              >
                <div className="text-sm font-medium">{name}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}