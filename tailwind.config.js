/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.vue"],
  darkMode: "false",
  theme: {
    extend: {
      colors: {
        blue: "#0D0628",
        "light-blue": "#A5C8FF",
        cream: "#F3EBE1",
        green: "#433C2A",
        "broken-white": "#FBFBFB",
      },
    },
  },
  plugins: [],
};
