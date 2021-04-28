<template>
  <div class="newsletter-area">
    <TitleH3 :text="translate.newsletter.title" css-class="white" />
    <div class="newsletter-form-area">
      <div class="newsletter-loading" :class="{'active':loading}">
        <img 
          src="~assets/img/loading-white.svg" 
          alt="loading" 
          loading="lazy" 
          width="48" 
          height="48">
      </div>
      <div class="newsletter-result" :class="{'active': result.status}">
        <TitleH4 :text="translate.newsletter.success.title" css-class="white" />
        <p>{{translate.newsletter.success.text}}</p>
        <div class="newsletter-result-action">
          <ButtonBox :text="translate.newsletter.close" @action="result.status = false; loading = false" type="submit" color="orange" />
        </div>
      </div>
      <div class="newsletter-form">
         <form action="#" method="post" @submit.prevent="send" novalidate>
          <div class="fields-block">
            <div class="field">
              <input 
                type="text"
                id="newsletter-firstname"
                :class="errorClass($v.form.firstname)"
                v-model.trim="$v.form.firstname.$model"
                :placeholder="translate.newsletter.form.name.placeholder" 
             />
             <ErrorBox 
                :status="$v.form.firstname.$error" 
                :text="translate.newsletter.form.name.error" 
                :margin-bottom="16"
             />
            </div>
            <div class="field">
              <input 
                type="email"
                id="newsletter-email"
                :class="errorClass($v.form.email)"
                v-model.trim="$v.form.email.$model"
                :placeholder="translate.newsletter.form.email.placeholder"
             />
             <ErrorBox 
                :status="$v.form.email.$error" 
                :text="translate.newsletter.form.email.error" 
                :margin-bottom="16"
             />
            </div>
            <div class="field-submit">
              <ButtonBox :text="translate.newsletter.button" type="submit" color="orange" css-class="huge full" />
            </div>
          </div>
         </form>
      </div>  
    </div>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Newsletter',
  data: () => ({
    timer: null,
    form: {
      email: '',
      firstname: ''
      // interest: 'all'
    },
    result: {
      status: false
    },
    loading: false
  }),
  computed: {
    translate () { return this.$store.state.translate.translate }
  },
  methods: {
    errorClass (validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    },
    async send () {
      this.$v.$touch()
      if ( this.$v.$invalid ) { 
        if (this.timer) clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.$v.$reset()
          }, 4000)
      }
      if ( !this.$v.$invalid ) {
        this.loading = true
        this.form.list = [325]
        await fetch(`https://mql-api.a55.tech/subscribe-lead`, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(this.form)
        })
        .then(response => response.json())
        .then(response => {
          console.log(response)
          this.showResult(response)
          this.loading = false
        })
        .catch(error => this.showResult(error))
      }
    },
    showResult (resource) {
      this.loading = false
      this.result.status = true
      this.result.text = resource.text
      this.result.type = resource.type
      this.form.email = ''
      this.form.firstname = ''
      this.$v.$reset()
    }
  },
  validations: {
    form: {
      firstname: {
        required
      },
      email: {
        required,
        email
      },
      // interest: {
      //   required
      // }
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.newsletter-area
  box()
  margin-bottom 50px
  .container
    width calc(100% - 40px)
    max-width 800px
    margin 0 auto
    position relative
.newsletter-interest-text
  margin-top 10px
  text-align center
  width 100%
  display block
  color #00154B
  font-size 14px
.newsletter-interest-block
  border-radius 8px
  background #fff
  display flex
  justify-content center
  flex-wrap wrap
  align-items center
  height 112px
  position relative
  input
    position absolute
    left 0
    opacity 0
    top 0
.fields-interests
  margin-bottom 30px
  display flex
  justify-content space-between
  align-items center
  flex-wrap wrap
  svg
    transitions(.2s)
  label
    cursor pointer
    width calc(100% / 4 - 16px)
    &.active svg path
      fill #0096FF
      transitions(.2s)
.newsletter-form
  margin 0 auto
  width 100%
.fields-block
  display flex
  flex-wrap wrap
  justify-content space-between
.newsletter-result, .newsletter-loading
  background #00154b
  filler()
  height calc(100% + 40px)
  showActive()
  z-index 100
.field-submit
  width 272px
.field
  width calc((100% - 300px) / 2)
  clear both
  margin-bottom 25px
  button
    margin 0 auto
  label
    font-size 16px
    color #fff
    z-index 1
    display inline-block
    margin-bottom 5px
    color #fff
  input
    width 100%
    font-size 16px
    color #606266
    background #fff
    border-radius 8px
    height 64px
    border 1px solid #fff
    padding 5px 10px
    box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08);
    outline none
    placeholderColor(#606266, #606266)
    transitions(.2s)
    &:focus
      border-color rgba(5,152,255,0.66)
      transitions(.2s)
    &.error
      transitions(.2s)
      color #ff3244
      placeholderColor(#ff3244, #ff3244)
      border-color #ff3244
.newsletter-loading
  img
    centerPerfect()
    width 48px
    height 48px
.newsletter-result
  display flex
  z-index 101
  align-items center
  justify-content center
  align-content center
  flex-wrap wrap
  text-align center
  .title-h4
    margin-bottom 10px
    text-align center
  p
    color #fff
    margin 0
    width 100%
    font-size 16px
    margin 10px 0
  .newsletter-result-image
    width 100%
    margin 77px 0
  .newsletter-result-action
    width 100%
    display flex
    justify-content center
    margin-top 20px
.modal-close
  position absolute
  top 50%
  transform translateY(-50%)
  left 0
  border none
  z-index 1000
  background #fff
  border-radius 32px
  width 32px
  height 32px
  padding 0
  background-image: url('~assets/img/004-cancel.svg')
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: auto 14px;
  background-size: auto 14px;
  cursor pointer
  text-indent: -9999px
  transitions(.2s)
  &:hover
    background-color lighten(#351921, 20%)
    transitions(.2s)
.button-newsletter
  display flex
  outline none
  cursor pointer
  border none
  justify-content center
  align-items center
  text-transform uppercase
  text-decoration none
  font-weight 700
  height 40px
  font-size 14px
  letter-spacing 1px
  border-radius 66px
  padding 0 32px
  text-decoration none
  transitions(.2s)
  &.white
    background #fff
    color #0096FF
    box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
    &:hover
      color #fff
      background #0096FF
  &.blue
    color #fff
    background #0096FF
    box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
    &:hover
      background #fff
      color #0096FF
  &:hover
    transitions(.2s)
@media all and (max-width: 900px)
  .field
    width 100%
    margin-bottom 5px
    input
      height 48px
  .field-submit
    margin 0 auto
    width 200px
    .button.orange.huge.full
      height 48px
@media all and (max-width: 600px)
  .newsletter-area 
    .container
      width calc(100% - 20px)
  .button-newsletter
    width 100%
    padding 0 12px
    font-size 12px
</style>