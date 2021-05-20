<template>
  <div class="share-component">
    <TitleH4 text="Compartilhe" css-class="left orange" :margin-bottom="5" />
    <div class="page-single-post-share-links">
      <ShareNetwork
        v-for="(item, index) in socialMedias" :key="index"
        :network="item"
        :url="link"
        :title="title"
        :description="resume"
      >{{ item }}</ShareNetwork>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Share',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  },
  data () {
    return {
      socialMedias: ['linkedin', 'twitter', 'facebook', 'whatsapp']
    }
  },
  computed: {
    link () { return window.location.href },
    title () { return this?.data.title ?? '' },
    resume () { return this?.data?.yoast?.yoast_meta['og:description'].replace(/<[^>]*>?/gm, '') }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.share-component
  margin-bottom 40px
  width 100%
  h4
    margin-bottom 10px
.page-single-post-share-links
  width 168px
  display flex
  justify-content space-between
  align-items center
  a
    text-indent -99999px
    width 24px
    height 24px
    background-repeat no-repeat
    background-position center center
    &.share-network-linkedin
      background-image url('~assets/img/share-linkedin.svg')
    &.share-network-twitter
      background-image url('~assets/img/share-twitter.svg')
    &.share-network-facebook
      background-image url('~assets/img/share-messenger.svg')
    &.share-network-whatsapp
      background-image url('~assets/img/share-whatsapp.svg')
@media all and (max-width: 500px)
  .page-single-post-share-links
    width 130px
</style>