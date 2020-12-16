import serviceAccount from './service_account.json'
import * as functions from 'firebase-functions'
import * as firebase from 'firebase'

const admin = require('firebase-admin')
const config = {
  apiKey: 'AIzaSyDSMhG08KUC4jCcFC3UbajkmERCeFsSlMY',
  authDomain: 'lightweight-back-office.firebaseapp.com',
  databaseURL: 'https://lightweight-back-office.firebaseio.com',
  projectId: 'lightweight-back-office',
  storageBucket: 'lightweight-back-office.appspot.com',
  messagingSenderId: '603179471698',
  appId: '1:603179471698:web:cd76bfc2e3700d9082a08b',
}

export const func = functions.region('europe-west1')

export const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lightweight-back-office.firebaseio.com',
})

export const firebaseApp = firebase.default.initializeApp(config)
