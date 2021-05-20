<template>
  <button 
    class="arrow-next"
    slot="button-next" 
    :class="cssClass" 
    @click="goNext" 
    v-if="size > 1">{{translate.blog.arrows.next}}</button>
</template>
<script>
export default {
  name: 'ArrowNext',
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
    goNext () { this.$emit('go-next') }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.arrow-next
  background-color #fff
  background-image url('~assets/img/dashicons_arrow-next.svg')
  background-position 50% 50%
  background-repeat no-repeat
  background-size auto
  border none
  border-radius 40px
  cursor pointer
  display block
  height 40px
  outline none
  overflow hidden
  position absolute
  padding 0
  right 0
  text-indent -999999px
  top 50%
  transform translateY(-50%)
  width 40px
  z-index 100
  transitions(.2s)
  &.theme-2
    background-color transparent
    background-image url('~assets/img/arrow-next.svg')
    background-size auto 20px
  &:hover
    transform translateY(-50%) scale(1.05)
    transitions(.2s)
</style>