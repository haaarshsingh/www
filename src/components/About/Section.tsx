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
  id: string
  children: ReactNode
  content: Array<Content>
  extend?: Extend
}> = ({ id, children, content, extend }) => {
  return (
    <section className={styles.section} id={id}>
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
    {href ? (
      <a
        href={href}
        target={href?.startsWith('/') ? '_self' : '_blank'}
        rel='noreferrer'
      >
        <h2 className={styles.title}>{title}</h2>
      </a>
    ) : (
      <h2 className={styles.title}>{title}</h2>
    )}
    <p>{content}</p>
  </div>
)

export default Section
