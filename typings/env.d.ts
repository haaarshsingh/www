namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    DATABASE_URL: string
    SPOTIFY_CLIENT_ID: string
    SPOTIFY_CLIENT_SECRET: string
    SPOTIFY_REFRESH_TOKEN: string
    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string
    DEV_API: string
    SECRET: string
  }
}
