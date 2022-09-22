/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/images/background.png')",
      },
    },
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
