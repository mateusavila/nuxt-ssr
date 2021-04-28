<template>
  <div class="faq-page-empty">
    <h2>{{translate.empty}}</h2>
  </div>
</template>
<script>
export default {
  name: 'FaqEmpty',
  computed: {
    translate () { return this.$store?.state?.translate?.translate?.faq ?? '' }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.faq-page-empty
  padding 30px
  border 1px solid #ddd
  display flex
  width 100%
  border-radius 6px
  background #fff
  justify-content center
  h2
    color #303030
</style>