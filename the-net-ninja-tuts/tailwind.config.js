module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4C6FFF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#E5EAFF',
          '300': '#B2C1FF',
          '400': '#7F98FF',
          '500': '#4C6FFF',
          '600': '#1946FF',
          '700': '#002DE5',
          '800': '#0023B2',
          '900': '#00197F'
        },
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        }, 
      },
      fontFamily: {
        body: ["Nunito"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
