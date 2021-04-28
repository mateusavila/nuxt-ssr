<template>
  <footer class="main-footer" :class="cssClass">
    <div class="container">
      <Newsletter />
      <div class="footer-address">
        <img
          src="~assets/img/logo-footer.svg"
          alt="a55"
          width="96"
          height="41"
          class="desktop footer-image">
        <SocialNetworks
          :twitter="translate.footer.social.twitter"
          :linkedin="translate.footer.social.linkedin"
          :blogger="translate.footer.social.blogger"
          :instagram="translate.footer.social.instagram"
          :facebook="translate.footer.social.facebook"
        />
        <p v-html="options.address" class="desktop footer-address-text"></p>
        <div class="footer-extra-links desktop">
          <a 
            :href="item.slug" 
            target="_blank" 
            rel="noopener noreferrer"
            v-for="(item, index) in translate.footer.legal" :key="index"
            >
              <span v-if="!item.has_image">{{item.name}}</span>
              <img
                v-if="item.has_image"
                :src="buildImage(item.has_image)"
                :alt="item.name"
                :width="item.width"
                :height="item.height">
            </a>
          <!-- 
          <a :href="translate.footer.terms.url" target="_blank" rel="noopener noreferrer">{{translate.footer.terms.text}}</a> -->
        </div>
      </div>
      <div class="footer-sitemap">
        <div class="footer-sitemap-categories">
          <div class="footer-sitemaps-cats" v-for="(menu, index) in translate.footer.menus" :key="index">
            <h6>
              <a :href="menu.url" v-if="menu.external && menu.is_link">{{menu.header}}</a>
              <nuxt-link :to="menu.url" v-if="!menu.external && menu.is_link">{{menu.header}}</nuxt-link>
              <span v-if="!menu.is_link">{{menu.header}}</span>
            </h6>
            <ul v-if="menu.links.length > 0">
              <li v-for="(link, index) in menu.links" :key="index">
                <a v-if="link.external" :href="link.slug" target="_blank" rel="noopener noreferrer">{{link.name}}</a>
                <nuxt-link v-if="!link.external" :to="link.slug">{{link.name}}</nuxt-link>
              </li>
            </ul>
            <p v-html="menu.content" v-if="menu.content.length > 0"></p>
          </div>
        </div>
        <div class="footer-extra-links mobile">
          <a :href="translate.footer.privacy.url" target="_blank" rel="noopener noreferrer">{{translate.footer.privacy.text}}</a>
          <a :href="translate.footer.terms.url" target="_blank" rel="noopener noreferrer">{{translate.footer.terms.text}}</a>
        </div>
        <div class="footer-mobile-box">
          <img
            src="~assets/img/logo-footer.svg"
            alt="a55"
            width="96"
            height="41"
            class="mobile footer-image">
          <p v-html="options.address" class="mobile footer-address-text"></p>
          <div class="footer-sitemap-credits">
            <div class="footer-sitemap-credits-text" v-html="options.credits"></div>
          </div>
       </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    cssClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    options () { return this.$store.state.options.options },
    translate () { return this.$store.state.translate.translate }
  },
  methods: {
    buildImage (image) { return require(`~/assets/img/${image}`) }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.main-footer
  box()
  padding 48px 0
  background #00154B
  &.faq-footer-page
    margin-top 0
    background #00154b;
  .container
    width calc(100% - 64px)
    max-width 1140px
    margin 0 auto
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items flex-start
.footer-address
  width 185px
.footer-image
  margin-bottom 40px
  &.mobile
    display none
.footer-address-text
  margin-top 50px
  font-weight 300
  line-height 150%
  color #fff
  font-size 12px
  &.mobile
    display none
.footer-sitemap
  width calc(100% - 310px)
.footer-extra-links
  margin-top 30px
  &.mobile
    display none
  a
    font-weight 300
    text-decoration none
    color #fff
    font-size 12px
    display inline-block
    line-height 150%
    margin-bottom 24px
    position relative
    &:hover
      text-decoration underline
      transitions(.2s)
.footer-sitemap-categories
  display flex
  justify-content space-between
  margin-bottom 40px
.footer-sitemaps-cats
  ul
    margin 0
    padding 0
    list-style-type none
  h6
    font-size 14px
    margin 0 0 5px
    color #0096FF
    line-height 250%
    a
      color #0096FF
      &:after
        background #0096FF
  a
    color #fff
    text-decoration none
    font-size 14px
    line-height 250%
    display inline-block
    position relative
    &:hover:after
      width 100%
      transitions(.2s)
    &:after
      content ''
      width 0
      background #fff
      position absolute
      bottom 2px
      left 0
      height 1px
      transitions(.2s)
  p
    font-size 12px
    font-weight 300
    margin-top 10px
    color #fff
    a
      font-weight bold
.footer-sitemap-credits-text
  padding-top 48px
  border-top 1px solid #fff
  color #fff
  font-size 12px
  font-weight 300
  line-height 200%
@media all and (max-width: 1200px)
  .main-footer
    .container
      width calc(100% - 32px)
  .footer-sitemap
    width calc(100% - 250px)
@media all and (max-width: 1000px)
  .footer-address
    width 100%
    p
      margin-top 30px
    img
      display none
  .footer-sitemap
    width 100%
    margin-top 30px
  .footer-address-text
    &.mobile
      display block
    &.desktop
      display none
  .footer-image
    &.mobile
      display block
    &.desktop
      display none
  .footer-extra-links
    margin 20px 0
    &.desktop
      display none
    &.mobile
      display block
    a
      margin-right 30px
      margin-bottom 0
  .footer-sitemap-categories
    margin-bottom 50px
  .footer-mobile-box
    margin-top 50px
    padding-top 50px
    border-top 1px solid #fff
  .footer-sitemap-credits-text
    border none
@media all and (max-width: 850px)
  .footer-sitemap-categories
    flex-wrap wrap
  .footer-sitemaps-cats
    width 50%
    margin-bottom 30px
@media all and (max-width: 450px)
  .footer-sitemaps-cats
    width 100%
  .footer-extra-links
    display block
    a
      margin 0 0 20px 20px
      width auto
      &:first-child
        margin-left 0
</style>
