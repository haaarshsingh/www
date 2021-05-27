import { styled } from './../../styles/theme.config'

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  left: 0,
  right: 0,
  background: '$dark',
  alignItems: 'center',
  height: 100,
})

export const NavContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '70%',
})

export const TerminalText = styled('p', {
  fontFamily: '$mono',
  fontSize: '$3',
  color: '$main',
})

export const NavLinks = styled('div', {
  display: 'flex',
})

export const NavLink = styled('a', {
  color: '$main',
  fontSize: '$3',
  textDecoration: 'none',
  margin: '0 10px',
  fontFamily: '$main',
})
