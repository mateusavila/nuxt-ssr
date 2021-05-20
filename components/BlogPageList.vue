<template>
  <div class="blog-page-list-master">
    <div class="container">
      <div class="blog-page-list" v-if="list.length">
        <BlogItem :data="item" v-for="(item, index) in list" :key="index" />
      </div>
      <div class="blog-page-empty" v-if="list.length === 0">
        <h2>Sem resultados</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogPageList',
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  },
  computed: {
    loading () { return this.$store.state.news.loading }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.blog-page-list-master
  margin 30px 0
  .container
    width calc(100% - 64px)
    max-width 1200px
    margin 0 auto
.blog-page-list
  display grid
  grid-template-columns 1fr 1fr 1fr
  grid-gap 0 16px
.blog-page-empty
  padding 30px
  border 1px solid #ddd
  display flex
  width 100%
  margin 50px 0
  background #fff
  justify-content center
@media all and (max-width: 1100px)
  .blog-page-list
    grid-template-columns 1fr 1fr
  .blog-page-list-master 
    .container
      width calc(100% - 40px)
@media all and (max-width: 750px)
  .blog-page-list
    grid-template-columns 1fr
@media all and (max-width: 600px)
  .blog-page-list-master
    .container
      width calc(100% - 20px)
</style>