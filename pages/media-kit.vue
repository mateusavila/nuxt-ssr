<template>
  <div class="media-kit-page">
    <Loading :loading="loading" />
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
  async asyncData ({ store, $config: { baseAPI, lang, defaultURL } }) {
    await store.dispatch('page/loadPage', { baseAPI, lang, defaultURL })
    await store.dispatch('mediakit/loadPage', { baseAPI, lang, defaultURL, slug: 'integracao-media-kit' })
  },
  computed: {
    loading () { return this.$store.state.mediakit.loaded },
    options () { return this.$store.state.options.options },
    mediakit () { return this.$store.state.mediakit.mediakit },
    translate () { return this.$store.state.translate.translate }
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
    justify-content space-between
.media-kit-navigation
  width 188px
.media-kit-content
  width calc(100% - 250px)
@media all and (max-width: 1250px)
  .media-kit-page
    .container
      width calc(100% - 40px)
@media all and (max-width: 600px)
  .media-kit-page
    .container
      width calc(100% - 20px)
</style>