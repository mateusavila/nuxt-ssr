<template>
  <div class="about-page">
    <NewHero :data="page.acf.hero" />
    <GrowthBox :data="page.acf.growth" negative-margin="-60px"/>
    <HowWorksNew :data="page.acf.works" />
    <Topics :data="page.acf.request" />
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
export default {
  layout: 'page',
  mixins: [mixins],
  async asyncData ({ store, params, app, $config: { baseAPI, lang, defaultURL } }) {

    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)
    const language = await translate()
    if (!store.state.translate.loaded) {

      const homeResource = await app.$axios.$get(baseAPI + '/api/home', { mode: 'cors' })
      const home = await homeResource

      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', language)
      store.commit('translate/updateLoaded', true)
    }
    
    const pageResource = await app.$axios.$get(baseAPI + '/wp/v2/pages/?slug=como-funciona', { mode: 'cors' })
    const page = await pageResource[0]

    return { 
      page,
      translate: language
    }
  },
  data () {
    return {
      page: {},
      translate: {}
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'

</style>