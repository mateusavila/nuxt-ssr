export const state = () => ({
  loaded: false,
  credits: {
    yoast_title: '',
    yoast_meta: [],
    yoast_head: '',
    acf: {
      hero: {
        title: '',
        images: {
          image: {},
          image_webp: {}
        }
      },
      fuel: {
        title: '',
        numbers: {
          before: '',
          after: '',
          numbers: {
            before: '',
            after: '',
            number: 0
          },
          text: '',
          companies: []
        }
      },
      cards: [],
      button_lines: '',
      request: {
        title: '',
        text: '',
        list: [],
        button_request: ''
      },
      faq: {
        title: '',
        list: []
      }
    }
  },
})
export const getters = {
  credits: state => state.credits,
  loaded: state => state.loaded
}
export const mutations = {
  updateCredits (state, credits) { state.credits = credits },
  updateLoaded (state, loaded) { state.loaded = loaded }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    if (!state.loaded) {
      Promise.all([
        fetch(data.baseAPI + '/api/'+data.slug, { mode: 'cors' })
      ]).then(async ([creditsResource]) => {
        const credits = await creditsResource.json()
        return { credits }
      }).then((response) => {
        commit('updateCredits', response.credits.data.credits)
        commit('updateLoaded', true)
      })
    }
  }
}