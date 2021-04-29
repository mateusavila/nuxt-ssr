<template>
  <div class="blog-page">
    <div class="blog-page-single">
      <div class="container">
        <Breadcrumbs :data="single.data" />
        <PageContent :data="single.data" />
        <AuthorBox 
        v-if="authorBlock === 1"
        :author="single.data.author" 
        :date="single.data.date"
        :updated-date="single.data.updated_date"
        />
      </div>
    </div>
    <Topics :data="page.acf.request" />
    <div class="block-button block-button-double">
      <div class="container">
        <LinkBox :url="page.acf.request.link_request" :text="page.acf.request.button_request" color="blue" />
        <LinkBox :url="page.acf.request.link_request" text="Conheça a plataforma" color="white" />
      </div>
    </div>
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
import blog from '~/helpers/blog'
export default {
  layout: 'page',
  mixins: [mixins, blog],
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

    const pageResource = await app.$axios.$get(baseAPI + '/api/blog', { mode: 'cors' })
    const page = await pageResource
    
    let total = 0
    let pages = 0
    let posts = []
    await app.$axios.get(baseAPI + '/wp/v2/posts/?per_page=9&page=1').then(response => {
      total = +response.headers['x-wp-total']
      pages = +response.headers['x-wp-totalpages']
      posts = response.data
    })

    const postResource = await fetch(`${baseAPI}/api/blog-item?slug=${params.slug}`)
    const post = await postResource.json()
    
    return { 
      translate: language,
      single: post,
      page: page.data.home,
      posts: page.data.posts || [],
      categories: page.data.home.acf.categories,
      mainNews: page.data.home.acf.list,
      postsTotal: total,
      postsPage: pages
    }

  },  
  data () {
    return {
      single: {},
      posts: [],
      translate: {},
      mainNews: [],
      postsTotal: 0,
      postsPage: 0,
      posts: [],
      page: {}
    }
  },
  computed: {
    authorBlock () { return parseInt(this.single.data.acf.author_block, 10) }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.blog-page-single
  margin-top 150px
  padding 40px 0
  .container
    width calc(100% - 40px)
    max-width 1024px
    margin 0 auto
</style>