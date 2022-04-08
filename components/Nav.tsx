import NextLink from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { TFunction, useTranslation } from 'next-i18next'
import { FC, useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { useSpring, animated } from 'react-spring'
import { AnimatePresence, motion } from 'framer-motion'
import * as A from '@anims/index'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useTheme } from 'next-themes'

const NavItem: FC<{ href: string; text: string; router: NextRouter }> = ({
  href,
  text,
  router,
}) => {
  const isActive = router.asPath === (href === '/home' ? '/' : href)

  return (
    <NextLink href={href === '/home' ? '/' : href} passHref>
      <a
        className={`${
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400'
        } sm:inline-block rounded-lg hover:text-gray-900 dark:hover:text-gray-50 transition-all text-lg mr-4 sm:mr-7`}
      >
        <span className='capsize'>{text}</span>
      </a>
    </NextLink>
  )
}

const Toggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const properties = {
    sun: {
      r: 9,
      transform: 'rotate(40deg)',
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    moon: {
      r: 5,
      transform: 'rotate(90deg)',
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  }
  const { r, transform, cx, cy, opacity } =
    theme === 'dark' ? properties['moon'] : properties['sun']
  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  })
  const centerCircleProps: any = useSpring({
    r,
    config: properties.springConfig,
  })
  const maskedCircleProps: any = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  })
  const linesProps = useSpring({ opacity, config: properties.springConfig })

  return (
    <motion.div
      className='h-6 text-gray-500 dark:hover:text-white'
      variants={A.Image}
    >
      <animated.svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        style={{ ...svgContainerProps, cursor: 'pointer' }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <mask id='mask'>
          <rect x='0' y='0' width='100%' height='100%' fill='white' />
          <animated.circle
            style={maskedCircleProps}
            cx='12'
            cy='4'
            r='9'
            fill='black'
          />
        </mask>
        <animated.circle
          style={centerCircleProps}
          fill='currentColor'
          cx='12'
          cy='12'
          r='9'
          mask='url(#mask)'
        />

        <animated.g style={linesProps} fill='currentColor'>
          <line x1='12' y1='1' x2='12' y2='3' />
          <line x1='12' y1='21' x2='12' y2='23' />
          <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
          <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
          <line x1='1' y1='12' x2='3' y2='12' />
          <line x1='21' y1='12' x2='23' y2='12' />
          <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
          <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
        </animated.g>
      </animated.svg>
    </motion.div>
  )
}

const LanguageMenu: FC<{
  show: boolean
  // @ts-ignore
  t: TFunction<'common', undefined>
}> = ({ show, t }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='absolute mt-10 text-lg bg-gray-200 dark:bg-gray-800 px-3 py-5 rounded flex flex-col border-solid border-2 border-gray-300 dark:border-gray-500 select-none z-10'
          variants={A.Image}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <a href='/en'>{t('english')}</a>
          <a href='/hn'>{t('hindi')}</a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Navbar: FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const [open, setOpen] = useState(false)
  const links = ['home', 'ama', 'uses', 'stats', 'blog']
  const boundary = useDetectClickOutside({ onTriggered: () => setOpen(false) })

  return (
    <nav className='flex justify-between items-center'>
      <div>
        {links.map((link, index) => (
          <NavItem
            href={`/${link}`}
            text={t(link)}
            router={router}
            key={index}
          />
        ))}
      </div>
      <div className='flex items-center'>
        <div
          className='bg-none border-none flex flex-col items-center'
          ref={boundary}
        >
          <FiGlobe
            className='text-gray-500 dark:hover:text-white transition-colors hover:cursor-pointer mx-3'
            size={24}
            onClick={() => setOpen((o) => !o)}
          />
          <LanguageMenu show={open} t={t} />
        </div>
        <Toggle />
      </div>
    </nav>
  )
}

export default Navbar
