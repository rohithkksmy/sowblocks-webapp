require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Sow Blocks',
    description: 'The future of social media',
    head: {
      titleTemplate: 'Sow Blocks: %s',
      meta: [
        {name: 'description', content: 'The future of social media'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Sow Blocks'},
        {property: 'og:image', content: ''},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Sow Blocks'},
        {property: 'og:description', content: 'The future of social media'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '©sowblocks'},
        {property: 'og:creator', content: '©sowblocks'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
