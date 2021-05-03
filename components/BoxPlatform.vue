<template>
  <div class="box-platform" :class="cssClass">
    <ImageBox css-class="box-platform-image" :images="data.images" alternate="Background" />
    <div class="container">
      <div class="box-platform-center">
        <div class="box-platform-text" v-html="data.text"></div>
        <div class="box-platform-action">
          <LinkBox :text="data.button" :url="data.url" color="orange" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoxPlatform',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    },
    cssClass: {
      type: String,
      required: false,
      default: ''
    },
    margin: {
      type: String,
      required: false,
      default: '0px'
    }
  },
  mounted () {
    this.setStyle()
  },
  methods: {
    setStyle () { this.$el.style.setProperty('--margin', `${this.margin}`) }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.box-platform
  height 768px
  position relative
  width 100%
  z-index 1
  margin var(--margin)
  box()
  &.text-big
    .box-platform-text
      max-width 700px
  .box-platform-image
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
      right 0
      background: linear-gradient(90deg, rgba(0, 21, 75, 0) 0%, rgba(0, 21, 75, 0.9) 85.21%)
  .container
    position relative
    z-index 4
    height 100%
    max-width 1140px
    width calc(100% - 64px)
    margin 0 auto
    display flex
    align-items center
    justify-content flex-end
.box-platform-text
  h3
    color #fff
    font-size 48px
    font-weight 900
    margin-bottom 20px
  p
    color #fff
    font-size 20px
    font-weight 500
    line-height 150%
.box-platform-center
  width 100%
  max-width 600px

.box-platform-action
  margin-top 50px
  width 100%
@media all and (max-width: 1200px)
  .box-platform
    min-height 600px
    .container
      width calc(100% - 40px)
  .box-platform-text
    h3
      font-size: clamp(24px, calc(1.5rem + (48 - 24) * ((100vw - 400px) / (1200 - 400))), 48px)
@media all and (max-width: 800px)
  .box-platform
    .box-platform-image
      &:before
        width 100%
        background: rgba(0, 21, 75, 0.77)
  .box-platform-center
    max-width 100%
@media all and (max-width: 600px)
  .box-platform
    height 400px
    min-height 400px
    .box-platform-image::before
      width 100%
  .box-platform-center
    width 100%
</style>