import { global } from './theme.config'

const globalStyle = global({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    cursor: 'none !important',
    scrollBehavior: 'smooth',
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    background: '$dark',
    overflowX: 'hidden',
    fontFamily: 'GTWalsheimPro',
  },
  '::selection': {
    background: '#4560F060',
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: 10,
  },
  'body::-webkit-scrollbar-track': {
    background: '$primary',
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$main',
  },
  'body::-webkit-scrollbar-thumb:hover': {
    background: '$main2',
  },
  'code, pre': {
    fontFamily: '$mono',
  },
  ul: {
    marginLeft: 20,
  },
  '.invalid': {
    color: '#F16D6D !important',
  },
  '.disabled': {
    display: 'none !important',
  },
  '@font-face': {
    fontFamily: 'GTWalsheimPro',
    src: 'url(/GTWalsheimPro-Regular.ttf)',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
  },
})

export default globalStyle
