<template>
  <div class="main-page">
    <Loading :loading="loading" />
    <Hero :data="digital_credit_mmr.acf.hero" />
    <HowWorks :data="digital_credit_mmr.acf.how_works" />
    <div class="block-button">
      <div class="container">
        <LinkBox :url="digital_credit_mmr.acf.hero.link" :text="digital_credit_mmr.acf.hero.button_begin" color="blue" />
      </div>
    </div>
    <NumberBlock :data="digital_credit_mmr.acf.fuel" :start="animationPaused"  css-class="credits" />
    <Simulator />
    <Faq :data="digital_credit_mmr.acf.faq" />
    <BlogList :posts="posts" :title="digital_credit_mmr.acf.blog.title" v-if="posts.length > 0" />
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
    await store.dispatch('digital_credit_mmr/loadPage', { baseAPI, lang, defaultURL, slug: 'credito-digital-mmr' })
  },
  head() {
    if(this.digital_credit_mmr) {
      const metaArray = [];
      this.digital_credit_mmr.yoast_meta.map(ele => {
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
    loading () { return this.$store.state.digital_credit_mmr.loaded },
    digital_credit_mmr () { return this.$store.state.digital_credit_mmr.digital_credit_mmr }
  }
}
</script>