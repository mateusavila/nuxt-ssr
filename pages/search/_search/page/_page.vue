<template>
  <div class="blog-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <NewHero :data="page.acf.hero" />
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
        :click-handler="paginateSearch"
        />
    </div>
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
import blog from '~/helpers/blog'
import { fetchResource, postsListResource } from '~/helpers/factory'
export default {
  layout: 'page',
  mixins: [mixins, blog],
  async asyncData ({ store, params, app, $config: { baseAPI, lang } }) {

    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)


    const page = await fetchResource(`${baseAPI}/api/blog`)
    page.data.home.yoast_meta.map(el => {
      if(el.property !== 'og:url') {
        app.head.meta.push({
          hid: el.name ? el.name : el.property,
          name: el.name ? el.name : el.property,
          content: el.content,
        })
      } 
    })

    if (!store.state.translate.loaded) {
      const home = await fetchResource(`${baseAPI}/api/home`)
      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', await translate())
      store.commit('translate/updateLoaded', true)
    }
    
    const { posts, pages, total } = await postsListResource(`${baseAPI}/wp/v2/posts/?per_page=9&page=${params.page}&search=${params.search}`)
    
    return {
      posts: await posts,
      page: page.data.home,
      translate: await translate(),
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