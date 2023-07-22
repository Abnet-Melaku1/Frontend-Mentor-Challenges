/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      pink: "hsl(322, 100%, 66%)",
      lightPink: "hsl(321, 100%, 78%)",
      lightRed: "hsl(0, 100%, 66%)",

      veryDarkCyan: "hsl(192, 100%, 9%)",
      veryPaleBlue: "hsl(207, 100%, 98%)",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
