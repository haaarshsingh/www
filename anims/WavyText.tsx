import React from 'react'
import { motion, Variants, HTMLMotionProps } from 'framer-motion'
import GraphemeSplitter from 'grapheme-splitter'

interface Props extends HTMLMotionProps<'div'> {
  text: string
  delay?: number
  duration?: number
  heading: 'h1' | 'p'
}

const Letter: React.FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  heading,
  ...props
}: Props) => {
  const splitter = new GraphemeSplitter()
  const letters = splitter.splitGraphemes(text)

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    show: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  }

  const child: Variants = {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
      },
    },
    hidden: {
      y: '100%',
      opacity: 1,
    },
  }

  return (
    <>
      {heading === 'h1' ? (
        <motion.h1
          style={{ display: 'flex', overflow: 'hidden' }}
          variants={container}
          initial='hidden'
          animate='show'
          {...props}
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={child} className='-z-50'>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
      ) : (
        <motion.p
          style={{ display: 'flex', overflow: 'hidden' }}
          variants={container}
          initial='hidden'
          animate='show'
          {...props}
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
      )}
    </>
  )
}

export default Letter
