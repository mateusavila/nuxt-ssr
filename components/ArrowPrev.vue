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
  position absolute
  top 50%
  transform translateY(-50%)
  left 0
  border none
  text-indent -999999px
  width 40px
  height 40px
  border-radius 40px
  cursor pointer
  padding 0
  overflow hidden
  display block
  outline none
  z-index 100
  background-repeat no-repeat
  background-position center center
  background-size auto
  background-color #fff
  background-image url('~assets/img/dashicons_arrow-prev.svg')
  transitions(.2s)
  &.theme-2
    background-color transparent
    background-size auto 20px
    background-image url('~assets/img/arrow-prev.svg')
  &:hover
    transform translateY(-50%) scale(1.05)
    transitions(.2s)
</style>