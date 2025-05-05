/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03B0FD",
        secondary: "#0f7ba4",
        dark: "#121920",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(120px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-120px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideInRight: 'slideInRight 0.5s ease-in forwards',
        slideInLeft: 'slideInLeft 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
}
