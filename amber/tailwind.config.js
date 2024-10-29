/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
  screens: {
    xs: '475px',      // Extra small screens
    sm: '680px',      // Small screens
    md: '780px',      // Medium screens
    lg: '1024px',     // Large screens
    xl: '1280px',     // Extra-large screens
    '2xl': '1536px',  // 2XL screens
    '3xl': '1920px'   // 3XL screens
  },
}

