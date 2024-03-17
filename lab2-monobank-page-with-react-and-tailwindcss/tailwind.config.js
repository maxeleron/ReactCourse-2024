/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mono-purple': '#8a53b6',
        'mono-cyan': '#cea2d0',
        'mono-cardheader': '#f3f4f6',
        'mono-jar-label-brown': '#8e5b5b',
        'mono-gray': '#808080',
        'mono-light-gray': '#e6e6e6',
        'mono-incorrect-red': '#b30953',
        'mono-pay-btn-hover': '#3c4043',
        'mono-pay-btn-active': '#4b4f52'
      }
    },
  },
  plugins: [],
}

