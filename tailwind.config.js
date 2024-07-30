/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2': 'repeat(2, minmax(350px, 1fr))',
      },
      gridTemplateRows: {
        '2': 'repeat(2, minmax(350px, 1fr))',
      }
    },
  },
  plugins: [],
};
