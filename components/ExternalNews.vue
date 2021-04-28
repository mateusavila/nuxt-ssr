<template>
  <div class="external">
    <div class="container">
      <TitleH3 :text="data.title" />
      <div class="external-slider">
        <swiper
        ref="cardSlider" 
        :options="swiperCard" >
          <swiper-slide :key="index" v-for="(external, index) in data.list">
            <ExternalItem :data="external" />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination external-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExternalNews',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    swiperCard: {
      spaceBetween: 8,
      centeredSlides: false,
      slidesPerView: 3,
      pagination: {
        el: '.external-pagination',
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
        1100: {
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
.external
  box()
  margin 80px 0
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    display flex
    position relative
    justify-content center
    flex-wrap wrap
  .external-slider
    width calc(100% + 16px)
    margin-left 0
@media all and (max-width: 600px)
  .external
    .container
      width calc(100% - 20px)
</style>