<template>
  <div class="blog-page">
    <NewHero :data="page.acf.hero" />
    <GrowthBox :data="page.acf.growth" negative-margin="-60px"/>
    <BlogMainSlider :list="mainNews" />
    <BlogFilter 
      :categories="categories"
      @search="search"
    />
    <BlogPageList :list="posts" />
    <Paginate
        v-if="postsPage > 1"
        v-model="paged"
        :page-count="postsPage"
        :page-range="3"
        :prev-text="'&laquo;'"
        :next-text="'&raquo;'"
        :container-class="'pagination'"
        :page-class="'pagination-item'"
        :next-class="'pagination-item'"
        :prev-class="'pagination-item'"
        :click-handler="paginateSearch"
      />
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
import blog from '~/helpers/blog'
export default {
  layout: 'page',
  mixins: [mixins, blog],
  async asyncData ({ store, params, app, $config: { baseAPI, lang, defaultURL } }) {
    const pageResource = await app.$axios.$get(baseAPI + '/api/blog', { mode: 'cors' })
    const page = await pageResource
    
    let total = 0
    let pages = 0
    let posts = []
    await app.$axios.get(baseAPI + '/wp/v2/posts/?per_page=9&page='+params.page+'&search='+params.search).then(response => {
      total = +response.headers['x-wp-total']
      pages = +response.headers['x-wp-totalpages']
      posts = response.data
    })

    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)
    const language = await translate()

    if (!store.state.translate.loaded) {

      const homeResource = await app.$axios.$get(baseAPI + '/api/home', { mode: 'cors' })
      const home = await homeResource

      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', language)
      store.commit('translate/updateLoaded', true)
    }

    return {
      posts: posts,
      page: page.data.home,
      translate: language,
      categories: page.data.home.acf.categories,
      mainNews: page.data.home.acf.list,
      postsTotal: total,
      postsPage: pages
    }
  },  
  data () {
    return {
      page: {},
      posts: [],
      categories: [],
      postsPage: 0,
      mainNews: [],
      postsTotal: 0,
      paged: parseInt(this.$route.params.page, 10)
    }
  }
}
</script>