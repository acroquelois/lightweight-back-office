import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

admin.initializeApp(functions.config().firebase)

const indexQuestion = require('./hasuraWebhooks/indexQuestion')
const getToken = require('./hasuraWebhooks/getToken')

exports.indexQuestion = indexQuestion.indexQuestion
exports.getToken = getToken.getToken
