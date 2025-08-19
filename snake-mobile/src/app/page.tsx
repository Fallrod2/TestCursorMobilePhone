import SnakeGame from "@/components/SnakeGame";

export default function Home() {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="w-full max-w-[560px] flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold">Snake Mobile</h1>
        <SnakeGame />
      </div>
    </div>
  );
}
