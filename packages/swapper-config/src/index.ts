// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: {
        darkest: '#174998',
        dark: '#3461A8',
        DEFAULT: '#517BBE',
        light: '#769BD5',
        lightest: '#A7C1EA'
      },
      swpGray: {
        DEFAULT: '#38393C'
      }
    },
    gradientColorStops: (theme: (value: string) => object) => ({
      ...theme('colors'),
      primary: {
        darkest: '#174998',
        dark: '#3461A8',
        DEFAULT: '#517BBE',
        light: '#769BD5',
        lightest: '#A7C1EA'
      }
    }),
    fontFamily: {
      sans: ['Graphik', 'Open Sans']
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      gradientColorStops: ['hover', 'active', 'group-hover', 'hover']
    }
  }
}
