<template>
  <div class="faq-filter">
    <div class="container">
      <h1>{{translate.title}}</h1>
      <!-- <form action="#" method="post" novalidate @submit.prevent="search">
        <input type="search" name="search" id="faq-search" :placeholder="translate.label" v-model="searchfield">
      </form> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqFilter',
  computed: {
    translate () { return this.$store.state.translate.translate.faq ?? {
        title: '',
        label: ''
      } 
    }
  },
  data () {
    return {
      searchfield: ''
    }
  },
  methods: {
    search () { this.$emit('search', this.searchfield) }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.faq-filter
  width 100%
  height 409px
  background #00154B
  margin-top -150px
  padding-top 75px
  h1
    color #fff
  .container
    max-width 1140px
    width calc(100% - 64px)
    display flex
    margin 0 auto
    align-content center
    align-items center
    height 100%
    flex-wrap wrap
  form
    width 100%
    margin-top 34px
  input[type=search]
    width 100%
    max-width 608px
    outline none
    height 56px
    font-size 16px
    font-family 'Montserrat', sans-serif
    border-radius 8px
    border 1px solid #ECF2FE
    padding-left 10px
    box-sizing border-box
    padding-right 40px
    background-image url('~assets/img/faq-search.svg')
    background-position calc(100% - 16px) center
    background-repeat no-repeat
    background-size 24px auto
    
@media all and (max-width: 1000px)
  .faq-filter
    height 280px
    .container
      width calc(100% - 40px)
@media all and (max-width: 600px)
  .faq-filter
    height 240px
    .container
      width calc(100% - 20px)
    h1
      font-size 24px
</style>