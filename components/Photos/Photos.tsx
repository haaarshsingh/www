import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeContainer } from '@anims/index'
import Image from 'next/future/image'

const transition = {
  type: 'spring',
  damping: 100,
  stiffness: 1000,
}

const photos = [
  {
    src: '',
    alt: '',
  },
]

const Photos: FC = () => {
  return (
    <motion.div variants={FadeContainer} initial='hidden' animate='visible'>
      <Photo
        src='https://im.vsco.co/aws-us-west-2/d45bcd/235249507/632113fb95f6a6103d63e9d6/vsco_091322.jpg?w=1280&dpr=1'
        alt='Landscape'
      />
      <Photo
        src='https://im.vsco.co/aws-us-west-2/d45bcd/235249507/6291923ba134f54229c0c22a/vsco_052722.jpg?w=720&dpr=1'
        alt='Landscape'
      />
      <Photo
        src='https://images.unsplash.com/photo-1663011109441-6948af4a0b80'
        alt='Landscape'
      />
      <Photo
        src='https://images.unsplash.com/photo-1663011109441-6948af4a0b80'
        alt='Landscape'
      />
      <Photo
        src='https://images.unsplash.com/photo-1663011109441-6948af4a0b80'
        alt='Landscape'
      />
      <Photo
        src='https://images.unsplash.com/photo-1663011109441-6948af4a0b80'
        alt='Landscape'
      />
      <Photo
        src='https://images.unsplash.com/photo-1663011109441-6948af4a0b80'
        alt='Landscape'
      />
      <Photo
        src='https://images.unsplash.com/photo-1663011109441-6948af4a0b80'
        alt='Landscape'
      />
      <Photo
        src='https://images.unsplash.com/photo-1663011109441-6948af4a0b80'
        alt='Landscape'
      />
    </motion.div>
  )
}

const Photo: FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={Fade}
      className='h-[600px] overflow-hidden relative my-8 rounded-lg'
    >
      <Image
        src={src}
        alt={alt}
        blurDataURL={src}
        width={1280}
        height={720}
        loading='lazy'
        placeholder='blur'
        className='object-contain rounded-lg'
      />
    </motion.div>
  )
}

export default Photos
