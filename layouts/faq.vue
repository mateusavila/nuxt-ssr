<template>
  <client-only>
    <div class="main-faq-layout">
      <Header />
      <main class="main-faq-main">
        <Nuxt />
      </main>
      <Footer css-class="faq-footer-page" />
    </div>
  </client-only>
</template>
<script>
export default {
  name: 'faq',
  methods: {
    closeMenu () { this.statusMenu = false }
  }
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
*, *::before, *::after 
  box-sizing border-box
  margin 0
[data-animate="fade-up"]
  opacity 0
  transform translate3d(0, 40px, 0)
  will-change opacity
  transitions(.35s)
  &.active
    opacity 1
    transform translate3d(0, 0, 0)
    transitions(.35s)
</style>
