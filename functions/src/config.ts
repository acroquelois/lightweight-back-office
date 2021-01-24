import serviceAccount from './service_account.json'
const admin = require('firebase-admin')

export const hasuraURL = "http://localhost:9100"
export const elacticURL = "http://localhost:9200"
export const region = "europe-west1"

export const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lightweight-back-office.firebaseio.com',
})
