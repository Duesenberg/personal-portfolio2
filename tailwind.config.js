/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimaryLight: '#000000',
        textSecondaryLight: '#414141',
        textContrastLight: '#FFFFFF',

        textPrimaryDark: '#FFFFFF',
        textSecondaryDark: '#cfcfcf',
        textContrastDark: '#000000',

        backgroundPrimaryLight: '#D9D9D9',
        backgroundSecondaryLight: '',
        backgroundContrastLight: '#000000',

        backgroundPrimaryDark: '#383838',
        backgroundSecondaryDark: '',
        backgroundContrastDark: '',

        accentPrimaryLight: '#2a3b63',
        accentSecondaryLight: '#344a7d',
        accentPrimaryDark: '#634f1c',
        accentSecondaryDark: '#7a6122'
      },
      fontFamily: {
        primary: ['Inter']
      }
    },
  },
  plugins: [],
}

