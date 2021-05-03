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
  border none
  position absolute
  top 50%
  transform translateY(-50%)
  right 0
  width 40px
  height 40px
  border-radius 40px
  cursor pointer
  text-indent -999999px
  display block
  outline none
  padding 0
  overflow hidden
  z-index 100
  background-repeat no-repeat
  background-position 50% 50%
  background-size auto
  background-color #fff
  background-image url('~assets/img/dashicons_arrow-next.svg')
  transitions(.2s)
  &.theme-2
    background-color transparent
    background-size auto 20px
    background-image url('~assets/img/arrow-next.svg')
  &:hover
    transform translateY(-50%) scale(1.05)
    transitions(.2s)
</style>