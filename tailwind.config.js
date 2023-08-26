/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Netflix Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
