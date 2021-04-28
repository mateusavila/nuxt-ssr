<template>
  <div class="blog-main-slider">
    <div class="container">
      <ArrowPrev :size="list.length" @go-prev="prev" cssLeft="-20px" />
      <ArrowNext :size="list.length" @go-next="next" cssRight="-20px" />
      <swiper
        ref="cardMainSlider" 
        :options="cardMainSlider" >
          <swiper-slide :key="index" v-for="(item, index) in list">
            <BlogMainSliderItem :data="item" />
          </swiper-slide>
        </swiper>
      </div>
  </div>
</template>
<script>
export default {
  name: 'BlogMainSlider',
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    }
  },
  data () {
    return {
      cardMainSlider: {
        slidesPerView: 1
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.cardMainSlider.$swiper
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
.blog-main-slider
  padding 20px 0
  .container
    width calc(100% - 64px)
    max-width 1140px
    position relative
    margin 40px auto
  .arrow-prev
    left -20px
  .arrow-next
    right -20px
@media all and (max-width: 1100px)
  .blog-main-slider
    .container
      width calc(100% - 40px)
    .arrow-prev
      left -15px
    .arrow-next
      right -15px
@media all and (max-width: 750px)
  .blog-main-slider 
    .container
      margin 10px auto
@media all and (max-width: 500px)
  .blog-main-slider
    .container
      width 100%
    .arrow-prev
      left 0
      bottom -20px
      top auto
      transform none
    .arrow-next
      right 0
      bottom -20px
      top auto
      transform none
</style>