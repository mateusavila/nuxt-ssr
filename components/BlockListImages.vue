<template>
  <div class="block-list" :class="cssClass">
    <div class="container">
      <TitleH3 :text="data.title" />
      <p v-if="data.text">{{data.text}}</p>
      <div class="block-list-slider" v-if="hasSlider">
        <swiper
        :ref="sliderClass" 
        :options="swiperBlockImage" >
          <swiper-slide v-for="(item, index) in data.list" :key="index">
            <img 
              :src="item.image.url" 
              :alt="item.image.description" 
              :width="item.image.width"
              :height="item.image.height"
              loading="lazy">
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" :class="sliderClass+'-pagination'"></div>
      </div>
      <div class="block-list-images" :class="{'desktop': hasSlider}" v-if="!hasSlider">
        <ul :class="listCssClass">
          <li v-for="(item, index) in data.list" :key="index">
            <img 
              :src="item.image.url" 
              :alt="item.image.description" 
              :width="item.image.width"
              :height="item.image.height"
              loading="lazy"
              />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlockListImages',
  props: {
    data: {
      type: Object,
      required: true
    },
    cssClass: {
      type: String,
      required: false,
      default: ''
    },
    listCssClass: {
      type: String,
      required: false,
      default: ''
    },
    hasSlider: {
      type: Boolean,
      required: false,
      default: false
    },
    sliderClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      swiperBlockImage: {
        spaceBetween: 0,
        centeredSlides: false,
        slidesPerView: 3,
        pagination: {
          el: '.'+this.sliderClass+'-pagination',
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
          1250: {
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
.block-list
  box()
  margin 60px 0
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    text-align center
    position relative
  &.desktop
    display block
  p
    font-size 20px
    color #606266
    line-height 150%
.block-list-slider
  margin 50px 0
.block-list-images
  display flex
  width 100%
  margin-top 50px
  ul
    list-style-type none
    padding 0
    margin 0
    display flex
    width 100%
    justify-content center
    align-items center
    align-content center
    &.space-between
      justify-content space-between
      li 
        margin 0 10px
  li
    margin 0 30px
    width auto
    display inline-block
    &:first-child
      margin-left 0
    img
      max-width 100%
      display block
      height auto
@media all and (max-width: 1250px)
  .block-list
    .container
      width calc(100% - 32px)
@media all and (max-width: 1100px)
  .block-list-images.desktop
    display none
  .block-list-slider
    display block
@media all and (max-width: 600px)
  .block-list
    .container
      width calc(100% - 20px)
</style>