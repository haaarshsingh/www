import { styled } from './../../styles/theme.config'

export const FooterBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 999,
  '@media only screen and (min-width: 1024px)': {
    margin: 100,
  },
  '@media only screen and (max-width: 1024px)': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const FooterInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '@media only screen and (max-width: 1024px)': {
    margin: '10px 0',
  },
})

export const MainText = styled('p', {
  display: 'flex',
  alignItems: 'center',
  color: '$main',
  fontSize: '$4',
  fontFamily: '$primary',
  marginRight: 20,
  svg: {
    margin: '0 10px',
  },
  '@media only screen and (max-width: 1024px)': {
    fontSize: '$2',
  },
})

export const FooterLink = styled('a', {
  textDecoration: 'none',
  color: '$main',
  transition: '0.1s linear',
  margin: '0 10px',
  '&:hover': {
    color: '$white',
    transform: 'scale(1.1, 1.1)',
  },
})

export const FooterTextLink = styled('a', {
  textDecoration: 'none',
  color: '$main',
  margin: '0 5px',
  '&:hover': {
    color: '$white',
  },
})
