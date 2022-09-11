import { Dispatch, FC, SetStateAction, useState } from 'react'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import * as F from '@lib/fetchers'
import * as A from '@anims/index'

const Track: FC<{
  track: F.SpotifyTrack
  active: boolean
  index: number
  setIndex: Dispatch<SetStateAction<number>>
}> = ({ track, active, index, setIndex }) => {
  return (
    <motion.a
      href={track.url}
      rel='noreferrer'
      target='_blank'
      className={`flex items-center justify-between py-5 ${
        index !== 9 ? 'border-b-gray-700 border-b-solid border-b' : ''
      }`}
      variants={A.Fade}
      onMouseMove={() => setIndex(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <h2
        className='text-gray-900 dark:text-white text-base font-medium w-1/3 text-ellipsis overflow-hidden whitespace-nowrap transition-colors'
        style={{
          color: active ? '#FFFFFF' : '#444444',
        }}
      >
        {track.title}
      </h2>
      <p
        className='text-base transition-colors w-2/3 text-ellipsis overflow-hidden whitespace-nowrap text-right'
        style={{ color: active ? '#6E6E6E' : '#444444' }}
      >
        {track.artist}
      </p>
    </motion.a>
  )
}

const Artist: FC<{
  artist: F.SpotifyArtist
  active: boolean
  index: number
  setIndex: Dispatch<SetStateAction<number>>
}> = ({ artist, active, index, setIndex }) => {
  return (
    <motion.a
      href={artist.url}
      rel='noreferrer'
      target='_blank'
      className={`flex items-center justify-between py-5 ${
        index !== 9 ? 'border-b-gray-700 border-b-solid border-b' : ''
      }`}
      variants={A.Fade}
      onMouseMove={() => setIndex(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <h2
        className='text-gray-900 dark:text-white text-base font-medium w-1/3 text-ellipsis overflow-hidden whitespace-nowrap transition-colors'
        style={{
          color: active ? '#FFFFFF' : '#444444',
        }}
      >
        {artist.name}
      </h2>
      <p
        className='text-base transition-colors w-2/3 text-ellipsis overflow-hidden whitespace-nowrap text-right'
        style={{
          color: active ? '#6E6E6E' : '#444444',
        }}
      >
        {artist.followers.toLocaleString()} followers
      </p>
    </motion.a>
  )
}

const SpotifyComponents = () => {
  const { data: tracksData } = useSWR('/api/stats/tracks', F.trackFetcher)
  const { data: artistsData } = useSWR('/api/stats/artists', F.artistFetcher)

  if (!tracksData || !artistsData) return null

  return (
    <motion.div
      variants={A.FastFadeContainer}
      initial='hidden'
      animate='visible'
      className='mt-16'
    >
      <Music data={tracksData!} tracks={true} />
      <Music data={artistsData!} tracks={false} />
    </motion.div>
  )
}

const Music: FC<{
  data: F.SpotifyTrack[] | F.SpotifyArtist[]
  tracks: boolean
}> = ({ data, tracks }) => {
  const [index, setIndex] = useState(-1)

  return (
    <div className='w-full flex border-t-gray-700 border-t-solid border-t'>
      <motion.h2
        className='mt-5 text-lg mr-16 ml-4 text-gray-600 w-fit'
        variants={A.Fade}
      >
        {tracks ? 'Tracks' : 'Artists'}
      </motion.h2>
      <div className='flex flex-col w-full'>
        {tracks
          ? // @ts-ignore
            data?.tracks?.map((track, i) => (
              <Track
                key={i}
                track={track}
                active={index === i || index === -1}
                index={i}
                setIndex={setIndex}
              />
            )) // @ts-ignore
          : data?.artists?.map((artist, i) => (
              <Artist
                key={i}
                artist={artist}
                active={index === i || index === -1}
                index={i}
                setIndex={setIndex}
              />
            ))}
      </div>
    </div>
  )
}

const MusicComponent: FC = () => {
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
          <i>Music is my safe kind-of high.</i> Follow me on{' '}
          <a
            href='https://open.spotify.com/user/j5v1f8np0j8zgjp2omt9ejm52'
            rel='noreferrer'
            target='_blank'
          >
            Spotify
          </a>{' '}
          to listen to some music together.
        </motion.p>
        <SpotifyComponents />
      </div>
    </motion.div>
  )
}

export default MusicComponent
