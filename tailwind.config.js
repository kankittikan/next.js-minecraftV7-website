/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "Burtons",
      },
      backgroundImage: {
        'pack': "url('/assets/images/bg.jpeg')",
      },
    },
  },
  plugins: [],
}
