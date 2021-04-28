<template>
  <div class="block-card-area">
    <div class="container">
      <BlockCardItem :data="item" v-for="(item, index) in cards" :key="index" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlockCardList',
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.block-card-area
  margin 80px 0
  .container
    width calc(100% - 64px)
    max-width 1200px
    margin 0 auto
    display flex
    justify-content space-between
    align-items stretch
    flex-wrap wrap
@media all and (max-width: 1250px)
  .block-card-area
    .container
      width calc(100% - 32px)
@media all and (max-width: 600px)
  .block-card-area
    .container
      width calc(100% - 20px)
</style>