<template>
  <div class="main-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>
    <NewHero :data="home.acf.hero" />
    <GrowthBox :data="home.acf.growth" negative-margin="-60px"/>
    <div class="content-visibility">
      <LazySimulator v-if="$config.lang === 'pt-br'" />
      <LazySimulatorMX v-if="$config.lang === 'es-mx'" />
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
import { fetchResource } from '~/helpers/factory'
export default {
  layout: 'page',
  mixins: [mixins],
  async asyncData ({ store, app, $config: { baseAPI, lang } }) {
    const translate = () => import(`~/helpers/${lang}.js`).then(m => m.default || m)
    const page = await fetchResource(`${baseAPI}/api/home`)
    store.commit('translate/updateTranslate', await translate())
    store.commit('translate/updateLoaded', true)
    store.commit('options/updateOptions', page.data.options)
    page.data.home.yoast_meta.map(el => {
      if(el.property !== 'og:url') {
        app.head.meta.push({
          hid: el.name ? el.name : el.property,
          name: el.name ? el.name : el.property,
          content: el.content,
        })
      } 
    })
    return { 
      home: page.data.home,
      posts: page.data.posts || [],
      translate: await translate()
    }
  },
  data () {
    return {
      posts: [],
      translate: {},
      home: {}
    }
  }
}
</script>