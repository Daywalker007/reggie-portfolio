/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing:{
      '0':'0px',
      '5':'5px',
      '10':'10px',
      '15':'15px',
      '20':'20px',
      '25':'25px',
      '30':'30px',
      '35':'35px',
      '40':'40px',
      '45':'45px',
      '50':'50px',
      '55':'55px',
      '60':'60px',
      '65':'65px',
      '70':'70px',
      '75':'75px',
      '80':'80px',
      '85':'85px',
      '90':'90px',
      '95':'95px',
      '100':'100px',
    },
    extend: {
      backgroundImage:{
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow:{
        static:'2px 2px 5px #93DEFF',
        hover:'5px 5px 5px #F7F7F7',
        dark: '0px 4px 4px rgb(0,0,0,0.25)',
        // dark:'0px 4px 4px #93DEFF',
      },
      colors:{
        darkBG: '#2a2b2e',
        darkGray: '#28282A',
        purpleTheme: {
          100: "#BC6FF1",
          200: "#892CDC",
          300: "#52057B",
          400: "#000"
        },
        iceTheme: {
          100: "#F7F7F7",
          200: "#93DEFF",
          300: "#606470",
          400: "#323643"
        }
      }
    },
  },
  plugins: [],
}

