import serviceAccount from './service_account.json'
import * as admin from 'firebase-admin'

export const region = 'europe-west1'

export const adminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lightweight-back-office.firebaseio.com',
})
