const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poiret One', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'maria-pink': '#dba4a2',
        'maria-merlot': '#c0707d',
        'maria-azucar': '#f3d8d6',
      },
    },
  },
}
