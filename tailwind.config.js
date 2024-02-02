/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolateBrown: "#AB5E2A",
        darkBackground: "#16282F",
        lightText: "#FCE9E2"
      },
    },
  },
  plugins: [],
};
