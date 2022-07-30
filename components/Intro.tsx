import Link from 'next/link'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
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

const Socials: FC = () => {
  return (
    <motion.div className='flex mt-10' variants={A.FadeContainer}>
      {[
        {
          aria: 'GitHub',
          icon: FiGithub,
          href: 'https://github.com/harshhhdev',
        },
        {
          aria: 'Twitter',
          icon: FiTwitter,
          href: 'https://twitter.com/harshhhdev',
        },
        {
          aria: 'Dribbble',
          icon: FiDribbble,
          href: 'https://dribbble.com/harshhhdev',
        },
        {
          aria: 'Linkedin',
          icon: FiLinkedin,
          href: 'https://linkedin.com/in/harshhhdev',
        },
        {
          aria: 'YouTube',
          icon: FiYoutube,
          href: 'https://youtube.com/channel/UC6ix6gYRC62pM0sMRYKPKUQ',
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
            aria-label={link.aria}
          >
            <link.icon size={22} />
          </motion.a>
        </Link>
      ))}
    </motion.div>
  )
}

const Intro: FC<{ setOpen: Dispatch<SetStateAction<number>> }> = ({
  setOpen,
}) => {
  const { t } = useTranslation('common')
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  return (
    <motion.div
      className='mt-20 flex items-start p-2'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
      id='home'
    >
      <motion.div variants={A.FadeContainer} initial='hidden' animate='visible'>
        <motion.span
          className='flex items-center text-sm w-full font-mono text-gray-300'
          variants={A.Fade}
        >
          <p className='text-sm'>
            {time.toLocaleString('en-GB', {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              day: 'numeric',
              month: 'short',
            })}
          </p>
          <div className='w-1 h-1 rounded-full bg-gray-300 mx-2' />
          <a
            href='https://en.wikipedia.org/wiki/Dallas%E2%80%93Fort_Worth_metroplex'
            target='_blank'
            rel='noreferrer'
          >
            Dallas-Fort Worth
          </a>
          ,
          <a
            href='https://en.wikipedia.org/wiki/Texas'
            target='_blank'
            rel='noreferrer'
            className='ml-1'
          >
            Texas
          </a>
        </motion.span>
        <motion.h1
          className='text-3xl z-10 !text-transparent !bg-clip-text !from-gradient-100 !to-gradient-200 !bg-gradient-to-r w-fit pt-2 mb-2'
          variants={A.Fade}
        >
          {t('header')}
        </motion.h1>
        <Wavy
          text={t('tagline')}
          heading='p'
          className='z-10 text-gray-900 dark:text-white text-lg'
        />
        <motion.svg
          aria-hidden='true'
          width='80'
          height='16'
          viewBox='0 0 432 38'
          fill='none'
          className='mt-3 mb-10'
        >
          <path
            d='M402.74 37.5899C390.193 37.5899 374.767 21.3129 374.111 20.6249C367.068 12.4335 359.943 5.14795 349.463 5.14795C337.975 5.14795 324.479 20.406 324.338 20.558L323.17 21.8313C315.729 29.9329 308.701 37.5893 296.186 37.5893C283.639 37.5893 268.213 21.3123 267.557 20.6243C260.514 12.4329 253.389 5.14734 242.909 5.14734C231.421 5.14734 217.925 20.4053 217.784 20.5573L216.683 21.7175C208.186 30.5847 201.48 37.5885 189.636 37.5885C177.085 37.5885 161.656 21.3115 161.007 20.6235C153.96 12.4321 146.831 5.14655 136.359 5.14655C124.871 5.14655 111.375 20.4045 111.234 20.5565L110.054 21.8417C102.62 29.9394 95.5889 37.5837 83.0769 37.5837C70.5259 37.5837 55.0969 21.3067 54.4479 20.6187C47.401 12.4273 40.2719 5.14175 29.7999 5.14175C19.3699 5.14175 9.86587 10.8722 4.98787 20.0987C4.3824 21.2549 2.94488 21.6964 1.78478 21.087C0.628579 20.4698 0.187069 19.0401 0.800389 17.8839C6.50349 7.10691 17.6124 0.403931 29.7964 0.403931C42.2694 0.403931 50.5504 8.82583 57.9644 17.4469C61.941 21.6774 74.3554 32.8419 83.0734 32.8419C93.5074 32.8419 99.2644 26.5724 106.557 18.6349L107.702 17.3888C108.268 16.7404 122.733 0.404816 136.35 0.404816C148.823 0.404816 157.104 8.82671 164.518 17.4478C168.494 21.6783 180.909 32.8428 189.627 32.8428C199.447 32.8428 204.943 27.1123 213.256 18.4368L214.295 17.3509C214.83 16.7337 229.295 0.401917 242.908 0.401917C255.388 0.401917 263.67 8.82382 271.076 17.4449C275.053 21.6676 287.467 32.8359 296.185 32.8359C306.623 32.8359 312.388 26.5625 319.685 18.6129L320.822 17.3785C321.388 16.7301 335.853 0.394531 349.463 0.394531C361.943 0.394531 370.225 8.81643 377.631 17.4375C381.607 21.6602 394.022 32.8285 402.74 32.8285C412.744 32.8285 422.06 27.4379 427.064 18.7625C427.716 17.6258 429.161 17.2313 430.302 17.8914C431.435 18.5438 431.822 19.993 431.173 21.1258C425.321 31.2898 414.427 37.5908 402.739 37.5908L402.74 37.5899Z'
            fill='#666666'
          />
        </motion.svg>
        <motion.p className='z-10 text-lg mr-20' variants={A.Fade}>
          {t('bio')}
        </motion.p>
        <motion.p
          className='z-10 text-lg mr-20 mt-10 hidden sm:flex'
          variants={A.Fade}
        >
          {t('tip')}
          <button
            style={{ opacity: 1 }}
            className='z-10 mx-2 inline bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white text-sm leading-5 py-0.5 px-1.5 border border-gray-500 rounded-md'
            onClick={() => setOpen(1)}
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
          alt='My face'
          className='rounded-full z-10'
        />
      </motion.div>
      <BackgroundAnimation />
    </motion.div>
  )
}

const BackgroundAnimation: FC = () => {
  return (
    <svg
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid slice'
      className='absolute w-full h-full top-0 left-0 hue-rotate-180 dark:opacity-20 opacity-30 pointer-events-none overflow-visible motion-reduce:hidden'
    >
      <defs>
        <radialGradient
          id='Gradient1'
          cx='50%'
          cy='50%'
          fx='10%'
          fy='50%'
          r='.5'
        >
          <animate
            attributeName='fx'
            dur='34s'
            values='0%;3%;0%'
            repeatCount='indefinite'
          ></animate>
          <stop offset='0%' stopColor='#ff0'></stop>
          <stop offset='100%' stopColor='#ff00'></stop>
        </radialGradient>
        <radialGradient
          id='Gradient2'
          cx='50%'
          cy='50%'
          fx='10%'
          fy='50%'
          r='.5'
        >
          <animate
            attributeName='fx'
            dur='23.5s'
            values='0%;3%;0%'
            repeatCount='indefinite'
          ></animate>
          <stop offset='0%' stopColor='#9EFF00'></stop>
          <stop offset='100%' stopColor='#0ff0'></stop>
        </radialGradient>
        <radialGradient
          id='Gradient3'
          cx='50%'
          cy='50%'
          fx='50%'
          fy='50%'
          r='.5'
        >
          <animate
            attributeName='fx'
            dur='21.5s'
            values='0%;3%;0%'
            repeatCount='indefinite'
          ></animate>
          <stop offset='0%' stopColor='#f0f'></stop>
          <stop offset='100%' stopColor='#f0f0'></stop>
        </radialGradient>
      </defs>
      <rect x='0' y='0' width='100%' height='100%' fill='url(#Gradient1)'>
        <animate
          attributeName='x'
          dur='20s'
          values='25%;0%;25%'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='y'
          dur='21s'
          values='0%;25%;0%'
          repeatCount='indefinite'
        ></animate>
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='0 50 50'
          to='360 50 50'
          dur='17s'
          repeatCount='indefinite'
        ></animateTransform>
      </rect>
      <rect x='0' y='0' width='100%' height='100%' fill='url(#Gradient2)'>
        <animate
          attributeName='x'
          dur='23s'
          values='-25%;0%;-25%'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='y'
          dur='24s'
          values='0%;50%;0%'
          repeatCount='indefinite'
        ></animate>
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='0 50 50'
          to='360 50 50'
          dur='18s'
          repeatCount='indefinite'
        ></animateTransform>
      </rect>
      <rect x='0' y='0' width='100%' height='100%' fill='url(#Gradient3)'>
        <animate
          attributeName='x'
          dur='25s'
          values='0%;25%;0%'
          repeatCount='indefinite'
        ></animate>
        <animate
          attributeName='y'
          dur='26s'
          values='0%;25%;0%'
          repeatCount='indefinite'
        ></animate>
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='360 50 50'
          to='0 50 50'
          dur='19s'
          repeatCount='indefinite'
        ></animateTransform>
      </rect>
    </svg>
  )
}

export default Intro
