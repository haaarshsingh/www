import { styled } from '../../styles/theme.config'

export const DesignsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const DesignsHeader = styled('h1', {
  display: 'flex',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '150px 100px',
})

export const DesignsBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  margin: 0,
})

export const DesignContainer = styled('div', {
  display: 'flex',
  width: '100vw',
  justifyContent: 'center',
})

export const FirstDesignContainer = styled('a', {
  width: 550,
  height: 630,
  transition: '0.1s linear',
  '&:hover': {
    transform: 'scale(0.99, 0.99)',
  },
})

export const SecondDesignContainer = styled('a', {
  marginLeft: 50,
  marginTop: 100,
  width: 550,
  height: 630,
  transition: '0.1s linear',
  '&:hover': {
    transform: 'scale(0.99, 0.99)',
  },
})

export const DribbbleContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 100,
})

export const DesignsGrid = styled('div', {
  width: 1150,
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 0fr))',
  overflow: 'hidden',
  placeItems: 'center',
  '@media only screen and (max-width: 400px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const DribbbleBox = styled('div', {
  width: 350,
  height: 300,
  transition: '0.1s linear',
  backgroundAttachment: 'fixed',
  backgroundPosition: '600px',
  backgroundSize: 'contain',
  zIndex: 10,
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '@media only screen and (max-width: 320px)': {
    width: 300,
  },
})
