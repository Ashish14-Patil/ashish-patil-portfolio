import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060A12",
          900: "#0B1220", // Hero background
          850: "#0F192C",
          800: "#14223B",
          700: "#1E3256",
        },
        accent: {
          DEFAULT: "#4F8CFF", // Accent blue
          hover: "#3B7BE8",
          light: "#EBF2FF",
          subtle: "#F0F5FF",
          dark: "#2A6EE4",
        },
        soft: "#F6F8FC", // Content soft background
        textPrimary: "#172033",
        textSecondary: "#4B5563",
        textMuted: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(11, 18, 32, 0.04)",
        card: "0 4px 20px -2px rgba(11, 18, 32, 0.06), 0 2px 6px -1px rgba(11, 18, 32, 0.03)",
        "card-hover": "0 12px 30px -4px rgba(79, 140, 255, 0.15), 0 4px 12px -2px rgba(11, 18, 32, 0.05)",
        glow: "0 0 25px -5px rgba(79, 140, 255, 0.35)",
        "hero-card": "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
