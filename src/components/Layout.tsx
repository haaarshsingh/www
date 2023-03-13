'use client'

import type { FC, ReactNode } from 'react'
import Loader from '@components/Loader'
import styles from '@css/common.module.css'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>{children}</div>
  </div>
)

export const BlogLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.blog}>{children}</div>
  </div>
)
