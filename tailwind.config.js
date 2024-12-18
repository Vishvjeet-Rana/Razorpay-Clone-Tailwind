/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        "slide-in-left": "slideInLeft 1s ease-out",
        "slide-in-right": "slideInRight 1s ease-out",
        "slide-in-top": "slideInTop 1s ease-out",
        "slide-in-bottom": "slideInBottom 1s ease-out",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      fontFamily: {
        mullish: ["Mullish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#add8e6",
        lightBlue300: "#4fc3f7",
        lightBlue500: "#03a9f4",
        greeLight: "#8bc34a",
        gratText: "#9e9e9e",
        lightGray: "#d3d3d3",
        grayBlue: "#5a647e",
        deepBlueHead: "#0d47a1",
        gray2: "#525a76",
        darkGray: "#A9A9A9",
        WhiteBlue: "#D9D9FF",
        BtnClr: "#7B99FF",
      },
    },
  },
  plugins: [],
};
