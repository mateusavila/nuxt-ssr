export const state = () => ({
  loaded: false,
  digital_credit_mmr: {
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
        link: '',
        button_2: '',
        link_2: ''
      },
      how_works: {
        title: '',
        topics: []
      },
      fuel: {
        title: '',
        text: '',
        companies: [],
        numbers: {
          before: '',
          after: '',
          number: ''
        }
      },
      faq: {
        title: '',
        list: []
      },
      blog: {
        title: ''
      }
    }
  },
})
export const getters = {
  digital_credit_mmr: state => state.digital_credit_mmr,
  loaded: state => state.loaded
}
export const mutations = {
  updateDigitalCreditMMR (state, digital_credit_mmr) { state.digital_credit_mmr = digital_credit_mmr },
  updateLoaded (state, loaded) { state.loaded = loaded }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    if (!state.loaded) {
      Promise.all([
        fetch(data.baseAPI + '/wp/v2/pages/?slug='+data.slug, { mode: 'cors' })
      ]).then(async ([digital_credit_mmrResource]) => {
        const digital_credit_mmr = await digital_credit_mmrResource.json()
        return { digital_credit_mmr }
      }).then((response) => {
        commit('updateDigitalCreditMMR', response.digital_credit_mmr[0])
        commit('updateLoaded', true)
      })
    }
  }
}