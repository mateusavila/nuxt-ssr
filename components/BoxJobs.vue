<template>
  <div class="box-jobs" :class="cssClass">
    <ImageBox css-class="box-jobs-image" :images="data.images" alternate="Background" />
    <div class="container">
      <div class="box-jobs-center">
        <div class="box-jobs-text" v-html="data.text"></div>
        <div class="box-jobs-action">
          <LinkBox :text="data.button" :url="data.url" color="orange" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoxJobs',
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
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.box-jobs
  height 768px
  position relative
  width 100%
  z-index 1
  box()
  &.text-big
    .box-jobs-text
      max-width 700px
  .box-jobs-image
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
.box-jobs-text
  max-width 500px
  h3
    color #fff
    font-size 48px
    font-weight 900
.box-jobs-center
  width 100%
.box-jobs-action
  margin-top 40px
  width 100%
@media all and (max-width: 1200px)
  .box-jobs
    min-height 600px
    .container
      width calc(100% - 40px)
  .box-jobs-text
    h3
      font-size: clamp(24px, calc(1.5rem + (48 - 24) * ((100vw - 400px) / (1200 - 400))), 48px)
@media all and (max-width: 800px)
  .box-jobs
    .box-jobs-image
      &:before
        width 100%
        background: rgba(0, 21, 75, 0.77)
  .box-jobs-center
    max-width 100%
@media all and (max-width: 600px)
  .box-jobs
    height 400px
    min-height 400px
    .box-jobs-image::before
      width 100%
  .box-jobs-center
    width 100%
</style>