/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        londrina: ["Londrina Solid", "cursive"],
      },
      colors: {
        White: "FEFFFE",
      },
      backgroundImage: {
        "hero-image": "url('./assets/images/image1.png')",
        "Chicken-image": "url('./assets/images/chickenimg.png')",
        "menu-cut": "url('./assets/images/hm-menu-cut.png')",
      },
      rotate: {
        8: "8deg",
      },
    },
  },
  plugins: [],
};
