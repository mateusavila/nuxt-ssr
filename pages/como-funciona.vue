<template>
  <div class="about-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <NewHero :data="page.acf.hero" />
    <div class="content-visibility">
      <LazyHowWorksNew :data="page.acf.works" />
      <LazyTopics :data="page.acf.request" />
    </div>
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
import { fetchResource } from '~/helpers/factory'
export default {
  layout: 'page',
  mixins: [mixins],
  async asyncData ({ store, app, $config: { baseAPI, lang } }) {
    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)
    if (!store.state.translate.loaded) {
      const home = await fetchResource(`${baseAPI}/api/home`)
      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', await translate())
      store.commit('translate/updateLoaded', true)
    }
    let page = await fetchResource(`${baseAPI}/wp/v2/pages/?slug=como-funciona`)
    page = page[0]
    page.yoast_meta.map(el => {
      if(el.property !== 'og:url') {
        app.head.meta.push({
          hid: el.name ? el.name : el.property,
          name: el.name ? el.name : el.property,
          content: el.content,
        })
      } 
    })
    return { 
      page,
      translate: await translate()
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