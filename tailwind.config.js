const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
    rotate: {
      15: "15deg",
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      colors: {
        primary: "#011A2C",
        secondary: "#01253D",
        tertiary: "#063D66",
        quaternary: "#0085A6",
        quinary: "#36DBEE",
        success: "#008F05",
        failure: "#FF4444",
        warning: "#E09200",
      },
      fontFamily: {
        iblack: ["Inter-Black"],
        iextrabold: ["Inter-ExtraBold"],
        ibold: ["Inter-Bold"],
        isemibold: ["Inter-SemiBold"],
        imedium: ["Inter-Medium"],
        iregular: ["Inter-Regular"],
        ilight: ["Inter-Light"],
        iextralight: ["Inter-ExtraLight"],
        ithin: ["Inter-Thin"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
