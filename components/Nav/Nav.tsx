import NextLink from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as A from '@anims/index'
import Link from 'next/link'

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
          isActive ? 'text-gray-200' : 'text-gray-400'
        } sm:inline-block rounded-lg hover:text-gray-50 transition-all mr-4 sm:mr-7 hidden`}
      >
        <span className='capsize'>{text}</span>
      </a>
    </NextLink>
  )
}

const Navbar: FC<{
  navOpen: boolean
  setNavOpen: Dispatch<SetStateAction<boolean>>
}> = ({ navOpen, setNavOpen }) => {
  const router = useRouter()
  const links = ['Home', 'AMA', 'Uses', 'Music', 'Blog']

  return (
    <nav className='flex justify-between items-center w-full'>
      <div className='z-20'>
        <Hamburger open={navOpen} setOpen={setNavOpen} />
        {links.map((link, index) => (
          <NavItem
            href={`/${link.toLowerCase()}`}
            text={link}
            router={router}
            key={index}
          />
        ))}
      </div>
      <AnimatePresence>
        {navOpen && <MobileMenu links={links} />}
      </AnimatePresence>
    </nav>
  )
}

const MobileMenu: FC<{ links: string[] }> = ({ links }) => {
  return (
    <motion.div
      className='absolute bg-gray-900 w-screen h-screen top-0 left-0 z-10'
      variants={A.FastFadeContainer}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <motion.div className='mt-32 ml-8 flex flex-col'>
        {links.map((link, index) => (
          <Link
            href={link.toLowerCase() === 'home' ? '/' : link.toLowerCase()}
            key={index}
            passHref
          >
            <motion.a
              className='list-none text-xl my-3 w-fit'
              variants={A.FadeSideways}
            >
              {link}
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  )
}

const Hamburger: FC<{
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}> = ({ open, setOpen }) => {
  return (
    <svg
      className={`ham hamRotate ham8 sm:hidden ${open && 'active'}`}
      viewBox='0 0 100 100'
      width='50'
      onClick={() => setOpen((open) => !open)}
    >
      <path
        className='line top'
        d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
      />
      <path className='line middle' d='m 30,50 h 40' />
      <path
        className='line bottom'
        d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
      />
    </svg>
  )
}

export default Navbar
