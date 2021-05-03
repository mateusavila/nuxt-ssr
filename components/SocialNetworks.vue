<template>
  <div class="social-network">
    <a :href="twitter.url" target="_blank" rel="noopener noreferrer" class="social-network-item tw">
      <span class="icon tw"></span>
      <span class="icon-hover tw"></span>
    </a>
    <a :href="linkedin.url" target="_blank" rel="noopener noreferrer" class="social-network-item in">
      <span class="icon in"></span>
      <span class="icon-hover in"></span>
    </a>
    <nuxt-link :to="blogger.url" class="social-network-item bg" @click.native="newPage">
      <span class="icon bg"></span>
      <span class="icon-hover bg"></span>
    </nuxt-link>
    <a :href="facebook.url" target="_blank" rel="noopener noreferrer" class="social-network-item fb">
      <span class="icon fb"></span>
      <span class="icon-hover fb"></span>
    </a>
    <a :href="instagram.url" target="_blank" rel="noopener noreferrer" class="social-network-item ig">
      <span class="icon ig"></span>
      <span class="icon-hover ig"></span>
    </a>
  </div>
</template>
<script>
// aqui está em modo gambiarra
export default {
  name: 'SocialNetworks',
  props: {
    twitter: {
      type: Object,
      required: true
    },
    linkedin: {
      type: Object,
      required: true
    },
    blogger: {
      type: Object,
      required: true
    },
    instagram: {
      type: Object,
      required: true
    },
    facebook: {
      type: Object,
      required: true
    }
  },
  methods: {
    newPage () { 
      if (window.location.pathname === '/blog') return false
      this.$store.commit('page/updateLoaded', false) 
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.social-network
  display flex
  width 200px
  justify-content space-between
  flex-wrap wrap
  align-items center
  margin-bottom 30px
  a
    width 32px
    height 32px
    border-radius 100%
    background-color #fff
    position relative
    transitions(.1s)
    .icon, .icon-hover
      transitions(.1s)
      background-repeat no-repeat
      background-position center center
      centerPerfect()
      width 42px
      height 42px
    .icon
      opacity 1
    .icon-hover
      opacity 0
    .icon.in
      background-image url('~assets/img/linkedin.svg')
      background-size auto 15px
    .icon-hover.in
      background-image url('~assets/img/linkedin-active.svg')
      background-size auto 15px
    .icon.tw
      background-image url('~assets/img/twitter.svg')
      background-size auto 20px
    .icon-hover.tw
      background-image url('~assets/img/twitter-active.svg')
      background-size auto 20px
    .icon.bg
      background-image url('~assets/img/blogger.svg')
      background-size auto 18px
    .icon-hover.bg
      background-image url('~assets/img/blogger-active.svg')
      background-size auto 18px
    .icon.ig
      background-image url('~assets/img/instagram.svg')
      background-size auto 18px
    .icon-hover.ig
      background-image url('~assets/img/instagram-active.svg')
      background-size auto 18px
    .icon.fb
      background-image url('~assets/img/facebook.svg')
      background-size auto 18px
    .icon-hover.fb
      background-image url('~assets/img/facebook-active.svg')
      background-size auto 18px
    &:hover
      background-color #0096ff
      transitions(.1s)
      .icon-hover
        opacity 1
        transitions(.1s)
      .icon
        opacity 0
        transitions(.1s)
@media all and (max-width: 1000px)
  .social-network
    margin 0 auto 20px
</style>