<template>
  <div class="steps">
    <div class="container">
      <TitleH3 :text="title" css-class="light-blue" />
      <div class="steps-list">
        <div class="steps-item" v-for="(item, index) in list" :key="index">
          <div class="step-arrow" v-if="index != Object.keys(list).length - 1"></div>
          <div class="steps-item-image">
            <img :src="item.image.url" :alt="item.text" :width="item.image.width" :height="item.image.height" loading="lazy">
          </div>
          <p v-html="item.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Steps',
 props: {
  title: {
    type: String,
    required: false,
    default: ''
  },
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
.steps 
  padding 50px 0
  .container
    margin 0 auto
    max-width 1200px
    width calc(100% - 64px)
.steps-list
  display flex
  justify-content space-between
  align-items flex-start
.steps-item
  padding 37px
  width calc(100% / 4 - 30px)
  height 340px
  text-align center
  position relative
  border-radius 30px
  border 3px solid #0096FF
  &:first-child
    &:before
      display none
  &:last-child
    &:after
      display none
  &:before, &:after
    content ''
    position absolute
    top 50%
    transform translateY(-50%)
    width 3px
    background #00154b
    z-index 1
  &:before
    margin-top 0px
    height 85px
    left -3px
  &:after
    margin-top 0
    height 50px
    right -3px
  .step-arrow
    position absolute
    top 50%
    transform translateY(-50%)
    z-index 2
    right -64px
    width 64px
    height 53px
    background-image url('~assets/img/steps-arrow.svg')
  .steps-item-image
    width 100%
    height 120px
    display flex
    justify-content center
    margin-bottom 48px
  p
    color #fff
    font-size 20px
    line-height 150%
  a
    color #fff
@media all and (max-width: 1250px)
  .steps-item
    p
      font-size 18px
@media all and (max-width: 1000px)
  .steps-list
    flex-wrap wrap
  .steps-item
    width 100%
    margin 0 0 35px
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items center
    height auto
    border-width 7px
    text-align left
    &:before
      width 90px
      left calc(50% - 52px)
      right auto
      height 8px
      top -4px
    &:after
      width 45px
      left calc(50% - 28px)
      right auto
      bottom -12px
      height 8px
      margin auto
      top auto
    .step-arrow
      background-image url('~assets/img/step-arrow-down.svg')
      transform translateX(-50%)
      right auto
      background-repeat no-repeat
      left 50%
      height 72px
      top auto
      bottom -72px
      margin-left -5px
    .steps-item-image
      width 120px
      margin-bottom 0
    p
      width calc(100% - 160px)
@media all and (max-width: 600px)
  .steps
    .container
      width calc(100% - 20px)
  .steps-item
    padding 20px
    .steps-item-image
      width 70px
      img
        max-width 100%
        height auto
        display block
    p
      width calc(100% - 90px)
      font-size 14px
</style>