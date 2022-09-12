import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeContainer } from '@anims/index'

const NotFound: FC = () => {
  return (
    <motion.div variants={FadeContainer} initial='hidden' animate='visible'>
      <motion.h1 className='my-20 text-5xl' variants={Fade}>
        Not found.
      </motion.h1>
      <motion.p variants={Fade}>
        <i>
          Computers were simply made to solve errors that did not exist before.
        </i>
      </motion.p>
      <motion.p className='my-3' variants={Fade}>
        After wanting to create a nonpareil website, I found love in minimalism.
        Subtle animations, monochromatic colours, and simplicity reflect my new
        values of design.
      </motion.p>
    </motion.div>
  )
}

export default NotFound
