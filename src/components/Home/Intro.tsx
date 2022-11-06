import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import styles from '@css/modules/home.module.css'

export const Intro: FC = () => {
  const [imageLoading, setImageLoading] = useState(false)

  useEffect(() => setImageLoading(true), [])

  return (
    <header className={styles.intro}>
      <div>
        <h1>Harsh Singh</h1>
        <p>Developer, Designer & Student</p>
        <p>Dallas-Fort Worth, Texas</p>
      </div>
      <div
        className={clsx(
          styles.image,
          styles.blur_down,
          imageLoading && styles.loaded
        )}
      >
        <img
          src='https://avatars.githubusercontent.com/u/69592270?v=4'
          className={styles.blur}
          width={75}
          height={75}
          alt='My face'
          draggable={false}
        />
      </div>
    </header>
  )
}
