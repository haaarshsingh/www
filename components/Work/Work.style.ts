import { styled } from '../../styles/theme.config'

export const WorkContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: 300,
  '@media only screen and (max-width: 600px)': {
    marginTop: 200,
    alignItems: 'center',
  },
})

export const WorkHeader = styled('h1', {
  display: 'flex',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '0 0 100px 200px',
  '@media only screen and (max-width: 600px)': {
    marginLeft: 15,
  },
})

export const ProjectsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
})

export const ProjectBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  margin: '100px 0',
  '@media only screen and (max-width: 600px)': {
    marginLeft: 50,
  },
})

export const ProjectGraphic = styled('div', {
  backgroundRepeat: 'no-repeat',
  marginLeft: 150,
  '@media only screen and (max-width: 1024px)': {
    marginLeft: 50,
  },
  '@media only screen and (max-width: 768px)': {
    display: 'none',
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ProjectTitle = styled('h1', {
  color: '$white',
  fontSize: '$5',
})

export const ProjectDescription = styled('p', {
  fontFamily: '$primary',
  color: '$main2',
  fontSize: '$3',
  margin: '40px 0',
  width: 340,
  '@media only screen and (max-width: 340px)': {
    width: '80%',
  },
})

export const ProjectTech = styled('p', {
  fontFamily: '$mono',
  color: '$main2',
  width: 340,
  '@media only screen and (max-width: 500px)': {
    fontSize: '$1',
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: 50,
})

export const ViewProjectButton = styled('a', {
  width: 'fit-content',
  padding: 20,
  fontSize: '$3',
  marginTop: 60,
  cursor: 'pointer',
  zIndex: '100',
  background: 'none',
  border: '2px solid white',
  color: 'white',
  fontFamily: '$primary',
  outline: 'none',
  transition: '0.1s linear',
  borderRadius: 5,
  textDecoration: 'none',
  '&:hover, &:focus': {
    background: '#ffffff30',
  },
})

export const GitHubButton = styled('a', {
  display: 'flex',
  textDecoration: 'none',
  color: '$white',
  marginLeft: 30,
  transition: '0.1s linear',
  '&:hover': {
    transform: 'scale(1.1, 1.1)',
  },
})
