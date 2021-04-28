export const state = () => ({
  loaded: false,
  platform: {
    yoast_title: '',
    yoast_meta: [],
    yoast_head: '',
    acf: {
      hero: {
        title: '',
        images: {
          image: {},
          image_webp: {}
        },
        button_begin: '',
        link: ''
      },
      how_works: {
        title: '',
        topics: []
      },
      request: {
        title: '',
        text: '',
        list: [],
        button_request: '',
        link_request: ''
      },
      faq: {
        title: '',
        list: []
      },
      safedata: {
        title: '',
        text: '',
        image: {},
        button: '',
        link: ''
      },
      blog: {
        title: ''
      }
    }
  },
})
export const getters = {
  platform: state => state.platform,
  loaded: state => state.loaded
}
export const mutations = {
  updatePlatform (state, platform) { state.platform = platform },
  updateLoaded (state, loaded) { state.loaded = loaded }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    if (!state.loaded) {
      Promise.all([
        fetch(data.baseAPI + '/wp/v2/pages/?slug='+data.slug, { mode: 'cors' })
      ]).then(async ([platformResource]) => {
        const platform = await platformResource.json()
        return { platform }
      }).then((response) => {
        commit('updatePlatform', response.platform[0])
        commit('updateLoaded', true)
      })
    }
  }
}