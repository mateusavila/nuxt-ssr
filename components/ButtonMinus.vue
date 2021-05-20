<template>
  <button @click="minus" class="button-minus"></button>
</template>
<script>
export default {
  name: 'ButtonMinus',
  methods: {
    minus () { this.$emit('minus') }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.button-minus
  width 24px
  padding 0
  display block
  height 24px
  background-image url('~assets/img/button-minus.svg')
  bgCover()
  border-radius 100%
  border none
  cursor pointer
  background-color transparent
  will-change transform
  transitions(.2s)
  &:hover
    transform scale(1.05)
    transitions(.2s)
</style>