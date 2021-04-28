<template>
  <div class="new-hero">
    <ImageBox css-class="new-hero-image" :images="data.images" alternate="Background" />
    <div class="container">
      <div class="new-hero-text" v-html="data.text"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewHero',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.new-hero
  height 100vh
  min-height 900px
  margin-top 100px
  position relative
  width 100%
  z-index 1
  .new-hero-image
    filler()
    z-index 2
    img
      height 100%
    &:before
      content ''
      position absolute
      z-index 3
      height 100%
      width calc((100% / 3) * 2)
      top 0
      left 0
      background: linear-gradient(90deg, rgba(0, 21, 75, 0.9) 37.52%, rgba(0, 21, 75, 0) 91.96%)
  .container
    position relative
    z-index 4
    height 100%
    max-width 1140px
    width calc(100% - 64px)
    margin 0 auto
    display flex
    align-items center
    justify-content space-between
.new-hero-text
  max-width 500px
  h2
    color #fff
    font-size 60px
    font-weight 900
@media all and (max-width: 1200px)
  .new-hero
    min-height 700px
    .container
      width calc(100% - 40px)
  .new-hero-text
    h2
      font-size: clamp(30px, calc(1.875rem + (60 - 30) * ((100vw - 400px) / (1200 - 400))), 60px)
@media all and (max-width: 1000px)
  .new-hero
    margin-top 70px
@media all and (max-width: 600px)
  .new-hero
    min-height 480px
    height 480px
    .new-hero-image::before
      width 100%
    .container
      width calc(100% - 20px)
</style>