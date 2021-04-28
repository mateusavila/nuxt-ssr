<template>
  <nuxt-link :to="`/blog/${data.news.post_name}`" class="blog-main-slider-item">
    <ImageBox :images="data.news.acf.images" :alternate="data.news.post_title" />
    <div class="blog-main-slider-item-info">
      <h4>{{data.news.post_title}}</h4>
      <p><strong>{{fullname}}</strong> | {{data.news.author_data.job}}</p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'BlogMainSliderItem',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  },
  computed: {
    fullname () { return `${this.data.news.author_data.first_name} ${this.data.news.author_data.last_name}` }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.blog-main-slider-item
  width 100%
  position relative
  height 0
  padding-bottom 45%
  display block
  color #fff
  border-radius 4px
  overflow hidden
  &:after
    content ''
    z-index 2
    background: linear-gradient(to bottom, rgba(0,21,75,0) 0%,rgba(0,21,75,0.8) 84%)
    filler()
    height calc(100% + 50px)
    transform translateY(0)
    border-radius 4px
    transition .2s all cubic-bezier(0.165, 0.84, 0.44, 1)
  .image-box
    z-index 1
    width 100%
    height 100%
    filler()
    img
      filler()
      transition .2s all cubic-bezier(0.165, 0.84, 0.44, 1)
      border-radius 4px
  &:hover
    &:after
      transition .2s all cubic-bezier(0.165, 0.84, 0.44, 1)
      transform translateY(-50px)
    .image-box
      img
        transition .2s all cubic-bezier(0.165, 0.84, 0.44, 1)
        transform scale(1.1)
.blog-main-slider-item-info
  position absolute
  z-index 3
  bottom 24px
  left 32px
  width calc(100% - 64px)
  h4
    font-size 24px
    line-height 150%
  p
    font-size 14px
    line-height 150%
@media all and (max-width: 1000px)
  .blog-main-slider-item
    padding-bottom 50%
@media all and (max-width: 800px)
  .blog-main-slider-item-info
    left 20px
    width calc(100% - 40px)
    h4
      font-size 20px
  .blog-main-slider-item
    padding-bottom 55%
@media all and (max-width: 600px)
  .blog-main-slider-item-info
    left 10px
    width calc(100% - 20px)
  .blog-main-slider-item
    padding-bottom 80%
@media all and (max-width: 500px)
  .blog-main-slider-item-info
    bottom 36px
    p
      margin-top 5px
@media all and (max-width: 400px)
  .blog-main-slider-item
    padding-bottom 90%
  .blog-main-slider-item-info
    h4
      clamplines(2)
</style>