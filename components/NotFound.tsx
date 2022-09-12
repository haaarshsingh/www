import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeContainer } from '@anims/index'
import { FiArrowLeft } from 'react-icons/fi'

const NotFound: FC = () => {
  return (
    <motion.div variants={FadeContainer} initial='hidden' animate='visible'>
      <Link href='/' passHref>
        <a className='mt-20 flex items-center group'>
          <FiArrowLeft className='mr-2 group-hover:-translate-x-1 transition-transform' />
          Back
        </a>
      </Link>
      <motion.h1 className='text-5xl my-10' variants={Fade}>
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
