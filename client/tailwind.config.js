/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': 'hsl(28, 88%, 62%)',
        'first-color-alt': 'hsl(28, 84%, 58%)',
        'title-color': 'hsl(0, 0%, 95%)',
        'text-color': 'hsl(0, 0%, 25%)',
        'text-color-light': 'hsl(0, 0%, 65%)',
        'black-color': 'hsl(0, 0%, 6%)',
        'white-color': 'hsl(0, 0%, 100%)',
        'body-color': 'hsl(0, 0%, 6%)',
        'container-color': 'hsl(0, 0%, 10%)',
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        second: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}