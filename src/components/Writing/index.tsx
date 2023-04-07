'use client'

import type { FC } from 'react'
import { format } from 'date-fns'
import styles from '@css/writing.module.css'
import { allPosts, Post } from 'contentlayer/generated'
import useSWR, { SWRConfiguration, Fetcher } from 'swr'
import { FiEye, FiUser } from 'react-icons/fi'
import Link from 'next/link'
allPosts.sort((a, b) => (a.published < b.published ? 1 : -1))

type Dev = { followers: number; views: number }
const config: SWRConfiguration = {
  fallbackData: { followers: 1386, views: 121340 },
  revalidateOnMount: false,
}

const fetcher: Fetcher<Dev> = (input: RequestInfo | URL) =>
  fetch(input).then((res) => res.json())

const Posts: FC = () => (
  <div className={styles.posts}>
    {allPosts.map((post, index) => (
      <Post {...post} key={index} />
    ))}
  </div>
)

const Post: FC<Post> = (props) => (
  <Link className={styles.post} href={props.slug}>
    <h2>{props.title}</h2>
    <p>{format(new Date(props.published), 'dd/MM')}</p>
  </Link>
)

const Writing: FC = () => {
  const { data } = useSWR<Dev>('/api/dev', fetcher, config)

  return (
    <div className={styles.container}>
      <div className={styles.writing}>
        <div>
          <h1>Writing</h1>
          <p>Learning things, and then teaching others.</p>
          {data ? (
            <div className={styles.info}>
              <div className={styles.box}>
                <FiEye />
                <p>{data.views.toLocaleString()} views</p>
              </div>
              <div className={styles.box}>
                <FiUser />
                <p>{data.followers.toLocaleString()} subscribers</p>
              </div>
            </div>
          ) : (
            <div
              className={styles.loading}
              aria-busy='true'
              aria-live='polite'
            />
          )}
        </div>
        <form className={styles.form}>
          <div>
            <input
              placeholder='hi.harsh@proton.me'
              type='email'
              spellCheck={false}
            />
            <button>Subscribe</button>
          </div>
          <p>Be notified of new posts. No spam.</p>
        </form>
      </div>
      <Posts />
    </div>
  )
}

export default Writing
