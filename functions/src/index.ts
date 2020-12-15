const indexQuestion = require('./hasuraWebhooks/indexQuestion')
const getToken = require('./hasuraWebhooks/getToken')
const authorization = require('./hasuraWebhooks/authorization')

exports.indexQuestion = indexQuestion.indexQuestion
exports.getToken = getToken.getToken
exports.authorization = authorization.authorization
