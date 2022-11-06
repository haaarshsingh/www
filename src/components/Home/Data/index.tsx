import type { FC } from 'react'
import s from '@css/modules/home.module.css'
import { FiArrowRight } from 'react-icons/fi/index'
import type { Data as DataType } from './data'

type DataProps = {
  data: DataType[]
  header: string
  href: string
  external?: boolean
}

export const Data: FC<DataProps> = ({ data, header, href, external }) => {
  return (
    <section className={s.content_container}>
      <h2>Select {header}</h2>
      {data.map(({ year, content }, index) => (
        <div className={s.content} key={index}>
          <p>{year}</p>
          <div>
            {content.map((c, i) => (
              <div key={i} className={s.box}>
                <a
                  href={c.href}
                  target={external ? '_blank' : '_self'}
                  rel='noreferrer'
                >
                  <h3>{c.name}</h3>
                </a>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <a
        href={href}
        target={external ? '_blank' : '_self'}
        rel='noreferrer'
        className={s.all}
      >
        All {header}
        <FiArrowRight />
      </a>
    </section>
  )
}
