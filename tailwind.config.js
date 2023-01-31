/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        background: '#09090A'
      },
      fontFamily:{
        regular: 'Inter_400Regular',
        medium: 'Inter_500Medium',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    },
  },
  plugins: [],
}
