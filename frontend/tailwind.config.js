module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: { max: "639px" },
      },
      spacing: {
        356: "68rem",
        "height-Login": "30rem",
        widthFormRegister: "42rem",
      },
      colors: {
        customBlue: "#84a7ae",
        customGrayCard: "#d9d9d9",
        customBgLogin: "#f9f9f9",
        customBgRegister: "#e0e0e0",
        customBgNavBar: "#78bcd7",
        customBtnNavBar: "#b2d7c3",
        customBtnNavBar1: "#bbdcca",
        custombtnNavBarName: "#896fb3",
        customBgSectionTwo: "#b2d7c3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
