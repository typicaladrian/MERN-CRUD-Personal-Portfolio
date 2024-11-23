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
    },
    fontFamily: {
      'primary': ['EB Garamond', 'serif'],
      'secondary': ['Tenor Sans', 'sans-serif'],
      'display': ['Tinos', 'serif']
    }
  },
  plugins: [],
}