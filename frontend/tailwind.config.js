/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Merri: ["Merriweather", "sans-serif"],
      },
      backgroundImage: {
        "footer-pattern": "url('/Untitled-design-83.png')",
        hero: "url('/11.gif')",
        mobHero: "url('/12.gif')",
      },
      container: {
        center: true,
        padding: "1px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
    boxShadow: {
      "custom-light": "0 4px 15px rgba(255, 255, 255, 0.3)",
      "custom-dark": "0 4px 15px rgba(0, 0, 0, 0.5)",
      "custom-xl": "0 10px 30px rgba(0, 0, 0, 0.7)",
    },
  },
  plugins: [],
};
