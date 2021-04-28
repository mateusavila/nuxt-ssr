<template>
  <div class="safe-data">
    <div class="container">
      <TitleH4 :text="data.title" />
      <div class="safe-data-content">
        <div class="safe-data-info">
          <div class="text" v-html="data.text"></div>
          <div class="safe-data-button" v-if="data.button">
            <LinkBox :url="data.link" :text="data.button" color="blue" />
          </div>
        </div>
        <div class="safe-data-image">
          <img :src="data.image.url" :alt="data.title" :width="data.image.width" :height="data.image.height" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SafeData',
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
.safe-data
  box()
  margin 120px 0 80px
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
.safe-data-content
  width 100%
  display flex
  align-items center
  justify-content space-between
  flex-wrap wrap
.safe-data-button
  margin-top 40px
.safe-data-image
  width 605px
  img
    max-width 100%
    height auto
    display block
.safe-data-info
  width calc(100% - 630px)
  .text
    color #606266
    p
      color #606266
      line-height 150%
      font-size 16px
      margin-bottom 20px
@media all and (max-width: 1000px)
  .safe-data
    .container
      width calc(100% - 32px)
  .safe-data-image
    width 100%
    order 1
    display flex
    justify-content center
    margin-bottom 50px
  .safe-data-info
    order 2
    width 100%
  .safe-data-button
    display flex
    justify-content center
@media all and (max-width: 600px)
  .safe-data
    .container
      width calc(100% - 20px)
</style>