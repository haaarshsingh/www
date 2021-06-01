import { styled } from '../../styles/theme.config'

export const ProjectsContainer = styled('div', {
  display: 'flex',
  margin: '100px 100px',
  justifyContent: 'center',
  flexDirection: 'column',
  '@media only screen and (max-width: 600px)': {
    margin: '100px 10px',
  },
  '@media only screen and (max-width: 414px)': {
    alignItems: 'center',
  },
})

export const ProjectsGrid = styled('div', {
  width: '95vw',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 0fr))',
  overflow: 'hidden',
  '@media only screen and (max-width: 414px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))',
  },
  '@media only screen and (max-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))',
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
  fontFamily: '$mono',
  justifyContent: 'space-between',
  transition: '0.1s linear',
  borderRadius: 5,
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '@media only screen and (max-width: 768px)': {
    width: 300,
  },
  '@media only screen and (max-width: 320px)': {
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
