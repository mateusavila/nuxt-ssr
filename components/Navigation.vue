<template>
  <nav class="main-navigation" :class="{'active': statusMenu}" data-test="1">
    <ul>
      <li v-for="(link, index) in translate.header.menu" :key="index" v-if="menu === 'default'">
        <nuxt-link :to="link.slug" @click.native="newPage(link.slug)" exact>{{link.name}}</nuxt-link v-if="!link.external">
        <a :href="link.slug" target="_blank" rel="noopener noreferrer" v-if="link.external">{{link.name}}</a>
      </li>
      <li v-for="(link, index) in translate.partners.menu" :key="index" v-if="menu === 'partners'">
        <nuxt-link :to="link.slug" @click.native="newPage(link.slug)" exact v-if="!link.external">{{link.name}}</nuxt-link>
        <a :href="link.slug" target="_blank" rel="noopener noreferrer" v-if="link.external">{{link.name}}</a>
      </li>
    </ul>
    <LinkBox
      :external="true"
      :url="translate.header.login.url"
      :text="translate.header.login.text"
      color="blue mobile-navigation"
      v-if="menu === 'default'"
       />
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
  props: {
    statusMenu: {
      default: false,
      required: true,
      type: Boolean
    },
    menu: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  computed: {
    options () { return this.$store.state.options.options },
    translate () { return this.$store.state.translate.translate }
  },
  methods: {
    newPage (slug) { 
      this.$emit('close') 
      if (window.location.pathname === slug) return false
      this.$store.commit('page/updateLoaded', false)
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.main-navigation
  width calc(100% - 200px)
  align-items center
  align-content center
  display flex
  justify-content space-between
  ul
    width 650px
    margin 0
    padding 0
    display flex
    margin-right 30px
    list-style-type none
    justify-content space-between
    li.mobile
      display none
    a
      font-size 18px
      color #fff
      text-decoration none
      position relative
      transitions(.2s)
      &.nuxt-link-active
        color #3371F2
        transitions(.2s)
        &:after
          background #3371F2
          width 100%
          transitions(.2s)
      &:hover:after
        width 100%
        transitions(.2s)
      &:after
        content ''
        width 0
        background #fff
        position absolute
        bottom -8px
        left 0
        height 2px
        transitions(.2s)
@media all and (max-width: 1000px)
  .main-navigation
    position fixed
    z-index 100
    opacity 0
    overflow hidden
    visibility hidden
    height 0
    flex-wrap wrap
    align-content center
    align-items center
    top 0
    background #00154B
    width 100%
    transition all .3s cubic-bezier(0.165, 0.84, 0.44, 1)
    will-change opacity, height
    &.active
      height 100vh
      visibility visible
      opacity 1
      transition all .3s cubic-bezier(0.165, 0.84, 0.44, 1)
    ul 
      width 100%
      display block
      margin 0
      text-align center
      li
        display block
        margin 30px 0
      li.mobile
        display block
      a
        font-size 20px
        font-weight bold
        &.nuxt-link-exact-active
          color #33AAFF
        &:after
          display none
    .link-area
      margin 0 auto
      
</style>