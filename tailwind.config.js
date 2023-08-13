/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimaryLight: '#000000',
        textSecondaryLight: '#262626',
        textContrastLight: '#FFFFFF',

        textPrimaryDark: '#FFFFFF',
        textSecondaryDark: '#cfcfcf',
        textContrastDark: '#000000',

        backgroundPrimaryLight: '#D9D9D9',
        backgroundSecondaryLight: '#e8e8e8',
        backgroundContrastLight: '#000000',

        backgroundPrimaryDark: '#383838',
        backgroundSecondaryDark: '#525252',
        backgroundContrastDark: '#D9D9D9',

        accentPrimaryLight: '#2a3b63',
        accentSecondaryLight: '#344a7d',
        accentPrimaryDark: '#634f1c',
        accentSecondaryDark: '#7a6122'
      },
      fontFamily: {
        primary: ['Inter']
      },
      animation: {
        'fadeInOut': 'carousel 1.5s linear',
      },
      keyframes: {
        carousel: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.35' } ,
          '100%': { opacity: '0.5' } ,
        }
      },
      spacing: {
        '4/5vw': '82vw',
        'hlg': '32rem',
      },
      borderRadius: {
        'br50': '50%',
      }
    },
  },
  plugins: [],
}

