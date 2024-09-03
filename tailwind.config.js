/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        cofee: '#F8EDE3',
        cofee_dim: '#DFD3C3',
        cofee_ligt: '#D0B8A8',
        cofee_dark: '#8D493A',
      },
    },
  },
  plugins: [],
}

