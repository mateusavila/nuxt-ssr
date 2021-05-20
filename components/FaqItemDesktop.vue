<template>
  <div class="faq-item-desktop">
    <div class="faq-item-desktop-header">
      <p>{{question}}</p>
    </div>
    <div class="faq-item-desktop-content">
      <div class="faq-item-content-text" v-html="answer"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqItemDesktop',
  props: {
    question: {
      type: String,
      required: false,
      default: ''
    },
    answer: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.faq-item-desktop
  margin-bottom 16px
  text-align left
  display block
  border-bottom 1px solid #C4C4C4
.faq-item-desktop-header
  display flex
  justify-content flex-start
  align-items center
  text-align left
  position relative
  margin-bottom 20px
  p 
    color #606266
    font-size 20px
    font-weight bold
    line-height 150%
.faq-item-desktop-content
  width 100%
  text-align left
  p
    margin-bottom 20px
  .faq-item-content-text
    position relative
    line-height 150%
    font-size 14px
    color: #606266
    margin-bottom 20px
  .faq-item-content-text >>> p
    line-height 150%
    font-size 14px
    color: #606266
    margin-bottom 20px
  .faq-item-content-text a
      color #3371f2
      font-weight bold
      text-decoration none
      border-bottom 1px dotted #3371f2
      transitions(.2s)
      &:hover
        border-bottom 1px solid
@media all and (max-width: 1000px)
  .faq-item-desktop
    display none
  .faq-item-desktop-header
    p 
      font-size: clamp(14px, calc(0.875rem + (20 - 14) * ((100vw - 340px) / (1000 - 340))), 20px)
  .faq-item-desktop-content
    .faq-item-content-text
      font-size: clamp(13px, calc(0.8125rem + (16 - 13) * ((100vw - 340px) / (1000 - 340))), 16px)
  
</style>