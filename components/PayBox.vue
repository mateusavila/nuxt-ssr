<template>
  <div class="pay-box">
    <div class="container">
      <div class="pay-box-content">
        <div class="pay-box-info">
          <TitleH4 :text="data.title" css-class="left" />
          <div class="text" v-html="data.text"></div>
        </div>
        <div class="pay-box-image">
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
.pay-box
  box()
  margin 120px 0 80px
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
.pay-box-content
  width 100%
  display flex
  align-items center
  justify-content space-between
  flex-wrap wrap
.pay-box-button
  margin-top 40px
.pay-box-image
  width 605px
  img
    max-width 100%
    height auto
    display block
.pay-box-info
  width calc(100% - 630px)
  .text
    color #606266
    p
      color #606266
      line-height 150%
      font-size 16px
      margin-bottom 20px
@media all and (max-width: 1000px)
  .pay-box
    .container
      width calc(100% - 32px)
  .pay-box-image
    width 100%
    order 1
    display flex
    justify-content center
    margin-bottom 50px
  .pay-box-info
    order 2
    width 100%
  .pay-box-button
    display flex
    justify-content center
@media all and (max-width: 600px)
  .pay-box
    .container
      width calc(100% - 20px)
</style>