/** @type {import('tailwindcss').Config} */
import tailwindAnimated from 'tailwindcss-animated';
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
      backgroundColor: {
        my_gradient: 'var(--my-gradient)'
      },
    },
  },
  plugins: [
    tailwindAnimated
  ],
  important: true
}
