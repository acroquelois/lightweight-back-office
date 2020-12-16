import serviceAccount from '../service_account.json'
import { adminApp, func } from '../config'

const express = require('express')

const app = express()
app.use(express.json())

var error: any = null

app.get('/', (request: any, response: any) => {
  // Throw 500 if firebase is not configured
  if (!serviceAccount) {
    response.status(500).json('Firebase not configured')
    return
  }
  // Check for errors initializing firebase SDK
  if (error) {
    response.status(500).json('Invalid firebase configuration')
    return
  }
  // Get authorization headers
  const authHeaders = request.get('Authorization')
  // Send anonymous role if there are no auth headers
  if (!authHeaders) {
    response.json({ 'x-hasura-role': 'anonymous' })
    return
  } else {
    // Validate the received id_token
    const idToken = extractToken(authHeaders)
    console.log(idToken)
    adminApp
      .auth()
      .verifyIdToken(idToken!)
      .then((decodedToken: any) => {
        const hasuraVariables = {
          'X-Hasura-User-Id': decodedToken.uid,
          'X-Hasura-Role': 'user',
        }
        console.log(hasuraVariables) // For debug
        // Send appropriate variables
        response.json(hasuraVariables)
      })
      .catch((e: any) => {
        // Throw authentication error
        console.log(e)
        response.json({ 'x-hasura-role': 'anonymous' })
      })
  }
})

const extractToken = (bearerToken: any) => {
  const regex = /^(Bearer) (.*)$/g
  const match = regex.exec(bearerToken)
  if (match && match[2]) {
    return match[2]
  }
  return null
}

// Expose Express API as a single Cloud Function:
exports.authorization = func.https.onRequest(app)
