import serviceAccount from '../service_account.json'
import { config } from '../config'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const firebase = require('firebase')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

firebase.default.initializeApp(config);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lightweight-back-office.firebaseio.com',
})

type AuthEntity = {
  username: string
  password: string
}

function getCredentialsFromBody(body: any): AuthEntity {
  const {
    input: {
      arg: { username, password },
    },
  } = body
  return {
    username: username,
    password: password,
  }
}

function getUidFromResponse(body: any): string {
  const {
    user: { uid },
  } = body
  return uid
}

function getTokenFromFirebase(auth: AuthEntity): Promise<any> {
  // TODO: find signIn function in firebase-admin
  return firebase.default
    .auth()
    .signInWithEmailAndPassword(auth.username, auth.password)
}

//initialize express server
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({ origin: true }))

// Expose Express API as a single Cloud Function:
exports.getToken = functions.region('europe-west1').https.onRequest(app)

app.post('/', function (req: any, res: any) {
  try {
    const auth = getCredentialsFromBody(req.body)
    getTokenFromFirebase(auth)
      .then((data: any) => {
        const uid = getUidFromResponse(data)
        console.log(`[INFO]: Logged as: ${uid}`)
        if (!uid) res.status(400).json({ msg: 'No uid returned' })
        admin
          .auth()
          .createCustomToken(uid)
          .then((customToken: any) => {
            res.status(200).json({ accessToken: customToken })
          })
          .catch((error: any) => {
            res.status(400).json({ msg: `Error on token creation: ${error}` })
          })
      })
      .catch((error: any) => {
        console.log(`[INFO]: Error Loggin: ${error}`)
        res.status(400).json({ msg: error })
      })
  } catch (e) {
    console.log(`[ERROR]: Error in the payload: ${e}`)
    res.status(400).json({ msg: 'Error in the payload' })
  }
})

app.get('/', function (req: any, res: any) {
  res.send('Get token')
})
