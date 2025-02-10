import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Lifestyle App</h1>
        <nav className="flex gap-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <Link href="/health" className="text-blue-500 hover:underline">
            Health
          </Link>
          <Link href="/finances" className="text-blue-500 hover:underline">
            Finances
          </Link>
        </nav>
      </main>
    </div>
  );
}
