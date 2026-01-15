import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          50: "color-mix(in srgb, var(--color-primary) 10%, white)",
          100: "color-mix(in srgb, var(--color-primary) 20%, white)",
          200: "color-mix(in srgb, var(--color-primary) 30%, white)",
          300: "color-mix(in srgb, var(--color-primary) 50%, white)",
          400: "color-mix(in srgb, var(--color-primary) 70%, white)",
          500: "var(--color-primary)",
          600: "color-mix(in srgb, var(--color-primary) 90%, black)",
          700: "color-mix(in srgb, var(--color-primary) 70%, black)",
          800: "color-mix(in srgb, var(--color-primary) 50%, black)",
          900: "color-mix(in srgb, var(--color-primary) 30%, black)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          500: "var(--color-secondary)",
          600: "color-mix(in srgb, var(--color-secondary) 90%, black)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          500: "var(--color-accent)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
