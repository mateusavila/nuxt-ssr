<template>
  <div class="blog-post-breadcrumbs">
    <p>
      <nuxt-link to="/">Home</nuxt-link>
      <img src="~assets/img/breadcrumb-next.svg" alt="next" width="16" height="16" loading="lazy">
      <nuxt-link to="/blog">Blog</nuxt-link>
      <img v-if="data.category[0]" src="~assets/img/breadcrumb-next.svg" alt="next" width="16" height="16" loading="lazy">
      <nuxt-link v-if="data.category[0]" :to="'/category/'+data.category[0].slug">{{data.category[0].name}}</nuxt-link>
      <img src="~assets/img/breadcrumb-next.svg" alt="next" width="16" height="16" loading="lazy">
      <strong v-html="data.title"></strong>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumbs',
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
.blog-post-breadcrumbs
  width 100%
  p
    display flex
    align-items center
    flex-wrap wrap
    font-size 12px
    line-height 18px
  a
    color #0096FF
    text-decoration none
    &:hover
      text-decoration underline
  strong
    color #606266
</style>