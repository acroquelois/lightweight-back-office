import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import urql from '@urql/vue'

import * as firebase from 'firebase'

import './assets/styles/tailwind.css'

// Init firebase
const configOptions = {
  apiKey: 'AIzaSyD8SX4c52bIv2qL2TEIbfMjLrpHKX8L4aA',
  authDomain: 'lightweight-back-office-dev.firebaseapp.com',
  projectId: 'lightweight-back-office-dev',
  storageBucket: 'lightweight-back-office-dev.appspot.com',
  messagingSenderId: '708156396562',
  appId: '1:708156396562:web:780545e02292c98c4834cb',
}
firebase.default.initializeApp(configOptions)

// Init Urql
const urqlClient = {
  url: `${process.env.VUE_APP_HASURA_ENDPOINT_BASE_URL}/v1/graphql`,
  maskTypename: true,
  fetchOptions: () => {
    const token = store.getters.token
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  },
}

// Init app
createApp(App).use(store).use(router).use(urql, urqlClient).mount('#app')
