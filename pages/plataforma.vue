<template>
  <div class="main-page">
    <Loading :loading="loading" />
    <Hero :data="platform.acf.hero" />
    <HowWorks :data="platform.acf.how_works" />
    <Topics :data="platform.acf.request" />
    <div class="block-button">
      <div class="container">
        <LinkBox :url="platform.acf.request.link_request" :text="platform.acf.request.button_request" color="blue" />
      </div>
    </div>
    <TestimonialsList :data="home.acf.testimonials" />
    <SafeData :data="platform.acf.safedata" />
    <Faq :data="platform.acf.faq" />
    <BlogList :posts="posts" :title="platform.acf.blog.title" v-if="posts.length > 0" />
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
    await store.dispatch('platform/loadPage', { baseAPI, lang, defaultURL, slug: 'plataforma' })
  },
  head() {
    if(this.platform) {
      const metaArray = [];
      this.platform.yoast_meta.map(ele => {
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
    loading () { return this.$store.state.platform.loaded },
    platform () { return this.$store.state.platform.platform }
  }
}
</script>