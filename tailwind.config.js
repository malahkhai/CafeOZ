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
        primary: "#fdb91c", // Oz Gold
        "primary-dark": "#e0a10f",
        secondary: "#FF5A36", // Sunset Orange
        "sunset-orange": "#FF5A36",
        background: "#181610", // Deep Night
        "deep-night": "#181610",
        surface: "#EAE4D6", // Cool Sand
        "cool-sand": "#EAE4D6",
        "card-dark": "#28241b",
        "white-smoke": "#F8F7F5",
        danger: "#C1292E", // Outback Red
      },
      fontFamily: {
        sans: ["PlusJakartaSans-Regular"],
        bold: ["PlusJakartaSans-Bold"],
        medium: ["PlusJakartaSans-Medium"],
      },
    },
  },
  plugins: [],
};
