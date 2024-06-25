import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1967d2",
        "primary-hover": "#0146a6",
      },
      screens: {
        xxl: "1600px",
      },
      keyframes: {
        slideInDown: {
          "0%": {
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "slide-in-down": "slideInDown 1s ease",
      },
    },
  },
  plugins: [],
};
export default config;
