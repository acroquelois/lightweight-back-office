import * as functions from 'firebase-functions'
import { adminApp, region } from '../config'

// On sign up.
exports.processSignUp = functions
  .region(region)
  .auth.user()
  .onCreate((user: any) => {
    functions.logger.info(`create claims for user ${user.uid}`)
    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'user',
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-user-id': user.uid,
      },
    }

    return adminApp.auth().setCustomUserClaims(user.uid, customClaims)
  })
