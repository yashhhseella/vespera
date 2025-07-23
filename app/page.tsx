import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
        Vespera
      </h1>
      <p className="mt-4 text-lg md:text-xl text-white/70 max-w-md">
        Your night, elevated. The simplest way to book premier tables in
        Minneapolis.
      </p>
      <div className="mt-8">
        <Link href="mailto:demo@vespera.club" className="bg-primary text-primary-foreground py-3 px-8 rounded-md font-semibold hover:bg-white/90 transition-colors">
          Request Demo
        </Link>
      </div>
    </div>
  );
}

