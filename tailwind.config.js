/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src_v2/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          900: '#0b0b0c',
          800: '#111214',
          700: '#1b1d1f',
          600: '#2a2d30',
          500: '#3b4045'
        },
        desoBlue: '#0ea5e9'
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        blanka: ['Blanka', 'sans-serif']
      }
    },
  },
  plugins: [],
}
