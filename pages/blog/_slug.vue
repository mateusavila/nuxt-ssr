<template>
  <div class="blog-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <div class="content-visibility">
      <div class="blog-page-single">
        <div class="container">
          <Breadcrumbs :data="single.data" />
          <LazyPageContent :data="single.data" />
          <Share :data="single.data" />
          <LazyAuthorBox 
          v-if="authorBlock === 1"
          :author="single.data.author" 
          :date="single.data.date"
          :updated-date="single.data.updated_date"
          />
          <LazyAuthorBox 
          v-if="authorBlock === 2"
          :author="single.data.acf.external_author" 
          :date="single.data.date"
          :updated-date="single.data.updated_date"
          />
        </div>
      </div>
      <LazyTopics :data="page.acf.request" />
      <div class="block-button block-button-double">
        <div class="container">
          <LazyLinkBox :url="page.acf.request.link_request" :text="page.acf.request.button_request" color="blue" />
          <LazyLinkBox :url="page.acf.request.link_request" text="Conheça a plataforma" color="white" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
import blog from '~/helpers/blog'
import { fetchResource } from '~/helpers/factory'
export default {
  layout: 'page',
  mixins: [mixins, blog],
  async asyncData ({ store, params, app, $config: { baseAPI, lang } }) {
    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)

    if (!store.state.translate.loaded) {
      const home = await fetchResource(`${baseAPI}/api/home`)
      store.commit('options/updateOptions', home.data.options)
      store.commit('translate/updateTranslate', await translate())
      store.commit('translate/updateLoaded', true)
    }
    const page = await fetchResource(`${baseAPI}/api/blog`)
    const single = await fetchResource(`${baseAPI}/api/blog-item?slug=${params.slug}`)

    // adicionando as tags de SEO da interna de notícias
    const keys = Object.keys(single.data.yoast.yoast_meta)
    keys.map(el => {
      if(el !== 'og:images') {
        app.head.meta.push({
          hid: el,
          property: el,
          content: single.data.yoast.yoast_meta[el]
        })
      }
    })

    // condições especiais
    app.head.meta.push({
      hid: 'og:image',
      property: 'og:image',
      content: single.data.yoast.yoast_meta['twitter:image']
    })

    // sobrescrever a descrição do post pro google
    const head = app.head.meta.map(el => {
      if (el.hid === 'description') {
        return {
          hid: 'description',
          name: 'description',
          content: single.data.yoast.yoast_meta['og:description']
        }
      }
      return { ...el }
    })
    app.head.meta = head
    return { 
      translate: await translate(),
      single,
      page: page.data.home
    }
  },  
  head () {
    if(this.single) {
      const meta = []
      const metatags = ['twitter_site', 'canonical']
      // og:url é property
      meta.push({
        hid: 'og:url',
        property: 'og:url',
        content: window.location.href
      })
      metatags.map(el => {
        meta.push({
          hid: el,
          name: el,
          content: window.location.href
        })
      })
      return { meta }
    }
  },
  data () {
    return {
      single: {},
      translate: {},
      page: {}
    }
  },
  computed: {
    authorBlock () { return +this.single.data.acf.author_block }
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