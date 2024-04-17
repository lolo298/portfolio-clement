import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F0F0F0",
          dark: "#1E1E1E",
        },
        primary: {
          light: "#0B30FE",
          DEFAULT: "#011ECB",
          dark: "#0119A2",
        },
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      fontSize: {
        "10xl": "9rem",
        "2xs": "0.5rem",
      },
      width: {
        "13": "3.25rem",
      },
      spacing: {
        image: "64rem",
        "screen-2w": "200vw",
      },
      animation: {
        "flowing-text": "flowing-text 20s linear infinite",
      },
      gridTemplateAreas: {
        masonry: [
          "empty-1 empty-1 pj-1 pj-1 pj-1 pj-1",
          "pj-2 empty-2 pj-1 pj-1 pj-1 pj-1",
          "pj-2 empty-3 empty-3 empty-3 empty-5 empty-5",
          "pj-2 empty-3 empty-3 empty-3 pj-3 pj-3",
          "empty-4 empty-3 empty-3 empty-3 pj-3 pj-3",
          "pj-4 pj-4 pj-4 empty-6 pj-3 pj-3",
          "pj-4 pj-4 pj-4 empty-7 empty-7 empty-8",
          "pj-4 pj-4 pj-4 empty-7 empty-7 pj-5",
          "txt txt txt empty-7 empty-7 pj-5",
        ],
        projects: [
          "empty-1 empty-1 pj-1 pj-1 pj-1 pj-1",
          "pj-2 empty-2 pj-1 pj-1 pj-1 pj-1",
          "pj-2 empty-3 empty-3 empty-3 empty-5 empty-5",
          "pj-2 empty-3 empty-3 empty-3 pj-3 pj-3",
          "empty-4 empty-3 empty-3 empty-3 pj-3 pj-3",
          "pj-4 pj-4 pj-4 empty-6 pj-3 pj-3",
          "pj-4 pj-4 pj-4 empty-7 empty-7 empty-7",
          "pj-4 pj-4 pj-4 empty-7 empty-7 empty-7",
        ],
      },
      gridTemplateColumns: {
        // masonry: "5fr 2fr 2fr 2fr 1fr 5fr",
        masonry: "40% 5% 5% 6% 2% 40%",
      },
      gridTemplateRows: {
        // masonry: "3fr 7fr 2fr 5fr 2fr 4fr 2fr 5fr 3fr 1fr 4fr",
        masonry: "8% 21% 3% 15% 5% 20% 5% 2% 20%",
        projects: "8% 21% 3% 15% 5% 20% 5% 2%",
      },
    },
    screens: {
      tablet: "1024px",
      // => @media (min-width: 640px) { ... }

      laptop: "1194px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1512px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
export default config;
