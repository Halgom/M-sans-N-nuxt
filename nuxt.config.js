export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'M sans N',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'title', content: 'M sans N' },
      { name: 'description', content: "L'association qui offre aux collégiens un espace de réflexion sur les questions liées à la sexualité et à la relation." },
      { name: 'theme-color', content: '#fff' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '#' },
      { property: 'og:title', content: 'M sans N' },
      { property: 'og:description', content: "L'association qui offre aux collégiens un espace de réflexion sur les questions liées à la sexualité et à la relation." },
      { property: 'og:image', content: '#' },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'M sans N' },
      { property: 'twitter:description', content: "L'association qui offre aux collégiens un espace de réflexion sur les questions liées à la sexualité et à la relation." },
      { property: 'twitter:image', content: '#' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/fav.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
