import { createStitches } from '@stitches/react'

export const { css, styled, globalCss, getCssText, keyframes } = createStitches(
  {
    theme: {
      colors: {
        grey0: '#F6F6F6',
        grey100: '#fafafa',
        grey200: '#eaeaea',
        grey300: '#999999',
        grey400: '#888888',
        grey500: '#666666',
        grey600: '#969696',
        grey700: '#2e2e2e',
        grey800: '#222222',
        grey900: '#1C1C1C',
        gradient100: '#FF70C6',
        gradient200: '#62A1FF',
      },
      fontSizes: {
        xs: '16px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
      },
      fonts: {
        sans: 'Inter, sans-serif',
        mono: 'Fira Code, monospace',
      },
    },
    media: {
      '2xl': '(min-width: 1700px)',
      xl: '(min-width: 1280px)',
      lg: '(min-width: 1024px)',
      md: '(min-width: 768px)',
      sm: '(min-width: 640px)',
    },
  }
)
