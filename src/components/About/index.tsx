'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from '@css/about.module.css'
import { FiMapPin } from 'react-icons/fi'
import Image from 'next/image'
import Section from './Section'
import * as data from './data'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
}

const About: FC = () => {
  return (
    <div>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className={styles.container}
      >
        <motion.div
          className={styles.image}
          variants={{
            hidden: { y: -50, opacity: 0, rotateZ: 0 },
            visible: {
              y: 0,
              opacity: 1,
              rotateZ: -3,
              zIndex: 1,
            },
          }}
        >
          <Image
            src='/headshot-crop.jpg'
            alt='My face'
            width={298.24}
            height={470.72}
          />
        </motion.div>
        <motion.div
          className={styles.image}
          variants={{
            hidden: { y: 50, opacity: 0, rotateZ: 0 },
            visible: {
              y: 0,
              opacity: 1,
              rotateZ: 3,
            },
          }}
        >
          <Image
            src='/dallas.jpg'
            alt='Skyshot of Dallas, Texas'
            width={510}
            height={391}
          />
        </motion.div>
      </motion.div>
      <Section content={data.about}>
        <h1 className={styles.title}>About</h1>
      </Section>
      <section className={styles.section}>
        <h2>Where</h2>
        <div className={styles.map_container}>
          <div className={styles.map}>
            <Image
              src='/map.jpg'
              alt='A map with a blue dot near Forney, Texas'
              fill={true}
              draggable={false}
              loading='lazy'
            />
          </div>
          <p className={styles.town}>
            <FiMapPin />
            <a
              href='https://en.wikipedia.org/wiki/Forney,_Texas'
              target='_blank'
              rel='noreferrer'
            >
              Forney, Texas
            </a>
          </p>
        </div>
      </section>
      <Section
        content={data.work}
        extend={{
          title: 'All Works',
          href: 'https://github.com/harshhhdev',
          newTab: true,
        }}
      >
        <h2 className={styles.title}>Select Work</h2>
      </Section>
      <Section
        content={data.writing}
        extend={{ title: 'All Writing', href: '/writing' }}
      >
        <h2 className={styles.title}>Select Writing</h2>
      </Section>
    </div>
  )
}

export default About
