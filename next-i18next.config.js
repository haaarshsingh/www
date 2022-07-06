const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hn', 'de', 'fr', 'sr'],
    localePath: path.resolve('./public/locales'),
  },
}
