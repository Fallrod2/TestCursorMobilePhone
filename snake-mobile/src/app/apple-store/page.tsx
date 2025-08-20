import Link from "next/link";

export const metadata = {
  title: "Apple Store",
  description: "Clone simple d’une page Apple Store",
};

export default function AppleStorePage() {
  const cdn = "https://store.storeimages.cdn-apple.com";

  const promos = [
    {
      title: "iPhone 15 Pro",
      subtitle: "Titane. Puissance A17 Pro.",
      image: `${cdn}/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692894151261`,
      href: "#",
    },
    {
      title: "MacBook Air 13″ M3",
      subtitle: "Ultra fin. Super puissant.",
      image: `${cdn}/8756/as-images.apple.com/is/mba13-m3-midnight-select-202403?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1708555425305`,
      href: "#",
    },
    {
      title: "iPad Pro 11″ M4",
      subtitle: "Ultra fin. Ultra puissant.",
      image: `${cdn}/8756/as-images.apple.com/is/ipad-pro-11-wifi-select-spaceblack-202405?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1713385578858`,
      href: "#",
    },
    {
      title: "Apple Watch Series 9",
      subtitle: "Santé. Sécurité. Connectivité.",
      image: `${cdn}/8756/as-images.apple.com/is/MX2X3ref_VW_PF+watch-45-alum-starlight-nc-9s_VW_PF_WF_CO_GEO_EMEA?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1693263142771`,
      href: "#",
    },
    {
      title: "AirPods Pro (USB-C)",
      subtitle: "Audio immersif. Réduction du bruit.",
      image: `${cdn}/8756/as-images.apple.com/is/airpods-pro-2nd-gen-usb-c-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1693248080138`,
      href: "#",
    },
    {
      title: "Apple TV 4K",
      subtitle: "Divertissement à la maison.",
      image: `${cdn}/8756/as-images.apple.com/is/MXGY3?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1664896365470`,
      href: "#",
    },
  ];

  const categories = [
    "Mac",
    "iPhone",
    "iPad",
    "Watch",
    "AirPods",
    "TV & Maison",
    "Accessoires",
  ];

  const quickLinks = [
    "Suivre une commande",
    "Financement",
    "Éducation",
    "Reconditionné",
    "Apple Trade In",
  ];

  return (
    <main className="min-h-screen p-6 pb-16">
      <div className="mx-auto w-full max-w-[1120px] space-y-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-sm opacity-80 hover:opacity-100">← Accueil</Link>
          <div className="text-2xl sm:text-3xl font-semibold tracking-tight">Store</div>
          <div className="w-16" />
        </header>

        <section className="rounded-2xl border border-black/10 dark:border-white/15 p-8 sm:p-10 bg-white dark:bg-black">
          <div className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Bienvenue sur l’Apple Store
          </div>
          <p className="mt-2 text-sm sm:text-base opacity-80 max-w-[65ch]">
            Le meilleur endroit pour acheter les produits que vous aimez, avec des conseils d’experts, des options de financement et des livraisons rapides.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <a href="#nouveautes" className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 hover:opacity-90">Nouveautés</a>
            <a href="#categories" className="rounded-full border border-black/15 dark:border-white/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">Catégories</a>
            <a href="#liens" className="rounded-full border border-black/15 dark:border-white/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">Liens rapides</a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-black/10 dark:border-white/15 p-4">
              Besoin d’aide pour acheter ?
              <a href="#" className="ml-2 underline underline-offset-4 hover:opacity-90">Demander à un Spécialiste</a>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/15 p-4">
              Visiter un Apple Store
              <a href="#" className="ml-2 underline underline-offset-4 hover:opacity-90">Trouver un magasin</a>
            </div>
          </div>
        </section>

        <section id="nouveautes" className="space-y-4">
          <h2 className="text-lg font-medium tracking-tight">Les nouveautés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.map((p) => (
              <article key={p.title} className="group rounded-2xl border border-black/10 dark:border-white/15 overflow-hidden bg-white dark:bg-black">
                <a href={p.href} className="block">
                  <div className="relative aspect-[4/3] sm:aspect-[5/4] bg-[#f5f5f7] dark:bg-neutral-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm opacity-70">{p.subtitle}</p>
                    <span className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400">En savoir plus →</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="categories" className="space-y-4">
          <h2 className="text-lg font-medium tracking-tight">Acheter par catégorie</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((name) => (
              <a
                key={name}
                href="#"
                className="rounded-2xl border border-black/10 dark:border-white/15 py-6 text-center bg-white dark:bg-black hover:bg-black/5 dark:hover:bg-white/10"
              >
                <div className="text-sm font-medium">{name}</div>
              </a>
            ))}
          </div>
        </section>

        <section id="liens" className="space-y-4">
          <h2 className="text-lg font-medium tracking-tight">Liens rapides</h2>
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((q) => (
              <a
                key={q}
                href="#"
                className="rounded-full border border-black/10 dark:border-white/15 px-4 py-2 text-sm bg-white dark:bg-black hover:bg-black/5 dark:hover:bg-white/10"
              >
                {q}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}