// app/layout.tsx
import type { Metadata } from "next";

/* ① Google‑hosted Inter Variable – Next’s built‑in font optimiser */
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",   // lets us reference it in Tailwind
  display: "swap",            // avoids invisible text on first paint
});

/* If you still need Geist for *other* pages, keep this – otherwise delete it */
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import Header from "@/components/Header";

/* ② SEO / Open Graph metadata */
export const metadata: Metadata = {
  title: "Vespera | Premium Nightclub Reservations",
  description: "Your night, elevated. Book premier tables in Minneapolis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* ③ Apply Inter (and optionally Geist) to the whole document */}
      <body
        className={`${inter.variable} ${GeistSans.className} bg-black text-white antialiased`}
      >

        {/* ④ Site content */}
        <main className="container mx-auto flex-grow max-w-7xl px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
