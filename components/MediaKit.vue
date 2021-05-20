<template>
  <div class="media-kit">
    <ImageBox :images="data.background" alternate="media kit background" css-class="media-kit-background" />
    <div class="container">
      <div class="media-kit-content">
        <TitleH3 :text="data.title" css-class="white" />
        <LinkBox :text="data.button" :url="data.link" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MediaKit',
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
.media-kit
  margin 50px 0 0
  width 100%
  position relative
  height 600px
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    position relative
    z-index 2
    height 100%
    display flex
    align-items center
  .media-kit-background
    position absolute
    filler()
    width 100%
    z-index 1
    img
      height 600px
      width 100%
  .media-kit-content
    text-align left
    max-width 436px
    .title-h3
      text-align left
@media all and (max-width: 1250px)
  .media-kit
    .container
      width calc(100% - 40px)
@media all and (max-width: 600px)
  .media-kit
    .container
      width calc(100% - 20px)
</style>