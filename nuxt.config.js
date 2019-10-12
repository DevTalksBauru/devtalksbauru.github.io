module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'DevTalks Bauru',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Developers Community from Bauru Brazil' },
      { name: 'theme-color', content: '#212020' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:title', content: 'DevTalks Bauru' },
      { property: 'og:description', content: 'Developers Community from Bauru Brazil' },
      { property: 'og:site_name', content: 'DevTalks Bauru' },
      { property: 'og:url', content: 'https://devtalksbauru.github.io' },
      { property: 'og:image', content: '/android-chrome-512x512.png' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:title', content: 'DevTalks Bauru' },
      { name: 'twitter:site', content: '@devtalksbauru' },
      { name: 'keywords', content: 'development, talks, speakers, bauru, devtalks' },
      { name: 'author', content: 'DevTalks Bauru' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#212020' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Anton|Open+Sans+Condensed:300' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F5623D' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const vueLoader = config.module.rules.find((loader) => loader.loader === 'vue-loader')
      vueLoader.options.transformToRequire = {
        video: 'src',
        source: 'src'
      }
    }
  },
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/disqus'
  ]
}
