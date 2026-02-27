import defaultTheme from "tailwindcss/defaultTheme";

const spacing = {
  "dec-xxs": "0.25rem",
  "dec-xs": "0.5rem",
  "dec-sm": "0.75rem",
  "dec-base": "1rem",
  "dec-md": "1.25rem",
  "dec-lg": "1.5rem",
  "dec-xl": "2rem",
  "dec-xxl": "3rem",
  "dec-3xl": "4rem",
};

const fontSize = {
  "dec-2xs": "0.625rem",
  "dec-xs": "0.75rem",
  "dec-sm": "0.875rem",
  "dec-base": "1rem",
  "dec-h4": "1.125rem",
  "dec-h3.5": "1.25rem",
  "dec-h3": "1.375rem",
  "dec-h2.5": "1.5rem",
  "dec-h2": "1.625rem",
  "dec-h1": "2rem",
  "dec-t2": "2.25rem",
  "dec-t1.5": "2.5rem",
  "dec-t1": "3.125rem",
};

const colors = {
  dec: {
    theme: {
      DEFAULT: "#000000",
      white: "#ffffff",
      middleBlue: "#0e2a99",
      inactive: "#909dd1",
    },
    background: {
      DEFAULT: "#fafafa",
    },
    border: {
      DEFAULT: "#000d40",
    },
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize,
      spacing,
      borderColor: {
        DEFAULT: "#E4E4E4",
        smd: {
          DEFAULT: "#E4E4E4",
        },
      },
    },
  },
  plugins: [],
};
