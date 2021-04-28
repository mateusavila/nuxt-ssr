<template>
  <div class="box-author">
    <div class="box-author-image">
      <img :src="author.photo" :alt="author.name" width="112" height="112" loading="lazy" />
    </div>
    <div class="box-author-info">
      <p><strong>{{fullname}} |</strong> {{author.job}}</p>
      <p>{{translate.blog.publish}} {{date}} | {{translate.blog.updated}} {{updatedDate}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AuthorBox',
  props: {
    author: {
      type: Object,
      required: false,
      default: {}
    },
    date: {
      type: String,
      required: false,
      default: ''
    },
    updatedDate: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate },
    fullname () { return `${this.author.first_name} ${this.author.last_name}` }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.box-author
  width 100%
  padding 24px
  background #00417F
  border-radius 16px
  display flex
  align-items center
  justify-content space-between
  flex-wrap wrap
.box-author-image
  width 122px
  height 122px
  border-radius 122px
  margin-right 32px
  img
    border-radius 100%
.box-author-info
  color #fff
  width calc(100% - 155px)
  p
    font-size 16px
    line-height 150%
    color #fff
    margin 4px 0
@media all and (max-width: 800px)
  .box-author
    padding 16px
  .box-author-image
    width 100%
    display flex
    justify-content center
  .box-author-info
    width 100%
    text-align center
    margin-top 20px
    p
      font-size 14px
</style>