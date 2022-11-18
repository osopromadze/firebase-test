const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        social: {
          github: '#171515',
          gmail: '#BB001B',
          twitter: '#1DA1F2',
        },
      },
      borderRadius: {
        1: '1px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      height: {
        18: '18px',
        50: '50px',
      },
      lineHeight: {
        48: '48px',
      },
      padding: {
        15: '15px',
      },
      width: {
        18: '18px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
