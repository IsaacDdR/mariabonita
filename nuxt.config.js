export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Maria Bonita WP',
    meta: [
      { name: 'theme-color', content: '#dba4a2' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Creamos una experiencia inolvidable para tus eventos',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        media: 'all',
        href: 'https://fonts.googleapis.com/css2?family=Poiret+One&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  server: {
    host: '0',
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/aos.client'],

  fontawesome: {
    icons: {
      solid: ['faPhone', 'faChevronDown', 'faGlassCheers'],
      brands: ['faFacebook', 'faInstagram', 'faGoogle', 'faWhatsapp'],
    },
  },

  googleFonts: {
    families: {
      'Poiret+one': true,
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    'nuxt-vite',
    '@nuxtjs/fontawesome',
    '@nuxt/image',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  router: {
    base: '/mariabonita/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss: true,
  },
}
