'use client'

import Image from 'next/image'
import { FC } from 'react'
import styles from '@css/home.module.css'

const images = [
  {
    alt: 'Two rusty red bridges lined evenly on top of a large river',
    link: 'https://duckduckgo.com/?q=42%C2%B047%2732.5%22N+73%C2%B045%2743.9%22W&iaxm=maps',
  },
  {
    alt: 'A wall and a pillar with intricate designs and carvings',
    link: 'https://duckduckgo.com/?q=33.121198%2C+-96.679978&iaxm=maps',
  },
  {
    alt: 'A very large tower with a skydeck',
    link: 'https://duckduckgo.com/?q=tower+of+americas&iaxm=places',
  },
  {
    alt: 'A creek flowing through a forest on a sunny autumn day',
    link: 'https://duckduckgo.com/?q=42.195097%2C+-74.062290&iaxm=maps',
  },
]

const Photos: FC = () => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <a
          href={image.link}
          target='_blank'
          rel='noreferrer'
          key={index}
          style={{ zIndex: index, marginTop: index % 2 === 0 ? -10 : 10 }}
          className='exclude'
        >
          <Image
            src={`/photos/@harshhhdev/${index + 1}.jpg`}
            width={265}
            height={325}
            alt={image.alt}
            draggable={false}
          />
        </a>
      ))}
    </div>
  )
}

export default Photos
