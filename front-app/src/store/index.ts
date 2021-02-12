import { createStore } from 'vuex'
import { defaultPlugins } from 'villus'

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
      let parsedToken = parseJwt(state.token)
      let actualTimestamp = Math.round(new Date().getTime() / 1000)
      if (!parsedToken['exp']) return false
      return parsedToken['exp'] > actualTimestamp
    },
    villusOpt(state): any {
      const authPlugin = ({ opContext }: any) => {
        state.token
          ? (opContext.headers['Authorization'] = `Bearer ${state.token}`)
          : null
      }
      return {
        url: `${process.env.VUE_APP_HASURA_ENDPOINT_BASE_URL}/v1/graphql`,
        use: [authPlugin, ...defaultPlugins()],
      }
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

const parseJwt = (token: string) => {
  let base64Url = token.split('.')[1]
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join(''),
  )
  return JSON.parse(jsonPayload)
}

export default store
