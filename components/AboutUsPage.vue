<template>
  <div class="about-page-text">
    <div class="container">
      <div class="about-page-text-main">
        <div class="about-page-text-item">
          <div class="about-page-text-item-text" v-html="data.about"></div>
        </div>
        <div class="about-page-text-item">
          <div class="about-page-text-item-text" v-html="data.purpose"></div>
        </div>
      </div>
      <div class="about-page-text-side">
        <div class="about-page-text-item">
          <div class="about-page-text-item-text" v-html="data.business"></div>
        </div>
        <div class="about-page-text-item">
          <div class="about-page-text-item-text" v-html="data.mission"></div>
        </div>
        <div class="about-page-text-item">
          <div class="about-page-text-item-text" v-html="data.vision"></div>
        </div>
        <div class="about-page-text-item">
          <div class="about-page-text-item-text" v-html="data.values"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutUsPage',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.about-page-text
  margin 100px 0
  .container
    width calc(100% - 64px)
    max-width 1140px
    margin 0 auto
    display flex
    align-items flex-start
    justify-content space-between
.about-page-text-item
  h2, h3
    margin-bottom 30px
    color #00154B
    line-height 150%
  h2
    font-size 48px
  h3
    font-size 32px
  p
    color #606266
    line-height 150%
    margin-bottom 20px
.about-page-text-main
  width calc(100% - 450px)
  max-width 650px
  p
    font-size 20px
.about-page-text-side
  width 364px
  p
    font-size 18px
@media all and (max-width: 1100px)
  .about-page-text
    .container
      width calc(100% - 40px)
      flex-wrap wrap
@media all and (max-width: 1000px)
  .about-page-text-main
    width 100%
    max-width 100%
    p
      font-size 18px
    h2
      font-size 32px
    h3
      font-size 24px
  .about-page-text-side
    width 100%
    p
      font-size 16px
@media all and (max-width: 600px)
  .about-page-text
    margin 50px 0
    .container
      width calc(100% - 20px)
  .about-page-text-item
    margin-top 30px
  .about-page-text-main
    width 100%
    max-width 100%
    p
      font-size 15px
    h2
      font-size 28px
      margin-bottom 20px
  .about-page-text-side
    width 100%
    p
      font-size 15px
    h3
      font-size 20px
      margin-bottom 20px
</style>