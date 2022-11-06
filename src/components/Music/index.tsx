import { FC, useState } from 'react'
import styles from './styles.module.css'

type Artist = {
  name: string
  url: string
  genre: string
  followers: number
}

type Track = {
  name: string
  artists: string
  url: string
}

const Entry: FC<{
  data: Artist | Track
  artists: boolean
  onHover: () => void
  onLeave: () => void
}> = (props) => {
  return (
    <a
      href={props.data.url}
      className={styles.entry}
      onMouseOver={props.onHover}
      onMouseLeave={props.onLeave}
    >
      <p>{props.data.name}</p>
      <div className={styles.info}>
        {props.artists ? (
          <>
            <p className={styles.content}>
              {(props.data as Artist).followers.toLocaleString()} followers
              <span className={styles.separator}>•</span>
              {(props.data as Artist).genre
                .toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
                .replace('Hip Hop', 'Hip-Hop')}
            </p>
            <p className={styles.followers}>
              {(props.data as Artist).followers.toLocaleString()} followers
            </p>
          </>
        ) : (
          <p>{(props.data as Track).artists}</p>
        )}
      </div>
    </a>
  )
}

const Music: FC<{ data: Artist[] | Track[]; artists: boolean }> = (props) => {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(0)

  return (
    <div className={styles.container}>
      <div
        className={styles.highlighter}
        style={{
          top: active * 60 - 58,
          opacity: hover ? 1 : 0,
        }}
        aria-hidden
      />
      {props.artists
        ? props.data?.map((item, index) => (
            <Entry
              key={index}
              onHover={() => {
                setActive(index + 1)
                setHover(true)
              }}
              onLeave={() => {
                setHover(false)
              }}
              artists
              data={item as Artist}
            />
          ))
        : props.data?.map((item, index) => (
            <Entry
              key={index}
              onHover={() => {
                setActive(index + 1)
                setHover(true)
              }}
              onLeave={() => {
                setHover(false)
              }}
              artists={false}
              data={item as Track}
            />
          ))}
    </div>
  )
}

export default Music
