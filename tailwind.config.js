/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bgDarkBlue: '#040D12',
        headerDarkCyan: '#003C43',
        cardDarkCyan: '#00636E',
        seconCardDarkCyan: '#00606B',
        buttonsLightGreen: '#40A578',
        DarkBlue: '#153448'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
