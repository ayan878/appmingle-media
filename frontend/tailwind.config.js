/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pattern": "url('./src/assets/Untitled-design-83.png')",
      },
      container: {
        center: true, // Center the container
        padding: "1px", // Add padding
        screens: {
          sm: "640px", // Customize for small screens
          md: "768px", // Customize for medium screens
          lg: "1024px", // Customize for large screens
          xl: "1280px", // Customize for extra large screens
          "2xl": "1536px", // Customize for 2xl screens
        },
      },
    },
  },
  plugins: [],
};
