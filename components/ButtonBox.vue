<template>
  <div class="button-area">
    <button 
    class="button"
    :type="type"
    :class="[cssClass, color]"
    v-if="type === 'submit'">{{ text }}</button>
    <button 
    class="button"
    :type="type"
    :class="[cssClass, color]"
    v-if="type !== 'submit'"
    @click.prevent="action">{{ text }}</button>
  </div>
</template>
<script>
export default{
  name: 'ButtonBox',
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: 'black'
    },
    cssClass: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    },
  },
  methods: {
    action () { this.$emit('action') }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.button
  display flex
  outline none
  cursor pointer
  border none
  justify-content center
  align-items center
  text-transform uppercase
  text-decoration none
  font-weight 700
  height 40px
  font-size 14px
  letter-spacing 1px
  border-radius 66px
  padding 0 32px
  text-decoration none
  transitions(.2s)
  &.full
    width 100%
  &.huge
    height 62px
  &.dark-blue
    background #00154B
    color #fff
    &:hover
      background lighten(#00154B, 10%)
  &.big
    width 100%
    height 48px
  &.white
    background #fff
    color #0096FF
    box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
    &:hover
      color #fff
      background #0096FF
  &.blue
    color #fff
    background #0096FF
    box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
    &:hover
      background #fff
      color #0096FF
  &.orange
    color #fff
    background #FF7A0D
    box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
    &:hover
      background #fff
      color #FF7A0D
  &:hover
    transitions(.2s)
@media all and (max-width: 600px)
  .button
    width 100%
    margin 5px 0
    padding 0 12px
    font-size 12px
</style>
