// on vient recuperer les valeurs par defaut
const defautTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // on vient deconstruire le tableau pour recuperer les font de base Tailwind
        // si poppins est trouver il sera utilise, sinon on prendras les polices de base
        sans: ["Poppins", ...defautTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

