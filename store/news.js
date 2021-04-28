export const state = () => ({
  loaded: false,
  loading: false,
  posts: [],
  categories: [],
  mainNews: [],
  single: {
    title: '',
    content: '',
    category: [],
    acf: {
      images: {
        image: {},
        image_webp: {},
        image_avif: {}
      },
      author_block: ''
    },
    date: '',
    updated_date: '',
    author: {
      name: '',
      email: '',
      first_name: '',
      last_name: '',
      job: '',
      description: ''
    }
  },
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
      list: [],
      request: {
        title: '',
        text: '',
        button_request: '',
        link_request: '',
        topics: []
      }
    }
  },
  postsTotal: 0,
  postsPage: 0,
  PostsPaginate: 1
})
export const getters = {
  page: state => state.page,
  posts: state => state.posts,
  loaded: state => state.loaded,
  loading: state => state.loading,
  options: state => state.options,
  categories: state => state.categories,
  mainNews: state => state.mainNews
}
export const mutations = {
  updatePage (state, page) { state.page = page },
  updatePosts (state, posts) { state.posts = posts },
  updateLoaded (state, loaded) { state.loaded = loaded },
  updateSingle (state, single) { state.single = single },
  updateLoading (state, loading) { state.loading = loading },
  updateOptions (state, options) { state.options = options },
  updateMainNews (state, mainNews) { state.mainNews = mainNews },
  updatePostsPage (state, postsPage) { state.postsPage = postsPage},
  updatePostsTotal (state, postsTotal) { state.postsTotal = postsTotal},
  updateCategories (state, categories) { state.categories = categories },
  updatePostPaginate (state, PostsPaginate) { state.PostsPaginate = PostsPaginate }
}
export const actions = {
  loadPage ({ commit, state }, data) { 
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/api/home', { mode: 'cors' }),
      fetch(data.baseAPI + '/api/blog', { mode: 'cors' }),
      fetch(data.baseAPI + '/wp/v2/posts/?per_page=9&page='+data.page, { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
    ]).then(async ([homeResource, pageResource, postsResource, langResource]) => {
      const home = await homeResource.json()
      const page = await pageResource.json()
      const lang = await langResource.json()
      const posts = await postsResource.json()
      const total = parseInt(postsResource.headers.get('x-wp-total'), 10)
      const pagesTotal = parseInt(postsResource.headers.get('x-wp-totalpages'), 10)
      commit('updatePostsTotal', total)
      commit('updatePostsPage', pagesTotal)
      return { home, page, posts, lang }
    }).then((response) => {
      commit('updatePage', response.page.data.home)
      commit('updatePosts', response.posts)
      commit('updateMainNews', response.page.data.home.acf.list)
      commit('updateCategories', response.page.data.home.acf.categories)
      commit('updateOptions', response.page.data.options)
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('options/updateOptions', response.page.data.options, {root: true})
      commit('translate/updateLoaded', true, {root: true})
      commit('options/updateLoaded', true, {root: true})
      commit('updateLoaded', true)
    })
  },
  loadOrderBy ({ commit, state }, data) { 
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/api/home', { mode: 'cors' }),
      fetch(data.baseAPI + '/api/blog', { mode: 'cors' }),
      fetch(data.baseAPI + '/api/orderby?order='+data.order+'&orderby='+data.orderby+'&page='+data.page, { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
      
    ]).then(async ([homeResource, pageResource, postsResource, langResource]) => {
      const home = await homeResource.json()
      const page = await pageResource.json()
      const lang = await langResource.json()
      const posts = await postsResource.json()
      return { home, page, posts, lang }
    }).then((response) => {
      commit('updatePage', response.page.data.home)
      commit('updatePosts', response.posts.data)
      commit('updatePostsTotal', response.posts.found_posts)
      commit('updatePostsPage', response.posts.max_pages)
      commit('updateMainNews', response.page.data.home.acf.list)
      commit('updateCategories', response.page.data.home.acf.categories)
      commit('updateOptions', response.page.data.options)
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('options/updateOptions', response.page.data.options, {root: true})
      commit('translate/updateLoaded', true, {root: true})
      commit('options/updateLoaded', true, {root: true})
      commit('updateLoaded', true)

    })
  },
  loadCategory ({ commit, state }, data) {
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/api/home', { mode: 'cors' }),
      fetch(data.baseAPI + '/api/blog', { mode: 'cors' }),
      fetch(data.baseAPI + '/category/v1/?category='+data.category+'&page='+data.page, { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
      
    ]).then(async ([homeResource, pageResource, postsResource, langResource]) => {
      const home = await homeResource.json()
      const page = await pageResource.json()
      const lang = await langResource.json()
      const posts = await postsResource.json()
      return { home, page, posts, lang }
    }).then((response) => {
      commit('updatePage', response.page.data.home)
      commit('updatePosts', response.posts.data)
      commit('updatePostsTotal', response.posts.found_posts)
      commit('updatePostsPage', response.posts.max_pages)
      commit('updateMainNews', response.page.data.home.acf.list)
      commit('updateCategories', response.page.data.home.acf.categories)
      commit('updateOptions', response.page.data.options)
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('options/updateOptions', response.page.data.options, {root: true})
      commit('translate/updateLoaded', true, {root: true})
      commit('options/updateLoaded', true, {root: true})
      commit('updateLoaded', true)
    })
  },
  loadSearch ({ commit, state }, data) { 
    commit('updateLoaded', false)
    Promise.all([
      fetch(data.baseAPI + '/api/home', { mode: 'cors' }),
      fetch(data.baseAPI + '/api/blog', { mode: 'cors' }),
      fetch(data.baseAPI + '/wp/v2/posts/?per_page=9&page='+data.page+'&search='+data.search, { mode: 'cors' }),
      fetch(data.defaultURL+'/'+data.lang+".json", { mode: 'cors' })
      
    ]).then(async ([homeResource, pageResource, postsResource, langResource]) => {
      const home = await homeResource.json()
      const page = await pageResource.json()
      const lang = await langResource.json()
      const posts = await postsResource.json()
      const total = parseInt(postsResource.headers.get('x-wp-total'), 10)
      const pagesTotal = parseInt(postsResource.headers.get('x-wp-totalpages'), 10)
      commit('updatePostsTotal', total)
      commit('updatePostsPage', pagesTotal)
      return { home, page, posts, lang }
    }).then((response) => {
      commit('updatePage', response.page.data.home)
      commit('updatePosts', response.posts)
      commit('updateMainNews', response.page.data.home.acf.list)
      commit('updateCategories', response.page.data.home.acf.categories)
      commit('updateOptions', response.page.data.options)
      commit('translate/updateTranslate', response.lang, {root: true})
      commit('options/updateOptions', response.page.data.options, {root: true})
      commit('translate/updateLoaded', true, {root: true})
      commit('options/updateLoaded', true, {root: true})
      commit('updateLoaded', true)
    })
  },
  async loadSingle ({commit, state}, data) {
    commit('updateLoaded', false)
    try {
      const postResource = await fetch(`${data.baseAPI}/api/blog-item?slug=${data.slug}`)
      const post = await postResource.json()
      commit('updateSingle', post)
    } catch (e) {
      console.log('deu erro')
    }

    
  }
}