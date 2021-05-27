import { styled } from '../../styles/theme.config'

export const ProjectsContainer = styled('div', {
  display: 'flex',
  margin: '100px 100px',
  justifyContent: 'center',
  flexDirection: 'column',
  '@media only screen and (max-width: 600px)': {
    margin: '100px 10px',
  },
})

export const ProjectsGrid = styled('div', {
  width: '95vw',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 0fr))',
  overflow: 'hidden',
  '@media only screen and (max-width: 400px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const ProjectsHeader = styled('h1', {
  display: 'flex',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '150px 0',
})

export const ProjectBox = styled('div', {
  display: 'flex',
  userSelect: 'none',
  flexDirection: 'column',
  background: '$main',
  width: 350,
  height: 300,
  padding: 30,
  color: '$dark',
  fontFamily: '$mono',
  justifyContent: 'space-between',
  transition: '0.1s linear',
  '&:hover': {
    background: '$main2',
    transform: 'translateY(-5px)',
  },
  '@media only screen and (max-width: 400px)': {
    width: 300,
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
  color: '$dark',
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
  color: '$dark',
  fontFamily: '$primary',
  fontSize: '$4',
  margin: '10px 0',
})

export const ProjectDescription = styled('p', {
  color: '$dark',
  fontFamily: '$primary',
  fontSize: '$2',
})
