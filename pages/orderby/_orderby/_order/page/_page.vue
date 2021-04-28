<template>
  <div class="blog-page">
    <Loading :loading="loading" />
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
        :click-handler="paginateOrder"
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

    const postsResource = await app.$axios.$get(baseAPI + '/api/orderby?order='+params.order+'&orderby='+params.orderby+'&page='+ params.page, { mode: 'cors' })

    const langResource = await app.$axios.$get(defaultURL+'/'+lang+".json", { mode: 'cors' })

    const posts = await postsResource
    const page = await pageResource
    const language = await langResource
    store.commit('translate/updateTranslate', language)
    store.commit('translate/updateLoaded', true)
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