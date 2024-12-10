/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': "#181C14",
      'secondary': "#ECDFCC",
      'grey': "#747474",
      'white': '#FFFFFF',
      'test1': '#1c915a',
      'test2': '#661478',
      'test3': '#f0cf4a',
      'test4': '#dd612c'
    },
    fontFamily: {
      'primary': ['EB Garamond', 'serif'],
      'secondary': ['Tenor Sans', 'sans-serif'],
      'display': ['Tinos', 'serif']
    }
  },
  plugins: [],
}