<template>
  <div class="box-bureaucracy">
    <div class="box-bureaucracy-header">
      <div class="box-bureaucracy-header-info">
        <h2>{{data.title}}</h2>
        <h3>{{data.sub_title}}</h3>
        <div class="box-bureaucracy-content">
          <p>{{data.text}}</p>
          <p class="small">{{data.sub_text}}</p>
        </div>
      </div>
      <div class="box-bureaucracy-image">
        <img 
          :src="data.image.url" 
          :alt="data.title" 
          :width="data.image.width"
          :height="data.image.height"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bureaucracy',
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
.box-bureaucracy
  background #fff
  padding 60px 32px
  width calc(100% - 128px)
  max-width 1200px
  margin 60px auto
.box-bureaucracy-header
  display flex
  justify-content space-between
  flex-wrap wrap
.box-bureaucracy-header-info
  width calc(100% - 350px)
  padding-left 32px
  h2
    font-size 48px
    line-height 150%
    color #0096ff
  h3
    color #0096FF
    font-size 36px
    font-weight 600
    line-height 150%
.box-bureaucracy-content
  margin-top 30px
  p
    font-size 20px
    line-height 150%
    color #606266
    &.small
      font-weight bold
      margin-top 40px
      font-size 20px
@media all and (max-width: 1250px)
  .box-bureaucracy
    width calc(100% - 64px)
  .box-bureaucracy-image
    width 28%
    img
      max-width 100%
      display block
      height auto
  .box-bureaucracy-header-info
    width calc(100% - 30%)
    padding-left 0
  .box-bureaucracy-header-info 
    h2
      font-size: clamp(25px, calc(1.5625rem + (48 - 25) * ((100vw - 340px) / (1250 - 340))), 48px)
    h3
      font-size: clamp(24px, calc(1.5rem + (36 - 24) * ((100vw - 340px) / (1250 - 340))), 36px);
  .box-bureaucracy-content 
    p
      font-size: clamp(14px, calc(0.875rem + (20 - 14) * ((100vw - 340px) / (1250 - 340))), 20px);
      &.small
        font-size: clamp(14px, calc(0.875rem + (20 - 14) * ((100vw - 340px) / (1250 - 340))), 20px);
@media all and (max-width: 600px)
  .box-bureaucracy
    display flex
    flex-wrap wrap
    width calc(100% - 20px)
    padding 20px
    h2 
      margin-bottom 30px
  .box-bureaucracy-image
    width 100%
    order 1
    margin-bottom 20px
    img
      margin 0 auto
  .box-bureaucracy-header-info
    width 100%
    order 2
  .box-bureaucracy-content
    width 100%
    order 3
</style>