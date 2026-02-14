/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'iris-bg': '#E8E8E8',
        'iris-text': '#121212',
        'iris-gold': '#A68B5B',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
