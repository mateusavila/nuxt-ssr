<template>
  <div class="how-works-new">
    <div class="container">
      <h2>{{translate.howworks.title}}</h2>
      <div class="how-works-new-list">
        <div class="how-works-new-item" v-for="(item, index) in data.list" :key="index">
          <span class="how-works-new-index">{{index + 1}}</span>
          <p class="how-works-new-title">{{item.title}}</p>
          <p class="how-works-new-text">{{item.text}}</p>
        </div>
      </div>
      <div class="how-works-action">
        <LinkBox :text="data.button" :url="data.link" color="dark-blue" css-class="huge" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HowWorksNew',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.how-works-new
  margin 100px 0
  .container
    width calc(100% - 64px)
    margin 0 auto
    max-width 1140px
  h2
    color #00154B
    font-size 50px
    line-height 150%
    text-align center
.how-works-new-list
  display flex
  justify-content space-between
  flex-wrap wrap
  align-items stretch
  margin 80px 0
.how-works-new-item
  padding 50px 20px
  border-radius 16px
  position relative
  display flex
  align-items center
  flex-wrap wrap
  align-content center
  text-align left
  min-height 266px
  width calc((100% / 4) - 5px)
  &:nth-child(odd)
    background #00154B
    .how-works-new-index
      background #FF7A0D
  &:nth-child(even)
    background #FF7A0D
    .how-works-new-index
      background #00154B
  p
    color #fff
    text-align left
  .how-works-new-text
    font-weight normal
    font-size 14px
  .how-works-new-title
    font-weight 700
    font-size 25px
    margin-bottom 20px
  .how-works-new-index
    position absolute
    top -30px
    width 60px
    height 60px
    display flex
    align-items center
    justify-content center
    font-size 25px
    font-weight bold
    color #fff
    border-radius 100%
.how-works-action
  display flex
  justify-content center
@media all and (max-width: 1100px)
  .how-works-new
    .container
      width calc(100% - 40px)
    h2
      font-size: clamp(24px, calc(1.5rem + (50 - 24) * ((100vw - 400px) / (1100 - 400))), 50px)
  .how-works-new-item
    width calc(100% / 2 - 10px)
    margin-bottom 50px
    .how-works-new-title
      font-size 20px
  .how-works-new-list
    margin 60px 0 20px
@media all and (max-width: 750px)
  .how-works-new-item
    width 100%
    height auto
    min-height auto
    .how-works-new-index
      width 45px
      height 45px
      font-size 18px
      top calc(45px / 2 * -1)
@media all and (max-width: 600px)
  .how-works-new
    margin 35px 0
    .container
      width calc(100% - 20px)
  .how-works-action
    .link-area
      width 100%
      a
        width 100%
</style>