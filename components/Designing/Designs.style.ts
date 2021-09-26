import { styled } from '@css/theme.config'

export const DesignsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@media only screen and (max-width: 414px)': {
    alignItems: 'center',
  },
})

export const DesignsHeader = styled('h1', {
  display: 'inline-block',
  background: '$gradient',
  width: 'fit-content',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '150px 100px',
  variants: {
    dribbble: {
      true: {
        margin: '50px 100px',
        '@media only screen and (max-width: 414px)': {
          margin: '50px 0',
        },
      },
    },
  },
  '@media only screen and (max-width: 414px)': {
    margin: '150px 0',
  },
})

export const DesignsBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  margin: 0,
  marginBottom: 200,
})
