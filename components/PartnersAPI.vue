<template>
  <div class="partners-api">
    <div class="container">
      <img :src="data.images.url" :alt="data.title" :width="data.images.width" :height="data.images.height" loading="lazy" class="partners-api-image">
      <div class="partners-api-content">
        <TitleH3 :text="data.title" css-class="white" />
        <LinkBox :text="data.button" :url="data.link" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PartnersAPI',
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
.partners-api
  margin 50px 0 0
  width 100%
  position relative
  padding 60px 0 100px
  background-image url('~assets/img/partner-api-bg.svg')
  background-size cover
  background-repeat no-repeat
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    position relative
    z-index 2
    height 100%
    display flex
    justify-content space-between
    align-items center
  .partners-api-content
    text-align left
    width 307px
    .title-h3
      text-align left
@media all and (max-width: 1250px)
  .partners-api
    .container
      width calc(100% - 40px)
  .partners-api-image
    max-width 650px
    margin-right 30px
    width calc(100% - 330px)
    height auto
    display block
@media all and (max-width: 750px)
  .partners-api-image
    width 100%
    margin-bottom 30px
  .partners-api
    .container
      flex-wrap wrap
    .partners-api-content
      width 100%
      margin-top 30px
@media all and (max-width: 600px)
  .partners-api
    .container
      width calc(100% - 20px)
</style>