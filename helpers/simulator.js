import Vue from 'vue'
import KonamiCode from 'vue-konami-code'
export default {
  computed: {
    fake_month () {
      return this.translate.values.parcel[this.form.parcel]
    },
    money_unity () {
      return this.translate.values.money[this.form.money] >= 1000 ? 'Mi' : 'k'
    },
    money () { 
      return !this.translate.lang ? false : new Intl.NumberFormat(this.translate.lang, {
          style: 'currency',
          currency: this.translate.currency
        }).format(this.result.money)
    },
    fake_money () { 
      return this.translate.values.money[this.form.money] >= 1000 ? this.translate.values.money[this.form.money] / 1000 : this.translate.values.money[this.form.money]  
    },
    total () { 
      return !this.translate.lang ? false : new Intl.NumberFormat(this.translate.lang, {
          style: 'currency',
          currency: this.translate.currency
        }).format(this.result.total)
    },
  },
  
  mounted () {
    Vue.use(KonamiCode, {callback: () => {
      this.$nextTick(() => this.konami = true )
    }})
  },
  methods: {
    async loadTranslation (fields, language, suffix) {
      const translate = () => import(`~/helpers/simulator-${language}.js`).then(m => m.default || m)
      this.translate = await translate()
      fields.map(el => this.fixBaloonPosition(0, el, 0, this.translate.values[el].length - 1, suffix))
      this.calculate()
    },
    addPosition (index, key, min, max, suffix) {
      if (this.form[key] < max) this.form[key]++
      this.actionPosition(index, key, min, max, suffix)
    },
    remPosition (index, key, min, max, suffix) {
      if (this.form[key] > min) this.form[key]--
      this.actionPosition(index, key, min, max, suffix)
    },
    actionPosition (index, key, min, max, suffix) {
      this.fixBaloonPosition(index, key, min, max, suffix)
      this.calculate()
    },
    ballon (index, suffix) {
      return document.querySelector(`.simulator-field-value${suffix}-${index}`)
    },
    barBlock (index, suffix) {
      return document.querySelector(`.bar-inner${suffix}-${index}`)
    },
    showBar (index, suffix) {
      const baloon = this.ballon(index, suffix)
      baloon.classList.add('active') 
    },
    hideBar (index, suffix) {
      const baloon = this.ballon(index, suffix)
      baloon.classList.remove('active') 
    },
    updatePosition (index, key, min, max, suffix) {
      if (!suffix) suffix = ''
      const baloon = this.ballon(index, suffix)
      if (this.timer['input'+index]) clearTimeout(this.timer['input'+index])
      this.timer['input'+index] = setTimeout(() => baloon.classList.remove('active'), 300)
      baloon.classList.add('active')
      this.actionPosition(index, key, min, max, suffix)
    },
    fixBaloonPosition (index, key, min, max, suffix) {
      if (!suffix) suffix = ''
      const baloon = this.ballon(index, suffix)
      const bar = this.barBlock(index, suffix) 
      const ball = this.konami ? 40 : 20
      const range = +max - +min
      const position = ((+this.form[key] - +min) / +range) * 100
      const positionOffset = Math.round(+ball * +position / 100) - (+ball / 2)
      if (baloon) baloon.style.left = 'calc('+position+'% - '+ positionOffset +'px)'
      if (bar) bar.style.width = position+"%"
    },
  }
}