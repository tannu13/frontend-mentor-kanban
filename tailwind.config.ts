import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-purple": "#635FC7",
        "main-purple-hover": "#A8A4FF",
        black: "#000112",
        "very-dark-grey-dark-bg": "#20212C",
        "dark-grey": "#2B2C37",
        "lines-dark": "#3E3F4E",
        "medium-grey": "#828FA3",
        "lines-light": "#E4EBFA",
        "light-grey-light-bg": "#F4F7FD",
        red: "#EA5555",
        "red-hover": "#FF9898",
      },
      fontFamily: {
        sans: ["Plus Jakarta San", "sans-serif"],
      },
      fontSize: {
        "h-xl": [
          "24px",
          {
            lineHeight: "30px",
            fontWeight: "700",
          },
        ],
        "h-lg": [
          "18px",
          {
            lineHeight: "23px",
            fontWeight: "700",
          },
        ],
        "h-md": [
          "15px",
          {
            lineHeight: "19px",
            fontWeight: "700",
          },
        ],
        "h-sm": [
          "12px",
          {
            lineHeight: "15px",
            letterSpacing: "2.4px",
            fontWeight: "700",
          },
        ],
        "b-lg": [
          "13px",
          {
            lineHeight: "23px",
            fontWeight: "500",
          },
        ],
        "b-md": [
          "12px",
          {
            lineHeight: "15px",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
