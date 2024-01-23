import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#347BFF",
      purple: "#838CE3",
      yellow: "#f9be1e",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        mono: ["monospace"],
        pixeled: ["Pixelify Sans"],
      },
    },
  },
  plugins: [],
};
export default config;
