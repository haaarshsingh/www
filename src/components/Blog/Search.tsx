import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from '@css/modules/post.module.css'
import { FiEye, FiSearch, FiUser } from 'react-icons/fi/index'
import type { MDXInstance } from 'astro'

export const filter = (
  posts: MDXInstance<Record<string, any>>[] | undefined,
  query: string
) => {
  if (!query) return posts

  return posts?.filter((post) => {
    const text = post.frontmatter.title.toLowerCase()
    return text.includes(query.toLowerCase())
  })
}

export const Search: FC<{ setInput: Dispatch<SetStateAction<string>> }> = ({
  setInput,
}) => {
  const input = useRef<HTMLInputElement>(null)
  const [data, setData] = useState<{ followers: string; views: string } | null>(
    null
  )

  const focus = (event: KeyboardEvent) => {
    if (event.key === '/') {
      event.preventDefault()
      return input.current?.focus()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.hxrsh.in/api/dev')
      setData(await response.json())
    }

    fetchData()

    window.addEventListener('keypress', focus)
    return () => window.removeEventListener('keypress', focus)
  }, [])

  return (
    <>
      {data ? (
        <div className={styles.info}>
          <div className={styles.box}>
            <FiEye />
            <p>{data.views.toLocaleString()} views</p>
          </div>
          <div className={styles.box}>
            <FiUser />
            <p>{data.followers.toLocaleString()} followers</p>
          </div>
        </div>
      ) : (
        <div
          className={styles.loading}
          aria-busy='true'
          aria-live='polite'
        ></div>
      )}
      <div className={styles.input}>
        <FiSearch fontSize={18} />
        <input
          placeholder='Search posts...'
          onChange={(e) => setInput(e.currentTarget.value)}
          ref={input}
        />
        <kbd className={styles.shortcut}>/</kbd>
      </div>
    </>
  )
}
