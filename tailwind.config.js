/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#f1e9d9', 
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(5,75,28,1) 0%, rgba(59,131,86,1) 100%)',
      },
    },
  },
  plugins: [],
}
