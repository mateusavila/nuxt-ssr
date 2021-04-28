<template>
  <div class="main-page">
    <Loading :loading="loading" />
    <Hero :data="credit_ads.acf.hero" />
    <HowWorks :data="credit_ads.acf.how_works" />
    <div class="block-button">
      <div class="container">
        <LinkBox :url="credit_ads.acf.hero.link" :text="credit_ads.acf.hero.button_begin" color="blue" />
      </div>
    </div>
    <NumberBlock :data="credit_ads.acf.fuel" :start="animationPaused" css-class="credits" />
    <PayBox :data="credit_ads.acf.pay" />
    <Faq :data="credit_ads.acf.faq" />
    <BlogList :posts="posts" :title="credit_ads.acf.blog.title" v-if="posts.length > 0" />
    <div class="block-button" v-if="posts.length > 0">
      <div class="container">
        <LinkBox url="/blog" :text="blog.button" color="blue" />
      </div>
    </div>
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
export default {
  layout: 'page',
  mixins: [mixins],
  async asyncData ({ store, $config: { baseAPI, lang, defaultURL } }) {
    await store.dispatch('page/loadPage', { baseAPI, lang, defaultURL })
    await store.dispatch('credit_ads/loadPage', { baseAPI, lang, defaultURL, slug: 'credito-ads' })
  },
  head() {
    if(this.credit_ads) {
      const metaArray = [];
      this.credit_ads.yoast_meta.map(ele => {
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
  },
  computed: {
    home () { return this.$store.state.page.home },
    blog () { return this.$store.state.page.blog },
    posts () { return this.$store.state.page.posts },
    options () { return this.$store.state.options.options },
    loading () { return this.$store.state.credit_ads.loaded },
    credit_ads () { return this.$store.state.credit_ads.credit_ads }
  }
}
</script>