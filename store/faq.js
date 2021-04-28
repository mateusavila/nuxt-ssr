export const state = () => ({
  loaded: false,
  faq: [],
  categories: [],
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
      }
    }
  }
})
export const getters = {
  page: state => state.page,
  faq: state => state.faq,
  categories: state => state.categories,
  loaded: state => state.loaded
}
export const mutations = {
  updateFaq (state, faq) { state.faq = faq },
  updatePage (state, page) { state.page = page },
  updateCategories (state, categories) { state.categories = categories },
  updateLoaded (state, loaded) { state.loaded = loaded }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/wp/v2/pages/?slug='+data.slug, { mode: 'cors' }),
      fetch(data.baseAPI + '/wp/v2/faq?per_page=100', { mode: 'cors' }),
      fetch(data.baseAPI + '/wp/v2/category_faq', { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
    ]).then(async ([faqPageResource, faqResource, categoriesResource, langResource]) => {
      const page = await faqPageResource.json()
      const faq = await faqResource.json()
      const categories = await categoriesResource.json()
      const lang = await langResource.json()
      return { faq, categories, lang, page }
    }).then((response) => {
      commit('updateFaq', response.faq)
      commit('updatePage', response.page[0])
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('updateCategories', response.categories)
      commit('translate/updateLoaded', true, {root: true})
      commit('updateLoaded', true)
    })
  },
  async searchFaq ({commit, state}, data) {
    commit('updateLoaded', false)
    try {
      const faqResource = await fetch(`${data.baseAPI}/wp/v2/faq?per_page=100&search=${data.search}`)
      const faq = await faqResource.json()
      commit('updateFaq', faq)
      commit('updateLoaded', true)
    } catch (e) {
      console.log('deu erro')
    }
  },
  loadPageByCategory ({ commit, state }, data) { 
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/wp/v2/pages/?slug='+data.slug, { mode: 'cors' }),
      fetch(data.baseAPI + '/api/faq?per_page=100&category='+data.category, { mode: 'cors' }),
      fetch(data.baseAPI + '/wp/v2/category_faq', { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
    ]).then(async ([faqPageResource, faqResource, categoriesResource, langResource]) => {
      const faq = await faqResource.json()
      const page = await faqPageResource.json()
      const categories = await categoriesResource.json()
      const lang = await langResource.json()
      return { faq, categories, lang, page }
    }).then((response) => {
      commit('updateFaq', response.faq.data)
      commit('updatePage', response.page[0])
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('updateCategories', response.categories)
      commit('translate/updateLoaded', true, {root: true})
      commit('updateLoaded', true)
    })
  },
}