<template>
  <div class="lgpd">
    <div class="lgpd-box" :class="{'active': start}">
      <div class="lgpd-box-info">
        <p>{{text}} <a :href="urlPolicy" target="_blank" rel="noopener noreferrer">Política de Privacidade.</a></p>
      </div>
      <div class="lgpd-box-action">
        <button @click.prevent="deleteCookies" class="delete-button">{{ deleteText }}</button>
        <button @click.prevent="accept" class="action-button">{{ acceptText }}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LGPD',
  data: () => ({
    modal: false,
    start: true,
    cookies: []
  }),
  props: {
    urlPolicy: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: false,
      default: 'Aqui a sua experiência é muito mais transparente. Ao clicar em aceito, você permitirá que a gente utilize cookies para analisar como você interage em nosso site, oferecendo conteúdos personalizados. Se curtiu é só dar sequência. '
    },
    acceptText: {
      type: String,
      required: false,
      default: 'Aceitar cookies'
    },
    deleteText: {
      type: String,
      required: false,
      default: 'desativar cookies'
    }
  },
  mounted () { this.load() },
  methods: {
    accept () {
      this.start = false
      this.save()
    },
    deleteCookies () {
      this.start = false
      const cookies = document.cookie.split(";")
      for (var i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf("=")
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure"
      }
      this.save()
    },
    save () {
      window.localStorage.setItem('hidden-lgpd', JSON.stringify(0))
    },
    load () {
      if(window.localStorage.getItem('hidden-lgpd')) {
        this.start = !!JSON.parse(window.localStorage.getItem('hidden-lgpd'))
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.lgpd-box
  position fixed
  bottom 20px
  background #0096FF
  border-radius 64px
  width calc(100% - 32px)
  max-width 1250px
  left 50%
  transitions(.4s)
  opacity 0
  visibility hidden
  transform translate(-50%, 80px)
  display flex
  justify-content space-between
  padding 18px 30px
  z-index 1001
  flex-wrap wrap
  align-items center
  &.active
    visibility visible
    opacity 1
    transform translate(-50%, 0)
    transitions(.2s)
.lgpd-box-action
  width 340px
  display flex
  justify-content space-between
  align-items center
  flex-wrap wrap
  .delete-button
    height 20px
    display flex
    align-items center
    width 140px
    cursor pointer
    font-size 14px
    background transparent
    border none
    font-weight bold
    color #00154B
.action-button
  cursor pointer
  width 170px
  height 56px
  border none
  background #FF7A0D
  transitions(.2s)
  color #fff
  font-weight bold
  border-radius 64px
  font-size 14px
  &:hover
    transitions(.2s)
    color #FF7A0D
    background #fff
.lgpd-box-info
  width calc(100% - 390px)
  p 
    font-size 12px
    font-weight bold
    color #fff
    line-height 18px
  a
    color #00154B
    text-decoration none
@media all and (max-width: 900px)
  .lgpd-box
    border-radius 32px
  .lgpd-box-info, .lgpd-box-action
    width 100%
  .lgpd-box-action
    margin 20px 0 0
    justify-content center
@media all and (max-width: 450px)
  .lgpd-box
    width calc(100% - 20px)
    padding 20px
  .action-button
    height 40px
    width 100%
    margin-top 10px
  .lgpd-box-action
    .delete-button
      width 100%
      margin 0 auto
      justify-content center
      font-size 12px
</style>
