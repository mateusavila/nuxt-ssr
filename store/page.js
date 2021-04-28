export const state = () => ({
  loaded: false,
  posts: [],
  options: {
    email: '',
    blogger: '',
    twitter: '',
    address: '',
    credits: '',
    linkedin: '',
    attendance: '',
  },
  newsletter: {
    title: '',
    button: '',
    success: {
      title: '',
      text: ''
    },
    error: {
      title: '',
      text: ''
    }
  },
  blog: {
    title: '',
    button: ''
  },
  home: {
    yoast_title: '',
    yoast_meta: [],
    yoast_head: '',
    acf: {
      hero: {
        title: '',
        images: {
          image: {},
          image_webp: {},
          image_avif: {}
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
      bureaucracy: {
        title: '',
        sub_title: '',
        text: '',
        sub_text: '',
        image: ''
      },
      button_lines: '',
      testimonials: {
        title: '',
        list: []
      },
      others: {
        title: '',
        list: []
      },
      support: {
        title: '',
        list: []
      },
      allies: {
        title: '',
        text: '',
        button_ally: '',
        list: []
      },
      invest: {
        title: '',
        text: '',
        button_know: ''
      },
      finance: [],
      partners: [],
      how_works: {
        title: '',
        list: [],
        button: '',
        link: ''
      },
      advantages: [],
      loan: {
        images: {
          image: {},
          image_webp: {},
          image_avif: {}
        },
        text: '',
        button: '',
        link: ''
      },
      clipping: {
        title: '',
        list: []
      },
      growth: {
        begin: '',
        parcel: '',
        ideal: '',
        button: '',
        link: ''
      },
      platform: {
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
  },
})
export const getters = {
  home: state => state.home,
  posts: state => state.posts,
  loaded: state => state.loaded,
  options: state => state.options,
  newsletter: state => state.newsletter
}
export const mutations = {
  updateHome (state, home) { state.home = home },
  updateBlog (state, blog) { state.blog = blog },
  updatePosts (state, posts) { state.posts = posts },
  updateLoaded (state, loaded) { state.loaded = loaded },
  updateOptions (state, options) { state.options = options },
  updateNewsletter (state, newsletter) { state.newsletter = newsletter }
}
export const actions = {
  async loadPage ({ commit, state }, data) { 
    if (!state.loaded) {

      Promise.all([
        this.$axios.$get(data.baseAPI + '/api/home', { mode: 'cors' }),
        this.$axios.$get(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
      ]).then(async ([pageResource, langResource]) => {
        const page = await pageResource
        const lang = await langResource
        return { page, lang }
      }).then((response) => {
        

        commit('updateHome', response.page.data.home)
        commit('updatePosts', response.page.data.posts || [])
        commit('updateOptions', response.page.data.options)
        commit('options/updateOptions', response.page.data.options, {root: true})
        commit('updateBlog', response.page.data.blog)
        commit('updateNewsletter', response.page.data.newsletter)
        commit('translate/updateTranslate', response.lang, {root: true})
        
        // finalizando os carregamentos
        commit('options/updateLoaded', true, {root: true})
        commit('translate/updateLoaded', true, {root: true})
        commit('updateLoaded', true)

        
      })
    }
  }
}