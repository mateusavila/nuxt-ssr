<template>
  <client-only>
    <div class="main-page">
      <NewHero :data="home.acf.hero" />
      <GrowthBox :data="home.acf.growth" negative-margin="-60px"/>
      <Simulator />
      <HomeNumbers :list="home.acf.finance" />
      <HomePartners :list="home.acf.partners" />
      <HomeHowWorks :data="home.acf.how_works" />
      <HomeAdvantages :list="home.acf.advantages" />
      <BoxJobs :data="home.acf.loan" css-class="text-big" />
      <HomeClipping :data="home.acf.clipping" />
      <TestimonialsList :data="home.acf.testimonials" />
      <BoxPlatform :data="home.acf.platform" margin="80px 0" />
      <BlogList :posts="posts" :title="translate.blog.home.title" v-if="posts.length > 0" />
      <div class="block-button" v-if="posts.length > 0">
        <div class="container">
          <LinkBox url="/blog" :text="translate.blog.home.more" color="blue" css-class="huge" />
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
import mixins from '~/helpers/mixins'
export default {
  layout: 'page',
  mixins: [mixins],
  async asyncData ({ store, app, $config: { baseAPI, lang, defaultURL } }) {
    const pageResource = await app.$axios.$get(baseAPI + '/api/home', { mode: 'cors' })
    const page = await pageResource
    const langResource = await app.$axios.$get(defaultURL+'/'+lang+".json", { mode: 'cors' })
    const language = await langResource
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