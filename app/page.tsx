// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="flex justify-between items-center mb-16">
        <h1 className="text-2xl font-bold tracking-widest text-white">Vespera</h1>
        <nav className="space-x-6 text-sm text-gray-300">
          <Link href="#features">Features</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      <section className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,0,255,0.4)]">
          Your Night, Elevated.
        </h2>
        <p className="text-lg mt-4 text-gray-300">
          Book premier tables at the most exclusive clubs in Minneapolis.
        </p>
        <Link
          href="#reserve"
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/40 transition"
        >
          Reserve Now
        </Link>
      </section>

      <section id="features" className="grid gap-6 md:grid-cols-3 mb-24">
        {["Neon-Glow UI", "Mobile Optimized", "Real-Time Booking"].map((feature) => (
          <div
            key={feature}
            className="p-6 border border-transparent rounded-xl text-center text-white bg-black relative z-10"
            style={{
              background:
                "linear-gradient(#000, #000) padding-box, linear-gradient(135deg, #ff00cc, #3333ff) border-box",
              borderRadius: "16px",
              border: "2px solid transparent",
            }}
          >
            <h3 className="text-xl font-medium">{feature}</h3>
          </div>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Vespera. All rights reserved.
      </footer>
    </main>
  );
}
