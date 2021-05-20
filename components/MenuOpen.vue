<template>
  <button 
    @click.prevent="action" 
    type="button" 
    class="menu-open hamburger"
    :class="{'active': statusMenu}">
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
</template>
<script>
export default {
  name: 'MenuOpen',
  props: {
    statusMenu: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate }
  },
  methods: {
    action () { this.$emit('action') }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.menu-open
  position absolute
  cursor pointer
  z-index 100
  right 10px
  top 50%
  transform translateY(-50%)
  border-radius 100%
  width 60px
  height 60px
  justify-content center
  align-items center
  background #00154B;
  box-shadow 0px 16px 24px rgba(0, 21, 75, 0.2), 0px 2px 6px rgba(0, 21, 75, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04)
  color #fff
  font-size 14px
  font-weight bold
  border none
  display none
  z-index 100
.hamburger
  display none
  cursor pointer
  transitions(.2s)
  background transparent
  border 0
  padding 0
  margin 0
  outline none
  z-index 1001
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after
    background #Fff
  &.active
    .hamburger-inner
      transform rotate(225deg)
      transition-delay 0.12s
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
      background #Fff
      &:before
        top 0
        left 0
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out
        background #Fff
      &:after
        bottom 0
        transform: rotate(-90deg)
        transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)
        background #Fff
.hamburger-box
  width 28px
  height calc((3px * 3) + (6px * 2))
  position relative
  display inline-block
  z-index 1001
.hamburger-inner
  display block
  top 50%
  margin-top calc(4px / -2)
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after
  width 28px
  height 3px
  background #c8c8c8
  position absolute
.hamburger-inner
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)
  &:before
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in
  &:after
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)
.hamburger-inner::before, .hamburger-inner::after
  content ''
  display block
.hamburger-inner::before
  top calc((6px + 3px) * -1)
.hamburger-inner::after
  bottom calc((6px + 3px) * -1)
@media all and (max-width: 1000px)
  .menu-open
    display flex
</style>