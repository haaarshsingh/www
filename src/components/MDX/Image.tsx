import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import styles from './styles.module.css'

type ImageProps = {
  src: string
  alt: string
  shadow?: string
}

const Image: FC<ImageProps> = ({ src, alt, shadow }) => {
  const [imageLoading, setImageLoading] = useState(false)
  useEffect(() => setImageLoading(true), [])

  return (
    <div
      className={clsx(
        styles.image,
        styles.blur_down,
        imageLoading && styles.loaded
      )}
    >
      <div className={styles.image_wrapper}>
        <img src={src} className={styles.blur} alt={alt} draggable={false} />
      </div>
      {shadow && <div className={styles.shadow} />}
    </div>
  )
}

export default Image
