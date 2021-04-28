<template>
  <div class="blog-area" :class="cssClass">
    <div class="container">
      <TitleH3 :text="title" />
      <div class="blog-slider">
        <swiper
        ref="blogSlider" 
        :options="swiperBlog" >
          <swiper-slide v-for="(item, index) in posts" :key="index">
            <BlogItem :data="item"  />
          </swiper-slide>
        </swiper>
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
      spaceBetween: 12,
      centeredSlides: false,
      slidesPerView: 3,
      pagination: {
        el: '.blog-pagination',
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 'auto',
          centeredSlides: true
        },
        600: {
          slidesPerView: 2,
          centeredSlides: false
        },
        1000: {
          slidesPerView: 3,
          centeredSlides: false
        }
      }
    }
  })
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.blog-area
  box()
  margin 60px 0
  .blog-slider
    width calc(100% + 32px)
    margin-left -8px
    .swiper-slide
      padding 0 4px
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
@media all and (max-width: 1250px)
  .blog-area
    .blog-slider
      width 100%
      margin 0 auto
    .container
      max-width 1200px
      width calc(100% - 32px)
@media all and (max-width: 600px)
  .blog-area
    .container
      max-width 1200px
      width calc(100% - 20px)
</style>