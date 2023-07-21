export const purge = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = false;
export const theme = {
  extend: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      mobile: { max: "639px" },
    },
    spacing: {
      356: "68rem",
      "height-Login": "30rem",
      widthFormRegister: "42rem",
      heightPublicationVh: "89vh",
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
      customBgComment: "#b2d7c3"
    },
    fontSize: {
      FsTextPublicationTime: "10px",
      FsTextWarningPassword: "10px",
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
