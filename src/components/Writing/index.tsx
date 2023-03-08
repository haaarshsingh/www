'use client'

import { FC, useEffect, useState } from 'react'
import { format } from 'date-fns'
import styles from '@css/writing.module.css'
import { allPosts, Post } from 'contentlayer/generated'
import { FiEye, FiUser } from 'react-icons/fi'
allPosts.sort((a, b) => (a.published < b.published ? 1 : -1))

const Posts: FC = () => {
  return (
    <div className={styles.posts}>
      {allPosts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </div>
  )
}

const Post: FC<Post> = (props) => {
  return (
    <a className={styles.post} href={props.slug}>
      <h2>{props.title}</h2>
      <p>{format(new Date(props.published), 'dd/MM')}</p>
    </a>
  )
}

const Writing: FC = () => {
  const [data, setData] = useState<{
    followers: string
    views: string
  } | null>(null)

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
    <div className={styles.container}>
      <div className={styles.writing}>
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
          <div className={styles.loading} aria-busy='true' aria-live='polite' />
        )}
        <form className={styles.form}>
          <input placeholder='hi.harsh@proton.me' />
          <button>Subscribe</button>
          <p>Be notified of new posts. No spam.</p>
        </form>
      </div>
      <Posts />
    </div>
  )
}

export default Writing
