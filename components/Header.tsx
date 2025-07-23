import Link from "next/link";
import { Martini } from "lucide-react"; // A fitting icon

export default function Header() {
  return (
    <header className="p-4 border-b border-white/10">
      <nav className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <Martini className="text-primary" />
          VESPERA
        </Link>
        <Link href="/book" className="hover:text-white/80 transition-colors">
          Book a Table
        </Link>
      </nav>
    </header>
  );
}

