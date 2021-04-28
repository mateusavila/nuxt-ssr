<template>
  <div class="news-categories">
    <nuxt-link to="/blog" exact class="news-categories-item">
      <div class="news-categories-image">
        <img src="~assets/img/category-all.svg" alt="All" width="32" height="32" loading="lazy" class="news-categories-image-img">
        <img src="~assets/img/category-all-hover.svg" alt="All hover" width="32" height="32" loading="lazy" class="news-categories-image-img-hover">
      </div>
      <div class="news-categories-info">
        <p>{{translate.blog.filter.category_all}}</p>
      </div>
    </nuxt-link>
    <nuxt-link :to="'/category/'+item.category.slug" v-for="(item, index) in list" :key="index" class="news-categories-item">
      <div class="news-categories-image">
        <img :src="item.images.image.url" :alt="item.category.name" width="32" height="32" loading="lazy" class="news-categories-image-img">
        <img :src="item.images.image_hover.url" :alt="item.category.name +'hover'" width="32" height="32" loading="lazy" class="news-categories-image-img-hover">
      </div>
      <div class="news-categories-info">
        <p>{{item.category.name}}</p>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'NewsCategories',
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.news-categories
  width 350px
  display flex
  justify-content space-between
  text-decoration none
  align-items flex-start
  color #0096FF
.news-categories-item
  display flex
  justify-content center
  flex-wrap wrap
  text-decoration none
  &.nuxt-link-active
    .news-categories-info
      font-weight bold
      color #0096FF
    .news-categories-image
      img
        &.news-categories-image-img-hover
          opacity 1
          visibility visible
        &.news-categories-image-img
          opacity 0
          visibility hidden
  &:hover
    .news-categories-info
      color #0096FF
    .news-categories-image
      img
        &.news-categories-image-img-hover
          opacity 1
          visibility visible
        &.news-categories-image-img
          opacity 0
          visibility hidden
  .news-categories-image
    width 64px
    height 64px
    background #fff
    border-radius 8px
    box-shadow 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
    position relative
    img
      centerPerfect()
      width 32px
      height 32px
      transitions(.2s)
      &.news-categories-image-img
        opacity 1
        visibility visible
      &.news-categories-image-img-hover
        opacity 0
        visibility hidden
.news-categories-info
  font-size 12px
  text-align center
  margin-top 10px
  color #00154B
@media all and (max-width: 1100px)
  .news-categories
    margin 0 auto
@media all and (max-width: 400px)
  .news-categories
    width 100%
</style>