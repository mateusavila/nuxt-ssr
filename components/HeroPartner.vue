<template>
  <div class="hero-partner">
    <ImageBox :images="data.background" alternate="background" css-class="hero-partner-bg" />
    <div class="container">
      <div class="hero-partner-text" v-html="data.title"></div>
      <ImageBox :images="data.images" alternate="background" css-class="hero-partner-image" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeroPartner',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  },
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.hero-partner
  width 100%
  min-height 800px
  height 100vh
  position relative
  .hero-partner-image
    position absolute
    right -100px
    z-index 2
    top 50%
    transform translateY(-50%)
  .hero-partner-bg
    z-index 1
    filler()
    width 100%
    img
      width 100%
      height 100%
      object-position center bottom
  .container
    position relative
    margin 0 auto
    z-index 2
    overflow hidden
    max-width 1200px
    width calc(100% - 64px)
    display flex
    height 100%
    flex-wrap wrap
    align-content center
    align-items center
    justify-content space-between
.hero-partner-text
  position relative
  z-index 4
  h1
    font-size 42px
    line-height 150%
    font-weight 600
    strong
      font-size 64px
      font-weight 800
      line-height 180%
@media all and (max-width: 1250px)
  .hero-partner
    .container
      overflow hidden
      max-width 1200px
      width calc(100% - 40px)
    .hero-partner-image
      right -80px
@media all and (max-width: 1150px)
  .hero-partner
    .hero-partner-image
      right -65px
      max-width 620px
  .hero-partner-text 
    h1
      font-size 28px
      strong
        font-size 50px
@media all and (max-width: 900px)
  .hero-partner-text 
    width 100%
    text-align center
  .hero-partner 
    .hero-partner-image
      max-width 450px
      width 100%
      top auto
      position relative
      right auto
      transform none
      margin 0 auto
@media all and (max-width: 600px)
  .hero-partner
    .container
      width calc(100% - 20px)
  .hero-partner-text 
    h1
      font-size 24px
      strong
        font-size 40px
</style>