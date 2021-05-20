<template>
  <div class="analytics-page">
    <LoadingBlock :loading="$store.state.page.loaded"></LoadingBlock>

    <div class="container" :style="backgroundHeader">
      <div class="container-left">
        <h1>
          {{ analytics.acf.analytics.title }}
        </h1>
        <div>
          <p
            v-for="(step, index) in analytics.acf.analytics.steps"
            :key="index"
          >
            {{ step.text }}
          </p>
        </div>
        <h3>
          {{ analytics.acf.analytics.disclaimer }}
        </h3>
      </div>

      <div class="container-right">
        <div>
          <p>{{ analytics.acf.analytics.loginTitle }}</p>

          <div>
            <div
              class="card"
              v-for="(card, index) in analytics.acf.analytics.loginCard"
              :key="index"
            >
              <img :src="card.img.url" :alt="card.text" />
              <span>{{ card.text }}</span>
            </div>
          </div>
        </div>

        <form class="form" action="#" method="post" @submit.prevent="send">
          <div>
            <input
              type="text"
              placeholder="E-mail (login plataforma)"
              :class="errorClass($v.form.email)"
              v-model.trim="$v.form.email.$model"
            />
            <ErrorBox
              :status="$v.form.email.$error"
              text="E-mail inválido"
              :margin-bottom="16"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Senha (plataforma)"
              :class="errorClass($v.form.password)"
              v-model.trim="$v.form.password.$model"
            />
            <ErrorBox
              :status="$v.form.password.$error"
              text="Senha inválida"
              :margin-bottom="16"
            />
          </div>
          <button type="submit">
            <img
              src="~assets/img/loading-white.svg"
              alt="loading"
              width="24"
              height="24"
              v-if="loading"
            />
            INICIAR SINCRONIZAÇÃO
          </button>
        </form>
      </div>

      <div class="back-arrow" :style="backgroundArrow"></div>

      <InfoModal v-if="dataModal.visible" :data="dataModal" @resetModal="clearModal" />
    </div>
  </div>
</template>
<script>
import mixins from "~/helpers/mixins";
import { required, email } from "vuelidate/lib/validators";

import InfoModal from "../components/InfoModal";

export default {
  layout: "partners",
  mixins: [mixins],
  async asyncData({ store, app, $config: { baseAPI, lang, defaultURL } }) {
    // await store.dispatch('page/loadPage', { baseAPI, lang, defaultURL })
    // await store.dispatch('mediakit/loadPage', { baseAPI, lang, defaultURL, slug: 'integracao-media-kit' })
    require("isomorphic-fetch");
    const translate = () =>
      import(`~/helpers/${lang}.js`).then(m => m.default || m);
    const language = await translate();
    if (!store.state.translate.loaded) {
      let home;
      await fetch(baseAPI + "/api/home", { mode: "cors" })
        .then(response => response.json())
        .then(response => {
          home = response;
        });

      store.commit("options/updateOptions", home.data.options);
      store.commit("translate/updateTranslate", language);
      store.commit("translate/updateLoaded", true);
    }
    let analytics;
    await fetch(baseAPI + "/wp/v2/pages/?slug=analytics", { mode: "cors" })
      .then(response => response.json())
      .then(response => {
        analytics = response[0];
      });
    analytics.yoast_meta.map(el => {
      if (el.property !== "og:url") {
        app.head.meta.push({
          hid: el.name ? el.name : el.property,
          name: el.name ? el.name : el.property,
          content: el.content
        });
      }
    });
    return {
      analytics,
      translate: language
    };
  },
  components: {
    InfoModal,
  },
  data() {
    return {
      analytics: {},
      translate: {},
      timer: null,
      dataModal: {
        visible: false,
        title: "",
        message: "",
        type: "",
      },
      form: {
        email: "",
        password: ""
      },
      loading: false
    };
  },
  computed: {
    backgroundHeader() {
      return {
        "background-image": `url(${this.analytics.acf.analytics.background.url})`
      };
    },
    backgroundArrow() {
      return {
        "background-image": `url(${this.analytics.acf.analytics.arrowImg.url})`
      };
    }
  },
  methods: {
    errorClass(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      };
    },
    async send() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => this.$v.$reset(), 4000);
      } else {
        this.loading = true;
        const payload = {
          email: this.form.email,
          password: this.form.password
        };

        try {
          const returnApi = await this.$store.dispatch(
            "analytics/updateAuth",
            payload
          );

          if (returnApi.user) {
            if (this.$config.basePlatform == "https://auth-api.a55.tech/api") {
              window.location = "https://plataforma.a55.tech/app/integracao-analytics";
            } else if (this.$config.basePlatform == "https://auth-api-staging.a55.tech/api") {
              window.location = "https://plataforma-staging.a55.tech/app/integracao-analytics";
            } else {
              console.log("Verifique a variavel basePlatform")
            }
          } else {
            this.dataModal.visible = true
            this.dataModal.title = "Atenção"
            this.dataModal.message = "E-mail ou senha incorreto(s)"
            this.dataModal.type= "error"
          }
        } catch (error) {
          console.log("error", error);
        } finally {
          this.loading = false;
        }
      }
    },
    clearModal() {
      this.dataModal.visible = false
      this.dataModal.title = ""
      this.dataModal.message = ""
      this.dataModal.type= ""
    },
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  }
};
</script>

<style lang="stylus">
@import '~assets/css/functions.styl'

.analytics-page
  padding-top 150px
  padding-bottom: 35px
  .container
    position relative
    width 100%
    max-width 1200px
    margin 0 auto
    display flex
    align-items flex-start
    justify-content space-evenly
    height 700px
    background-size cover
    .container-left
      display flex
      flex-direction column
      justify-content space-between
      width 600px
      height 450px
      div
        max-width 450px
      :first-child
        margin-bottom 2rem
      p
        font-size 24px
        font-weight 400
      h3
        max-width 450px
    .container-right
      display flex
      flex-direction column
      justify-content space-between
      padding: 1.5rem 1rem
      width: 410px
      height 690px
      background-color rgba(0,0,0,0.5)
      box-shadow 0px -2px 4px rgba(0, 21, 75, 0.1), 0px 16px 24px rgba(0, 21, 75, 0.1), 0px 2px 6px rgba(0, 21, 75, 0.08), 0px 0px 1px rgba(0, 21, 75, 0.08)
      border-radius 16px
      div
        color: #5CBBFF
        p
          font-size 18px
          line-height: 150%
          margin-bottom 1.3rem
        .card
          width 354px
          display flex
          align-items center
          padding 0.7rem 0
          font-size 18px
          img
            padding-right 20px
      .form
        input
          width 100%
          height 45px
          border none
          margin 0.7rem 0
          font-size 16px
          color white
          background #00154B
          border-radius 4px
          padding-left 0.5rem
        button
          color white
          background #0096FF
          box-shadow 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
          border-radius 80px
          padding 8px 32px
          font-size 18px
          margin-top 0.5rem
          height 56px
          font-weight bold
          letter-spacing 1px
          width 100%
          cursor pointer
          display flex
          align-items center
          justify-content center
          img
            margin-right 1rem
    .back-arrow
      position absolute
      bottom 0
      left 3.3%
      width 666px
      height 230px
      background-size 98% 125%

.media-kit-navigation
  width 188px
.media-kit-content
  width calc(100% - 250px)
@media all and (max-width: 1200px)
  .container
    flex-direction column
    height 100% !important
    align-items center !important
    padding 0 1.5rem
    .container-right
      margin 2rem 0 !important
      width 530px !important
      height 100% !important
      .card
        width 100% !important
  .back-arrow
    display none
@media all and (max-width: 660px)
  .container
    .container-left, .container-right
      width 100% !important
      height 100% !important
</style>
