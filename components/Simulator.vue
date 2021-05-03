<template>
  <div class="simulator">
    <div class="container">
      <div class="simulator-title">
        <TitleH3 :text="translate.title" css-class="dark-blue center" />
      </div>
      <div class="simulator-form">
        <TitleH5 :text="translate.form.title" css-class="dark-blue left" />
        <div class="simulator-field">
          <p class="simulator-field-label">{{translate.form.like}}</p>
          <div class="bar bar-0">
            <div class="bar-inner bar-inner-0" :class="{'konami': this.konami}"></div>
            <div class="bar-values">
              <span>{{translate.numbers.money.min_text}}</span>
              <span>{{translate.numbers.money.max_text}}</span>
            </div>
            <input 
              :class="{'konami': this.konami}" 
              class="simulator-input-0" 
              type="range" 
              name="money" 
              v-model="form.money" 
              :min="translate.numbers.money.min" 
              :max="translate.numbers.money.max" 
              :step="translate.numbers.money.step"
              @mouseover="showBar(0)" 
              @mouseout="hideBar(0)"
              @input="updatePosition(0, 'money', translate.numbers.money.min, translate.numbers.money.max)">
          </div>
          <div class="simulator-field-value simulator-field-value-0">{{translate.form.currency}} <strong>{{fake_money}}{{money_unity}}</strong></div>
        </div>
        <div class="simulator-field">
          <p class="simulator-field-label">{{translate.form.pay}}</p>
          <div class="bar bar-1">
            <div class="bar-inner bar-inner-1" :class="{'konami': this.konami}"></div>
            <div class="bar-values">
              <span>{{translate.numbers.parcel.min_text}}</span>
              <span>{{translate.numbers.parcel.max_text}}</span>
            </div>
            <input 
              :class="{'konami': this.konami}" 
              class="simulator-input-1" 
              type="range" 
              name="parcel" 
              v-model="form.parcel" 
              :min="translate.numbers.parcel.min" 
              :max="translate.numbers.parcel.max" 
              :step="translate.numbers.parcel.step"
              @mouseover="showBar(1)"
              @mouseout="hideBar(1)"
              @input="updatePosition(1, 'parcel', translate.numbers.parcel.min, translate.numbers.parcel.max)">
          </div>
          <div class="simulator-field-value simulator-field-value-1"><strong>{{form.parcel}}</strong> {{translate.form.months}}</div>
        </div>
        <div class="simulator-field">
          <p class="simulator-field-label">{{translate.form.revenue}}</p>
          <div class="bar bar-2">
            <div class="bar-inner bar-inner-2" :class="{'konami': this.konami}"></div>
            <div class="bar-values">
              <span>{{translate.numbers.revenue.min_text}}</span>
              <span>{{translate.numbers.revenue.max_text}}</span>
            </div>
            <input 
            :class="{'konami': this.konami}" 
            class="simulator-input-2" 
            type="range" 
            name="revenue" 
            v-model="form.revenue" 
            :min="translate.numbers.revenue.min" 
            :max="translate.numbers.revenue.max" 
            :step="translate.numbers.revenue.step" 
            @mouseover="showBar(2)"
            @mouseout="hideBar(2)"
            @input="updatePosition(2, 'revenue', translate.numbers.revenue.min, translate.numbers.revenue.max)">
          </div>
          <div class="simulator-field-value simulator-field-value-2">{{translate.form.currency}} <strong>{{fake_revenue}}{{revenue_unity}}</strong></div>
        </div>
      </div>
      <div class="simulator-result">
        <div class="simulator-result-main">
          <TitleH5 :text="translate.result.title" css-class="dark-blue" />
          <p class="simulator-result-subtitle">{{form.parcel}} {{translate.result.parcel}}</p>
          <p class="simulator-result-value">{{money}}</p>
          <p class="simulator-result-subtext">{{translate.result.total}} {{total}}*</p>
          <LinkBox :text="translate.result.go_to" :url="translate.result.url" color="orange" css-class="big simulator-button" />
        </div>
        <div class="simulator-result-info">
          <p>{{translate.result.simulation_1}} <strong>{{CET}}% a.m*</strong></p>
          <p v-html="translate.result.simulation_2"></p>
        </div>
        <!-- <div class="simulator-working-calc">
          <TitleH5 text="Mexican Formular" css-class="dark-blue" />
          <p class="simulator-result-subtitle">{{form.parcel}} {{translate.result.parcel}}</p>
          <p class="simulator-result-value">{{mx_money}}</p>
          <p class="simulator-result-subtext">{{translate.result.total}} {{mx_total}}*</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import KonamiCode from 'vue-konami-code'

export default {
  name: 'Simulator',
  data () {
    return {
      timer: {
        input1: null,
        input2: null,
        input3: null
      },
      translate: {
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
      },
      resultMx: {
        total: 1,
        money: 1
      }
    }
  },
  computed: {
    total () { 
      return !this.translate.lang ? false : new Intl.NumberFormat(this.translate.lang, {
          style: 'currency',
          currency: this.translate.currency
        }).format(this.result.total)
    },
    money () { 
      return !this.translate.lang ? false : new Intl.NumberFormat(this.translate.lang, {
          style: 'currency',
          currency: this.translate.currency
        }).format(this.result.money)
    },
    mx_total () { 
      return !this.translate.lang ? false : new Intl.NumberFormat(this.translate.lang, {
          style: 'currency',
          currency: this.translate.currency
        }).format(this.resultMx.total)
    },
    mx_money () { 
      return !this.translate.lang ? false : new Intl.NumberFormat(this.translate.lang, {
          style: 'currency',
          currency: this.translate.currency
        }).format(this.resultMx.money)
    },
    CET () { 
      return this.result.CET.toFixed(2)
    },
    fake_money () { 
      return this.form.money >= 1000 ? this.form.money / 1000 : this.form.money  
    },
    fake_revenue () { 
      return this.form.revenue >= 1000 ? this.form.revenue / 1000 : this.form.revenue  
    },
    money_unity () {
      return this.form.money >= 1000 ? 'Mi' : 'k'
    },
    revenue_unity () {
      return this.form.revenue >= 1000 ? 'Mi' : 'k'
    }
  },
  created () {
    this.loadTranslation()
  },
  mounted () {
    Vue.use(KonamiCode, {callback: () => {
      this.$nextTick(() => this.konami = true )
    }})
  },
  methods: {
    showBar (index) {
      const baloon = document.querySelector('.simulator-field-value-'+index)
      baloon.classList.add('active') 
    },
    hideBar (index) {
      const baloon = document.querySelector('.simulator-field-value-'+index)
      baloon.classList.remove('active') 
    },
    async loadTranslation () {
      const translate = () => import(`~/helpers/simulator-${this.$config.lang}.js`).then(m => m.default || m)
      this.translate = await translate()
      this.form.money = this.translate.numbers.money.min
      this.form.parcel = this.translate.numbers.parcel.min
      this.form.revenue = this.translate.numbers.revenue.min
      this.updatePosition(0, 'money', this.translate.numbers.money.min, this.translate.numbers.money.max)
      this.updatePosition(1, 'parcel', this.translate.numbers.parcel.min, this.translate.numbers.parcel.max)
      this.updatePosition(2, 'revenue', this.translate.numbers.revenue.min, this.translate.numbers.revenue.max)
    },
    updatePosition (index, key, min, max) {
      const input = document.querySelector('.simulator-input-'+index)
      const baloon = document.querySelector('.simulator-field-value-'+index)
      if (this.timer['input'+index]) clearTimeout(this.timer['input'+index])
      this.timer['input'+index] = setTimeout(() => {
        baloon.classList.remove('active')
      }, 300)
      baloon.classList.add('active')
      const bar = document.querySelector('.bar-inner-'+index) 
      const ball = this.konami ? 40 : 16
      const range = max - min
      const position = ((this.form[key] - min) / range) * 100
      const positionOffset = Math.round(ball * position / 100) - (ball / 2)
      baloon.style.left = 'calc('+position+'% - '+ positionOffset +'px)'
      bar.style.width = position+"%"
      this.calculate()
    },
    calculate () {
      const parcel = +this.form.parcel
      const money = +this.form.money * 1000
      const revenue = +this.form.revenue * 1000

      this.result.CET = ((money/revenue)/2) + (parcel * 0.1825)
      const calcPercent = Math.pow((this.result.CET/100) + 1, parcel)
      const installments = money * (calcPercent * (this.result.CET/100)) / (calcPercent - 1)
      const amount = installments * parcel

      this.result.money = installments
      this.result.total = amount

      // formula mexicana
      // this.calculateMX()
    },
    calculateMX () {
      const parcel = +this.form.parcel
      const money = +this.form.money * 1000
      const revenue = +this.form.revenue * 1000

      // =C3 * ((C5 * ((1 + C5) ^ C4) ) / (((1 + C5) ^ C4) - 1))
      const amount = money * ((2.04 * ((1 + 2.04) ** parcel) ) / (((1 + 2.04) ** parcel) - 1))
      this.resultMx.total = amount
      this.resultMx.money = amount / parcel    
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
  margin-top 30px
  &:last-child
    margin-bottom 0
  .bar
    background #DCDFE6
    height 6px
    position relative
    width 100%
    margin-bottom 15px
    border-radius 6px
  .bar-values
    width 100%
    display flex
    justify-content space-between
    font-size 12px
    position absolute
    top 20px
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
.simulator-field-value
  position relative
  height 36px
  transform translateX(-50%)
  display inline-block
  padding 10px
  text-align center
  margin-top 5px
  border-radius 4px
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
    clip-path polygon(50% 0%, 0% 100%, 100% 100%)
    height 8px
    width 16px
    background #303133
    left 50%
    transform translateX(-50%)
    top -7px
.simulator-field-label
  font-size 14px
  color #409EFF
  line-height 150%
  margin-bottom 20px
.simulator-form, .simulator-result
  width 460px
  border-radius 4px
  background #fff
  box-shadow: 0px 4px 16px rgba(64, 158, 255, 0.1)
.simulator-form
  padding 36px 24px
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