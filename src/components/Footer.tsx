'use client'

import { FC, useEffect, useState } from 'react'
import styles from '@css/common.module.css'
import clsx from 'clsx'
import useSWR, { SWRConfiguration, Fetcher } from 'swr'

type Root = {
  song: Song
}

type Song = {
  title: string
  link: string
}

const config: SWRConfiguration = {
  fallbackData: {
    song: {
      title: 'Fetching Music...',
      link: '#',
    },
  },
  revalidateOnMount: false,
}

const fetcher: Fetcher<Root> = (input: RequestInfo | URL) =>
  fetch(input).then((res) => res.json())

const Footer: FC = () => {
  const [time, setTime] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)
  const { data, error } = useSWR<Root>('/api/music', fetcher, config)

  useEffect(() => {
    setMounted(true)
    setInterval(() => setTime(new Date()), 1000)
    console.log(error)
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
            <a href={data.song.link} target='_blank' rel='noreferrer'>
              {data.song.title}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
