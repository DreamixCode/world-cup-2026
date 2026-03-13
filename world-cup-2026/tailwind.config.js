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
    primary: {
      DEFAULT: "#000000",
      white: "#ffffff",
      darkBlue: "#000d40",
      middleBlue: "#0e2a99",
      light: "#fafafa",
      lightGrey: "#fafafa",
      inactive: "#909dd1",
    },
    background: {
      DEFAULT: "#fafafa",
    },
    border: {
      DEFAULT: "#000d40",
    },

    groupA: { DEFAULT: "#68c076", text: "#000000" },
    groupB: { DEFAULT: "#ee1c24", text: "#000000" },
    groupC: { DEFAULT: "#e8ea7c", text: "#000000" },
    groupD: { DEFAULT: "#1768b4", text: "#000000" },
    groupE: { DEFAULT: "#f58021", text: "#000000" },
    groupF: { DEFAULT: "#006958", text: "#000000" },
    groupG: { DEFAULT: "#b0a7d1", text: "#000000" },
    groupH: { DEFAULT: "#56bcb6", text: "#000000" },
    groupI: { DEFAULT: "#4d3b98", text: "#000000" },
    groupJ: { DEFAULT: "#f8aa9b", text: "#000000" },
    groupK: { DEFAULT: "#ef3875", text: "#000000" },
    groupL: { DEFAULT: "#7f011d", text: "#000000" },
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "!./src/const.js"],
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
