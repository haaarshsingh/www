'use client'

import { FC, useEffect, useState } from 'react'
import styles from '@css/slug.module.css'
import { format } from 'date-fns'
import { Post } from 'contentlayer/generated'
import { FiLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Header: FC<Post> = ({ title, published, slug }) => (
  <header className={styles.header}>
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p>{format(new Date(published), 'MMMM dd, yyyy')}</p>
    </div>
    <Copy slug={slug} />
  </header>
)

const Copy: FC<{ slug: string }> = ({ slug }) => {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 1000)
  }, [copied])

  const copy = () => {
    setCopied(true)
    navigator.clipboard.writeText(`https://harshsingh.xyz/writing/${slug}`)
  }

  return (
    <div className={styles.button_wrapper}>
      <AnimatePresence>
        {visible && (
          <motion.div
            className={styles.tooltip}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            <p>{copied ? 'Copied' : 'Copy URL'}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        aria-label='Copy Link'
        onClick={copy}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <FiLink />
      </button>
    </div>
  )
}

export default Header
