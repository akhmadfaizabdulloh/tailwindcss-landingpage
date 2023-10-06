/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#002366',
        gold: '#D0A84B',
        whiteblue: '#CBD5E1',
        darkestgreen: '#1C4144',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        'Inter' : ['Inter', 'san-serif'],
      },
    },
  },
  plugins: [],
}