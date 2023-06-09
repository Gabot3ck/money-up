/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
            400: '#22c55e',
            500: '#16a34a',
            600: '#15803d',
        },
        'dark': {
          500:'#111827',
        },
        'light': {
          500: '#f5f5f5',
        },
        'alert': {
          400:'#dc2626',
          500: '#b91c1c',
        },
      }
    },
  },
  plugins: [],
}

