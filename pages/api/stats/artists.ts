import type { NextApiRequest, NextApiResponse } from 'next'
import {
  SpotifyArtist,
  SpotifyTrack,
  topArtists,
  topTracks,
} from '@lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  return res.status(200).json({ tracksData, artistsData })
}

export const config = {
  runtime: 'experimental-edge',
}
