import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div, { marginTop: 64 })

export const Progress = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 4,
  background: '$grey100',
  transformOrigin: '0%',
  zIndex: 20,
})

export const Title = styled('h1', { fontSize: '$lg' })

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '16px 0 64px 0',
})

export const RightContainer = styled('div', {
  display: 'none',
  '@sm': { display: 'flex' },
  div: {
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$grey400',
  },
  'div:nth-child(2)': { marginLeft: 20 },
  svg: { marginRight: 8 },
})
