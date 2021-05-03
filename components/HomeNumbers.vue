<template>
  <div class="home-numbers">
    <div class="container">
      <div class="home-numbers-list">
        <div class="home-numbers-item" v-for="(item, index) in list" :key="index">
          <p class="home-numbers-item-title"><strong>{{item.value}}</strong><br>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeNumbers',
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.home-numbers
  box()
  margin 0 0 50px
  .container
    width calc(100% - 64px)
    margin 0 auto
    max-width 1140px
.home-numbers-list
  display flex
  justify-content space-between
  flex-wrap wrap
.home-numbers-item
  width calc(50% - 20px)
  text-align center
.home-numbers-item-title
  font-size 20px
  line-height 150%
  color #00154B
  font-weight 500
  strong
    color #FF7A0D
    font-size 45px
    line-height 32px

@media all and (max-width: 1100px)
  .home-numbers
    .container
      width calc(100% - 40px) 
@media all and (max-width: 1000px)
  .home-numbers-item
    width 100%
    margin-bottom 30px
  .home-numbers-item-title
    font-size 18px
    strong
      font-size 32px
@media all and (max-width: 600px)
  .home-numbers
    .container
      width calc(100% - 20px)
</style>