export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '1',
    titleTemplate: '%s - Projetos do Rodrigo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '@/assets/scripts/vendor/greensock-js/TweenLite.js' },
      { src: '@/assets/scripts/vendor/luego/Is.js' },
    ],
  },

  gtm: {
    id: 'GTM-XXXXXXX'
  },

  target: 'static',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/main.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/jsonld'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@/modules/dark-mode'
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
      '@/assets/styles/*.scss',
    ]
  },

  svgSprite: {
    input: '@/assets/images/sprites/'
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
  // generate: {
  //   routes: function() {
  //     return [
  //       '/projetos/projeto-01'
  //     ]
  //   }
  // },

  sitemap: {
    hostname: 'https://example.com',
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
    base: '/projetos-do-rodrigo/dist/',
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
