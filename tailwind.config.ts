import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211b",
        paper: "#fbfaf7",
        moss: "#536b48",
        clay: "#a8583d",
        ocean: "#2b6c7d",
        line: "#ded8ca"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 33, 27, 0.08)"
      }
    }
  },
  plugins: [typography]
};

export default config;
