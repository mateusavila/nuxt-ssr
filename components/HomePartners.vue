<template>
  <div class="home-partners">
    <div class="container">
      <swiper
        ref="partners" 
        :options="swiperBlockImage">
          <swiper-slide v-for="(item, index) in list" :key="index">
            <img 
              :src="item.image.url" 
              :alt="item.image.description" 
              :width="item.image.width"
              :height="item.image.height"
              loading="lazy">
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination partners-pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeNumbers',
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  },
  data () {
    return {
      swiperBlockImage: {
        spaceBetween: 0,
        centeredSlides: false,
        slidesPerView: 3,
        pagination: {
          el: '.partners-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            centeredSlides: false
          },
          600: {
            slidesPerView: 2,
            centeredSlides: false
          },
          1000: {
            slidesPerView: 3,
            centeredSlides: false
          },
          1140: {
            slidesPerView: 5,
            centeredSlides: false
          }
        }
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.home-partners
  box()
  margin 50px 0 100px
  height 150px
  .container
    width calc(100% - 64px)
    margin 0 auto
    max-width 1140px
    position relative
  .partners-pagination
    margin-top 30px
  .swiper-slide
    display flex
    justify-content center
    align-items center
    height 70px
    img
      max-width 100%
      height auto
      display block

@media all and (max-width: 1100px)
  .home-partners
    .container
      width calc(100% - 40px) 
@media all and (max-width: 600px)
  .home-partners
    margin 50px 0
    .container
      width calc(100% - 20px)
  
</style>