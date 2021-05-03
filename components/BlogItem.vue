<template>
  <nuxt-link :to="'/blog/'+data.slug" class="blog-item" :class="{'has-min-height': hasMinHeight}" @click.native="newPage('/blog/'+data.slug)">
    <div class="blog-image">
      <div class="blog-category" v-if="data.category_name.length > 0">
        <p>{{data.category_name[0]}}</p>
      </div>
      <ImageBox 
        :images="data.acf.images"
        :alternate="data.title.rendered"
      />
    </div>
    <div class="blog-content">
      <h4 class="blog-content-title" v-html="data.title.rendered"></h4>
      <p class="blog-content-excerpt" v-html="data.excerpt.rendered"></p>
    </div>
    <div class="blog-author">
      <div class="blog-author-image">
        <img 
          :src="data.author_data.author.photo" 
          :alt="data.author_data.author.name" 
          width="57"
          height="57"
          loading="lazy" 
        />
      </div>
      <div class="blog-author-info">
        <p>{{translate.blog.home.by}} <strong>{{fullname}}</strong><br>{{data.author_data.author.job}}<br><span>{{data.pretty_date}}</span></p>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'BlogItem',
  props: {
    data: {
      type: Object,
      required: true
    },
    hasMinHeight: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    translate () { return this.$store.state.translate.translate },
    fullname () { return `${this.data.author_data.author.first_name} ${this.data.author_data.author.last_name}` }
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
.blog-item
  background #fff
  padding 20px
  width 100%
  margin-bottom 25px
  padding-bottom 120px
  display block
  position relative
  transitions(.2s)
  border-radius 16px
  box-shadow: 0px 2px 20px rgba(0, 21, 75, 0.08)
  text-decoration none
  &.has-min-height
    min-height 570px
  &:hover
    background #fafafa
    transitions(.2s)
    .blog-image
      .image-box
        img
          transform scale(1.1)
          transitions(.2s)
.blog-image
  width 100%
  margin-bottom 16px
  height 210px
  overflow hidden
  position relative
  .image-box
    height 100%
    width 100%
    border-radius 4px
    overflow hidden
    img
      height 100%
      object-fit cover
      width 100%
      border-radius 4px
      transitions(.2s)
.blog-content
  text-align left
  .blog-content-excerpt
    font-size 16px
    line-height 150%
    color #606266
    clamplines(5)
  h4
    font-weight bold
    font-size 20px
    line-height 150%
    color #00417F
    margin-bottom 10px
    clamplines(2)
.blog-category
  position absolute
  z-index 10
  top 16px
  left 16px
  background #0096FF
  border-radius 4px
  font-weight bold
  font-size 12px
  color #fff
  line-height 150%
  padding 3px 8px
.blog-author
  margin-top 40px
  display flex
  width calc(100% - 40px)
  flex-wrap wrap
  justify-content space-between
  align-items center
  position absolute
  bottom 20px
  left 20px
  .blog-author-info
    width calc(100% - 65px)
    text-align left
    p
      color #00417F
      font-size 16px
      line-height 150%
  .blog-author-image
    img
      width 57px
      height 57px
      border-radius 100%
@media all and (max-width: 600px)
  .blog-author
    left 10px
    width calc(100% - 20px)
    .blog-author-info
      p
        font-size: clamp(13px, calc(0.8125rem + (16 - 13) * ((100vw - 340px) / (600 - 340))), 16px)
</style>