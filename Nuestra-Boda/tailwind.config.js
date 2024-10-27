/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
        cursive: ["Cedarville Cursive", "cursive"],
        cursiveDancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
