<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-content-center">
        <div class="hero-content-title" v-html="data.title"></div>
        <div class="hero-content-buttons">
          <LinkBox
            color="blue"
            :url="data.link"
            :text="data.button_begin"
          />
          <LinkBox
            color="white"
            :url="data.link"
            :text="data.button_2"
            v-if="data.button_2"
          />
        </div>
      </div>
      <ImageBox 
        loading="eager" 
        :images="data.images"
        css-class="hero-image"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Hero',
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
.hero
  position relative
  background #00154b
  overflow hidden
  height 1100px
  padding-top 77px
  display flex
  &:before, &:after
    content ''
    position absolute
    left 0
    bottom 0
    background #F2F6FC
    width 100%
  &:before
    height 1px
  &:after
    height 444px
    clip-path: polygon(0 100%, 100% 100%, 100% 0)
  .hero-content
    width calc(100% - (64px * 2))
    margin 0 auto
    height 100%
.hero-content-center
  margin-top 220px
  color #fff
  position relative
  z-index 10
  max-width 520px
  .hero-content-buttons
    margin-top 55px
    .link-area:nth-child(2)
      margin-top 30px
  p
    font-size 20px
    line-height 150%
  h1
    margin 0
    font-size 47px
    line-height 150%
    font-weight 400
    strong
      font-size 56px
@media all and (max-width: 1300px)
  .hero 
    overflow hidden
    .hero-content
      width calc(100% - 64px)
  .hero-content-center
    h1
      font-size: clamp(20px, calc(1.25rem + (47 - 20) * ((100vw - 320px) / (1300 - 320))), 47px)
      strong
        font-size: clamp(24px, calc(1.5rem + (56 - 24) * ((100vw - 320px) / (1300 - 320))), 56px)
@media all and (max-width: 1000px)
  .hero 
    margin-bottom 80px
    height auto
    &:after
      height 20%
      bottom 338px
    &:before
      height 339px
    .hero-content
      display flex
      flex-wrap wrap
      width 100%
  .hero-content-center
    margin 0 auto
    order 2
    display flex
    flex-wrap wrap
    text-align center
    justify-content center
    color #00417f
    h1
      display block
      width 100%
      color #00417f
    p
      margin-top 20px
      color #00417f
      font-size 16px
  .hero-content-title
    width 100%
@media all and (max-width: 600px)
  .hero 
    margin-bottom 80px
    &:after
      height 20%
      bottom 300px
    &:before
      height 301px
@media all and (max-width: 500px)
  .hero 
    &:after
      height 80px
      bottom 340px
      clip-path: polygon(0 100%, 100% 100%, 100% 0)
    &:before
      height 340px
@media all and (max-width: 400px)
  .hero 
    h1
      margin-top 40px
</style>