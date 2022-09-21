import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div, {
  marginTop: 48,
  display: 'flex',
  flexDirection: 'column',
  h1: { marginBottom: 16 },
})

export const Container = styled(motion.div, { marginTop: 64 })

export const Category = styled('div', {
  width: '100%',
  display: 'flex',
  borderTop: '$grey700 solid 1px',
})

export const Header = styled(motion.h2, {
  display: 'none',
  marginTop: 20,
  fontSize: '$lg',
  marginRight: 64,
  marginLeft: 16,
  color: '$grey600',
  width: 'fit-content',
  fontWeight: 'normal',
  '@sm': { display: 'block' },
})

export const RowWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const Row = styled(motion.a, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0',
  variants: { inactive: { true: { borderBottom: '$grey700 1px solid' } } },
})

export const Content = styled('p', {
  fontSize: '$base',
  fontWeight: 500,
  width: '33.333333%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  transition: '0.1s linear',
  variants: {
    active: { true: { color: '$grey0' }, false: { color: '#444444' } },
    activeLight: { true: { color: '#6E6E6E' }, false: { color: '#444444' } },
    info: { true: { width: '66.66667%', textAlign: 'right', fontWeight: 400 } },
    blog: { true: { width: '75%' } },
    hide: { true: { display: 'none', '@sm': { display: 'block' } } },
    show: {
      true: {
        display: 'block',
        width: '25%',
        textAlign: 'right',
        fontWeight: 400,
        '@sm': { display: 'none' },
      },
    },
  },
})
