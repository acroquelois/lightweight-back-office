import * as functions from 'firebase-functions'
import { adminApp, region } from '../config'

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.post('/', function (req: any, res: any) {
  try {
    const {
      data: { idToken },
    } = req.body
    adminApp
      .auth()
      .verifyIdToken(idToken)
      .then(() => {
        res.status(204)
      })
      .catch(() => {
        res.status(400).json({ msg: 'token is invalid or expired' })
      })
  } catch (e) {
    functions.logger.error(`Error in the payload: ${e}`)
    res.status(400).json({ msg: 'Error in the payload' })
  }
})

// Expose Express API as a single Cloud Function:
exports.verifyToken = functions.region(region).https.onRequest(app)
