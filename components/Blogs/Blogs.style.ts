import { styled } from '@css/theme.config'

export const BlogContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const BlogHeader = styled('h1', {
  fontSize: 60,
  color: '$white',
  margin: '40px 0 20px 0',
})

export const BlogDescription = styled('p', {
  fontSize: 20,
  color: '$white',
  maxWidth: '70vw',
  textAlign: 'center',
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

export const BlogBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  marginTop: 100,
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
  '@iPhone': {
    width: '90vw',
  },
})

export const BlogCardTitle = styled('a', {
  display: 'inline-block',
  background: '$gradient',
  width: 'fit-content',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$4',
  fontFamily: '$main',
  '@iPad': {
    width: '90vw',
  },
})

export const BlogCardDesc = styled('p', {
  fontFamily: '$primary',
  color: '$main',
  margin: '30px 0',
  fontSize: '$2',
  '@iPad': {
    width: '80vw',
  },
})

export const BlogInfoBottom = styled('div', {
  display: 'flex',
  fontFamily: '$primary',
  color: '$white',
  '@iPad': {
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
  '@iPhone': {
    marginRight: 10,
  },
})
