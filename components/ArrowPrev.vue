<template>
  <button 
    class="arrow-prev"
    slot="button-prev" 
    :class="cssClass" 
    @click="goPrev" 
    v-if="size > 1">{{translate.blog.arrows.prev}}</button>
</template>
<script>
export default {
  name: 'ArrowPrev',
  props: {
    cssClass: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: Number,
      required: true
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate }
  },
  methods: {
    goPrev () { this.$emit('go-prev') }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.arrow-prev
  background-color #fff
  background-image url('~assets/img/dashicons_arrow-prev.svg')
  background-position center center
  background-repeat no-repeat
  background-size auto
  border none
  border-radius 40px
  cursor pointer
  display block
  height 40px
  left 0
  overflow hidden
  outline none
  position absolute
  padding 0
  text-indent -999999px
  top 50%
  transform translateY(-50%)
  width 40px
  z-index 100
  transitions(.2s)
  &.theme-2
    background-color transparent
    background-image url('~assets/img/arrow-prev.svg')
    background-size auto 20px
  &:hover
    transform translateY(-50%) scale(1.05)
    transitions(.2s)
</style>