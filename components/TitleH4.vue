<template>
  <h4 class="title-h4" :class="cssClass">{{text}}</h4>
</template>
<script>
export default {
  name: 'TitleH4',
  props: {
    text: {
      type: String,
      required: false,
      default: ''
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
.title-h4
  font-size 24px
  line-height 150%
  color #00417F
  text-align center
  margin 0 0 30px
  &.left
    text-align left
  &.white
    color #fff
  &.light
    font-weight 400
  &.light-blue
    color #33AAFF
@media all and (max-width: 600px)
  .title-h4
    font-size: clamp(20px, calc(1.25rem + (24 - 20) * ((100vw - 360px) / (600 - 360))), 24px)
</style>