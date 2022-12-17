/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': '#9d9d9d',
        'secondary-light': '#f58024',
        'purple-light': '#aa88f0',
        'orange-light': '#ed8d6c',
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
        lilita: ['Lilita One', 'cursive'],
      },
    },
  },
  plugins: [],
};
