/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#fb923c",
        "main-brand": "#F68C1F",
        "dark-accent": "#D94045",
        "ligh-accent": "#B3A8AB",
        "dark-shade": "#1F2B3A",
        "light-shade": "#F8EDD9",
        white1: "#F9F9FA",
        black1: "#212121",
      },
      fontFamily: {
        light: ["DM Sans", "sans-serif"],
        ligh2: ["droid-serif", "serif"],
        arimo: ["Arimo" , "sans-serif"]
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
