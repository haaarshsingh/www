export type SpotifyTrack = {
  name: string
  artists: { name: string }[]
  external_urls: { spotify: string }
}

export type SpotifyArtist = {
  name: string
  images: { url: string }[]
  external_urls: { spotify: string }
  followers: { total: number }
}

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const topTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(
    'https://api.spotify.com/v1/me/top/tracks?time_range=short_term',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )
}

export const topArtists = async () => {
  const { access_token } = await getAccessToken()

  return fetch(
    'https://api.spotify.com/v1/me/top/artists?time_range=short_term',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )
}
