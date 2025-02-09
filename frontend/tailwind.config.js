export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5665be",
        success: "#257d25",
        warning: "#f0ad4e",
        danger: "#ce3a36",
        neutral: {
          100: "#FFFFFF",
          200: "#F1F1F1",
          300: "#E3E3E3",
          400: "#D5D5D5",
          500: "#C7C7C7",
          600: "#B9B9B9",
          700: "#9E9E9E",
        },
        dark: "#444444",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
