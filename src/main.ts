import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'

import './assets/styles/tailwind.css'
import { withProvider, defaultPlugins } from 'villus'

// Setup Firebase
const configOptions = {
  apiKey: 'AIzaSyDSMhG08KUC4jCcFC3UbajkmERCeFsSlMY',
  authDomain: 'lightweight-back-office.firebaseapp.com',
  databaseURL: 'https://lightweight-back-office.firebaseio.com',
  projectId: 'lightweight-back-office',
  storageBucket: 'lightweight-back-office.appspot.com',
  messagingSenderId: '603179471698',
  appId: '1:603179471698:web:cd76bfc2e3700d9082a08b',
}

function authPlugin({ opContext }: any) {
  opContext.headers['x-hasura-admin-secret'] = 'questionsecretkey'
}

const clientOptions = {
  url: 'http://localhost:9100/v1/graphql',
  use: [authPlugin, ...defaultPlugins()],
}

const AppWithClient = withProvider(App, clientOptions)

createApp(AppWithClient).use(store).use(router).mount('#app')

firebase.default.initializeApp(configOptions)
firebase.default.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user)
})
