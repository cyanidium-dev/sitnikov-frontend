import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "786px",
        lg: "1280px",
      },
      colors: {
        background: "var(--light)",
        foreground: "var(--dark)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
        micra: ["Micra", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
