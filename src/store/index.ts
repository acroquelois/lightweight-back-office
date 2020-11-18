import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
  },
  getters: {
    user(state: any) {
      return state.user
    },
  },
  mutations: {
    SET_LOGGED_IN(state: any, value: any) {
      state.user.loggedIn = value
    },
    SET_USER(state: any, data: any) {
      state.user.data = data
    },
  },
  actions: {
    fetchUser({ commit }: any, user: any) {
      commit('SET_LOGGED_IN', user !== null)
      if (user) {
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email,
        })
      } else {
        commit('SET_USER', null)
      }
    },
  },
})
