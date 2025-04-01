/** @type {import('tailwindcss').Config} */
import tailwindAnimated from 'tailwindcss-animated';
import tailwindScrollbar from 'tailwind-scrollbar'
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        my_gray: 'var(--my-gray)',
      },
      backgroundImage: {
        my_gradient: 'var(--my-gradient)',
        my_gradient_opp: 'var(--my-gradient-opp)',
        my_gradient_reversed: 'var(--my-gradient-reversed)'
      },
    },
  },
  plugins: [
    tailwindAnimated,
    tailwindScrollbar
  ],
  important: true
}
