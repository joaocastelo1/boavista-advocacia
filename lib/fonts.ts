import { Cinzel, Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Arial", "sans-serif"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif-cinzel",
  display: "swap",
  weight: ["400", "500", "600"],
  fallback: ["Georgia", "serif"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif-cormorant",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  fallback: ["Georgia", "serif"],
});

export const fontVariables = [
  inter.variable,
  playfair.variable,
  cinzel.variable,
  cormorant.variable,
].join(" ");
