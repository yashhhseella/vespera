// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      dropShadow: {
        glow: "0 0 15px rgba(255, 0, 255, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
