export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'my-first-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  gtm: {
    id: 'GTM-XXXXXXX'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm',
    '@nuxtjs/device',
    '@nuxtjs/sitemap',
  ],

  styleResources: {
    scss: [
      './assets/css/*.scss',
    ]
  },

  svgSprite: {
    input: '~/assets/images/sprites/'
  },

  loading: {
    color: 'blue',
    height: '5px'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },

  buildDir: 'build',
  generate: {
    dir: 'build'
  },

  srcDir: 'src/',

  dir: {
    assets: 'assets',
    app: 'app',
    layouts: 'templates',
    middleware: 'middleware',
    pages: 'pages',
    static: 'static',
    store: 'data'
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'src/pages/404.vue')
      })
    },
    linkActiveClass: 'active-parent',
    linkExactActiveClass: 'active'
  }
}
