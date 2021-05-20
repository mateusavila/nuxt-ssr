<template>
  <button @click="add" class="button-plus"></button>
</template>
<script>
export default {
  name: 'ButtonPlus',
  methods: {
    add () { this.$emit('add') }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.button-plus
  display block
  padding 0
  width 24px
  height 24px
  background-image url('~assets/img/button-plus.svg')
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