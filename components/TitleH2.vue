<template>
  <h2 class="title-h2" :class="cssClass">{{text}}</h2>
</template>
<script>
export default {
  name: 'TitleH2',
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
.title-h2
  font-size 32px
  line-height 150%
  color #00417F
  text-align center
  margin 0 0 30px
  &.light-blue
    color #33AAFF
  &.white
    color #fff
@media all and (max-width: 1250px)
  .title-h2
    font-size: clamp(20px, calc(1.25rem + (32 - 20) * ((100vw - 320px) / (1250 - 320))), 32px)
</style>