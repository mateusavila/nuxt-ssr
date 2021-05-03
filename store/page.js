export const state = () => ({
  loaded: false
})
export const getters = {
  loaded: state => state.loaded
}
export const mutations = {
  updateLoaded (state, loaded) { state.loaded = loaded }
}