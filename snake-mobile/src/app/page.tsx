import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-[720px] mx-auto flex flex-col gap-6">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold">Accueil</h1>
          <p className="opacity-80">Choisissez une expérience.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/snake" className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-4 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
            <div className="text-lg font-medium">Jouer à Snake</div>
            <p className="text-sm opacity-75">Version mobile et desktop</p>
          </Link>

          <Link href="/apple-store" className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-4 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
            <div className="text-lg font-medium">Apple Store</div>
            <p className="text-sm opacity-75">Clone d&apos;une page de l&apos;Apple&nbsp;Store</p>
          </Link>
        </div>
      </div>
    </main>
  );
}