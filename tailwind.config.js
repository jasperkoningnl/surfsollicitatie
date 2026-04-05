/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surf: {
          orange: "#E67300",
          black: "#000000",
          blue: "#0077C0",
          green: "#008942",
          red: "#DF3226",
          purple: "#772583",
          yellow: "#FEDB00",
          gray: "#CCCCCC",
          bg: "#F7F7F5",
        },
      },
      fontFamily: {
        heading: ['"Nunito"', "system-ui", "sans-serif"],
        body: ['"Source Sans 3"', '"Source Sans Pro"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
