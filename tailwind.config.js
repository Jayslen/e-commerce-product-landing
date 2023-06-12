/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: 'Kumbh Sans, sans-serif'
      },
      screens: {
        sm: '425px'
      },
      keyframes: {
        move: {
          ' 0%': { transform: 'translateX(-500px)' },
          '70%': { transform: 'translateX(-0px)' }
        }
      }
    }
  },
  plugins: []
}
