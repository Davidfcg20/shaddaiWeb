/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    // extend: {
    colors: {
      'black': '#222831',
      'dark-gray': '#31363F',
      'teal': '#76ABAE',
      'gray': '#EEEEEE',
      'white': '#FFFFFF',
      // },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
