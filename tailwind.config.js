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

      keyframes: {
        "bounce-horizontal": {
          "0%, 100%": {
            transform: "translateX(0%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },

      animation: {
        "bounce-horizontal": "bounce-horizontal 1s infinite",
      },
    },
  },
  plugins: [],
};
