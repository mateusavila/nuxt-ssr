<template>
  <div class="main-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <NewHero :data="home.acf.hero" />
    <GrowthBox :data="home.acf.growth" negative-margin="-60px"/>
    <div class="content-visibility">
      <LazySimulator />
      <LazyHomeNumbers :list="home.acf.finance" />
      <LazyHomePartners :list="home.acf.partners" />
      <LazyHomeHowWorks :data="home.acf.how_works" />
      <LazyHomeAdvantages :list="home.acf.advantages" />
      <LazyBoxJobs :data="home.acf.loan" css-class="text-big" />
      <LazyHomeClipping :data="home.acf.clipping" />
      <LazyTestimonialsList :data="home.acf.testimonials" />
      <LazyBoxPlatform :data="home.acf.platform" margin="80px 0" />
      <LazyBlogList :posts="posts" :title="translate.blog.home.title" v-if="posts.length > 0" />
      <div class="block-button" v-if="posts.length > 0">
        <div class="container">
          <LazyLinkBox url="/blog" :text="translate.blog.home.more" color="blue" css-class="huge" />
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
export default {
  layout: 'page',
  mixins: [mixins],
  async asyncData ({ store, app, $config: { baseAPI, lang } }) {
    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)
    const language = await translate()
    const pageResource = await app.$axios.$get(baseAPI + '/api/home', { mode: 'cors' })
    const page = await pageResource
    
    store.commit('translate/updateTranslate', language)
    store.commit('translate/updateLoaded', true)
    store.commit('options/updateOptions', page.data.options)
    return { 
      home: page.data.home,
      posts: page.data.posts || [],
      options: page.data.options,
      blog: page.data.blog,
      newsletter: page.data.newsletter,
      translate: language
    }
  },
  data () {
    return {
      loaded: false,
      posts: [],
      translate: {},
      options: {},
      newsletter: {},
      blog: {},
      home: {}
    }
  },
  head () {
    if(this.home) {
      const metaArray = [];
      this.home.yoast_meta.map(ele => {
        metaArray.push({
          hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      });
      return {
        meta: metaArray
      }
    }
  }
}
</script>