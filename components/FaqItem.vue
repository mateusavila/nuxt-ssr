<template>
  <div class="faq-item">
    <div class="faq-item-header" @click="toggle">
      <p>{{question}}</p>
    </div>
    <div class="faq-item-content">
      <div class="faq-item-content-text" v-html="answer"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqItem',
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
  },
  mounted () {
    this.$nextTick(() => { this.forceHeight() })
    this.forceHeight()
  },
  methods: {
    forceHeight () {
      if(document.querySelectorAll('.faq-item-content')) {
        const faqs = document.querySelectorAll('.faq-item-content')
        const size = faqs.length ?? 0
        if (size > 0) {
          for (let i = 0; i < size; i++) {
            faqs[i].style.setProperty('--height', faqs[i].scrollHeight + 'px')
          }
        }
      }
    },
    toggle (event) {
      this.forceHeight()
      if( event.target.closest('.faq-item').classList.contains('active')) {
        const items = document.querySelectorAll('.faq-item')
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove('active')
        }
      } else {
        const items = document.querySelectorAll('.faq-item')
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove('active')
        }
        event.target.closest('.faq-item').classList.toggle('active')
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.faq-item
  display none
  border-radius 32px
  background #fff
  margin-bottom 16px
  transitions(.15s)
  box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
  &.active
    border-radius 8px
    transitions(.15s)
    .faq-item-header:after
      background-repeat no-repeat
      background-position center center
      height 22px
      width 22px
      background-image url('~assets/img/faq-minus.svg')
    .faq-item-content
      height var(--height)
      transitions(.15s)
    .faq-item-content-text
      transform translateY(0)
      transitions(.15s)
      a
        color #3371f2
        font-weight bold
        text-decoration none
        border-bottom 1px dotted #3371f2
        transitions(.2s)
        &:hover
          border-bottom 1px solid #3371f2
          transitions(.2s)
.faq-item-header
  display flex
  justify-content flex-start
  align-items center
  text-align left
  padding 16px 48px 16px 24px
  position relative
  cursor pointer
  &:after
    content ''
    position absolute
    top 50%
    transform translateY(-50%)
    right 24px
    width 22px
    background-repeat no-repeat
    background-position center center
    height 22px
    background url('~assets/img/faq-plus.svg')
    transitions(.2s)
  p 
    color #3371F2
    font-size 18px
    font-weight bold
    line-height 150%
.faq-item-content
  width 100%
  overflow hidden
  height 0
  text-align left
  transitions(.2s)
  .faq-item-content-text
    padding 8px 24px 0
    position relative
    transform translateY(30px)
    transitions(.15s)
    color: #606266
    line-height 150%
    font-size 16px
    p
      margin-bottom 20px
@media all and (max-width: 1000px)
  .faq-item
    display block
  .faq-item-header
    p 
      font-size: clamp(14px, calc(0.875rem + (20 - 14) * ((100vw - 340px) / (1000 - 340))), 20px)
  .faq-item-content
    .faq-item-content-text
      font-size: clamp(13px, calc(0.8125rem + (16 - 13) * ((100vw - 340px) / (1000 - 340))), 16px)
</style>