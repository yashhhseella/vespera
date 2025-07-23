import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/Header";

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
      <body
        className={`${GeistSans.className} bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="container mx-auto flex-grow max-w-7xl px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
