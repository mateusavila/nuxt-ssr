<template>
  <picture class="image-box" :class="cssClass">
    <source :srcset="images.image_avif.url" type="image/avif" v-if="images.image_avif">
    <source :srcset="images.image_webp.url" type="image/webp" v-if="images.image_webp">
    <source :srcset="images.image.url" :type="images.image.mime_type">
    <img 
      :src="images.image.url" 
      :alt="alternate" 
      :width="images.image.width" 
      :height="images.image.height" 
      :loading="loading"
      decoding="async"
       />
  </picture>
</template>
<script>
export default {
  name: 'ImageBox',
  props: {
    images: {
      type: Object,
      required: true
    },
    alternate: {
      type: String,
      required: false,
      default: ''
    },
    loading: {
      type: String,
      required: false,
      default: 'lazy'
    },
    cssClass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.image-box
  display block
  position relative
  font-size 0
  &.hero-image // é uma exceção
    position absolute
    bottom 50px
    right -80px
    z-index 1
  &.force-width
    img
      width auto
      height auto
  img
    object-fit cover
    height auto
    max-width 100%
    background-size cover
    background-color #fafafa
@media all and (max-width: 1300px)
  .image-box
    &.hero-image
      right -10%
      max-width 80%
@media all and (max-width: 1000px)
  .image-box
    &.hero-image
      right auto
      bottom auto
      position relative
      order 1
      max-width 78%
      margin 75px auto 50px
@media all and (max-width: 500px)
  .image-box
    &.hero-image
      right auto
      bottom auto
      position relative
      order 1
      max-width 95%
      margin 75px auto 50px
</style>
