'use client'

import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from '@css/about.module.css'
import { FiMapPin, FiMinus, FiPlus } from 'react-icons/fi'
import Image from 'next/image'
import Section from './Section'
import * as data from './data'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGFyc2hoaGRldiIsImEiOiJjbGY1M3ZoczEwM3lnM3ZwZG90Y2Jxcm9hIn0.4ZfuJo8WNw2Wn6dxsud2JA'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
}

// Not my actual location, obviously
const center: mapboxgl.LngLatLike = [-96.438055, 32.782434]

const About: FC = () => {
  const [zoom, setZoom] = useState(11)
  const [map, setMap] = useState<mapboxgl.Map | null>(null)

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/harshhhdev/clf6is4qj000501mn4j04t7l3',
        center: center,
        zoom: 11,
      })
    )
  }, [])

  return (
    <div className={styles.box}>
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
            <div className={styles.marker} />
            <div className={styles.buttons}>
              <motion.button
                onClick={() => {
                  map?.flyTo({ zoom: zoom === 11 ? 7 : 4 })
                  setZoom((z) => z - 4)
                }}
                aria-label='zoom out'
                initial={{ scale: 0 }}
                animate={{ scale: zoom === 3 ? 0 : 1 }}
              >
                <FiMinus />
              </motion.button>
              <motion.button
                onClick={() => {
                  map?.flyTo({ zoom: zoom === 7 ? 11 : 7 })
                  setZoom((z) => z + 4)
                }}
                aria-label='zoom in'
                initial={{ scale: 0 }}
                animate={{ scale: zoom === 11 ? 0 : 1 }}
              >
                <FiPlus />
              </motion.button>
            </div>
            <div id='mapbox' className='light' />
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
