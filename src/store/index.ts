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
    isLogged(state): boolean {
      return !!state.token
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

export default store
