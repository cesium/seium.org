const defaultTheme = require("tailwindcss/defaultTheme");

function fromTo(start, end) {
  return Array.from({length: end-start+1}, (_, i) => i + start)
}

function concatFlatMap(first, ...args) {
  const list = Array.isArray(first) ? first : [first];
  var ans = list.map((i) => i.toString());

  args.forEach((a) => {
    const list = Array.isArray(a) ? a : [a];
    ans = list.flatMap((i) => ans.map((s) => s + i.toString()));
  });

  return ans;
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    ...concatFlatMap(["grid-cols-", "col-span-"], fromTo(1,12)),
    ...concatFlatMap(["px-", "pl-"], [0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40]),
    ...concatFlatMap(["bg-", "text-"], ["primary", "secondary", "tertiary", "quaternary", "quinary", "white"]),
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
