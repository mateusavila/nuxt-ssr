<template>
  <div class="testimonial-item">
    <div class="testimonial-item-info">
      <img src="~assets/img/aspas.svg" alt="Aspas" width="68" height="54" loading="lazy">
      <p>{{data.text}}</p>
    </div>
    <div class="testimonial-item-image">
      <ImageBox :images="data.images" :alternate="data.name" />
      <p class="testimonial-work"><strong>{{data.name}}</strong><br>{{data.work}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestimonialItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.testimonial-item
  background #00154B
  min-height 415px
  padding 80px
  border-radius 16px
  display flex
  justify-content space-between
  align-items center
  align-content center
.testimonial-item-info
  width calc(100% - (200px + 120px))
  color #fff
  text-align center
  img
    margin-bottom 24px
  p
    font-size 20px
    line-height 150%
.testimonial-item-image
  width 192px
  display flex
  flex-wrap wrap
  justify-content center
  text-align center
  img
    width 192px
    height 192px
    border-radius 100%
    margin-bottom 24px
  p
    color #fff
    font-size 14px
    line-height 150%
@media all and (max-width: 900px)
  .testimonial-item
    padding 50px
  .testimonial-item-image
    width 140px
    img
      height 140px
  .testimonial-item-info
    width calc(100% - 200px)
    p
      font-size: clamp(16px, calc(1rem + (24 - 16) * ((100vw - 320px) / (900 - 320))), 24px)
@media all and (max-width: 700px)
  .testimonial-item
    padding 35px
@media all and (max-width: 600px)
  .testimonial-item
    flex-wrap wrap
  .testimonial-item-info
    width 100%
  .testimonial-item-image
    width 100%
    margin-top 40px
    flex-wrap wrap
    img
      width 140px
    p
      width 100%
  .testimonial-item-info 
    img
      width 49px
      height auto
</style>