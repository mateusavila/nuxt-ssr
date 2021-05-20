<template>
  <client-only>
    <div class="main-layout">
      <Header />
      <main class="main-layout-main">
        <Nuxt />
      </main>
      <Footer />
      <LGPD 
        text="Aqui a sua experiência é muito mais transparente. Ao clicar em aceito, você permitirá que a gente utilize cookies para analisar como você interage em nosso site, oferecendo conteúdos personalizados." 
        url-policy="https://wpbr.a55.tech/wp-content/uploads/2021/04/Politica_de_protecao_de_dados_a55.pdf" />
    </div>
  </client-only>
</template>
<script>
export default {
  name: 'page'
}
</script>
<style lang="stylus">
html 
  font-family 'Montserrat', sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  background #F2F6FC
*, *::before, *::after 
  box-sizing border-box
  margin 0
.swiper-pagination
  margin-top 24px
  display flex
  justify-content center
  width 100%
  position relative
  .swiper-pagination-bullet
    border-radius 0
    width 16px
    height 16px
    border-radius 100%
    background #99D5FF
    margin 0 3px
    opacity 1
    transitions(.2s)
  .swiper-pagination-bullet-active.swiper-pagination-bullet
    transitions(.2s)
    background #0096FF
[data-animate="fade-up"]
  opacity 0
  transform translate3d(0, 40px, 0)
  will-change opacity
  transitions(.35s)
  &.active
    opacity 1
    transform translate3d(0, 0, 0)
    transitions(.35s)
.block-button
  margin 60px 0
  box()
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    display flex
    justify-content center
    .link-area:nth-child(2)
      margin-left 20px
.content-visibility
  content-visibility: auto
.pagination
  list-style-type none
  display flex
  width 100%
  padding 0
  margin-bottom 50px
  justify-content center
  li
    margin 0 5px
    &:first-child, &:last-child
      text-indent -99999px
      a
        background-repeat no-repeat
        background-position center center
        background-size auto
    &:first-child
      margin-left 0
      margin-right 30px
      a
        background-image url('~assets/img/dashicons_arrow-prev.svg')
    &:last-child
      margin-left 30px
      margin-right 0
      a
        background-image url('~assets/img/dashicons_arrow-next.svg')
    &:hover a, &.active a
      transition .2s all cubic-bezier(0.165, 0.84, 0.44, 1)
    &:hover a
      color #0096FF
    &.active a
      background #0096FF
      color #fff
  a
    width 40px
    background #fff
    color #606266
    height 40px
    border-radius 100%
    font-weight bold
    display flex
    align-items center
    justify-content center
    transition .2s all cubic-bezier(0.165, 0.84, 0.44, 1)
@media all and (max-width: 1000px)
  .block-button 
    .container
      width calc(100% - 40px)
@media all and (max-width: 600px)
  .block-button
    &.desktop
      display none
    .container
      width calc(100% - 20px)
      flex-wrap wrap
    &.block-button-double
      .link-area
        width 100%
        &:nth-child(2)
          margin 10px 0 0
        a
          width 100%
@media all and (max-width: 500px)
  .pagination
    li
      margin 0 3px
      &:first-child
        margin-right 15px
      &:last-child
        margin-left 15px
    a
      width 36px
      height 36px
      font-size 14px
@media all and (max-width: 340px)
  .pagination
    li
      &:first-child
        margin-right 8px
      &:last-child
        margin-left 8px
    a
      width 36px
      height 36px
      font-size 14px
</style>
