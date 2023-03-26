import { FC, ReactNode } from 'react'
import styles from '@css/common.module.css'

export const Root: FC<{ children: ReactNode }> = ({ children }) => (
  <main>{children}</main>
)

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
