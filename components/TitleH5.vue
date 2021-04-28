<template>
  <h5 class="title-h5" :class="cssClass">{{text}}</h5>
</template>
<script>
export default {
  name: 'TitleH5',
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
.title-h5
  font-size 20px
  line-height 150%
  color #303133
  text-align center
  margin 0 0 30px
  &.left
    text-align left
  &.dark-blue
    color #00154B
  &.white
    color #fff
</style>