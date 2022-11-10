const colors = require('tailwindcss/colors')
const color = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal
      }
    },
  },
  plugins: [],
}
