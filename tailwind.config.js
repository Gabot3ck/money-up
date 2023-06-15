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
            300: '#bbf7d0',
            400: '#22c55e',
            500: '#16a34a',
            600: '#15803d',
        },
        'dark': {
          500:'#111827',
        },
        'light': {
          500: '#f5f5f5',
          600: '#6b7280',
        },
        'alert': {
          500: '#ef4444',
        },
      }
    },
  },
  plugins: [],
}

