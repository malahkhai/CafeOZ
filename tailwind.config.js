/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FDB91A", // Oz Gold
        secondary: "#FF6B35", // Sunset Orange
        background: "#1A1A1D", // Deep Night
        surface: "#F5F1E8", // Cool Sand
        danger: "#C1292E", // Outback Red
        "card-dark": "#2C2C2E",
        "deep-night": "#1A1A1D",
        "oz-gold": "#FDB91A",
        "sunset-orange": "#FF6B35",
        "cool-sand": "#F5F1E8",
        "outback-red": "#C1292E",
      },
      fontFamily: {
        sans: ["System"],
      },
    },
  },
  plugins: [],
};
