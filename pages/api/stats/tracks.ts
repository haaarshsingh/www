import type { NextApiRequest, NextApiResponse } from 'next'
import { topTracks, SpotifyTrack } from '@lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await topTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 5).map((track: SpotifyTrack) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    url: track.external_urls.spotify,
    title: track.name,
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ tracks })
}

export const config = {
  runtime: 'experimental-edge',
}
