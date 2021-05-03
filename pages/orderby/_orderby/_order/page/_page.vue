<template>
  <div class="blog-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <NewHero :data="page.acf.hero" />
    <GrowthBox :data="page.acf.growth" negative-margin="-60px"/>
    <div class="content-visibility">
      <LazyBlogMainSlider :list="mainNews" />
      <LazyBlogFilter 
        :categories="categories"
        @search="search"
      />
      <LazyBlogPageList :list="posts" />
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
          :click-handler="paginateOrder"
        />
    </div>
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
import blog from '~/helpers/blog'
export default {
  layout: 'page',
  mixins: [mixins, blog],
  async asyncData ({ store, params, app, $config: { baseAPI, lang } }) {
    const pageResource = await app.$axios.$get(baseAPI + '/api/blog', { mode: 'cors' })
    const page = await pageResource

    const postsResource = await app.$axios.$get(baseAPI + '/api/orderby?order='+params.order+'&orderby='+params.orderby+'&page='+ params.page, { mode: 'cors' })
    const posts = await postsResource

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
      posts: posts.data,
      page: page.data.home,
      translate: language,
      categories: page.data.home.acf.categories,
      mainNews: page.data.home.acf.list,
      postsTotal: posts.found_posts,
      postsPage: posts.max_pages
    }
  },  
  data () {
    return {
      paged: parseInt(this.$route.params.page, 10),
      page: {},
      posts: [],
      categories: [],
      postsPage: 0,
      mainNews: [],
      postsTotal: 0
    }
  }
}
</script>