<template>
  <div class="media-kit-our-logo" id="#mediakit-our-logo">
    <TitleH4 :text="data.title" css-class="white left" />
    <div class="media-kit-our-logo-preference">
      <div class="media-kit-our-logo-preference-list">
        <div class="media-kit-our-logo-preference-item" v-for="(item, index) in data.preference_list" :key="index">
          <TitleH5 :text="item.title" css-class="white" />
          <img
            v-for="(image, imageindex) in item.images" :key="imageindex" 
            :src="image.image.url" 
            :alt="image.title" 
            :width="image.image.width" 
            :height="image.image.height" 
            loading="lazy">
        </div>
      </div>
    </div>
    <div class="media-kit-blue-box">
      <p v-html="data.blue_box"></p>
    </div>
    <div class="media-kit-our-logo-list">
      <div 
        class="media-kit-our-logo-item" 
        v-for="(item, index) in data.list" 
        :key="index" 
        :id="computedID(index)">
        <div class="media-kit-our-logo-text" v-if="item.type === 'text'" v-html="item.text"></div>
        <div class="media-kit-our-logo-image" v-if="item.type === 'image'">
          <ImageBox :images="item.image" :alternate="item.text" />
          <p v-if="item.image.text.length > 0" v-html="item.image.text"></p>
        </div>
        <div class="media-kit-our-logo-box" v-if="item.type === 'box'" :class="{'success': item.box.status === '1', 'fail': item.box.status === '0'}">
          <div class="media-kit-our-logo-box-image">
            <ImageBox :images="item.box.image" :alternate="item.box.text" />
          </div>
          <div class="media-kit-out-logo-box-info">
            <div class="media-status" :class="{'success': item.box.status === '1', 'fail': item.box.status === '0'}">{{item.box.status === '1' ? translate.mediakit.yes : translate.mediakit.no }}</div>
            <p v-html="item.box.text"></p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MediaKitOurLogo',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate },
  },
  methods: {
    computedID (index) {
      // sim, é uma gambiarra
      if (index > 4 || index === 1 || index === 3) return false
      if (index === 0) return 'mediakit-our-logo-reserve'
      if (index === 2) return 'mediakit-our-logo-reduction'
      if (index === 4) return 'mediakit-our-logo-aplications'
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.media-kit-our-logo-preference-list
  display flex
  width 100%
  justify-content space-between
  align-items flex-start
  flex-wrap wrap
.media-kit-our-logo-preference-item
  text-align center
  min-width 200px
  img:nth-child(odd)
    margin-left 63px
.media-kit-blue-box
  width 100%
  text-align center
  margin 40px 0
  padding 10px 20px
  background #0096FF
  p
    font-size 24px
    line-height 150%
    color #fff
    text-align center
.media-kit-our-logo-list
  display grid
  grid-template-columns 1fr 1fr
  grid-gap 30px 50px
  margin-top 80px
  justify-content space-between
  .media-kit-our-logo-item:nth-child(0), .media-kit-our-logo-item:nth-child(2), .media-kit-our-logo-item:nth-child(4)
    margin-bottom 80px
.media-kit-our-logo-text
  h4, p
    font-size 20px
    line-height 150%
.media-kit-our-logo-image
  display flex
  justify-content center
  flex-wrap wrap
  img
    min-height 100px
    width auto
  p
    margin-top 20px
.media-kit-our-logo-box
  padding 25px 20px
  display flex
  justify-content space-between
  flex-wrap wrap
  align-items center
  border-radius 12px
  height 100%
  &.success
    border 2px solid #67C23A
  &.fail
    border 2px solid #F56C6C
  .media-status
    width 60px
    height 28px
    display flex
    flex-wrap wrap
    align-items center
    justify-content center
    font-size 13px
    font-weight bold
    border-radius 28px
    margin-bottom 12px
    &:before
      content ''
      width 12px
      height 10px
      background-image url('~assets/img/media-kit-success.svg')
      bgCover()
      margin-right 5px
    &.fail
      background #F56C6C
      &:before
        width 10px
        height 10px
        background-image url('~assets/img/media-kit-fail.svg')
    &.success
      background #67C23A
      &:before
        width 12px
        height 10px
        background-image url('~assets/img/media-kit-success.svg')
  .media-kit-out-logo-box-info
    width calc(100% - 200px)
    p
      font-size 14px
      line-height 150%
  .media-kit-our-logo-box-image
    max-width 178px
    img
      max-width 100%
      height auto
      display block
</style>