<template>
  <div class="faq-page-list-area">
    <div class="container">
      <TitleH3 :text="title" css-class="left" />
      <div class="faq-page-list" v-if="list.length > 0">
        <FaqItem 
          v-for="(item, index) in list" 
          :key="index" 
          :question="item.acf.title"
          :answer="item.acf.text"
        />
        <FaqItemDesktop 
          v-for="(item, index) in list" 
          :key="index" 
          :question="item.acf.title"
          :answer="item.acf.text"
        />
      </div>
      <FaqEmpty v-if="list.length === 0" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqList',
  props: {
    list: {
      type: Array,
      required: false,
      default: []
    },
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.faq-page-list-area
  box()
  padding 30px 0 100px
  .container
    max-width 1140px
    width calc(100% - 64px)
    margin 0 auto
    position relative
    text-align center
.faq-page-list
  grid-gap 10px 30px
  display grid
  grid-template-columns 1fr
  grid-auto-flow dense
@media all and (max-width: 1000px) 
  .faq-page-list-area
    .container
      width calc(100% - 32px)
  .faq-page-list
    grid-template-columns 1fr
</style>