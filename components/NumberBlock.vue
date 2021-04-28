<template>
  <div class="numbers" :class="cssClass">
    <div class="container">
      <h2>{{ data.title }}</h2>
      <h3><span class="number-before" v-html="data.numbers.before"></span>
      <span class="numbers-number" id="numbers-number"></span>
      <span class="number-after" v-html="data.numbers.after"></span></h3>
      <p>{{ data.text }}</p>
      <div class="companies-list">
        <swiper
        ref="companies" 
        :options="swiperBlockImage">
          <swiper-slide v-for="(item, index) in data.companies" :key="index">
            <div class="companies-item">
              <img 
                :src="item.image.url" 
                :alt="item.image.description.length > 0 ? item.image.description : item.image.title" 
                :width="item.image.width"
                :height="item.image.height"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { CountUp } from 'countup.js'
export default {
  name: 'NumberBlock',
  props: {
    cssClass: {
      type: String,
      required: false,
      default: ''
    },
    data: {
      type: Object,
      required: true
    },
    start: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      countUp: null,
      swiperBlockImage: {
        spaceBetween: 0,
        centeredSlides: false,
        slidesPerView: 3,
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
            slidesPerView: 4,
            centeredSlides: false
          }
        }
      }
    }
  },
  
  computed: {
    translate() { return this.$store.state.translate.translate }
  },
  watch: {
    start (value) {
      if(value === true) {
        let countUp = new CountUp('numbers-number', parseInt(this.data.numbers.number, 10), {
          decimalPlaces: parseInt(this.translate.money.decimalPlaces, 10),
          separator: this.translate.money.separator,
          decimal: this.translate.money.decimal,
          prefix: this.translate.money.prefix,
          duration: 8,
          startVal: 0,
          endVal: parseInt(this.data.numbers.number, 10)
        })
        countUp.start()
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.numbers
  margin-top 33px
  margin-bottom 50px
  &.credits
    margin-top 100px
  .container
    width calc(100% - 128px)
    max-width 1164px
    margin 0 auto
    text-align center
  h2
    margin-bottom 40px
    color #0096FF
    font-size 36px
    line-height 150%
    font-weight 700
  h3
    margin-bottom 40px
    color #00417F
    font-size 24px
    line-height 150%
    font-weight 700
    .big
      font-size 40px
  p
    font-size 24px
    line-height 150%
    color #606266
.numbers-number
  font-size 40px
.companies-list
  max-width 1250px
  width calc(100% - 32px)
  margin 40px auto 0
  .companies-item
    height 80px
    display flex
    justify-content center
    align-items center
  img
    max-width 60%
    display block
    height auto
  
@media all and (max-width: 1250px)
  .numbers
    .container
      width calc(100% - 64px)
    h2
      font-size: clamp(24px, calc(1.5rem + (36 - 24) * ((100vw - 340px) / (1250 - 340))), 36px)
    h3
      font-size: clamp(16px, calc(1rem + (24 - 16) * ((100vw - 320px) / (1250 - 320))), 24px)
      .big
        font-size: clamp(28px, calc(2rem + (40 - 32) * ((100vw - 320px) / (1250 - 320))), 40px)
    p
        font-size: clamp(14px, calc(0.875rem + (24 - 14) * ((100vw - 340px) / (1250 - 340))), 24px);
@media all and (max-width: 1100px)
  .numbers
    .container
      width calc(100% - 32px)
  .companies-list
    flex-flow: row nowrap
    img
      width auto
      display block
@media all and (max-width: 600px)
  .numbers
    .container
      width calc(100% - 20px)
  .numbers-number
    margin 5px 0
    display flex
    align-items center
    justify-content center
    height 46px
    line-height 1
  .companies-list
    ul li
      margin-left 20px
</style>