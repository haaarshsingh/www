'use client'

import { format } from 'date-fns'
import { FC, useEffect, useState } from 'react'
import styles from '@css/common.module.css'
import clsx from 'clsx'

const Footer: FC = () => {
  const [time, setTime] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  if (!mounted) return null

  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <div className={styles.container}>
        <p className={styles.date}>
          <a
            href='https://en.wikipedia.org/wiki/Dallas%E2%80%93Fort_Worth_metroplex'
            target='_blank'
            rel='noreferrer'
            className={styles.location}
          >
            Dallas, TX
          </a>
          <span className={styles.separator}>•</span>
          {time.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            day: 'numeric',
            month: 'short',
            timeZone: 'America/Chicago',
          })}
        </p>
        <div>
          <div className={styles.indicator}>
            <div className={clsx(styles.line, styles.line1)} />
            <div className={clsx(styles.line, styles.line2)} />
            <div className={clsx(styles.line, styles.line3)} />
            <a
              href='https://music.apple.com/in/album/heartless-feat-mustard-single/1480603540'
              target='_blank'
              rel='noreferrer'
            >
              Heartless (feat. Mustard)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
