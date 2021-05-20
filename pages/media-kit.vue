<template>
  <div class="media-kit-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <div class="container">
      <div class="media-kit-navigation">
        <MediaKitNavigation />
      </div>
      <div class="media-kit-content">
        <MediaKitHero :data="mediakit.acf.hero" />
        <MediaKitIntro :data="mediakit.acf.intro" />
        <MediaKitClients :data="mediakit.acf.new_economy" />
        <MediaKitOurLogo :data="mediakit.acf.our_logo" />
        <MediaKitColors :data="mediakit.acf.colors" />
        <MediaKitTypography :data="mediakit.acf.typography" />
        <MediaKitDownload :data="mediakit.acf.downloads" />
      </div>
    </div>

  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
// eu botei estes componentes numa pasta, por isto que eles são chamados aqui.
const MediaKitHero = () => import('~/components/mediakit/MediaKitHero.vue')
const MediaKitNavigation = () => import('~/components/mediakit/MediaKitNavigation.vue')
const MediaKitIntro = () => import('~/components/mediakit/MediaKitIntro.vue')
const MediaKitClients = () => import('~/components/mediakit/MediaKitClients.vue')
const MediaKitOurLogo = () => import('~/components/mediakit/MediaKitOurLogo.vue')
const MediaKitTypography = () => import('~/components/mediakit/MediaKitTypography.vue')
const MediaKitDownload = () => import('~/components/mediakit/MediaKitDownload.vue')
const MediaKitColors = () => import('~/components/mediakit/MediaKitColors.vue')
export default {
  layout: 'partners',
  components: {
    MediaKitDownload, MediaKitTypography, MediaKitClients, MediaKitIntro, MediaKitNavigation, MediaKitHero, MediaKitColors, MediaKitOurLogo
  },
  mixins: [mixins],
  async asyncData ({ store, app, $config: { baseAPI, lang, defaultURL } }) {
    // await store.dispatch('page/loadPage', { baseAPI, lang, defaultURL })
    // await store.dispatch('mediakit/loadPage', { baseAPI, lang, defaultURL, slug: 'integracao-media-kit' })
    require('isomorphic-fetch')
    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)
    const language = await translate()
    if (!store.state.translate.loaded) {
      let home
      await fetch(baseAPI + '/api/home', { mode: 'cors' })
      .then(response => response.json())
      .then(response => {
        home = response
      })

      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', language)
      store.commit('translate/updateLoaded', true)
    }
    let mediakit
    await fetch(baseAPI + '/wp/v2/pages/?slug=integracao-media-kit', { mode: 'cors' })
    .then(response => response.json())
    .then(response => {
      mediakit = response[0]
    })
    mediakit.yoast_meta.map(el => {
      if(el.property !== 'og:url') {
        app.head.meta.push({
          hid: el.name ? el.name : el.property,
          name: el.name ? el.name : el.property,
          content: el.content,
        })
      } 
    })
    return { 
      mediakit,
      translate: language
    }
  },
  data () {
    return {
      mediakit: {},
      translate: {}
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.media-kit-page
  padding-top 150px
  min-height 100vh
  .container
    width calc(100% - 64px)
    max-width 1200px
    margin 0 auto
    display flex
    align-items flex-start
    flex-wrap wrap
    justify-content space-between
.media-kit-navigation
  width 188px
.media-kit-content
  width calc(100% - 250px)
@media all and (max-width: 1250px)
  .media-kit-page
    .container
      width calc(100% - 40px)
@media all and (max-width: 1100px)
  .media-kit-content
    width 100%
@media all and (max-width: 600px)
  .media-kit-page
    .container
      width calc(100% - 20px)
</style>
