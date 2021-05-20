<template>
  <div class="analytics">
    <div class="container">
      <img :src="data.image.url" />
      <aside>
        <p v-html="data.text"></p>
        <LinkBox :text="data.cta" url="/analytics" />
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Analytics',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    data: {
      type: Object,
      required: false,
      default: []
    }
  },
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.analytics
  padding 80px 0
  position relative
  &::before
    z-index 1
    background linear-gradient(180deg, rgba(0, 21, 75, 0) 84.54%, #00154B 100%), linear-gradient(180deg, #00154B 27.88%, rgba(0, 21, 75, 0) 62.07%), linear-gradient(115.83deg, #041C82 39.81%, #00122B 71.09%, #440784 88.61%)
    transform matrix(-1, 0, 0, 1, 0, 0)
    content ""
    position absolute
    height 100%
    width 100%
    left 0
    top 0

  > .container
    margin 0 auto
    z-index 2
    position relative
    max-width 1200px
    width calc(100% - 64px)
    display flex
    flex-flow row wrap
    > img
      flex 0 50%
      width 100%
      height auto
    > aside
      flex 1
      padding 37px
      display flex
      flex-flow row wrap
      p
        margin auto
        font-family Montserrat
        font-weight bold
        font-size 32px
        line-height 1.5
        text-align right
        max-width 452px
      > div
        margin 5px auto 0

  @media all and (max-width: 1200px)
    padding 0
    > .container
      > img
        display none
      > aside
        min-width 452px
        p
          width 100%
          max-width 452px
        > div
          margin 20px auto 0
          width 100%
          text-align center
</style>
