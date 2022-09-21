import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Fade, FastFadeContainer } from '@anims/index'
import { MusicData } from '@pages/music'
import * as F from '@lib/fetchers'
import * as S from './Music.style'

const Row: FC<{
  artist?: F.SpotifyArtist
  track?: F.SpotifyTrack
  active: boolean
  index: number
  setIndex: Dispatch<SetStateAction<number>>
}> = ({ artist, track, active, index, setIndex }) => {
  return (
    <S.Row
      href={artist?.url || track?.url}
      rel='noreferrer'
      target='_blank'
      inactive={index !== 9 && index !== 19}
      variants={Fade}
      onMouseMove={() => setIndex(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <S.Content active={active}>{artist?.name || track?.title}</S.Content>
      <S.Content activeLight={active} info>
        {artist?.followers
          ? `${artist?.followers.toLocaleString()} followers`
          : track?.artist}
      </S.Content>
    </S.Row>
  )
}

const SpotifyComponents: FC<{ data: MusicData[] }> = ({ data }) => {
  const [index, setIndex] = useState(-1)

  useEffect(() => console.log(index), [index, setIndex])

  return (
    <S.Container
      variants={FastFadeContainer}
      initial='hidden'
      animate='visible'
    >
      {data.map((row, i) => (
        <S.Category key={i}>
          <S.Header variants={Fade}>{row.category}</S.Header>
          <S.RowWrapper>
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
          </S.RowWrapper>
        </S.Category>
      ))}
    </S.Container>
  )
}

const MusicComponent: FC<{ data: MusicData[] }> = ({ data }) => {
  return (
    <S.Wrapper variants={FastFadeContainer} initial='hidden' animate='visible'>
      <motion.h1 variants={Fade}>Music</motion.h1>
      <motion.p variants={Fade}>
        Mostly Punjabi and occasionally some Hindi rap/pop music.{' '}
        <a
          href='https://open.spotify.com/playlist/7jJcKVKHVXzBdpkrQfXvbl'
          rel='noreferrer'
          target='_blank'
        >
          Chillisthan
        </a>{' '}
        is my current playlist of songs curated over the years. These statistics
        are fetched periodically from{' '}
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
    </S.Wrapper>
  )
}

export default MusicComponent
