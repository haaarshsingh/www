import { FC, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { format } from 'date-fns'
import { Search, filter } from './Search'

type PostProps = any

const Post: FC<PostProps> = (blog) => {
  return (
    <a
      href={blog.url}
      className={styles.post}
      onMouseOver={blog.onHover}
      onMouseLeave={blog.onLeave}
    >
      <p>{blog.frontmatter.title}</p>
      <div className={styles.info}>
        <p className={styles.content}>
          {Math.round(blog.frontmatter.minutesRead.minutes)} minutes
          <span className={styles.separator}>•</span>
          {format(new Date(blog.frontmatter.published), 'dd/MM')}
        </p>
        <p className={styles.date}>
          {format(new Date(blog.frontmatter.published), 'dd/MM/yy')}
        </p>
      </div>
    </a>
  )
}

const Posts: FC<{ posts: MDXInstance<Record<string, any>>[] | undefined }> = ({
  posts,
}) => {
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
      {posts?.map((blog, index) => (
        <Post
          key={index}
          onHover={() => {
            setActive(index + 1)
            setHover(true)
          }}
          onLeave={() => {
            setHover(false)
          }}
          {...blog}
        />
      ))}
    </div>
  )
}

const Blog: FC<{ posts: MDXInstance<Record<string, any>>[] }> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState<
    MDXInstance<Record<string, any>>[] | undefined
  >(posts)
  const [input, setInput] = useState('')
  useEffect(() => setFilteredPosts(filter(posts, input)), [input, setInput])

  return (
    <>
      <Search setInput={setInput} />
      <Posts posts={filteredPosts} />
    </>
  )
}

export default Blog
