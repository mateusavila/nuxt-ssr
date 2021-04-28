<template>
  <div class="media-kit-intro">
    <div class="media-kit-intro-text" v-html="data.text"></div>
    <div class="media-kit-intro-list">
      <div class="media-kit-intro-item" v-for="(item, index) in data.list" :key="index">
        <div class="media-kit-intro-item-image">
          <img :src="item.image.url" :alt="item.title" :width="item.image.width" :height="item.image.height" loading="lazy">
        </div>
        <h5>{{item.title}}</h5>
        <p v-html="item.text"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MediaKitIntro',
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
.media-kit-intro
  width 100%
  box()
  margin 50px 0
.media-kit-intro-list
  margin 40px 0
  display flex
  justify-content space-between
  align-items flex-start
  width 100%
  flex-wrap wrap
.media-kit-intro-text
  p
    font-size 24px
    line-height 150%
    color #33AAFF
    margin-bottom 20px
.media-kit-intro-item-image
  height 125px
  display flex
  justify-content center
  margin-bottom 30px
.media-kit-intro-item
  width calc(100% / 3 - 40px)
  h5
    text-align center
    color #0096FF
    font-size 20px
    line-height 150%
    margin 0
  p
    text-align center
    line-height 150%
    font-size 16px
@media all and (max-width: 900px)
  .media-kit-intro-item
    width 100%
    h5
      font-size 18px
  .media-kit-intro-text
    p
      font-size 20px
</style>