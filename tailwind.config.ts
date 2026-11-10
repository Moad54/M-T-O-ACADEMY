import type { Config } from "tailwindcss";

/**
 * Palette MÉTÉO ACADEMY : bleu nuit, bleu ciel, blanc et touches orange.
 * Le mode sombre est piloté par la classe "dark" posée sur <html>.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nuit: {
          50: "#f1f5fb",
          100: "#dfe8f5",
          200: "#b9cde9",
          300: "#86a8d8",
          400: "#4f7ec1",
          500: "#2c5ea6",
          600: "#1d4884",
          700: "#16376a",
          800: "#0f2650",
          900: "#0a1a3a",
          950: "#060f24",
        },
        ciel: {
          50: "#eef9ff",
          100: "#d8f0ff",
          200: "#b3e2ff",
          300: "#7fcfff",
          400: "#44b5f5",
          500: "#1f9ae0",
          600: "#1479bd",
        },
        soleil: {
          400: "#ffa94d",
          500: "#ff8c1a",
          600: "#e8700a",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
