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
  productionBrowserSourceMaps: true,
})

module.exports = nextConfig
