/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,html}"
  ],
  theme: {
    fontFamily : {
      'MonoJet' : ['JetBrains Mono', 'monospace'],
      'quicksand' : ['Quicksand', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
