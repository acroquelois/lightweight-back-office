import * as functions from 'firebase-functions'
import { userApp, region } from '../config'

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({ origin: true }))
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

app.post('/', function (req: any, res: any) {
  try {
    const auth = getCredentialsFromBody(req.body)
    userApp
        .auth()
        .signInWithEmailAndPassword(auth.username, auth.password)
        .then((user) => {
          user.user?.getIdTokenResult().then((idToken) => {
            res.status(200).json({ accessToken: idToken.token })
          })
        })
        .catch((error: any) => {
          functions.logger.info(`Error Loggin: ${error}`)
          res.status(400).json({ msg: error })
        })
  } catch (e) {
    functions.logger.error(`Error in the payload: ${e}`)
    res.status(400).json({ msg: 'Error in the payload' })
  }
})
// Expose Express API as a single Cloud Function:
exports.getToken = functions.region(region).https.onRequest(app)
