import serviceAccount from './service_account.json'

const admin = require('firebase-admin')

export const region = 'europe-west1'

export const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lightweight-back-office.firebaseio.com',
})
