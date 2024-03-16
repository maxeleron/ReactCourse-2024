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
        'mono-jar-label-brown': '#8e5b5b'
      }
    },
  },
  plugins: [],
}

