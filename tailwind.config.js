/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      's': '500px',
      'sm': '700px',
      'md': '800px',
      'lg': '900px',
      'xl': '1000px',
      '2xl': '1300px',
     },
    fontFamily: {
      'roboto': ['Roboto-Regular'],
      'roboto-l': ['Roboto-Light'],
      'roboto-b': ['Roboto-Bold'],
      'oswald-l': ['Oswald-Light']
    },
    colors: {
      'primary': '#ffe7cd',
      'secondary': '#CDE5FF',
      'white': '#fefefe',
      'grey-0': '#f5f5f5',
      'grey-1': '#eeeeee',
      'grey-2': '#a6a6a6',
      'grey-3': '#8A8A8A',
      'grey-4': '#6D6D6D',
      'grey-5': '#333333',
      'grey-6': '#2b2b2b',
      'black': '#222222',
      'trans': 'rgba(0,0,0,0)',
    },
    backgroundImage: {
      'home-bg': "url('/src/assets/images/home/beauty.png')",
    }
  },
  plugins: [],
}

