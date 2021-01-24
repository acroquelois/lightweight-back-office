import serviceAccount from './service_account.json'
import * as firebase from 'firebase'
const admin = require('firebase-admin')

export const hasuraURL = 'http://localhost:9100'
export const elacticURL = 'http://localhost:9200'
export const region = 'europe-west1'

const configOptions = {
  apiKey: 'AIzaSyD8SX4c52bIv2qL2TEIbfMjLrpHKX8L4aA',
  authDomain: 'lightweight-back-office-dev.firebaseapp.com',
  projectId: 'lightweight-back-office-dev',
  storageBucket: 'lightweight-back-office-dev.appspot.com',
  messagingSenderId: '708156396562',
  appId: '1:708156396562:web:780545e02292c98c4834cb',
}

export const userApp = firebase.default.initializeApp(configOptions)

export const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lightweight-back-office.firebaseio.com',
})
