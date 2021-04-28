 <template>
  <div class="topics">
    <div class="container">
      <div class="topics-info">
        <TitleH4 :text="data.title" css-class="left" />
        <div class="topics-info-text" v-html="data.text"></div>
      </div>
      <div class="topics-list">
        <div class="topics-item" v-for="(item, index) in data.list" :key="index">
          <div class="topics-item-image">
            <img 
              :src="item.image.url" 
              :alt="item.image.description" 
              :width="item.image.width"
              :height="item.image.height"
              loading="lazy" 
            />
          </div>
          <div class="topics-item-info">
            <p>{{item.text}}</p>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Topics',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.topics
  .container
    max-width 1140px
    width calc(100% - 64px)
    margin 80px auto
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items flex-start
.topics-info, .topics-list
  width calc(50% - 16px)
.topics-info-text
  font-size 20px
  line-height 150%
  color #606266
  p
    margin-bottom 20px
.topics-list
  display block
  margin-top 50px
  .topics-item
    display flex
    align-items center
    justify-content space-between
    margin-bottom 40px
  .topics-item-image
    width 88px
    img
      max-width 100%
  .topics-item-info
    width calc(100% - 110px)
    p
      color #606266
      font-size 16px
      line-height 150%
@media all and (max-width: 1000px)
  .topics
    .container
      width calc(100% - 32px)
  .topics-info, .topics-list
    width 100%
  .topics-info
    margin-top 20px
  .topics-info
    margin-bottom 50px
  .topics-info-text 
    p
      font-size: clamp(14px, calc(0.875rem + (20 - 14) * ((100vw - 340px) / (1000 - 340))), 20px)
@media all and (max-width: 600px)
  .topics
    margin-top 30px
    .container
      width calc(100% - 20px)
      margin-bottom 20px
      margin-top 0
  .topics-info
    margin-bottom 20px
  .topics-list
    margin-top 0
    .topics-item-image
      width 72px
    .topics-item-info
      width calc(100% - 100px)
      p
        font-size: clamp(13px, calc(0.8125rem + (16 - 13) * ((100vw - 340px) / (600 - 340))), 16px)
</style>