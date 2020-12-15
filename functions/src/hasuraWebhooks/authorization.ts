const functions = require('firebase-functions')
const express = require('express')
const firebaseRouter = express.Router()
const admin = require('firebase-admin')
var error: any = null

import { config } from '../config'

// Initialize the Firebase admin SDK with your service account credentials
if (config) {
  try {
    admin.initializeApp(config)
  } catch (e) {
    error = e
  }
}

firebaseRouter.route('/webhook').get((request: any, response: any) => {
  // Throw 500 if firebase is not configured
  if (!config) {
    response.status(500).send('Firebase not configured')
    return
  }
  // Check for errors initializing firebase SDK
  if (error) {
    response.status(500).send('Invalid firebase configuration')
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
    admin
      .auth()
      .verifyIdToken(idToken)
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
exports.authorization = functions.region('europe-west1').https.onRequest(firebaseRouter)
