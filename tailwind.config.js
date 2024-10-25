/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "star-wars-yellow": "#ffe81f",
        "star-wars-red": "#AC0607",
      },
    },
  },
  plugins: [],
};
