export {}

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN: string
    }
  }
}
