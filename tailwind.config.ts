import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        promary: "#ff6363",
        secondary: "#ffa726",
        dark: "#1a1a1a",
        redAccent: "#e50914",
        
      },
      fontFamily: {
        sans: ['"poppins"',"sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
