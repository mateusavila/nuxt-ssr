export const state = () => ({
  loaded: false,
  partners: {
    yoast_title: '',
    yoast_meta: [],
    yoast_head: '',
    acf: {
      hero: {
        title: '',
        background: {
          image: {},
          image_webp: {},
          image_avif: {}
        },
        images: {
          image: {},
          image_webp: {},
          image_avif: {}
        }
      },
      steps: [],
      media_kit: {
        title: '',
        background: {
          image: {},
          image_webp: {},
          image_avif: {}
        },
        button: '',
        link: ''
      },
      api: {
        title: '',
        images: {},
        button: '',
        link: ''
      }
    }
  }
})
export const getters = {
  partners: state => state.partners,
  loaded: state => state.loaded
}
export const mutations = {
  updatePartners (state, partners) { state.partners = partners },
  updateLoaded (state, loaded) { state.loaded = loaded }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/wp/v2/pages/?slug='+data.slug, { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
    ]).then(async ([partnersResource, langResource]) => {
      const partners = await partnersResource.json()
      const lang = await langResource.json()
      return { partners, lang }
    }).then((response) => {
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('updatePartners', response.partners[0])
      commit('translate/updateLoaded', true, {root: true})
      commit('updateLoaded', true)
    })
  },
}