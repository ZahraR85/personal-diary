/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'custom-gradient': 'radial-gradient(circle, rgba(252,176,242,1) 0%, rgba(207,6,246,1) 100%)',

      },
    },
  },
  plugins: [],
}

