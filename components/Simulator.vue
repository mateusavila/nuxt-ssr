<template>
  <div class="simulator">
    <div class="container">
      <div class="simulator-title">
        <TitleH3 :text="translate.title" css-class="dark-blue center" :margin-bottom="0" />
      </div>
      <div class="simulator-form">
        <TitleH5 :text="translate.form.title" css-class="dark-blue left" :margin-bottom="15" />
        <div class="simulator-field">
          <div class="simulator-field-value simulator-field-value-0">{{translate.form.currency}} <strong>{{fake_money}}{{money_unity}}</strong></div>
          <p class="simulator-field-label">{{translate.form.like}}</p>
          <div class="bar bar-0">
            <div class="bar-values">
              <span>{{translate.numbers.money.min_text}}</span>
              <span>{{translate.numbers.money.max_text}}</span>
            </div>
            <div class="bar-inner bar-inner-0" :class="{'konami': this.konami}"></div>
            <input 
              :class="{'konami': this.konami}" 
              class="simulator-input-0" 
              type="range" 
              name="money" 
              v-model="form.money" 
              :min="0" 
              :max="translate.values.money.length - 1"
              @mouseover="showBar(0, '')" 
              @mouseout="hideBar(0, '')"
              @input="updatePosition(0, 'money', 0, translate.values.money.length - 1)">
          </div>
          <div class="bar-controls">
            <ButtonMinus @minus="remPosition(0, 'money', 0, translate.values.money.length - 1)" />
            <span class="bar-active-value">{{translate.form.currency}} <strong>{{fake_money}}{{money_unity}}</strong></span>
            <ButtonPlus @add="addPosition(0, 'money', 0, translate.values.money.length - 1)" />
          </div>
        </div>
        <div class="simulator-field">
          <div class="simulator-field-value simulator-field-value-1"><strong>{{fake_month}}</strong> {{translate.form.months}}</div>
          <p class="simulator-field-label">{{translate.form.pay}}</p>
          <div class="bar bar-1">
            <div class="bar-values">
              <span>{{translate.numbers.parcel.min_text}}</span>
              <span>{{translate.numbers.parcel.max_text}}</span>
            </div>
            <div class="bar-inner bar-inner-1" :class="{'konami': this.konami}"></div>
            <input 
              :class="{'konami': this.konami}" 
              class="simulator-input-1" 
              type="range" 
              name="parcel" 
              v-model="form.parcel" 
              :min="0" 
              :max="translate.values.parcel.length - 1" 
              @mouseover="showBar(1, '')"
              @mouseout="hideBar(1, '')"
              @input="updatePosition(1, 'parcel', 0, translate.values.parcel.length - 1, '')">
          </div>
          <div class="bar-controls">
            <ButtonMinus @minus="remPosition(1, 'parcel', 0, translate.values.parcel.length - 1, '')" />
            <span class="bar-active-value"><strong>{{fake_month}}</strong> {{translate.form.months}}</span>
            <ButtonPlus @add="addPosition(1, 'parcel', 0, translate.values.parcel.length - 1, '')" />
          </div>
          
        </div>
        <div class="simulator-field">
          <div class="simulator-field-value simulator-field-value-2">{{translate.form.currency}} <strong>{{fake_revenue}}{{revenue_unity}}</strong></div>
          <p class="simulator-field-label">{{translate.form.revenue}}</p>
          <div class="bar bar-2">
            <div class="bar-values">
              <span>{{translate.numbers.revenue.min_text}}</span>
              <span>{{translate.numbers.revenue.max_text}}</span>
            </div>
            <div class="bar-inner bar-inner-2" :class="{'konami': this.konami}"></div>
            <input 
            :class="{'konami': this.konami}" 
            class="simulator-input-2" 
            type="range" 
            name="revenue" 
            v-model="form.revenue" 
            :min="0" 
            :max="translate.values.revenue.length - 1" 
            @mouseover="showBar(2, '')"
            @mouseout="hideBar(2, '')"
            @input="updatePosition(2, 'revenue', 0, translate.values.revenue.length - 1)">
          </div>
          <div class="bar-controls">
            <ButtonMinus @minus="remPosition(2, 'revenue', 0, translate.values.revenue.length - 1)" />
            <span class="bar-active-value">{{translate.form.currency}} <strong>{{fake_revenue}}{{revenue_unity}}</strong></span>
            <ButtonPlus @add="addPosition(2, 'revenue', 0, translate.values.revenue.length - 1)" />
          </div>
        </div>
      </div>
      <div class="simulator-result">
        <div class="simulator-result-main">
          <TitleH5 :text="translate.result.title" css-class="dark-blue" />
          <p class="simulator-result-subtitle">{{fake_month}} {{translate.result.parcel}}</p>
          <p class="simulator-result-value">{{money}}</p>
          <p class="simulator-result-subtext">{{translate.result.total}} {{total}}*</p>
          <LinkBox :text="translate.result.go_to" :url="translate.result.url" color="orange" css-class="big simulator-button" />
        </div>
        <div class="simulator-result-info">
          <p>{{translate.result.simulation_1}} <strong>{{CET}}% a.m*</strong></p>
          <p v-html="translate.result.simulation_2"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// os métodos comuns a todos os Simuladores estão no mixin abaixo.
import simulatorMixin from '~/helpers/simulator'
export default {
  name: 'Simulator',
  mixins: [simulatorMixin],
  data () {
    return {
      timer: {
        input1: null,
        input2: null,
        input3: null
      },
      translate: {
        values: {
          money: [],
          revenue: [],
          parcel: []
        },
        numbers: {
          money: {
            min: 0,
            max: 0,
            step: 1
          },
          revenue: {
            min: 0,
            max: 0,
            step: 1
          },
          parcel: {
            min: 0,
            max: 0,
            step: 1
          }
        },
        form: {},
        result: {},
        lang: '',
        currency: '',
        title: ''
      },
      konami: false,
      form: {
        money: 0,
        revenue: 0,
        parcel: 0
      },
      result: {
        total: 1,
        money: 1,
        CET: 1
      }
    }
  },
  computed: {
    CET () { return this.result.CET.toFixed(2) },
    fake_revenue () { 
      return this.translate.values.revenue[this.form.revenue] >= 1000 ? this.translate.values.revenue[this.form.revenue] / 1000 : this.translate.values.revenue[this.form.revenue]
    },
    revenue_unity () {
      return this.translate.values.revenue[this.form.revenue] >= 1000 ? 'Mi' : 'k'
    }
  },
  created () {
    this.loadTranslation(['money', 'parcel', 'revenue'], 'pt-br', '')
  },
  methods: {
    calculate () {
      const parcel = +this.translate.values.parcel[this.form.parcel]
      const money = +this.translate.values.money[this.form.money] * 1000
      const revenue = +this.translate.values.revenue[this.form.revenue] * 1000
      const CET = ((money/revenue)/2) + (parcel * 0.1825)
      const percent = Math.pow((this.result.CET/100) + 1, parcel)
      const installments = money * (percent * (this.result.CET/100)) / (percent - 1)
      const amount = installments * parcel
      this.result.CET = CET
      this.result.money = installments
      this.result.total = amount
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
@keyframes glowing
  0%
    box-shadow 0 0 5px #e74c3c,
      inset 0 0 10px #e67e22,
      inset 0 0 20px #e67e22,
      inset 0 0 40px #e67e22
  100%
    box-shadow 0 0 5px darken(#e74c3c, 20%),
      inset 0 0 10px lighten(#e67e22, 15%),
      inset 0 0 20px lighten(#e67e22, 15%),
      inset 0 0 40px lighten(#e67e22, 15%)
.simulator
  padding 64px 0 100px
  margin 50px 0
  box()
  .container
    width calc(100% - 40px)
    max-width 1050px
    margin 0 auto
    display flex
    justify-content space-between
    flex-wrap wrap
  .simulator-title
    width 100%
    text-align center
    justify-content center
    display flex
    margin-bottom 40px
.simulator-working-calc
  font-size 12px
  margin-top 30px
  text-align center
  width 100%
  p
    line-height 125%
    margin-bottom 10px
.simulator-field
  width 100%
  position relative
  margin-bottom 30px
  display block
  &:last-child
    margin-bottom 0
  .bar
    background #DCDFE6
    height 6px
    position relative
    width 100%
    border-radius 6px
  .bar-values
    width 100%
    display flex
    justify-content space-between
    font-size 12px
    position absolute
    top -25px
    span
      color #C0C4CC
      font-size 12px
  .bar-inner
    background #FF7A0D
    height 6px
    position absolute
    top 0
    left 0
    border-radius 6px
    width 0
    z-index 2
    &.konami
      animation: glowing 1s ease-in-out infinite alternate
  input
    outline none
    width 100%
    appearance none
    height 6px
    top 0
    position absolute
    z-index 3
    background rgba(255,255,255,0)
  input[type=range]::-webkit-slider-thumb
    appearance none
  input[type=range]::-moz-range-track
    appearance none
  input[type=range]::ms-track
    appearance none
  input[type=range]::-moz-range-thumb
    width 16px
    height 16px
    cursor pointer
    border-radius 100%
    background #fff
    border 2px solid #FF7A0D
    position relative
    z-index 3
  input[type=range].konami::-moz-range-thumb
    background-color transparent
    background-image url('~assets/img/team-rocket.png')
    background-repeat no-repeat
    background-position 2px center
    background-size 41px auto
    border none
    width 40px
    height 40px
  input[type=range]::-ms-thumb
    width 16px
    height 16px
    cursor pointer
    border-radius 100%
    background #fff
    border 2px solid #FF7A0D
    position relative
    z-index 3
  input[type=range].konami::-ms-thumb
    background-color transparent
    background-image url('~assets/img/team-rocket.png')
    background-repeat no-repeat
    background-position 2px center
    background-size 41px auto
    border none
    width 40px
    height 40px
  input[type=range]::-webkit-slider-thumb
    width 16px
    height 16px
    cursor pointer
    border-radius 100%
    background #fff
    border 2px solid #FF7A0D
    position relative
    z-index 3
  input[type=range].konami::-webkit-slider-thumb
    background-color transparent
    background-image url('~assets/img/team-rocket.png')
    background-repeat no-repeat
    background-position 2px center
    background-size 41px auto
    border none
    width 40px
    height 40px
.bar-controls
  display flex
  max-width 150px
  margin 15px auto 0
  width calc(100% - 100px)
  align-items center
  justify-content space-between
.bar-active-value
  font-size 14px
  color #ff7a0d
.simulator-field-value
  position absolute
  height 36px
  transform translateX(-50%)
  display inline-block
  padding 10px
  text-align center
  top 0
  z-index 100
  border-radius 4px
  white-space nowrap
  color #fff
  background #303133
  border-radius 4px
  font-size 12px
  visibility hidden
  opacity 0
  &.active
    opacity 1
    visibility visible
  &:after
    content ''
    position absolute
    clip-path polygon(50% 100%, 0 0, 100% 0)
    height 8px
    width 16px
    background #303133
    left 50%
    transform translateX(-50%)
    bottom -7px
.simulator-field-label
  font-size 14px
  color #409EFF
  line-height 150%
  margin-bottom 35px
.simulator-form, .simulator-result
  width calc(50% - 50px)
  border-radius 4px
  background #fff
  box-shadow: 0px 4px 16px rgba(64, 158, 255, 0.1)
.simulator-form
  padding 36px 24px 48px
  text-align left
.simulator-result
  padding 36px 40px
  text-align center
  display flex
  align-items center
  align-content center
  flex-wrap wrap
.simulator-result-subtitle
  font-size 18px
  line-height 150%
  color #606266
.simulator-result-value
  font-size 28px
  line-height 150%
  font-weight bold
  color #FF7A0D
.simulator-result-subtext
  font-size 12px
  line-height 150%
  color #606266
.simulator-result-main
  width 100%
.simulator-result-info
  margin-top 30px
  position relative
  padding-top 30px
  &:before
    content ''
    position absolute
    width 188px
    height 1px
    background #DCDFE6
    top 0
    left 50%
    transform translateX(-50%)
  p
    font-size 12px
    line-height 18px
    color #909399
    &:first-child
      margin-bottom 16px
.simulator-button
  display flex
  margin-top 30px
  justify-content center
  height 40px
  width 100%
  border-radius 4px
  background #409EFF
  align-items center
  font-size 14px
  color #fff
  text-decoration none
  transitions(.2s)
  &:hover
    background darken(#409EFF, 10%)
    transitions(.2s)
@media all and (max-width: 1000px)
  .simulator-form, .simulator-result
    width 100%
  .simulator-form
    margin-bottom 40px
  .simulator
    padding 0 0 50px
@media all and (max-width: 600px)
  .simulator-result
    padding 32px
</style>