import { format } from 'date-fns'
import { FC, useEffect, useState } from 'react'
import s from './styles.module.css'

const Footer: FC = () => {
  const [time, setTime] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  if (!mounted) return null

  return (
    <footer className={s.footer}>
      <hr className={s.hr} />
      <div className={s.container}>
        <p className={s.date}>
          <a
            href='https://en.wikipedia.org/wiki/Dallas%E2%80%93Fort_Worth_metroplex'
            target='_blank'
            rel='noreferrer'
            className={s.location}
          >
            Dallas, TX
          </a>
          <span className={s.separator}>•</span>
          {time.toLocaleString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            day: 'numeric',
            month: 'short',
            timeZone: 'America/Chicago',
          })}
        </p>
        <p className={s.date}>
          No ads, no tracking. Happy {format(new Date(), 'EEEE')}.
        </p>
      </div>
    </footer>
  )
}

export default Footer
