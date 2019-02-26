const pkg = require('./package')
// 配置文件

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: '最好的开始。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS//css配置
  */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/styles.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-notifications',
    '@/plugins/add-debug-info'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
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
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      //配置打包axios
    },
    vendor: ['axios']
  },
  /*中间件配置*/
  router: {
    middleware: 'auth'
  }
}
