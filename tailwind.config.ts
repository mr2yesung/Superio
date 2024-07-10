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
        "primary-bg": "#f5f7fc",
        "text-primary": "#202124",
        "text-secondary": "#696969",
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
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 100px, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "slide-in-down": "slideInDown 1s ease",
        "fade-up-500": "fadeUp 1.5s ease .5s forwards",
        "fade-up-1000": "fadeUp 1.5s ease 1s forwards",
        "fade-in-500": "fadeIn 1s ease .5s forwards",
        "fade-in-1000": "fadeIn 1s ease 1s forwards",
        "fade-in-1500": "fadeIn 1s ease 1.5s forwards",
        "fade-in-2000": "fadeIn 1s ease 2s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
