module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      isha: 
      {
        50: '#feeeea',
        100: '#e5d2ce',
        200: '#cfb5b0',
        300: '#ba9891',
        400: '#a67b72',
        500: '#8c6258',
        600: '#6e4b45',
        700: '#4f3630',
        800: '#311f1c',
        900: '#180804',
      },  
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
