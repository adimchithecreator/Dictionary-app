/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'borderColor': '#616161',
        'example': '#4F4F4F',
        'nav':'#A2A2A2'
      },
      fontFamily: {
        TDS: [ 'Tiro Devanagari Sanskrit', 'serif']
      },
    },
  },
  plugins: [],
}