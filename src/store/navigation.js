export default {
  namespaced: true,
  state: () => ({
    isShowLNB: false,
    isShowRNB: false
  }),
  getters: {

  },
  mutations: { // commit으로 실행
    setState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: { // dispatch로 실행
    onNav({ commit }, name) {
      commit('setState', {
        [`isShow${name}`]: true
      })
    },
    offNav({ commit }, name) {
      commit('setState', {
        [`isShow${name}`]: false
      })
    }
  }
}
