import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // xs: "300px",
      sm: "480px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      // "2xl": "1580px",
    },
    extend: {
      colors: {},

      backgroundColor: {
        primarybg:
          "background: linear-gradient(180deg, #49C01F 0%, #1FC043 100%)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pop: ["var(--font-pop)", "sans-serif"],
        pops: ["var(--font-pops)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
