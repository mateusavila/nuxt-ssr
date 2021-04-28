<template>
  <div class="growth-box">
    <div class="growth-box-info">
      <div class="growth-box-info-item">
        <p class="growth-label" v-html="translate.lines"></p>
        <p class="growth-data">{{data.begin}}</p>
      </div>
      <div class="growth-box-info-item">
        <p class="growth-label" v-html="translate.parcel"></p>
        <p class="growth-data">{{data.parcel}}</p>
      </div>
      <div class="growth-box-info-item">
        <p class="growth-label" v-html="translate.ideal"></p>
        <p class="growth-data">{{data.ideal}}</p>
      </div>
    </div>
    <div class="growth-box-action">
      <LinkBox :text="data.button" :url="data.link" color="blue" cssClass="big" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'GrowthBox',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    },
    negativeMargin: {
      type: String,
      required: false,
      default: '0px'
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate.growthbox },
  },
  mounted () {
    this.setStyle()
  },
  methods: {
    setStyle () {
      this.$el.style.setProperty('--margin-top', `${this.negativeMargin}`)
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.growth-box
  margin-top var(--margin-top)
  margin-left auto
  margin-right auto
  margin-bottom 40px
  background #fff
  border-radius 8px
  width calc(100% - 64px)
  max-width: 1140px
  padding 32px 25px
  position relative
  z-index 10
  box-shadow: 0px 4px 16px rgba(64, 158, 255, 0.1)
  display flex
  align-items center
  justify-content space-between
  flex-wrap wrap
  .growth-box-action
    width 243px
  .growth-box-info
    width calc(100% - 280px)
    display flex
    align-items center
    justify-content space-between
    flex-wrap wrap
  .growth-box-info-item
    width calc(100% / 3)
    display flex
    align-items center
    flex-wrap wrap
    justify-content flex-start
  .growth-label
    width 70px
    font-size 14px
    line-height 18px
    color #00154B
    margin 0
    font-weight bold
  .growth-data
    font-size 28px
    line-height 110%
    font-weight bold
    margin-left 10px
    color #FF7A0D
    max-width calc(100% - 80px)
@media all and (max-width: 1200px)
  .growth-box
    .growth-data
      font-size 22px
    .growth-box-action
      width 210px
    .growth-box-info
      width calc(100% - 215px)
@media all and (max-width: 1100px)
  .growth-box
    width calc(100% - 40px)
@media all and (max-width: 1000px)
  .growth-box
    padding 15px
    .growth-data
      font-size 18px
    .growth-box-info-item
      width 100%
      margin 5px 0
    .growth-label
      width auto
      br
        display none
    
@media all and (max-width: 600px)
  .growth-box
    width calc(100% - 20px)
    .growth-box-info
      width 100%
    .growth-box-action
      width 210px
      margin 20px auto 0
    .growth-box-info-item
      justify-content center
</style>