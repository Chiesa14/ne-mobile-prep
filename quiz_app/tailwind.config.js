/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./modules/**/*.{js,jsx,ts,tsx}"],

  presets: [require('nativewind/preset')],
  theme: {
    extend:
    {
      colors: {
        primary: '#7E6DF3',   // Lavender Indigo
        secondary: '#AB3CFC', // Electric Purple
        background: '#F9F9FF',
        text: '#1E1E1E',
      }
    },
  },
  plugins: [],
};
