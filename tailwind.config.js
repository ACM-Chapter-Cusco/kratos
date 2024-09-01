/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Opensans: ["Open Sans", "sans-serif"],
        Play: ["Play", "sans-serif"],
      },
      colors: {
        "dark-2": "#0F1317",
        "dark-1": "#000307",
        "azul-git": "#0A0E12",
        "white-azul": "#A5B6CF",
        cyan: "#00FFF6",
        rojo: "#FA114F",
        verde: "#A6FF00",
        blue: "#0A84FF",
        gris2: "#646464",
      },
    },
    rotate: {
      '50': "-45deg",
      '45': "45deg"
    },
  },
  plugins: [],
};
