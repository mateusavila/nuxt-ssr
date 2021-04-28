<template>
  <div class="media-kit-typography">
    <TitleH4 :text="data.title" css-class="white left" />
    <p>{{data.text}}</p>
    <div class="media-kit-typography-list">
      <ImageBox :images="data.image_regular" />
      <ImageBox :images="data.image_bold" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MediaKitTypography',
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
.media-kit-typography
  margin 100px 0
  box()
.media-kit-typography-list
  display flex
  justify-content space-between
  align-item center
  flex-wrap wrap
  margin 20px 0
</style>