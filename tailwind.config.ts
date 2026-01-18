import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", "sans-serif"],
        retro: ["var(--font-retro)", "monospace"],
      },
      colors: {
        neon: {
          pink: "#ff00ff",
          blue: "#00ffff",
          yellow: "#ffff00",
        },
      },
    },
  },
  plugins: [],
};
export default config;