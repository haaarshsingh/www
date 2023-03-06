import type { FC, ReactNode } from 'react'
import styles from '@css/common.module.css'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>{children}</div>
  </div>
)
