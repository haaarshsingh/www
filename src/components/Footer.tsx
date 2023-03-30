'use client'

import { FC, useEffect, useState } from 'react'
import styles from '@css/common.module.css'
import clsx from 'clsx'
import useSWR, { SWRConfiguration, Fetcher } from 'swr'
import useWindowSize, { Size } from '@lib/hooks/useWindowSize'

type Root = {
  song: Song
}

type Song = {
  title: string
  link: string
}

const config: SWRConfiguration = {
  fallbackData: {
    song: { title: 'Offline', link: '#' },
  },
  revalidateOnMount: false,
}

const fetcher: Fetcher<Root> = (input: RequestInfo | URL) =>
  fetch(input, { next: { revalidate: 300 } }).then((res) => res.json())

const Footer: FC = () => {
  const size: Size = useWindowSize()

  const [time, setTime] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)
  const { data } = useSWR<Root>('/api/music', fetcher, config)

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
            {typeof size.width !== 'undefined'
              ? size.width > 767
                ? 'Dallas, TX'
                : 'DTX'
              : 'Dallas, Texas'}
          </a>
          <span className={styles.separator}>•</span>
          {typeof size.width !== 'undefined'
            ? size.width > 767
              ? time.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                  day: 'numeric',
                  month: 'short',
                  timeZone: 'America/Chicago',
                })
              : time.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  day: 'numeric',
                  month: 'numeric',
                  timeZone: 'America/Chicago',
                })
            : time.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                day: 'numeric',
                month: 'short',
                timeZone: 'America/Chicago',
              })}
        </p>
        <div>
          <div className={styles.music}>
            <div
              className={clsx(
                styles.line,
                styles.line1,
                data?.song.link === '#' && styles.offline
              )}
            />
            <div
              className={clsx(
                styles.line,
                styles.line2,
                data?.song.link === '#' && styles.offline
              )}
            />
            <div
              className={clsx(
                styles.line,
                styles.line3,
                data?.song.link === '#' && styles.offline
              )}
            />
            <p>
              {data?.song.link !== '#' && typeof size.width !== 'undefined'
                ? size.width > 767
                  ? "Jammin' Now — "
                  : ''
                : ''}
              <a href={data?.song.link} target='_blank' rel='noreferrer'>
                {data?.song.title}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
