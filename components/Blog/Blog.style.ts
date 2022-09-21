import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div, { width: '100%' })
export const HeaderContainer = styled('header', { marginTop: 48 })

export const Description = styled(motion.p, {
  margin: '16px 0 64px 0',
  span: { color: '$grey0' },
})

export const Container = styled('div', {
  display: 'flex',
  borderTop: '$grey700 solid 1px',
})

export const Year = styled(motion.h2, {
  display: 'none',
  margin: '20px 64px 0px 16px',
  fontWeight: 400,
  fontSize: '$base',
  color: '$grey600',
  width: 'fit-content',
  '@sm': { display: 'block' },
})

export const BlogWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const Blog = styled(motion.a, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '20px 0',
  variants: { last: { true: { borderBottom: '$grey700 solid 1px' } } },
})

export const Title = styled(motion.h2, {
  color: '$grey0',
  fontSize: '$base',
  fontWeight: 500,
  width: '75%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  transition: '0.1s linear',
})
