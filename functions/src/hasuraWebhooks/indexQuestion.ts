import * as functions from 'firebase-functions'
import { AxiosRequestConfig } from 'axios'
import { hasuraURL, elacticURL, region } from '../config'

const axios = require('axios')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

function getQuestionIdFromPayload(payload: any) {
  const {
    event: {
      data: {
        new: { Id, IsPublie },
      },
    },
  } = payload
  return {
    Id: Id,
    IsPublie: IsPublie,
  }
}

function buildGetBody(id: any) {
  return `{
  "query":
    "query MyQuery {
      Questions_by_pk(Id:${id}) {
      Id
      IsPublie
      Libelle
      QuestionAnswer {
        Id
        Libelle
      }
      QuestionPropositions {
        Id
        Libelle
      }
      QuestionCategory {
        Id
        Libelle
      }
    }
  }"
}
`
}

function buildDeleteBody(questionId: any) {
  return `{
  "query": {
      "term": {
        "Id": {
          "value": ${questionId}
          }
        }
  }
}`
}

async function getQuestionByPk(questionId: any) {
  const options: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return axios
    .post(`${hasuraURL}/v1/graphql`, buildGetBody(questionId), options)
    .then((body: any) => {
      const {
        data: {
          data: { Questions_by_pk },
        },
      } = body
      return Questions_by_pk
    })
    .catch(() => {
      functions.logger.error(`Can't get question: ${questionId}`)
    })
}
async function indexQuestion(questionId: any) {
  const question = await getQuestionByPk(questionId)
  return axios.post(`${elacticURL}/questions/_doc/`, question)
}

async function removeIndexQuestion(questionId: any): Promise<any> {
  return axios.post(
    `${elacticURL}/questions/_delete_by_query`,
    buildDeleteBody(questionId),
  )
}
app.post('/', async function (req: any, res: any) {
  try {
    const { Id, IsPublie } = getQuestionIdFromPayload(req.body)
    if (IsPublie) {
      indexQuestion(Id)
        .then(() => {
          functions.logger.info(`Question ${Id} was indexed`)
          res.status(200).json({ msg: 'Question indexation success' })
        })
        .catch(() => {
          functions.logger.warn(`Indexation failed for question: ${Id}`)
          res.status(500).json({ msg: 'Question indexation failed' })
        })
    } else {
      removeIndexQuestion(Id)
        .then(() => {
          functions.logger.info(`Question ${Id} was deindexed`)
          res.status(200).json({ msg: 'Question deindexed success' })
        })
        .catch(() => {
          functions.logger.warn(`Indexation failed for question: ${Id}`)
          res.status(500).json({ msg: 'Question deindexed failed' })
        })
    }
  } catch (e) {
    functions.logger.error(`Error in the payload`)
    res.status(500).json({ msg: 'Error in the payload' })
  }
})

app.get('/', function (req: any, res: any) {
  res.send('Hello World - For Event Triggers, try a POST request?')
})

// Expose Express API as a single Cloud Function:
exports.indexQuestion = functions.region(region).https.onRequest(app)
