import type { FC } from 'react'
import styles from '@css/slug.module.css'
import { Post } from 'contentlayer/generated'

export type TOC = { toc: { value: string; url: string; depth: number }[] }

const TOC: FC<Post> = ({ toc }) => {
  const depthToMargin = (depth: number) => {
    switch (depth) {
      case 2:
        return 10
      case 3:
        return 20
      case 4:
        return 30
    }
  }

  return (
    <div className={styles.toc}>
      <h2>Contents</h2>
      <nav>
        <ol>
          {(toc as TOC).toc.map((data, index) => (
            <li
              key={index}
              className={styles.list}
              style={{ marginLeft: depthToMargin(data.depth) }}
            >
              <a href={data.url}>{data.value}</a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default TOC
