/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height : {
        q: "600px",
        menu : "1500px"

      },
      width : {
        f : "900px"
      },
      backgroundColor : {
        roxinho : "RGB(130, 10, 209)"
      },
      fontFamily : {
        boa : ["Noto Sans JP"],
        boa2 : ["Dosis"]

      },
    },
  },
  plugins: [],
}

