import { styled } from '@css/theme.config'

export const WorkContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: 300,
  '@Flip': {
    marginTop: 200,
    alignItems: 'center',
  },
})

export const WorkHeader = styled('h1', {
  display: 'inline-block',
  background: '$gradient',
  width: 'fit-content',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '0 0 100px 200px',
  '@Flip': {
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
  '@Flip': {
    marginLeft: 50,
  },
})

export const ProjectGraphic = styled('div', {
  backgroundRepeat: 'no-repeat',
  marginLeft: 150,
  '@iPadPro': {
    marginLeft: 50,
  },
  '@iPad': {
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
  userSelect: 'none',
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
