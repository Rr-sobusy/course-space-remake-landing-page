import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        primary: "#127C71",
        secondary: "#FFAF35",
        bcolor: "#FDFDFD",
      },
      keyframes: {
        custom: {
          "0%, 100%": { transform: "translateY(.5rem)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
