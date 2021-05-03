<template>
  <div class="blog-area" :class="cssClass">
    <div class="container">
      <TitleH3 :text="title" />
      <div class="blog-slider">
        <ArrowPrev @go-prev="prev" :size="posts.length" css-class="theme-2" />
        <swiper
        ref="blogSlider" 
        :options="swiperBlog" >
          <swiper-slide v-for="(item, index) in posts" :key="index">
            <BlogItem :data="item"  />
          </swiper-slide>
        </swiper>
        <ArrowNext @go-next="next" :size="posts.length" css-class="theme-2" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogList',
  props: {
    title: {
      type: String,
      required: true
    },
    posts: {
      type: Array,
      required: true
    },
    cssClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: () => ({
    swiperBlog: {
      spaceBetween: 10,
      centeredSlides: false,
      slidesPerView: 3,
      breakpoints: {
        0: {
          slidesPerView: 'auto',
          centeredSlides: false
        },
        750: {
          slidesPerView: 2,
          centeredSlides: false
        },
        1100: {
          slidesPerView: 3,
          centeredSlides: false
        }
      }
    }
  }),
  computed: {
    swiper() {
      return this.$refs.blogSlider.$swiper
    }
  },
  methods: {
    next () { this.swiper.slideNext() },
    prev () { this.swiper.slidePrev() }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.blog-area
  box()
  margin 60px 0
  .container
    max-width 1140px
    width calc(100% - 64px)
    margin 0 auto
    position relative
    text-align center
  .desktop
    display grid
  .mobile
    display none
.blog-slider
  width 100%
  padding 20px 0
  display flex
  justify-content space-between
  align-items center
  .swiper-slide
    padding 0 4px
  .swiper-container
    width calc(100% - 100px)
@media all and (max-width: 1250px)
  .blog-area
    .blog-slider
      width 100%
      margin 0 auto
    .container
      max-width 1200px
      width calc(100% - 32px)
@media all and (max-width: 750px)
  .blog-area
    .arrow-prev, .arrow-next
      display none
  
  .blog-slider 
    width 100%
    .swiper-container
      width 100%
    .swiper-slide
      width calc(100% - 150px)
@media all and (max-width: 600px)
  .blog-area
    .container
      max-width 1200px
      width calc(100% - 20px)
  .blog-slider
    width 100%
    .swiper-slide
      width calc(100% - 80px)
@media all and (max-width: 450px)
    .blog-slider
    .swiper-slide
      width calc(100% - 20px)
</style>