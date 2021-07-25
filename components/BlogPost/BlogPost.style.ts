import { styled, keyframes } from '@css/theme.config'

const TooltipAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-40px)',
  },
})

export const TopScrollbar = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '0%',
  height: 10,
  overflow: 'hidden',
  zIndex: 9999,
})

export const TopScrollbarBG = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  background: '$gradient',
})

export const BlogPostContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const BlogPost = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 100,
})

export const BlogBox = styled('div', {
  display: 'flex',
  width: '70%',
  flexDirection: 'column',
  margin: '50px 0',
  '@media only screen and (max-width: 768px)': {
    width: '90%',
  },
})

export const BlogTitle = styled('h1', {
  display: 'inline-block',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$6',
})

export const BlogInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 20,
})

export const BlogLeftContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const BlogInfoContainer = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: '$white',
  fontFamily: '$primary',
  fontSize: '$2',
  marginRight: 30,
  textDecoration: 'none',
  svg: {
    marginRight: 10,
  },
  '@media only screen and (max-width: 600px)': {
    fontSize: '$1',
    marginRight: 5,
    svg: {
      marginRight: 5,
      width: 20,
    },
  },
})

export const BlogHTML = styled('div', {
  color: '$white',
  margin: '40px 0',
  'h1, h2, h3, h4, h5, h6, h7, p, a, strong': {
    fontFamily: '$primary',
  },
  'h1, pre': {
    margin: '30px 0',
  },
  pre: {
    borderRadius: 12,
    width: '100%',
    '@media only screen and (max-width: 600px)': {
      maxWidth: '90vw',
    },
  },
  code: {},
  p: {
    fontSize: '$2',
    margin: '5px 0',
  },
  img: {
    borderRadius: 10,
    maxWidth: '60vw',
  },
  a: {
    color: '#5CC2E5',
    position: 'relative',
    textDecoration: 'none',
    '&:before': {
      content: '',
      width: 0,
      height: '0.1em',
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: '#5CC2E5',
      transition: '0.3s all',
    },
    '&:hover:before': {
      width: '100%',
      left: 0,
      background: '#5CC2E5',
    },
  },
})

export const ShareButtonsDiv = styled('div', {
  margin: '30px 0',
  display: 'flex',
})

export const ShareHeader = styled('h1', {
  fontFamily: '$primary',
  color: '$white',
})

export const ShareButton = styled('a', {
  color: '$main',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 20,
  transition: '0.1s linear',
  '&:hover': {
    color: '$white',
    transform: 'scale(1.1, 1.1)',
  },
  '.animate': {
    animation: `${TooltipAnimation} 0.5s linear`,
  },
})

export const Tooltip = styled('p', {
  color: '$white',
  fontFamily: '$primary',
  position: 'absolute',
  opacity: 0,
})

export const preStyle = {
  borderRadius: 6,
  padding: 20,
  fontFamily: `JetBrain Mono, monospace`,
}

export const codeProps = {
  style: {
    fontFamily: `"JetBrain Mono", monospace`,
  },
}
