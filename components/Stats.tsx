import { FC } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import * as F from '@lib/fetchers'
import * as A from '@anims/index'
import Image from 'next/image'

const Track: FC<{ track: F.SpotifyTrack }> = ({ track }) => {
  return (
    <Link href={track.url} passHref>
      <a
        href={track.url}
        className='bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5'
        rel='noreferrer'
        target='_blank'
      >
        <h2 className='text-lg text-gray-900 dark:text-white font-bold'>
          {track.title}
        </h2>
        <p>{track.artist}</p>
      </a>
    </Link>
  )
}

const Artist: FC<{ artist: F.SpotifyArtist }> = ({ artist }) => {
  return (
    <Link href={artist.url} passHref>
      <a
        className='bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 flex p-5 border border-gray-200 dark:border-gray-700'
        rel='noreferrer'
        target='_blank'
      >
        <div className='w-20 h-20 rounded-full relative overflow-hidden'>
          <Image
            src={artist.pic.url}
            alt={artist.name}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='ml-5 flex flex-col justify-center items-start'>
          <h2 className='text-xl text-gray-900 dark:text-white font-bold'>
            {artist.name}
          </h2>
          <p className='text-base'>
            {artist.followers.toLocaleString()} followers
          </p>
        </div>
      </a>
    </Link>
  )
}

const Tracks = () => {
  const { data } = useSWR('/api/stats/tracks', F.trackFetcher)
  const { t } = useTranslation('common')

  return (
    <Music
      data={data!}
      title={t('musicHeader')}
      description={t('musicBio')}
      tracks={true}
    />
  )
}

const Artists = () => {
  const { data } = useSWR('/api/stats/artists', F.artistFetcher)
  const { t } = useTranslation('common')

  return (
    <Music
      data={data!}
      title={t('artistHeader')}
      description={t('artistBio')}
      tracks={false}
    />
  )
}

const Music: FC<{
  data: F.SpotifyTrack[] | F.SpotifyArtist[]
  title: string
  description: string
  tracks: boolean
}> = ({ data, title, description, tracks }) => {
  return (
    <motion.div
      className='mt-24 flex flex-col'
      variants={A.FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <motion.h1 variants={A.Fade}>{title}</motion.h1>
      <motion.p className='text-lg mt-1' variants={A.Fade}>
        {description}
      </motion.p>
      <motion.div
        className='mt-10 flex flex-col overflow-hidden rounded'
        variants={A.Fade}
      >
        {tracks
          ? // @ts-ignore
            data?.tracks?.map((track, index) => (
              <Track key={index} track={track} />
            )) // @ts-ignore
          : data?.artists?.map((artist, index) => (
              <Artist key={index} artist={artist} />
            ))}
      </motion.div>
    </motion.div>
  )
}

const Statistic: FC<{ title: string; value: string }> = ({ title, value }) => {
  return (
    <motion.div
      className='bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 flex flex-col justify-center p-7 rounded select-none border border-gray-200 dark:border-gray-700'
      variants={A.Fade}
    >
      <p className='text-base'>{title}</p>
      <h1 className='mt-2'>{value}</h1>
    </motion.div>
  )
}

const Stats: FC = () => {
  const { data: dev } = useSWR('/api/stats/dev', F.devFetcher)

  const stats = [
    {
      title: 'Blog Followers',
      value: dev?.followers!.toLocaleString()!,
    },
    {
      title: 'Blog Reactions',
      value: dev?.likes!.toLocaleString()!,
    },
    {
      title: 'Blog Views',
      value: dev?.views!.toLocaleString()!,
    },
    {
      title: 'Blog Comments',
      value: dev?.comments!.toLocaleString()!,
    },
  ]

  return (
    <div>
      <motion.div
        className='grid grid-rows-auto sm:grid-cols-2 gap-10'
        variants={A.FadeContainer}
        initial='hidden'
        animate='visible'
      >
        {stats.map((stat, index) => (
          <Statistic
            title={stat.title}
            value={stat.value === undefined ? '...' : stat.value}
            key={index}
          />
        ))}
      </motion.div>
      <Tracks />
      <Artists />
    </div>
  )
}

export default Stats
