import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div, {
  marginTop: 160,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 10,
})

export const Avatar = styled('div', {
  display: 'none !important',
  borderRadius: 16,
  height: 'fit-content',
  zIndex: 10,
  '@sm': { display: 'block !important' },
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 20,
  width: '100%',
  '@sm': { marginLeft: 80 },
})

export const DateContainer = styled(motion.span, {
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$mono',
  fontSize: '$sm',
  color: '$grey600',
})

export const Time = styled('p', {
  letterSpacing: '-0.05em',
  fontSize: '$sm',
  variants: { right: { true: { textAlign: 'right' } } },
  a: {
    background: 'none',
    textDecoration: 'none',
    transition: 'color 0.1s',
    color: '$grey600',
  },
  'a:hover': { color: '$grey0' },
})

export const Dot = styled('div', {
  width: 4,
  height: 4,
  borderRadius: 10,
  backgroundColor: '$grey600',
  margin: '0 8px',
})

export const Name = styled(motion.h1, {
  zIndex: 10,
  color: 'transparent',
  backgroundClip: 'text !important',
  background: 'linear-gradient(to right, $gradient100, $gradient200)',
  width: 'fit-content',
  padding: '8px 0',
  margin: '8px 0',
})

export const Description = styled(motion.p, {
  variants: { margin: { true: { margin: '20px 0' } } },
})

export const Divider = styled(motion.svg, { marginTop: 12, marginBottom: 40 })

export const SocialsWrapper = styled(motion.div, {
  display: 'flex',
  marginTop: 40,
})

export const Link = styled(motion.a, { marginRight: 20 })
