<template>
  <div class="faq-page">
    <NewHero :data="page.acf.hero" />
    <GrowthBox :data="page.acf.growth" negative-margin="-20px"/>
    <FaqFilter @search="search" />
    <FaqCategories :list="categories" />
    <FaqList :list="faq.data" :title="mainCategory.name"  />
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
export default {
  layout: 'faq',
  mixins: [mixins],
  // async asyncData ({ store, params, $config: { baseAPI, lang, defaultURL } }) {
  //   await store.dispatch('page/loadPage', { baseAPI, lang, defaultURL })
  //   await store.dispatch('faq/loadPageByCategory', { baseAPI, lang, defaultURL, category: params.category, slug: 'faq' })
  // },
  // computed: {
  //   faq () { return this.$store.state.faq.faq },
  //   page () { return this.$store.state.faq.page },
  //   loading () { return this.$store.state.faq.loaded },
  //   options () { return this.$store.state.options.options },
  //   categories () { return this.$store.state.faq.categories },
  //   mainCategory () {
  //     return this.categories.find(el => el.slug === this.$route.params.category)
  //   }
  // },
  async asyncData ({ store, params, app, $config: { baseAPI, lang, defaultURL } }) {

    let language = {}
    if (!store.state.translate.loaded) {
      const langResource = await app.$axios.$get(defaultURL+'/'+lang+".json")
      language = await langResource

      const homeResource = await app.$axios.$get(baseAPI + '/api/home')
      const home = await homeResource

      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', language)
      store.commit('translate/updateLoaded', true)
    }
    
    const pageResource = await app.$axios.$get(baseAPI + '/wp/v2/pages/?slug=faq')
    const page = await pageResource[0]

    const faqResource = await app.$axios.$get(baseAPI + '/api/faq?per_page=100&category='+params.category)
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
  computed: {
    mainCategory () {
      return this.categories.find(el => el.slug === this.$route.params.category)
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