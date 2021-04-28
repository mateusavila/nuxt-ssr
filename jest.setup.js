// import Vue from 'vue'

// // import Vuetify from 'vuetify'
// import { config } from '@vue/test-utils'

// Vue.config.silent = true

// // Vue.config.ignoredElements = ['nuxt-link']
// // Mock Nuxt components
// config.stubs.nuxt = { template: '<div />' }
// config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }
// config.stubs['no-ssr'] = { template: '<span><slot /></span>' }

import { Nuxt, Builder } from "nuxt"
import nuxtConfig from "./nuxt.config"

const resetConfig = {
  loading: false,
  loadingIndicator: false,
  fetch: {
    client: false,
    server: false
  },
  features: {
    store: true,
    layouts: false,
    meta: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: false,
    componentAliases: false,
    componentClientOnly: false
  },
  build: {
    indicator: false,
    terser: false
  }
}

const config = Object.assign({}, nuxtConfig, resetConfig, {
  mode: "spa",
  srcDir: nuxtConfig.srcDir,
  ignore: ["**/components/**/*", "**/layouts/**/*", "**/pages/**/*"]
})

const buildNuxt = async () => {
  const nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  return nuxt
}

module.exports = async () => {
  const nuxt = await buildNuxt()

  process.env.buildDir = nuxt.options.buildDir
}