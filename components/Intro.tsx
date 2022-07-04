import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import {
  FiTwitter,
  FiDribbble,
  FiLinkedin,
  FiGithub,
  FiYoutube,
} from 'react-icons/fi';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Wavy from '@anims/WavyText';
import * as A from '@anims/index';
import { useKBar } from 'kbar';

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
  );
};

const Intro: FC = () => {
  const { t } = useTranslation('common');
  const { query } = useKBar();

  return (
    <motion.div
      className='mt-20 flex items-start p-2'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
      id='home'
    >
      <motion.div variants={A.FadeContainer} initial='hidden' animate='visible'>
        <motion.h1
          className='text-5xl z-10 !text-transparent !bg-clip-text !from-gradient-100 !to-gradient-200 !bg-gradient-to-r h-16 w-fit pt-2'
          variants={A.Fade}
        >
          {t('header')}
        </motion.h1>
        <Wavy
          text={t('tagline')}
          heading='p'
          className='z-10 text-gray-900 dark:text-white text-xl mt-3 mb-10'
        />
        <motion.p className='z-10 text-xl mr-20' variants={A.Fade}>
          {t('bio')}
        </motion.p>
        <motion.p
          className='z-10 text-xl mr-20 mt-10 hidden sm:flex'
          variants={A.Fade}
        >
          {t('tip')}
          <button
            onClick={query.toggle}
            style={{ opacity: 1 }}
            className='z-10 mx-2 inline bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white text-sm leading-5 py-0.5 px-1.5 border border-gray-500 rounded-md'
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
  );
};

const BackgroundAnimation: FC = () => {
  return (
    <svg
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid slice'
      className='absolute w-full h-full top-0 left-0 hue-rotate-180 dark:opacity-20 opacity-30 pointer-events-none overflow-visible'
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
  );
};

export default Intro;
