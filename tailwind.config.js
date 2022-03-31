// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        shashank:
        
{
  50: '#e1edff',
  100: '#b2c8ff',
  200: '#80a3ff',
  300: '#4f7efe',
  400: '#2159fd',
  500: '#0d40e4',
  600: '#0532b2',
  700: '#002380',
  800: '#00154f',
  900: '#00071f',
},

navCol:

{
  50: '#f5effb',
  100: '#dad5df',
  200: '#2B3148',
  300: '#a69fad',
  400: '#8c8394',
  500: '#736a7b',
  600: '#595260',
  700: '#403b46',
  800: '#27222b',
  900: '#100a15',
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
