import type { FC } from 'react'
import styles from '@css/slug.module.css'
import { allPosts } from 'contentlayer/generated'
allPosts.sort((a, b) => (a.published < b.published ? 1 : -1))

export type TOC = { toc: { value: string; url: string; depth: number }[] }

const Footer: FC<{ index: number }> = ({ index }) => {
  const previous = index - 1 >= 0 ? allPosts[index - 1] : null
  const next = index + 1 >= 0 ? allPosts[index + 1] : null

  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.controls}>
        {previous ? (
          <a href={previous.slug} className={styles.previous}>
            <p>Previous</p>
            <p>{previous.title}</p>
          </a>
        ) : (
          <div aria-hidden />
        )}
        {next ? (
          <a href={next.slug} className={styles.next}>
            <p>Next</p>
            <p>{next.title}</p>
          </a>
        ) : (
          <div aria-hidden />
        )}
      </div>
    </footer>
  )
}

export default Footer
