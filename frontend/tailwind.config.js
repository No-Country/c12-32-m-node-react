module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: "#84a7ae",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
