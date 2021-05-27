import React from 'react'

import * as S from './Navbar.style'

interface NavLinks {
  link: string
  title: string
}

const Navbar: React.FC<{ location: string }> = ({ location }) => {
  const NavLinks: NavLinks[] = [
    {
      link: '/#home',
      title: 'Home',
    },
    {
      link: '/#about',
      title: 'About',
    },
    {
      link: '/#projects',
      title: 'Projects',
    },
    {
      link: '/#designs',
      title: 'Designs',
    },
    {
      link: '/#contact',
      title: 'Contact',
    },
    {
      link: '/blog',
      title: 'Blog',
    },
  ]

  return (
    <S.Nav>
      <S.NavContainer>
        <S.TerminalText>~/harshsingh/{location}</S.TerminalText>
        <S.NavLinks>
          {NavLinks.map((link, index) => (
            <S.NavLink key={index} href={link.link}>
              {link.title}
            </S.NavLink>
          ))}
        </S.NavLinks>
      </S.NavContainer>
    </S.Nav>
  )
}

export default Navbar
