import { FC } from 'react'
import { motion } from 'framer-motion'
import { FadeContainer, Fade } from '@anims/index'

const Header: FC<{ head: string; bio: string }> = ({ head, bio }) => {
  return (
    <motion.div variants={FadeContainer} initial='hidden' animate='visible'>
      <motion.h1 className='mt-20 text-5xl' variants={Fade}>
        {head}
      </motion.h1>
      <motion.p className='text-xl mt-5 mb-20' variants={Fade}>
        {bio}
      </motion.p>
    </motion.div>
  )
}

export default Header
