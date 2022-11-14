/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        special: '#3898EC',
        primary: 'rgb(72, 31, 255)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
