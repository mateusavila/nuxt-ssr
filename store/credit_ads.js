export const state = () => ({
  loaded: false,
  credit_ads: {
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
      pay: {
        title: '',
        text: '',
        image: {}
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
  credit_ads: state => state.credit_ads,
  loaded: state => state.loaded
}
export const mutations = {
  updateCreditAds (state, credit_ads) { state.credit_ads = credit_ads },
  updateLoaded (state, loaded) { state.loaded = loaded }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    if (!state.loaded) {
      Promise.all([
        fetch(data.baseAPI + '/wp/v2/pages/?slug='+data.slug, { mode: 'cors' })
      ]).then(async ([credit_adsResource]) => {
        const credit_ads = await credit_adsResource.json()
        return { credit_ads }
      }).then((response) => {
        commit('updateCreditAds', response.credit_ads[0])
        commit('updateLoaded', true)
      })
    }
  }
}