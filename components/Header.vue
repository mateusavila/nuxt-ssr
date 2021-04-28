<template>
  <header class="main-header" :class="[{'active': scroll > 0, 'hide-menu': hideMenu && scroll > 250 && !statusMenu }, cssClass]">
    <div class="header-container">
      <Logo :scroll="scroll" :css-class="logoClass" :logo-text="logoText" />
      <Navigation :status-menu="statusMenu" @close="closeMenu" :menu="menu" />
      <MenuOpen @action="openMenu" :status-menu="statusMenu" />
    </div>
  </header>
</template>
<script>
export default {
  props: {
    cssClass: {
      type: String,
      required: false,
      default: ''
    },
    logoClass: {
      type: String,
      required: false,
      default: ''
    },
    logoText: {
      type: String,
      required: false,
      default: ''
    },
    menu: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  data: () => ({
    scroll: 0,
    lastScroll: 0,
    hideMenu: false,
    statusMenu: false
  }),
  created () {
    window.addEventListener('scroll', this.scrollEvent)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    scrollEvent () {
      this.scroll = window.pageYOffset
      this.hideMenu = (this.scroll > this.lastScroll) ? true : false
      this.lastScroll = this.scroll
    },
    openMenuEvent () { this.openMenu = !this.openMenu },
    closeMenu () { this.statusMenu = false },
    openMenu () { this.statusMenu = !this.statusMenu }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
header
  position fixed
  top 0
  left 0
  height 144px
  z-index 10001
  width 100%
  transitions(.2s)
  will-change opacity, background
  background #00154B
  &.transparent
    background #00154B
    transitions(.2s)
    &.active
      background #00154B
      transitions(.2s)
  &.active
    background #00154B
    height 70px
    transitions(.2s)
  &.hide-menu
    transform translateY(-122px)
.header-container
  justify-content space-between
  width calc(100% - 64px)
  max-width 1140px
  display flex
  margin 0 auto
  height 100%
  align-items center
@media all and (max-width: 1200px)
  .header-container
    width calc(100% - 64px)
@media all and (max-width: 1000px)
  header
    height 70px
  .header-container
    justify-content center
    width calc(100% - 32px)
@media all and (max-width: 750px)
  .header-container
    width calc(100% - 20px)
</style>
