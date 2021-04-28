<template>
  <h3 class="title-h3" :class="cssClass">{{text}}</h3>
</template>
<script>
export default {
  name: 'TitleH3',
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
.title-h3
  font-size 32px
  line-height 150%
  color #00417F
  text-align center
  margin 0 0 30px
  &.left
    text-align left
  &.light-blue
    color #33AAFF
  &.white
    color #fff
  &.dark-blue
    color #00154B
@media all and (max-width: 1250px)
  .title-h3
    font-size: clamp(20px, calc(1.25rem + (32 - 20) * ((100vw - 320px) / (1250 - 320))), 32px)
</style>