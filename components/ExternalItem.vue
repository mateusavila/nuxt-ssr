<template>
  <div class="external-item">
    <div class="external-item-inner">
      <div class="external-item-header">
        <img 
          :src="data.image.url" 
          :alt="data.title" 
          width="50" 
          height="50" 
          loading="lazy"
          class="external-item-image">
        <div class="external-item-header-info">
          <p><strong>{{data.name}}</strong><br>{{data.country}}, {{data.date}}</p>
        </div>
      </div>
      <div class="external-item-content">
        <h4>{{data.title}}</h4>
        <p>{{data.resume}}</p>
      </div>
      <div class="external-item-footer">
        <a :href="data.link" target="_blank" rel="noopener noreferrer">{{translate.read_more}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExternalItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.external-item
  width 100%
  padding 0 8px
.external-item-inner
  background #fff
  width 100%
  min-height 400px
  margin-bottom 30px
  padding 24px 24px 60px
  border-radius 16px
  box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
  position relative
.external-item-header
  display flex
  align-items center
  flex-wrap wrap
  justify-content space-between
  margin-bottom 30px
.external-item-image
  width 50px
  height 50px
  border-radius 100%
.external-item-header-info
  width calc(100% - 60px)
  p
    font-size 14px
    color #00417F
    margin 0
.external-item-content
  h4
    font-size 20px
    color #00477A
    margin 0 0 10px
  p
    font-size 14px
    line-height 150%
    color #303133
.external-item-footer
  position absolute
  bottom 15px
  left 0
  width 100%
  text-align center
  a
    color #0096ff
    font-size 14px
    font-weight bold
    text-decoration none
@media all and (max-width: 600px)
  .external-item
    padding 0
  .external-item-content
    h4
      font-size: clamp(16px, calc(1rem + (20 - 16) * ((100vw - 340px) / (600 - 340))), 20px)
</style>