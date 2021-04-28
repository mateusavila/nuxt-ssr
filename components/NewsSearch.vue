<template>
  <div class="search">
    <form action="#" method="post" @submit.prevent="search">
      <input 
        type="search" 
        name="search" 
        id="search" 
        placeholder="Busca" 
        v-model="searchfield">
    </form>
  </div>
</template>
<script>
export default {
  name: 'NewsSearch',
  data () {
    return {
      searchfield: this.$store.state.search.search || ''
    }
  },
  methods: {
    search () {
      if(this.searchfield.length > 0) {
        this.$emit('search', this.searchfield)
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.search
  width calc(50% - 8px)
  position relative
  z-index 1
  input
    height 64px
    color #0e2951
    outline none
    color #666
    border-radius 8px
    background #fff
    font-family 'Montserrat'
    border none
    padding-left 60px
    font-size 16px
    width 100%
    border 2px solid #fff
    background-image url('~assets/img/search.svg')
    background-repeat no-repeat
    transitions(.2s)
    background-position 18px center
    box-shadow  0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
    &:focus
      border 2px solid lighten(#0e2951, 90%)
      transitions(.2s)
input[type=search]::-ms-clear
  display none
  width  0
  height 0
input[type=search]::-ms-reveal
  display none
  width  0
  height 0
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration
  display: none
@media all and (max-width: 1000px)
  .search
    margin-top 20px
    width calc(50% - 10px)
@media all and (max-width: 700px)
  .search
    width 100%
</style>