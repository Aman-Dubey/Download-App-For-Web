/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors : {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsla(210, 10%, 33%, 1)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      screens : {
        nl: '570px',
      }
    },
    fontFamily : {
      sans : ['Bai Jamjuree, sans-serif']
    },
  },
  plugins: [],
}

