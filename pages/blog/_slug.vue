<template>
  <div class="blog-page">
    <Loading :loading="loading" />
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
  async asyncData ({ store, params, $config: { baseAPI, lang, defaultURL } }) {
    await store.dispatch('news/loadPage', { 
      baseAPI,
      lang, 
      page: 1,
      defaultURL
    })
    await store.dispatch('news/loadSingle', { 
      baseAPI,
      lang, 
      slug: params.slug,
      defaultURL
    })
  },  
  data: () => ({
    paged: 1
  }),
  computed: {
    page () { return this.$store.state.news.page },
    posts () { return this.$store.state.news.posts },
    single () { return this.$store.state.news.single },
    loading () { return this.$store.state.news.loaded },
    options () { return this.$store.state.options.options },
    mainNews () { return this.$store.state.news.mainNews },
    postsPage () { return this.$store.state.news.postsPage },
    categories () { return this.$store.state.news.categories },
    authorBlock () { return parseInt(this.single.data.acf.author_block, 10) }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.blog-page-single
  padding 40px 0
  .container
    width calc(100% - 40px)
    max-width 1024px
    margin 0 auto
</style>