module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      screens: {
        xxl: '1920px',
      },
      colors: {
        'brand-blue': '#1992d4',
        'dark': '#343434',
        'mid': '#676767',
        'palepink': '#FFEFFF',
        'xlight': '#ffe6d2',
        pkgray: {
          100: 'hsl(300, 40%, 98%)',
          200: 'hsl(300, 38%, 95%)',
          300: 'hsl(300, 32%, 91%)',
          400: 'hsl(300, 25%, 84%)',
          500: 'hsl(300, 20%, 69%)',
          600: 'hsl(300, 15%, 52%)',
          700: 'hsl(300, 17%, 35%)',
          800: 'hsl(300, 23%, 23%)',
          900: 'hsl(300, 26%, 14%)',
        },
      },
      fontSize: {
        '8xl': '5.5rem',
        '10xl': '8rem',
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
        '36': '9rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '160': '40rem',
      },
      minWidth: {
        '350': '350px',
        '375': '375px',
        '450': '450px',
        '500': '500px',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    purge: {
      layers: ['utilities'],
      content: [
        // Paths to your templates...
      ],
    },
  },
}
