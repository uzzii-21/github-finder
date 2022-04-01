const daisyui = require('daisyui');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primary: '#1D1D1D',
        secondary: '#333333',
        lightGray: '#828282',
        error: '#EB5757',
        success: '#27AE60'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [daisyui]
};
