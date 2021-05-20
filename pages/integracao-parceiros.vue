<template>
  <div class="partners-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <HeroPartner :data="partners.acf.hero" />
    <Steps :list="partners.acf.steps" :title="translate.partners.steps" />
    <Analytics :data="partners.acf.analytics" />
    <MediaKit :data="partners.acf.media_kit" />
    <PartnersAPI :data="partners.acf.api" />
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
export default {
  layout: 'partners',
  mixins: [mixins],
  async asyncData ({ store, app, $config: { baseAPI, lang } }) {
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
    let partners
    await fetch(baseAPI + '/wp/v2/pages/?slug=integracao-parceiros', { mode: 'cors' })
    .then(response => response.json())
    .then(response => {
      partners = response[0]
    })

    partners.yoast_meta.map(el => {
      if(el.property !== 'og:url') {
        app.head.meta.push({
          hid: el.name ? el.name : el.property,
          name: el.name ? el.name : el.property,
          content: el.content,
        })
      }
    })
    return {
      partners,
      translate: language
    }
  },
  data () {
    return {
      partners: {}
    }
  }
}
</script>
