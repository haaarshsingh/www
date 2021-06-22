import { styled } from '../../styles/theme.config'

export const BlogContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const BlogContainerBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  marginTop: 100,
})

export const Searchbar = styled('input', {
  background: '$primary ',
  marginTop: 100,
  padding: 30,
  outline: 'none',
  border: 'none',
  color: '$white',
  fontSize: '$3',
  fontFamily: '$primary',
  width: 500,
  maxWidth: '90vw',
  margin: 50,
  borderRadius: 7,
  transition: '0.1s linear',
  '&:focus': {
    transform: 'scale(0.99, 0.99)',
  },
})

export const BlogsBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
})

export const BlogCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '50px 0',
  width: '50vw',
})

export const BlogCardTitle = styled('a', {
  display: 'flex',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$4',
  fontFamily: '$main',
  '@media only screen and (max-width: 768px)': {
    width: '90vw',
  },
})

export const BlogCardDesc = styled('p', {
  fontFamily: '$primary',
  color: '$main',
  margin: '30px 0',
  fontSize: '$2',
  '@media only screen and (max-width: 768px)': {
    width: '80vw',
  },
})

export const BlogInfoBottom = styled('div', {
  display: 'flex',
  fontFamily: '$primary',
  color: '$white',
  '@media only screen and (max-width: 768px)': {
    width: '80vw',
  },
})

export const BlogInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginRight: 30,
  svg: {
    marginRight: 10,
  },
})
