export type SpotifyTrack = {
  artist: string
  title: string
  url: string
}

export type SpotifyArtist = {
  name: string
  url: string
  pic: { url: string }
  followers: number
}

export const trackFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<SpotifyTrack[]> => {
  const res = await fetch(input, init)
  return res.json()
}

export const artistFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<SpotifyArtist[]> => {
  const res = await fetch(input, init)
  return res.json()
}

export const devFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<{
  followers: number
  likes: number
  views: number
  comments: number
}> => {
  const res = await fetch(input, init)
  return res.json()
}
