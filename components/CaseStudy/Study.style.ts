import { styled } from '@css/theme.config'

export const StudyInfo = styled('div', {
  marginTop: 200,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const CaseStudy = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Title = styled('p', {
  fontSize: '$4',
  color: '$white',
  margin: '20px 0',
})

export const Description = styled('h1', {
  display: 'inline-block',
  background: '$gradient',
  width: '50vw',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$6',
  textAlign: 'center',
  marginBottom: 70,
  '@Flip': {
    width: '90vw',
    fontSize: '$4',
  },
})

export const Graphic = styled('div', {
  minHeight: 720,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  marginTop: 100,
})
