/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom_font: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
