<template>
  <div class="blog-filter">
    <div class="container">
      <NewsCategories :list="categories" />
      <div class="news-search-select">
        <NewsSearch @search="search" />
        <NewsSelect :orders="translate.blog.filter.orders" :label="title" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogFilter',
  props: {
    categories: {
      type: Array,
      required: false,
      default: []
    }
  },
  computed: {
    title () {
      if (!this.$route.params.orderby) return this.translate.blog.filter.order_label
      const filterTitle = this.translate.blog.filter.orders.find(el => el.slug === this.$route.params.orderby)
      return filterTitle.name
    },
    translate () { return this.$store.state.translate.translate }
  },
  methods: {
    search (word) { this.$emit('search', word) }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.blog-filter
  margin 0 0 50px
  .container
    width calc(100% - 64px)
    max-width 1140px
    position relative
    margin 0 auto
    display flex
    flex-wrap wrap
    align-items flex-start
    justify-content space-between
.news-search-select
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
  width calc(100% - 380px)
@media all and (max-width: 1100px)
  .blog-filter
    .container
      width calc(100% - 40px)
  .news-search-select
    width 100%
    margin-top 30px
@media all and (max-width: 600px)
  .blog-filter
    .container
      padding-top 20px
      width calc(100% - 30px)
</style>