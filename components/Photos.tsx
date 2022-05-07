import shuffle from '@lib/shuffle'
import Image from 'next/image'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Fade,
  FadeContainer,
  FastFadeContainer,
  transition,
} from '@anims/index'

const Picture: FC<{ index: number }> = ({ index }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className={`w-full h-500 relative ${open && 'open z-40'}`}
      variants={Fade}
    >
      <motion.div
        animate={{ opacity: open ? 1 : 0 }}
        className={`fixed top-0 left-0 bottom-0 right-0 opacity-0 bg-gray-900/90 z-30 cursor-zoom-out ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        transition={transition}
      />
      {open ? (
        <Image
          alt='Picture'
          src={`/static/photography/${index}.jpg`}
          layout='fill'
          objectFit='contain'
          className='cursor-zoom-out z-40 grayscale-0 rounded-2xl'
          onClick={() => setOpen(!open)}
        />
      ) : (
        <Image
          alt='Picture'
          src={`/static/photography/${index}.jpg`}
          layout='fill'
          objectFit='cover'
          className='p-6 transition-all grayscale hover:grayscale-0 cursor-zoom-in'
          onClick={() => setOpen(!open)}
        />
      )}
    </motion.div>
  )
}

const Photos: FC<{ length: number }> = ({ length }) => {
  const photos = shuffle(Array.from(Array(length).keys()))

  return (
    <motion.div
      className='grid grid-rows-auto sm:grid-cols-2'
      initial='hidden'
      animate='visible'
      variants={FastFadeContainer}
    >
      {photos.map((photo, index) => (
        <Picture index={photo + 1} key={index} />
      ))}
    </motion.div>
  )
}

export default Photos
