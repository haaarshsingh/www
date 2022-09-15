import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as F from '@lib/fetchers'
import * as A from '@anims/index'
import { MusicData } from '@pages/music'

const Row: FC<{
  artist?: F.SpotifyArtist
  track?: F.SpotifyTrack
  active: boolean
  index: number
  setIndex: Dispatch<SetStateAction<number>>
}> = ({ artist, track, active, index, setIndex }) => {
  return (
    <motion.a
      href={artist?.url || track?.url}
      rel='noreferrer'
      target='_blank'
      className={`flex items-center justify-between py-5 ${
        index !== 9 && index !== 19
          ? 'border-b-gray-700 border-b-solid border-b'
          : ''
      }`}
      variants={A.Fade}
      onMouseMove={() => setIndex(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <h2
        className='text-white text-base font-medium w-1/3 text-ellipsis overflow-hidden whitespace-nowrap transition-colors'
        style={{
          color: active ? '#FFFFFF' : '#444444',
        }}
      >
        {artist?.name || track?.title}
      </h2>
      <p
        className='text-base transition-colors w-2/3 text-ellipsis overflow-hidden whitespace-nowrap text-right'
        style={{
          color: active ? '#6E6E6E' : '#444444',
        }}
      >
        {artist?.followers
          ? `${artist?.followers.toLocaleString()} followers`
          : track?.artist}
      </p>
    </motion.a>
  )
}

const SpotifyComponents: FC<{ data: MusicData[] }> = ({ data }) => {
  const [index, setIndex] = useState(-1)

  useEffect(() => console.log(index), [index, setIndex])

  return (
    <motion.div
      variants={A.FastFadeContainer}
      initial='hidden'
      animate='visible'
      className='mt-16'
    >
      {data.map((row, i) => (
        <div
          className='w-full flex border-t-gray-700 border-t-solid border-t'
          key={i}
        >
          <motion.h2
            className='hidden sm:block mt-5 text-lg mr-16 ml-4 text-gray-600 w-fit'
            variants={A.Fade}
          >
            {row.category}
          </motion.h2>
          <div className='flex flex-col w-full'>
            {row.data.map((column, idx) => (
              <Row
                key={idx}
                artist={
                  row.category === 'Artists'
                    ? (column as F.SpotifyArtist)
                    : undefined
                }
                track={
                  row.category === 'Tracks'
                    ? (column as F.SpotifyTrack)
                    : undefined
                }
                index={row.category === 'Artists' ? 10 + idx : idx}
                active={
                  (row.category === 'Artists'
                    ? index === 10 + idx
                    : index === idx) || index === -1
                }
                setIndex={setIndex}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

const MusicComponent: FC<{ data: MusicData[] }> = ({ data }) => {
  return (
    <motion.div
      className='mt-12 flex flex-col'
      variants={A.FastFadeContainer}
      initial='hidden'
      animate='visible'
    >
      <div className='mb-12'>
        <motion.h1 className='!text-2xl' variants={A.Fade}>
          Music
        </motion.h1>
        <motion.p variants={A.Fade} className='my-4'>
          Mostly Punjabi and occasionally some Hindi rap/pop music.{' '}
          <a
            href='https://open.spotify.com/playlist/7jJcKVKHVXzBdpkrQfXvbl'
            rel='noreferrer'
            target='_blank'
          >
            Chillisthan
          </a>{' '}
          is my current playlist of songs curated over the years. These
          statistics are fetched periodically from{' '}
          <a
            href='https://open.spotify.com/user/j5v1f8np0j8zgjp2omt9ejm52'
            rel='noreferrer'
            target='_blank'
          >
            Spotify
          </a>
          .
        </motion.p>
        <SpotifyComponents data={data} />
      </div>
    </motion.div>
  )
}

export default MusicComponent
