/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // or 'selector' if you're using newer Tailwind versions
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
