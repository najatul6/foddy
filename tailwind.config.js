/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': "#0B0A0A",
        'deep-orange': "#DF3F01",
        'light-black': "#111111",
      },
    },
  },
  plugins: [],
}

