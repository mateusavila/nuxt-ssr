<template>
  <div class="home-clipping">
    <div class="container">
      <div class="home-clipping-text" v-html="data.text"></div>
      <div class="home-clipping-list">
        <div class="home-clipping-item" v-for="(item, index) in data.list" :key="index">
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <img 
              :src="item.image.url" 
              :alt="item.image.description" 
              :width="item.image.width"
              :height="item.image.height"
              loading="lazy">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeClipping',
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
.home-clipping
  box()
  background #00154B
  padding 170px 0
  .container
    width calc(100% - 64px)
    margin 0 auto
    max-width 1140px
  h3
    font-size 32px
    line-height 150%
    color #fff
    text-align center
    margin-bottom 80px
.home-clipping-list
  display flex
  justify-content space-between
  flex-wrap wrap
  align-items center
  a
    will-change opacity
    transitions(.2s)
    &:hover
      opacity 0.7
      transitions(.2s)
@media all and (max-width: 1100px)
  .home-clipping
    padding 80px 0
    .container
      width calc(100% - 40px) 
    h3
      font-size: clamp(24px, calc(1.5rem + (32 - 24) * ((100vw - 360px) / (1100 - 360))), 32px)
@media all and (max-width: 1000px)
  .home-clipping-list
    flex-wrap wrap
    .home-clipping-item
      width 100%
      text-align center
    a
      margin 0 auto 40px
      display block
      text-align center
@media all and (max-width: 600px)
  .home-clipping
    .container
      width calc(100% - 20px)
  .home-clipping-list
    .home-clipping-item
      img
        max-height 32px
        width auto
        display inline-block
</style>