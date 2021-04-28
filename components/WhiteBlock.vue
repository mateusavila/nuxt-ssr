<template>
  <div class="white-block">
    <TitleH3 :text="data.title" />
    <p>{{data.text}}</p>
    <LinkBox 
      color="blue"
      :url="data.link_know"
      :text="data.button_know"
    />
  </div>
</template>
<script>
export default {
  name: 'WhiteBlock',
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
.white-block
  max-width 1200px
  background #fff
  margin 100px auto 80px
  width calc(100% - 64px)
  text-align center
  padding 28px 28px 20px
  box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
  p
    font-size 20px
    line-height 150%
    margin-bottom 40px
    color #606266
@media all and (max-width: 1250px)
  .white-block
    p
      font-size: clamp(16px, calc(1rem + (20 - 16) * ((100vw - 340px) / (1250 - 340))), 20px)
@media all and (max-width: 600px)
  .white-block
    border-radius 16px
    padding 20px
    width calc(100% - 24px)
    margin 60px auto 20px
</style>