import homeApi from '@/api/home'

const state = {
  data: []
}

const getters = {

}

const actions = {
  async getData (context) {
    let res = await homeApi.getData()
    context.commit('dataUpdate', res)
    return res
  }
}

const mutations = {
  dataUpdate (state, payload) {
    state.data = payload.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
