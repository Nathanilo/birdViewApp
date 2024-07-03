/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F6FE",
          100: "#0D6EFD",
          200: "#D2E4FE",
        },
        green: {
          50: "#E7F6EC",
          100: "#0F973D",
        },
        orange: {
          50: "#FEF4E6",
          100: "#F58A07",
        },
      },
    },
  },
  plugins: [],
};
