export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rotech Automation',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Rotech Automation | More technology for the future' },
      { hid: 'description', name: 'description', content: 'Firmamız robotik, görüntü işleme, yapay zeka, özel makine üretimi, otomasyon ve yazılım alanında hizmet vermektedir.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Rotech Automation | More technology for the future' },
      { hid: 'og-desc', property: 'og:description', content: 'Firmamız robotik, görüntü işleme, yapay zeka, özel makine üretimi, otomasyon ve yazılım alanında hizmet vermektedir.' },
      { hid: 'og-image', property: 'og:image', content: 'https://www.rotechautomation.com.tr/logo.jpg' },
      { hid: 'og-url', property: 'og:url', content: 'https://www.rotechautomation.com.tr' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/variables/color.css',
    '@/assets/variables/font.css',
    '@/assets/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  /*
  styleResources: {
    scss: './assets/variables/*.scss',
  },
  */

  bootstrapVue: {
    icons: true
  },
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
