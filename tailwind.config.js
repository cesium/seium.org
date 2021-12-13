module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '15': '15deg',
      '-180': '-180deg',
      '-90': '-90deg',

     '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',

     '135': '135deg',
      '180': '180deg',

     '270': '270deg',
    },
    extend: {
      colors: {
        darkest_blue: "#011A2C",
        dark_blue: "#01253D",
        medium_blue: "#063D66",
        medium_light_blue: "#0085A6",
        aqua: "#36DBEE",
      },
      fontFamily: {
        inter_black: ["Inter-Black"],
        inter_extrabold: ["Inter-ExtraBold"],
        inter_bold: ["Inter-Bold"],
        inter_semibold: ["Inter-SemiBold"],
        inter_medium: ["Inter-Medium"],
        inter_regular: ["Inter-Regular"],
        inter_light: ["Inter-Light"],
        inter_extralight: ["Inter-ExtraLight"],
        inter_thin: ["Inter-Thin"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
