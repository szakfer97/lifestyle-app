import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background border-b border-foreground/10">
      <nav className="container mx-auto p-4 flex gap-4">
        <Link href="/" className="text-foreground hover:text-foreground/80">
          Home
        </Link>
        <Link
          href="/health"
          className="text-foreground hover:text-foreground/80"
        >
          Health
        </Link>
        <Link
          href="/finances"
          className="text-foreground hover:text-foreground/80"
        >
          Finances
        </Link>
      </nav>
    </header>
  );
}
