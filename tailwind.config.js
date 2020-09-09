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
          100: '#fcf8fc',
          200: '#f7edf7',
          300: '#efe1ef',
          400: '#e0cce0',
          500: '#c0a0c0',
          600: '#977297',
          700: '#684a68',
          800: '#482d48',
          900: '#2d1a2d',
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
