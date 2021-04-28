export const state = () => ({
  options: {
    email: '',
    blogger: '',
    twitter: '',
    address: '',
    credits: '',
    linkedin: '',
    attendance: '',
  },
})
export const getters = {
  options: state => state.options
}
export const mutations = {
  updateOptions (state, options) { state.options = options }
}