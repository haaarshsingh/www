import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div, { marginTop: 48 })
export const Description = styled(motion.p, { margin: '16px 0' })
export const Form = styled(motion.form, { width: '100%', marginBottom: 64 })
export const QuestionTitle = styled('h2', { fontSize: '$xl', marginBottom: 20 })
export const Question = styled('p', { fontSize: '$base', marginBottom: 40 })

export const Textarea = styled('textarea', {
  width: '100%',
  margin: '32px 0',
  background: '$grey900',
  borderRadius: 6,
  border: '$grey700 1px solid',
  padding: 20,
  resize: 'vertical',
  fontSize: '$base',
  color: '$grey0',
  outline: 'none',
  boxSizing: 'border-box',
  lineHeight: '24px',
})

export const Message = styled(motion.p, {
  marginBottom: 20,
  variants: { error: { true: { color: 'rgb(251 113 133)' } } },
})
