import Link from "next/link";
import SnakeGame from "@/components/SnakeGame";
import { withBasePath } from "@/lib/paths";

export default function SnakePage() {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="w-full max-w-[560px] flex flex-col items-center gap-4">
        <div className="w-full flex items-center justify-between">
          <Link href={withBasePath("/")} className="text-sm opacity-80 hover:opacity-100">← Accueil</Link>
          <h1 className="text-2xl font-semibold">Snake</h1>
          <div className="w-14" />
        </div>
        <SnakeGame />
      </div>
    </div>
  );
}

