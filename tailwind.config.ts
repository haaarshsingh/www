import { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        content: '560px',
      },
      boxShadow: {
        menu: '0 24px 14px #00000020, 0 0 0 1px #000000bb, 0 4px 10px #00000040',
        selector: '',
        button: '0 10px 5px -2.5px #00000020,inset 0 4px 16px #FFFFFF50',
      },
      animation: {
        img: 'img 1s ease-in-out',
        intro: 'intro 0.3s forwards ease-in-out',
        marker: 'marker 4s ease-out infinite',
      },
      keyframes: {
        img: {
          from: { transform: 'scale(2)', filter: 'blur(10px)' },
          to: { transform: 'scale(1)', filter: 'blur(0px)' },
        },
        marker: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '1',
          },
          '35%': {
            transform: 'translate(-50%, -50%) scale(6)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(6)',
            opacity: '0',
          },
        },
        intro: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
            filter: 'blur(5px)',
          },
          '95%': {
            transform: 'translateY(-1px)',
            opacity: '1',
            filter: 'blur(0px)',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
            filter: 'blur(0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
