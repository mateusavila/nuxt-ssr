export const state = () => ({
  search: '',
  loaded: false
})

export const getters = {
  search: state => state.search
}

export const mutations = {
  updateSearch (state, search) { state.search = search },
  updateLoaded (state, loaded) { state.loaded = loaded }
}

