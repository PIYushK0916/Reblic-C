/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],         // For Inter-Regular.ttf
        interRoman: ['Inter-Roman', 'sans-serif'],  // For Inter-Roman.ttf
        fontello: ['Fontello', 'sans-serif'],   // For Fontello.ttf
      },
    },
  },
  plugins: [],
}

