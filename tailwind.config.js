/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, #0451fa, #04cae9)",
      },
      colors: {
        primary: "#131313",
        secondary: "#1f1f1f",
        czys: "linear-gradient(to right, #0451fa, #04cae9)",
      },
    },
  },
  plugins: [],
};
