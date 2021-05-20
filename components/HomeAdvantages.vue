<template>
  <div class="home-advantages">
    <div class="container">
      <div class="home-advantages-list">
        <div class="home-advantages-item" v-for="(item, index) in list" :key="index">
          <h4>{{item.title}}</h4>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeAdvantages',
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  },
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.home-advantages
  box()
  background #fff
  padding 180px 0
  .container
    width calc(100% - 64px)
    margin 0 auto
    max-width 1140px
    position relative
.home-advantages-list
  display flex
  align-items flex-start
  flex-wrap wrap
  justify-content space-between
.home-advantages-item
  width calc(100% / 3 - 30px)
  text-align center
  h4
    color #00154B
    font-size 50px
    line-height 150%
  p
    color #606266
    font-size 24px
    line-height 150%
@media all and (max-width: 1200px)
  .home-advantages
    padding 80px 0
    .container
      width calc(100% - 40px) 
  .home-advantages-item
    h4
      font-size: clamp(24px, calc(1.5rem + (40 - 24) * ((100vw - 360px) / (1200 - 360))), 40px);
    p
      font-size: clamp(18px, calc(1.125rem + (24 - 18) * ((100vw - 360px) / (1200 - 360))), 24px)
@media all and (max-width: 1000px)
  .home-advantages-item
    width 100%
    margin-bottom 40px
@media all and (max-width: 600px)
  .home-advantages
    padding 60px 0
    .container
      width calc(100% - 20px)
</style>