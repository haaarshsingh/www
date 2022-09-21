import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeContainer } from '@anims/index'
import { FiArrowLeft } from 'react-icons/fi'
import { styled } from '@css/theme.config'

const Icon = styled(FiArrowLeft, {
  marginRight: 8,
  transition: '0.1s linear transform',
})

const Back = styled(motion.a, {
  marginTop: 80,
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  [`&:hover ${Icon}`]: {
    transform: 'translateX(-5px)',
  },
})

const Header = styled(motion.h1, { margin: '40px 0' })

const Text = styled(motion.p, {
  variants: { margin: { true: { margin: '12px 0' } } },
})

const NotFound: FC = () => {
  return (
    <motion.div variants={FadeContainer} initial='hidden' animate='visible'>
      <Link href='/' passHref>
        <Back variants={Fade}>
          <Icon />
          Back
        </Back>
      </Link>
      <Header variants={Fade}>Not found.</Header>
      <Text variants={Fade}>
        <i>
          Computers were simply made to solve errors that did not exist before.
        </i>
      </Text>
      <Text margin variants={Fade}>
        After wanting to create a nonpareil website, I found love in minimalism:
        subtle animations, monochromatic colours, and simplicity to reflect my
        new values of design.
      </Text>
    </motion.div>
  )
}

export default NotFound
