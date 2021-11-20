import { styled } from '@css//theme.config'

export const ProjectsContainer = styled('div', {
  display: 'flex',
  margin: '100px 100px',
  justifyContent: 'center',
  flexDirection: 'column',
  '@Flip': {
    margin: '100px 10px',
  },
  '@iPhonePlus': {
    alignItems: 'center',
  },
})

export const ProjectsGrid = styled('div', {
  width: '95vw',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 0fr))',
  overflow: 'hidden',
  '@iPhonePlus': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))',
  },
  '@iPad': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))',
  },
})

export const ProjectsHeader = styled('h1', {
  display: 'inline-block',
  background: '$gradient',
  width: 'fit-content',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '150px 0',
  textAlign: 'center',
})

export const ProjectBox = styled('div', {
  display: 'flex',
  userSelect: 'none',
  flexDirection: 'column',
  background: '#232222',
  width: 350,
  height: 300,
  padding: 30,
  color: '$main2',
  justifyContent: 'space-between',
  transition: '0.1s linear',
  borderRadius: 5,
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '@iPad': {
    width: 300,
  },
  '@iPhoneSE': {
    width: 280,
  },
})

export const ProjectHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ProjectLinks = styled('div', {
  display: 'flex',
})

export const ProjectLink = styled('a', {
  marginLeft: 20,
  color: '$white',
  transition: '0.1s linear',
  '&:hover': {
    transform: 'scale(1.1, 1.1)',
  },
})

export const ProjectTopContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ProjectTitle = styled('h3', {
  fontFamily: '$primary',
  fontSize: '$4',
  margin: '10px 0',
  color: '$white',
})

export const ProjectDescription = styled('p', {
  color: '$main2',
  fontFamily: '$primary',
  fontSize: '$2',
})

export const Tags = styled('p', {
  fontFamily: '$mono',
})
