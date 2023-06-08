import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
export default withContentlayer({
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com',
        pathname: '/uploads/articles/**',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
  experimental: { appDir: true },
  headers: () => [{ source: '/(.*)', headers: securityHeaders }],
  rewrites: () => [
    { source: '/api/:path*', destination: 'https://api.hxrsh.in/api/:path*' },
  ],
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' }
    return config
  },
})

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    worker-src 'self' blob: ;
    connect-src *;
    font-src 'self';
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: 'https://api.hxrsh.in',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]
