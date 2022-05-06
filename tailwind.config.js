module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'Mukta'],
      },
      colors: {
        gray: {
          0: '#F6F6F6',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
        gradient: {
          100: '#FF70C6',
          200: '#62A1FF',
        },
        body: {
          light: '#F6F6F6',
        },
      },
      width: {
        40: '40vw',
        60: '60vw',
        95: '95vw',
      },
      maxWidth: {
        40: '40vw',
        60: '60vw',
        95: '95vw',
      },
      minWidth: {
        40: '40vw',
        60: '60vw',
        95: '95vw',
        500: '500px',
        iphone: '320px',
      },
      height: { 500: '500px' },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1700px',
      },
    },
  },
}
