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
        heightPublicationVh: "77vh",
        heightLoginMobile: "70vh",
        heightRegisterMobile: "65vh",
        heightCards: "370px",
        heightCardProfile: "340px",
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
        custombgSectionTwo: "#b2d7c3",
        customBgComment: "#b2d7c3",
        customBgLoginMobile: "#d1d5dbc4",
        customHoverGreen: "#61B397",
        buttonNavBarGreen: "#adc6b6",
        customHoverNAv: "#e0eee5",
      },
      fontSize: {
        FsTextPublicationTime: "10px",
        FsTextWarningPassword: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
