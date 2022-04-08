const { i18n } = require('./next-i18next.config')
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer()({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'dev-to-uploads.s3.amazonaws.com',
      'i.scdn.co',
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hn'],
  },
})

module.exports = nextConfig
