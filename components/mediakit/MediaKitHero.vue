<template>
  <div class="media-kit-hero">
    <TitleH4 css-class="white left" :text="data.title" />
    <div class="media-kit-hero-list">
      <div class="media-kit-hero-item" v-for="(item, index) in data.list" :key="index">
        <div class="media-kit-hero-item-image">
          <img :src="item.image.url" :alt="item.title" :width="item.image.width" :height="item.image.height" loading="lazy">
        </div>
        <p v-html="item.text"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MediaKitHero',
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
.media-kit-hero-list
  margin 40px 0
  display flex
  justify-content space-between
  align-items flex-start
  width 100%
  flex-wrap wrap
.media-kit-hero-item-image
  height 125px
  display flex
  justify-content center
.media-kit-hero-item
  width 166px
  p
    text-align center
    line-height 150%
    font-size 20px
    margin-top 32px
@media all and (max-width: 1000px)
  .media-kit-hero-item
    width 50%
@media all and (max-width: 600px)
  .media-kit-hero-item
    width 100%
</style>