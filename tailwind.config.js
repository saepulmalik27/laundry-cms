/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns : {
        sandwitch : "auto 1fr"
      },
      colors: {
        lightblue: {
            400: '#0099EE',
            300: '#2D9CDB',
            200: '#CAECFF',
            100: '#E7F5FD',
            500: '#3B97CB',
            50 : "#F2F7FB"
        },
        lightgreen: {
            500: '#56E4A0',
        },
        lightred: {
            500: '#F36868',
        },
        stroke: '#535353',
        body: '#E7F5FD',
        neutral: '#838383',
        lightgray: '#C9C9C9',
        secondary : {
          200 : "#58595F",
          50 : "#CCE0EE",
          300 : "#B2C5D4"
        }
    },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
         ".page-title" : {
          fontSize : "42px",
          fontWeight : "700",
          letterSpacing : "3px" 
         }
      })
  }),
  ],
}
