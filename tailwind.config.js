/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#e3d368",
      "white-cream": "#fffbe6",
      orange: "#ff7850",
      white: "#ffffff",
      black: "#000000",
      "light-green": "#d4e7c5",
      "dark-green": "#99bc85",
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
