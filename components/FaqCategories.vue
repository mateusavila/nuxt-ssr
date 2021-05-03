<template>
  <div class="faq-categories">
    <div class="container">
      <div class="faq-categories-list">
        <ul>
          <li>
            <nuxt-link to="/faq" exact @click.native="newPage('/faq')">Faq</nuxt-link>
          </li>
          <li v-for="(item, index) in list" :key="index">
            <nuxt-link  :to="`/faq/${item.slug}`" @click.native="newPage(`/faq/${item.slug}`)">{{item.name}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqList',
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  },
  methods: {
    newPage (slug) { 
      if (window.location.pathname === slug) return false
      this.$store.commit('page/updateLoaded', false) 
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.faq-categories
  width 100%
  background #FF7A0D
  margin-bottom 50px
  .container
    max-width 1140px
    width calc(100% - 64px)
    display flex
    margin 0 auto
    align-content center
    align-items center
    height 100%
    flex-wrap wrap
.faq-categories-list
  border-radius 46px
  ul
    height 70px
    padding-left 0
    display flex
    align-items center
    width 100%
    list-style-type none
    li
      margin-left 30px
      &:first-child
        margin 0
  a
    font-size 16px
    color #fff
    font-weight bold
    text-decoration none
    transitions(.2s)
    &.nuxt-link-active, &:hover
      color #00154B
      transitions(.2s)
  
@media all and (max-width: 1000px)
  .faq-categories
    .container
      width calc(100% - 40px)
@media all and (max-width: 800px)
  .faq-categories-list
    width 100%
@media all and (max-width: 700px)
  .faq-categories
    padding 30px 0 10px
  .faq-categories-list
    display block
    padding 10px 20px
    border-radius 10px
    height auto
    ul
      display block
      height auto
      li
        margin 10px 0
@media all and (max-width: 600px)
  .faq-categories
    .container
      width calc(100% - 20px)  
</style>