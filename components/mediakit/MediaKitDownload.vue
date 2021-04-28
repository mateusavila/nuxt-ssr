<template>
  <div class="media-kit-download">
    <TitleH4 :text="data.title" css-class="white left" />
    <p>{{data.text}}</p>
    <div class="media-kit-downloads-list">
      <a :href="item.file.url" v-for="(item, index) in data.list" :key="index" download rel="noopener noreferrer" target="_blank">{{item.text}}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MediaKitDownload',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  },
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.media-kit-download
  margin 100px 0
  box()
.media-kit-downloads-list
  display flex
  margin-top 30px
  width 100%
  flex-wrap wrap
  justify-content space-between
  align-items flex-start
  a
    width calc(100% / 3 - 20px)
    border-radius 8px
    box-shadow 0px 3px 5px rgba(0, 0, 0, 0.1)
    background #00477A
    text-decoration none
    display flex
    justify-content flex-start
    align-items center
    font-size 14px
    padding 0 20px
    color #fff
    text-decoration none
    transitions(.2s)
    height 64px
    margin 0 0 20px
    &:before
      content ''
      background-image url('~assets/img/download-icon.svg')
      margin-right 12px
      width 32px
      height 29px
    &:hover
      transitions(.2s)
      background lighten(#00477A, 10%)
    
</style>