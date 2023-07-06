/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#84a7ae",
        customGrayCard: "#d9d9d9"
      },
    },
  },
  plugins: [],
};
