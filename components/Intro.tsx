import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import {
  FiTwitter,
  FiDribbble,
  FiLinkedin,
  FiGithub,
  FiYoutube,
} from 'react-icons/fi'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import Wavy from '@anims/WavyText'
import * as A from '@anims/index'
import { useKBar } from 'kbar'

const Socials: FC = () => {
  return (
    <motion.div className='flex mt-10' variants={A.FadeContainer}>
      {[
        {
          icon: FiGithub,
          href: 'https://github.com/harshhhdev',
        },
        {
          icon: FiTwitter,
          href: 'https://twitter.com/harshhhdev',
        },
        {
          icon: FiDribbble,
          href: 'https://dribbble.com/harshhhdev',
        },
        {
          icon: FiLinkedin,
          href: 'https://linkedin.com/in/harshhhdev',
        },
        {
          icon: FiYoutube,
          href: 'https://www.youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ',
        },
      ].map((link, index) => (
        <Link href={link.href} key={index} passHref>
          <motion.a
            href={link.href}
            target='_blank'
            rel='noreferrer'
            className='mr-5'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
            aria-label={link.icon.toString()}
          >
            <link.icon size={22} />
          </motion.a>
        </Link>
      ))}
    </motion.div>
  )
}

const Intro: FC = () => {
  const { t } = useTranslation('common')
  const { query } = useKBar()

  return (
    <motion.div
      className='mt-20 flex items-start p-2'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <motion.div variants={A.FadeContainer} initial='hidden' animate='visible'>
        <motion.h1
          className='text-5xl text-transparent bg-clip-text from-gradient-100 to-gradient-200 bg-gradient-to-r h-16 w-fit pt-2'
          variants={A.Fade}
        >
          {t('header')}
        </motion.h1>
        <Wavy
          text={t('tagline')}
          heading='p'
          className='text-gray-900 dark:text-white text-xl mt-3 mb-10'
        />
        <motion.p className='text-xl mr-20' variants={A.Fade}>
          {t('bio')}
        </motion.p>
        <motion.p
          className='text-xl mr-20 mt-10 hidden sm:flex'
          variants={A.Fade}
        >
          {t('tip')}
          <button
            onClick={query.toggle}
            style={{ opacity: 1 }}
            className='mx-2 inline bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white text-sm leading-5 py-0.5 px-1.5 border border-gray-500 rounded-md'
          >
            <kbd className='font-sans no-underline'>⌘</kbd>{' '}
            <kbd className='font-sans'>K</kbd>
          </button>{' '}
          {t('navigate')}
        </motion.p>
        <Socials />
      </motion.div>
      <motion.div variants={A.Image} className='hidden sm:block'>
        <Image
          src='https://avatars.githubusercontent.com/u/69592270?v=4'
          width={150}
          height={150}
          alt='Profile'
          className='rounded-full grayscale'
        />
      </motion.div>
    </motion.div>
  )
}

export default Intro
