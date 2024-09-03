/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '300px': '300px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
      },
    },
  },
  plugins: [],
}