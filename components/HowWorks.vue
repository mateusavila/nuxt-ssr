<template>
  <div class="how-works">
    <div class="container">
      <TitleH4 :text="data.title" />
      <div class="how-works-list" v-if="data.topics.length > 0">
        <div 
          class="how-works-item" 
          v-for="(item, index) in data.topics" 
          :key="index">
            <img :src="item.image.url" :alt="item.image.text" :width="item.image.width" :height="item.image.height" loading="lazy">
            <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HowWorks',
  props: {
    data: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.how-works
  padding 50px 0 20px
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
.how-works-list
  margin-top 40px
  display flex
  justify-content space-between
  flex-wrap wrap
.how-works-item
  display flex
  width 25%
  flex-wrap wrap
  padding 0 20px
  justify-content center
  p
    width 100%
    font-weight bold
    color #00477A
    margin-top 30px
    text-align center
@media all and (max-width: 1000px)
  .how-works
    .container
      width calc(100% - 32px)
  .how-works-item
    width 100%
    margin-bottom 50px
@media all and (max-width: 600px)
  .how-works
    .container
      width calc(100% - 20px)
</style>