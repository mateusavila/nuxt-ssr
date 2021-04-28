export const state = () => ({
  loaded: false,
  mediakit: {
    yoast_title: '',
    yoast_meta: [],
    yoast_head: '',
    acf: {
      hero: {
        title: '',
        list: []
      },
      intro: {
        title: '',
        list: []
      },
      new_economy: {
        title: '',
        companies: []
      },
      our_logo: {
        title: '',
        preference_list: [],
        blue_box: '',
        list: []
      },
      colors: {
        title: '',
        list: []
      },
      typography: {
        title: '',
        text: '',
        image_regular: {
          image: {},
          image_webp: {}
        },
        image_bold: {
          image: {},
          image_webp: {}
        }
      },
      downloads: {
        title: '',
        text: '',
        list: []
      }
    }
  }
})
export const getters = {
  mediakit: state => state.mediakit,
  loaded: state => state.loaded
}
export const mutations = {
  updateMediakit (state, mediakit) { state.mediakit = mediakit },
  updateLoaded (state, loaded) { state.loaded = loaded }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/wp/v2/pages/?slug='+data.slug, { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
    ]).then(async ([mediakitResource, langResource]) => {
      const mediakit = await mediakitResource.json()
      const lang = await langResource.json()
      return { mediakit, lang }
    }).then((response) => {
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('updateMediakit', response.mediakit[0])
      commit('translate/updateLoaded', true, {root: true})
      commit('updateLoaded', true)
    })
  },
}