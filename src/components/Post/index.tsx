import type { FC } from 'react'
import styles from '@css/slug.module.css'
import { Layout } from '@components/Layout'
import Footer from './Footer'
import Header from './Header'
import TOC from './TOC'
import MDX from '@components/MDX'
import { Post } from 'contentlayer/generated'
import clsx from 'clsx'

const Post: FC<{ index: number; className: string } & Post> = (post) => (
  <Layout>
    <div className={clsx(styles.box, post.className)}>
      <article className={styles.section}>
        <Header {...post} />
        <div className={styles.blog}>
          <MDX code={post.body.code} />
        </div>
      </article>
      <TOC {...post} />
    </div>
    <Footer index={post.index} />
  </Layout>
)

export default Post
