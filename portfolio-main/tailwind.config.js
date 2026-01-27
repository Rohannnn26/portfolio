/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        icewhite: "#ebebeb",
        grey: "#5d5d5d",
        darkblue: "#18181b",
        blackblue: "#18181b",
        turquoise: "#60a5fa",
        lightTur: "#93c5fd",
        tastycolor: "#3b82f6",
        silentmooncolor: "#dbeafe",
        instorcolor: "#2563eb",
      },
      stroke: {
        turquoise: "#60a5fa",
        lightTur: "#93c5fd",
      },
    },
  },
  plugins: [],
};
