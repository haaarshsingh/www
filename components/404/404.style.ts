import { styled } from '../../styles/theme.config'

export const ErrorWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ErrorHeader = styled('h1', {
  display: 'flex',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$6',
  margin: '50px 0',
})

export const ErrorMessage = styled('p', {
  color: '$white',
  fontFamily: '$primary',
  fontSize: '$3',
})

export const Link = styled('a', {
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
})
