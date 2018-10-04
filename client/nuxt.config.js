const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
      { name: "msapplication-TileColor", content: "#2d88ef" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "shortcut icon", type: "image/vnd.microsoft.icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/vnd.microsoft.icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-touch-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-touch-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-touch-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-touch-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-touch-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-touch-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-touch-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "36x36", href: "/android-chrome-36x36.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/android-chrome-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "72x72", href: "/android-chrome-72x72.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/android-chrome-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "128x128", href: "/android-chrome-128x128.png" },
      { rel: "icon", type: "image/png", sizes: "144x144", href: "/android-chrome-144x144.png" },
      { rel: "icon", type: "image/png", sizes: "152x152", href: "/android-chrome-152x152.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "256x256", href: "/android-chrome-256x256.png" },
      { rel: "icon", type: "image/png", sizes: "384x384", href: "/android-chrome-384x384.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
      { rel: "icon", type: "image/png", sizes: "36x36", href: "/icon-36x36.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/icon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "72x72", href: "/icon-72x72.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/icon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "128x128", href: "/icon-128x128.png" },
      { rel: "icon", type: "image/png", sizes: "144x144", href: "/icon-144x144.png" },
      { rel: "icon", type: "image/png", sizes: "152x152", href: "/icon-152x152.png" },
      { rel: "icon", type: "image/png", sizes: "160x160", href: "/icon-160x160.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "196x196", href: "/icon-196x196.png" },
      { rel: "icon", type: "image/png", sizes: "256x256", href: "/icon-256x256.png" },
      { rel: "icon", type: "image/png", sizes: "384x384", href: "/icon-384x384.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/icon-512x512.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/icon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "24x24", href: "/icon-24x24.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/icon-32x32.png" },
      { rel: "manifest", href: "/manifest.json" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
