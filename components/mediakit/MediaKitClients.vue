<template>
  <div class="media-kit-clients">
    <div class="media-kit-clients-text">
      <p v-html="data.text"></p>
    </div>
    <div class="media-kit-clients-list">
      <div class="media-kit-clients-item" v-for="(item, index) in data.companies" :key="index">
        <img :src="item.image.url" :alt="item.title" :width="item.image.width" :height="item.image.height" loading="lazy">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MediaKitClients',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  },
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.media-kit-clients
  box()
  margin 50px 0
.media-kit-clients-text
  p
    font-size 24px
    line-height 150%
.media-kit-clients-list
  margin 40px 0
  display flex
  justify-content space-between
  align-items flex-start
  width 100%
  flex-wrap wrap
.media-kit-clients-item
  background #fff
  width 104px
  height 104px
  border-radius 100%
  display flex
  justify-content center
  align-items center
  overflow hidden
</style>