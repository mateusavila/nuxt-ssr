<template>
  <div class="page-single-content-area">
    <div class="page-text" v-html="data.content"></div>
  </div>
</template>
<script>
export default {
  name: 'PageContent',
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
.page-single-content-area
  margin 40px 0 60px
.page-text
  color #606266
  line-height 150%
  a
    color #0096FF
    text-decoration none
    &:hover
      text-decoration underline
  h1, h2, h3, h4, h5, h6
    margin 20px 0
    color #00417F
    line-height 150%
  h1
    font-size 40px
  h2
    font-size 30px
  h3
    font-size 24px
  h4
    font-size 20px
  h5
    font-size 18px
  h6
    font-size 16px
  p
    font-size 16px
    line-height 150%
  img
    max-width 100%
    height auto
    display block
    margin 20px 0 40px
    &:first-child
      border-radius 4px
.aligncenter,.alignleft,.alignright
    display block
    padding 0
.aligncenter
    float none
    margin .5em auto 1em
.alignright
    float right
    margin .5em 0 1em 1em
.alignleft
    float left
    margin .5em 1em 1em 0
.wp-caption
    padding 5px 0
    border 1px solid #555
    background #444
    text-align center
.wp-caption img
    display inline
.wp-caption p.wp-caption-text
    margin 5px 0 0
    padding 0
    text-align center
    font-size 75%
    font-weight 100
    font-style italic
    color #ddd
@media all and (max-width: 1000px)
  .page-single-content-area
    margin-top 30px
  .page-text
    h1
      font-size 30px
    h2
      font-size 24px
    h3
      font-size 20px
    h4
      font-size 18px
    h5
      font-size 16px
    h6
      font-size 15px
    p
      font-size 15px
</style>