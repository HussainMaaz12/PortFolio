import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        background: "#0B0B0F",
        text: "#F5F5F7",
        accent: "#6C5CE7",
      },
    },
  },
  plugins: [],
};
export default config;
