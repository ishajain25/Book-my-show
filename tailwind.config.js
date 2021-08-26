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
      bms:
      {
        50: '#edf1fc',
        100: '#d3d4e1',
        200: '#b6b8c9',
        300: '#989bb2',
        400: '#7c7f9b',
        500: '#636582',
        600: '#4c4f66',
        700: '#363849',
        800: '#2b3147',
        900: '#0a0a16',
      },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
