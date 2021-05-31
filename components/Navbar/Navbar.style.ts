import { styled } from './../../styles/theme.config'

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 999,
  top: 0,
  left: 0,
  right: 0,
  background: '$dark',
  alignItems: 'center',
  height: 100,
  width: '100vw',
})

export const NavContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '70%',
  '@media only screen and (max-width: 600px)': {
    width: '85%',
    justifyContent: 'space-around !important',
  },
  '@media only screen and (max-width: 1024px)': {
    width: '100vw',
    justifyContent: 'center',
  },
})

export const TerminalText = styled('p', {
  fontFamily: '$mono',
  fontSize: '$3',
  color: '$main',
  '@media only screen and (max-width: 600px)': {
    fontSize: '$2',
    display: 'flex !important',
  },
  '@media only screen and (max-width: 320px)': {
    fontSize: '$1',
  },
  '@media only screen and (max-width: 1024px)': {
    display: 'none',
  },
})

export const NavLinks = styled('div', {
  display: 'flex',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
})

export const NavLink = styled('a', {
  color: '$main',
  fontSize: '$3',
  textDecoration: 'none',
  margin: '0 10px',
  fontFamily: '$main',
  '&:hover': {
    color: '$white',
  },
})

export const Toggle = styled('button', {
  background: 'none',
  outline: 'none',
  border: 'none',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media only screen and (min-width: 600px)': {
    display: 'none',
  },
})

export const NavMenuContainer = styled('div', {
  zIndex: 999999,
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  background: '#2A2A2A90',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const NavMenu = styled('div', {
  width: 280,
  height: 300,
  background: '$primary',
  zIndex: 9999999,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const NavMenuLinks = styled('a', {
  textDecoration: 'none',
  color: '$white',
  fontSize: '$3',
  fontFamily: '$primary',
  margin: '0 0 10px 30px',
})
