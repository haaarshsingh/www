'use client'

import { AnimatePresence, motion, usePresence } from 'framer-motion'
import { FC, ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from '@css/common.module.css'
import { Freeze } from 'react-freeze'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [present, safeToRemove] = usePresence()
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        onAnimationComplete={() => {
          if (!present) safeToRemove()
        }}
        key={pathname}
      >
        <Freeze freeze={!present}>{children}</Freeze>
      </motion.div>
    </AnimatePresence>
  )
}

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.wrapper}>
    <main className={styles.content}>{children}</main>
  </div>
)

export default Layout
