<template>
  <div class="loading-block" :class="{ 'active': loading }">
    <div class="loading-center">
      <svg xmlns="http://www.w3.org/2000/svg" style="margin:auto;background:0 0" width="78" height="78" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block"><circle cx="50" cy="50" fill="none" stroke="#00154b" stroke-width="5" r="44" stroke-dasharray="207.34511513692632 71.11503837897544"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.5208333333333333s" values="0 50 50;360 50 50" keyTimes="0;1"/></circle></svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadingBlock',
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.loading-block
  background #fff
  filler(fixed)
  z-index 100000
  visibility visible
  opacity 1
  will-change opacity, visibility
  transitions(.2s)
  &.active
    visibility hidden
    opacity 0
    transitions(.2s)
  svg
    centerPerfect()
</style>
