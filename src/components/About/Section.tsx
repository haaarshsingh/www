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
          <div
            key={index}
            className={clsx(!item.href && styles.extra_margin, styles.wrapper)}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.newTab ? '_blank' : '_self'}
                rel='noreferrer'
              >
                {item.title}
              </a>
            ) : (
              <h3>{item.title}</h3>
            )}
            <p>{item.content}</p>
          </div>
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

export default Section
