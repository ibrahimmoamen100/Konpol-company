/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    //...
  ],

  theme: {
    fontFamily: {
      // sans: ["roboto", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      righteous: ["Righteous", "sans-serif"],
      vidaloka: ["Vidaloka", "sans-serif"],
      orbitron: ["Orbitron", "sans-serif"],
      oswald: ["Oswald", 'sans-serif']
    },
    extend: {
      colors: {
        navColor: "rgba(255, 255, 255, 0.5)",
        main: "#00154e",
        secondMain: "#df9b0b",
      },
    },
  },
};
