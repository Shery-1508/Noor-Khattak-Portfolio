/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#d9e2f4',
          200: '#b7c9e8',
          300: '#8aa7d8',
          400: '#6285c8',
          500: '#4467b0',
          600: '#375291',
          700: '#2d4175',
          800: '#1a365d',
          900: '#152a4a',
          950: '#0e1c32',
        },
        secondary: {
          50: '#f0f8ff',
          100: '#e0efff',
          200: '#bfdfff',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2b6cb0',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#4299e1',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 