import { styled } from '../../styles/theme.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '120vh',
  width: '105vw',
  '@media only screen and (max-width: 1024px)': {
    height: '90vh',
  },
  '@media only screen and (max-width: 600px)': {
    marginLeft: 30,
    height: '120vh',
  },
})

export const HelloContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const ContainerText = styled('p', {
  color: '$main',
  fontSize: '$4',
  fontFamily: '$primary',
  maxWidth: '90vw',
  variants: {
    mono: {
      true: {
        fontFamily: '$mono',
      },
    },
  },
})

export const Name = styled('h1', {
  display: 'flex',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: 60,
  margin: '30px 0',
  '@media only screen and (max-width: 600px)': {
    fontSize: 40,
  },
})

export const PaintBucketContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  marginRight: 400,
  marginBottom: 100,
  zIndex: '-100',
})

export const SVGContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  zIndex: '-100',
  margin: '100px 0 0 500px',
  height: '200vh',
  '@media only screen and (max-width: 768px)': {
    margin: '100px 0 0 250px',
  },
  '@media only screen and (max-width: 767px)': {
    display: 'none',
  },
})

export const SocialsContainer = styled('div', {
  display: 'flex',
  marginTop: 30,
})

export const SocialLink = styled('a', {
  display: 'flex',
  color: '$main',
  marginRight: 20,
  transition: '0.1s linear',
  '&:hover': {
    color: '$white',
    transform: 'scale(1.15, 1.15)',
  },
})

export const ContactButton = styled('button', {
  width: 'fit-content',
  padding: 20,
  fontSize: '$3',
  marginTop: 50,
  cursor: 'pointer',
  zIndex: '100',
  border: 'none',
  backgroundColor: '$main',
  color: '$dark',
  fontFamily: '$primary',
  outline: 'none',
  transition: '0.1s linear',
  '&:hover': {
    background: '$main2',
  },
})
