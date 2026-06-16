/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm woodworking palette built around the "Coffee" logo
        cream: '#f7f1e8',
        espresso: '#2a2018',
        primary: {
          DEFAULT: '#6f4e37', // coffee / walnut
          dark: '#4a3528',
          light: '#a07d5a',
        },
      },
      fontFamily: {
        // Fraunces = warm artisan serif for display; Inter = clean body
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
