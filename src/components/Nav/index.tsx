'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import styles from '@css/common.module.css'

type Items = { [index: string]: Item }

type Item = {
  name: string
  x: number
  w: string
}

const items: Items = {
  '/': { name: 'Home', x: 0, w: '77.95px' },
  '/about': { name: 'About', x: 77.95, w: '78.48px' },
  '/writing': { name: 'Writing', x: 156.43, w: '85.33px' },
}

const Nav: FC = () => {
  let pathname = usePathname() || '/'
  if (pathname.includes('/writing/')) pathname = '/writing'

  return (
    <nav className={styles.nav}>
      <div className={styles.blur} />
      <div className={styles.box}>
        {Object.entries(items).map(([path, { name, w }]) => (
          <a key={path} href={path} className={styles.link}>
            {name}
            {items[pathname].name === name && (
              <motion.div
                className={styles.bar}
                layoutId='bar'
                aria-hidden={true}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                style={{ width: w }}
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Nav
