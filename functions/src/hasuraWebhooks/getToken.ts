import { adminApp, firebaseApp, func } from '../config'

const express = require('express')

const app = express()
app.use(express.json())

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
  return firebaseApp
    .auth()
    .signInWithEmailAndPassword(auth.username, auth.password)
}

app.post('/', function (req: any, res: any) {
  try {
    const auth = getCredentialsFromBody(req.body)
    getTokenFromFirebase(auth)
      .then((data: any) => {
        const uid = getUidFromResponse(data)
        console.log(`[INFO]: Logged as: ${uid}`)
        if (!uid) res.status(400).json({ msg: 'No uid returned' })
        adminApp
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

// Expose Express API as a single Cloud Function:
exports.getToken = func.https.onRequest(app)