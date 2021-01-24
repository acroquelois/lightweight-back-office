import { createStore } from 'vuex'
import firebase from 'firebase'
import { defaultPlugins } from 'villus'

const store = createStore({
  state: {
    token: localStorage.getItem('token') as string,
    lastRoute: ''
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
        opContext.headers['Authorization'] = `Bearer ${state.token}`
      }
      return {
        url: `${process.env.VUE_APP_HASURA_ENDPOINT_BASE_URL}/v1/graphql`,
        use: [authPlugin, ...defaultPlugins()],
      }
    },
    lastRoute(state): string {
      return state.lastRoute
    }
  },
  mutations: {
    SET_TOKEN(state, payload: string) {
      state.token = payload
      localStorage.setItem('token', payload)
    },
    SET_LAST_ROUTE(state, payload: string) {
      state.lastRoute = payload
    },
  },
  actions: {
    async logIn({ commit, dispatch }, { username, password }) {
      await firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then((user) => {
          user.user?.getIdTokenResult().then((idToken) => {
            commit('SET_TOKEN', idToken.token)
          })
        })
    },
    setLastRoute({ commit, dispatch }, lastRoute) {
      commit('SET_LAST_ROUTE', lastRoute)
    },
  },
})

export default store
