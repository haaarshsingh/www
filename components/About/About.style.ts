import { styled } from '../../styles/theme.config'

export const AboutContainer = styled('div', {
  display: 'flex',
  margin: '100px 100px',
  justifyContent: 'center',
  alignItems: 'center',
  '@media only screen and (max-width: 1024px)': {
    margin: '100px 0',
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 100px',
  width: 600,
  marginRight: 500,
  maxWidth: '100vw',
  '@media only screen and (max-width: 1024px)': {
    margin: '0 30px',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const AboutHeader = styled('h1', {
  display: 'flex',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '50px 0',
})

export const AboutDescription = styled('p', {
  fontFamily: '$primary',
  color: '$white',
  fontSize: '$3',
  marginBottom: 30,
  '@media only screen and (max-width: 1024px)': {
    width: '100%',
    fontSize: '$2',
  },
})

export const SkillsContainer = styled('div', {
  display: 'grid',
  gap: '1.5rem',
  width: 400,
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 0fr))',
  '@media only screen and (max-width: 1024px)': {
    width: '100%',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 0fr))',
  },
})

export const SkillBox = styled('div', {
  fontFamily: '$primary',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$3',
  color: '$white',
  width: 140,
  '@media only screen and (max-width: 1024px)': {
    fontSize: '$2',
  },
})

export const ImgBox = styled('div', {
  display: 'flex',
  position: 'absolute',
  width: 300,
  '@media only screen and (max-width: 1024px)': {
    display: 'none',
  },
})
