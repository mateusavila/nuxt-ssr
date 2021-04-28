<template>
  <div class="partners-page">
    <Loading :loading="loading" />
    <HeroPartner :data="partners.acf.hero" />
    <Steps :list="partners.acf.steps" :title="translate.partners.steps" />
    <MediaKit :data="partners.acf.media_kit" />
    <PartnersAPI :data="partners.acf.api" />
  </div>
</template>
<script>
import mixins from '~/helpers/mixins'
export default {
  layout: 'partners',
  mixins: [mixins],
  async asyncData ({ store, $config: { baseAPI, lang, defaultURL } }) {
    await store.dispatch('page/loadPage', { baseAPI, lang, defaultURL })
    await store.dispatch('partners/loadPage', { baseAPI, lang, defaultURL, slug: 'integracao-parceiros' })
  },
  computed: {
    loading () { return this.$store.state.partners.loaded },
    options () { return this.$store.state.options.options },
    partners () { return this.$store.state.partners.partners },
    translate () { return this.$store.state.translate.translate }
  }
}
</script>