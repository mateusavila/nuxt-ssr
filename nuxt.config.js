console.log("process env", process.env.BASE_API);

const envs = {
  development: ".env.development",
  mx: ".env.mx"
};
export default {
  // router: {
  //   base: '/MX/'
  // },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "a55",
    htmlAttrs: {
      lang: "pt-BR"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Nosso financiamento empresarial se adapta a seus resultados mensais recorrentes. Acelere o crescimento da sua empresa com a a55."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preload",
        href:
          "//fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap",
        as: "style",
        crossorigin: "anonymous"
      },
      {
        rel: "preconnect",
        href: "//fonts.gstatic.com",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap",
        crossorigin: "anonymous"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "theme-color", name: "theme-color", content: "#ffffff" }
    ]
  },
  // server: {
  //   host: '127.0.0.1',
  //   port: 3000
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  styleResources: {
    stylus: ["./assets/css/normalize.styl", "./assets/css/functions.styl"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/vuelidate.js", ssr: false },
    { src: "~plugins/vue-social-sharing.js", ssr: false },
    { src: "~plugins/vue-awesome-swiper.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/gtm",
      {
        id: "GTM-5862Z86"
      }
    ],
    ["nuxt-precompress"],
    ["@nuxtjs/html-minifier", { log: "once", logHtml: true }],
    //["@nuxtjs/localtunnel", { local_host: "local.institucional.a55.tech" }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: false,
  publicRuntimeConfig: {
    // baseAPI: process.env.BASE_API,d
    // lang: process.env.SITEA55_LANGUAGE
    baseAPI: "https://mx-wp.a55.tech/wp-json",
    lang: "es-mx",
    newsletterURL: "https://hubspot-manager-api-staging.a55.tech/v1/subscribe",
    newsletterList: 698,
    // Platform-Staging
    basePlatform: "https://auth-api-staging.a55.tech/api"

    // Platform-Production
    // basePlatform: "https://auth-api.a55.tech/api"
  }
};
