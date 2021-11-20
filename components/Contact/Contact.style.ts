import { styled } from '@css/theme.config'

export const ContactContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100vw',
  marginTop: 100,
  marginBottom: 400,
  '@iPadPro': {
    alignItems: 'center',
  },
})

export const ContactHeader = styled('h1', {
  display: 'inline-block',
  background: '$gradient',
  width: 'fit-content',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '75px 0',
  marginLeft: 150,
  '@iPadPro': {
    marginLeft: 0,
  },
})

export const ContactMain = styled('p', {
  fontFamily: '$primary',
  fontSize: '$5',
  color: '$white',
})

export const ContactDescription = styled('p', {
  fontFamily: '$primary',
  fontSize: '$2',
  color: '$white',
  width: 300,
  margin: '20px 0',
  marginBottom: 50,
  textAlign: 'center',
})

export const EmailForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const InputBar = styled('input', {
  background: '$primary ',
  padding: 30,
  outline: 'none',
  border: 'none',
  color: '$white',
  fontSize: '$3',
  fontFamily: '$primary',
  width: 500,
  margin: '20px 0',
  borderRadius: 5,
  transition: '0.1s linear',
  zIndex: 10,
  maxWidth: '90vw',
  '&:focus': {
    transform: 'scale(0.99, 0.99)',
  },
})

export const Message = styled('textarea', {
  background: '$primary ',
  padding: 30,
  outline: 'none',
  border: 'none',
  color: '$white',
  fontSize: '$3',
  fontFamily: '$primary',
  width: 500,
  margin: '20px 0',
  resize: 'none',
  borderRadius: 5,
  zIndex: 10,
  transition: '0.1s linear',
  maxWidth: '90vw',
  '&:focus': {
    transform: 'scale(0.99, 0.99)',
  },
})

export const Submit = styled('button', {
  width: 'fit-content',
  padding: 20,
  fontSize: '$3',
  marginTop: 60,
  cursor: 'pointer',
  background: 'none',
  border: '2px solid white',
  color: 'white',
  fontFamily: '$primary',
  outline: 'none',
  transition: '0.1s linear',
  borderRadius: 5,
  textDecoration: 'none',
  zIndex: 10,
  '&:hover, &:focus': {
    background: '#ffffff30',
  },
})

export const HandsBox = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '105vw',
  marginTop: 500,
  zIndex: -1,
  '@iPadPro': {
    display: 'none',
  },
})

export const ImgBox = styled('div', {
  position: 'absolute',
  display: 'flex',
  zIndex: -100,
})
