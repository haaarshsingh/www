import { styled } from '../../styles/theme.config'

export const ContactContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100vw',
  marginTop: 100,
  '@media only screen and (max-width: 1024px)': {
    alignItems: 'center',
  },
})

export const ContactHeader = styled('h1', {
  display: 'flex',
  background: '$gradient',
  width: 'fit-content',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '75px 0',
  marginLeft: 150,
  '@media only screen and (max-width: 1024px)': {
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
  borderRadius: 7,
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
  borderRadius: 7,
  zIndex: 10,
  transition: '0.1s linear',
  maxWidth: '90vw',
  '&:focus': {
    transform: 'scale(0.99, 0.99)',
  },
})

export const Submit = styled('button', {
  background: '$main',
  color: '$dark',
  fontFamily: '$primary',
  fontSize: '$3',
  padding: 20,
  width: 'fit-content',
  outline: 'none',
  border: 'none',
  marginTop: 40,
  transition: '0.1s linear',
  zIndex: 10,
  '&:hover': {
    background: '$main2',
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
  '@media only screen and (max-width: 1024px)': {
    display: 'none',
  },
})

export const ImgBox = styled('div', {
  position: 'absolute',
  display: 'flex',
  zIndex: -100,
})
