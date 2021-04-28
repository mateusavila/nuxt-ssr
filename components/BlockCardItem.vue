<template>
  <div class="block-card-item">
    <div class="block-card-image">
      <img 
        :src="data.image.url" 
        :alt="data.image.description" 
        :width="data.image.width"
        :height="data.image.height"
        loading="lazy" 
      />
    </div>
    <div class="block-card-content">
      <h3>{{data.title}}</h3>
      <p v-html="data.text"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlockItemCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.block-card-item
  background #fff
  padding 32px
  text-align center
  width calc(50% - 2px)
  min-height 600px
  box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
  &:nth-child(1)
    border-top-left-radius 8px
    border-bottom-left-radius 8px
  &:nth-child(2)
    border-top-right-radius 8px
    border-bottom-right-radius 8px
  h3
    font-size 40px
    color #0096ff
    font-weight bold
    margin-bottom 20px
  p
    font-size 24px
    line-height 150%
    color #606266
.block-card-image
  margin-bottom 20px
  img
    max-width 290px
    margin 0 auto
    height auto
    display block
@media all and (max-width: 1250px)
  .block-card-item
    h3
      font-size: clamp(24px, calc(1.5rem + (40 - 24) * ((100vw - 340px) / (1250 - 340))), 40px)
    p
      font-size: clamp(14px, calc(0.875rem + (24 - 14) * ((100vw - 340px) / (1250 - 340))), 24px)
@media all and (max-width: 900px)
  .block-card-item
    width 100%
    height auto
    min-height auto
    margin 0 0 5px
@media all and (max-width: 500px)
  .block-card-image
    img
      display block
      height auto
      max-width 100%
</style>