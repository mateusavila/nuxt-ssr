<template>
  <div class="faq-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <NewHero :data="page.acf.hero" />
    <div class="content-visibility">
      <LazyFaqFilter @search="search" />
      <LazyFaqCategories :list="categories" />
      <LazyFaqList :list="faq.data" :mobile-list="faq.data" :title="mainCategory.name"  />
    </div>
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
import { fetchResource } from '~/helpers/factory'
export default {
  layout: 'faq',
  mixins: [mixins],
  async asyncData ({ store, params, app, $config: { baseAPI, lang } }) {
    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)
    if (!store.state.translate.loaded) {
      const home = await fetchResource(`${baseAPI}/api/home`)
      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', await translate())
      store.commit('translate/updateLoaded', true)
    }

    let page = await fetchResource(`${baseAPI}/wp/v2/pages/?slug=faq`)
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
    
    const faq = await fetchResource(`${baseAPI}/api/faq?per_page=100&category=${params.category}`)
    const categories = await fetchResource(`${baseAPI}/wp/v2/category_faq`)

    return { 
      faq,
      page,
      categories,
      translate: await translate()
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