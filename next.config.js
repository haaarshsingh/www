const withImages = require('next-images')
module.exports = withImages({
  future: {
    webpack5: true,
  },
  images: {
    domains: ['cdn.dribbble.com'],
  },
  fileExtensions: ['png'],
  webpack(config, options) {
    return config
  },
})
