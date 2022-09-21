import type { GetServerSideProps, NextPage } from 'next'
import Wrapper from '@components/Wrapper'
import Music from '@components/Music/Music'
import {
  SpotifyArtist,
  SpotifyTrack,
  topArtists,
  topTracks,
} from '@lib/spotify'
import * as F from '@lib/fetchers'

export type MusicData = {
  category: string
  data: F.SpotifyTrack[] | F.SpotifyArtist[]
}

const Dashboard: NextPage<{
  data: MusicData[]
}> = ({ data }) => {
  return (
    <Wrapper
      title='Music'
      description='The music I listen to, fetched periodically from Spotify.'
    >
      <Music data={data} />
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const tracks = await topTracks()
    const { items: tracksResponse } = await tracks.json()

    const artists = await topArtists()
    const { items: artistsResponse } = await artists.json()

    const artistsData = artistsResponse.map((artist: SpotifyArtist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
      pic: artist.images[1],
      followers: artist.followers.total,
    }))

    const tracksData = tracksResponse.map((track: SpotifyTrack) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      url: track.external_urls.spotify,
      title: track.name,
    }))

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=43200'
    )

    return {
      props: {
        data: [
          { category: 'Tracks', data: tracksData },
          { category: 'Artists', data: artistsData },
        ],
      },
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      data: undefined,
    },
  }
}

export default Dashboard
