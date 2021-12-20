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
      },
      warning: {
        darkest: '#F97316',
        dark: '#C2410C',
        DEFAULT: '#FFEDD5'
      },
      error: {
        darkest: colors.red['600'],
        dark: colors.red['400'],
        DEFAULT: colors.red['100']
      },
      success: {
        darkest: colors.green['600'],
        dark: colors.green['400'],
        DEFAULT: colors.green['100']
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
