export const state = () => ({
  loaded: false,
  page: {
    acf: {
      hero: {
        text: '',
        images: {
          image: {},
          image_webp: {},
          image_avif: {}
        }
      },
      growth: {
        begin: '',
        parcel: '',
        ideal: '',
        button: '',
        link: ''
      },
      about: '',
      purpose: '',
      business: '',
      mission: '',
      vision: '',
      values: '',
      our_team: {
        images: {
          image: {},
          image_webp: {},
          image_avif: {}
        },
        text: '',
        button: '',
        link: ''
      }
    }
  }
})
export const getters = {
  page: state => state.page,
  loaded: state => state.loaded
}
export const mutations = {
  updatePage (state, page) { state.page = page },
  updateLoaded (state, loaded) { state.loaded = loaded }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/wp/v2/pages/?slug='+data.slug, { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
    ]).then(async ([pageResource, langResource]) => {
      const page = await pageResource.json()
      const lang = await langResource.json()
      return { lang, page }
    }).then((response) => {
      commit('updatePage', response.page[0])
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('translate/updateLoaded', true, {root: true})
      commit('updateLoaded', true)
    })
  }
}