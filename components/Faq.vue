<template>
  <div class="faq-area">
    <div class="container">
      <TitleH3 :text="data.title" />
      <div class="faq-list">
        <FaqItem 
          v-for="(item, index) in data.list" 
          :key="index" 
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Faq',
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
.faq-area
  box()
  margin 60px 0
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    position relative
    text-align center
@media all and (max-width: 1000px) 
  .faq-area
    .container
      width calc(100% - 32px)
</style>