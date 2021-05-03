<template>
  <div class="faq-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <NewHero :data="page.acf.hero" />
    <GrowthBox :data="page.acf.growth" negative-margin="-60px"/>
    <div class="content-visibility">
      <LazyFaqFilter @search="search" />
      <LazyFaqCategories :list="categories" />
      <LazyFaqList :list="faq" :mobile-list="faq" title="Sobre a a55" />
    </div>
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
export default {
  layout: 'faq',
  mixins: [mixins],
  async asyncData ({ store, params, app, $config: { baseAPI, lang } }) {

    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)
    const language = await translate()
    if (!store.state.translate.loaded) {

      const homeResource = await app.$axios.$get(baseAPI + '/api/home')
      const home = await homeResource

      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', language)
      store.commit('translate/updateLoaded', true)
    }
    
    const pageResource = await app.$axios.$get(baseAPI + '/wp/v2/pages/?slug=faq')
    const page = await pageResource[0]

    const faqResource = await app.$axios.$get(baseAPI + '/wp/v2/faq?per_page=100')
    const faq = await faqResource

    const categoriesResource = await app.$axios.$get(baseAPI + '/wp/v2/category_faq')
    const categories = await categoriesResource

    return { 
      faq,
      page,
      categories,
      translate: language
    }
  },
  data () {
    return {
      page: {},
      faq: {},
      categories: []
    }
  },
  methods: {
    async search (search) {
      await this.$store.dispatch('faq/searchFaq', {
        baseAPI: this.$config.baseAPI,
        search: search
      })
    }
  }
}
</script>