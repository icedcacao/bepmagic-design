/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#e7cf26",
      "yellow-test": "#edd952",
      "white-cream": "#fffbe6",
      orange: "#F96539",
      "test-green": "#81a76c",
      white: "#ffffff",
      black: "#000000",
      "light-green": "#d4e7c5",
      "dark-green": "#81a76c",
    },
    extend: {
      fontFamily: {
        dela: "DelaGothic",
        arimo: "Arimo",
      },
    },
  },
  plugins: [],
};
