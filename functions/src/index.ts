const indexQuestion = require('./hasuraWebhooks/indexQuestion')
const createClaims = require('./token/createClaims')
const verifyToken = require('./token/verifyToken')
const getToken = require('./token/getToken')

exports.indexQuestion = indexQuestion.indexQuestion
exports.createClaims = createClaims.processSignUp
exports.verifyToken = verifyToken.verifyToken
exports.getToken = getToken.getToken
