<template>
  <div class="error-box" :class="{'active': status}">{{text}}</div>
</template>
<script>
  export default {
    name: 'ErrorBox',
    props: {
      text: {
        type: String,
        required: true
      },
      status: {
        type: Boolean,
        required: true
      },
      marginBottom: {
        type: Number,
        required: false,
        default: 0
      }
    },
    mounted () {
      this.setStyle()
    },
    methods: {
      setStyle () { this.$el.style.setProperty('--margin', this.marginBottom+'px') }
    }
  }
</script>
<style lang="stylus">
.error-box
  color #fff
  font-size 12px
  font-weight bold
  opacity 0
  transform translateY(10px)
  transitions()
  color lighten(#ff3244, 10%)
  margin-top 8px
  visibility hidden
  margin-bottom var(--margin)
  max-height 0
  margin-top 0
  &.active
    margin-top 5px
    max-height 30px
    transitions()
    visibility visible
    opacity 1
    transform translateY(0)
</style>