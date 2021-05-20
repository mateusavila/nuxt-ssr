<template>
  <div class="media-kit-navigation">
    <nav>
      <ul>
        <li v-for="(link, index) in translate.mediakit.menu" :key="index" :class="{'has-child': link.children.length}">
          <span class="toggler" @click.prevent="toggleChild(index)" v-if="link.children.length > 0"></span>
          <a :href="link.pointer">{{link.name}}</a>
          <ul v-if="link.children && link.children.length > 0">
            <li v-for="(child, childindex) in link.children" :key="childindex" :class="{'has-child': child.children.length}">
              <span class="toggler" @click.prevent="toggleGrandChild(childindex)" v-if="child.children.length > 0"></span>
              <a :href="child.pointer">{{child.name}}</a>
              <ul v-if="child.children && child.children.length > 0">
                <li v-for="(grandchild, grandchildindex) in child.children" :key="grandchildindex">
                  <a :href="grandchild.pointer">{{grandchild.name}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'MediaKitNavigation',
  computed: {
    translate () { return this.$store.state.translate.translate }
  },
  methods: {
    toggleChild (index) {
      event.target.classList.toggle('active')
      const list = document.querySelectorAll('.media-kit-navigation > nav > ul > li')
      list[index].classList.toggle('active')
    },
    toggleGrandChild (index) {
      event.target.classList.toggle('active')
      const list = document.querySelectorAll('.media-kit-navigation > nav > ul > li > ul > li') 
      list[index].classList.toggle('active')
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.media-kit-navigation
  width 200px
  position sticky
  top 100px
  left 0
  .toggler
    position absolute
    top 0
    right 0
    background-image url('~assets/img/mediakit-navigation.svg')
    width 24px
    height 24px
    background-repeat no-repeat
    background-position center center
    background-size 13px auto
    transform rotate(90deg)
    cursor pointer
    transitions(.2s)
    &.active
      transform rotate(180deg)
      transitions(.2s)
  li
    position relative
    margin-bottom 24px
    overflow hidden
    &.has-child ul
      visibility hidden
      max-height 0
      transitions(.2s)
    &.active > ul
      visibility visible
      max-height 300px
      transitions(.2s)
      margin-top 24px
  ul
    list-style-type none
    padding 0
    margin 0
    & > li > a
      font-size 16px
    a
      color #fff
      text-decoration none
      &:hover
        text-decoration underline
    ul
      padding-left 20px
      position relative
      li.has-child ul
        visibility hidden
        max-height 0
        transitions(.2s)
      li.active
        margin-bottom 0 
        & > ul
          visibility visible
          max-height 300px
          transitions(.2s)
          margin-top 24px
      & > li > a
        font-size 16px
      ul
        padding-left 20px
        & > li > a
          font-size 14px
@media all and (max-width: 1100px)
  .media-kit-navigation
    width 200px
    position static
    margin-bottom 30px
@media all and (max-width: 600px)
  .media-kit-navigation
    display none
</style>