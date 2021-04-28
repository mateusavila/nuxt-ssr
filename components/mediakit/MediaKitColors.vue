<template>
  <div class="media-kit-colors">
    <TitleH4 :text="data.title" css-class="white left" />
    <div class="media-kit-colors-list">
      <div class="media-kit-colors-item" v-for="(item, index) in data.list" :key="index">
        <div class="media-kit-colors-item-bg" :style="{'background': item.style}"></div>
        <div class="media-kit-colors-item-info">
          <p><strong>{{item.title}}</strong><br>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MediaKitColors',
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
.media-kit-colors
  box()
  margin 100px 0

.media-kit-colors-list
  flex-wrap wrap
  display flex
  align-items flex-start
  justify-content space-between
.media-kit-colors-item-bg
  width 119px
  height 119px
  margin-bottom 20px
.media-kit-colors-item
  width 119px
  p
    font-size 14px
    line-height 150%
</style>