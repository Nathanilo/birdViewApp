/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        green: "#0F973D",
        orange: "#F58A07",
      },
    },
  },
  plugins: [],
};
