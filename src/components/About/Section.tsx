import { FC, ReactNode } from 'react'
import styles from '@css/about.module.css'
import clsx from 'clsx'
import { FiArrowRight } from 'react-icons/fi'

export type Content = {
  title: string
  content: string
  href?: string
  newTab?: boolean
}

type Extend = {
  title: string
  href: string
  newTab?: boolean
}

const Section: FC<{
  children: ReactNode
  content: Array<Content>
  extend?: Extend
}> = ({ children, content, extend }) => {
  return (
    <section className={styles.section}>
      {children}
      <div className={styles.content}>
        {content.map((item, index) => (
          <Content {...item} key={index} />
        ))}
        {extend && (
          <a
            className={styles.extend}
            href={extend.href}
            target={extend.newTab ? '_blank' : '_self'}
            rel='noreferrer'
          >
            {extend.title}
            <FiArrowRight />
          </a>
        )}
      </div>
    </section>
  )
}

const Content: FC<Content> = ({ title, href, content }) => (
  <div className={clsx(!href && styles.extra_margin, styles.wrapper)}>
    <a
      href={href}
      target={href?.startsWith('/') ? '_self' : '_blank'}
      rel='noreferrer'
    >
      <h3 className={styles.title}>{title}</h3>
    </a>
    <p>{content}</p>
  </div>
)

export default Section
