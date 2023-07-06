module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_7f": "#0000007f", "900_cc": "#000000cc" },
        blue: { 500: "#18a0fb" },
        white: { A700: "#ffffff" },
        gray: { 100: "#f5f5f5", 300: "#e5e5e5" },
      },
      fontFamily: { montserrat: "Montserrat", comfortaa: "Comfortaa" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
