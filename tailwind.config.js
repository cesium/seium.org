module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark_blue: "#01253D",
        medium_blue: "#063D66",
        medium_light_blue: "#0085A6",
        aqua: "#36DBEE",
      },
      fontFamily: {
        regular: ["Inter-Regular"],
        black: ["Inter-Black"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
