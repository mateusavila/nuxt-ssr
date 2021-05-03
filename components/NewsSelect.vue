<template>
  <div class="news-select">
    <label class="news-select-header" for="news-select-checkbox">
      <p>{{ label }}</p>
    </label>
    <input type="checkbox" name="name" id="news-select-checkbox">
    <div class="news-select-list-area">
      <div class="news-select-list">
        <nuxt-link @click.native="newPage('/orderby/'+order.slug+'/'+order.order)" :to="'/orderby/'+order.slug+'/'+order.order" v-for="(order, index) in orders" :key="index"><span>{{order.name}}</span></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsSelect',
  props: {
    label: {
      type: String,
      required: false,
      default: 'Ordenar'
    },
    orders: {
      type: Array,
      required: false,
      default: []
    }
  },
  methods: {
    newPage (slug) { 
      if (window.location.pathname === slug) return false
      this.$store.commit('page/updateLoaded', false) 
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.news-select
  width calc(50% - 8px)
  position relative
  z-index 100
  height 64px
  border-radius 8px
  background-color #fff
  background-image url('~assets/img/select-down.svg')
  background-repeat no-repeat
  background-position calc(100% - 10px) center
  background-size 20px auto
  input
    position absolute
    top 0
    left 0
    z-index -1
    visibility hidden
    opacity 0
    &:checked + .news-select-list-area
      max-height 400px
      transition .2s all cubic-bezier(0.165, 0.84, 0.44, 1)
  .news-select-header
    height 64px
    width 100%
    cursor pointer
    padding 0 20px
    display flex
    align-items center
    border-radius 8px
    box-shadow 0px 16px 24px rgba(5,152,255,0.1), 0px 2px 6px rgba(5,152,255,0.08), 0px 0px 1px rgba(5,152,255,0.08)
    p
      color #C0C4CC
  .news-select-list-area
    overflow hidden
    max-height 0
    margin-top 5px
    background #FFFFFF
    box-shadow 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
    border-radius 8px
    transition .2s all cubic-bezier(0.165, 0.84, 0.44, 1)
  .news-select-list
    padding 16px
    position relative
    z-index 100
    a
      height 48px
      display flex
      align-items center
      padding 0 10px
      text-decoration none
      color #606266
      &:hover
        color #0096FF
        background #F2F6FC
@media all and (max-width: 1000px)
  .news-select
    margin-top 20px
    width calc(50% - 10px)
@media all and (max-width: 700px)
  .news-select
    width 100%
</style>