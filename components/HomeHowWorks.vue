<template>
  <div class="home-how-works">
    <div class="container">
      <h2>{{data.title}}</h2>
      <div class="home-how-works-list">
        <div class="home-how-works-item" v-for="(item, index) in data.list" :key="index">
          <div class="home-how-works-item-icon">
             <img 
             :src="item.image.url" 
             :alt="item.image.description" 
             :width="item.image.width"
             :height="item.image.height"
             loading="lazy">
          </div>
          <div class="home-how-works-item-info">
            <h4>{{item.title}}</h4>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
      <div class="home-how-works-action">
        <LinkBox :text="data.button" :url="data.link" color="orange" css-class="huge" />
      </div>  
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHowWorks',
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
.home-how-works
  box()
  padding 170px 0
  background #00154B
  .container
    max-width 1140px
    margin 0 auto
    width calc(100% - 64px)
  h2
    text-align center
    color #fff
    font-size 50px
    line-height 150%
    margin-bottom 30px
.home-how-works-action
  margin-top 50px
  display flex
  justify-content center
.home-how-works-list
  display flex
  justify-content space-between
  align-items flex-start
  flex-wrap wrap
.home-how-works-item
  width calc(100% / 3 - 32px)
.home-how-works-item-icon
  height 110px
  margin-bottom 30px
  display flex
  justify-content center
.home-how-works-item-info
  width 100%
  color #fff
  text-align center
  h4
    color #fff
    font-size 24px
    margin-bottom 10px
  p
    font-size 16px
@media all and (max-width: 1100px)
  .home-how-works
    padding 80px 0
    .container
      width calc(100% - 40px) 
    h2
      font-size: clamp(24px, calc(1.5rem + (50 - 24) * ((100vw - 400px) / (1100 - 400))), 50px)
@media all and (max-width: 1000px)
  .home-how-works-item
    width 100%
    margin-bottom 50px
    text-align left
  .home-how-works-item-info 
    h4
      font-size 20px
    p
      font-size 15px
@media all and (max-width: 600px)
  .home-how-works
    .container
      width calc(100% - 20px)
</style>