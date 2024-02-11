const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
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
        primary: "#04041C",
        secondary: "#04041C",
        tertiary: "#04041C",
        quaternary: "#330BFF",
        quinary: "#FF800D",
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
        terminal: ["Terminal"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
