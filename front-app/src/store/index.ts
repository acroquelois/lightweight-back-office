import { createStore } from 'vuex'

const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join(''),
  )
  return JSON.parse(jsonPayload)
}

const store = createStore({
  state: {
    token: localStorage.getItem('token') as string,
  },
  getters: {
    token(state): any {
      return state.token
    },
    isLogged(state, getters): boolean {
      return !!state.token && getters.isTokenValid
    },
    isTokenValid(state): boolean {
      const parsedToken = parseJwt(state.token)
      const actualTimestamp = Math.round(new Date().getTime() / 1000)
      if (!parsedToken['exp']) return false
      return parsedToken['exp'] > actualTimestamp
    },
  },
  mutations: {
    SET_TOKEN(state, payload: string) {
      state.token = payload
      localStorage.setItem('token', payload)
    },
  },
  actions: {
    async setToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
  },
})

export default store
